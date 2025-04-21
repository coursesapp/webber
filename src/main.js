import { UIBuilder } from './services/UIBuilder.js';
import { ServiceFactory } from './services/ServiceFactory.js';
import { StateManager } from './state/StateManager.js';
import { StateDispatcher } from './state/StateDispatcher.js'; // Updated to services
import { CommandManager } from './commands/CommandManager.js';
import { ContextMenu } from './services/ContextMenu.js';
import { GridItem } from './state/GridItem.js';
import { AddGridItemCommand } from './commands/AddGridItemCommand.js';

document.addEventListener('DOMContentLoaded', async () => {
  // Initialize UI
  const uiBuilder = new UIBuilder();
  await uiBuilder.buildUI();
  const elements = uiBuilder.getElements();

  // Initialize state
  const stateManager = new StateManager();
  const stateDispatcher = new StateDispatcher(stateManager.state);
  stateManager.dispatcher = stateDispatcher;

  // Initialize commands
  const commandManager = new CommandManager();

  // Initialize services
  const { dragService, resizeService } = ServiceFactory.createServices(
    elements,
    stateDispatcher,
    commandManager
  );

  // Initialize context menu
  const contextMenu = new ContextMenu(commandManager, stateDispatcher, dragService);
  dragService.contextMenu = contextMenu; // Ensure dragService uses the same contextMenu

  // Setup event listeners
  elements.undoBtn.addEventListener('click', () => commandManager.undo());
  elements.redoBtn.addEventListener('click', () => commandManager.redo());

  // Add grid item button
  elements.addGridItemBtn?.addEventListener('click', () => {
    const gridItem = new GridItem(`grid_${Date.now()}`);
    const command = new AddGridItemCommand(stateDispatcher, gridItem, elements.monitorScreen);
    commandManager.executeCommand(command);
  });


  // Context menu for children
  elements.monitor.addEventListener('dblclick', (e) => {
    const childEl = e.target.closest('.grid-child');
    if (childEl) {
      e.preventDefault();
      const gridItemEl = childEl.closest('.grid-item');
      const gridItemId = gridItemEl.id;
      const childIndex = parseInt(childEl.dataset.childIndex, 10);
      const gridItem = stateDispatcher.state.getGridItem(gridItemId);
      if (gridItem && gridItem.children[childIndex]) {
        contextMenu.showChildMenu(gridItemEl, e.clientX, e.clientY, gridItemId, childIndex, gridItem.children[childIndex]);
      }
    }
  });

  // Close context menu on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.absolute.bg-white')) {
      contextMenu.closeMenu();
    }
  });
});