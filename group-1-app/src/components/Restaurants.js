import React, { useState, useEffect } from 'react';

function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
<<<<<<< HEAD
    fetch('https://raw.githubusercontent.com/brian-njoro/project-api/main/restaurants.json')
=======
    fetch("http://localhost:3001/restaurants")
>>>>>>> 5ec617b (initial commit)
      .then(response => response.json())
      .then(data => setRestaurants(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
    <div>
      <h1> Available Restaurants</h1>
    </div>
    <div className="restaurant-list">
      {restaurants.map(restaurant => (
        <div key={restaurant.id} className="restaurant-card">
          <img src={restaurant.logo} alt={restaurant.name} className="restaurant-logo" />
          <h2 className="restaurant-name">{restaurant.name}</h2>
          <p className="restaurant-contact">{restaurant.contact}</p>
        </div>
      ))}
    </div>
    </>
  );
}

export default Restaurants;
