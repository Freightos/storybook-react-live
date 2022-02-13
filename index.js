import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import dracula from 'prism-react-renderer/themes/dracula';

export default function withLiveEdit({
  code,
  scope,
  theme = dracula,
  errorOnTop = true,
  editorStyle,
  errorStyles = {
    background: '#ff000040',
    padding: '8px',
    color: '#333',
    borderRadius: '4px',
  },
  ...rest
}) {
  return function LiveEditComponent(story, context) {
    const mergedScope = {
      React,
      ...scope,
      ...context.parameters.reactLive?.scope,
    };

    if (context.parameters.reactLive?.debug) {
      console.log('--- [ storybook-react-live DEBUG ] --- ', {
        story,
        context,
      });
    }

    return (
      <LiveProvider
        theme={context.parameters.reactLive?.theme || theme}
        code={code}
        scope={mergedScope}
        {...rest}
      >
        <LivePreview />
        {!errorOnTop && <LiveError style={errorStyles} />}
        <LiveEditor style={editorStyle} />
        {errorOnTop && <LiveError style={errorStyles} />}
      </LiveProvider>
    );
  };
}
