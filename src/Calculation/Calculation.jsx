import { useState } from "react";
// import React {useState} from "react";
import Card from "../Card/Card";

const desserts = [
  {
    image: {
      thumbnail: "./assets/images/image-waffle-thumbnail.jpg",
      mobile: "./assets/images/image-waffle-mobile.jpg",
      tablet: "./assets/images/image-waffle-tablet.jpg",
      desktop: "./assets/images/image-waffle-desktop.jpg",
    },
    name: "Waffle with Berries",
    category: "Waffle",
    price: 6.5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-creme-brulee-thumbnail.jpg",
      mobile: "./assets/images/image-creme-brulee-mobile.jpg",
      tablet: "./assets/images/image-creme-brulee-tablet.jpg",
      desktop: "./assets/images/image-creme-brulee-desktop.jpg",
    },
    name: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
    price: 7.0,
  },
  {
    image: {
      thumbnail: "./assets/images/image-macaron-thumbnail.jpg",
      mobile: "./assets/images/image-macaron-mobile.jpg",
      tablet: "./assets/images/image-macaron-tablet.jpg",
      desktop: "./assets/images/image-macaron-desktop.jpg",
    },
    name: "Macaron Mix of Five",
    category: "Macaron",
    price: 8.0,
  },
  {
    image: {
      thumbnail: "./assets/images/image-tiramisu-thumbnail.jpg",
      mobile: "./assets/images/image-tiramisu-mobile.jpg",
      tablet: "./assets/images/image-tiramisu-tablet.jpg",
      desktop: "./assets/images/image-tiramisu-desktop.jpg",
    },
    name: "Classic Tiramisu",
    category: "Tiramisu",
    price: 5.5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-baklava-thumbnail.jpg",
      mobile: "./assets/images/image-baklava-mobile.jpg",
      tablet: "./assets/images/image-baklava-tablet.jpg",
      desktop: "./assets/images/image-baklava-desktop.jpg",
    },
    name: "Pistachio Baklava",
    category: "Baklava",
    price: 4.0,
  },
  {
    image: {
      thumbnail: "./assets/images/image-meringue-thumbnail.jpg",
      mobile: "./assets/images/image-meringue-mobile.jpg",
      tablet: "./assets/images/image-meringue-tablet.jpg",
      desktop: "./assets/images/image-meringue-desktop.jpg",
    },
    name: "Lemon Meringue Pie",
    category: "Pie",
    price: 5.0,
  },
  {
    image: {
      thumbnail: "./assets/images/image-cake-thumbnail.jpg",
      mobile: "./assets/images/image-cake-mobile.jpg",
      tablet: "./assets/images/image-cake-tablet.jpg",
      desktop: "./assets/images/image-cake-desktop.jpg",
    },
    name: "Red Velvet Cake",
    category: "Cake",
    price: 4.5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-brownie-thumbnail.jpg",
      mobile: "./assets/images/image-brownie-mobile.jpg",
      tablet: "./assets/images/image-brownie-tablet.jpg",
      desktop: "./assets/images/image-brownie-desktop.jpg",
    },
    name: "Salted Caramel Brownie",
    category: "Brownie",
    price: 4.5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-panna-cotta-thumbnail.jpg",
      mobile: "./assets/images/image-panna-cotta-mobile.jpg",
      tablet: "./assets/images/image-panna-cotta-tablet.jpg",
      desktop: "./assets/images/image-panna-cotta-desktop.jpg",
    },
    name: "Vanilla Panna Cotta",
    category: "Panna Cotta",
    price: 6.5,
  },
];

const Calculation = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [total, setTotal] = useState(0);

  const addItem = (item) => {
    setSelectedItems((prevItems) => [...prevItems, item]);
    setTotal((prevTotal) => prevTotal + item.price);
  };

  const removeItem = (itemIndex) => {
    const itemToRemove = selectedItems[itemIndex];
    setSelectedItems((prevItems) =>
      prevItems.filter((_, index) => index !== itemIndex)
    );
    setTotal((prevTotal) => prevTotal - itemToRemove.price);
  };

  const handleConfirm = () => {
    alert(`Order confirmed! Total: $${total.toFixed(2)}`);
  };

  return (
    <div className="w-full  p-4">
      <div className=" w-full grid grid-cols-3 gap-4">
        {desserts.map((dessert, index) => (
          <div key={index} className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={dessert.image.desktop}
                alt={dessert.name}
                className="rounded-xl"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{dessert.name}</h2>
              <p>{dessert.category}</p>
              <p>${dessert.price.toFixed(2)}</p>
              <div className="card-actions justify-center">
                <button
                  className="btn btn-primary"
                  onClick={() => addItem(dessert)}
                >
                  Add to Order
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <h1 className="text-2xl font-bold mb-4">Your Order</h1>
        <h2 className="text-xl font-semibold mb-2">Selected Items:</h2>
        {selectedItems.length === 0 ? (
          <p>No items selected.</p>
        ) : (
          <ul>
            {selectedItems.map((item, index) => (
              <li key={index} className="flex justify-between mb-2">
                <span>Name:{item.name}</span>
                <span>${item.price.toFixed(2)}</span>
                <button
                  className="btn btn-xs btn-danger"
                  onClick={() => removeItem(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-4">
        <h2 className="text-xl font-semibold">Total: ${total.toFixed(2)}</h2>
      </div>

      <div className="mt-4">
        <button
          className="btn btn-success w-full"
          onClick={handleConfirm}
          disabled={selectedItems.length === 0}
        >
          Confirm Order
        </button>
      </div>
    </div>
  );
};

export default Calculation;
