import HeaderSearch from "../components/Header/HeaderSearch";
import Logo from "../components/Header/Logo";
import HeaderControls from "../components/Header/HeaderControls";

function Header() {
  return (
    <header className="col-span-12 row-span-1 grid grid-cols-[260px_repeat(11,1fr)] items-center justify-start">
      <Logo />

      {/* Search and controls */}
      <div className="col-start-2 col-end-13 hidden w-full items-center justify-between px-0 md:flex lg:px-10">
        <HeaderSearch />
        <HeaderControls />
      </div>
    </header>
  );
}

export default Header;
