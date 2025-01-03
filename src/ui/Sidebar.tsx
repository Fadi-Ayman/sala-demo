import { AnimatePresence } from "framer-motion";
import SidebarGiftArea from "../components/Sidebar/SidebarGiftArea";
import SidebarLinks from "../components/Sidebar/SidebarLinks";
import { useSidebar } from "../contexts/SidebarContext";
import { motion } from "framer-motion";

function Sidebar() {
  const { isSidebarOpen } = useSidebar();

  return (
    <AnimatePresence>
      <motion.aside
        initial={{ x: 0 }}
        animate={{ x: isSidebarOpen ? 0 : 260 }}
        transition={{ duration: 0.1, type: "tween" }}
        className="z-[1000] col-start-1 col-end-1 row-start-2 row-end-11 h-full translate-x-[260px] flex-col items-center justify-between gap-5 overflow-x-hidden overflow-y-scroll bg-primary pt-8 text-white md:row-end-12 md:flex md:translate-x-0"
      >
        <SidebarGiftArea />
        <SidebarLinks />
      </motion.aside>
    </AnimatePresence>
  );
}

export default Sidebar;
