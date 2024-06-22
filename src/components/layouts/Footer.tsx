import logo from "/logo.svg";

function Footer() {
  return (
    <div className="z-50 flex h-16 w-full place-content-center place-items-center bg-secondary px-8 shadow-lg sm:h-24 lg:px-16">
      <div className="flex w-full max-w-screen-xl place-content-between place-items-center">
        <img
          src={logo}
          alt="Jouzu logo"
          className="h-8 grayscale filter duration-150 ease-in-out hover:filter-none"
        />
        <span className="text-xs text-zinc-400">© 2024 Niddam</span>
      </div>
    </div>
  );
}

export default Footer;
