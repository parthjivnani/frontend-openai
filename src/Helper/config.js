// in config.js
import { createChatBotMessage } from 'react-chatbot-kit';

const initialMessages = 'Hello how can i help you?';
const botName = " Assistant"

const config = {
  initialMessages: [createChatBotMessage(`${initialMessages}`)],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
};

export default config;