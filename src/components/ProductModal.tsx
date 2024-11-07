import { Product } from "../models/Product";

const Content = ({
  product,
  setSelectedProducts,
  products,
}: {
  product: Product;
  setSelectedProducts: any;
  products: Product[] | [];
}) => {
  return (
    <div className="card flex justify-between w-full flex-row">
      <figure>
        <img src={product.image} alt="Album" />
      </figure>
      <div className="flex flex-col">
        <div className="card-body">
          <h2 className="card-title text-3xl">{product.name}</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end"></div>
        </div>
        <div className="flex justify-between px-4">
          <h3 className="ps-4 text-white text-4xl">${product.price}</h3>
          <form method="dialog">
            <button
              onClick={() => setSelectedProducts([...products, product])}
              className="btn btn-active btn-error"
            >
              Add to cart
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const ProductModal = ({
  selectedProduct,
  selectedProducts,
  setSelectedProducts,
}: {
  selectedProduct: Product | null;
  selectedProducts: Product[] | [];
  setSelectedProducts: any;
}) => {
  return (
    <dialog id="productModal" className="modal text-white bg-black/50">
      <div className="modal-box bg-info-content border border-error box w-8/12 max-w-5xl">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-outline btn-error absolute right-2 top-2">
            ✕
          </button>
        </form>
        {selectedProduct !== null ? (
          <Content
            product={selectedProduct}
            setSelectedProducts={setSelectedProducts}
            products={selectedProducts}
          />
        ) : (
          ""
        )}
      </div>
    </dialog>
  );
};

export default ProductModal;
