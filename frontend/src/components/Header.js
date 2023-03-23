import { Link } from "react-router-dom";
import { useHistory } from "react-router";

// Navbar HEader of the Portal
export function Header(props) {
  const history = useHistory();

  function handleLogOut() {
    localStorage.removeItem("userToken");
    history.push("/login");
  }

  const decoration = { textDecoration: "none", color: "white" };
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark flex ">
        <div className=" nav_links w-100 text-light d-flex">
          <div className="back-link">
            <Link to="/home" className="w-100" style={decoration}>
              <h1 className="title">Home</h1>
            </Link>
          </div>
          <Link to="/home" className="w-100" style={decoration}>
            <h1 className=" head title">
              <i>Easy Rent</i>
            </h1>
          </Link>

          <div>
            <h3 className="title logout" onClick={() => handleLogOut()}>
              Logout
            </h3>
          </div>

          <div className="nav-cart align-items-center ">
            <Link
              to="/checkout"
              className="d-flex fa fa-shopping-cart"
              style={decoration}
            >
              <span className="ms-1">{props.cartItems.length}</span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
