import SideBarLink from "./SideBarLink";
import { SidebarLinks } from "./SidebarLinks";

type SidebarCategoryProps = {
  categoryName: string;
  links: SidebarLinks[];
};

function SideBarCategory({ categoryName, links }: SidebarCategoryProps) {
  return (
    <>
      <p className="text-lg text-secondary ps-5">{categoryName}</p>
      <ul className="flex size-full flex-col gap-1">
        {links.map((link, i) => (
          <SideBarLink key={i} label={link.label} icon={link.icon} />
        ))}
      </ul>
    </>
  );
}

export default SideBarCategory;
