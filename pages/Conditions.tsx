import React, { useState } from 'react';
import { ConditionCategory } from '../types';

const Conditions: React.FC = () => {
  const [activeTab, setActiveTab] = useState('upper');

  const categories: ConditionCategory[] = [
    {
      id: 'upper',
      title: 'Upper Body',
      items: [
        { title: 'Shoulder Pain', symptoms: ['Pain reaching overhead', 'Clicking/Popping'], treatment: 'Rotator cuff release and mechanics restoration' },
        { title: 'Neck Tension', symptoms: ['Headaches', 'Stiffness', 'Radiating Pain'], treatment: 'Trigger point reduction and posture correction' },
        { title: 'Tennis Elbow', symptoms: ['Outer elbow pain', 'Weak grip'], treatment: 'Tendon inflammation reduction and scar tissue breakdown' },
      ]
    },
    {
      id: 'lower',
      title: 'Lower Body',
      items: [
        { title: 'Hip Mobility', symptoms: ['Limited flexion', 'Squatting difficulty'], treatment: 'Hip flexor/glute release and movement correction' },
        { title: 'Knee Pain', symptoms: ['Patellar tracking issues', 'Swelling'], treatment: 'Quad/Hamstring balance and mechanical support' },
        { title: 'Plantar Fasciitis', symptoms: ['Heel pain', 'Morning stiffness'], treatment: 'Calf release and plantar fascia therapy' },
      ]
    },
    {
      id: 'core',
      title: 'Spine & Core',
      items: [
        { title: 'Lower Back Pain', symptoms: ['Dull ache', 'Morning stiffness'], treatment: 'Paraspinal release and core stability work' },
        { title: 'Sciatica', symptoms: ['Radiating leg pain', 'Numbness'], treatment: 'Piriformis treatment and nerve decompression' },
        { title: 'Postural Dysfunction', symptoms: ['Rounded shoulders', 'Forward head'], treatment: 'Corrective activation and ergonomic advice' },
      ]
    },
     {
      id: 'sports',
      title: 'Sports Specific',
      items: [
        { title: 'Running Injuries', symptoms: ['Shin splints', 'Runners knee'], treatment: 'Gait analysis and progressive loading' },
        { title: 'Weightlifting', symptoms: ['Muscle strains', 'Joint stress'], treatment: 'Deep tissue recovery and mobility for lifting' },
        { title: 'CrossFit', symptoms: ['Systemic fatigue', 'Overuse'], treatment: 'Comprehensive recovery protocols' },
      ]
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="font-display font-bold text-4xl text-white mb-6">Conditions We Treat</h1>
          <p className="text-slate-400">From athletes to office workers, we treat the source of your pain.</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeTab === cat.id 
                  ? 'bg-sky-600 text-white shadow-lg shadow-sky-600/20' 
                  : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {categories.find(c => c.id === activeTab)?.items.map((item, idx) => (
            <div key={idx} className="bg-navy-900 border border-white/5 p-6 rounded-2xl hover:border-sky-500/30 transition-colors">
              <h3 className="text-xl font-display font-bold text-white mb-4">{item.title}</h3>
              
              <div className="mb-4">
                <span className="text-xs uppercase text-slate-500 font-bold tracking-wider">Symptoms</span>
                <ul className="mt-2 space-y-1">
                  {item.symptoms.map((s, i) => (
                    <li key={i} className="text-slate-300 text-sm flex items-center gap-2">
                      <span className="w-1 h-1 bg-sky-500 rounded-full"></span> {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="text-xs uppercase text-slate-500 font-bold tracking-wider">Our Approach</span>
                <p className="mt-2 text-sky-400 text-sm">{item.treatment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Conditions;