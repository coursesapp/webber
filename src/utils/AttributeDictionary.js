// types
export const attributesTypes = {
  GeneralAttributes: {
    show: "General Attributes",
    description:
      "Basic attributes applicable to a wide range of HTML elements, such as class, id, and style.",
  },
  FormAttributes: {
    show: "Form Attributes",
    description:
      "Attributes specific to form elements, such as action, method, name, and placeholder.",
  },
  AnchorAttributes: {
    show: "Anchor Attributes",
    description:
      "Used with <a> elements to define links, navigation behavior, and relationships.",
  },
  ImageAttributes: {
    show: "Image Attributes",
    description:
      "Used with <img> elements to define sources, alt text, size, and loading behavior.",
  },
  MediaAttributes: {
    show: "Media Attributes",
    description:
      "Used with <audio>, <video>, and <source> elements to control media playback.",
  },
  TableAttributes: {
    show: "Table Attributes",
    description:
      "Attributes related to tables, like row and column spanning or scoping.",
  },
  ScriptLinkMetaAttributes: {
    show: "Script/Link/Meta Attributes",
    description:
      "Used in <script>, <link>, and <meta> tags for loading external resources and metadata.",
  },
  AccessibilityAttributes: {
    show: "Accessibility Attributes",
    description:
      "Attributes that improve accessibility, including roles and ARIA attributes.",
  },
};

// ----------------- general attributes ----------------------
export const GeneralAttributes = {
  title: {
    type: "text",
    show: "Title",
    description:
      "Provides extra information about the element, usually shown as a tooltip on hover.",
  },
  hidden: {
    type: "boolean",
    show: "Hidden",
    description:
      "Hides the element from the page without deleting it from the HTML.",
  },
  tabindex: {
    type: "integer",
    show: "Tab Index",
    description:
      "Controls the order in which elements are focused when using the Tab key.",
  },
  contenteditable: {
    type: "boolean",
    show: "Content Editable",
    description:
      "Allows the content of the element to be edited directly by the user.",
  },
  draggable: {
    type: "boolean",
    show: "Draggable",
    description:
      "Specifies whether the element can be dragged using the mouse.",
  },
  lang: {
    type: "choose",
    show: "Language",
    description:
      "Sets the language for the element's content, useful for accessibility and localization.",
    options: [
      {
        name: "en",
        description: "English",
        show: "English",
      },
      {
        name: "en-US",
        description: "American English",
        show: "English (US)",
      },
      {
        name: "fr",
        description: "French",
        show: "Français",
      },
      {
        name: "ar",
        description: "Arabic",
        show: "العربية",
      },
    ],
  },
  dir: {
    type: "choose",
    show: "Text Direction",
    description: "Specifies the text direction for the content of the element.",
    options: [
      {
        name: "rtl",
        description: "Right to Left",
        show: "RTL",
      },
      {
        name: "ltr",
        description: "Left to Right",
        show: "LTR",
      },
    ],
  },
  accesskey: {
    type: "text",
    show: "Access Key",
    description: "Defines a keyboard shortcut to activate/focus an element.",
  },
  translate: {
    type: "choose",
    show: "Translate",
    description: "Indicates whether the content should be translated.",
    options: [
      { name: "yes", show: "Yes" },
      { name: "no", show: "No" },
    ],
  },
  spellcheck: {
    type: "boolean",
    show: "Spellcheck",
    description: "Enables or disables spellchecking for editable content.",
  },
};

// ----------------- form attributes ---------------------
export const FormAttributes = {
  type: {
    type: "choose",
    show: "Input Type",
    description:
      "Specifies the type of input (e.g., text, number, email, password).",
    options: [
      {
        name: "text",
        description: "Single line input for general text.",
        show: "Text",
        defaultPlaceholder: "Enter text",
      },
      {
        name: "search",
        description: "Search field input.",
        show: "Search",
        defaultPlaceholder: "Search...",
      },
      {
        name: "password",
        description: "Input that hides characters for password entry.",
        show: "Password",
        defaultPlaceholder: "Enter password",
      },
      {
        name: "checkbox",
        description: "Toggle option, can be on or off.",
        show: "Checkbox",
      },
      {
        name: "radio",
        description: "Select one option from a group.",
        show: "Radio Button",
      },
      {
        name: "submit",
        description: "Button to submit a form.",
        show: "Submit Button",
      },
      {
        name: "reset",
        description: "Button to reset form fields.",
        show: "Reset Button",
      },
      {
        name: "email",
        description: "Input for email addresses.",
        show: "Email",
        defaultPlaceholder: "example@domain.com",
      },
      {
        name: "tel",
        description: "Input for phone numbers.",
        show: "Phone",
        defaultPlaceholder: "+1 555-555-5555",
      },
      {
        name: "url",
        description: "Input for website URLs.",
        show: "Website URL",
        defaultPlaceholder: "https://example.com",
      },
      {
        name: "number",
        description: "Input for numeric values.",
        show: "Number",
        defaultPlaceholder: "Enter a number",
      },
      {
        name: "range",
        description: "Slider input for range of values.",
        show: "Range Slider",
      },
      {
        name: "file",
        description: "Upload a file.",
        show: "File Upload",
      },
      {
        name: "date",
        description: "Select a date.",
        show: "Date Picker",
        defaultPlaceholder: "YYYY-MM-DD",
      },
      {
        name: "month",
        description: "Select a month and year.",
        show: "Month Picker",
        defaultPlaceholder: "YYYY-MM",
      },
      {
        name: "week",
        description: "Select a week of the year.",
        show: "Week Picker",
        defaultPlaceholder: "YYYY-W##",
      },
      {
        name: "time",
        description: "Select a time.",
        show: "Time Picker",
        defaultPlaceholder: "HH:MM",
      },
      {
        name: "datetime-local",
        description: "Select both date and time.",
        show: "Date & Time Picker",
        defaultPlaceholder: "YYYY-MM-DDTHH:MM",
      },
      {
        name: "button",
        description: "A clickable button without submitting the form.",
        show: "Button",
      },
      {
        name: "color",
        description: "Select a color using a color picker.",
        show: "Color Picker",
        defaultPlaceholder: "#000000",
      },
      {
        name: "hidden",
        description: "Hidden input, not visible to the user.",
        show: "Hidden Field",
      },
      {
        name: "image",
        description: "Use an image as a submit button.",
        show: "Image Button",
      },
    ],
  },
  name: {
    type: "text",
    show: "Name",
    description:
      "The name of the input, used to reference form data after submission.",
  },
  value: {
    type: "text",
    show: "Value",
    description: "The current value of the input field.",
  },
  placeholder: {
    type: "text",
    show: "Placeholder",
    description:
      "Text shown inside the input as a hint before the user enters data.",
  },
  checked: {
    type: "boolean",
    show: "Checked",
    description: "Preselects the input (for checkboxes or radio buttons).",
  },
  disabled: {
    type: "boolean",
    show: "Disabled",
    description: "Disables the input so the user cannot interact with it.",
  },
  readonly: {
    type: "boolean",
    show: "Read Only",
    description:
      "Makes the input uneditable while still allowing focus and selection.",
  },
  required: {
    type: "boolean",
    show: "Required",
    description: "Marks the input as required to submit the form.",
  },
  max: {
    type: "integer",
    show: "Max",
    description: "Specifies the maximum value for number/date inputs.",
  },
  min: {
    type: "integer",
    show: "Min",
    description: "Specifies the minimum value for number/date inputs.",
  },
  step: {
    type: "integer",
    show: "Step",
    description:
      "Defines the legal intervals for numeric/date inputs (e.g., step='2' allows 2, 4, 6...).",
  },
  pattern: {
    type: "text",
    show: "Pattern",
    description: "A regular expression to validate the input value.",
  },
  autocomplete: {
    type: "text",
    show: "Autocomplete",
    description:
      "Helps browsers predict and autofill user input (e.g., name, email).",
  },
  form: {
    type: "text",
    show: "Form ID",
    description: "Links the input to a <form> element by ID.",
  },
  formaction: {
    type: "text",
    show: "Form Action",
    description: "URL to process the form submission (only on submit buttons).",
  },
  formenctype: {
    type: "text",
    show: "Form Encoding Type",
    description:
      "Defines how form data should be encoded (e.g., multipart/form-data).",
  },
  formmethod: {
    type: "text",
    show: "Form Method",
    description: "HTTP method to submit the form (GET, POST).",
  },
  formnovalidate: {
    type: "boolean",
    show: "Form No Validate",
    description: "Prevents form validation on submit.",
  },
  formtarget: {
    type: "text",
    show: "Form Target",
    description: "Specifies where to display the response (e.g., _blank).",
  },
  multiple: {
    type: "boolean",
    show: "Multiple",
    description:
      "Allows selecting multiple values (used in <select>, <input type='file'>).",
  },
  size: {
    type: "integer",
    show: "Size",
    description: "Visible width in characters (text inputs and selects).",
  },
  maxlength: {
    type: "integer",
    show: "Max Length",
    description: "Maximum number of characters allowed in input.",
  },
  minlength: {
    type: "integer",
    show: "Min Length",
    description: "Minimum number of characters required in input.",
  },
  accept: {
    type: "text",
    show: "Accept",
    description: "File types allowed for file input (e.g., .jpg, .pdf).",
  },
};

// ----------------- Anchor attributes ---------------------
export const AnchorAttributes = {
  href: {
    type: "text",
    show: "Link",
    description: "The URL of the linked page or resource.",
  },
  target: {
    type: "choose",
    show: "Target",
    description: "Specifies where to open the linked document.",
    options: [
      { name: "_blank", show: "New Tab" },
      { name: "_self", show: "Same Frame" },
      { name: "_parent", show: "Parent Frame" },
      { name: "_top", show: "Full Body" },
    ],
  },
  rel: {
    type: "text",
    show: "Rel",
    description:
      "Specifies the relationship between the current and linked document.",
  },
  download: {
    type: "boolean",
    show: "Download",
    description:
      "Instructs the browser to download the resource instead of navigating to it.",
  },
};

// ----------------- image attributes ---------------------
export const ImageAttributes = {
  src: {
    type: "text",
    show: "Source",
    description: "The path to the image file.",
  },
  alt: {
    type: "text",
    show: "Alt Text",
    description:
      "Alternative text for accessibility and when the image fails to load.",
  },
  width: {
    type: "integer",
    show: "Width",
    description: "Width of the image (in pixels).",
  },
  height: {
    type: "integer",
    show: "Height",
    description: "Height of the image (in pixels).",
  },
  loading: {
    type: "choose",
    show: "Loading Behavior",
    description: "Lazy-load behavior for performance optimization.",
    options: [
      { name: "lazy", show: "Lazy" },
      { name: "eager", show: "Eager" },
    ],
  },
};

// ----------------- media attributes ---------------------
export const MediaAttributes = {
  controls: {
    type: "boolean",
    show: "Controls",
    description: "Shows built-in play/pause UI.",
  },
  autoplay: {
    type: "boolean",
    show: "Autoplay",
    description: "Starts playing media automatically.",
  },
  muted: {
    type: "boolean",
    show: "Muted",
    description: "Mutes the media on load.",
  },
  loop: {
    type: "boolean",
    show: "Loop",
    description: "Plays the media in a loop.",
  },
  poster: {
    type: "text",
    show: "Poster",
    description: "Image shown before the video starts.",
  },
  preload: {
    type: "choose",
    show: "Preload",
    description: "Hints about how media should be loaded.",
    options: [
      { name: "none", show: "None" },
      { name: "metadata", show: "Metadata" },
      { name: "auto", show: "Auto" },
    ],
  },
};

// ----------------- Table attributes ---------------------
export const TableAttributes = {
  colspan: {
    type: "integer",
    show: "Column Span",
    description: "Number of columns a cell should span.",
  },
  rowspan: {
    type: "integer",
    show: "Row Span",
    description: "Number of rows a cell should span.",
  },
  scope: {
    type: "choose",
    show: "Scope",
    description: "Indicates whether a header is for a row, column, etc.",
    options: [
      { name: "col", show: "Column" },
      { name: "row", show: "Row" },
      { name: "colgroup", show: "Column Group" },
      { name: "rowgroup", show: "Row Group" },
    ],
  },
  headers: {
    type: "text",
    show: "Headers",
    description: "Space-separated list of header IDs this cell relates to.",
  },
};

// ----------------- ScriptLinkMeta attributes ---------------------
export const ScriptLinkMetaAttributes = {
  src: {
    type: "text",
    show: "Source",
    description: "URL of the external script or resource.",
  },
  async: {
    type: "boolean",
    show: "Async",
    description:
      "Executes the script asynchronously as soon as it's available.",
  },
  defer: {
    type: "boolean",
    show: "Defer",
    description: "Delays execution of the script until after page load.",
  },
  crossorigin: {
    type: "text",
    show: "Crossorigin",
    description:
      "Indicates if the request for the resource should include credentials.",
  },
  integrity: {
    type: "text",
    show: "Integrity",
    description: "Security feature that checks resource integrity (SRI).",
  },
  type: {
    type: "text",
    show: "MIME Type",
    description: "Specifies the media type (e.g. 'text/javascript').",
  },
  charset: {
    type: "text",
    show: "Charset",
    description: "Character encoding used (for <meta> or <script>).",
  },
};

// ----------------- Accessibility attributes ---------------------
export const AccessibilityAttributes = {
  role: {
    type: "text",
    show: "Role",
    description: "Defines the role of the element in the accessibility tree.",
  },
  "aria-label": {
    type: "text",
    show: "ARIA Label",
    description: "Defines a label for accessibility readers.",
  },
  "aria-hidden": {
    type: "boolean",
    show: "ARIA Hidden",
    description: "Hides the element from assistive technologies.",
  },
  "aria-describedby": {
    type: "text",
    show: "ARIA Describedby",
    description:
      "References the ID of another element that describes this one.",
  },
  "aria-expanded": {
    type: "boolean",
    show: "ARIA Expanded",
    description: "Indicates if a section or widget is expanded or collapsed.",
  },
  "aria-checked": {
    type: "choose",
    show: "ARIA Checked",
    description:
      "Represents the checked state of checkboxes, switches, or options.",
    options: [
      { name: "true", show: "True" },
      { name: "false", show: "False" },
      { name: "mixed", show: "Mixed" },
    ],
  },
};
