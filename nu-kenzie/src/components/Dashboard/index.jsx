import "./index.css";
import "../../css/form.css";
import "../../css/header.css";
import "../../css/button.css";
import "../../css/input.css";
import "../../css/text.css";
import "../../css/sectionPrice.css";
import logo from "../../assets/img/NuKenzieLight.svg";
import { Card } from "../Card";
import { useState } from "react";

import { BiTrash } from "react-icons/bi";

export const Dashboard = ({ children }) => {
  const [card, setCard] = useState([]);
  const [listing, setListing] = useState(card);

  const [description, setDescription] = useState("");
  const [type, setType] = useState("Entrada");
  const [money, setMoney] = useState();

  const [total, setTotal] = useState(0);

  const addFinance = (event) => {
    event.preventDefault();
    if (type === "Despesa") {
      setMoney(-Math.abs(money));
      console.log(money);
    }
    if (type === "Entrada") {
      setMoney(Math.abs(money));
    }

    setCard([...card, { description, type, money }]);
    setListing([...card, { description, type, money }]);
    totalBalance();
  };

  const deleteCard = (element) => {
    const filterCard = card.filter((item) => item !== element);
    setCard(filterCard);
  };

  const filterCard = (event) => {
    const cardFilter = card.filter((element) => element.type === event);
    setListing(cardFilter);
  };

  const everyCard = () => {
    setListing(card);
  };

  const totalBalance = () => {
    const totalPrice = card.reduce((acc, act) => acc + act.money, 0);
    return setTotal(totalPrice);
  };

  return (
    <div className="container">
      <header className="header">
        <div>
          <img src={logo} alt="Logo da Nu Kenzie" />
          {children}
        </div>
      </header>
      <main className="main">
        <div className="fisrtDiv">
          <form className="form">
            <div>
              <label htmlFor="description">Descrição</label>
              <input
                name="description"
                type="text"
                placeholder="Digite aqui sua descrição"
                onChange={(event) => setDescription(event.target.value)}
              />
              <span>Ex: Compra de roupas</span>
            </div>
            <div className="price">
              <div>
                <p>Valor</p>
                <input
                  type="number"
                  placeholder="1"
                  onChange={(event) => setMoney(event.target.valueAsNumber)}
                />
              </div>
              <div>
                <p>Tipo de Valor</p>
                <select
                  name=""
                  id=""
                  onChange={(event) => setType(event.target.value)}
                >
                  <option value="Entrada">Entrada</option>
                  <option value="Despesa">Despesa</option>
                </select>
              </div>
            </div>
            <button type="submit" className="active enter" onClick={addFinance}>
              Inserir valor
            </button>
          </form>

          <section className="totalBalance">
            <div>
              <h3>Valor total:</h3>
              <h3>
                {total.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </h3>
            </div>
            <p>O valor se refere ao saldo</p>
          </section>
        </div>

        <section className="control">
          <div>
            <h3>Resumo financeiro</h3>
            <nav>
              <button onClick={everyCard} className="active">
                Todos
              </button>
              <button
                value="Entrada"
                onClick={(event) => filterCard(event.target.value)}
              >
                Entrada
              </button>
              <button
                value="Despesa"
                onClick={(event) => filterCard(event.target.value)}
              >
                Despesa
              </button>
            </nav>
          </div>

          <ul>
            {listing.length === 0 ? (
              <h2>Você ainda não possui nenhum lançamento</h2>
            ) : (
              listing.map((element, index) => {
                const { description, type, money } = element;
                return (
                  <Card
                    key={index}
                    description={description}
                    type={type}
                    value={money}
                  >
                    <button onClick={() => deleteCard(element)}>
                      <BiTrash />
                    </button>
                  </Card>
                );
              })
            )}
          </ul>
        </section>
      </main>
    </div>
  );
};
