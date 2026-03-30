import config from '../Helper/config';
import MessageParser from '../Helper/MessageParser';
import ActionProvider from '../Helper/ActionProvider';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import useChatMessages from '../Helper/useChatMessages';
import './chatBot.css'

const ChatTryBot = () => {
  const { messages } = useChatMessages();
  return (
    <div>
      <Chatbot
      config={config}
      actionProvider={ActionProvider}
      messageParser={MessageParser}        
      />
      <div>
{messages.map((message, index) => (
<div key={index}>{message.text}</div>
))}
</div>
    </div>
  );
};

export default ChatTryBot;