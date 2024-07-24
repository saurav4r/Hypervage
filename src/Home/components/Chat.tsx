// src/components/ChatBox.js
import React, { useState } from 'react';

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim() !== '') {
      setMessages([...messages, { sender: 'user', text: input }]);
      setInput('');

      // Simulate ChatGPT response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: 'chatgpt', text: 'This is a response from ChatGPT.' },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold">ChatGPT Chat Box</h2>
      </div>
      <div className="p-4 h-96 overflow-y-auto">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-4 p-2 rounded-lg ${
              message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-gray-200 flex">
        <input
          type="text"
          className="flex-grow p-2 border rounded-lg"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
