import * as Styled from './Styled.js';
import RentsModal from '../../Books/modal/RentsModal';
import RentApplyModal from '../../Books/RentDetail/RentAside/RentApplyModal.jsx';

const BackDrop = ({
  target,
  closeModal,
  duration = [],
  title = '',
  rentalFee = 0,
  selectDate = 0,
  writer,
}) => {
  return (
    <Styled.BackDropDiv>
      <Styled.BackDropLayer onClick={() => closeModal()} />
      {target === 'rent' ? (
        <RentsModal onClose={closeModal} title={title} />
      ) : (
        <RentApplyModal
          title={title}
          writer={writer}
          rentalFee={rentalFee}
          duration={duration}
          selectDate={selectDate}
          closeModal={closeModal}
        />
      )}
    </Styled.BackDropDiv>
  );
};

export default BackDrop;
