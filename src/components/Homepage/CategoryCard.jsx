import { Link } from "react-router-dom";

function CategoryCard({ data }) {
  return (
    <div>
      <Link
        to={`/${data.name}`}
        className="flex w-[300px] flex-col items-center justify-center p-4 bg-white hover:bg-red hover:text-white transition duration-300  rounded-lg   h-full"
      >
        <span className="text-2xl mb-2">{data.icon}</span>
        <span className="text-sm font-medium ">{data.name}</span>
      </Link>
    </div>
  );
}

export default CategoryCard;
