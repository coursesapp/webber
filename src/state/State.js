/* 
  the state store page information 
  now it have only elements of page (gridItems)
  Map --> for ordering 

  **We can add other information but grid items in future (like existing components for reusing , used colors , styled elements , backend inforamtion , local data information )**
  **We want to add dictonary for data 🙆‍♀️**
  **A big dictionary for everything 🙆‍♀️🙆‍♀️🙆‍♀️**
  -- we must ensure exist of basic CURD (5) for its items ✔️ --
  --  --
*/
export class State {
  constructor() {
    // ui
    this.gridItems = new Map();
    // data
    this.data = new Map();
    this.functions = new Map();
    this.backend = new Map();
    // used 
    this.usedColors = new Map();
    this.usedColors = new Map();
    this.savedChildren = new Map();
    this.savesStyles = new Map();
  }

  // ------------------ griditems ----------------------
  // add 
  addGridItem(gridItem) {
    console.log('Adding gridItem to state:', gridItem); // Debug
    this.gridItems.set(gridItem.id, gridItem);
  }

  // delete
  removeGridItem(id) {
    this.gridItems.delete(id);
  }

  // get one 
  getGridItem(id) {
    const rawData = this.gridItems.get(id);
    if (!rawData) return null; 
    return rawData;
  }

  // get all 
  getAllGridItems(){
    return this.gridItems
  }

  // update 
  updateGridItem() {
    
  }


  /*
  we will delete this
  */

  updateChildCount(id, count) {
    const gridItem = this.gridItems.get(id);
    if (gridItem) {
      console.log('Updating child count for gridItem:', id, 'to:', count); 

      const nextIndex = gridItem.children.length + 1;

      gridItem.addChild({
        content: `Child ${nextIndex}`,
        width: 'auto',
        height: '100px',
        backgroundColor: '#e0e0e0',
        textColor: '#000000',
        fontSize: '16px',
        gridColumn: 'auto',
        gridRow: 'auto',
        justifySelf: 'stretch',
        alignSelf: 'stretch',
      });

      console.log('Updated children:', JSON.stringify(gridItem.children, null, 2));
    } else {
      console.error('GridItem not found for updateChildCount:', id); // Debug
    }
  }

}