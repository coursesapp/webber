import { Command } from './Command.js';

export class UpdateChildStyleCommand extends Command {
  constructor(stateDispatcher, gridItemId, childIndex, newStyleProps, prevStyleProps) {
    super();
    this.stateDispatcher = stateDispatcher;
    this.gridItemId = gridItemId;
    this.childIndex = childIndex;
    this.newStyleProps = newStyleProps;
    this.prevStyleProps = prevStyleProps;
  }

  execute() {
    this.stateDispatcher.dispatch({
      type: 'UPDATE_CHILD_STYLE',
      payload: {
        id: this.gridItemId,
        childIndex: this.childIndex,
        styleProps: this.newStyleProps,
      },
    });
    const gridItem = document.getElementById(this.gridItemId);
    if (gridItem && gridItem.children[this.childIndex]) {
      const child = gridItem.children[this.childIndex];
      if (this.newStyleProps.width) child.style.width = this.newStyleProps.width;
      if (this.newStyleProps.height) child.style.height = this.newStyleProps.height;
      if (this.newStyleProps.backgroundColor) child.style.backgroundColor = this.newStyleProps.backgroundColor;
      if (this.newStyleProps.textColor) child.style.color = this.newStyleProps.textColor;
      if (this.newStyleProps.fontSize) child.style.fontSize = this.newStyleProps.fontSize;
      // New grid properties
      if (this.newStyleProps.gridColumn) child.style.gridColumn = this.newStyleProps.gridColumn;
      if (this.newStyleProps.gridRow) child.style.gridRow = this.newStyleProps.gridRow;
      if (this.newStyleProps.justifySelf) child.style.justifySelf = this.newStyleProps.justifySelf;
      if (this.newStyleProps.alignSelf) child.style.alignSelf = this.newStyleProps.alignSelf;
    }
  }

  undo() {
    this.stateDispatcher.dispatch({
      type: 'UPDATE_CHILD_STYLE',
      payload: {
        id: this.gridItemId,
        childIndex: this.childIndex,
        styleProps: this.prevStyleProps,
      },
    });
    const gridItem = document.getElementById(this.gridItemId);
    if (gridItem && gridItem.children[this.childIndex]) {
      const child = gridItem.children[this.childIndex];
      if (this.prevStyleProps.width) child.style.width = this.prevStyleProps.width;
      if (this.prevStyleProps.height) child.style.height = this.prevStyleProps.height;
      if (this.prevStyleProps.backgroundColor) child.style.backgroundColor = this.prevStyleProps.backgroundColor;
      if (this.prevStyleProps.textColor) child.style.color = this.prevStyleProps.textColor;
      if (this.prevStyleProps.fontSize) child.style.fontSize = this.prevStyleProps.fontSize;
      // New grid properties
      if (this.prevStyleProps.gridColumn) child.style.gridColumn = this.prevStyleProps.gridColumn;
      if (this.prevStyleProps.gridRow) child.style.gridRow = this.prevStyleProps.gridRow;
      if (this.prevStyleProps.justifySelf) child.style.justifySelf = this.prevStyleProps.justifySelf;
      if (this.prevStyleProps.alignSelf) child.style.alignSelf = this.prevStyleProps.alignSelf;
    }
  }
}