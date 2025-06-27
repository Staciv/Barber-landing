import { useState } from "react";
import { format } from "date-fns";

import { PersonalForm } from "../steps/PersonalForm";
import { BarberForm } from "../steps/BarberForm";
import { ServicesForm } from "../steps/ServicesForm";
import { DateForm } from "../steps/DateForm";
import { PreviewForm } from "../steps/PreviewForm";
import { CreatedForm } from "../steps/CreatedForm";
import { Modal } from "../../ui/Modal/Modal";
import { Stepper } from "../../ui/Stepper/Stepper";

export function BookingModal() {
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [barber, setBarber] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [stepVisible, setStepVisible] = useState(0);

  const selectFormattedDate = date ? format(new Date(date), "yyyy-MM-dd") : "";

  const handleClickButtonPrevious = () => {
    setStepVisible(stepVisible - 1);
  };
  const handleClickButtonNext = () => {
    setStepVisible(stepVisible + 1);
  };

  const handleClickButtonCreateAppointment = () => {
    setStepVisible(stepVisible + 1);

    console.log(userName);
    console.log(phone);
    console.log(barber);
    console.log(service);
    console.log(selectFormattedDate);
    console.log(selectedTime);
  };

  // const isValid = userName.length >= 3 && phone.length === 9 && Number(phone);

  const STEPS = [
    {
      id: 0,
      title: "Personal",
      component: (
        <PersonalForm
          userName={userName}
          handleChangeUserName={setUserName}
          phone={phone}
          handleChangeUserPhone={setPhone}
        />
      ),
    },
    {
      id: 1,
      title: "Barber",
      component: <BarberForm barber={barber} setBarber={setBarber} />,
    },
    {
      id: 2,
      title: "Services",
      component: (
        <ServicesForm selectService={service} onServiceChange={setService} />
      ),
    },
    {
      id: 3,
      title: "Date",
      component: (
        <DateForm
          barber={barber}
          selectDate={date}
          handleChangeDate={setDate}
          formattedDate={selectFormattedDate}
          selectedTime={selectedTime}
          handleChangeTime={setSelectedTime}
        />
      ),
    },
    {
      id: 4,
      title: "Preview",
      component: (
        <PreviewForm
          selectBarber={barber}
          selectService={service}
          selectDate={selectFormattedDate}
          selectedTime={selectedTime}
          createAppointment={handleClickButtonCreateAppointment}
        />
      ),
    },
    {
      id: 5,
      title: "Created",
      component: (
        <CreatedForm
          stepVisible={stepVisible}
          setStepVisible={setStepVisible}
        />
      ),
    },
  ];

  return (
    <>
      <Modal>
        <Stepper
          handleNext={handleClickButtonNext}
          handlePrev={handleClickButtonPrevious}
          handleCreateAppointment={handleClickButtonCreateAppointment}
          stepVisible={stepVisible}
          steps={STEPS}
        />
      </Modal>
    </>
  );
}
