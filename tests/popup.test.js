const { JSDOM } = require('jsdom');
const { createPopup } = require('../src/popup');

test('popup creation', () => {
    const dom = new JSDOM('<!DOCTYPE html><body></body>');
    global.document = dom.window.document;

    createPopup('Test Name', 'Test Description');

    const popup = document.querySelector('.popup');
    expect(popup).not.toBeNull();
    expect(popup.innerHTML).toContain('Test Name');
    expect(popup.innerHTML).toContain('Test Description');
});
