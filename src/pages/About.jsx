import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import aboutImage from "../assets/images/about-image.png";
export default function About() {
  return (
    <section className="about-section">
      <img
        className="about-img"
        src={aboutImage}
        alt="Van parked in the forest"
      />

      <div className="about-section-text-container">
        <h1>Dont squeeze in a sedan when you could relax in a van</h1>
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
        <div className="about-section-explore">
          <h2>Your destination is waiting.</h2>
          <h2>Your van is ready.</h2>
          <button>Explore our vans</button>
        </div>
      </div>
    </section>
  );
}
