import { Command } from './Command.js';

export class MoveGridItemCommand extends Command {
  constructor(stateDispatcher, gridItemId, newLeft, newTop, prevLeft, prevTop) {
    super();
    this.stateDispatcher = stateDispatcher;
    this.gridItemId = gridItemId;
    this.newLeft = newLeft;
    this.newTop = newTop;
    this.prevLeft = prevLeft;
    this.prevTop = prevTop;
  }

  execute() {
    this.stateDispatcher.dispatch({
      type: 'UPDATE_GRID_ITEM_POSITION',
      payload: { id: this.gridItemId, left: this.newLeft, top: this.newTop },
    });
    const element = document.getElementById(this.gridItemId);
    if (element) {
      element.style.left = this.newLeft;
      element.style.top = this.newTop;
    }
  }

  undo() {
    this.stateDispatcher.dispatch({
      type: 'UPDATE_GRID_ITEM_POSITION',
      payload: { id: this.gridItemId, left: this.prevLeft, top: this.prevTop },
    });
    const element = document.getElementById(this.gridItemId);
    if (element) {
      element.style.left = this.prevLeft;
      element.style.top = this.prevTop;
    }
  }
}