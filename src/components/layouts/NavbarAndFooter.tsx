import { ReactNode } from "react";

import Footer from "./Footer";
import Navbar from "./Navbar";

function NavbarAndFooter(props: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
}

export default NavbarAndFooter;
