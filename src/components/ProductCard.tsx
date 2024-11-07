import { Product } from "../models/Product";

const ProductCard = ({
  product,
  setProduct,
}: {
  product: Product;
  setProduct: any;
}) => {
  return (
    <div className="card card-compact bg-black w-92">
      <figure>
        <img src={product.image} alt="Shoes" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title ">
          {product.name.split("|").slice(0, 1).join("")}
        </h2>
        <div className="card-actions justify-between items-center">
          <span className="badge badge-lg badge-error">${product.price}</span>
          <button
            className="btn btn-outline btn-error"
            onClick={() => {
              document.getElementById("productModal").showModal();
              setProduct(product);
            }}
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
