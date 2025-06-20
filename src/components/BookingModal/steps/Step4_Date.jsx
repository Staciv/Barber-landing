import { Modal } from "../../../ui/Modal/Modal";
import { Calendar } from "../../../ui/Calendar/Calendar";
import { AvailableTimeSlots } from "./../../BookingModal/components/AvailableTimeSlots/AvailableTimeSlots";

export function Step4_Date({
  barber,
  selectDate,
  handleChangeDate,
  formattedDate,
  selectedTime,
  handleChangeTime,
  isShowButtonPrev,
  onclickButtonNext,
  onClickButtonPrevious,
}) {
  let formValidation;

  if (formattedDate && selectedTime) {
    formValidation = true;
  } else {
    formValidation = false;
  }
  return (
    <Modal
      cardTitle="4. Date"
      showButtonPrev={isShowButtonPrev}
      onclickButtonNext={formValidation && onclickButtonNext}
      onClickButtonPrevious={onClickButtonPrevious}
    >
      <div className="flex flex-col gap-5 tablet:flex-col tablet:gap-5 mobile:gap-0 mobile:flex-col">
        <Calendar selectedDate={selectDate} setDate={handleChangeDate} />
        <AvailableTimeSlots
          selectedTime={selectedTime}
          setSelectedTime={handleChangeTime}
          selectedDate={formattedDate}
          selectedBarber={barber}
        />
      </div>
    </Modal>
  );
}
