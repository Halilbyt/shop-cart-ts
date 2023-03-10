import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import currencyFormat from "../utilities/currencyFormat";

type CartItemProps = {
  id: Number;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeItem } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) {
    return null;
  }
  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.img}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: "0.65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {currencyFormat(item.price)}
        </div>
      </div>
      <div> {currencyFormat(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeItem(item.id)}>
        &times;
      </Button>
    </Stack>
  );
};

export default CartItem;
