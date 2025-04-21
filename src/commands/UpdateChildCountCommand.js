import { Command } from './Command.js';

export class UpdateChildCountCommand extends Command {
  constructor(stateDispatcher, gridItemId, newCount, prevCount, gridContainer) {
    super();
    this.stateDispatcher = stateDispatcher;
    this.gridItemId = gridItemId;
    this.newCount = newCount;
    this.prevCount = prevCount;
    this.gridContainer = gridContainer;
    this.dragService = null;
  }

  setDragService(dragService) {
    this.dragService = dragService;
  }

  execute() {
    console.log('Executing UpdateChildCountCommand:', {
      gridItemId: this.gridItemId,
      newCount: this.newCount,
      prevCount: this.prevCount,
    });
  
    this.stateDispatcher.dispatch({
      type: 'UPDATE_CHILD_COUNT',
      payload: {
        gridItemId: this.gridItemId,
        count: this.newCount,
      },
    });
  
    const gridItemEl = document.getElementById(this.gridItemId);
    if (!gridItemEl) {
      console.error('GridItem element not found in DOM:', this.gridItemId);
      return;
    }
  
    const gridItem = this.stateDispatcher.state.getGridItem(this.gridItemId);
    if (!gridItem) {
      console.error('GridItem not found in state:', this.gridItemId);
      return;
    }
  
    console.log('GridItem found, current children:', JSON.stringify(gridItem.children, null, 2));
  
    const currentDomChildren = gridItemEl.querySelectorAll('.grid-child');
    const currentCount = currentDomChildren.length;
    const targetCount = this.newCount;
  
    // Remove excess DOM children
    if (targetCount < currentCount) {
      for (let i = currentCount - 1; i >= targetCount; i--) {
        const childEl = currentDomChildren[i];
        if (childEl) {
          gridItemEl.removeChild(childEl);
        }
      }
    }
  
    // Add new DOM children if needed
    if (targetCount > currentCount) {
      for (let i = currentCount; i < targetCount; i++) {
        const child = gridItem.children[i];
        if (!child) {
          console.warn('Missing child in state for index:', i);
          continue;
        }
  
        const childEl = document.createElement('div');
        childEl.classList.add('grid-child');
        childEl.style.width = child.width || 'auto';
        childEl.style.height = child.height || '100px';
        childEl.style.backgroundColor = child.backgroundColor || '#e0e0e0';
        childEl.style.color = child.textColor || '#000000';
        childEl.style.fontSize = child.fontSize || '16px';
        childEl.style.border = '1px solid #ddd';
        childEl.style.gridColumn = child.gridColumn || 'auto';
        childEl.style.gridRow = child.gridRow || 'auto';
        childEl.style.justifySelf = child.justifySelf || 'stretch';
        childEl.style.alignSelf = child.alignSelf || 'stretch';
        childEl.textContent = child.content || `Child ${i + 1}`;
        childEl.setAttribute('draggable', 'true');
        childEl.dataset.childIndex = i;
  
        gridItemEl.appendChild(childEl);
  
        if (this.dragService) {
          console.log('Applying drag events for new child of gridItem:', this.gridItemId);
          this.dragService.setupChildDragEvents(childEl, gridItem, i);
        }
      }
    }
  
    // Update layout style
    gridItemEl.style.gridTemplateColumns = gridItem.gridTemplateColumns || `repeat(${targetCount}, 1fr)`;
    console.log('Updated gridItemEl children count:', gridItemEl.children.length);
  }
  

  undo() {
    console.log('Undoing UpdateChildCountCommand:', {
      gridItemId: this.gridItemId,
      prevCount: this.prevCount,
    }); // Debug
    this.stateDispatcher.dispatch({
      type: 'UPDATE_CHILD_COUNT',
      payload: {
        gridItemId: this.gridItemId,
        count: this.prevCount,
      },
    });
    const gridItemEl = document.getElementById(this.gridItemId);
    if (gridItemEl) {
      const gridItem = this.stateDispatcher.state.getGridItem(this.gridItemId);
      if (gridItem) {
        console.log('GridItem found for undo, current children:', JSON.stringify(gridItem.children, null, 2)); // Debug
        while (gridItemEl.firstChild) {
          gridItemEl.removeChild(gridItemEl.firstChild);
        }
        gridItem.children.forEach((child, index) => {
          console.log('Creating child element for undo:', { index, child: JSON.stringify(child, null, 2) }); // Debug
          const childEl = document.createElement('div');
          childEl.classList.add('grid-child');
          childEl.style.width = child.width || 'auto';
          childEl.style.height = child.height || '100px';
          childEl.style.backgroundColor = child.backgroundColor || '#e0e0e0';
          childEl.style.color = child.textColor || '#000000';
          childEl.style.fontSize = child.fontSize || '16px';
          childEl.style.border = '1px solid #ddd';
          childEl.style.gridColumn = child.gridColumn || 'auto';
          childEl.style.gridRow = child.gridRow || 'auto';
          childEl.style.justifySelf = child.justifySelf || 'stretch';
          childEl.style.alignSelf = child.alignSelf || 'stretch';
          childEl.textContent = child.content || `Child ${index + 1}`;
          childEl.setAttribute('draggable', 'true');
          childEl.dataset.childIndex = index;
          gridItemEl.appendChild(childEl);
        });
        gridItemEl.style.gridTemplateColumns = gridItem.gridTemplateColumns || `repeat(${this.prevCount}, 1fr)`;
        console.log('Undo gridItemEl children count:', gridItemEl.children.length); // Debug
        if (this.dragService) {
          console.log('Re-applying drag events for undo:', this.gridItemId); // Debug
          this.dragService.setupChildDragEvents(gridItemEl, gridItem);
        }
      } else {
        console.error('GridItem not found in state for undo:', this.gridItemId); // Debug
      }
    } else {
      console.error('GridItem element not found in DOM for undo:', this.gridItemId); // Debug
    }
  }
}