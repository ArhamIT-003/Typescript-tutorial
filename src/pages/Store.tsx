import StoreItems from "../components/StoreItems";
import items from "../data/items.json";
import { Row, Col } from "react-bootstrap";
const Store = () => {
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {items.map((item, index) => (
          <Col key={index}>
            <StoreItems {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;
