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
      className="w-[48%] max-w-[500px] relative mobile:max-w-[300px]"
      id="howItWorks"
    >
      <span className="text-fdt-brown-light-active opacity-[0.5] font-normal text-4xl leading-10 absolute top-[5%] -mobile:left-10 font-obitron">
        0{number}
      </span>
      <h4 className="mb-0 text-fdt-brown-normal font-normal text-[18px] w-full pt-8 border-b">
        {title}
      </h4>
      <p className="w-full text-fdt-brown-darker font-light font-inherit mt-2 m-0 text-base">
        {desc}
      </p>
    </div>
  );
}

function HowItWorks() {
  
  const navigate = useNavigate();

  return (
    <section className="w-full pb-5 bg-white flex flex-col justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center py-5">
        <h3 className="text-base mb-0 font-normal text-fdt-brown-normal">
          OUR SERVICES
        </h3>
        <h3 className="text-[1.25rem] mt-2 font-normal font-playfair-display text-fdt-brown-dark">
          HOW IT WORKS
        </h3>
       
      </div>

      <section className="px-6 py-4 px-2max-w-[800px] rounded-[8px] bg-[#F8F8F8]  flex flex-row flex-wrap justify-between gap-y-4">
        {howItWork.map((step) => (
          <Step
            key={step.number}
            number={step.number}
            title={step.title}
            desc={step.desc}
          />
        ))}
      </section>

      <Buttons
          classNames="my-2 mt-6 rounded-[8px] font-bold  text-white bg-fdt-brown-normal"
          px="px-[24px]"
          py="py-[12px]"
          onClick={() => navigate("/products")}
        >
          Get Started
        </Buttons>
    </section>
  );
}

export default HowItWorks;
