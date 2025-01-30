import Header from "../components/Header";
import Filters from "../components/Filters/Filters";
import ProductCard from "../components/ProductCard";
function ProductsPage() {
  return (
    <>
      <Header />
      <div className="flex">
        <Filters />
        <div className="Products px-4 py-2 bg-bgcolor w-full min-h-screen flex items-start">
          <ProductCard discount={10} price={50} />
        </div>
      </div>
    </>
  );
}

export default ProductsPage;
