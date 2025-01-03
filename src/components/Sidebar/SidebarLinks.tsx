import { IoHomeOutline } from "react-icons/io5";
import SideBarCategory from "./SidebarCategory";

export type SidebarLinks = {
  label: string;
  icon: JSX.Element;
};

export type SidebarNavLinksCategory = {
  categoryName: string;
  links: SidebarLinks[];
};

const TempLinksCategories: SidebarLinks[] = [
  { label: "الرئيسية", icon: <IoHomeOutline /> },
  { label: "المتنجات", icon: <IoHomeOutline /> },
  { label: "الطلبات", icon: <IoHomeOutline /> },
  { label: "العملاء", icon: <IoHomeOutline /> },
  { label: "التقارير", icon: <IoHomeOutline /> },
  { label: "الأسئلة و التقييمات", icon: <IoHomeOutline /> },
  { label: "الصفحات التعريفية", icon: <IoHomeOutline /> },
  { label: "الادوات التسويقية", icon: <IoHomeOutline /> },
];

const SidebarAllCategories: SidebarNavLinksCategory[] = [
  { categoryName: "", links: TempLinksCategories },
  { categoryName: "قنوات البيع", links: TempLinksCategories },
  { categoryName: "أدوات مساندة", links: TempLinksCategories },
  { categoryName: "مظهر المتجر ", links: TempLinksCategories },
];

function SidebarLinks() {
  return (
    <div className="flex size-full flex-col gap-4">
      {SidebarAllCategories.map((category, index) => (
        <SideBarCategory
          key={index}
          links={category.links}
          categoryName={category.categoryName}
        />
      ))}
    </div>
  );
}

export default SidebarLinks;
