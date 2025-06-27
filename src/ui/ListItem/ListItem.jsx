export function ListItem({
  onClick,
  isActive,
  name,
  children,
  icon,
  rightText,
}) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={` ${
        isActive ? "bg-primary text-white" : "bg-backgroundCard"
      } p-4 mobile:p-2 list-row rounded-2xl flex flex-row gap-5 hover:shadow-2xl transition duration-300 overflow-hidden desktop:hover:scale-105 transform cursor-pointer`}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-3">
          {icon}
          <div className="text-left pr-5">
            <span className="text-black mobile:text-xs">{name}</span>
            <div className="text-xs text-black uppercase font-semibold opacity-60 mobile:text-[9px]">
              {children}
            </div>
          </div>
        </div>
        <div className="text-right text-black font-medium mobile:text-sm">
          {rightText}
        </div>
      </div>
    </button>
  );
}
