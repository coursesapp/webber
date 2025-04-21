/*
// Basic CRUD to style ✔️
method to generate tailwind code ✔️
*/

const VALID_BREAKPOINTS = [
  "default",
  "sm",
  "md",
  "lg",
  "xl",
  "xl2",
  "hover",
  "dark",
  "darkHover",
];

export class ElementStyle {
  constructor(
    // default
    {
      width,
      height,
      textColor,
      fontSize,
      backgroundColor,
      margin,
      padding,
      border,
      outline,
    },
    // ----------- responsive -----------
    sm,
    md,
    lg,
    xl,
    xl2,
    hover,
    dark,
    darkHover
  ) {
    this.default = {
      width: width || "100%",
      height: height || "200px",
      backgroundColor: backgroundColor || "#ffffff",
      textColor: textColor || "#000000",
      fontSize: fontSize || "16px",
      margin: margin || {
        t: "5px",
        b: "5px",
        r: "5px",
        l: "5px",
        // px  , %  , em , rem
      },
      padding: padding || {
        t: "5px",
        b: "5px",
        r: "5px",
        l: "5px",
      },
      border: border || {
        style: "none", // none solid double dashed dotted
        width: {
          t: "1px",
          b: "1px",
          r: "1px",
          l: "1px",
        },
        color: {
          t: "#000000",
          b: "#000000",
          r: "#000000",
          l: "#000000",
        },
        radius: {
          tl: "1px",
          tr: "1px",
          bl: "1px",
          br: "1px",
        },
      },
      outline: outline || {
        width: "1px",
        color: "#000000",
      },
    };
    this.sm = sm;
    this.md = md;
    this.lg = lg;
    this.xl = xl;
    this.xl2 = xl2;
    this.hover = hover;
    this.dark = dark;
    this.darkHover = darkHover;
  }

  // Create
  createStyle(breakpoint = "default", styleProps) {
    if (VALID_BREAKPOINTS.includes(breakpoint)) {
      this[breakpoint] = { ...this[breakpoint], ...styleProps };
    } else {
      throw new Error("Invalid breakpoint");
    }
  }

  // Read
  readStyle(breakpoint = "default") {
    if (VALID_BREAKPOINTS.includes(breakpoint)) {
      return this[breakpoint] || {};
    }
    throw new Error("Invalid breakpoint");
  }

  // Update
  updateStyle(breakpoint = "default", styleProps) {
    if (VALID_BREAKPOINTS.includes(breakpoint)) {
      this[breakpoint] = { ...styleProps };
    } else {
      throw new Error("Invalid breakpoint");
    }
  }

  // Delete
  deleteStyle(breakpoint = "default") {
    if (VALID_BREAKPOINTS.includes(breakpoint)) {
      if (this[breakpoint]) {
        delete this[breakpoint];
        return true;
      }
    } else {
      throw new Error("Invalid breakpoint");
    }
    return false;
  }

  // generate tailwind code
  generateTailwind() {
    const classes = [];

    VALID_BREAKPOINTS.forEach((breakpoint) => {
      const styles = this[breakpoint];
      if (!styles) return;

      const prefix =
        breakpoint == "default"
          ? ""
          : breakpoint == "xl2"
          ? `2xl:`
          : breakpoint == "darkHover"
          ? `dark:hover:`
          : `${breakpoint}:`;

      // Width and Height
      if (styles.width) classes.push(`${prefix}w-[${styles.width}]`);
      if (styles.height) classes.push(`${prefix}h-[${styles.height}]`);

      // Colors
      if (styles.backgroundColor)
        classes.push(`${prefix}bg-[${styles.backgroundColor}]`);
      if (styles.textColor) classes.push(`${prefix}text-[${styles.textColor}]`);

      // Font
      if (styles.fontSize) classes.push(`${prefix}text-[${styles.fontSize}]`);

      // Margin
      if (styles.margin) {
        if (styles.margin.t) classes.push(`${prefix}mt-[${styles.margin.t}]`);
        if (styles.margin.b) classes.push(`${prefix}mb-[${styles.margin.b}]`);
        if (styles.margin.r) classes.push(`${prefix}mr-[${styles.margin.r}]`);
        if (styles.margin.l) classes.push(`${prefix}ml-[${styles.margin.l}]`);
      }

      // Padding
      if (styles.padding) {
        if (styles.padding.t) classes.push(`${prefix}pt-[${styles.padding.t}]`);
        if (styles.padding.b) classes.push(`${prefix}pb-[${styles.padding.b}]`);
        if (styles.padding.r) classes.push(`${prefix}pr-[${styles.padding.r}]`);
        if (styles.padding.l) classes.push(`${prefix}pl-[${styles.padding.l}]`);
      }

      // Border
      if (styles.border) {
        // Border Width
        if (styles.border.width?.t)
          classes.push(`${prefix}border-t-[${styles.border.width.t}]`);
        if (styles.border.width?.b)
          classes.push(`${prefix}border-b-[${styles.border.width.b}]`);
        if (styles.border.width?.r)
          classes.push(`${prefix}border-r-[${styles.border.width.r}]`);
        if (styles.border.width?.l)
          classes.push(`${prefix}border-l-[${styles.border.width.l}]`);

        // Border Color
        if (styles.border.color?.t)
          classes.push(`${prefix}border-t-[${styles.border.color.t}]`);
        if (styles.border.color?.b)
          classes.push(`${prefix}border-b-[${styles.border.color.b}]`);
        if (styles.border.color?.r)
          classes.push(`${prefix}border-r-[${styles.border.color.r}]`);
        if (styles.border.color?.l)
          classes.push(`${prefix}border-l-[${styles.border.color.l}]`);

        // Border Style
        if (styles.border.style?.t && styles.border.style.t !== "none")
          classes.push(`${prefix}border-t-${styles.border.style.t}`);
        if (styles.border.style?.b && styles.border.style.b !== "none")
          classes.push(`${prefix}border-b-${styles.border.style.b}`);
        if (styles.border.style?.r && styles.border.style.r !== "none")
          classes.push(`${prefix}border-r-${styles.border.style.r}`);
        if (styles.border.style?.l && styles.border.style.l !== "none")
          classes.push(`${prefix}border-l-${styles.border.style.l}`);

        // Border Radius
        if (styles.border.radius?.tl)
          classes.push(`${prefix}rounded-tl-[${styles.border.radius.tl}]`);
        if (styles.border.radius?.tr)
          classes.push(`${prefix}rounded-tr-[${styles.border.radius.tr}]`);
        if (styles.border.radius?.bl)
          classes.push(`${prefix}rounded-bl-[${styles.border.radius.bl}]`);
        if (styles.border.radius?.br)
          classes.push(`${prefix}rounded-br-[${styles.border.radius.br}]`);
      }

      // Outline
      if (styles.outline) {
        if (styles.outline.width)
          classes.push(`${prefix}outline-[${styles.outline.width}]`);

        // Outline Color
        if (styles.outline.color)
          classes.push(`${prefix}outline-[${styles.outline.color}]`);
      }
    });

    return classes.join(" ");
  }
}
