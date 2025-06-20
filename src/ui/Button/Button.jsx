export function Button({ className, onClick, isActive, children, isDisabled }) {
  return (
    <button
      className={`btn ${
        isActive ? "active" : ""
      } ${className} btn btn-wide tablet:text-xs mobile:text-[11px] text-black`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}
