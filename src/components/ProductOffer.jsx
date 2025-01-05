import ButtonMain from "./ButtonMain";
function ProductOffer() {
  return (
    <div
      className="min-h-[200px] min-w-[300px] max-w-[550px] flex flex-col justify-end gap-2 p-5 rounded-lg bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg")',
      }}
    >
      <h1 className=" text-2xl w-[50%] font-semibold">Samsung Cam</h1>
      <p className=" text-2xl text-red font-semibold">$129.99</p>
      <ButtonMain text="Shop Now" size={150} />
    </div>
  );
}

export default ProductOffer;
