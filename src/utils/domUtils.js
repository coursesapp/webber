export function selectElement(selector) {
    const element = document.querySelector(selector);
    if (!element) {
      throw new Error(`Element with selector ${selector} not found`);
    }
    return element;
  }