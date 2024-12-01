import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
      <main className="lg:px-24 lg:py-4">
        <Navbar />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
