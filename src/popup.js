export function createPopup(name, description, button) {
    const existingPopup = document.querySelector('.popup');
    if (existingPopup) {
        existingPopup.remove();
    }

    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.innerHTML = `<h1>${name}</h1><p>${description}</p>`;
    
    document.body.appendChild(popup);

    const buttonRect = button.getBoundingClientRect();
    popup.style.position = 'absolute';
    popup.style.top = `${buttonRect.top - popup.offsetHeight - 10}px`;
    popup.style.left = `${buttonRect.left + (buttonRect.width / 2) - (popup.offsetWidth / 2)}px`;
    popup.style.backgroundColor = '#fff';
    popup.style.border = '1px solid #000';
    popup.style.padding = '20px';
    popup.style.zIndex = '1000';
}

export function removePopup() {
    const existingPopup = document.querySelector('.popup');
    if (existingPopup) {
        existingPopup.remove();
    }
}
