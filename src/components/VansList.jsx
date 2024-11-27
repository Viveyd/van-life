import {
  defer,
  Link,
  Await,
  useLoaderData,
  useSearchParams,
} from "react-router-dom";
import { Suspense } from "react";
import { getVans } from "../scripts";

export default function VansList() {
  const dataPromise = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();

  const generateFilterURL = (selectedFilter) => {
    const queries = new URLSearchParams(searchParams);
    if (selectedFilter === null) queries.delete("filter");
    else queries.set("filter", selectedFilter);
    return queries.size ? `?${queries.toString()}` : ".";
  };

  return (
    <section className="flex flex-col gap-5 p-[27px] max-w-[1100px] mx-auto">
      <h2 className="text-3xl font-bold">Explore our van options</h2>
      <Suspense fallback={<h2> Loading... </h2>}>
        <Await resolve={dataPromise.vansList}>
          {(vansList) => {
            const types = [...new Set(vansList.map(({ type }) => type))];

            const typeFilter = searchParams.get("filter");
            const filteredVans = !typeFilter
              ? vansList
              : vansList.filter(({ type }) => type === typeFilter);

            return (
              <>
                <form className="flex">
                  <div className="grow flex gap-4">
                    {types.map((type, idx) => (
                      <Link
                        key={idx}
                        type="button"
                        to={generateFilterURL(type)}
                        /* bg-simple bg-rugged bg-luxury */
                        className={`capitalize bg-[#FFEAD0] px-6 py-[6px] rounded-md font-medium hover:text-white hover:bg-${type} ${
                          type === typeFilter ? `bg-${type} text-white` : ""
                        }`}
                      >
                        {type}
                      </Link>
                    ))}
                  </div>
                  <Link
                    to={generateFilterURL(null)}
                    className="underline underline-offset-4"
                  >
                    Clear all filters
                  </Link>
                </form>
                <ul className="flex flex-wrap gap-[16px]">
                  {filteredVans.map(({ id, name, imageUrl, type, price }) => {
                    return (
                      <li key={id} className="w-[calc(50%-8px)]">
                        <Link to={id} state={{ filter: typeFilter }}>
                          <img
                            src={imageUrl}
                            alt={`picture of the van ${name}`}
                            className="aspect-square w-full"
                          />
                          <div className="flex justify-between mt-[10px]">
                            <div className="l">
                              <h3 className="text-xl font-semibold mb-1">
                                {" "}
                                {name}{" "}
                              </h3>
                              <div
                                /* bg-simple bg-rugged bg-luxury */
                                className={`text-base text-[#FFEAD0] px-[14px] py-[6px] w-max capitalize rounded-md bg-${type}`}
                              >
                                {type}
                              </div>
                            </div>
                            <div className="r">
                              <h3 className="text-xl font-semibold text-right">
                                <div>${price}</div>
                                <div className="text-sm font-normal">/day</div>
                              </h3>
                            </div>
                          </div>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </>
            );
          }}
        </Await>
      </Suspense>
    </section>
  );
}

export async function loader() {
  return defer({ vansList: getVans() });
}
