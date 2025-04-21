import { Command } from './Command.js';

export class AddGridItemCommand extends Command {
  constructor(stateDispatcher, gridItem, gridContainer) {
    super();
    this.stateDispatcher = stateDispatcher;
    this.gridItem = gridItem;
    this.gridContainer = gridContainer;
    this.domElement = null;
  }

  execute() {
    this.stateDispatcher.dispatch({
      type: 'ADD_GRID_ITEM',
      payload: this.gridItem,
    });
    this.domElement = this.createDOMElement();
    this.gridContainer.appendChild(this.domElement);
  }

  undo() {
    this.stateDispatcher.dispatch({
      type: 'REMOVE_GRID_ITEM',
      payload: this.gridItem.id,
    });
    if (this.domElement && this.domElement.parentNode) {
      this.domElement.parentNode.removeChild(this.domElement);
    }
  }

  createDOMElement() {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridItem.id = this.gridItem.id;
    gridItem.style.width = this.gridItem.width;
    gridItem.style.height = this.gridItem.height;
    gridItem.style.backgroundColor = this.gridItem.backgroundColor;
    gridItem.style.border = `${this.gridItem.border.thickness} ${this.gridItem.border.style} ${this.gridItem.border.color}`;
    gridItem.style.padding = this.gridItem.padding;
    // Apply grid layout
    gridItem.style.display = 'grid';
    gridItem.style.gridTemplateColumns = this.gridItem.gridTemplateColumns;
    gridItem.style.gridTemplateRows = this.gridItem.gridTemplateRows;
    gridItem.style.gap = this.gridItem.gap;
    gridItem.style.justifyItems = this.gridItem.justifyItems;
    gridItem.style.alignItems = this.gridItem.alignItems;

    this.gridItem.children.forEach((child, index) => {
      const childEl = document.createElement('div');
      childEl.classList.add('grid-child');
      childEl.style.width = child.width;
      childEl.style.height = child.height;
      childEl.style.backgroundColor = child.backgroundColor;
      childEl.style.color = child.textColor;
      childEl.style.fontSize = child.fontSize;
      childEl.style.border = '1px solid #ddd';
      childEl.textContent = child.content;
      childEl.setAttribute('draggable', 'true');
      childEl.dataset.childIndex = index;
      // Apply child grid properties
      childEl.style.gridColumn = child.gridColumn;
      childEl.style.gridRow = child.gridRow;
      childEl.style.justifySelf = child.justifySelf;
      childEl.style.alignSelf = child.alignSelf;
      gridItem.appendChild(childEl);
    });

    return gridItem;
  }
}