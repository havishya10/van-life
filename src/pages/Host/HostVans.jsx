import React from "react";
export default function HostVans() {
  const [hostVans, setHostVans] = React.useState([]);
  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setHostVans(data.vans));
  }, []);
  const vanList = hostVans.map((van) => {
    return (
      <div className="host-vans-container" key={van.id}>
        <img src={van.imageUrl} />
        <div className="host-van-info">
          <h2>{van.name}</h2>
          <p>{van.description}</p>
          <button className={`${van.type}`}>Edit</button>
          <button className={`${van.type}`}>Delete</button>
        </div>
      </div>
    );
  });
  return (
    <section className="host-vans">
      <h1>Your listed Vans</h1>
      {vanList}
    </section>
  );
}
