import React, {useState, useEffect} from 'react'

// ... (import statements and other code)

export default function FoodFilter() {
    const [foods, setFoods] = useState([]);
    const [restaurants, setRestaurants] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
  
    useEffect(() => {
<<<<<<< HEAD
      fetch('https://raw.githubusercontent.com/brian-njoro/project-api/main/foods.json')
=======
      fetch("http://localhost:3001/food")
>>>>>>> 5ec617b (initial commit)
        .then(response => response.json())
        .then(data => setFoods(data))
        .catch(error => console.error('Error fetching food data:', error));
  
<<<<<<< HEAD
      fetch('https://raw.githubusercontent.com/brian-njoro/project-api/main/restaurants.json')
=======
      fetch("http://localhost:3001/restaurants")
>>>>>>> 5ec617b (initial commit)
        .then(response => response.json())
        .then(data => setRestaurants(data))
        .catch(error => console.error('Error fetching restaurant data:', error));
    }, []);
  
    const handleSearchChange = (event) => {
      setSearchQuery(event.target.value);
    };
  
    const filteredFoods = foods.filter((food) =>
      food.food.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    return (
      <div> 
        <input
          type="text"
          placeholder="Search for a food..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <div>
          {searchQuery && filteredFoods.length > 0 ? (
            filteredFoods.map((food) => (
              <div key={food.id}>
                <img src={food.image} alt={food.food} className='food-image' />
                <p>{food.food}</p>
                <p>Restaurants:</p>
                <ul>
                  <li>
                    {restaurants.find((restaurant) => restaurant.id === food.restaurant_id)?.name}
                  </li>
                </ul>
              </div>
            ))
          ) : (
            //if none is found matching the search//
            <p>No results found.</p>
          )}
        </div>
      </div>
    );
  }
