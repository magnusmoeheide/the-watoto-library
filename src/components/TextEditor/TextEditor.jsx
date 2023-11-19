import React, { useState, useEffect } from "react";
import { EditorState, ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { stateToHTML } from "draft-js-export-html"; // Import the library for converting to HTML
import { stateFromHTML } from "draft-js-import-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const TextEditor = ({ htmlContent, onContentChange }) => {
  const toolbarOptions = {
    options: ["inline", "list", "link", "history"],
    inline: {
      inDropdown: false,
      options: ["bold", "italic", "underline"],
    },
    list: {
      inDropdown: false,
      options: ["unordered", "ordered"],
    },
  };

  // Initialize the EditorState with the provided HTML content
  const initialEditorState = () => {
    const contentState = stateFromHTML(htmlContent); // Convert from HTML to ContentState
    return EditorState.createWithContent(contentState);
  };

  const [editorState, setEditorState] = useState(initialEditorState());

  // Listen for changes in the editor content and convert to HTML
  useEffect(() => {
    if (onContentChange) {
      const contentState = editorState.getCurrentContent();
      const htmlContent = stateToHTML(contentState);
      onContentChange(htmlContent);
    }
  }, [editorState, onContentChange]);

  return (
    <Editor
      editorState={editorState}
      toolbar={toolbarOptions}
      onEditorStateChange={setEditorState}
    />
  );
};

export default TextEditor;
