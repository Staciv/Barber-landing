import { Calendar } from "../../ui/Calendar/Calendar";
import { AvailableTimeSlots } from "../AvailableTimeSlots/AvailableTimeSlots";

export function DateForm({
  barber,
  selectDate,
  handleChangeDate,
  formattedDate,
  selectedTime,
  handleChangeTime,
}) {
  return (
    <div className="flex flex-col gap-5 tablet:flex-col tablet:gap-5 mobile:gap-0 mobile:flex-col">
      <Calendar selectedDate={selectDate} setDate={handleChangeDate} />
      <AvailableTimeSlots
        selectedTime={selectedTime}
        setSelectedTime={handleChangeTime}
        selectedDate={formattedDate}
        selectedBarber={barber}
      />
    </div>
  );
}
