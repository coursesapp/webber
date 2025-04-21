export class StateDispatcher {
  constructor(state) {
    this.state = state;
    this.listeners = [];
  }

  dispatch(action) {
    let changedPayload = null;

    switch (action.type) {
      case 'ADD_GRID_ITEM':
        this.state.addGridItem(action.payload);
        changedPayload = action.payload;
        break;
      case 'REMOVE_GRID_ITEM':
        this.state.gridItems = this.state.gridItems.filter(
          (item) => item.id !== action.payload
        );
        changedPayload = action.payload;
        break;
      case 'UPDATE_CHILD_STYLE':
        {
          const { gridItemId, childIndex, styleProps } = action.payload;
          const gridItem = this.state.getGridItem(gridItemId);
          if (gridItem) {
            gridItem.updateChildStyle(childIndex, styleProps);
            changedPayload = action.payload;
          }
        }
        break;
      case 'UPDATE_GRID_ITEM_STYLE':
        {
          const { id, styleProps } = action.payload;
          const gridItem = this.state.getGridItem(id);
          if (gridItem) {
            if (styleProps.width) gridItem.width = styleProps.width;
            if (styleProps.height) gridItem.height = styleProps.height;
            if (styleProps.backgroundColor) gridItem.backgroundColor = styleProps.backgroundColor;
            if (styleProps.border) gridItem.border = { ...styleProps.border };
            if (styleProps.padding) gridItem.padding = styleProps.padding;
          }
        }
        break;
      case 'UPDATE_CHILD_COUNT':
        {
          const { gridItemId, count } = action.payload;
          const gridItem = this.state.getGridItem(gridItemId);
          if (gridItem) {
            const currentCount = gridItem.children.length;
            if (count > currentCount) {
                gridItem.addChild();
            } else if (count < currentCount) {
              for (let i = currentCount - 1; i >= count; i--) {
                gridItem.removeChild(i);
              }
            }
          }
        }
        break;
      default:
        console.warn(`Unknown action type: ${action.type}`);
    }
    this.notify(action.type, changedPayload);
  }

  subscribe(listener) {
    this.listeners.push(listener);
  }

  notify(actionType, payload) {
    this.listeners.forEach((listener) => listener(this.state, actionType, payload));
  }
}