// in ActionProvider.jsx
import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleMessage = async (userMessage) => {
    
    const prompt = userMessage

    try{
    let result = await fetch('http://localhost:4000/medical/chatbot',{
            method:'POST',
            body: JSON.stringify({prompt}),
            headers:{
                'Content-Type':'application/json'
            }}
         );

        
         result = await result.json()
         console.log(123,result)
         const message = result.bot.content
    const botMessage = createChatBotMessage(`${message}`);

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }
  catch(error){
    console.log('Something went wrong')
  }};

  // Put the handleHello function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleMessage,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;