import styled from 'styled-components';

const FileUploadModal = ({ openModal, closeModal }) => {
  return (
    <Overlay type={openModal ? 'show' : ''}>
      FileUploadModal
    </Overlay>
  );
}

const Overlay = styled.aside`
  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  right: 0;
`;

export default FileUploadModal;
