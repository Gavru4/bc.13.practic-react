import { Link } from "react-router-dom";
const btnStyles = {
  padding: "10px",
  marginRight: "20px",
  marginBottom: "20px",
  borderRadius: "10px",
  outline: "none",
  border: "2px solid #212121",
  textDecoration: "none",
  color: "#212121",
};
function MainBtns() {
  return (
    <>
      <Link style={btnStyles} to={"/transactions/incomes"}>
        Incomes
      </Link>
      <Link style={btnStyles} to={"/transactions/costs"}>
        Costs
      </Link>
    </>
  );
}

export default MainBtns;
