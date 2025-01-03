import { PiCrownLight } from "react-icons/pi";

function SidebarImg() {
  return (
    <div className="relative">
      <div className="size-[4.5rem] overflow-hidden rounded-full border-[3px] border-dashed border-yellow-400">
        <img
          className="size-full object-cover"
          src="https://cdn.salla.sa/EZZNYp/UDW9uMwIyNZtYUZvUOKltJpsOnLxZYNZGohuPNEx.jpg"
          alt="img"
        />
        {/* Tag */}
        <span className="absolute right-1/2 top-[-9px] flex translate-x-1/2 items-center gap-1 rounded-full bg-yellow-400 px-2 py-1 text-xs text-black">
          <PiCrownLight size={15} />
          <span>سبيشل</span>
        </span>
      </div>
    </div>
  );
}

export default SidebarImg;
