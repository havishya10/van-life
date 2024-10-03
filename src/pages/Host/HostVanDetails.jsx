import React from "react";
import { useParams, Link } from "react-router-dom";
export default function HostVanDetails() {
  const params = useParams();
  const [hostVan, setHostVans] = React.useState(null);

  React.useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setHostVans(data.vans));
  }, [params.id]);
  return (
    <section className="van-details-page">
      <Link to="/host/host-vans">
        <p>
          <i className="fa-solid fa-arrow-left"></i> Back to all vans
        </p>
      </Link>
      {hostVan && (
        <div className="host-van-details">
          <div className="host-img-grid">
            <img src={hostVan.imageUrl} />
            <div className="host-van-head">
              <button className={`${hostVan.type}`}>{hostVan.type}</button>
              <h1>{hostVan.name}</h1>
              <h2>
                ${hostVan.price}
                <span>/day</span>
              </h2>
            </div>
          </div>
          <div className="host-van-info">
            <nav>
              <ul>
                <li>
                  <Link>Details</Link>
                </li>
                <li>
                  <Link>Pricing</Link>
                </li>
                <li>
                  <Link>Photos</Link>
                </li>
              </ul>
            </nav>
            <div className="host-van-details-text-container">
              <p>
                <b>Name:</b> {hostVan.name}
              </p>
              <p>
                <b>Category:</b> {hostVan.type}
              </p>
              <p className="host-van-desc">
                <b>Description:</b> {hostVan.description}
              </p>
              <p>
                <b>Visibility:</b> Public
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
