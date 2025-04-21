import { UpdateChildStyleCommand } from '../commands/UpdateChildStyleCommand.js';
import { UpdateGridItemStyleCommand } from '../commands/UpdateGridItemStyleCommand.js';
import { UpdateChildCountCommand } from '../commands/UpdateChildCountCommand.js';

export class ContextMenu {
  constructor(commandManager, stateDispatcher, dragService) {
    this.commandManager = commandManager;
    this.stateDispatcher = stateDispatcher;
    this.dragService = dragService;
    this.menu = null;
  }

  createMenu() {
    const menu = document.createElement('div');
    menu.className = 'absolute bg-white border border-gray-300 shadow-lg p-2 rounded z-[1000]';
    menu.style.minWidth = '250px';
    menu.style.maxHeight = '400px';
    menu.style.overflowY = 'auto';
    return menu;
  }

  showChildMenu(gridItemEl, x, y, gridItemId, childIndex, currentStyles) {
    console.log('Showing child menu for gridItemId:', gridItemId, 'childIndex:', childIndex);
    this.closeMenu();
    this.menu = this.createMenu();
  
    const fields = [
      { label: 'Background Color', type: 'color', key: 'backgroundColor', default: '#e0e0e0' },
      { label: 'Width', type: 'text', key: 'width', default: 'auto' },
      { label: 'Height (px)', type: 'number', key: 'height', default: 100, suffix: 'px' },
      { label: 'Text Color', type: 'color', key: 'textColor', default: '#000000' },
      { label: 'Font Size (px)', type: 'number', key: 'fontSize', default: 16, suffix: 'px' },
      { label: 'Grid Column', type: 'text', key: 'gridColumn', default: 'auto' },
      { label: 'Grid Row', type: 'text', key: 'gridRow', default: 'auto' },
      {
        label: 'Justify Self', type: 'select', key: 'justifySelf', default: 'stretch',
        options: ['start', 'end', 'center', 'stretch']
      },
      {
        label: 'Align Self', type: 'select', key: 'alignSelf', default: 'stretch',
        options: ['start', 'end', 'center', 'stretch']
      },
    ];
  
    fields.forEach(field => {
      const value = currentStyles[field.key] || field.default;
      const input = this.createInputField(field, value);
  
      input.addEventListener('change', (e) => {
        e.stopPropagation();
  
        const rawValue = input.value;
        const newValue = field.suffix ? `${rawValue}${field.suffix}` : rawValue;
  
        const childEl = gridItemEl.querySelector(`[data-child-index="${childIndex}"]`);
        if (childEl) {
          childEl.style[field.key] = newValue;
        }
  
        this.stateDispatcher.dispatch({
          type: 'UPDATE_CHILD_STYLE',
          payload: {
            gridItemId,
            childIndex,
            styleProps: { [field.key]: newValue }
          }
        });
      });
  
      const container = this.createLabeledContainer(field.label, input);
      this.menu.appendChild(container);
    });
  
    this.positionMenuRelativeToGridItem(gridItemEl, x, y);
    document.body.appendChild(this.menu);
  }  
  

  
  showGridItemMenu(gridItemEl, x, y, gridItemId, currentStyles) {
    console.log('Showing grid item menu for gridItemId:', gridItemId); // Debug
    this.closeMenu();
    this.menu = this.createMenu();

    const fields = [
      { label: 'Width (%)', type: 'number', key: 'width', value: parseFloat(currentStyles.width) || 100, suffix: '%' },
      { label: 'Height (px)', type: 'number', key: 'height', value: parseFloat(currentStyles.height) || 100, suffix: 'px' },
      { label: 'Background Color', type: 'color', key: 'backgroundColor', value: currentStyles.backgroundColor || '#ffffff' },
      { label: 'Border Color', type: 'color', key: 'border.color', value: currentStyles.border?.color || '#000000' },
      { label: 'Border Thickness (px)', type: 'number', key: 'border.thickness', value: parseFloat(currentStyles.border?.thickness) || 2, suffix: 'px' },
      { label: 'Padding (px)', type: 'number', key: 'padding', value: parseFloat(currentStyles.padding) || 0, suffix: 'px' },
      { label: 'Child Count', type: 'number', key: 'childCount', value: currentStyles.childCount || 1, min: 1 },
      { label: 'Grid Columns (e.g., 1fr 1fr)', type: 'text', key: 'gridTemplateColumns', value: currentStyles.gridTemplateColumns || '1fr' },
      { label: 'Grid Rows (e.g., auto auto)', type: 'text', key: 'gridTemplateRows', value: currentStyles.gridTemplateRows || 'auto' },
      { label: 'Gap (px)', type: 'number', key: 'gap', value: parseFloat(currentStyles.gap) || 10, suffix: 'px' },
      { label: 'Justify Items', type: 'select', key: 'justifyItems', value: currentStyles.justifyItems || 'stretch', options: ['start', 'end', 'center', 'stretch'] },
      { label: 'Align Items', type: 'select', key: 'alignItems', value: currentStyles.alignItems || 'stretch', options: ['start', 'end', 'center', 'stretch'] },
    ];

    const borderStyleSelect = document.createElement('select');
    borderStyleSelect.className = 'w-full p-1 border rounded mb-2';
    ['solid', 'dashed', 'dotted'].forEach((style) => {
      const option = document.createElement('option');
      option.value = style;
      option.textContent = style.charAt(0).toUpperCase() + style.slice(1);
      if (style === currentStyles.border?.style) option.selected = true;
      borderStyleSelect.appendChild(option);
    });

    fields.forEach(({ label, type, key, value, suffix, min, options }) => {
      const container = document.createElement('div');
      container.className = 'flex items-center mb-2';
      const labelEl = document.createElement('label');
      labelEl.textContent = `${label}: `;
      labelEl.className = 'w-1/2 text-sm';
      let input;
      if (type === 'select') {
        input = document.createElement('select');
        input.className = 'w-1/2 p-1 border rounded';
        options.forEach((option) => {
          const opt = document.createElement('option');
          opt.value = option;
          opt.textContent = option.charAt(0).toUpperCase() + option.slice(1);
          if (option === value) opt.selected = true;
          input.appendChild(opt);
        });
      } else {
        input = document.createElement('input');
        input.type = type;
        input.value = type === 'number' ? parseFloat(value) || (key === 'childCount' ? 1 : 0) : value;
        input.className = 'w-1/2 p-1 border rounded';
        if (min !== undefined) input.min = min;
      }
      if (key !== 'childCount') {
        input.addEventListener('change', (e) => {
          e.stopPropagation();
          const newStyles = {};
          const prevStyles = {};
          if (key.startsWith('border.')) {
            const borderKey = key.split('.')[1];
            newStyles.border = { ...currentStyles.border, [borderKey]: input.value + (suffix || '') };
            prevStyles.border = { ...currentStyles.border };
          } else {
            newStyles[key] = type === 'select' ? input.value : (suffix ? `${input.value}${suffix}` : input.value);
            prevStyles[key] = currentStyles[key];
          }
          console.log('Executing UpdateGridItemStyleCommand:', { gridItemId, newStyles }); // Debug
          const command = new UpdateGridItemStyleCommand(
            this.stateDispatcher,
            gridItemId,
            newStyles,
            prevStyles
          );
          this.commandManager.executeCommand(command);
        });
      } else {
        input.addEventListener('change', (e) => {
          e.stopPropagation();
          const newCount = parseInt(input.value, 10);
          if (Number.isInteger(newCount) && newCount >= 1) {
            console.log('Triggering UpdateChildCountCommand:', { gridItemId, newCount, prevCount: currentStyles.childCount || 1 }); 
            const command = new UpdateChildCountCommand(
              this.stateDispatcher,
              gridItemId,
              newCount,
              currentStyles.childCount || 1,
              this.dragService.elements.gridContainer
            );
            command.setDragService(this.dragService);
            this.commandManager.executeCommand(command);
            // Update gridTemplateColumns to accommodate new children
            try {
              const columns = `repeat(${newCount}, 1fr)`; // One column per child
              const prevColumns = currentStyles.gridTemplateColumns || '1fr';
              const gridStylesCommand = new UpdateGridItemStyleCommand(
                this.stateDispatcher,
                gridItemId,
                { gridTemplateColumns: columns },
                { gridTemplateColumns: prevColumns }
              );
              this.commandManager.executeCommand(gridStylesCommand);
            } catch (err) {
              console.error('Error updating gridTemplateColumns:', err); // Debug
            }
          } else {
            console.warn('Invalid child count:', input.value); // Debug
            input.value = currentStyles.childCount || 1; // Reset to valid value
          }
        });
      }
      container.appendChild(labelEl);
      container.appendChild(input);
      this.menu.appendChild(container);
    });

    const borderStyleContainer = document.createElement('div');
    borderStyleContainer.className = 'flex items-center mb-2';
    const borderStyleLabel = document.createElement('label');
    borderStyleLabel.textContent = 'Border Style: ';
    borderStyleLabel.className = 'w-1/2 text-sm';
    borderStyleContainer.appendChild(borderStyleLabel);
    borderStyleContainer.appendChild(borderStyleSelect);
    this.menu.appendChild(borderStyleContainer);

    borderStyleSelect.addEventListener('change', (e) => {
      e.stopPropagation();
      const newStyles = { border: { ...currentStyles.border, style: borderStyleSelect.value } };
      const prevStyles = { border: { ...currentStyles.border } };
      console.log('Executing UpdateGridItemStyleCommand for border style:', { gridItemId, newStyles }); // Debug
      const command = new UpdateGridItemStyleCommand(
        this.stateDispatcher,
        gridItemId,
        newStyles,
        prevStyles
      );
      this.commandManager.executeCommand(command);
    });

    this.positionMenuRelativeToGridItem(gridItemEl, x, y);
    document.body.appendChild(this.menu);
  }

  positionMenuRelativeToGridItem(gridItemEl, x, y) {
    const gridRect = gridItemEl.getBoundingClientRect();
    const menuRect = this.menu.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const scrollContainer = document.getElementById('monitor-screen');
    const scrollLeft = scrollContainer.scrollLeft;
    const spaceAbove = gridRect.top;
    const spaceBelow = viewportHeight - gridRect.bottom;

    let topPosition;
    if (spaceAbove > spaceBelow && spaceAbove > menuRect.height) {
      topPosition = gridRect.top - menuRect.height - 10;
    } else {
      topPosition = gridRect.bottom + 10;
    }

    this.menu.style.left = `${x - scrollLeft}px`;
    this.menu.style.top = `${topPosition}px`;

    const menuRight = x - scrollLeft + menuRect.width;
    if (menuRight > window.innerWidth) {
      this.menu.style.left = `${window.innerWidth - menuRect.width - 10}px`;
    }
  }

  closeMenu() {
    if (this.menu) {
      this.menu.remove();
      this.menu = null;
    }
  }

  // helper

  createLabeledContainer(labelText, inputElement) {
    const container = document.createElement('div');
    container.className = 'flex items-center mb-2';
  
    const label = document.createElement('label');
    label.textContent = `${labelText}: `;
    label.className = 'w-1/2 text-sm';
  
    inputElement.classList.add('w-1/2', 'p-1', 'border', 'rounded');
  
    container.appendChild(label);
    container.appendChild(inputElement);
    return container;
  }
  
  createInputField({ type, options }, value) {
    if (type === 'select') {
      const select = document.createElement('select');
      options.forEach(optValue => {
        const option = document.createElement('option');
        option.value = optValue;
        option.textContent = optValue.charAt(0).toUpperCase() + optValue.slice(1);
        if (optValue === value) option.selected = true;
        select.appendChild(option);
      });
      return select;
    }
  
    const input = document.createElement('input');
    input.type = type;
    input.value = type === 'number' ? parseFloat(value) || 0 : value;
    return input;
  }


}