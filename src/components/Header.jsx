import { NavLink } from "react-router-dom";

export default function Header() {
  const conditionalStyle = ({ isActive }) =>
    !isActive ? "font-semibold" : "font-bold underline underline-offset-4";
  return (
    <header className="flex justify-between items-center min-h-[112px] bg-[#FFF7ED] px-[36px] py-[26px]">
      <NavLink to="/" className="font-black text-[26px]">
        #VANLIFE
      </NavLink>
      <nav className="flex items-center gap-5 text-[#4D4D4D] p-1">
        <NavLink to="host" className={conditionalStyle}>
          Host
        </NavLink>
        <NavLink to="about" className={conditionalStyle}>
          About
        </NavLink>
        <NavLink to="vans" className={conditionalStyle}>
          Vans
        </NavLink>
      </nav>
    </header>
  );
}
