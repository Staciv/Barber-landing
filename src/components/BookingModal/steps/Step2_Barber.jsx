import { Modal } from "../../../ui/Modal/Modal";
import { Barbers } from "../components/Barbers/Barbers";

export function Step2_Barber({
  barber,
  setBarber,
  isShowButtonPrev,
  onclickButtonNext,
  onClickButtonPrevious,
}) {
  return (
    <Modal
      cardTitle="2. Barber"
      showButtonPrev={isShowButtonPrev}
      onclickButtonNext={barber && onclickButtonNext}
      onClickButtonPrevious={onClickButtonPrevious}
    >
      <Barbers selectedBarber={barber} onBarberChange={setBarber} />
    </Modal>
  );
}
