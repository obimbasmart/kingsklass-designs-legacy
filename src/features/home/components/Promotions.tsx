import { promotionItems } from "../../../shared/utils/constants/constants";
import Rating from "../../../shared/components/Rating";

interface IPromotionItem {
  name: string;
  imgUrl: string;
}

const PromotionItem = ({ name, imgUrl }: IPromotionItem) => {
  return (
    <div className="min-w-[90%] aspect-[1.7]  rounded-md relative">
      <img
        src={imgUrl}
        alt={name}
        className="w-full border h-full object-cover bg-no-repeat rounded-md"
      />
      <figcaption className="opacity-[0.8] text-base gap-1 p-2 rounded-b-md w-full aspect-[5.2] absolute text-white bottom-0 bg-[#0000008a]">
        <h4 className="-mb-1">{name}</h4>

        <Rating />
      </figcaption>
    </div>
  );
};

export default function Promotions() {
  return (
    <section className="flex flex-col gap-y-3 items-start  font-montserrat px-4 py-6">
      <h1 className=" font-montserrat text-base font-medium">New Arrivals</h1>

      <div className="snap-x  overflow-x-scroll flex justify-start items-center  gap-x-4   w-full bg-no-repeat">
        {promotionItems.map((item, index) => (
          <PromotionItem key={index} name={item.name} imgUrl={item.img_url} />
        ))}
      </div>
    </section>
  );
}
