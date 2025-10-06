import { useState, useRef, useEffect } from 'react';
import {
  MessageCircle,
  X,
  Send,
  Bot,
  User,
  Sparkles,
  Loader2
} from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Hello! 👋 I\'m your Vietnam Travel Assistant. How can I help you today? I can assist with visa information, tourist attractions, local customs, and more!',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickQuestions = [
    "How do I apply for a visa?",
    "What are popular tourist attractions?",
    "Tell me about Vietnamese customs",
    "How to use VAT refund?",
    "Emergency contacts in Vietnam"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const simulateAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes('visa')) {
      return "📋 Vietnam offers e-Visa for tourists from most countries. You can:\n\n1. Apply online through this app\n2. Processing time: 3-5 business days\n3. Validity: 30-90 days\n4. Required documents: Passport, photo, travel details\n\nWould you like me to guide you through the e-Visa application process?";
    } else if (lowerMessage.includes('attraction') || lowerMessage.includes('tourist')) {
      return "🏛️ Vietnam's top attractions include:\n\n• Halong Bay (UNESCO World Heritage)\n• Hoi An Ancient Town\n• Temple of Literature, Hanoi\n• Cu Chi Tunnels, HCMC\n• Phong Nha Cave\n\nYou can book tickets directly in the app. Would you like to see available tours?";
    } else if (lowerMessage.includes('custom') || lowerMessage.includes('culture')) {
      return "🎭 Vietnamese cultural tips:\n\n• Remove shoes when entering homes/temples\n• Dress modestly at religious sites\n• Use both hands when giving/receiving items\n• Bargaining is common at markets\n• Tipping is not mandatory but appreciated\n\nAny specific customs you'd like to know about?";
    } else if (lowerMessage.includes('vat') || lowerMessage.includes('refund')) {
      return "💰 VAT Refund Process:\n\n1. Shop at VAT refund eligible stores\n2. Keep receipts (minimum 2 million VND)\n3. Get customs stamp at airport\n4. Claim refund at designated counters\n\nYou can scan receipts and track refund status in the VAT Refund section of this app!";
    } else if (lowerMessage.includes('emergency') || lowerMessage.includes('help')) {
      return "🚨 Emergency Contacts:\n\n• Police: 113\n• Ambulance: 115\n• Fire: 114\n• Tourist Hotline: 1800-1007\n\nIn-app SOS button connects you to nearest authorities and your embassy. Stay safe!";
    } else if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return "Hello! 😊 How can I assist you with your Vietnam travel today? Feel free to ask about visas, attractions, local customs, or anything else!";
    } else {
      return "I understand you're asking about \"" + userMessage + "\". While I can help with visa information, tourist attractions, local customs, VAT refunds, and emergency assistance, I need a bit more context. Could you please rephrase or choose from the quick questions above?";
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI processing delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: simulateAIResponse(inputMessage),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleQuickQuestion = (question: string) => {
    setInputMessage(question);
    setTimeout(() => handleSendMessage(), 100);
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all hover:scale-110 z-50 group"
          aria-label="Open AI Assistant"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
            AI
          </span>
          <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Ask AI Assistant
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 border border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-white/20 p-2 rounded-full mr-3">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold flex items-center">
                  AI Travel Assistant
                  <Sparkles className="w-4 h-4 ml-2 text-yellow-300" />
                </h3>
                <p className="text-xs text-white/80">Powered by GenAI</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-2 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start max-w-[80%] ${message.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`flex-shrink-0 ${message.role === 'user' ? 'ml-2' : 'mr-2'}`}>
                    {message.role === 'assistant' ? (
                      <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-2 rounded-full">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                    ) : (
                      <div className="bg-gray-300 p-2 rounded-full">
                        <User className="w-4 h-4 text-gray-600" />
                      </div>
                    )}
                  </div>
                  <div
                    className={`px-4 py-2 rounded-2xl ${
                      message.role === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-800 border border-gray-200'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.content}</p>
                    <p className={`text-xs mt-1 ${message.role === 'user' ? 'text-blue-200' : 'text-gray-400'}`}>
                      {message.timestamp.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-start">
                <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-2 rounded-full mr-2">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-white px-4 py-3 rounded-2xl border border-gray-200">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {messages.length <= 1 && (
            <div className="p-3 border-t border-gray-200 bg-white">
              <p className="text-xs text-gray-500 mb-2">Quick questions:</p>
              <div className="flex flex-wrap gap-2">
                {quickQuestions.slice(0, 3).map((question, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuickQuestion(question)}
                    className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full hover:bg-blue-100 transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-gray-200 bg-white rounded-b-2xl">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask me anything..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                disabled={isTyping}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isTyping}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isTyping ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChatbot;
