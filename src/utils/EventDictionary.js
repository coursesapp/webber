// types
export const eventTypes = {
  KeyboardEvents: {
    show: "Keyboard Events",
    description:
      "Events triggered by keyboard interactions, such as key presses or releases.",
  },
  MouseEvents: {
    show: "Mouse Events",
    description:
      "Events triggered by mouse actions, like clicks, moves, or mouse wheel scrolls.",
  },
  FormInputEvents: {
    show: "Form Input Events",
    description:
      "Events that occur when interacting with form elements, like input fields, checkboxes, and radio buttons.",
  },
  DragDropEvents: {
    show: "Drag and Drop Events",
    description:
      "Events that handle the drag and drop actions on elements, such as dragging and releasing objects.",
  },
  WindowEvents: {
    show: "Window Events",
    description:
      "Events related to the browser window, such as resizing, scrolling, or closing the window.",
  },
  ClipboardEvents: {
    show: "Clipboard Events",
    description:
      "Events triggered by clipboard actions like copying, cutting, and pasting content.",
  },
};

// keyboard events **************************
export const KeyboardEvents = {
  keydown: {
    show: "Key Down",
    description: "Fires when a key is pressed down.",
  },
  keypress: {
    show: "Key Press",
    description:
      "Fires when a key is pressed and released (deprecated in modern browsers).",
  },
  keyup: {
    show: "Key Up",
    description: "Fires when a key is released.",
  },
};

// mouse events **************************
export const MouseEvents = {
  click: {
    show: "Click",
    description: "Fires when the user clicks on an element.",
  },
  dblclick: {
    show: "Double Click",
    description: "Fires when the user double-clicks on an element.",
  },
  mousedown: {
    show: "Mouse Down",
    description: "Fires when the mouse button is pressed over an element.",
  },
  mouseup: {
    show: "Mouse Up",
    description: "Fires when the mouse button is released over an element.",
  },
  mouseenter: {
    show: "Mouse Enter",
    description: "Fires when the pointer enters the element.",
  },
  mouseleave: {
    show: "Mouse Leave",
    description: "Fires when the pointer leaves the element.",
  },
  mouseover: {
    show: "Mouse Over",
    description:
      "Fires when the pointer is moved onto an element or its children.",
  },
  mouseout: {
    show: "Mouse Out",
    description:
      "Fires when the pointer is moved out of an element or its children.",
  },
  mousemove: {
    show: "Mouse Move",
    description: "Fires when the pointer is moving within the element.",
  },
  contextmenu: {
    show: "Context Menu",
    description: "Fires when the right mouse button is clicked (context menu).",
  },
};

// form input events **************************
export const FormInputEvents = {
  submit: {
    show: "Submit",
    description: "Fires when a form is submitted.",
  },
  change: {
    show: "Change",
    description: "Fires when the value of an element has changed.",
  },
  input: {
    show: "Input",
    description:
      "Fires when the value of an element is changed (on each input).",
  },
  focus: {
    show: "Focus",
    description: "Fires when an element gains focus.",
  },
  blur: {
    show: "Blur",
    description: "Fires when an element loses focus.",
  },
  reset: {
    show: "Reset",
    description: "Fires when a form is reset.",
  },
};

// drag drop events **************************
export const DragDropEvents = {
  drag: {
    show: "Drag",
    description: "Fires when an element is being dragged.",
  },
  dragstart: {
    show: "Drag Start",
    description: "Fires when the user starts dragging an element.",
  },
  dragend: {
    show: "Drag End",
    description: "Fires when a drag operation is finished.",
  },
  dragenter: {
    show: "Drag Enter",
    description: "Fires when a dragged item enters a valid drop target.",
  },
  dragleave: {
    show: "Drag Leave",
    description: "Fires when a dragged item leaves a valid drop target.",
  },
  dragover: {
    show: "Drag Over",
    description: "Fires when a dragged item is over a valid drop target.",
  },
  drop: {
    show: "Drop",
    description: "Fires when a dragged item is dropped on a valid drop target.",
  },
};

// window events **************************
export const WindowEvents = {
  load: {
    show: "Load",
    description:
      "Fires when the whole page has loaded, including all dependent resources.",
  },
  unload: {
    show: "Unload",
    description:
      "Fires when the document or a child resource is being unloaded.",
  },
  resize: {
    show: "Resize",
    description: "Fires when the document view is resized.",
  },
  scroll: {
    show: "Scroll",
    description: "Fires when the user scrolls the element.",
  },
  error: {
    show: "Error",
    description: "Fires when an error occurs while loading an external file.",
  },
  beforeunload: {
    show: "Before Unload",
    description: "Fires before the window or tab is about to be unloaded.",
  },
};

// clipboard events **************************
export const ClipboardEvents = {
  copy: {
    show: "Copy",
    description: "Fires when content is copied to the clipboard.",
  },
  cut: {
    show: "Cut",
    description: "Fires when content is cut to the clipboard.",
  },
  paste: {
    show: "Paste",
    description: "Fires when content is pasted from the clipboard.",
  },
};
