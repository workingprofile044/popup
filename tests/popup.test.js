const { JSDOM } = require('jsdom');
const { createPopup } = require('../src/popup');

test('popup creation', () => {
    const dom = new JSDOM('<!DOCTYPE html><body><button id="test-button">Show Popup</button></body>');
    global.document = dom.window.document;

    const button = document.getElementById('test-button');
    button.getBoundingClientRect = () => ({
        top: 100,
        left: 100,
        width: 100,
        height: 50
    });

    createPopup('Test Name', 'Test Description', button);

    const popup = document.querySelector('.popup');
    expect(popup).not.toBeNull();
    expect(popup.innerHTML).toContain('Test Name');
    expect(popup.innerHTML).toContain('Test Description');
});
