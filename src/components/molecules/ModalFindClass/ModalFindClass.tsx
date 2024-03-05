import { Modal } from "antd";
import "./ModalFindClass.scss";
import { VscError } from "react-icons/vsc";
import Breakpoints from "../../../constants/Breakpoints";
import Sizes from "../../../constants/Sizes";
import { IReservedStudent } from "../../../interfaces/reserved-student.interface";
import ReserveInformation from "../ReserveInfomation/ReserveInformation";
import Colors from "../../../constants/Colors";
// import FormFooter from "../FormFooter/FormFooter";

type ModalFindClassProps = {
  data: IReservedStudent;
  open: boolean;
  close: () => void;
};

const ModalFindClass = ({ data, open, close }: ModalFindClassProps) => {
  const handleOk = () => {
    console.log(data);
  };
  return (
    <Modal
      open={open}
      onCancel={close}
      onOk={handleOk}
      title={
        <div className="modal-header-custom centered">Reserving Details</div>
      }
      footer={
        <div className="modal-reserve-footer">
          {/* <FormFooter handleCancel={close} formName="FindClassForm" /> */}
        </div>
      }
      className="modal-reserve"
      width={Breakpoints.Lg}
      closeIcon={<VscError size={Sizes.LgMedium} color={Colors.White} />}
    >
      <div className="model-reserve-content">
        <ReserveInformation data={data} />
      </div>
    </Modal>
  );
};

export default ModalFindClass;
