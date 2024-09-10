import React, { useState } from 'react';
import { marked } from 'marked';
import './App.css'; // Custom CSS

const App = () => {
  const [markdown, setMarkdown] = useState(`
# Markdown Previewer

## Subheading

[FreeCodeCamp](https://www.freecodecamp.org)

Inline \`code\`

\`\`\`
Code block
\`\`\`

- List item 1
- List item 2

> Blockquote

![Image](https://via.placeholder.com/150)

**Bold text**
`);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="app">
      <div className="editor-container">
        <h2>Editor</h2>
        <textarea
          id="editor"
          className="editor"
          rows="20"
          value={markdown}
          onChange={handleChange}
        />
      </div>
      <div className="preview-container">
        <h2>Preview</h2>
        <div
          id="preview"
          className="preview"
          dangerouslySetInnerHTML={{ __html: marked(markdown) }}
        />
      </div>
    </div>
  );
};

export default App;
