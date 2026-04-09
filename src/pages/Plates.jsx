import { useEffect, useState } from "react";
import PlateCard from "../components/PlateCard";
import api from "../api/axios";

function Plates() {
  const [plates, setPlates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchPlates = async () => {
      try {
        const res = await api.get("/plates");
        setPlates(res.data);
      } catch (err) {
        setError("Erreur lors du chargement");
      } finally {
        setLoading(false);
      }
    };

    fetchPlates();
  }, []);

  const filtered = plates.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Plates</h1>

      <input
        type="text"
        placeholder="Rechercher..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 my-4"
      />

      {filtered.length === 0 && <p>Aucun plat trouvé</p>}

      {filtered.map((plate) => (
        <PlateCard key={plate.id} {...plate} />
      ))}
    </div>
  );
}

export default Plates;