import { Link, useLoaderData, useLocation } from "react-router-dom";
import { getVan } from "../scripts";

export default function VanDetail() {
  const { name, price, description, imageUrl, type } = useLoaderData().van;
  const { filter } = useLocation().state;
  const returnUrl = filter ? `..?filter=${filter}` : `..`;
  return (
    <section className="flex flex-col gap-4 p-6">
      <div>
        <Link to={returnUrl} relative="path">
          <span className="mr-2">{"<-"}</span>{" "}
          <span> Back to {filter ? filter : "all"} vans </span>
        </Link>
      </div>
      <img src={imageUrl} alt="" />
      {/* bg-simple bg-rugged bg-luxury */}
      <div
        className={`text-base text-[#FFEAD0] px-[14px] py-[6px] w-max capitalize rounded-md bg-${type}`}
      >
        {type}
      </div>
      <h2 className="font-semibold text-3xl"> {name} </h2>
      <h2>
        <span className="font-bold text-2xl">${price}</span>/day
      </h2>
      <p>{description}</p>
      <Link
        to="rent"
        className="bg-[#FF8C38] text-[#FFFFFF] w-full text-center py-3"
      >
        Rent this van
      </Link>
    </section>
  );
}

export async function loader({ params }) {
  const van = await getVan(params.id);
  return { van };
}
