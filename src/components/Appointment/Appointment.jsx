import appointmentImage from "../../assets/appointment-image.webp";
import { Button } from "../../ui/Button/Button";

export function Appointment() {
  return (
    <div
      className="hero desktop:min-h-screen  tablet:min-h-[500px] mobile:min-h-96"
      style={{
        backgroundImage: `url(${appointmentImage})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md ">
          <h1 className="mb-5 font-smooch  desktop:text-6xl tablet:text-3xl mobile:text-base">
            The Den where confidence is crafted.
          </h1>
          <p className="mb-5 font-smooch desktop:text-2xl tablet:text-xl  mobile:text-xs">
            Welcome to our barbershop — a space where precision meets
            personality. Sit back, unwind, and let us shape your signature
            style.
          </p>
          <Button
            className=" px-4 py-2 rounded-md font-semibold transition-all duration-300
                  bg-[rgb(82,180,223)] hover:bg-[rgb(87,135,155)]"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            APPOINTMENT
          </Button>
        </div>
      </div>
    </div>
  );
}
