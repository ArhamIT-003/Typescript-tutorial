import { Offcanvas, Stack } from "react-bootstrap";
import data from "../data/items.json";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { useContext } from "react";
import CartItem from "./CartItem";
import { formatCurrency } from "../utils/CurrencyFormater";
type ShoppingCartProps = {
  isOpen: boolean;
};

const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
  const { closeToCart, items } = useContext(ShoppingCartContext);
  return (
    <Offcanvas show={isOpen} placement="end" onHide={closeToCart}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={4}>
          {items.map((item, index) => (
            <CartItem key={index} {...item} />
          ))}
          <div className="ms-auto fs-5 fw-bold">
            Total:{" "}
            {formatCurrency(
              items.reduce((total, cartItem) => {
                const item = data.find((i) => i.id === cartItem.id);
                return total + item.price * cartItem.quantity;
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart;
