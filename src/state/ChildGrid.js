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

  // grid to  tailwind 
  generateTailwind() {
    const classes = [];
    const VALID_BREAKPOINTS = ["default", "sm", "md", "lg", "xl", "xl2"];
  
    VALID_BREAKPOINTS.forEach((breakpoint) => {
      const styles = this.grid[breakpoint];
      if (!styles) return;
  
      const prefix =
        breakpoint === "default"
          ? ""
          : breakpoint === "xl2"
          ? "2xl:"
          : `${breakpoint}:`;
  
      // Columns
      if (styles.columns) {
        if (styles.columns.span) {
          if (styles.columns.span === "full") {
            classes.push(`${prefix}col-span-full`);
          } else if (styles.columns.span !== "auto") {
            classes.push(`${prefix}col-span-${styles.columns.span}`);
          }
        }
        if (styles.columns.start && styles.columns.start !== "auto") {
          classes.push(`${prefix}col-start-${styles.columns.start}`);
        }
        if (styles.columns.end && styles.columns.end !== "auto") {
          classes.push(`${prefix}col-end-${styles.columns.end}`);
        }
      }
  
      // Rows
      if (styles.rows) {
        if (styles.rows.span) {
          if (styles.rows.span === "full") {
            classes.push(`${prefix}row-span-full`);
          } else if (styles.rows.span !== "auto") {
            classes.push(`${prefix}row-span-${styles.rows.span}`);
          }
        }
        if (styles.rows.start && styles.rows.start !== "auto") {
          classes.push(`${prefix}row-start-${styles.rows.start}`);
        }
        if (styles.rows.end && styles.rows.end !== "auto") {
          classes.push(`${prefix}row-end-${styles.rows.end}`);
        }
      }
  
      // Align Self
      if (styles.align && styles.align !== "auto") {
        classes.push(`${prefix}self-${styles.align}`);
      }
  
      // Justify Self
      if (styles.justify && styles.justify !== "auto") {
        classes.push(`${prefix}justify-self-${styles.justify}`);
      }
  
      // Order
      if (styles.order && styles.order !== "0") {
        if (styles.order === "first") {
          classes.push(`${prefix}-order-first`);
        } else if (styles.order === "last") {
          classes.push(`${prefix}order-last`);
        } else if (styles.order === "none") {
          classes.push(`${prefix}order-none`);
        } else {
          classes.push(`${prefix}order-${styles.order}`);
        }
      }
    });
  
    return classes.join(" ");
  }


}
