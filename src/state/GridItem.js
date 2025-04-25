/*
we will change a lot here 
now we have the single element of page 

** we can seperate children in another class ✔️ **
** we can seperate styles in another class ✔️ **

-- we want to add a lot of styles and default styles ✔️ and basic styles to choose from ⌛ --
-- we want to add basic CRUD (5) and reorder and replace for children ✔️ -- 
-- more than one type of init ⌛ --
*/
export class GridItem {
  constructor(id, ElementStyle, grid) {
    this.id = id;
    this.style = ElementStyle;
    this.children = new Map();
    this.grid = grid || {
      /*
      columns >> 1-12  , none 
      rows >> 1-6 , none 
      flow >> row , col , row-dense  , col-dense
      justify_items >> start , end , center , stretch
      items >> start , end , center , stretch , baseline
      justify >> start , end , center , between , around , evenly
      content >> start , end , center , between , around , evenly
      */
      default: {
        columns: 3,
        rows: 2,
        gap: {
          x: "5px",
          y: "5px",
        },
        flow: "row",
        justify_items: "stretch",
        items: "stretch",
        justify: "center",
        content: "center",
      },
      sm: {
        columns: 1,
        gap: {
          x: "5px",
          y: "10px",
        },
      },
      md: {
        columns: 2,
      },
      lg: {
        columns: 2,
      },
      xl: {
        columns: 2,
      },
      xl2: {
        columns: 2,
      },
    };
  }

  init() {
    this.addChild();
    this.addChild();
    this.addChild();
  }

  // ---------------- children ----------------
  // add
  addChild(childItem) {
    console.log("Adding gridItem to state:", childItem); // Debug
    this.children.set(childItem.id, childItem);
  }

  // delete
  removeChild(id) {
    this.children.delete(id);
  }

  // get one
  getChild(id) {
    const rawData = this.children.get(id);
    if (!rawData) return null;
    return rawData;
  }

  // get all
  getAllChilds() {
    return this.children;
  }

  // update
  updateGridItem(grid, breakpoint = "default") {
    if (["default", "sm", "md", "lg", "xl", "xl2"].includes(breakpoint)) {
      this.grid[breakpoint] = grid;
    } else {
      throw new Error("Invalid breakpoint");
    }
  }


  // generate grid tailwind 
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
  
      // Grid Template Columns
      if (styles.columns) {
        classes.push(`${prefix}grid-cols-${styles.columns}`);
      }
  
      // Grid Template Rows
      if (styles.rows) {
        classes.push(`${prefix}grid-rows-${styles.rows}`);
      }
  
      // Grid Gap
      if (styles.gap) {
        if (styles.gap.x && styles.gap.y) {
          classes.push(`${prefix}gap-x-[${styles.gap.x}]`);
          classes.push(`${prefix}gap-y-[${styles.gap.y}]`);
        }
      }
  
      // Grid Auto Flow
      if (styles.flow) {
        const flowMap = {
          row: "grid-flow-row",
          col: "grid-flow-col",
          "row-dense": "grid-flow-row-dense",
          "col-dense": "grid-flow-col-dense",
        };
        classes.push(`${prefix}${flowMap[styles.flow]}`);
      }
  
      // Justify Items
      if (styles.justify_items) {
        classes.push(`${prefix}justify-items-${styles.justify_items}`);
      }
  
      // Align Items
      if (styles.items) {
        classes.push(`${prefix}items-${styles.items}`);
      }
  
      // Justify Content
      if (styles.justify) {
        const justifyMap = {
          start: "justify-start",
          end: "justify-end",
          center: "justify-center",
          between: "justify-between",
          around: "justify-around",
          evenly: "justify-evenly",
        };
        classes.push(`${prefix}${justifyMap[styles.justify]}`);
      }
  
      // Align Content
      if (styles.content) {
        const contentMap = {
          start: "content-start",
          end: "content-end",
          center: "content-center",
          between: "content-between",
          around: "content-around",
          evenly: "content-evenly",
        };
        classes.push(`${prefix}${contentMap[styles.content]}`);
      }
    });
  
    return classes.join(" ");
  }
  
}
