import React, { useEffect, useState } from "react";
import ProductCard from "./components/Card";
import axios from "axios";
const App = () => {
  const URL = "http://localhost:3000/coffe-shop";
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios.get(URL).then((data) => setProduct(data.data));
  }, [URL]);
  return (
    <div className="container mx-auto">
    <h1 className="text-3xl font-semibold text-center my-8">Product Grid</h1>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {product.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
  );
};

export default App;
