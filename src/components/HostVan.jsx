import {
  Link,
  NavLink,
  Outlet,
  useLoaderData,
  useParams,
} from "react-router-dom";
import { getVan } from "../scripts";

export default function HostVan() {
  const { id, name, price, description, imageUrl, type } = useLoaderData().van;
  const conditionalStyle = ({ isActive }) =>
    !isActive ? "font-semibold" : "font-bold underline underline-offset-4";

  return (
    <section className="p-6 pt-0">
      <div>
        <Link to=".." relative="path">
          <span className="mr-2">{"<-"}</span> <span> Back to all vans </span>
        </Link>
        <div className="flex flex-col gap-4 p-6 bg-white mt-4">
          <div className="flex gap-5 items-center">
            <img src={imageUrl} alt="" className="aspect-square w-40" />
            <div>
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
            </div>
          </div>
          <nav>
            <nav className="flex items-center gap-5 text-[#4D4D4D]">
              <NavLink to={`.`} end className={conditionalStyle}>
                Details
              </NavLink>
              <NavLink to={`pricing`} className={conditionalStyle}>
                Pricing
              </NavLink>
              <NavLink to={`photos`} className={conditionalStyle}>
                Photos
              </NavLink>
            </nav>
          </nav>

          <Outlet context={useLoaderData().van} />
        </div>
      </div>
    </section>
  );
}

export async function loader({ params }) {
  const van = await getVan(params.id);

  return { van };
}
