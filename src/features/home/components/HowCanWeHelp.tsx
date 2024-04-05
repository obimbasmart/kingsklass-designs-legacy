interface ImgCardProp {
  name: string;
  src: string;
}

function ImgCard({ name, src }: ImgCardProp) {
  return (
    <figure className="w-full m-0  flex drop-shadow-lg">
      <img className="w-[50%] mb-0 object-cover aspect-square" src={src}/>
      <figcaption className="bg-fdt-brown-darker w-[50%] mt-[-4px] text-fdt-grey-light flex items-center justify-center py-1 text-center text-sm font-medium">
        {name}
      </figcaption>
    </figure>
  );
}

function HowCanWeHelp() {
  return (
    <section className="mt-10 pb-10 flex flex-col justify-center items-center">
      <h3 className="text-[1.25rem] font-normal font-playfair-display text-fdt-brown-dark mb-4">
        HOW CAN WE HELP YOU ?
      </h3>

      <div className="w-[80%] flex mx-2 gap-0 flex-row flex-wrap justify-center">
        <ImgCard name="AGBADA" src="/agbada.png" />
        {/* <ImgCard name="SUITS" src="/suit.png" /> */}
      </div>
    </section>
  );
}

export default HowCanWeHelp;
