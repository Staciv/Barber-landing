import { Modal } from "../../../ui/Modal/Modal";
import { Services } from "../components/Services/Services";

export function Step3_Services({
  service,
  setService,
  isShowButtonPrev,
  onclickButtonNext,
  onClickButtonPrevious,
}) {
  return (
    <Modal
      cardTitle="3. Services"
      showButtonPrev={isShowButtonPrev}
      onclickButtonNext={service && onclickButtonNext}
      onClickButtonPrevious={onClickButtonPrevious}
    >
      <Services selectService={service} onServiceChange={setService} />
    </Modal>
  );
}
