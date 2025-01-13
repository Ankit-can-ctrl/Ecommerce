import Swipeable from "../Swipeable";

const instaPosts = [
  {
    id: 0,
    src: "https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_instagramfeeds/views/img/instapic/1.jpg",
  },
  {
    id: 1,
    src: "https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_instagramfeeds/views/img/instapic/6.jpg",
  },
  {
    id: 2,
    src: "https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_instagramfeeds/views/img/instapic/2.jpg",
  },
  {
    id: 3,
    src: "https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_instagramfeeds/views/img/instapic/7.jpg",
  },
  {
    id: 4,
    src: "https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_instagramfeeds/views/img/instapic/3.jpg",
  },
  {
    id: 5,
    src: "https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_instagramfeeds/views/img/instapic/4.jpg",
  },
  {
    id: 6,
    src: "https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_instagramfeeds/views/img/instapic/8.jpg",
  },
  {
    id: 7,
    src: "https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_instagramfeeds/views/img/instapic/2.jpg",
  },
  {
    id: 8,
    src: "https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_instagramfeeds/views/img/instapic/5.jpg",
  },
  {
    id: 9,
    src: "https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_instagramfeeds/views/img/instapic/7.jpg",
  },
];

function SocialPosts() {
  return (
    <div className="md:w-[80%]">
      <Swipeable SubComponent={Post} data={instaPosts} autoplay={true} />
    </div>
  );
}

export default SocialPosts;

function Post({ item }) {
  return (
    <div className=" rounded-md overflow-hidden mx-5 ">
      {
        <img
          className=" hover:scale-105 transition duration-300 h-[350px] object-cover"
          src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_instagramfeeds/views/img/instapic/8.jpg"
          alt="Post"
        />
      }
    </div>
  );
}
