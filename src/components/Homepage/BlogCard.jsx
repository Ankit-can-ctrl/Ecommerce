import ButtonMain from "../ButtonMain";
function BlogCard() {
  return (
    <div className="p-5 flex flex-col gap-5 cursor-pointer bg-[#e7e1e1]">
      <div className="blog_image overflow-hidden rounded-md">
        <img
          className=" hover:scale-110 transition-all duration-500 ease-in-out"
          src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg"
          alt="Blog"
        />
      </div>
      <div className="flex flex-col gap-3 ">
        <h3 className="upload_date uppercase text-red">5 april, 2021</h3>
        <h2>New Furniture Collection</h2>
        <p className=" text-sm text-gray-600">
          Best furniture collection for your home. This is the best place to buy
          furniture online.
        </p>
        <ButtonMain text="Read More" />
      </div>
    </div>
  );
}

export default BlogCard;
