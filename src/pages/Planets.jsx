import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Planets = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      const res = await fetch("https://swapi.dev/api/planets/");
      const data = await res.json();
      setPlanets(data.results);
    };
    fetchPlanets();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Star Wars Planets</h1>
      <div className="row">
        {planets.map((planet, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card shadow">
              <img
                src={`https://starwars-visualguide.com/assets/img/planets/${index + 1}.jpg`}
                className="card-img-top"
                alt={planet.name}
                onError={(e) =>
                  (e.target.src =
                    "https://starwars-visualguide.com/assets/img/placeholder.jpg")
                }
              />
              <div className="card-body text-center">
                <h5 className="card-title">{planet.name}</h5>
                <Link
                  to={`/single/${index + 1}?type=planet`}
                  className="btn btn-primary"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Planets;
