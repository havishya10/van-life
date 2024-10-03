import React from "react";
import { Link } from "react-router-dom";
export default function HostVans() {
  const [hostVans, setHostVans] = React.useState([]);
  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setHostVans(data.vans));
  }, []);
  const vanList = hostVans.map((van) => {
    return (
      <Link
        to={`/host/host-vans/${van.id}`}
        className="host-vans-container"
        key={van.id}
      >
        <div>
          <img src={van.imageUrl} />
        </div>
        <div className="host-van-info">
          <h2>{van.name}</h2>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
      </Link>
    );
  });
  return (
    <section>
      <h1 className="hostVans-heading">Your listed Vans</h1>
      <div className="host-vans">{vanList}</div>
    </section>
  );
}
