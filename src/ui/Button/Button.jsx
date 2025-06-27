export function Button({ className, onClick, isActive, children, isDisabled }) {
  return (
    <button
      className={`btn ${
        isActive ? "active" : ""
      } ${className} btn btn-wide mobile:w-1/2 tablet:text-xs mobile:text-[11px] text-black`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}
