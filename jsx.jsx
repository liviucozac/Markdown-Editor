class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: `# This is an H1 heading

## This is an H2 sub-heading

Here is some **bold text** for emphasis.

You can also include [a link to freeCodeCamp](https://www.freecodecamp.org).

Here is some inline code: \`<div></div>\`

\`\`\`js
// This is a multi-line code block
function greet(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`

> This is a blockquote example.

- This is a bullet list item

1. This is a numbered list item

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ markdown: e.target.value });
  }

  render() {
    marked.setOptions({ breaks: true });
    const rawMarkup = marked.parse(this.state.markdown);
    return (
      <div id="main">
        <textarea
          id="editor"
          onChange={this.handleChange}
          value={this.state.markdown}>
        </textarea>
        <div
          id="preview"
          dangerouslySetInnerHTML={{ __html: rawMarkup }}>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<MarkdownEditor />, document.getElementById('root'));
