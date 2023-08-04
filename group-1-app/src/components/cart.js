import React, { useState, useEffect } from "react";

function Cart() {
  const [food, setFood] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
<<<<<<< HEAD
    fetch("https://raw.githubusercontent.com/brian-njoro/project-api/main/foods.json")
=======
    fetch("http://localhost:3001/food")
>>>>>>> 5ec617b (initial commit)
      .then((response) => response.json())
      .then((data) => setFood(data));
  }, []);

  function remove(index) {
    alert("Item removed!");
    setCartItems(cartItems.filter((_, i) => i !== index));
  }

  function added(item) {
    alert("Item added!");
    setCartItems([...cartItems, item]);
  }

  return (
    <>
    <div>
      <h1>Food Available</h1>
    </div>
    <div className="Container">
      {food.map((food) => {
        return (
          <div className="Container" key={food.id}>
            <div className="Card-body">
              <img src={food.image} alt={food.food} className="cartImage" />
              <h5 className="card-title">{food.food}</h5>
              <h5 className="card-title">{food.price}</h5>
              <button
                onClick={() => added({ item: food.food, price: food.price })}
                className="btn"
                style={{ backgroundColor: "lightblue" }}
              >
                Add To Cart
              </button>
            </div>
          </div>
        );
      })}

      {cartItems.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Total Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td>{item.item}</td>
                <td>{item.price}</td>
                <td>{item.price}</td> {/* Display the total price for the individual item */}
                <td>
                  <button
                    className="btn"
                    style={{ backgroundColor: "red" }}
                    onClick={() => remove(index)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
    </>
  );
}

export default Cart;
