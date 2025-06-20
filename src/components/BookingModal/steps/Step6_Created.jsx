import { Modal } from "../../../ui/Modal/Modal";

export function Step6_Created({
  isShowButtonPrev,
  isShowButtonNext,
  stepVisible,
  setStepVisible,
}) {
  return (
    <Modal
      showButtonPrev={isShowButtonPrev}
      showButtonNext={isShowButtonNext}
      stepVisible={stepVisible}
      setStepVisible={setStepVisible}
    >
      <div className="mt-48  rounded-3xl flex flex-col items-center justify-center ">
        <div className="w-80 h-80 bg-[rgb(82,180,223)]  border-2 border-black rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-52 h-52 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <p className="mt-16 text-center text-3xl font-semibold text-black">
          Appointment created!
        </p>
      </div>
    </Modal>
  );
}
