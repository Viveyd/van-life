import { Link, useLoaderData } from "react-router-dom";
import { getVans } from "../scripts";

export default function HostDashboard() {
  const { vans } = useLoaderData();

  return (
    <section>
      <h2 className="bg-[#FFEAD0] p-6 font-extrabold text-4xl">Welcome!</h2>
      <div className="bg-[#FFEAD0] px-6 pb-6">
        <div className="flex justify-between">
          <h2>
            Income last{" "}
            <span className="underline underline-offset-4 font-bold">
              30 days
            </span>
          </h2>
          <Link to="income" className="font-medium">
            Details
          </Link>
        </div>
        <h2 className="text-5xl font-extrabold pt-2">$2,260</h2>
      </div>

      <div className="flex justify-between bg-[#FFDDB2] p-6">
        <h2 className="text-2xl font-bold">
          Review Score{" "}
          <span className="text-xl">
            5.0/<span className="text-[#4D4D4D]">5</span>
          </span>
        </h2>
        <Link to="reviews" className="font-medium">
          Details
        </Link>
      </div>

      <div className="p-6">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">Your listed vans</h2>
          <Link to="vans" className="font-medium">
            View all
          </Link>
        </div>
        <ul className="flex flex-col gap-3 pt-3">
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
                <Link to={"vans/" + id}>Edit</Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export async function loader(params) {
  const vans = await getVans(3);
  return { vans };
}
