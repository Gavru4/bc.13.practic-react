import { Link } from "react-router-dom";

function MainBtns() {
  return (
    <>
      <Link className="link" to={"/transactions/incomes"}>
        Incomes
      </Link>
      <Link className="link" to={"/transactions/costs"}>
        Costs
      </Link>
    </>
  );
}

export default MainBtns;
