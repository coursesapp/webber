// types
export const elementCategories = {
  ContentElements: {
    show: "Content Elements",
    description:
      "Structural and block-level elements used to define page layout and content grouping (e.g., div, p, h1).",
  },
  TextInlineElements: {
    show: "Text Content / Inline Elements",
    description:
      "Elements used to format inline text or inline-level semantics (e.g., em, strong, br, code).",
  },
  FormElements: {
    show: "Form Elements",
    description:
      "Elements used to build interactive forms and collect user input (e.g., input, textarea, form, button).",
  },
  TableElements: {
    show: "Table Elements",
    description:
      "Elements used to construct tables and organize data in rows and columns (e.g., table, tr, td, th).",
  },
  MediaElements: {
    show: "Media Elements",
    description:
      "Elements for embedding media such as images, video, audio, or external documents (e.g., img, video, iframe).",
  },
  ScriptingMetadataElements: {
    show: "Scripting / Metadata Elements",
    description:
      "Elements that provide scripting capabilities or document-level metadata (e.g., script, style, meta, link).",
  },
};

// ------------------- content elements -------------------
export const contentElements = {
  div: {
    element: "div",
    show: "Division / Container",
    description: "A generic container used for grouping elements.",
  },
  span: {
    element: "span",
    show: "Inline Container",
    description: "Inline text or other elements.",
  },
  p: { element: "p", show: "Paragraph", description: "Paragraph of text." },
  h1: {
    element: "h1",
    show: "Heading 1",
    description: "Top-level heading used for main titles.",
  },
  h2: {
    element: "h2",
    show: "Heading 2",
    description: "Second-level heading, usually a subheading.",
  },
  a: {
    element: "a",
    show: "Anchor / Link",
    description: "Used to create hyperlinks to other pages or parts of a page.",
  },
  img: { element: "img", show: "Image", description: "An image in the page." },
  ul: {
    element: "ul",
    show: "Unordered List",
    description: "A list of items without a specific order.",
  },
  ol: {
    element: "ol",
    show: "Ordered List",
    description: "A list of items in a specific order.",
  },
  li: { element: "li", show: "List Item", description: "An item in a list." },
};

// ------------------- text inline elements -------------------
export const textInlineElements = {
  strong: {
    element: "strong",
    show: "Strong",
    description: "Indicates important or emphasized text (usually bold).",
  },
  em: {
    element: "em",
    show: "Emphasis",
    description: "Emphasized text (usually italicized).",
  },
  br: {
    element: "br",
    show: "Line Break",
    description: "Creates a line break in text.",
  },
  hr: {
    element: "hr",
    show: "Horizontal Rule",
    description: "Creates a thematic break or horizontal line.",
  },
  code: {
    element: "code",
    show: "Inline Code",
    description: "Displays a short snippet of code.",
  },
  pre: {
    element: "pre",
    show: "Preformatted Text",
    description: "Displays text exactly as written in the HTML.",
  },
  small: {
    element: "small",
    show: "Small Text",
    description: "Displays text in a smaller font size.",
  },
  mark: {
    element: "mark",
    show: "Marked Text",
    description: "Highlights text for reference.",
  },
  abbr: {
    element: "abbr",
    show: "Abbreviation",
    description: "Defines an abbreviation or acronym with a tooltip.",
  },
};

// ------------------- form elements -------------------
export const formElements = {
  input: {
    element: "input",
    show: "Input Field",
    description:
      "Collects user input in various formats like text, number, etc.",
  },
  textarea: {
    element: "textarea",
    show: "Multi-line Text Input",
    description: "Used for entering longer blocks of text.",
  },
  button: {
    element: "button",
    show: "Button",
    description: "A clickable button to perform actions.",
  },
  form: {
    element: "form",
    show: "Form",
    description:
      "A container for user input elements, used for submitting data.",
  },
  label: {
    element: "label",
    show: "Label",
    description: "Defines a label for an input element.",
  },
  select: {
    element: "select",
    show: "Dropdown Menu",
    description: "Creates a drop-down list.",
  },
  option: {
    element: "option",
    show: "Dropdown Option",
    description: "An option in a drop-down menu.",
  },
  fieldset: {
    element: "fieldset",
    show: "Fieldset",
    description: "Groups related form elements together.",
  },
  legend: {
    element: "legend",
    show: "Legend",
    description: "Title for a `<fieldset>` group.",
  },
  datalist: {
    element: "datalist",
    show: "Datalist",
    description: "Provides autocomplete options for an `<input>`.",
  },
  output: {
    element: "output",
    show: "Output",
    description: "Displays the result of a calculation or action.",
  },
  meter: {
    element: "meter",
    show: "Meter",
    description: "Represents a scalar value within a known range.",
  },
  progress: {
    element: "progress",
    show: "Progress",
    description: "Represents the progress of a task.",
  },
};

// ------------------- table elements -------------------
export const tableElements = {
  table: {
    element: "table",
    show: "Table",
    description: "Displays tabular data.",
  },
  tr: {
    element: "tr",
    show: "Table Row",
    description: "Defines a row in a table.",
  },
  td: {
    element: "td",
    show: "Table Cell",
    description: "Defines a cell in a table row.",
  },
  th: {
    element: "th",
    show: "Table Header Cell",
    description: "Defines a header cell in a table.",
  },
};

// ------------------- media elements -------------------
export const mediaElements = {
  video: {
    element: "video",
    show: "Video",
    description: "Embeds a video player.",
  },
  audio: {
    element: "audio",
    show: "Audio",
    description: "Embeds an audio player.",
  },
  source: {
    element: "source",
    show: "Media Source",
    description: "Specifies media file for `<video>` or `<audio>`.",
  },
  iframe: {
    element: "iframe",
    show: "Inline Frame",
    description: "Embeds another HTML page inside the current one.",
  },
};

// ------------------- script & meta data elements -------------------
export const scriptingMetadataElements = {
  script: {
    element: "script",
    show: "Script",
    description: "Embeds or references JavaScript code.",
  },
  noscript: {
    element: "noscript",
    show: "No Script Fallback",
    description: "Provides alternative content if JavaScript is disabled.",
  },
  style: { element: "style", show: "Style", description: "Embeds CSS styles." },
  link: {
    element: "link",
    show: "Link",
    description:
      "Defines a relationship to an external resource, like a stylesheet.",
  },
  meta: {
    element: "meta",
    show: "Meta",
    description: "Provides metadata about the HTML document.",
  },
  title: {
    element: "title",
    show: "Title",
    description: "Sets the title of the document (shown in browser tab).",
  },
  base: {
    element: "base",
    show: "Base URL",
    description:
      "Specifies the base URL for all relative URLs in the document.",
  },
};
