import styled from 'styled-components';


export const SbContainer = styled.div`
    position: absolute;
    z-index: 999;
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    padding: 0 24px;
    left: 0;
    right: 0;
    border-radius: 15px;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`
export default SbContainer