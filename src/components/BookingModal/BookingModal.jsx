import { useState } from "react";
import { format } from "date-fns";

import { Step1_Personal } from "./steps/Step1_Personal";
import { Step2_Barber } from "./steps/Step2_Barber";
import { Step4_Date } from "./steps/Step4_Date";
import { Step3_Services } from "./steps/Step3_Services";
import { Step5_Preview } from "./steps/Step5_Preview";
import { Step6_Created } from "./steps/Step6_Created";

export function BookingModal() {
  const [barber, setBarber] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [stepVisible, setStepVisible] = useState(1);

  const selectFormattedDate = date ? format(new Date(date), "yyyy-MM-dd") : "";

  const handleClickButtonPrevious = () => {
    setStepVisible(stepVisible - 1);
  };
  const handleClickButtonNext = () => {
    setStepVisible(stepVisible + 1);
  };

  const createAppointment = () => {
    setStepVisible(stepVisible + 1);
  };
  return (
    <>
      {stepVisible === 1 && (
        <Step1_Personal
          isShowButtonPrev={false}
          onClickButtonPrevious={handleClickButtonPrevious}
          onclickButtonNext={handleClickButtonNext}
        />
      )}
      {stepVisible === 2 && (
        <Step2_Barber
          barber={barber}
          setBarber={setBarber}
          isShowButtonPrev={true}
          onClickButtonPrevious={handleClickButtonPrevious}
          onclickButtonNext={handleClickButtonNext}
        />
      )}
      {stepVisible === 3 && (
        <Step3_Services
          service={service}
          setService={setService}
          isShowButtonPrev={true}
          onClickButtonPrevious={handleClickButtonPrevious}
          onclickButtonNext={handleClickButtonNext}
        />
      )}
      {stepVisible === 4 && (
        <Step4_Date
          barber={barber}
          selectDate={date}
          handleChangeDate={setDate}
          formattedDate={selectFormattedDate}
          selectedTime={selectedTime}
          handleChangeTime={setSelectedTime}
          isShowButtonPrev={true}
          onClickButtonPrevious={handleClickButtonPrevious}
          onclickButtonNext={handleClickButtonNext}
        />
      )}
      {stepVisible === 5 && (
        <Step5_Preview
          selectBarber={barber}
          selectService={service}
          selectDate={selectFormattedDate}
          selectedTime={selectedTime}
          isShowButtonPrev={true}
          isShowButtonNext={true}
          onClickButtonPrevious={handleClickButtonPrevious}
          createAppointment={createAppointment}
        />
      )}
      {stepVisible === 6 && (
        <Step6_Created
          isShowButtonPrev={false}
          isShowButtonNext={true}
          stepVisible={stepVisible}
          setStepVisible={setStepVisible}
        />
      )}
    </>
  );
}
