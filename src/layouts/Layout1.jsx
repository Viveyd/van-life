import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout1() {
  return (
    <div className="flex flex-col min-h-screen font-inter">
      <Header />
      <main className="grow basis-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
