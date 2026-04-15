import { useEffect, useState } from "react";
import api from "../api/axios";
import PlateCard from "../components/PlateCard";

export default function Plates() {
  const [plates, setPlates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlates = async () => {
      try {
        const res = await api.get("/plats");
        setPlates(res.data);
      } catch (err) {
        setError("Error loading plates");
      } finally {
        setLoading(false);
      }
    };

    fetchPlates();
  }, []);

  if (loading) return <p className="p-6">Loading...</p>;
  if (error) return <p className="p-6 text-red-500">{error}</p>;

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      {plates.map((plate) => (
        <PlateCard key={plate.id} {...plate} />
      ))}
    </div>
  );
}