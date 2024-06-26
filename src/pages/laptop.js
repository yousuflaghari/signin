import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/card";
import "./laptop.css";

const Laptop = ({ setCartItem }) => {
  const [laptops, setLaptops] = useState([]);

  useEffect(() => {
    const fetchLaptops = async () => {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products/category/laptops"
        );
        const { products } = response.data;
        setLaptops(products);
      } catch (error) {
        console.error("Error fetching laptops:", error);
      }
    };

    fetchLaptops();
  }, []);

  return (
    <div>
      <h1 className="heading">Laptop Products</h1>
      <div className="container">
        {laptops.map((laptop, index) => (
          <Card
            key={index}
            profile={laptop}
            index={index}
            setCartItem={setCartItem}
          />
        ))}
      </div>
    </div>
  );
};

export default Laptop;
