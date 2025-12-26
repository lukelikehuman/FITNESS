
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Heart, User, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { ChatMessage } from '../types';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: '親愛的妳好！我是反作用力空間的美力助手。關於訓練、體態雕塑或是場館資訊，隨時都可以問我喔！✨' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          {
            role: 'user',
            parts: [{ text: `妳現在是「反作用力訓練空間」的專業美力助手。請用優雅、溫柔、細膩且專業的台灣繁體中文口吻回答問題。
            公司背景：高品質、優雅、專注於女性與科學化訓練的精品場館。
            核心特色：反作用力原理、科學化雕塑、姿態矯正。
            回答規則：要像一個懂健身也懂美學的親切顧問，多給予正面鼓勵，適時使用可愛的 Emoji (✨, 🤍, 💪)。
            問題：${userMessage}` }]
          }
        ],
        config: {
          systemInstruction: "妳是一位精品健身房的優雅顧問，回話語氣要親切且具專業美學觀點。",
          temperature: 0.8,
        }
      });

      const aiResponse = response.text || '謝謝妳的詢問，現在連線稍微忙碌中，妳也可以直接點擊下方的聯絡資訊由教練直接回覆妳喔！🤍';
      setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    } catch (error) {
      console.error('Error calling Gemini:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: '稍微斷線了一下，歡迎妳直接加我們的官方 Line，我們會有專人溫暖回覆！' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-10 right-10 z-[100]">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full shadow-xl flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-stone-800 text-white rotate-90' : 'bg-rose-400 text-white hover:scale-110 shadow-rose-200'}`}
      >
        {isOpen ? <X /> : <MessageSquare />}
      </button>

      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] sm:w-[400px] h-[550px] bg-white border border-stone-100 rounded-[2.5rem] flex flex-col shadow-2xl animate-in slide-in-from-bottom-5 fade-in duration-500 overflow-hidden">
          <div className="bg-rose-400 p-6 flex items-center gap-4 text-white">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5" fill="white" />
            </div>
            <div>
              <div className="font-bold text-sm tracking-widest">Reaction Space</div>
              <div className="text-[10px] opacity-80 uppercase tracking-widest font-bold">美力隨身助手</div>
            </div>
          </div>

          <div className="flex-grow overflow-y-auto p-6 space-y-6 bg-[#FAF9F6]">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${msg.role === 'user' ? 'bg-stone-200' : 'bg-rose-400'}`}>
                    {msg.role === 'user' ? <User className="w-4 h-4 text-stone-500" /> : <Heart className="w-4 h-4 text-white" />}
                  </div>
                  <div className={`p-4 rounded-3xl text-sm leading-relaxed ${msg.role === 'user' ? 'bg-white text-stone-700 rounded-tr-none' : 'bg-rose-50 text-stone-700 rounded-tl-none shadow-sm'}`}>
                    {msg.content}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl flex items-center gap-2 shadow-sm">
                  <Loader2 className="w-4 h-4 text-rose-300 animate-spin" />
                  <span className="text-xs text-stone-400">正在輸入中...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-6 bg-white border-t border-stone-50">
            <div className="relative">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="跟我們聊聊妳的運動目標..."
                className="w-full bg-[#FAF9F6] border-none rounded-2xl px-6 py-4 pr-14 focus:ring-2 focus:ring-rose-200 transition-all text-sm text-stone-700"
              />
              <button 
                onClick={handleSendMessage}
                disabled={!input.trim() || isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-rose-400 text-white rounded-xl flex items-center justify-center hover:bg-rose-500 transition-all disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;
