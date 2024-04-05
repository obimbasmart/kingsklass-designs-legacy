import { useEffect, useState } from "react";
import { categories } from "../../../shared/utils/constants/constants";

function ImgCard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function swapCards() {
    const card1: HTMLElement | null = document.getElementById("card1");
    var card2: HTMLElement | null = document.getElementById("card2");

    // Swap the positions of the cards using Tailwind's translate classes
    if (card1 && card2) {
      card1.classList.toggle("translate-x-full");
      card2.classList.toggle("-translate-x-full");
      setCurrentIndex((prev) => (prev + 1) % categories.length);
    }
  }

  // Swap cards continuously every 2 seconds
  useEffect(() => {
    const interval = setInterval(swapCards, 2000);

    return () => clearInterval(interval);
  });

  return (
    <figure className="w-full m-0  flex drop-shadow-lg">
      <img
        id="card1"
        className="feasout w-[50%] mb-0 object-cover aspect-square"
        src={categories[currentIndex].url}
      />
      <figcaption
        id="card2"
        className="uppercase s-feasout bg-fdt-brown-darker w-[50%] aspect-square h-full text-fdt-grey-light flex items-center justify-center py-1 text-center text-sm font-medium"
      >
        {categories[currentIndex].name}
      </figcaption>
    </figure>
  );
}

function HowCanWeHelp() {
  return (
    <section className="mt-10 pb-10 flex flex-col justify-center items-center">
      <h3 className="card1 text-[1.25rem] font-normal font-playfair-display text-fdt-brown-dark mb-4">
        HOW CAN WE HELP YOU ?
      </h3>

      <div className="w-[80%] flex mx-2 gap-0 flex-row flex-wrap justify-center">
        <ImgCard />
      </div>
    </section>
  );
}

export default HowCanWeHelp;
