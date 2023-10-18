import React, { useState } from 'react';

function TextEditor() {
  const [text, setText] = useState('');
  const [mode, setMode] = useState('paragraph');

  const handleModeChange = (newMode) => {
    setMode(newMode);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <div>
        <button onClick={() => handleModeChange('paragraph')}>Paragraph</button>
        <button onClick={() => handleModeChange('h3')}>H3</button>
        <button onClick={() => handleModeChange('h4')}>H4</button>
        <button onClick={() => handleModeChange('bold')}>Bold</button>
      </div>

      {mode === 'paragraph' && (
        <textarea
          value={text}
          onChange={handleTextChange}
          placeholder="Enter text here..."
        />
      )}

      {mode === 'h3' && <h3>{text}</h3>}
      {mode === 'h4' && <h4>{text}</h4>}
      {mode === 'bold' && <strong>{text}</strong>}
    </div>
  );
}

export default TextEditor;
