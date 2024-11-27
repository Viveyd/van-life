import { FaStar } from "react-icons/fa";

export default function HostReviews() {
  const reviews = [
    [
      5,
      "Elliot",
      "December 1, 2022",
      "The beach bum is such as awesome van! Such as comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
    ],
    [
      5,
      "Sandy",
      "November 23, 2022",
      "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
    ],
  ];

  return (
    <section className="flex flex-col gap-4 p-6 pt-0">
      <h2>
        <span className="font-extrabold text-4xl">Your reviews </span>
        <span>
          last{" "}
          <span className="underline underline-offset-4 font-bold">
            30 days
          </span>
        </span>
      </h2>
      <h3 className="flex gap-1 items-center">
        <span className="font-extrabold text-3xl">5.0</span>{" "}
        <FaStar fill="#FF8C38" size={20} />
        <span className="font-medium">overall rating</span>
      </h3>
      <div className="flex flex-col gap-3 my-2">
        {Array.from({ length: 5 }, (_, i) => i + 1)
          .toReversed()
          .map((i) => (
            <div key={i} className="flex gap-5 items-center">
              <span className="min-w-[55px]"> {i} stars</span>
              <div className="rounded-xl bg-[#FF8C38] h-2 grow"></div>
              <span className="min-w-[45px] text-end"> 100% </span>
            </div>
          ))}
      </div>
      <div>
        <h3 className="text-lg font-bold"> Reviews (2)</h3>
        <ul className="flex flex-col divide-y-2 ">
          {reviews.map(([rating, reviewer, date, review], idx) => (
            <li key={idx} className="flex flex-col gap-2 py-6">
              <div className="flex">
                {Array(rating)
                  .fill(1)
                  .map((item, idx) => (
                    <FaStar fill="#FF8C38" key={idx} />
                  ))}
              </div>
              <div className="font-semibold">
                <span> {reviewer}</span>
                <span className="text-[#8C8C8C] ml-1"> {date} </span>
              </div>
              <p className="font-medium"> {review}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
