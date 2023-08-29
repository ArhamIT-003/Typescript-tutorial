import { Navbar as NavbarBs, Nav } from "react-bootstrap";
import { Container, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { useContext } from "react";
const Navbar = () => {
  const { openToCart, cartQuantity } = useContext(ShoppingCartContext);

  return (
    <NavbarBs className="bg-white shadow-sm mb-3" sticky="top">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
        </Nav>

        {cartQuantity > 0 && (
          <Button
            style={{ height: "3rem", width: "3rem", position: "relative" }}
            variant="outline-primary"
            className="rounded-circle"
            onClick={() => {
              openToCart;
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.5 10M18 5l-1-3H5.236a2 2 0 00-1.977 1.664l-2.023 10a2 2 0 002.122 2.336l11.643-.482a2 2 0 001.878-1.88l.47-7.014a1 1 0 011.986.182l.45 7.27a2 2 0 001.847 1.879L23 16"></path>
            </svg>
            <div
              style={{
                position: "absolute",
                width: "20px",
                height: "20px",
                right: 0,
                bottom: 0,
                transform: "translate(25%, 25%)",
              }}
              className="bg-danger rounded-circle text-white d-flex justify-content-center align-items-center"
            >
              {cartQuantity}
            </div>
          </Button>
        )}
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
