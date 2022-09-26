import logo from "../../assets/img/NuKenzie.svg";
import imgHome from "../../assets/img/Group 262.svg";
import "./index.css";

export const HomePages = ({children}) => {
  return (
    <main className="App-Main">
      <div>
        <img src={logo} alt="Logo Nu Kenzie" />
        <h1>Centralize o controle das suas finanças</h1>

        <span>de forma rápida e segura</span>

        {children}
      </div>
      <figure>
        <img src={imgHome} alt="" />
      </figure>
    </main>
  );
};
