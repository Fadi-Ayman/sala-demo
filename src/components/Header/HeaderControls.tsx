import { Avatar, MegaMenu } from "flowbite-react";
import { IoGiftOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { RiUser3Line } from "react-icons/ri";
import { CgNotifications } from "react-icons/cg";
import { MdOutlineCelebration } from "react-icons/md";
import { PiPen } from "react-icons/pi";
import { MdOutlineLogout } from "react-icons/md";

function HeaderControls() {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <button className="rounded-full border-[1.5px] border-secondary p-2 text-primary">
          <IoGiftOutline size={22} />
        </button>
        <button className="rounded-full border-[1.5px] border-secondary p-2 text-primary">
          <IoMoonOutline size={22} />
        </button>
      </div>

      <div className="group flex items-center gap-2 hover:cursor-pointer">
        <span className="relative mt-[3.5px] flex h-3 w-3 items-center justify-center">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
        </span>
        <p className="leading-none text-gray-600 group-hover:text-red-500">
          تحديثات المنصة
        </p>
      </div>

      <div className="flex items-center gap-2">
        <Avatar size={"sm"} rounded />

        <MegaMenu.Dropdown
          className="w-[15rem]"
          toggle={<span className="text-md text-gray-600">متجر الهداية</span>}
        >
          <ul className="">
            <div className="space-y-4 p-4">
              <li className="flex cursor-pointer items-center gap-2 text-sm hover:text-primary">
                <RiUser3Line size={22} className="text-gray-800" />
                <p>الملف الشخصي</p>
              </li>
              <li className="flex cursor-pointer items-center gap-2 text-sm hover:text-primary">
                <CgNotifications size={22} className="text-gray-800" />
                <p>التنبيهات</p>
              </li>
              <li className="flex cursor-pointer items-center gap-2 text-sm hover:text-primary">
                <MdOutlineCelebration size={22} className="text-gray-800" />
                <p>العروض</p>
              </li>
              <li className="flex cursor-pointer items-center gap-2 text-sm hover:text-primary">
                <PiPen size={22} className="text-gray-800" />
                <p>المنتجات</p>
              </li>
              <hr />
              <li className="flex cursor-pointer items-center gap-2 text-sm text-red-600">
                <MdOutlineLogout size={22} className="" />
                <p>تسجيل الخروج</p>
              </li>
            </div>
          </ul>
        </MegaMenu.Dropdown>
      </div>
    </div>
  );
}

export default HeaderControls;
