import "./index.css";

export const Card = (promps) => {
  return (
    <li className={promps.type === "Entrada" ? "card_enter" : ""}>
      <div>
        <h3>{promps.description}</h3>
        <p>{promps.type}</p>
      </div>
      <div>
        <p>
          {promps.value.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>

        {promps.children}
      </div>
    </li>
  );
};
