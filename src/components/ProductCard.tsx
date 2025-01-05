import { Product } from "../models/Product";

const ProductCard = ({
  product,
  setProduct,
}: {
  product: Product;
  setProduct: any;
}) => {
  const productModal = document.getElementById(
    "productModal",
  ) as HTMLDialogElement | null;
  const modalHandler = () => {
    if (productModal) productModal.showModal();
  };

  return (
    <div className="card card-compact bg-black w-92">
      <figure>
        <img src={product.image} alt="Shoes" />
      </figure>
      <div className="card-body justify-between">
        <h2 className="card-title ">
          {product.name.split("|").slice(0, 1).join("")}
        </h2>
        <div className="card-actions justify-between items-center">
          <span className="badge badge-lg badge-error">${product.price}</span>
          <button
            className="btn btn-outline btn-error"
            onClick={() => {
              modalHandler();
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
