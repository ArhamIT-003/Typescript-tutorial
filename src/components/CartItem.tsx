import { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import data from "../data/items.json";
import { Stack, Button } from "react-bootstrap";
import { formatCurrency } from "../utils/CurrencyFormater";

type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
  const { deleteFromCart } = useContext(ShoppingCartContext);
  const item = data.find((item) => item.id === id);
  if (item == null) return null;
  return (
    <Stack
      direction="horizontal"
      gap={2}
      className="d-flex justify-content-center align-items-center"
    >
      <img
        src={item.img}
        alt=""
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-muted fs-10">{quantity}x</span>
          )}{" "}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div style={{ fontSize: "" }}>
        {formatCurrency(item.price * quantity)}
      </div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => {
          deleteFromCart(item.id);
        }}
      >
        x
      </Button>
    </Stack>
  );
};

export default CartItem;
