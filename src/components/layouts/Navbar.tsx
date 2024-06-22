import { Link } from "react-router-dom";

import logo from "/final.svg";

function Navbar() {
  return (
    <div className="sticky flex h-16 w-full place-content-center place-items-center border-b border-zinc-200 px-8 shadow-sm sm:h-24 lg:px-16">
      <div className="flex w-full max-w-screen-xl place-content-between">
        <Link className="flex place-items-center gap-2" to={"/"}>
          <img src={logo} alt="Jouzu logo" className="h-8" />
          <div className="font-poppins text-2xl font-normal tracking-tighter">Niddam</div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
