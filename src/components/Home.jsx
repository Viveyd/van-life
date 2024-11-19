export default function Home() {
  return (
    <section className="min-h-full flex flex-col gap-[23px] justify-center items-center p-[27px] text-[#FFFFFF] bg-[url('/test.png')] bg-cover *:max-w-[500px]">
      <h2 className="text-4xl font-extrabold">
        You got the travel plans, we got the travel vans.
      </h2>
      <h3 className="font-medium">
        Add adventure to your life by joining the #vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </h3>
      <button className="block mt-[28px] p-4 bg-[#FF8C38] w-full">
        Find your van
      </button>
    </section>
  );
}
