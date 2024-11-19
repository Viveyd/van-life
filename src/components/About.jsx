import imgUrl from "/about.png";

export default function About() {
  return (
    <section className="min-h-full  bg-[#FFF7ED]">
      <img src={imgUrl} alt="" className="max-h-[230px] w-full object-cover" />
      <div className="flex items-center justify-center">
        <div className="flex flex-col gap-7 justify-center items-center px-[27px] py-10 text-[#161616] max-w-[800px]">
          <h2 className="text-4xl font-extrabold">
            Don’t squeeze in a sedan when you could relax in a van.
          </h2>
          <p className="font-medium">
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
          </p>
          <p>
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
          <div className="flex flex-col gap-4 p-9 bg-[#FFCC8D] w-full">
            <h2 className="text-2xl font-bold">
              Your destination is waiting. Your van is ready.
            </h2>
            <button className="block mt-2 py-4 px-6 bg-[#161616] text-[#FFFFFF] font-bold w-max rounded-md">
              Explore our vans
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
