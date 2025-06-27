import appointments from "../AvailableTimeSlots/appointments.json";
import services from "../Services/services.json";

export function PreviewForm({
  selectBarber,
  selectService,
  selectDate,
  selectedTime,
}) {
  return (
    <div className="w-full h-full mx-auto rounded-2xl bg-slate-200 shadow-lg p-6">
      <div className="card-body font-smooch grid divide-y divide-gray-300 text-2xl mobile:text-xl text-black">
        <div className="py-3 mobile:py-1 grid grid-cols-2 gap-x-6">
          <div>Barber:</div>
          <div>
            {appointments.barbers
              .map((a) => (selectBarber === a.id ? a.name : ""))
              .join("")}
          </div>
        </div>

        <div className="py-3 mobile:py-1 items-center grid grid-cols-2 gap-x-6">
          <div>Services:</div>
          <div className="mobile:text-base">{selectService}</div>
        </div>

        <div className="py-3 mobile:py-1 grid grid-cols-2 gap-x-6">
          <div>Date:</div>
          <div>{selectDate}</div>
        </div>

        <div className="py-3 mobile:py-1 grid grid-cols-2 gap-x-6">
          <div>Time:</div>
          <div>{selectedTime}</div>
        </div>

        <div className="py-3 mobile:py-1 grid grid-cols-2 gap-x-6">
          <div>Price:</div>
          <div>
            {services
              .map((s) => (selectService === s.name ? s.price : ""))
              .join("")}
            $
          </div>
        </div>
      </div>
    </div>
  );
}
