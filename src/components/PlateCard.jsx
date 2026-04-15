import { Link } from "react-router-dom";

export default function PlateCard({ id, name, price, is_available }) {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition bg-white">
      <Link to={`/plates/${id}`}>
        <h2 className="text-lg font-semibold text-green-600">
          {name}
        </h2>
      </Link>

      <p className="text-gray-700 mt-1">{price} MAD</p>

      {is_available ? (
        <span className="inline-block mt-2 text-green-600 text-sm font-medium">
          Disponible
        </span>
      ) : (
        <span className="inline-block mt-2 text-red-500 text-sm font-medium">
          Non disponible
        </span>
      )}
    </div>
  );
}