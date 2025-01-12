import { Link } from "react-router-dom";

function ProductCard() {
  return (
    <Link
      to="/products/productId"
      className="product-card py-3 flex flex-col items-center justify-center gap-2"
    >
      <div className="product_image relative group">
        <img
          className=" group-hover:scale-110 trasition-transform duration-500 ease-in-out"
          src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/73-home_default/mountain-fox-cushion.jpg"
          alt="Sprinkler"
        />
        <span className="absolute top-0 right-0 bg-red text-white font-semibold px-2 py-1 rounded-md">
          -15%
        </span>
      </div>
      <div className="product_details w-[70%]">
        <h2 className="truncate overflow-hidden whitespace-nowrap w-full">
          Menu Bottle Salt and Pepper Sprinkler
        </h2>
        <div className="review_stars">⭐⭐⭐⭐⭐</div>
        <div className="price flex gap-2">
          <span className="discounted_price line-through text-gray-500">
            $49.99
          </span>
          <span>$39.99</span>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
