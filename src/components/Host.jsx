import { NavLink, Outlet } from "react-router-dom";

export default function Host() {
  const conditionalStyle = ({ isActive }) =>
    !isActive ? "font-semibold" : "font-bold underline underline-offset-4";
  return (
    <section className="bg-[#FFF7ED] h-full">
      <div className="flex justify-between px-6 pb-6">
        <nav className="flex gap-3">
          <NavLink to="." end className={conditionalStyle}>
            Dashboard
          </NavLink>
          <NavLink to="income" className={conditionalStyle}>
            Income
          </NavLink>
          <NavLink to="vans" className={conditionalStyle}>
            Van
          </NavLink>
          <NavLink to="reviews" className={conditionalStyle}>
            Reviews
          </NavLink>
        </nav>
        <a href="" className="font-semibold">
          Sign out
        </a>
      </div>
      <Outlet />
    </section>
  );
}

export async function loader() {
  return null;
}
