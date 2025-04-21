/* 
should have all components , basic elements --> that will be added ✔️
their actions , hover , click , data ✔️ 
-- components will be ignored for some while OR using the existing ones --
** basic CRUD for attributes , eventListeners , data ✔️ **
*/
export class HtmlElement {
  constructor(element , isGrid=false , gridItem={} , isComponent=false , component={}) {
    this.tag = element.tag || "div";
    this.id = element.id;
    this.content = element.content || "";
    this.styles = element.styles;  // style instance -- self CRUD
    this.attributes = element.attributes || new Map() ;
    /*
    {
      attributeName : attributeValue,
      ...
    }
    */
    this.eventListeners = element.eventListeners || new Map();
    /*
    {
    keypress:{
      function : function() {
        console.log("Click event triggered!");
      },
      description: "what you want"
    },
    ...
    }
    */
    this.data = element.data || new Map() ;
    /*
    {name:"value",...}
    */
    // ----------- nested Grid -------------
    this.isGrid = isGrid // true or false 
    this.gridItem = gridItem;  // instance of gridItem 
    // --------- ready component  ----------
    this.isComponent = isComponent // true or false 
    this.component = component;  // instance of gridItem 
  }

//   -------------- content ------------------
  // create or update 
  addContent(content) {
    this.content = content  ;
  }

  // delete 
  deleteContent() {
    this.content = ""  ;
  }

  // get one
  getContent() {
    return this.content;
  }

  // -------------- attributes ------------------
  // create or update
  addAttribute(name, value) {
    this.attributes.set(name, value);
  }

  // delete
  deleteAttribute(name) {
    this.attributes.delete(name);
  }

  // get one
  getAttribute(name) {
    return this.attributes.get(name);
  }

  // get all
  getAllAttributes() {
    return this.attributes;
  }

  // -------------- eventListeners ------------------
  // create or update
  addEventListener(eventType, handler, description = "") {
    this.eventListeners.set(eventType, {
      function: handler,
      description: description,
    });
  }

  // delete
  deleteEventListener(eventType) {
    this.eventListeners.delete(eventType);
  }

  // get one
  getEventListener(eventType) {
    return this.eventListeners.get(eventType);
  }

  // get all
  getAllEventListeners() {
    return this.eventListeners;
  }

  // -------------- data ------------------
  // create or update
  addData(name, value) {
    this.data.set(name, value);
  }

  // delete
  deleteData(name) {
    this.data.delete(name);
  }

  // get one
  getData(name) {
    return this.data.get(name);
  }

  // get all
  getAllData() {
    return this.data;
  }
  
}
