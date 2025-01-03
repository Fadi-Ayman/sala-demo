import SidebarImg from "./SidebarImg";
import { PiGraphLight } from "react-icons/pi";

function SidebarGiftArea() {
  return (
    <div className="flex flex-col items-center gap-2">
      <SidebarImg />

      <p>متجر الهدايا</p>

      <button className="flex h-[31px] w-[150px] rounded-full border border-secondary text-sm">
        <p className="flex size-full items-center justify-center py-1 pb-2 text-sm">
          زيارة المتجر
        </p>

        <span className="flex h-full w-[50%] items-center justify-center rounded-e-full bg-secondary">
          <PiGraphLight className="text-black" size={20} />
        </span>
      </button>
    </div>
  );
}

export default SidebarGiftArea;
