import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";

export default function PlateDetail() {
  const { id } = useParams();

  const [plate, setPlate] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlate = async () => {
      const res = await api.get(`/plats/${id}`);
      setPlate(res.data);
      setLoading(false);
    };

    fetchPlate();
  }, [id]);

  if (loading) return <p className="p-6">Loading...</p>;
  if (!plate) return <p className="p-6">Not found</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{plate.name}</h1>
      <p className="mt-2">{plate.price} MAD</p>

      {plate.is_available ? (
        <p className="text-green-600 mt-2">Disponible</p>
      ) : (
        <p className="text-red-500 mt-2">Non disponible</p>
      )}
    </div>
  );
}