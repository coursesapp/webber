import { GridItem } from '../state/GridItem.js';
import { AddGridItemCommand } from '../commands/AddGridItemCommand.js';
import { ContextMenu } from './ContextMenu.js';

const DRAG_TYPE_GRID = 'grid';
const EDGE_THRESHOLD = 50;
const SCROLL_SPEED = 10;

export class DragService { 
  constructor(elements, stateDispatcher, commandManager) {
    this.elements = elements;
    this.stateDispatcher = stateDispatcher;
    this.commandManager = commandManager;
    this.contextMenu = new ContextMenu(commandManager, stateDispatcher, this);
  }

  init() {
    this.setupSidebarDrag();
    this.setupScreenDrop();
  }

  setupSidebarDrag() {
    this.elements.gridElementSidebar.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', DRAG_TYPE_GRID);
    });
  }

  setupScreenDrop() {
    this.elements.screen.addEventListener('dragover', (e) => {
      e.preventDefault();
      this.handleAutoScroll(e);
    });

    this.elements.screen.addEventListener('drop', (e) => {
      e.preventDefault();
      const type = e.dataTransfer.getData('text/plain');
      if (type === DRAG_TYPE_GRID) {
        const gridItem = new GridItem(`grid_${Date.now()}`);
        const command = new AddGridItemCommand(
          this.stateDispatcher,
          gridItem,
          this.elements.gridContainer
        );

        this.commandManager.executeCommand(command);

        this.setupChildDragEvents(command.domElement, gridItem);
        this.setupGridItemContextMenu(command.domElement, gridItem);

        this.elements.gridContainer.scrollLeft = this.elements.gridContainer.scrollWidth;
      }
    });
  }

  handleAutoScroll(e) {
    const rect = this.elements.gridContainer.getBoundingClientRect();
    if (e.clientX < rect.left + EDGE_THRESHOLD) {
      this.elements.gridContainer.scrollLeft -= SCROLL_SPEED;
    } else if (e.clientX > rect.right - EDGE_THRESHOLD) {
      this.elements.gridContainer.scrollLeft += SCROLL_SPEED;
    }
  }

  setupChildDragEvents(gridItem, gridItemModel) {
    let dragSrcEl = null;

    Array.from(gridItem.children).forEach((child, index) => {
      child.draggable = true;
      child.dataset.childIndex = index;

      this._bindChildDragHandlers(child, () => (dragSrcEl = child));
      this._bindChildDropHandlers(child, () => dragSrcEl, gridItem, gridItemModel);
      this._bindChildDoubleClick(child, gridItem, gridItemModel);
    });
  }

  setupGridItemContextMenu(gridItemEl, gridItem) {
    gridItemEl.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      const model = this.stateDispatcher.state.getGridItem(gridItem.id);
      if (!model) {
        console.warn('Grid item model not found:', gridItem.id);
        return;
      }

      this.contextMenu.showGridItemMenu(
        gridItemEl,
        e.clientX,
        e.clientY,
        model.id,
        {
          width: model.width,
          height: model.height,
          backgroundColor: model.backgroundColor,
          border: { ...model.border },
          padding: model.padding,
          childCount: model.children.length,
          gridTemplateColumns: model.gridTemplateColumns,
          gridTemplateRows: model.gridTemplateRows,
          gap: model.gap,
          justifyItems: model.justifyItems,
          alignItems: model.alignItems,
        }
      );
    });
  }
  // ====== HELPER METHODS ======

  _bindChildDragHandlers(child, onDragStartCallback) {
    child.addEventListener('dragstart', (e) => {
      onDragStartCallback();
      e.dataTransfer.effectAllowed = 'move';
    });

    child.addEventListener('dragover', (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
    });
  }

  _bindChildDropHandlers(child, getDragSrcEl, gridItem, gridItemModel) {
    child.addEventListener('drop', (e) => {
      console.log(`-----------drop here -------------`)
      e.stopPropagation();
      const dragSrcEl = getDragSrcEl();
      if (dragSrcEl !== child) {
        const nodes = Array.from(gridItem.children);
        const srcIndex = nodes.indexOf(dragSrcEl);
        const targetIndex = nodes.indexOf(child);

        gridItemModel.reorderChildren(srcIndex, targetIndex);

        gridItem.innerHTML = '';

      // Regenerate DOM children from the model
      gridItemModel.children.forEach((childModel, index) => {
        const childEl = document.createElement('div');
        childEl.textContent = childModel.content;
        childEl.draggable = true;
        childEl.dataset.childIndex = index;
        // Apply styles from model
        childEl.style.width = childModel.width; 
        childEl.style.height = childModel.height;
        childEl.style.backgroundColor = childModel.backgroundColor;
        childEl.style.color = childModel.textColor;
        childEl.style.fontSize = childModel.fontSize;
        childEl.style.gridColumn = childModel.gridColumn;
        childEl.style.gridRow = childModel.gridRow;
        childEl.style.justifySelf = childModel.justifySelf;
        childEl.style.alignSelf = childModel.alignSelf;
        gridItem.appendChild(childEl);
      });

      // Reattach drag events and context menu
      this.setupChildDragEvents(gridItem, gridItemModel);
      this.setupGridItemContextMenu(gridItem, gridItemModel);
       
      }
    });
  }

  _bindChildDoubleClick(child, gridItem, gridItemModel) {
    child.addEventListener('dblclick', (e) => {
      e.preventDefault();
      e.stopPropagation();

      const childIndex = parseInt(child.dataset.childIndex, 10);
      const model = gridItemModel.children[childIndex];

      this.contextMenu.showChildMenu(
        gridItem,
        e.clientX,
        e.clientY,
        gridItemModel.id,
        childIndex,
        {
          width: child.style.width,
          height: child.style.height,
          backgroundColor: model.backgroundColor,
          textColor: model.textColor,
          fontSize: model.fontSize,
          gridColumn: model.gridColumn,
          gridRow: model.gridRow,
          justifySelf: model.justifySelf,
          alignSelf: model.alignSelf,
        }
      );
    });
  }

  _updateChildStyle(domChild, modelChild) {
    domChild.style.gridColumn = modelChild.gridColumn;
    domChild.style.gridRow = modelChild.gridRow;
    domChild.style.justifySelf = modelChild.justifySelf;
    domChild.style.alignSelf = modelChild.alignSelf;
  }
}
