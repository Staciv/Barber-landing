import { Modal } from "../../../ui/Modal/Modal";
import { Button } from "../../../ui/Button/Button";
import appointments from "../../BookingModal/components/AvailableTimeSlots/appointments.json";
import services from "./../../BookingModal/components/Services/services.json";

export function Step5_Preview({
  selectBarber,
  selectService,
  selectDate,
  selectedTime,
  isShowButtonPrev,
  isShowButtonNext,
  onClickButtonPrevious,
  createAppointment,
}) {
  return (
    <Modal
      cardTitle="5. Preview"
      showButtonPrev={isShowButtonPrev}
      showButtonNext={isShowButtonNext}
      onClickButtonPrevious={onClickButtonPrevious}
      footerContent={
        <Button
          onClick={createAppointment}
          className=" mx-auto px-4 py-2 rounded-md font-semibold transition-all duration-300
        bg-[rgb(82,180,223)] hover:bg-[rgb(87,135,155)]"
        >
          Create Appointment
        </Button>
      }
    >
      <div className="card mx-auto w-96 card-lg ">
        <div className="card-body flex flex-col gap-7 text-2xl text-black">
          <p>
            Barber:
            {appointments.barbers.map((appointment) => {
              return selectBarber === appointment.id ? appointment.name : "";
            })}
          </p>
          <p>Services: {selectService}</p>
          <p>Date:{selectDate}</p>
          <p>Time: {selectedTime}</p>
          <p>
            Prise:
            {services.map((service) => {
              return selectService === service.name ? service.price : "";
            })}
            $
          </p>
        </div>
      </div>
    </Modal>
  );
}
