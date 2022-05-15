/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import Highlight, { defaultProps } from 'prism-react-renderer';

function Code({ children, className }) {
  const language = className?.replace(/language-/, '');
  const match = /language-(\w+)/.exec(className || '');
  return match ? (
    <Highlight
      {...defaultProps}
      code={children}
      language={language || 'jsx'}
      theme={null}
    >
      {({
        className: highlightClassName,
        style,
        tokens,
        getLineProps,
        getTokenProps
      }) => (
        <pre
          className={highlightClassName}
          style={{ ...style, padding: '20px', wordBreak: 'break-word' }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  ) : (
    <code className={className}>{children}</code>
  );
}

Code.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string
};

Code.defaultProps = {
  className: null
};

export default Code;
