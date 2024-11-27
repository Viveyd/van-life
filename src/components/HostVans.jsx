import { Link, useLoaderData } from "react-router-dom";
import { getVans } from "../scripts";

export default function HostVans() {
  const { vans } = useLoaderData();
  return (
    <section>
      <h2 className="p-6 pt-0 font-extrabold text-4xl">Your listed vans</h2>
      <ul className="flex flex-col gap-3 px-6  pb-6">
        {vans.map(({ id, name, price, imageUrl }) => (
          <li
            key={id}
            className="flex px-[24px] py-[18px] gap-4 items-center bg-[#FFFFFF]"
          >
            <img src={imageUrl} className="aspect-square w-[66px]" alt="" />
            <div>
              <h3 className="text-xl font-semibold">{name} </h3>
              <h4 className="text-[#4D4D4D]"> ${price}/day </h4>
            </div>
            <div className="grow text-right">
              <Link to={id}>Edit</Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export async function loader(params) {
  const vans = await getVans();
  return { vans };
}
