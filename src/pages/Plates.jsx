import { useState } from "react";
import PlateCard from "../components/PlateCard";

function Plates() {
  const plates = [
    { id: 1, name: "dfghj", price: 50, is_available: true },
    { id: 2, name: "ftgyh", price: 40, is_available: false },
    { id: 3, name: "dfghj", price: 35, is_available: true },
    { id: 4, name: "sdfg", price: 30, is_available: false },
    { id: 5, name: "fghj", price: 45, is_available: true }
  ];

  const [search, setSearch] = useState("");

  const filtered = plates.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Plates</h1>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filtered.length === 0 && <p>Aucun plat trouvé.</p>}

      {filtered.map((plate) => (
        <PlateCard
          key={plate.id}
          id={plate.id}      
          name={plate.name}
          price={plate.price}
          is_available={plate.is_available}
        />
      ))}
    </div>
  );
}

export default Plates;