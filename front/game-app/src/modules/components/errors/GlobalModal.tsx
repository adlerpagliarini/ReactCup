import { useModal } from './context/ModalContext';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

function GlobalModal() {
  const { modalContent, hideModal } = useModal();

  return (
    <Modal isOpen={!!modalContent} toggle={hideModal}>
      {modalContent && (
        <>
          <ModalHeader toggle={hideModal}>{modalContent.title}</ModalHeader>
          <ModalBody>{modalContent.body}</ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={hideModal}>
              Fechar
            </Button>
          </ModalFooter>
        </>
      )}
    </Modal>
  );
}

export default GlobalModal;