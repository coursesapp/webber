/*
this is the main container of elements 
**we must apply CRUD to its elements ✔️**
**update the grid ✔️**
-- it will contain elements or grid again -- 
*/
export class ChildGrid {
  constructor(id, ElementStyle, grid) {
    this.id = id;
    this.style = ElementStyle;
    this.elements = new Map();
    this.grid = grid || {
      /*
            columns-span >> 1-12, auto , full
            columns-start/end >> 1-13 , auto 
            align >> auto , start , center , end , stretch
            justify >> auto , start , center , end , stretch
            order >> 1-12 , first , last , none
            */
      default: {
        columns: {
          span: "1",
          start: "auto",
          end: "auto",
        },
        rows: {
          span: "1",
          start: "auto",
          end: "auto",
        },
        align: "auto",
        justify: "auto",
        order: "0",
      },
      sm: {
        columns: {
          span: "1",
          start: "auto",
          end: "auto",
        },
        rows: {
          span: "1",
          start: "auto",
          end: "auto",
        },
        align: "auto",
        justify: "auto",
        order: "0",
      },
      md: {
        columns: "1",
      },
      lg: {
        columns: "1",
      },
      xl: {
        columns: "1",
      },
      xl2: {
        columns: "1",
      },
    };
  }

  //   -------------- elemnts ------------------
  // add
  addElement(element) {
    console.log("Adding gridItem to state:", element); // Debug
    this.elements.set(element.id, element);
  }

  // delete
  removeElement(id) {
    this.elements.delete(id);
  }

  // get one
  getElement(id) {
    const rawData = this.elements.get(id);
    if (!rawData) return null;
    return rawData;
  }

  // get all
  getAllElements() {
    return this.elements;
  }

  //   --------------- Grid ---------------
  // Grid Control (edit , create)
  updateGrid(grid, breakpoint = "default") {
    if (["default", "sm", "md", "lg", "xl", "xl2"].includes(breakpoint)) {
      this.grid[breakpoint] = grid;
    } else {
      throw new Error("Invalid breakpoint");
    }
  }
}
