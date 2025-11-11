import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store.jsx";
import { Link } from "react-router-dom";

const Home = () => {
  const { store, actions } = useContext(Context);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const res = await fetch("https://swapi.dev/api/people/");
      const data = await res.json();
      setCharacters(data.results);
    };
    fetchCharacters();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Star Wars Characters</h1>
      <div className="row">
        {characters.map((char, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card shadow">
              <img
                src={`https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`}
                className="card-img-top"
                alt={char.name}
              />
              <div className="card-body">
                <h5 className="card-title">{char.name}</h5>
                <Link to={`/single/${index + 1}`} className="btn btn-primary">
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

export default Home;
