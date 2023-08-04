/**
 * Wrapper for Sidebar Icon
 *
 */

const SidebarIcon = ({ classes, children, borderClasses, onClick }) => {
  return (
    <div
      className={`  flex items-center justify-center  w-[50px] h-[45px] text-gray-800 bg-slate-300 dark:bg-neutral-700 dark:text-gray-300 cursor-pointer  ${
        borderClasses || "rounded-lg "
      }   ${classes} `}
      onClick={onClick ? () => onClick() : null}
    >
      {children}
    </div>
  );
};

export default SidebarIcon;
