import { useEffect, useState } from "react";
import { Product } from "../models/Product";
import { Trash } from "@phosphor-icons/react";

const SidebarItem = ({
  productId,
  product,
  selectedProducts,
  setSelectedProducts,
}: {
  productId: number;
  product: Product;
  selectedProducts: Product[];
  setSelectedProducts: any;
}) => {
  const [quantity, setQuantity] = useState(1);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(quantity * product.price);
  const [totalAfterDiscount, setTotalAfterDiscount] = useState(0);

  const reduceCountHandler = () => {
    if (quantity === 1) return;
    else setQuantity(quantity - 1);
  };
  const deleteHandler = () => {
    const filteredProducts = selectedProducts.filter(
      (product, id) => id !== productId,
    );
    setSelectedProducts(filteredProducts);
  };
  // logic for discount
  useEffect(() => {
    if (quantity >= 5) {
      // discount 10%
      if (quantity >= 10) setDiscount(10 / 100);
      // discount 5%
      else setDiscount(5 / 100);
    } else setDiscount(0);
    // total = price * quantity
    setTotal(product.price * quantity);
    // totalAfterDiscount = total - (total * discount)
    setTotalAfterDiscount(total - total * discount);
  }, [quantity, total, selectedProducts]);

  return (
    <div className="card card-side bg-base-100 shadow-xl mb-2">
      <Trash
        onClick={() => deleteHandler()}
        className="btn btn-sm btn-circle text-error absolute right-2 top-2"
      ></Trash>

      <figure className="w-32">
        <img src={product.image} alt="Movie" />
      </figure>
      <div className="card-body text-white flex flex-col justify-between">
        <div className="font-bold text-sm">{product.name}</div>

        <div className="card-actions flex justify-between relative">
          <div className="font-bold text-base flex gap-2">
            {
              // show total before discount if discount not zero
              discount !== 0 ? (
                <span className="line-through">${total}</span>
              ) : (
                ""
              )
            }

            <span className="text-xl">
              $
              {
                //show totalAfterDiscount discount. if discount  not zero
                discount !== 0 ? totalAfterDiscount : total
              }
            </span>
          </div>
          <div className="">
            <button
              className="btn btn-sm btn-outline btn-error"
              onClick={() => reduceCountHandler()}
            >
              -
            </button>
            <button className="btn btn-sm">{quantity}</button>
            <button
              className="btn btn-sm btn-error"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>
          {discount !== 0 ? (
            <button className="btn btn-lg btn-ghost absolute left-[-1rem] bottom-[-2rem] text-error">
              - {discount * 100}%
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default SidebarItem;
