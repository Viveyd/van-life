import { Link, useLoaderData } from "react-router-dom";

export default function HostIncome() {
  const transactions = [
    ["$720", "1/12/22"],
    ["$560", "10/11/22"],
    ["$980", "23/11/22"],
  ];
  return (
    <section>
      <h2 className="p-6 pt-0 font-extrabold text-4xl">Income</h2>
      <div className="px-6 pb-6">
        <div>
          <h2>
            Last{" "}
            <span className="underline underline-offset-4 font-bold">
              30 days
            </span>
          </h2>
        </div>
        <h2 className="text-5xl font-extrabold pt-2">$2,260</h2>
      </div>

      <div className="p-6"> </div>

      <div className="p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">
            Your transactions ({transactions.length})
          </h2>
          <div>
            Last{" "}
            <span className="underline underline-offset-4 font-bold">
              30 days
            </span>
          </div>
        </div>
        <ul className="flex flex-col gap-3 pt-3">
          {transactions.slice(0, 3).map(([amount, date], idx) => (
            <li
              key={idx}
              className="flex px-[24px] py-[18px] gap-4 items-center bg-[#FFFFFF]"
            >
              <h3 className="text-xl font-semibold *:text-[#4D4D4D]">
                {amount}
              </h3>
              <div className="grow text-right">{date}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
