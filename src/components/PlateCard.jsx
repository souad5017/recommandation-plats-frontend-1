import { Link } from "react-router-dom";

export default function PlateCard({ id, name, price, is_available }) {
  return (
    <div>
      <Link to={`/plates/${id}`}>
        <h2>{name}</h2>
      </Link>
      <p>{price} MAD</p>
      {is_available && <span>Disponible</span>}
    </div>
  );
}