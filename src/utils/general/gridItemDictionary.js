export const GridItemDictionary = {
  basicResponsive: {
    show: "Basic Responsive Grid",
    description: "Standard multi-column layout with consistent gaps.",
    useCase: "General content sections, card layouts.",
    config: {
      default: {
        columns: 3,
        gap: { x: "16px", y: "16px" },
        style: {
          backgroundColor: "#ffffff",
          padding: { t: "20px", b: "20px", r: "20px", l: "20px" },
          margin: { t: "5px", b: "5px", r: "5px", l: "5px" },
        },
      },
      sm: {
        columns: 1,
        style: {
          padding: { t: "10px", b: "10px", r: "10px", l: "10px" },
        },
      },
      md: { columns: 2 },
      lg: { columns: 3 },
      xl: { columns: 4 },
    },
    children: {
      auto: {
        show: "Auto Responsive Child",
        description: "Single-column span with flexible placement.",
        config: {
          default: {
            columns: { span: "1", start: "auto", end: "auto" },
            align: "auto",
            justify: "auto",
            order: "0",
            style: {
              backgroundColor: "#f0f0f0",
              padding: { t: "10px", b: "10px", r: "10px", l: "10px" },
              border: {
                style: "solid",
                width: { t: "1px", b: "1px", r: "1px", l: "1px" },
                color: {
                  t: "#cccccc",
                  b: "#cccccc",
                  r: "#cccccc",
                  l: "#cccccc",
                },
              },
              textColor: "#333333",
              fontSize: "16px",
            },
          },
          sm: {
            columns: { span: "1" },
            style: {
              padding: { t: "5px", b: "5px", r: "5px", l: "5px" },
            },
          },
          md: { columns: { span: "1" } },
        },
      },
      centered: {
        show: "Centered Responsive Child",
        description: "Auto span but centered on larger screens.",
        config: {
          default: {
            columns: { span: "1" },
            align: "center",
            justify: "center",
            style: {
              backgroundColor: "#e0e0e0",
              padding: { t: "15px", b: "15px", r: "15px", l: "15px" },
              border: {
                style: "solid",
                width: { t: "1px", b: "1px", r: "1px", l: "1px" },
                color: {
                  t: "#cccccc",
                  b: "#cccccc",
                  r: "#cccccc",
                  l: "#cccccc",
                },
              },
              textColor: "#333333",
              fontSize: "16px",
            },
          },
          md: {
            columns: { span: "2" },
            style: {
              padding: { t: "20px", b: "20px", r: "20px", l: "20px" },
            },
          },
        },
      },
    },
  },

  denseContent: {
    show: "Dense Content Grid",
    description: "Automatically fills available space with minimal gaps.",
    useCase: "Masonry-like layouts or dynamic widgets.",
    config: {
      default: {
        columns: 4,
        flow: "row-dense",
        gap: { x: "8px", y: "8px" },
        style: {
          backgroundColor: "#f9f9f9",
          padding: { t: "10px", b: "10px", r: "10px", l: "10px" },
          margin: { t: "5px", b: "5px", r: "5px", l: "5px" },
        },
      },
      sm: {
        columns: 2,
        style: {
          padding: { t: "5px", b: "5px", r: "5px", l: "5px" },
        },
      },
      md: { columns: 3 },
      lg: { columns: 4 },
      xl: { columns: 5 },
    },
    children: {
      compact: {
        show: "Compact Child Block",
        description: "Tightly packed items for dense layouts.",
        config: {
          default: {
            columns: { span: "1" },
            align: "stretch",
            justify: "stretch",
            style: {
              backgroundColor: "#ffffff",
              padding: { t: "5px", b: "5px", r: "5px", l: "5px" },
              border: {
                style: "solid",
                width: { t: "1px", b: "1px", r: "1px", l: "1px" },
                color: {
                  t: "#e0e0e0",
                  b: "#e0e0e0",
                  r: "#e0e0e0",
                  l: "#e0e0e0",
                },
              },
              textColor: "#333333",
              fontSize: "14px",
            },
          },
        },
      },
    },
  },

  centeredBlock: {
    show: "Centered Content Block",
    description: "Items centered both horizontally and vertically.",
    useCase: "Hero sections, login forms.",
    config: {
      default: {
        columns: 1,
        rows: 1,
        justify_items: "center",
        items: "center",
        justify: "center",
        content: "center",
        style: {
          backgroundColor: "#f0f0f0",
          padding: { t: "40px", b: "40px", r: "40px", l: "40px" },
          margin: { t: "10px", b: "10px", r: "10px", l: "10px" },
        },
      },
    },
    children: {
      centered: {
        show: "Centered Block",
        description: "Item centered in both axes, ideal for form or hero unit.",
        config: {
          default: {
            columns: { span: "1" },
            align: "center",
            justify: "center",
            style: {
              backgroundColor: "#ffffff",
              padding: { t: "20px", b: "20px", r: "20px", l: "20px" },
              border: {
                style: "solid",
                width: { t: "2px", b: "2px", r: "2px", l: "2px" },
                color: {
                  t: "#cccccc",
                  b: "#cccccc",
                  r: "#cccccc",
                  l: "#cccccc",
                },
              },
              textColor: "#333333",
              fontSize: "18px",
            },
          },
        },
      },
    },
  },

  leftAligned: {
    show: "Left-Aligned Section",
    description: "Content aligned to start.",
    useCase: "Sidebars, vertical menus.",
    config: {
      default: {
        columns: 3,
        justify_items: "start",
        items: "start",
        justify: "start",
        content: "start",
        style: {
          backgroundColor: "#ffffff",
          padding: { t: "15px", b: "15px", r: "15px", l: "15px" },
          margin: { t: "5px", b: "5px", r: "5px", l: "5px" },
        },
      },
      sm: {
        columns: 1,
        style: {
          padding: { t: "10px", b: "10px", r: "10px", l: "10px" },
        },
      },
    },
    children: {
      startAligned: {
        show: "Start Aligned Child",
        description: "Aligns content to the left/top in the cell.",
        config: {
          default: {
            columns: { span: "1" },
            align: "start",
            justify: "start",
            style: {
              backgroundColor: "#f0f0f0",
              padding: { t: "10px", b: "10px", r: "10px", l: "10px" },
              border: {
                style: "solid",
                width: { t: "1px", b: "1px", r: "1px", l: "1px" },
                color: {
                  t: "#cccccc",
                  b: "#cccccc",
                  r: "#cccccc",
                  l: "#cccccc",
                },
              },
              textColor: "#333333",
              fontSize: "16px",
            },
          },
        },
      },
    },
  },

  fullBleed: {
    show: "Full Bleed Grid",
    description: "Items stretch to fill entire space.",
    useCase: "Dashboard tiles, media grids.",
    config: {
      default: {
        columns: 4,
        justify_items: "stretch",
        items: "stretch",
        justify: "stretch",
        content: "stretch",
        gap: { x: "0px", y: "0px" },
        style: {
          backgroundColor: "#ffffff",
          padding: { t: "0px", b: "0px", r: "0px", l: "0px" },
          margin: { t: "0px", b: "0px", r: "0px", l: "0px" },
        },
      },
      sm: {
        columns: 1,
        style: {
          padding: { t: "5px", b: "5px", r: "5px", l: "5px" },
        },
      },
    },
    children: {
      stretched: {
        show: "Full Stretch Child",
        description: "Fills all available space in the grid cell.",
        config: {
          default: {
            columns: { span: "1" },
            align: "stretch",
            justify: "stretch",
            style: {
              backgroundColor: "#f0f0f0",
              padding: { t: "10px", b: "10px", r: "10px", l: "10px" },
              textColor: "#333333",
              fontSize: "16px",
            },
          },
        },
      },
    },
  },

  twoColumnResponsive: {
    show: "Two-Column Layout with Responsive Collapse",
    description: "2 columns on desktop, stacked on mobile.",
    useCase: "Profile/details sections.",
    config: {
      default: {
        columns: 2,
        gap: { x: "20px", y: "20px" },
        style: {
          backgroundColor: "#ffffff",
          padding: { t: "20px", b: "20px", r: "20px", l: "20px" },
          margin: { t: "5px", b: "5px", r: "5px", l: "5px" },
        },
      },
      sm: {
        columns: 1,
        style: {
          padding: { t: "10px", b: "10px", r: "10px", l: "10px" },
        },
      },
    },
    children: {
      halfSpan: {
        show: "Responsive Half Span",
        description: "Takes half the grid on desktop, full on mobile.",
        config: {
          default: {
            columns: { span: "1" },
            align: "start",
            justify: "start",
            style: {
              backgroundColor: "#f0f0f0",
              padding: { t: "15px", b: "15px", r: "15px", l: "15px" },
              border: {
                style: "solid",
                width: { t: "1px", b: "1px", r: "1px", l: "1px" },
                color: {
                  t: "#cccccc",
                  b: "#cccccc",
                  r: "#cccccc",
                  l: "#cccccc",
                },
              },
              textColor: "#333333",
              fontSize: "16px",
            },
          },
          sm: {
            columns: { span: "1" },
            style: {
              padding: { t: "10px", b: "10px", r: "10px", l: "10px" },
            },
          },
        },
      },
    },
  },

  equalCardGrid: {
    show: "Equal Grid Cards",
    description: "Consistent spacing and equal-sized cards.",
    useCase: "Product cards or services list.",
    config: {
      default: {
        columns: 3,
        gap: { x: "16px", y: "16px" },
        justify_items: "center",
        style: {
          backgroundColor: "#ffffff",
          padding: { t: "20px", b: "20px", r: "20px", l: "20px" },
          margin: { t: "5px", b: "5px", r: "5px", l: "5px" },
        },
      },
      sm: {
        columns: 1,
        style: {
          padding: { t: "10px", b: "10px", r: "10px", l: "10px" },
        },
      },
      md: {
        columns: 2,
        style: {
          padding: { t: "15px", b: "15px", r: "15px", l: "15px" },
        },
      },
    },
    children: {
      equal: {
        show: "Equal Card Child",
        description: "Centered, equally spaced child blocks.",
        config: {
          default: {
            columns: { span: "1" },
            align: "center",
            justify: "center",
            style: {
              backgroundColor: "#ffffff",
              padding: { t: "15px", b: "15px", r: "15px", l: "15px" },
              border: {
                style: "solid",
                width: { t: "1px", b: "1px", r: "1px", l: "1px" },
                color: {
                  t: "#cccccc",
                  b: "#cccccc",
                  r: "#cccccc",
                  l: "#cccccc",
                },
              },
              textColor: "#333333",
              fontSize: "16px",
            },
          },
        },
      },
    },
  },

  featureHighlight: {
    show: "Feature Highlight",
    description: "Large top row for main content, smaller items below.",
    useCase: "Landing pages, feature showcases.",
    config: {
      default: {
        columns: 4,
        rows: 2,
        gap: { x: "20px", y: "20px" },
        style: {
          backgroundColor: "#f9f9f9",
          padding: { t: "20px", b: "20px", r: "20px", l: "20px" },
          margin: { t: "10px", b: "10px", r: "10px", l: "10px" },
        },
      },
      sm: {
        columns: 1,
        style: {
          padding: { t: "10px", b: "10px", r: "10px", l: "10px" },
        },
      },
      md: {
        columns: 2,
        style: {
          padding: { t: "15px", b: "15px", r: "15px", l: "15px" },
        },
      },
    },
    children: {
      hero: {
        show: "Hero Feature",
        description: "Spans entire first row.",
        config: {
          default: {
            columns: { span: "4" },
            rows: { span: "1" },
            align: "center",
            justify: "center",
            style: {
              backgroundColor: "#ffffff",
              padding: { t: "30px", b: "30px", r: "30px", l: "30px" },
              border: {
                style: "solid",
                width: { t: "2px", b: "2px", r: "2px", l: "2px" },
                color: {
                  t: "#cccccc",
                  b: "#cccccc",
                  r: "#cccccc",
                  l: "#cccccc",
                },
              },
              textColor: "#333333",
              fontSize: "20px",
            },
          },
          sm: {
            columns: { span: "1" },
            style: {
              padding: { t: "15px", b: "15px", r: "15px", l: "15px" },
            },
          },
        },
      },
      secondary: {
        show: "Secondary Feature",
        description: "Fits below hero section.",
        config: {
          default: {
            columns: { span: "1" },
            rows: { span: "1" },
            style: {
              backgroundColor: "#f0f0f0",
              padding: { t: "10px", b: "10px", r: "10px", l: "10px" },
              border: {
                style: "solid",
                width: { t: "1px", b: "1px", r: "1px", l: "1px" },
                color: {
                  t: "#cccccc",
                  b: "#cccccc",
                  r: "#cccccc",
                  l: "#cccccc",
                },
              },
              textColor: "#333333",
              fontSize: "14px",
            },
          },
        },
      },
    },
  },

  sidebarContent: {
    show: "Sidebar + Content",
    description: "One column sidebar with content on the right.",
    useCase: "Docs, dashboards, blogs.",
    config: {
      default: {
        columns: 4,
        gap: { x: "24px", y: "24px" },
        style: {
          backgroundColor: "#ffffff",
          padding: { t: "20px", b: "20px", r: "20px", l: "20px" },
          margin: { t: "5px", b: "5px", r: "5px", l: "5px" },
        },
      },
      sm: {
        columns: 1,
        style: {
          padding: { t: "10px", b: "10px", r: "10px", l: "10px" },
        },
      },
    },
    children: {
      sidebar: {
        show: "Sidebar",
        description: "Left-aligned narrow column.",
        config: {
          default: {
            columns: { span: "1" },
            align: "start",
            justify: "start",
            style: {
              backgroundColor: "#f0f0f0",
              padding: { t: "15px", b: "15px", r: "15px", l: "15px" },
              border: {
                style: "solid",
                width: { t: "1px", b: "1px", r: "1px", l: "1px" },
                color: {
                  t: "#cccccc",
                  b: "#cccccc",
                  r: "#cccccc",
                  l: "#cccccc",
                },
              },
              textColor: "#333333",
              fontSize: "16px",
            },
          },
          sm: {
            columns: { span: "1" },
            style: {
              padding: { t: "10px", b: "10px", r: "10px", l: "10px" },
            },
          },
        },
      },
      content: {
        show: "Main Content Area",
        description: "Takes remaining space.",
        config: {
          default: {
            columns: { span: "3" },
            align: "start",
            justify: "start",
            style: {
              backgroundColor: "#ffffff",
              padding: { t: "15px", b: "15px", r: "15px", l: "15px" },
              border: {
                style: "solid",
                width: { t: "1px", b: "1px", r: "1px", l: "1px" },
                color: {
                  t: "#cccccc",
                  b: "#cccccc",
                  r: "#cccccc",
                  l: "#cccccc",
                },
              },
              textColor: "#333333",
              fontSize: "16px",
            },
          },
          sm: {
            columns: { span: "1" },
            style: {
              padding: { t: "10px", b: "10px", r: "10px", l: "10px" },
            },
          },
        },
      },
    },
  },

  callToAction: {
    show: "Call to Action Block",
    description: "Single row with left text and right button.",
    useCase: "Newsletter signup, promos.",
    config: {
      default: {
        columns: 2,
        gap: { x: "16px", y: "16px" },
        style: {
          backgroundColor: "#f9f9f9",
          padding: { t: "20px", b: "20px", r: "20px", l: "20px" },
          margin: { t: "10px", b: "10px", r: "10px", l: "10px" },
        },
      },
      sm: {
        columns: 1,
        style: {
          padding: { t: "10px", b: "10px", r: "10px", l: "10px" },
        },
      },
    },
    children: {
      text: {
        show: "CTA Text",
        description: "Explanatory text for CTA.",
        config: {
          default: {
            columns: { span: "1" },
            align: "center",
            justify: "start",
            style: {
              backgroundColor: "transparent",
              padding: { t: "10px", b: "10px", r: "10px", l: "10px" },
              textColor: "#333333",
              fontSize: "18px",
            },
          },
        },
      },
      button: {
        show: "CTA Button",
        description: "Action button aligned right.",
        config: {
          default: {
            columns: { span: "1" },
            align: "center",
            justify: "end",
            style: {
              backgroundColor: "#007bff",
              padding: { t: "10px", b: "10px", r: "20px", l: "20px" },
              border: {
                style: "solid",
                width: { t: "1px", b: "1px", r: "1px", l: "1px" },
                color: {
                  t: "#0056b3",
                  b: "#0056b3",
                  r: "#0056b3",
                  l: "#0056b3",
                },
              },
              textColor: "#ffffff",
              fontSize: "16px",
            },
          },
        },
      },
    },
  },

  asymmetricSplit: {
    show: "Asymmetric Split",
    description: "Uneven split for visual emphasis.",
    useCase: "Marketing split layouts, testimonials.",
    config: {
      default: {
        columns: 5,
        gap: { x: "20px", y: "20px" },
        style: {
          backgroundColor: "#ffffff",
          padding: { t: "20px", b: "20px", r: "20px", l: "20px" },
          margin: { t: "5px", b: "5px", r: "5px", l: "5px" },
        },
      },
      sm: {
        columns: 1,
        style: {
          padding: { t: "10px", b: "10px", r: "10px", l: "10px" },
        },
      },
    },
    children: {
      primary: {
        show: "Primary Content",
        description: "Takes more space for emphasis.",
        config: {
          default: {
            columns: { span: "3" },
            style: {
              backgroundColor: "#ffffff",
              padding: { t: "20px", b: "20px", r: "20px", l: "20px" },
              border: {
                style: "solid",
                width: { t: "1px", b: "1px", r: "1px", l: "1px" },
                color: {
                  t: "#cccccc",
                  b: "#cccccc",
                  r: "#cccccc",
                  l: "#cccccc",
                },
              },
              textColor: "#333333",
              fontSize: "18px",
            },
          },
          sm: {
            columns: { span: "1" },
            style: {
              padding: { t: "10px", b: "10px", r: "10px", l: "10px" },
            },
          },
        },
      },
      secondary: {
        show: "Secondary Content",
        description: "Smaller supporting content.",
        config: {
          default: {
            columns: { span: "2" },
            style: {
              backgroundColor: "#f0f0f0",
              padding: { t: "15px", b: "15px", r: "15px", l: "15px" },
              border: {
                style: "solid",
                width: { t: "1px", b: "1px", r: "1px", l: "1px" },
                color: {
                  t: "#cccccc",
                  b: "#cccccc",
                  r: "#cccccc",
                  l: "#cccccc",
                },
              },
              textColor: "#333333",
              fontSize: "14px",
            },
          },
          sm: {
            columns: { span: "1" },
            style: {
              padding: { t: "10px", b: "10px", r: "10px", l: "10px" },
            },
          },
        },
      },
    },
  },

  cardDeck: {
    show: "Card Deck Layout",
    description: "Cards arranged in consistent grid with equal spacing.",
    useCase: "Product listing, team members.",
    config: {
      default: {
        columns: 4,
        gap: { x: "24px", y: "24px" },
        justify_items: "center",
        style: {
          backgroundColor: "#ffffff",
          padding: { t: "20px", b: "20px", r: "20px", l: "20px" },
          margin: { t: "5px", b: "5px", r: "5px", l: "5px" },
        },
      },
      sm: {
        columns: 1,
        style: {
          padding: { t: "10px", b: "10px", r: "10px", l: "10px" },
        },
      },
      md: {
        columns: 2,
        style: {
          padding: { t: "15px", b: "15px", r: "15px", l: "15px" },
        },
      },
    },
    children: {
      card: {
        show: "Card Block",
        description: "Uniform layout for each card.",
        config: {
          default: {
            columns: { span: "1" },
            align: "start",
            justify: "center",
            style: {
              backgroundColor: "#ffffff",
              padding: { t: "15px", b: "15px", r: "15px", l: "15px" },
              border: {
                style: "solid",
                width: { t: "1px", b: "1px", r: "1px", l: "1px" },
                color: {
                  t: "#cccccc",
                  b: "#cccccc",
                  r: "#cccccc",
                  l: "#cccccc",
                },
              },
              textColor: "#333333",
              fontSize: "16px",
            },
          },
        },
      },
    },
  },
  nestedGrid: {
    show: "Nested Grid Layout",
    description: "A grid containing another grid for complex layouts.",
    useCase: "Dashboard with grouped sections, nested content blocks.",
    config: {
      default: {
        columns: 3,
        gap: { x: "20px", y: "20px" },
        style: {
          backgroundColor: "#ffffff",
          padding: { t: "20px", b: "20px", r: "20px", l: "20px" },
          margin: { t: "5px", b: "5px", r: "5px", l: "5px" },
        },
        sm: {
          columns: 1,
          style: {
            padding: { t: "10px", b: "10px", r: "10px", l: "10px" },
          },
        },
        md: { columns: 2 },
        lg: { columns: 3 },
      },
      children: {
        nested: {
          show: "Nested Grid Child",
          description: "A child grid with its own responsive columns.",
          config: {
            default: {
              columns: { span: "1" },
              align: "stretch",
              justify: "stretch",
              style: {
                backgroundColor: "#f9f9f9",
                padding: { t: "15px", b: "15px", r: "15px", l: "15px" },
                border: {
                  style: "solid",
                  width: { t: "1px", b: "1px", r: "1px", l: "1px" },
                  color: {
                    t: "#cccccc",
                    b: "#cccccc",
                    r: "#cccccc",
                    l: "#cccccc",
                  },
                },
              },
              grid: {
                columns: 2,
                gap: { x: "10px", y: "10px" },
                style: {
                  backgroundColor: "#ffffff",
                },
                sm: { columns: 1 },
              },
            },
            sm: {
              columns: { span: "1" },
              style: {
                padding: { t: "10px", b: "10px", r: "10px", l: "10px" },
              },
            },
          },
        },
      },
    },
  },

  heroWithSidebar: {
    show: "Hero with Sidebar",
    description: "A large hero section with a narrow sidebar.",
    useCase: "Landing pages with promotional content and navigation.",
    config: {
      default: {
        columns: 12,
        gap: { x: "24px", y: "24px" },
        style: {
          backgroundColor: "#f9f9f9",
          padding: { t: "20px", b: "20px", r: "20px", l: "20px" },
          margin: { t: "10px", b: "10px", r: "10px", l: "10px" },
        },
        sm: {
          columns: 1,
          style: {
            padding: { t: "10px", b: "10px", r: "10px", l: "10px" },
          },
        },
        md: { columns: 6 },
      },
      children: {
        hero: {
          show: "Hero Section",
          description: "Large promotional area spanning most of the grid.",
          config: {
            default: {
              columns: { span: "9" },
              align: "center",
              justify: "center",
              style: {
                backgroundColor: "#ffffff",
                padding: { t: "40px", b: "40px", r: "40px", l: "40px" },
                border: {
                  style: "solid",
                  width: { t: "2px", b: "2px", r: "2px", l: "2px" },
                  color: {
                    t: "#cccccc",
                    b: "#cccccc",
                    r: "#cccccc",
                    l: "#cccccc",
                  },
                },
                textColor: "#333333",
                fontSize: "24px",
              },
            },
            sm: {
              columns: { span: "1" },
              style: {
                padding: { t: "20px", b: "20px", r: "20px", l: "20px" },
              },
            },
          },
        },
        sidebar: {
          show: "Sidebar Navigation",
          description: "Narrow vertical navigation or widget area.",
          config: {
            default: {
              columns: { span: "3" },
              align: "start",
              justify: "start",
              style: {
                backgroundColor: "#f0f0f0",
                padding: { t: "20px", b: "20px", r: "20px", l: "20px" },
                border: {
                  style: "solid",
                  width: { t: "1px", b: "1px", r: "1px", l: "1px" },
                  color: {
                    t: "#cccccc",
                    b: "#cccccc",
                    r: "#cccccc",
                    l: "#cccccc",
                  },
                },
                textColor: "#333333",
                fontSize: "16px",
              },
            },
            sm: {
              columns: { span: "1" },
              style: {
                padding: { t: "10px", b: "10px", r: "10px", l: "10px" },
              },
            },
          },
        },
      },
    },
  },

  galleryGrid: {
    show: "Gallery Grid",
    description: "A grid optimized for image or media display.",
    useCase: "Photo galleries, portfolio showcases.",
    config: {
      default: {
        columns: 4,
        gap: { x: "12px", y: "12px" },
        style: {
          backgroundColor: "#ffffff",
          padding: { t: "20px", b: "20px", r: "20px", l: "20px" },
          margin: { t: "5px", b: "5px", r: "5px", l: "5px" },
        },
        sm: {
          columns: 2,
          style: {
            padding: { t: "10px", b: "10px", r: "10px", l: "10px" },
          },
        },
        md: { columns: 3 },
        lg: { columns: 4 },
        xl: { columns: 5 },
      },
      children: {
        media: {
          show: "Media Item",
          description: "Square or rectangular media container.",
          config: {
            default: {
              columns: { span: "1" },
              align: "center",
              justify: "center",
              style: {
                backgroundColor: "#f0f0f0",
                padding: { t: "5px", b: "5px", r: "5px", l: "5px" },
                border: {
                  style: "solid",
                  width: { t: "1px", b: "1px", r: "1px", l: "1px" },
                  color: {
                    t: "#cccccc",
                    b: "#cccccc",
                    r: "#cccccc",
                    l: "#cccccc",
                  },
                },
                aspectRatio: "1/1", // Ensures square media
                textColor: "#333333",
                fontSize: "14px",
              },
            },
            sm: {
              style: {
                padding: { t: "3px", b: "3px", r: "3px", l: "3px" },
              },
            },
          },
        },
        featured: {
          show: "Featured Media Item",
          description: "Larger media item for emphasis.",
          config: {
            default: {
              columns: { span: "2" },
              rows: { span: "2" },
              align: "center",
              justify: "center",
              style: {
                backgroundColor: "#f0f0f0",
                padding: { t: "10px", b: "10px", r: "10px", l: "10px" },
                border: {
                  style: "solid",
                  width: { t: "2px", b: "2px", r: "2px", l: "2px" },
                  color: {
                    t: "#cccccc",
                    b: "#cccccc",
                    r: "#cccccc",
                    l: "#cccccc",
                  },
                },
                aspectRatio: "1/1",
                textColor: "#333333",
                fontSize: "16px",
              },
            },
            sm: {
              columns: { span: "2" },
              rows: { span: "1" },
              style: {
                padding: { t: "5px", b: "5px", r: "5px", l: "5px" },
              },
            },
          },
        },
      },
    },
  },
};
