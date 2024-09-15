import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
export default function VanDetails() {
  const params = useParams();
  const [van, setVan] = React.useState(null);

  React.useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  return (
    <section className="van-details-page">
      <Link to="/vans">
        <p>
          <i className="fa-solid fa-arrow-left"></i> Back to all vans
        </p>
      </Link>
      {van && (
        <div className="van-details">
          <img src={van.imageUrl} />
          <div className="van-details-info">
            <button className={`${van.type}`}>{van.type}</button>
            <h1>{van.name}</h1>
            <h2>
              ${van.price}
              <span>/day</span>
            </h2>
            <p>{van.description}</p>
            <button className={`${van.type}`}>Rent this van </button>
          </div>
        </div>
      )}
    </section>
  );
}
