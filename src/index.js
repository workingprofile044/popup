import './styles.css';
import { createPopup } from './popup';

document.addEventListener('DOMContentLoaded', () => {
    console.log('CSS Loaded'); 

    const button = document.createElement('button');
    button.innerText = 'Show Popup';
    button.style.position = 'absolute';
    button.style.top = '50%';
    button.style.left = '50%';
    button.style.transform = 'translate(-50%, -50%)';
    button.onclick = () => createPopup('Name', 'Description');
    
    document.body.appendChild(button);
});
