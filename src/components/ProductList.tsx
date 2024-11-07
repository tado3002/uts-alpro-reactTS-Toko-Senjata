import React from "react";
import { ProductListProps } from "../models/Product";
import ProductCard from "./ProductCard";

const ProductList: React.FC<ProductListProps> = ({ products, setProduct }) => {
  return (
    <div className="">
      <ul className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4">
        {products.map((product, id) => (
          <ProductCard product={product} setProduct={setProduct} key={id + 1} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
