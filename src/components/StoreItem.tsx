import { Card, Button } from "react-bootstrap";
import currencyFormat from "../utilities/currencyFormat";
import { useShoppingCart } from "../context/ShoppingCartContext";

interface StoreItemProps {
  id: number;
  name: string;
  price: number;
  img: string;
}

const StoreItem = ({ id, name, price, img }: StoreItemProps) => {
  const { getQuantity, increaseQuantity, decreaseQuantity, removeItem } =
    useShoppingCart();
  const quantity = getQuantity(id);

  return (
    <Card className="h-100 bg-dark text-warning">
      <Card.Img
        variant="top"
        src={img}
        height="200px"
        width="400"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title
          className="d-flex justify-content-between 
         align-items-baseline mb-4">
          <span className="fs-3">{name}</span>
          <span className="ms-4  text-warning text-muted">
            {currencyFormat(price)}
          </span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button
              onClick={() => increaseQuantity(id)}
              className="btn btn-warning w-100">
              Add to Cart
            </Button>
          ) : (
            <div className="d-flex flex-column align-items-center">
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".6rem" }}>
                <Button
                  onClick={() => decreaseQuantity(id)}
                  className="btn btn-warning">
                  -
                </Button>
                <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>

                <Button
                  onClick={() => increaseQuantity(id)}
                  className="btn btn-warning">
                  +
                </Button>
              </div>
              <Button variant="warning" size="sm" className="mt-2">
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
