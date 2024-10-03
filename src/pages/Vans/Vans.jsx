import React from "react";
import { Link } from "react-router-dom";

export default function Vans() {
  const [vans, setVans] = React.useState([]);
  React.useEffect(() => {
    fetch("api/vans")
      .then((res) => res.json())
      .then((data) => {
        console.log(vans);
        setVans(data.vans);
      });
  }, []);

  const vanEl = vans.map((van) => {
    return (
      <Link to={`/vans/${van.id}`} key={van.id}>
        <div key={van.id} className="van-card">
          <img src={van.imageUrl} />
          <div className="van-info">
            <h3>{van.name}</h3>
            <p>
              ${van.price}
              <span>/day</span>
            </p>
          </div>
          <button className={`${van.type}`}>{van.type}</button>
        </div>
      </Link>
    );
  });
  return (
    <section className="van-container">
      <h1>Explore our van options</h1>
      <div className="van-filter-container">
        <ul className="van-tags">
          <li>Simple</li>
          <li>Luxury</li>
          <li>Rugged</li>
        </ul>
        <p>Clear filters</p>
      </div>
      <div className="van-cards">{vanEl}</div>
    </section>
  );
}
