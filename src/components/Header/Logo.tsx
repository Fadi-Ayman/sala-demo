import { Avatar } from "flowbite-react";
import { IoMenu } from "react-icons/io5";
import { useSidebar } from "../../contexts/SidebarContext";

function Logo() {
  const { handleToggleSidebar } = useSidebar();

  return (
    <div className="relative col-start-1 col-end-13 flex h-full cursor-pointer items-center justify-center bg-primary md:col-end-1 md:justify-start md:ps-5">
      <img
        className="size-full max-w-[90px] ps-2 md:ps-0"
        src="https://cdn.salla.network/images/logo/logo-light-wide.svg"
        alt="Logo"
      />

      <div className="absolute flex w-full items-center justify-between gap-4 px-4 md:hidden">
        {/* Sidebar btn */}
        <button onClick={handleToggleSidebar}>
          <IoMenu size={29} className="text-white" />
        </button>

        {/* user Icon */}
        <Avatar rounded size="sm" />
      </div>
    </div>
  );
}

export default Logo;
