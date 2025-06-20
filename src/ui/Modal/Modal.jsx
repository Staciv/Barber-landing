import { Button } from "../Button/Button";

export function Modal({
  cardTitle,
  children,
  showButtonPrev,
  showButtonNext,
  footerContent,
  onClickButtonPrevious,
  onclickButtonNext,
}) {
  return (
    <div className="card bg-gray-100 desktop:w-[550px] desktop:h-[650px] h-3/4 shadow-sm">
      <div className="card-body flex flex-col justify-between">
        <div className="card-top">
          <h2 className="card-title justify-center mb-10 text-3xl text-black">
            {cardTitle}
          </h2>
          {children}
        </div>
        <div className="flex flex-col gap-3">
          {showButtonPrev && (
            <Button
              onClick={onClickButtonPrevious}
              className="mx-auto join-item btn btn-outline text-black"
            >
              Previous page
            </Button>
          )}
          {footerContent}

          {!showButtonNext && (
            <Button
              onClick={onclickButtonNext}
              className="mx-auto join-item btn btn-outline text-black"
            >
              Next
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
