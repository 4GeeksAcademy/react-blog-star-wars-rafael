import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";

const Single = () => {
  const { id } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const type = queryParams.get("type") || "people";

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await fetch(`https://swapi.dev/api/${type}/${id}/`);
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching details:", error);
      }
    };
    fetchDetails();
  }, [id, type]);

  if (!data) return <div className="text-center mt-5">Loading...</div>;

  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-5 text-center">
          <img
            src={`https://starwars-visualguide.com/assets/img/${type}/${id}.jpg`}
            alt={data.name}
            className="img-fluid rounded shadow"
            onError={(e) =>
              (e.target.src =
                "https://starwars-visualguide.com/assets/img/placeholder.jpg")
            }
          />
        </div>
        <div className="col-md-7">
          <h2>{data.name}</h2>
          <ul className="list-group list-group-flush">
            {Object.entries(data).map(([key, value]) => (
              <li className="list-group-item" key={key}>
                <strong>{key}: </strong> {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Single;
