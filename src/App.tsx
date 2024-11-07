import React, { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import { Product } from "./models/Product";
import Navbar from "./components/Navbar";
import ProductModal from "./components/ProductModal";
import SidebarItem from "./components/SidebarItem";

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedProducts, setSelectedProducts] = useState<Product[] | []>([]);

  useEffect(() => {
    // Mengambil data dari JSON
    fetch("/gun2.json")
      .then((response) => response.json())
      .then((data) => setProducts(data.slice(0, 8)))
      .catch((error) => console.error("Error fetching products:", error));
    console.log(selectedProducts);
  }, [selectedProducts]);

  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <div className="App bg-accent-content">
          <Navbar />
          <div className="container mx-auto px-24 min-h-screen">
            <h1 className="text-2xl my-5">
              Welcome to{" "}
              <span className="font-bold text-rose-600">MamatGunshop</span>
            </h1>
            <ProductList products={products} setProduct={setSelectedProduct} />
          </div>
          <ProductModal
            selectedProduct={selectedProduct}
            selectedProducts={selectedProducts}
            setSelectedProducts={setSelectedProducts}
          />
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-black text-base-content min-h-full min-w-56 w-fit p-4 pt-12">
          {/* Sidebar content here */}
          {selectedProducts?.map((product, id) => {
            return (
              <li key={id + 1}>
                <SidebarItem
                  productId={id}
                  product={product}
                  selectedProducts={selectedProducts}
                  setSelectedProducts={setSelectedProducts}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;
