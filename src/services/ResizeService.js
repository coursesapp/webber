export class ResizeService {
  constructor(elements) {
    this.elements = elements;
    this.isResizing = false;
  }

  init() {
    this.elements.resizer.addEventListener('mousedown', this.startResize.bind(this));
  }

  startResize(e) {
    this.isResizing = true;
    document.addEventListener('mousemove', this.resize.bind(this));
    document.addEventListener('mouseup', this.stopResize.bind(this));
  }

  resize(e) {
    if (this.isResizing) {
      const newWidth = e.clientX - this.elements.monitor.getBoundingClientRect().left;
      this.elements.monitor.style.width = `${newWidth}px`;
    }
  }

  stopResize() {
    this.isResizing = false;
    document.removeEventListener('mousemove', this.resize.bind(this));
    document.removeEventListener('mouseup', this.stopResize.bind(this));
  }
}