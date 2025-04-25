/*
R:
get element by id 
get element by child
get child by parent and index 
C :
add element to container
add element to specific index in container(parent) (after or before)
U:
update element (grid)
update element (style)
D :
delete element of monitor by id 
delete element of monitor by index in container(parent) 
O:
render single element
render nested elements (style , grid , children , nested elements , style and grid for nested elements)
render state 
render GridItem 
render Child 
render style 
render grid styles
render basic element 
render by type 
get features style of passed element (style , grid , children , nested elements , style and grid for nested elements)
** we may add more methods to DomElement **
** add method get all to dom selector **
** function to render all state - gridItem - child - element - styles - and use each other **
** method for render the all state [gridItems] **
** 
   grid to classes 
** 
*/

import { HtmlElement } from "../state/element.js";
import { ElementStyle } from "../state/Style.js";
import { GridItem } from "../state/GridItem.js";
import { ChildGrid } from "../state/ChildGrid.js";

class DomElement {
  constructor(config) {
    if (config instanceof HTMLElement) {
      this.element = config;
    } else if (config instanceof HtmlElement) {
      this.element = document.createElement(config.tag);
      this.element.id = config.id || '';
      this.element.innerHTML = config.content || '';
      if (config.styles instanceof ElementStyle) {
        this.element.className = config.styles.generateTailwind();
      }
      if (config.attributes.size > 0) {
        config.attributes.forEach((value, key) => {
          this.element.setAttribute(key, value);
        });
      }
      if (config.eventListeners.size > 0) {
        config.eventListeners.forEach((listener, event) => {
          this.element.addEventListener(event, listener.function);
        });
      }
      if (config.data.size > 0) {
        config.data.forEach((value, key) => {
          this.element.dataset[key] = value;
        });
      }
      if (config.isGrid && config.gridItem instanceof GridItem) {
        this.element.classList.add(config.gridItem.generateGridClasses());
        config.gridItem.children.forEach((child, id) => {
          const childElement = new DomElement(child).getElement();
          childElement.id = id;
          this.element.appendChild(childElement);
        });
      }
    } else {
      this.element = document.createElement(config.tag || 'div');
      if (config.id) this.element.id = config.id;
      if (config.style instanceof ElementStyle) {
        this.element.className = config.style.generateTailwind();
      }
      if (config instanceof GridItem) {
        this.element.classList.add(config.generateGridClasses());
        if (config.children) {
          this.renderChildren(config.children);
        }
      }
      if (config instanceof ChildGrid) {
        this.element.classList.add(config.generateGridClasses());
        if (config.elements ) {
          config.elements.forEach((element, id) => {
            const newElement = new DomElement(element).getElement();
            newElement.id = id;
            this.element.appendChild(newElement);
          })
        }
      }
    }
  }

  getElement() {
    return this.element;
  }

  applyStyles(style) {
      this.element.classList.add(style.generateTailwind());
  }

  applyGridStyles(grid) {
      this.element.classList.add(grid.generateGridClasses());
  }

  applyGridAndStyles(grid, style) {
    this.element.classList.add(grid.generateGridClasses());
    this.element.classList.add(style.generateTailwind());
  }

  renderChildren(children) {
    children.forEach(child => {
      const childElement = new DomElement(child).getElement();
      this.element.appendChild(childElement);
    });
  }
}

export class DomSelector {
  static getById(id) {
    const element = document.getElementById(id);
    if (!element) {
      throw new Error(`Element with id ${id} not found`);
    }
    return new DomElement(element);
  }

  static getBySelector(selector) {
    const element = document.querySelector(selector);
    if (!element) {
      throw new Error(`Element with selector ${selector} not found`);
    }
    return new DomElement(element);
  }

  static getChildByParent(parent, index) {
    const children = parent.getElement().children;
    if (index < 0 || index >= children.length) {
      throw new Error(`Invalid child index ${index}`);
    }
    return new DomElement(children[index]);
  }
}

export class DomManipulator {
  static addToContainer(container, element) {
    container.getElement().appendChild(element.getElement());
  }

  static addAtIndex(container, element, index, position = 'before') {
    const children = container.getElement().children;
    if (index < 0 || index >= children.length) {
      throw new Error(`Invalid index ${index}`);
    }
    const referenceElement = children[index];
    container.getElement().insertBefore(
      element.getElement(),
      position === 'before' ? referenceElement : referenceElement.nextSibling
    );
  }

  static updateGridAndStyle(element, grid, style) {
      element.applyGridAndStyles(grid, style);
  }

  static removeById(id) {
    const element = document.getElementById(id);
    if (element) {
      element.remove();
    }
  }

  static removeByIndex(container, index) {
    const children = container.getElement().children;
    if (index >= 0 && index < children.length) {
      children[index].remove();
    }
  }
}

export class DomRenderer {
  static renderElement(config) {
    return new DomElement(config);
  }

  static renderNested(config) {
    return new DomElement(config);
  }

  static renderGridItem(config) {
    return new DomElement({
      tag: 'div',
      id: config.id,
      style: config.style,
      grid: config.grid
    });
  }

  static renderChildGrid(config) {
    return new DomElement({
      tag: 'div',
      id: config.id,
      style: config.style,
      grid: config.grid
    });
  }


}

class DomInspector {
  static getElementFeatures(element) {
    const el = element.getElement();
    const classes = el.className.split(' ').filter(cls => cls);
    
    const style = new ElementStyle({});
    const grid = el.classList.contains('grid') ? new GridItem('', new ElementStyle({}), {}) : null;
    const children = Array.from(el.children).map(child => new DomElement(child));
    const nested = children.flatMap(child => [
      child,
      ...Array.from(child.getElement().querySelectorAll('*')).map(nested => new DomElement(nested))
    ]);

    return { style, grid, children, nested };
  }
}
