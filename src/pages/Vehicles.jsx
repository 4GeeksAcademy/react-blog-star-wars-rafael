import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      const res = await fetch("https://swapi.dev/api/vehicles/");
      const data = await res.json();
      setVehicles(data.results);
    };
    fetchVehicles();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Star Wars Vehicles</h1>
      <div className="row">
        {vehicles.map((vehicle, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card shadow">
              <img
                src={`https://starwars-visualguide.com/assets/img/vehicles/${index + 1}.jpg`}
                className="card-img-top"
                alt={vehicle.name}
                onError={(e) =>
                  (e.target.src =
                    "https://starwars-visualguide.com/assets/img/placeholder.jpg")
                }
              />
              <div className="card-body text-center">
                <h5 className="card-title">{vehicle.name}</h5>
                <Link
                  to={`/single/${index + 1}?type=vehicle`}
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

export default Vehicles;
