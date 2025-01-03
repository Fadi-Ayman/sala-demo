import { MdOutlineMailOutline } from "react-icons/md";

function Footer() {
  return (
    <footer className="relative col-span-12 row-start-11 row-end-13 flex w-full items-center justify-center gap-4 overflow-visible border-t-4 border-primary/50 bg-footer px-3 text-white md:row-start-12 lg:ps-32">
      <p>عجبتك التجربة؟ انطلق بتجارتك اليوم مع سلة بسهولة و بدون أي عمولة!</p>
      <button className="rounded-sm bg-secondary px-2 py-2 text-sm font-[500] text-primary/80 md:px-4 md:text-base">
        انشئ متجرك مجاناً
      </button>

      <span className="absolute left-[3%] top-[-2.5rem] flex size-16 items-center justify-center rounded-full bg-secondary text-primary max-[444px]:top-[-3rem]">
        <MdOutlineMailOutline size={23} />
      </span>
    </footer>
  );
}

export default Footer;
