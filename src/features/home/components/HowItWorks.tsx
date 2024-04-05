import { useNavigate } from "react-router-dom";
import { Buttons } from "../../../shared/components/Buttons";
import { howItWork } from "../../../shared/utils/constants/constants";

interface IStep {
  number: string;
  title: string;
  desc: string;
}

function Step({ number, desc, title }: IStep) {
  return (
    <div
      className="pll-6 min-w-[150px] max-w-[300px] relative mobile:max-w-[150px]"
      id="howItWorks"
    >
      <span className="text-fdt-brown-light-active font-normal text-3xl absolute top-[50%] -left-6 -mobile:left-10">
        {number}
      </span>
      <h4 className="mb-0 text-fdt-brown-normal font-normal text-[18px] w-full">
        {title}
      </h4>
      <p className="text-fdt-brown-darker font-light font-inherit mt-2 m-0 text-[15px]">
        {desc}
      </p>
    </div>
  );
}

function HowItWorks() {
  
  const navigate = useNavigate();

  return (
    <section className="w-full pb-5 bg-fdt-grey-light-hover flex flex-col justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center py-5">
        <h3 className="text-base mb-0 font-normal text-fdt-brown-normal">
          OUR SERVICES
        </h3>
        <h3 className="text-[1.25rem] mt-2 font-normal font-playfair-display text-fdt-brown-dark">
          HOW IT WORKS
        </h3>
        <Buttons
          classNames="mb-0 mt-2 rounded-[8px] font-bold  text-white bg-fdt-brown-normal"
          px="px-[24px]"
          py="py-[12px]"
          onClick={() => navigate("/products")}
        >
          Get Started
        </Buttons>
      </div>

      <section className="py-4 max-w-[800px] rounded-[8px] bg-[#F8F8F8]  flex flex-row flex-wrap justify-evenly gap-y-6">
        {howItWork.map((step) => (
          <Step
            key={step.number}
            number={step.number}
            title={step.title}
            desc={step.desc}
          />
        ))}
      </section>
    </section>
  );
}

export default HowItWorks;
