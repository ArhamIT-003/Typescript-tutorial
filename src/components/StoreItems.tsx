import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { formatCurrency } from "../utils/CurrencyFormater";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { useContext } from "react";

type StoreItemsProps = {
  id: number;
  name: string;
  price: number;
  img: string;
};

const StoreItems = ({ id, img, price, name }: StoreItemsProps) => {
  const Shopping = useContext(ShoppingCartContext);

  const quantity = Shopping.getProductQuantity(id);

  return (
    <Card className="shadow-sm mb-3">
      <Card.Img
        variant="top"
        src={img}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline my-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 fs-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>

        {quantity === 0 ? (
          <Button
            variant="primary"
            onClick={() => {
              Shopping.addOneToCart(id);
            }}
          >
            Add to cart
          </Button>
        ) : (
          <div
            className="d-flex flex-column justify-content-center align-items-center"
            style={{ gap: ".5rem" }}
          >
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ gap: ".5rem" }}
            >
              <Button
                onClick={() => {
                  Shopping.addOneToCart(id);
                }}
              >
                +
              </Button>
              <span>{quantity} in cart</span>
              <Button
                onClick={() => {
                  Shopping.removeOneFromCart(id);
                }}
              >
                -
              </Button>
            </div>
            <Button
              variant="danger"
              onClick={() => {
                Shopping.deleteFromCart(id);
              }}
            >
              remove
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default StoreItems;
