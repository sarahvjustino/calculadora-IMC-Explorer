export const Modal = {

    Wrapper: document.querySelector('.modal-wrapper'),
    Message: document.querySelector('.modal .title span'),
    ButtonClose: document.querySelector('.modal button.close'),

    open() {
        Modal.Wrapper.classList.add('open');
    },
    close() {
        Modal.Wrapper.classList.remove('open');
    },
}

Modal.ButtonClose.onclick = () => Modal.close();

window.addEventListener('keydown', handleKeyDown);

function handleKeyDown(event) {
    if (event.key === 'Escape') {
        Modal.close()
    }
}