import { Buttons } from "../../../shared/components/Buttons";
import { useNavigate } from "react-router-dom";
import Stats from "./Stats";

export const Hero = () => {
  const navigate = useNavigate();
  const contactSection: HTMLElement = document.getElementById(
    "contactUs"
  ) as HTMLElement;

  return (
    <section className="hero text-sm relative items-center text-white gap-y-6 flex justify-center w-full flex-col transition-all mb-4 bg-[url('/HeroImage.png')] aspect-[1.4/1] bg-cover bg-center">
      <div className="md:mt-24 pt-6 pb-0 px-4 md:px-16 gap-y-2 lg:px-28 flex flex-col items-center w-full">
        <h1 className="text-left shadow mt-0 mb-0 font-playfair-display  text-3xl whitespace-pre-wrap font-bold leading-[120%]">
          CRAFTING IDENTITY
        </h1>
        <p className="t-shadow text-center text-sm whitespace-pre-wrap w-full">
          We blend tradition and modern flair for timeless elegance in bespoke
          garments.
        </p>
      </div>

      <section className="w-full max-w-[800px] flex flex-row justify-evenly items-center mt-0 mb-4">
        <Buttons
          onClick={() => navigate("/products")}
          px="px-6"
          py="py-3"
          classNames="shadow mobile:text-xs border-0 text-white  bg-fdt-brown-normal font-bold"
        >
          Discover Collections
        </Buttons>

        <Buttons
          onClick={() => contactSection.scrollIntoView({ behavior: "smooth" })}
          px="px-6"
          py="py-3"
          classNames="shadow mobile:text-xs border-[1px] text-fdt-brown-normal  bg-fdt-grey-light-hover font-bold"
        >
          Book an appointment
        </Buttons>
      </section>

      <Stats />
    </section>
  );
};
