import { BarberForm } from "../../components/steps/BarberForm";
import { CreatedForm } from "../../components/steps/CreatedForm";
import { DateForm } from "../../components/steps/DateForm";
import { PersonalForm } from "../../components/steps/PersonalForm";
import { PreviewForm } from "../../components/steps/PreviewForm";
import { ServicesForm } from "../../components/steps/ServicesForm";
import { Button } from "../Button/Button";

export function Stepper({
  handleNext,
  handlePrev,
  handleCreateAppointment,
  stepVisible,
  steps,
}) {
  return (
    <div className="flex flex-col">
      {steps.map(
        (step) =>
          stepVisible === step.id && (
            <div key={step.id} className="flex flex-col h-full">
              <h2 className="card-title justify-center mb-5 text-3xl text-black">
                {`${step.id + 1}. ${step.title}`}
              </h2>
              <progress
                className="progress progress-info w-full mb-5"
                value={(step.id / (steps.length - 1)) * 100}
                max="100"
              ></progress>
              <div
                className={`flex flex-col ${
                  steps.at(-1) === step ? "justify-center" : "justify-between"
                } min-h-[550px]`}
              >
                <div className="">{step.component}</div>
                <div className="flex flex-col gap-1 mt-5">
                  {steps.at(0) !== step && steps.at(-1) !== step && (
                    <Button
                      onClick={handlePrev}
                      className="mx-auto join-item btn btn-outline text-black"
                    >
                      Previous page
                    </Button>
                  )}
                  {steps.at(-1) !== step && steps.at(-2) !== step && (
                    <Button
                      onClick={handleNext}
                      className="mx-auto join-item btn btn-outline text-black"
                    >
                      Next
                    </Button>
                  )}
                  {steps.at(-2) === step && (
                    <Button
                      onClick={handleCreateAppointment}
                      className=" mx-auto px-4 py-2 rounded-md font-semibold transition-all duration-300
        bg-[rgb(82,180,223)] hover:bg-[rgb(87,135,155)]"
                    >
                      Create Appointment
                    </Button>
                  )}
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
}
