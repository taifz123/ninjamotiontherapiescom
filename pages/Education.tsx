import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen } from 'lucide-react';

const Education: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const articles = [
    {
      title: "Why Sports Massage?",
      content: "Sports massage helps athletes prevent injuries and enhance performance. It improves flexibility, reduces injury risk by 30%, and lowers cortisol levels. Key techniques include deep tissue, friction, and stretching."
    },
    {
      title: "Understanding Dry Needling",
      content: "Dry needling targets muscle trigger points with fine, sterile needles. It creates a 'twitch' response that releases tightness, increases blood flow, and alters pain signals. It is not acupuncture; it is based on Western anatomy."
    },
    {
      title: "Benefits of Joint Mobilisation",
      content: "This manual therapy restores joint motion through graded oscillations. It helps reduce stiffness in the spine, shoulder, and hips, improving synovial fluid production and joint nutrition."
    },
    {
      title: "Injury Prevention 101",
      content: "Prevention is better than cure. Consistent massage, proper warm-ups, strength training, and listening to early warning signs (like soreness lasting >48 hours) are crucial for longevity."
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
         <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-sky-500/10 rounded-full mb-6 text-sky-500">
            <BookOpen size={32} />
          </div>
          <h1 className="font-display font-bold text-4xl text-white mb-6">Education Hub</h1>
          <p className="text-slate-400">Knowledge is power. Understand the science behind your recovery.</p>
        </div>

        <div className="space-y-4">
          {articles.map((article, index) => (
            <div 
              key={index} 
              className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                openIndex === index 
                  ? 'bg-navy-900 border-sky-500/50 shadow-lg shadow-sky-900/20' 
                  : 'bg-navy-950 border-white/10 hover:border-white/20'
              }`}
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`font-display font-bold text-lg ${openIndex === index ? 'text-sky-400' : 'text-white'}`}>
                  {article.title}
                </span>
                {openIndex === index ? <ChevronUp className="text-sky-500" /> : <ChevronDown className="text-slate-500" />}
              </button>
              
              <div className={`px-6 pb-6 text-slate-300 leading-relaxed transition-all duration-300 ${
                openIndex === index ? 'block opacity-100' : 'hidden opacity-0'
              }`}>
                {article.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;