import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


export const Product = (curElem) => {
  const { id, name, image, price, category } = curElem;

  return (
    <NavLink to={`/productview/${id}`}  style={{textDecoration:"none"}}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body style={{ display: "flex", justifyContent: "space-between" }}>
          <Card.Text>{name}</Card.Text>
          <Card.Text>
          ₹{" "}
            {(price / 100)}
          </Card.Text>
        </Card.Body>
      </Card>
    </NavLink>
  );
};

