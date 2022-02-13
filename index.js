import React from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import theme from 'prism-react-renderer/themes/dracula';

const defaultReactElementToJSXStringOptions = {
  showDefaultProps: true,
  showFunctions: true,
};

export default function withLiveEdit(code, providedScope, ops) {
  const scope = {
    React,
    ...providedScope,
  };

  const options = {
    jsxStringOptions: {},
    noInline: false,
    ...ops,
  };

  const editorCodeOptions = {
    ...options.jsxStringOptions,
    ...defaultReactElementToJSXStringOptions,
  };

  return function LiveEditComponent(storyFn) {
    const editorCode =
      code || reactElementToJSXString(storyFn(), editorCodeOptions);

    return (
      <LiveProvider
        theme={theme}
        code={editorCode}
        scope={scope}
        noInline={options.noInline}
      >
        <LivePreview />
        <LiveError
          style={{
            background: '#ff000040',
            padding: '8px',
            color: '#333',
            borderRadius: '4px',
          }}
        />
        <LiveEditor />
      </LiveProvider>
    );
  };
}
