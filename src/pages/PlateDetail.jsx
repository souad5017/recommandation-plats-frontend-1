import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";

function PlateDetail() {
  const { id } = useParams();

  const [plate, setPlate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPlate = async () => {
      try {
        const res = await api.get(`/plates/${id}`);
        setPlate(res.data);
      } catch (err) {
        setError("Erreur");
      } finally {
        setLoading(false);
      }
    };

    fetchPlate();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{plate.name}</h1>
      <p>{plate.price} MAD</p>
    </div>
  );
}

export default PlateDetail;