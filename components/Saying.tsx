import Slider from "./Slider";

const Saying = () => {
  return (
    <div className="py-20">
      <div className="flex flex-col mx-auto w-11/12 sm:w-3/4">
        <div className="text-center">
          <span className="title text-4xl font-bold sm:text-4xl">
            What Users Are Saying About Spotype
          </span>

          <p className="dark:text-[#a8abac] text-base font-medium sm:text-lg my-5">
            Don't just take our word for it-hear from some of out satisfied
            users! Check out some of uor testimonials below to see what others
            are saying aout Spotype.
          </p>
        </div>
        <Slider />
      </div>
    </div>
  );
};

export default Saying;
