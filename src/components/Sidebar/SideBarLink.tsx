type SideBarLinkProps = {
  label: string;
  icon: React.ReactNode;
};

function SideBarLink({ label, icon }: SideBarLinkProps) {
  return (
    <li className="flex w-full cursor-pointer items-center justify-start gap-3  py-3 hover:bg-black/20 ps-5">
      {icon}
      <span>{label}</span>
    </li>
  );
}

export default SideBarLink;
