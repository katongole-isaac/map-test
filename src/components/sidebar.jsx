/**
 * Left side bar
 *
 */

import { BsWindowSidebar } from "react-icons/bs";
import { FaMapLocationDot } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";

import SidebarIcon from "./common/sidebarIcon";
import ThemeToggler from "./common/themeToggler";

const Sidebar = () => {
  return (
    <div className="flex flex-col h-full w-full p-2 items-center ">
      {/* logo */}
      <div className="min-h-[80px]  ">
        <p>Logo</p>
      </div>

      {/* nav */}
      <div className="flex-1 flex gap-5  flex-col border-y my-2 py-8  ">
        <ThemeToggler />
        <SidebarIcon>
          <FaMapLocationDot size={20} className="font-bold" />
        </SidebarIcon>
        <SidebarIcon>
          <BsWindowSidebar size={20} />
        </SidebarIcon>
      </div>

      {/* account logo  */}

      <div className="min-h-[85px] py-1  flex flex-col items-center justify-center ">
        <SidebarIcon
          borderClasses="rounded-full"
          classes="w-[40px!important] h-[40px!important]"
        >
          <VscAccount size={20} />
        </SidebarIcon>
      </div>
    </div>
  );
};

export default Sidebar;
