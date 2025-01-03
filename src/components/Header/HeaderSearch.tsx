import { Tooltip } from "flowbite-react";
import { IoInformationCircleOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";

function HeaderSearch() {
  return (
    <div className="flex items-center  ">
      {/* Search Input with Tooltip */}
      <div className="relative flex items-center ">
        <input
          type="text"
          placeholder="ابحث برقم الطلب , اسم عميل , رقم الشحنه"
          className="h-10 block w-[150px] lg:w-[300px] rounded-s border border-gray-200 p-2 text-sm focus:border-gray-200 focus:ring-0"
        />
        <div className="absolute bg-white left-2 top-1/2 -translate-y-1/2 transform">
          <Tooltip
            className="w-[15rem] bg-secondary text-primary"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut blanditiis eos illum libero placeat odio, facere perspiciatis porro sunt minima provident."
          >
            <IoInformationCircleOutline size={22} className="text-primary" />
          </Tooltip>
        </div>

      </div>

      {/* Dropdown Select and Search Button */}
      <div className="flex items-center space-x-0">
        <select
          className="h-10 w-[5rem] lg:w-[6rem] border border-gray-200 text-sm text-gray-600 focus:border-gray-200 focus:ring-0"
          name=""
          id=""
        >
          <option className="text-sm text-gray-600" value="">
            الطلبات
          </option>
          <option className="text-sm text-gray-600" value="">
            المنتجات
          </option>
          <option className="text-sm text-gray-600" value="">
            العملاء
          </option>
        </select>
        <button className="flex h-10 items-center rounded-e-sm bg-secondary px-3 py-2 text-primary">
          <IoIosSearch size={22} />
        </button>
      </div>
    </div>
  );
}

export default HeaderSearch;
