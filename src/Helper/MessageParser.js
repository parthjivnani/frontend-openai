// in MessageParser.js
import React from 'react';

const MessageParser = ({ children, actions,setState}) => {
   
  const parse = (message) => {
 
  
    if (message) {
      actions.handleMessage(message);
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;