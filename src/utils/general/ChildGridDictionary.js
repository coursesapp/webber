export const ChildGridDictionary = {
  standard: {
    show: "Standard Grid Child",
    description:
      "Spans one column with basic styling, suitable for card layouts or content blocks.",
    config: {
      default: {
        columns: { span: "1", start: "auto", end: "auto" },
        rows: { span: "1", start: "auto", end: "auto" },
        align: "auto",
        justify: "auto",
        order: "0",
        style: {
          backgroundColor: "#f0f0f0",
          padding: { t: "10px", b: "10px", r: "10px", l: "10px" },
          border: {
            style: "solid",
            width: { t: "1px", b: "1px", r: "1px", l: "1px" },
            color: { t: "#cccccc", b: "#cccccc", r: "#cccccc", l: "#cccccc" },
          },
          textColor: "#333333",
          fontSize: "16px",
        },
      },
    },
  },
  fullWidth: {
    show: "Full-Width Grid Child",
    description: "Spans the entire grid width, ideal for headers or footers.",
    config: {
      default: {
        columns: { span: "full", start: "auto", end: "auto" },
        rows: { span: "1", start: "auto", end: "auto" },
        align: "auto",
        justify: "auto",
        order: "0",
        style: {
          backgroundColor: "#e0e0e0",
          padding: { t: "20px", b: "20px", r: "20px", l: "20px" },
          textColor: "#000000",
          fontSize: "18px",
        },
      },
    },
  },
  centeredContent: {
    show: "Centered Content Grid Child",
    description:
      "Content is centered within the grid cell, useful for focal elements.",
    config: {
      default: {
        columns: { span: "1", start: "auto", end: "auto" },
        rows: { span: "1", start: "auto", end: "auto" },
        align: "center",
        justify: "center",
        order: "0",
        style: {
          backgroundColor: "#f0f0f0",
          padding: { t: "10px", b: "10px", r: "10px", l: "10px" },
          border: {
            style: "solid",
            width: { t: "1px", b: "1px", r: "1px", l: "1px" },
            color: { t: "#cccccc", b: "#cccccc", r: "#cccccc", l: "#cccccc" },
          },
          textColor: "#333333",
          fontSize: "16px",
        },
      },
    },
  },
  tall: {
    show: "Tall Grid Child",
    description:
      "Spans two rows for taller content, such as sidebars or featured items.",
    config: {
      default: {
        columns: { span: "1", start: "auto", end: "auto" },
        rows: { span: "2", start: "auto", end: "auto" },
        align: "auto",
        justify: "auto",
        order: "0",
        style: {
          backgroundColor: "#f0f0f0",
          padding: { t: "10px", b: "10px", r: "10px", l: "10px" },
          border: {
            style: "solid",
            width: { t: "1px", b: "1px", r: "1px", l: "1px" },
            color: { t: "#cccccc", b: "#cccccc", r: "#cccccc", l: "#cccccc" },
          },
          textColor: "#333333",
          fontSize: "16px",
        },
      },
    },
  },
  wide: {
    show: "Wide Grid Child",
    description:
      "Spans two columns on medium and larger screens, full width on small screens.",
    config: {
      default: {
        columns: { span: "full", start: "auto", end: "auto" },
        rows: { span: "1", start: "auto", end: "auto" },
        align: "auto",
        justify: "auto",
        order: "0",
        style: {
          backgroundColor: "#f0f0f0",
          padding: { t: "10px", b: "10px", r: "10px", l: "10px" },
          border: {
            style: "solid",
            width: { t: "1px", b: "1px", r: "1px", l: "1px" },
            color: { t: "#cccccc", b: "#cccccc", r: "#cccccc", l: "#cccccc" },
          },
          textColor: "#333333",
          fontSize: "16px",
        },
      },
      md: {
        columns: { span: "2" },
      },
      lg: {
        columns: { span: "2" },
      },
      xl: {
        columns: { span: "2" },
      },
      xl2: {
        columns: { span: "2" },
      },
    },
  },
  small: {
    show: "Small Grid Child",
    description:
      "Ideal for compact elements, spans one column and reduces padding for a denser layout.",
    config: {
      default: {
        columns: { span: "1", start: "auto", end: "auto" },
        rows: { span: "1", start: "auto", end: "auto" },
        align: "auto",
        justify: "auto",
        order: "0",
        style: {
          backgroundColor: "#f8f8f8",
          padding: { t: "5px", b: "5px", r: "5px", l: "5px" },
          border: {
            style: "solid",
            width: { t: "1px", b: "1px", r: "1px", l: "1px" },
            color: { t: "#dddddd", b: "#dddddd", r: "#dddddd", l: "#dddddd" },
          },
          textColor: "#444444",
          fontSize: "14px",
        },
      },
    },
  },
  large: {
    show: "Large Grid Child",
    description:
      "Spans multiple rows and columns, ideal for large images or featured content.",
    config: {
      default: {
        columns: { span: "full", start: "auto", end: "auto" },
        rows: { span: "3", start: "auto", end: "auto" },
        align: "auto",
        justify: "auto",
        order: "0",
        style: {
          backgroundColor: "#f5f5f5",
          padding: { t: "15px", b: "15px", r: "15px", l: "15px" },
          border: {
            style: "solid",
            width: { t: "1px", b: "1px", r: "1px", l: "1px" },
            color: { t: "#dddddd", b: "#dddddd", r: "#dddddd", l: "#dddddd" },
          },
          textColor: "#444444",
          fontSize: "20px",
        },
      },
    },
  },
  offset: {
    show: "Offset Grid Child",
    description:
      "Shifts the grid child across columns or rows for unique alignment.",
    config: {
      default: {
        columns: { span: "1", start: "2", end: "auto" },
        rows: { span: "1", start: "auto", end: "auto" },
        align: "auto",
        justify: "auto",
        order: "0",
        style: {
          backgroundColor: "#e8e8e8",
          padding: { t: "10px", b: "10px", r: "10px", l: "10px" },
          border: {
            style: "solid",
            width: { t: "1px", b: "1px", r: "1px", l: "1px" },
            color: { t: "#cccccc", b: "#cccccc", r: "#cccccc", l: "#cccccc" },
          },
          textColor: "#333333",
          fontSize: "16px",
        },
      },
    },
  },
  overlay: {
    show: "Overlay Grid Child",
    description:
      "Placed on top of another element using grid-area overlap. Useful for badges or overlays.",
    config: {
      default: {
        columns: { span: "1", start: "1", end: "2" },
        rows: { span: "1", start: "1", end: "2" },
        align: "end",
        justify: "end",
        order: "0",
        style: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          padding: { t: "4px", b: "4px", r: "8px", l: "8px" },
          border: {
            style: "none",
            width: { t: "0", b: "0", r: "0", l: "0" },
            color: {
              t: "transparent",
              b: "transparent",
              r: "transparent",
              l: "transparent",
            },
          },
          textColor: "#ffffff",
          fontSize: "12px",
        },
      },
    },
  },
  asymmetrical: {
    show: "Asymmetrical Grid Child",
    description:
      "Spans multiple columns and rows in an irregular shape for dynamic layouts.",
    config: {
      default: {
        columns: { span: "2", start: "auto", end: "auto" },
        rows: { span: "3", start: "auto", end: "auto" },
        align: "start",
        justify: "stretch",
        order: "0",
        style: {
          backgroundColor: "#ffffff",
          padding: { t: "12px", b: "12px", r: "12px", l: "12px" },
          border: {
            style: "dashed",
            width: { t: "2px", b: "2px", r: "2px", l: "2px" },
            color: { t: "#aaa", b: "#aaa", r: "#aaa", l: "#aaa" },
          },
          textColor: "#333",
          fontSize: "16px",
        },
      },
    },
  },
  hero: {
    show: "Hero Section Grid Child",
    description:
      "Expands across all grid columns and multiple rows. Perfect for banners or hero sections.",
    config: {
      default: {
        columns: { span: "full", start: "auto", end: "auto" },
        rows: { span: "3", start: "auto", end: "auto" },
        align: "center",
        justify: "center",
        order: "0",
        style: {
          backgroundColor: "#0044cc",
          padding: { t: "40px", b: "40px", r: "30px", l: "30px" },
          textColor: "#ffffff",
          fontSize: "24px",
        },
      },
    },
  },
  sticky: {
    show: "Sticky Grid Child",
    description:
      "Designed to remain fixed while scrolling inside a tall container.",
    config: {
      default: {
        columns: { span: "1", start: "auto", end: "auto" },
        rows: { span: "1", start: "auto", end: "auto" },
        align: "start",
        justify: "start",
        order: "0",
        style: {
          backgroundColor: "#fffff0",
          padding: { t: "10px", b: "10px", r: "10px", l: "10px" },
          position: "sticky",
          top: "0",
          zIndex: "10",
          textColor: "#222",
          fontSize: "15px",
        },
      },
    },
  },
  callToAction: {
    show: "Call to Action Block",
    description:
      "Highlight element for user engagement actions like 'Sign Up' or 'Buy Now'.",
    config: {
      default: {
        columns: { span: "full", start: "auto", end: "auto" },
        rows: { span: "1", start: "auto", end: "auto" },
        align: "center",
        justify: "center",
        order: "0",
        style: {
          backgroundColor: "#fffae6",
          padding: { t: "20px", b: "20px", r: "30px", l: "30px" },
          border: {
            style: "solid",
            width: { t: "2px", b: "2px", r: "2px", l: "2px" },
            color: { t: "#f5b800", b: "#f5b800", r: "#f5b800", l: "#f5b800" },
          },
          textColor: "#222222",
          fontSize: "18px",
        },
      },
    },
  },
  carouselItem: {
    show: "Carousel Item",
    description:
      "Used inside a horizontally scrolling container, optimized for consistent width and styling.",
    config: {
      default: {
        columns: { span: "auto", start: "auto", end: "auto" },
        rows: { span: "1", start: "auto", end: "auto" },
        align: "center",
        justify: "start",
        order: "0",
        style: {
          backgroundColor: "#ffffff",
          padding: { t: "12px", b: "12px", r: "12px", l: "12px" },
          border: {
            style: "solid",
            width: { t: "1px", b: "1px", r: "1px", l: "1px" },
            color: { t: "#ddd", b: "#ddd", r: "#ddd", l: "#ddd" },
          },
          textColor: "#222",
          fontSize: "14px",
          width: "250px",
          margin: { r: "16px" },
        },
      },
    },
  },
  notificationBanner: {
    show: "Notification Banner",
    description:
      "Full-width attention banner typically used at the top or bottom of a page.",
    config: {
      default: {
        columns: { span: "full", start: "auto", end: "auto" },
        rows: { span: "1", start: "auto", end: "auto" },
        align: "center",
        justify: "center",
        order: "-1",
        style: {
          backgroundColor: "#ffdddd",
          padding: { t: "10px", b: "10px", r: "20px", l: "20px" },
          textColor: "#990000",
          fontSize: "16px",
          fontWeight: "bold",
        },
      },
    },
  },
  mobileOnly: {
    show: "Mobile Only Grid Child",
    description:
      "Visible only on small screens. Useful for mobile-specific elements or instructions.",
    config: {
      default: {
        columns: { span: "full" },
        rows: { span: "1" },
        align: "center",
        justify: "center",
        order: "0",
        style: {
          display: "block",
          backgroundColor: "#eef6ff",
          padding: { t: "10px", b: "10px", r: "10px", l: "10px" },
          textColor: "#003366",
          fontSize: "14px",
        },
      },
      md: {
        style: {
          display: "none",
        },
      },
    },
  },
  splitColumn: {
    show: "Split Column",
    description:
      "Takes up half the grid on medium and up, full width on small screens. Great for two-column layouts.",
    config: {
      default: {
        columns: { span: "full" },
        rows: { span: "1" },
        align: "start",
        justify: "start",
        order: "0",
        style: {
          backgroundColor: "#ffffff",
          padding: { t: "10px", b: "10px", r: "10px", l: "10px" },
          fontSize: "16px",
        },
      },
      md: {
        columns: { span: "6" },
      },
      lg: {
        columns: { span: "6" },
      },
    },
  },
  spacer: {
    show: "Spacer",
    description:
      "Empty grid child for pushing other elements into position. Can be used responsively.",
    config: {
      default: {
        columns: { span: "1" },
        rows: { span: "1" },
        align: "stretch",
        justify: "stretch",
        order: "99",
        style: {
          backgroundColor: "transparent",
          padding: { t: "0", b: "0", r: "0", l: "0" },
        },
      },
    },
  },

  sidebarLeft: {
    show: "Sidebar Left",
    description:
      "Used for left sidebars that span multiple rows. Responsive to shrink on small screens.",
    config: {
      default: {
        columns: { span: "full" },
        rows: { span: "2" },
        style: {
          backgroundColor: "#f9f9f9",
          padding: { t: "15px", b: "15px", r: "15px", l: "15px" },
          fontSize: "16px",
        },
      },
      md: {
        columns: { span: "3" },
      },
      lg: {
        columns: { span: "3" },
      },
    },
  },

  sidebarRight: {
    show: "Sidebar Right",
    description: "Right-side sidebar used for menus, ads, or filters.",
    config: {
      default: {
        columns: { span: "full" },
        rows: { span: "2" },
        style: {
          backgroundColor: "#fcfcfc",
          padding: { t: "15px", b: "15px", r: "15px", l: "15px" },
          fontSize: "16px",
        },
      },
      md: {
        columns: { span: "3", start: "10" },
      },
      lg: {
        columns: { span: "3", start: "10" },
      },
    },
  },

  mediaBlock: {
    show: "Media Block",
    description: "Perfect for displaying videos, images, or embeds.",
    config: {
      default: {
        columns: { span: "full" },
        rows: { span: "2" },
        align: "center",
        justify: "center",
        style: {
          backgroundColor: "#000000",
          padding: { t: "0", b: "0", r: "0", l: "0" },
          textColor: "#ffffff",
        },
      },
    },
  },

  card: {
    show: "Card Layout",
    description: "Reusable card-style grid element for listings or dashboards.",
    config: {
      default: {
        columns: { span: "1" },
        rows: { span: "1" },
        style: {
          backgroundColor: "#ffffff",
          padding: { t: "16px", b: "16px", r: "16px", l: "16px" },
          border: {
            style: "solid",
            width: { t: "1px", b: "1px", r: "1px", l: "1px" },
            color: { t: "#eee", b: "#eee", r: "#eee", l: "#eee" },
          },
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        },
      },
    },
  },

  footer: {
    show: "Footer",
    description: "Full-width footer typically placed at the end of the grid.",
    config: {
      default: {
        columns: { span: "full" },
        rows: { span: "1" },
        style: {
          backgroundColor: "#222222",
          padding: { t: "20px", b: "20px", r: "20px", l: "20px" },
          textColor: "#ffffff",
          fontSize: "14px",
        },
      },
    },
  },

  navItem: {
    show: "Navigation Item",
    description:
      "Grid child for a nav bar, typically inline-flex for horizontal layouts.",
    config: {
      default: {
        columns: { span: "auto" },
        rows: { span: "1" },
        align: "center",
        justify: "center",
        style: {
          padding: { t: "10px", b: "10px", r: "20px", l: "20px" },
          textColor: "#000000",
          fontSize: "15px",
          cursor: "pointer",
        },
      },
    },
  },

  adBanner: {
    show: "Ad Banner",
    description: "Top or inline ad block, full-width, styled for attention.",
    config: {
      default: {
        columns: { span: "full" },
        rows: { span: "1" },
        style: {
          backgroundColor: "#fffbe6",
          padding: { t: "15px", b: "15px", r: "15px", l: "15px" },
          border: {
            style: "dotted",
            width: { t: "1px", b: "1px", r: "1px", l: "1px" },
            color: { t: "#ffcc00", b: "#ffcc00", r: "#ffcc00", l: "#ffcc00" },
          },
          fontSize: "14px",
          textColor: "#663300",
        },
      },
    },
  },
};
