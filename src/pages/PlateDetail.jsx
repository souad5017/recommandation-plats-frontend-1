import { useParams } from "react-router-dom";

function PlateDetail() {
  const { id } = useParams();

  return (
    <div>
      <h1>Détail du plat</h1>
      <p>ID: {id}</p>
    </div>
  );
}

export default PlateDetail;