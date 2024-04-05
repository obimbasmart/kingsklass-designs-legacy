// import { format } from "timeago.js";
import { currencyFormat } from "../../../shared/utils/helpers/formatPrice";
import { setCustomBackgroundImage } from "../../../shared/utils/helpers/setBackGroundImage";
import { TfiTimer } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import { reduceTextLength } from "../../../shared/utils/helpers/truncateTextLength";
import Rating from "../../../shared/components/Rating";

export type ProductCardProps = {
  img_url: string;
  price: number | string;
  estimated: number;
  name: string;
  id: string;
};

export default function ProductCard({
  img_url,
  price,
  estimated,
  name,
  id,
}: ProductCardProps) {
  const navigate = useNavigate();

  return (
    <article
      onClick={() => navigate(`/products/${id}`)}
      className="bg-[#F8F8F8] w-[45%] max-w-[300px]  flex flex-col relative shadow-md rounded-[4px]  transition-transform duration-300 transform active:scale-105"
    >
      <img
        src={img_url}
        style={setCustomBackgroundImage(img_url)}
        alt="product image"
        className="object-cover aspect-[0.9/1] rounded-tr-[6px] rounded-tl-[6px]"
      />

      <span className="absolute top-2 left-0 m-2 rounded-[2px] bg-[#585858] p-1 px-2 text-center text-[12px] font-normal text-white font-montserrat">
        New
      </span>

      <div className="m-0 lg:px-3 mobile:px-1 py-1 pb-0 font-montserrat">
        <h5 className="text-base mobile:text-[14px]  m-0 font-normal">
          {reduceTextLength(name, 16)}
        </h5>

        <Rating />

        <div className="mb-2 flex items-center justify-between p-0 m-o mt-2">
          <span className="m-0 p-0 text-lg font-montserrat-alternates font-medium">
            {currencyFormat(+price)}
          </span>

          <p className="flex gap-[.2rem] items-center text-[14px]">
            <TfiTimer style={{ fontSize: "1rem" }} />
            <span>{estimated}days</span>
          </p>
        </div>
      </div>
    </article>
  );
}
