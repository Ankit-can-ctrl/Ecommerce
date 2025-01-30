import { Link } from "react-router-dom";

function ProductCard({ discount, price = 49.99 }) {
  console.log(discount);
  let discountPrice;
  if (discount > 0) {
    discountPrice = Math.ceil(price - (price * discount) / 100);
    console.log(discountPrice);
  }

  return (
    <Link
      to="/products/productId"
      className="product-card py-3 flex flex-col items-center justify-center gap-2 bg-white p-2 rounded-md"
    >
      <div className="product_image relative group">
        <img
          className=" group-hover:scale-110 trasition-transform duration-500 ease-in-out"
          src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/73-home_default/mountain-fox-cushion.jpg"
          alt="Product Image"
        />
        {discount && (
          <span className="absolute top-0 right-0 bg-red text-white font-semibold px-2 py-1 rounded-md">
            -{discount}%
          </span>
        )}
      </div>
      <div className="product_details px-3 flex flex-col items-start gap-1">
        <h2 className="truncate overflow-hidden whitespace-nowrap w-full font-medium">
          Menu Bottle Salt and Pepper Sprinkler
        </h2>
        <div className="review_stars">
          ⭐⭐⭐⭐⭐<span className=" text-gray-500 font-semibold">(21)</span>
        </div>
        <div className="price flex items-center justify-start gap-2">
          {discount && (
            <>
              <span className="discounted_price line-through text-gray-500">
                ${price}
              </span>
            </>
          )}
          {discountPrice ? (
            <button className="text-white bg-red px-2 rounded-md py-1 font-semibold">
              ${discountPrice}
            </button>
          ) : (
            <button className="text-white bg-red px-2 rounded-md py-1 font-semibold">
              ${price}
            </button>
          )}
        </div>
        {price > 40 && <p className=" text-gray-400">Free Shipping</p>}
      </div>
    </Link>
  );
}

export default ProductCard;
