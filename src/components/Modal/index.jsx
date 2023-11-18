/* eslint-disable react/prop-types */
import { useRef } from 'react';
import Portal from '../Portal';
import styled from 'styled-components';

const Backdrop = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(51, 51, 51, 0.3);
    backdrop-filter: blur(1px);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 1;
`;

const Content = styled.div`
    position: relative;
    padding: 20px;
    box-sizing: border-box;
    min-height: 50px;
    min-width: 50px;
    max-height: 80%;
    max-width: 80%;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    border-radius: 2px;
    transform: translateY(0);
    opacity: 1;
`;

const Modal = ({ children, open, onClose }) => {
    const ref = useRef(null);
    if (!open) return null;

    const onCloseModal = (e) => {
        if (e.target === ref.current) onClose();
    };
    return (
        <Portal>
            <Backdrop ref={ref} onClick={(e) => onCloseModal(e)}>
                <Content>{children}</Content>
            </Backdrop>
        </Portal>
    );
};

export default Modal;
