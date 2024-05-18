export function createPopup(name, description) {
    const existingPopup = document.querySelector('.popup');
    if (existingPopup) {
        existingPopup.remove();
    }

    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.innerHTML = `<h1>${name}</h1><p>${description}</p>`;
    
    document.body.appendChild(popup);

    popup.style.position = 'fixed';
    popup.style.top = '10%';
    popup.style.left = '50%';
    popup.style.transform = 'translateX(-50%)';
    popup.style.backgroundColor = '#fff';
    popup.style.border = '1px solid #000';
    popup.style.padding = '20px';
    popup.style.zIndex = '1000';
}
