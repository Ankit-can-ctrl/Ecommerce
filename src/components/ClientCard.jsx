function ClientCard() {
  return (
    <div className="card border-2 h-[270px] w-[300px] border-gray-200 bg-white rounded-md p-5 flex flex-col gap-5">
      <div className="header flex items-center gap-5">
        <img
          className=" rounded-full w-[50px]"
          src="https://cdn.britannica.com/34/155334-004-FFB8E02A/Tim-Cook.jpg"
          alt="Review"
        />
        <div>
          <h1 className="font-semibold">Tim Cook</h1>
          <p className=" text-gray-600">CEO, Apple Inc.</p>
        </div>
      </div>
      <p className="text-gray-500">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry Lorem Ipsum has been the industrys standard dummy text
        randomised words which dont look even slightly believable.
      </p>
    </div>
  );
}

export default ClientCard;
