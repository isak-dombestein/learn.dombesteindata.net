import { useState } from "react";
import HoverCardToggle from "./HoverCardToggle.jsx";
import { ChevronDown, ChevronUp } from "lucide-react";

const cardData = [
  {
    title:'<!DOCTYPE>',
    category: 'HTML',
    content: '!DOCTYPE tells the browser which document type to expect.',
    code: '<!DOCTYPE html>',
    link: 'https://www.w3schools.com/tags/tag_doctype.asp'
  },
  {
    title: '<html>',
    category: 'HTML',
    content: 'The root element of a page. This element should contain an additional lang parameter for accessibility tools and / or search engines.',
    code: `
    <html lang="en">
      <!-- Your page content goes here -->
    </html>`,
    link: 'https://www.w3schools.com/tags/tag_html.asp'
  },
  {
    title: '<head>',
    category: 'HTML',
    content: 'The Head element serves as a main container for metadata about the page',
    code: `
      <head>
        <!-- The metadata for the page goes here -->
      </head>
    `,
    link: 'https://www.w3schools.com/tags/tag_head.asp'
  },
  {
    title: '<meta>',
    category: 'HTML',
    content: 'Sets speficic bits of metadata for the page',
    code: `
    <head>
      <meta charset="UTF-8">
    </head>
    `,
    link: 'https://www.w3schools.com/tags/tag_meta.asp'
  },
  {
    title: '<title>',
    category: 'HTML',
    content: 'Title sets the page title visible in the browser tab',
    code: `
    <head>
      <title>MyWebsite</title>
    </head>
    `,
    link: 'https://www.w3schools.com/tags/tag_title.asp'
  },
  {
    title: '<link>',
    category: 'HTML',
    content: 'Links external resources like CSS-documents and sets their relationship to the current document',
    code: `
    <head>
      <link rel="stylesheet" href="style.css">
    </head>
    `,
    link: 'https://www.w3schools.com/tags/tag_link.asp'
  },
  {
    title: '<body>',
    category: 'HTML',
    content: 'The body is where all visible elements of your website should be placed.',
    code: `
    <body>
      <!-- Your page's content should go here -->
    </body>
    `,
    link: 'https://www.w3schools.com/tags/tag_body.asp'
  },
  {
    title: "<h1>-<h6>",
    category: "HTML",
    content: "Headings define titles and sections of the page's content. <h1> is the most important/largest, <h6> the least/smallest.",
    code: `
    <body>
      <h1> This is a big header </h1>
      <h2> This is a smaller header </h2>
      <h6> This is the smallest header </h6>
    </body>
    `,
    link: 'https://www.w3schools.com/tags/tag_hn.asp'
  },
  {
    title: "<p>",
    category: "HTML",
    content: "Paragraph tag. Used to display blocks of text with spacing.",
    code: `
    <body>
      <p>This will be visible, regular text</p>
    </body>
    `,
    link: 'https://www.w3schools.com/tags/tag_p.asp'
  },
  {
    title: "<a>",
    category: "HTML",
    content: 'The <a> tag creates a clickable link to another page or website. target="_blank" opens the link in a new tab.',
    code: `
    <a href="https://example.com" target="_blank">Visit Example</a>
    `,
    link: 'https://www.w3schools.com/tags/tag_a.asp'
  },
  {
    title: "<div>",
    category: "HTML",
    content: "The <div> tag is used to group block-level content. It's often used to structure layouts.",
    code: `
    <div class="container">
      <p>This is inside a box.</p>
    </div>
    `,
    link: "https://www.w3schools.com/tags/tag_div.asp"
  },
  {
    title: "<span>",
    category: "HTML",
    content: "The <span> tag is used to group inline text for styling or scripting.",
    code: `
    <p>This is <span class="highlight">highlighted</span> text.</p>
    `,
    link: "https://www.w3schools.com/tags/tag_span.asp"
  },
  {
    title: "<img>",
    category: "HTML",
    content: "The <img> tag shows an image on the page. You need to give it a source (local file path or URL) and alt text.",
    code: `
    <img src="image.jpg" alt="A description of the image">
    `,
    link: 'https://www.w3schools.com/tags/tag_img.asp'
  },
  {
    title: "meta viewport",
    category: "HTML",
    content: "This tag makes the site easier to read on phones and tablets.",
    code: `
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    `,
    link: 'https://www.w3schools.com/css/css_rwd_viewport.asp'
  },
  {
    title: '<li> / <ol> / <ul>',
    content: 'Create a list, either organized with numbers or unorganized with bullet points. Use ol or ul to create the list, and li for each list element.',
    code: `
    <body>
      <ul>
        <li>A list item with a bullet point</li>
      </ul>
      <ol>
        <li>A list item with a number</li>
      </ol>
    `,
    link: 'https://www.w3schools.com/Html/html_lists.asp'
  },
  {
    title: '<form> / <input> / <label>',
    content: 'Create a form with an input field to take input from a user',
    code: `
     <form action="/action_page.php">
      <label for="fname">First name:</label>
      <input type="text" id="fname" name="fname"><br><br>
      <label for="lname">Last name:</label>
      <input type="text" id="lname" name="lname"><br><br>
    </form> 
    `,
    link: 'https://www.w3schools.com/tags/tag_input.asp'
  }
  {
    title: "box-sizing",
    category: "CSS",
    content: "This setting makes sizing easier by including padding and borders in the element's size.",
    code: `
    * {
    box-sizing: border-box;
    }
    `,
    link: 'https://www.w3schools.com/css/css3_box-sizing.asp'
  },
  {
    title: "position / z-index",
    category: "CSS",
    content: "Use these to control where things appear and layer them on top of each other.",
    code: `
    .container {
      position: relative;
      z-index: 1; // The higher the z-index, the further in front the element is
    }

    .child {
      position: absolute;
      top: 10px;
      left: 10px;
    }
    `,
    link: 'https://www.w3schools.com/css/css_positioning.asp'
  },
  {
    title: "hover + transition",
    category: "CSS",
    content: "Lets you change styles when the user hovers, with a smooth animation.",
    code: `
    .button {
      background-color: #4CAF50;
      transition: background 0.3s ease;
    }

    .button:hover {
      background-color: #45a049;
    }
    `,
    link: 'https://www.w3schools.com/css/css3_transitions.asp'
  },
  {
    title: "flex / grid layout",
    category: "CSS",
    content: "These are layout systems that help you place and arrange content in rows or columns.",
    code: `
    .flex-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .grid-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
    }
    `,
    link: 'https://www.w3schools.com/css/css_grid.asp'
  },
{
  title: ".className",
  category: "CSS",
  content: "Selects all elements that have the specified class.",
  code: `
  .notice {
    color: red;
  }
  `,
  link: "https://www.w3schools.com/css/css_selectors.asp"
},
{
  title: "#id",
  category: "CSS",
  content: "Selects the element with the given ID. IDs should be unique.",
  code: `
  #header {
    background-color: lightblue;
  }
  `,
  link: "https://www.w3schools.com/css/css_selectors.asp"
},
{
  title: ":hover",
  category: "CSS",
  content: "Applies styles when the user hovers over an element.",
  code: `
  a:hover {
    color: green;
  }
  `,
  link: "https://www.w3schools.com/css/css_pseudo_classes.asp"
},
{
  title: "*",
  category: "CSS",
  content: "Selects all elements on the page.",
  code: `
  * {
    box-sizing: border-box;
  }
  `,
  link: "https://www.w3schools.com/css/css_selectors.asp"
},
{
  title: "element.className",
  category: "CSS",
  content: "Selects elements of a specific type with a specific class.",
  code: `
  p.notice {
    font-weight: bold;
  }
  `,
  link: "https://www.w3schools.com/css/css_selectors.asp"
},
{
  title: "color",
  category: "CSS",
  content: "Sets the color of text inside an element.",
  code: `
  p {
    color: blue;
  }
  `,
  link: "https://www.w3schools.com/cssref/pr_text_color.asp"
},
{
  title: "text-align",
  category: "CSS",
  content: "Aligns text horizontally: left, center, or right.",
  code: `
  h1 {
    text-align: center;
  }
  `,
  link: "https://www.w3schools.com/cssref/pr_text_text-align.asp"
},
{
  title: "background-color / background",
  category: "CSS",
  content: "Sets the background color or image of an element.",
  code: `
  div {
    background-color: yellow;
  }
  `,
  link: "https://www.w3schools.com/cssref/pr_background-color.asp"
},
{
  title: "margin",
  category: "CSS",
  content: "Sets space around the element (outside the border).",
  code: `
  .box {
    margin: 20px;
  }
  `,
  link: "https://www.w3schools.com/css/css_margin.asp"
},
{
  title: "padding",
  category: "CSS",
  content: "Sets space between content and the element's border.",
  code: `
  .box {
    padding: 10px;
  }
  `,
  link: "https://www.w3schools.com/css/css_padding.asp"
},
{
  title: "border-radius",
  category: "CSS",
  content: "Rounds the corners of the element.",
  code: `
  .card {
    border-radius: 8px;
  }
  `,
  link: "https://www.w3schools.com/css/css3_borders.asp"
},
{
  title: "font-family",
  category: "CSS",
  content: "Sets the font used for the text.",
  code: `
  body {
    font-family: Arial, sans-serif;
  }
  `,
  link: "https://www.w3schools.com/cssref/pr_font_font-family.asp"
},
{
  title: "font-size",
  category: "CSS",
  content: "Sets the size of the text.",
  code: `
  p {
    font-size: 16px;
  }
  `,
  link: "https://www.w3schools.com/cssref/pr_font_font-size.asp"
},
{
  title: "width / height",
  category: "CSS",
  content: "Defines how tall or wide an element should be.",
  code: `
  img {
    width: 100px;
    height: 80px;
  }
  `,
  link: "https://www.w3schools.com/cssref/pr_dim_width.asp"
},
{
  title: "display",
  category: "CSS",
  content: "Controls how an element is displayed: block, inline, none, etc.",
  code: `
  .box {
    display: block;
  }
  `,
  link: "https://www.w3schools.com/css/css_display_visibility.asp"
},
{
  title: "box-shadow",
  category: "CSS",
  content: "Adds a shadow around the element's border.",
  code: `
  .card {
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  }
  `,
  link: "https://www.w3schools.com/css/css3_shadows_box.asp"
}
];

export default function HoverCardGroup() {
  const [globalExpanded, setGlobalExpanded] = useState(null);
  const [htmlExpanded, setHtmlExpanded] = useState(null);
  const [cssExpanded, setCssExpanded] = useState(null);

  const toggleState = (value) => (value === true ? false : true);

  return (
    <div className="space-y-10">
      <div className="flex justify-center mb-8">
        <button
          onClick={() => {
            const newState = toggleState(globalExpanded);
            setGlobalExpanded(newState);
            setHtmlExpanded(null);
            setCssExpanded(null);
          }}
          className="px-6 py-2 text-base bg-purple-600 text-white rounded-full inline-flex items-center gap-2 hover:bg-purple-700 transition"
        >
          {globalExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          {globalExpanded ? "Collapse All" : "Expand All"}
        </button>
      </div>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">HTML Elements</h2>
          <button
            onClick={() => {
              setGlobalExpanded(null);
              setHtmlExpanded(toggleState(htmlExpanded));
            }}
            className="px-4 py-1 text-sm bg-pink-500 text-white rounded-full inline-flex items-center gap-2 hover:bg-pink-600 transition"
          >
            {htmlExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            {htmlExpanded ? "Collapse HTML" : "Expand HTML"}
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardData.filter(card => card.category === "HTML").map((card, idx) => (
            <HoverCardToggle
              key={idx}
              {...card}
              forceExpand={
                globalExpanded !== null
                  ? globalExpanded
                  : htmlExpanded
              }
            >
              <div>{card.content}</div>
            </HoverCardToggle>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">CSS Concepts</h2>
          <button
            onClick={() => {
              setGlobalExpanded(null);
              setCssExpanded(toggleState(cssExpanded));
            }}
            className="px-4 py-1 text-sm bg-indigo-500 text-white rounded-full inline-flex items-center gap-2 hover:bg-indigo-600 transition"
          >
            {cssExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            {cssExpanded ? "Collapse CSS" : "Expand CSS"}
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardData.filter(card => card.category === "CSS").map((card, idx) => (
            <HoverCardToggle
              key={idx}
              {...card}
              forceExpand={
                globalExpanded !== null
                  ? globalExpanded
                  : cssExpanded
              }
            >
              <div>{card.content}</div>
            </HoverCardToggle>
          ))}
        </div>
      </section>
    </div>
  );
}


