import Image from "next/image";

const Slider = () => {
  return (
    <div className="flex bg-[#f6f6f6] dark:bg-[#222222] px-6 py-8 rounded-xl flex-col gap-8">
      <div>
        <Image className="tick" src={"/tick.svg"} width={40} height={40} />
      </div>
      <div>
        <p className="">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
          doloremque, a odio dolor blanditiis maiores aspernatur est unde
          debitis sed culpa aliquam eveniet saepe expedita?
        </p>
      </div>
      <div className="flex gap-5">
        <div className="">
          <Image
            className=" rounded-full shadow-xl"
            src={"/Boy.jpg"}
            width={50}
            height={50}
          />
        </div>
        <div className="flex flex-col">
          <span className=" text-xl font-bold title">Abdul Musabbir</span>
          <span className="title ">Web Developer</span>
        </div>
      </div>
    </div>
  );
};

export default Slider;
