import { Command } from './Command.js';

export class UpdateGridItemStyleCommand extends Command {
  constructor(stateDispatcher, gridItemId, newStyleProps, prevStyleProps) {
    super();
    this.stateDispatcher = stateDispatcher;
    this.gridItemId = gridItemId;
    this.newStyleProps = newStyleProps;
    this.prevStyleProps = prevStyleProps;
  }

  execute() {
    this.stateDispatcher.dispatch({
      type: 'UPDATE_GRID_ITEM_STYLE',
      payload: {
        id: this.gridItemId,
        styleProps: this.newStyleProps,
      },
    });
    const gridItem = document.getElementById(this.gridItemId);
    if (gridItem) {
      if (this.newStyleProps.width) gridItem.style.width = this.newStyleProps.width;
      if (this.newStyleProps.height) gridItem.style.height = this.newStyleProps.height;
      if (this.newStyleProps.backgroundColor) gridItem.style.backgroundColor = this.newStyleProps.backgroundColor;
      if (this.newStyleProps.border) {
        gridItem.style.border = `${this.newStyleProps.border.thickness} ${this.newStyleProps.border.style} ${this.newStyleProps.border.color}`;
      }
      if (this.newStyleProps.padding) gridItem.style.padding = this.newStyleProps.padding;
      // New grid properties
      if (this.newStyleProps.gridTemplateColumns) gridItem.style.gridTemplateColumns = this.newStyleProps.gridTemplateColumns;
      if (this.newStyleProps.gridTemplateRows) gridItem.style.gridTemplateRows = this.newStyleProps.gridTemplateRows;
      if (this.newStyleProps.gap) gridItem.style.gap = this.newStyleProps.gap;
      if (this.newStyleProps.justifyItems) gridItem.style.justifyItems = this.newStyleProps.justifyItems;
      if (this.newStyleProps.alignItems) gridItem.style.alignItems = this.newStyleProps.alignItems;
    }
  }

  undo() {
    this.stateDispatcher.dispatch({
      type: 'UPDATE_GRID_ITEM_STYLE',
      payload: {
        id: this.gridItemId,
        styleProps: this.prevStyleProps,
      },
    });
    const gridItem = document.getElementById(this.gridItemId);
    if (gridItem) {
      if (this.prevStyleProps.width) gridItem.style.width = this.prevStyleProps.width;
      if (this.prevStyleProps.height) gridItem.style.height = this.prevStyleProps.height;
      if (this.prevStyleProps.backgroundColor) gridItem.style.backgroundColor = this.prevStyleProps.backgroundColor;
      if (this.prevStyleProps.border) {
        gridItem.style.border = `${this.prevStyleProps.border.thickness} ${this.prevStyleProps.border.style} ${this.prevStyleProps.border.color}`;
      }
      if (this.prevStyleProps.padding) gridItem.style.padding = this.prevStyleProps.padding;
      // New grid properties
      if (this.prevStyleProps.gridTemplateColumns) gridItem.style.gridTemplateColumns = this.prevStyleProps.gridTemplateColumns;
      if (this.prevStyleProps.gridTemplateRows) gridItem.style.gridTemplateRows = this.prevStyleProps.gridTemplateRows;
      if (this.prevStyleProps.gap) gridItem.style.gap = this.prevStyleProps.gap;
      if (this.prevStyleProps.justifyItems) gridItem.style.justifyItems = this.prevStyleProps.justifyItems;
      if (this.prevStyleProps.alignItems) gridItem.style.alignItems = this.prevStyleProps.alignItems;
    }
  }
}