import styled from 'styled-components';
import { backgroundColor } from 'constants/colors';

export const ModalContent = styled.div`
  max-width: 976px;
  margin: 0 auto;
  background: ${backgroundColor} !important;
  border: none !important;
  inset: 200px !important;
  padding: 60px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.1), 0 2px 10px rgba(0, 0, 0, 0.07), 0 10px 20px rgba(0, 0, 0, 0.05), 0 10px 50px rgba(0, 0, 0, 0.05);
`
export const ModalWrapper = styled.div`
  background: rgba(35, 35, 35, 0.918051) !important;
  mix-blend-mode: normal;
  opacity: 0.89;
  backdrop-filter: blur(24.4645px);
  width: 100%;
  height: 100%;
`
