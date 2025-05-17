import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageSquare, FiX, FiUser, FiCpu } from 'react-icons/fi';

const sampleResponses = {
  'how do i sell my license': 'To sell your license, click "Get a Quote", upload your license details, and we\'ll respond within 24 hours.',
  'what software do you accept': 'We accept Windows, Microsoft Office, Adobe, and most major software licenses.',
  'how fast do i get paid': 'Payments are typically processed within 24 hours of approval.',
  'hello': 'Hi there! How can I assist you today?',
};

const fallbackSuggestions = [
  'How do I sell my license?',
  'What software do you accept?',
  'How fast do I get paid?',
  'What is license buyback?',
  'Is my license eligible?',
];

const getMockReply = (input) => {
  const question = input.toLowerCase().trim();
  for (const key in sampleResponses) {
    if (question.includes(key)) {
      return sampleResponses[key];
    }
  }
  return "Hmm, I'm not sure about that. Try selecting a suggested question below!";
};

const ChatWidget = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [open, setOpen] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const toggleChat = () => {
    setOpen((prev) => {
      if (!prev) {
        setMessages([
          { role: 'assistant', content: "Hi! I'm here to help. Ask me anything." }
        ]);
        setShowSuggestions(false);
      }
      return !prev;
    });
  };

  const sendMessage = (message = input) => {
    if (!message.trim()) return;

    const userMessage = { role: 'user', content: message };
    const assistantReply = { role: 'assistant', content: getMockReply(message) };

    setMessages([userMessage, assistantReply]); 
    setInput('');
    setShowSuggestions(true);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={toggleChat}
        className="bg-green-500 hover:bg-green-600 p-3 rounded-full shadow-lg text-white"
        aria-label="Toggle chat"
      >
        <FiMessageSquare size={24} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="mt-4 w-[350px] rounded-xl shadow-2xl p-4 bg-gradient-to-br from-[#0f172a] to-[#1a2e2b] text-white"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm text-gray-300">Ask your software questions</span>
              <button onClick={toggleChat} className="text-white hover:text-green-400">
                <FiX />
              </button>
            </div>

            <div className="min-h-[100px] mb-3 flex flex-col justify-end space-y-3 transition-all duration-300">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.role === 'assistant' && <FiCpu className="w-5 h-5 text-green-400 flex-shrink-0" />}
                  <div
                    className={`max-w-[80%] px-3 py-2 rounded-md text-sm ${
                      msg.role === 'user'
                        ? 'bg-green-600 text-white rounded-br-none'
                        : 'bg-white/10 text-white rounded-bl-none'
                    }`}
                  >
                    {msg.content}
                  </div>
                  {msg.role === 'user' && <FiUser className="w-5 h-5 text-white flex-shrink-0" />}
                </div>
              ))}
            </div>

       
            {showSuggestions && (
              <div className="mb-3 space-y-2">
                <p className="text-xs text-gray-400">You might also ask:</p>
                <div className="flex flex-wrap gap-2">
                  {fallbackSuggestions.map((text, idx) => (
                    <button
                      key={idx}
                      onClick={() => sendMessage(text)}
                      className="bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full text-xs text-white transition"
                    >
                      {text}
                    </button>
                  ))}
                </div>
              </div>
            )}

          
            <div className="flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-white/10 text-white border border-white/20 rounded-md px-3 py-2 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <button
                onClick={() => sendMessage()}
                className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md font-medium text-white transition"
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatWidget;
