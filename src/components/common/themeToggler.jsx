/**
 * Theme Toggler
 *
 */

import { useContext } from "react";
import { MdOutlineBrightness2 } from "react-icons/md";
import { BsBrightnessHigh } from "react-icons/bs";

import SidebarIcon from "./sidebarIcon";
import { ThemeContext } from "../../App";

const ThemeToggler = () => {
  const { userTheme, handleThemeToggle } = useContext(ThemeContext);

  return (
    <SidebarIcon classes="font-bold" onClick={handleThemeToggle}>
      {userTheme === "light" ? (
        <MdOutlineBrightness2 size={30} />
      ) : (
        <BsBrightnessHigh size={30} className="font-bold" />
      )}
    </SidebarIcon>
  );
};

export default ThemeToggler;
