import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

const Modal = (props) => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        setActive(props.active);
    }, [props.active]);

    return (
        <div id={props.id} className={`modal ${active ? 'active' : ''}`}>
            {props.children}
        </div>
    );
};

Modal.propTypes = {
    active: PropTypes.bool,
    id: PropTypes.string,
};

export const ModalContent = (props) => {
    const contenRef = useRef(null);

    const closeModal = () => {
        contenRef.current.parentNode.classList.remove('active');
        if (props.onClose) props.onClose();
    };

    return (
        <div className="modal__content">
            {props.children}
            <div className="Modal_content__close" onClick={closeModal}>
                <i className="bx bx-x"></i>
            </div>
        </div>
    );
};

ModalContent.propTypes = {
    onClose: PropTypes.func,
};

export default Modal;
