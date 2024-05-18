import './styles.css';
import { createPopup, removePopup } from './popup';

document.addEventListener('DOMContentLoaded', () => {
    const button = document.createElement('button');
    button.innerText = 'Show Popup';
    button.style.position = 'absolute';
    button.style.top = '50%';
    button.style.left = '50%';
    button.style.transform = 'translate(-50%, -50%)';
    button.onclick = (event) => {
        event.stopPropagation();
        createPopup('Name', 'Description', button);
    };

    document.body.appendChild(button);

    document.addEventListener('click', (event) => {
        const popup = document.querySelector('.popup');
        if (popup && !popup.contains(event.target) && event.target !== button) {
            removePopup();
        }
    });
});
