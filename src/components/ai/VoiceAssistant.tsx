import { useState, useEffect } from 'react';
import {
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Loader2,
  Languages,
  X,
  Check
} from 'lucide-react';

const VoiceAssistant = () => {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [response, setResponse] = useState('');
  const [language, setLanguage] = useState<'en' | 'vi'>('en');
  const [isProcessing, setIsProcessing] = useState(false);
  const [showPanel, setShowPanel] = useState(false);

  // Simulated responses based on voice input
  const getVoiceResponse = (input: string, lang: 'en' | 'vi'): string => {
    const lowerInput = input.toLowerCase();

    if (lang === 'vi') {
      if (lowerInput.includes('visa') || lowerInput.includes('thị thực')) {
        return 'Bạn có thể xin thị thực điện tử qua ứng dụng này. Thời gian xử lý từ 3 đến 5 ngày làm việc.';
      } else if (lowerInput.includes('địa điểm') || lowerInput.includes('du lịch')) {
        return 'Vịnh Hạ Long, Phố cổ Hội An, và Văn Miếu Quốc Tử Giám là những điểm đến hàng đầu. Bạn muốn đặt vé tham quan không?';
      } else if (lowerInput.includes('khẩn cấp')) {
        return 'Số điện thoại khẩn cấp: Cảnh sát 113, Cấp cứu 115, Cứu hỏa 114. Bạn có cần hỗ trợ gì không?';
      }
      return 'Xin lỗi, tôi chưa hiểu câu hỏi. Bạn có thể hỏi về visa, địa điểm du lịch, hoặc dịch vụ khẩn cấp.';
    }

    // English responses
    if (lowerInput.includes('visa')) {
      return 'You can apply for an e-Visa through this app. Processing takes 3 to 5 business days.';
    } else if (lowerInput.includes('attraction') || lowerInput.includes('place')) {
      return 'Halong Bay, Hoi An Ancient Town, and Temple of Literature are top destinations. Would you like to book tickets?';
    } else if (lowerInput.includes('emergency') || lowerInput.includes('help')) {
      return 'Emergency numbers: Police 113, Ambulance 115, Fire 114. Do you need immediate assistance?';
    } else if (lowerInput.includes('weather')) {
      return 'The weather in Hanoi today is sunny with temperatures around 28 degrees Celsius.';
    } else if (lowerInput.includes('restaurant') || lowerInput.includes('food')) {
      return 'I can help you find nearby restaurants. What type of cuisine are you looking for?';
    }

    return 'I didn\'t quite catch that. You can ask about visas, tourist attractions, emergencies, or local services.';
  };

  const startListening = () => {
    setIsListening(true);
    setShowPanel(true);

    // Simulate voice recognition
    setTimeout(() => {
      const sampleQuestions = language === 'en'
        ? [
            "How do I apply for a visa?",
            "What are the top tourist attractions?",
            "What's the emergency number?",
            "Tell me about the weather",
            "Find me a restaurant"
          ]
        : [
            "Làm thế nào để xin visa?",
            "Địa điểm du lịch nổi tiếng nào?",
            "Số điện thoại khẩn cấp là gì?",
            "Thời tiết hôm nay thế nào?",
            "Tìm nhà hàng gần đây"
          ];

      const randomQuestion = sampleQuestions[Math.floor(Math.random() * sampleQuestions.length)];
      setTranscript(randomQuestion);
      setIsListening(false);
      setIsProcessing(true);

      // Process response
      setTimeout(() => {
        const aiResponse = getVoiceResponse(randomQuestion, language);
        setResponse(aiResponse);
        setIsProcessing(false);
        setIsSpeaking(true);

        // Simulate speech duration
        setTimeout(() => {
          setIsSpeaking(false);
        }, 3000);
      }, 1000);
    }, 2000);
  };

  const stopListening = () => {
    setIsListening(false);
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'vi' : 'en');
    setTranscript('');
    setResponse('');
  };

  const clearConversation = () => {
    setTranscript('');
    setResponse('');
    setShowPanel(false);
  };

  return (
    <div className="fixed bottom-24 right-6 z-40">
      {/* Voice Panel */}
      {showPanel && (
        <div className="bg-white rounded-2xl shadow-2xl p-6 mb-4 w-96 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="bg-gradient-to-br from-green-400 to-blue-500 p-2 rounded-full mr-3">
                <Volume2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Voice Assistant</h3>
                <p className="text-xs text-gray-500">
                  {language === 'en' ? 'English' : 'Tiếng Việt'}
                </p>
              </div>
            </div>
            <button
              onClick={clearConversation}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="w-full mb-4 flex items-center justify-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
          >
            <Languages className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">
              {language === 'en' ? 'Switch to Tiếng Việt' : 'Switch to English'}
            </span>
          </button>

          {/* Transcript */}
          {transcript && (
            <div className="mb-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-start">
                <Mic className="w-4 h-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-xs text-blue-600 font-semibold mb-1">You said:</p>
                  <p className="text-sm text-gray-800">{transcript}</p>
                </div>
                <Check className="w-4 h-4 text-green-600 ml-2" />
              </div>
            </div>
          )}

          {/* Processing */}
          {isProcessing && (
            <div className="mb-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-center">
                <Loader2 className="w-4 h-4 text-gray-600 animate-spin mr-2" />
                <p className="text-sm text-gray-600">Processing...</p>
              </div>
            </div>
          )}

          {/* Response */}
          {response && !isProcessing && (
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-start">
                {isSpeaking ? (
                  <Volume2 className="w-4 h-4 text-green-600 mt-1 mr-2 flex-shrink-0 animate-pulse" />
                ) : (
                  <VolumeX className="w-4 h-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                )}
                <div className="flex-1">
                  <p className="text-xs text-green-600 font-semibold mb-1">
                    {isSpeaking ? 'Speaking...' : 'Response:'}
                  </p>
                  <p className="text-sm text-gray-800">{response}</p>
                </div>
              </div>
            </div>
          )}

          {/* Status */}
          {!transcript && !isProcessing && !response && (
            <div className="text-center py-8">
              <div className={`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center ${
                isListening
                  ? 'bg-red-100 animate-pulse'
                  : 'bg-gray-100'
              }`}>
                {isListening ? (
                  <Mic className="w-10 h-10 text-red-600" />
                ) : (
                  <MicOff className="w-10 h-10 text-gray-400" />
                )}
              </div>
              <p className="text-sm text-gray-600">
                {isListening
                  ? (language === 'en' ? 'Listening...' : 'Đang nghe...')
                  : (language === 'en' ? 'Tap microphone to speak' : 'Nhấn micro để nói')
                }
              </p>
            </div>
          )}
        </div>
      )}

      {/* Voice Button */}
      <button
        onClick={isListening ? stopListening : startListening}
        disabled={isProcessing}
        className={`w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed ${
          isListening
            ? 'bg-red-500 hover:bg-red-600 animate-pulse'
            : 'bg-gradient-to-r from-green-500 to-blue-500 hover:shadow-3xl'
        }`}
        aria-label="Voice Assistant"
      >
        {isProcessing ? (
          <Loader2 className="w-8 h-8 text-white animate-spin" />
        ) : isListening ? (
          <Mic className="w-8 h-8 text-white" />
        ) : (
          <MicOff className="w-8 h-8 text-white" />
        )}
      </button>

      {/* Ripple effect when listening */}
      {isListening && (
        <>
          <div className="absolute inset-0 rounded-full bg-red-500 opacity-20 animate-ping"></div>
          <div className="absolute inset-0 rounded-full bg-red-500 opacity-20 animate-ping" style={{ animationDelay: '0.5s' }}></div>
        </>
      )}
    </div>
  );
};

export default VoiceAssistant;
