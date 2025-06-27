export function Modal({ children }) {
  return (
    <div className="card bg-gray-100 min-w-[550px] mobile:min-w-full min-h-[650px]  shadow-sm">
      <div className={`card-body flex flex-col`}>
        <div className="card-top">{children}</div>
      </div>
    </div>
  );
}
