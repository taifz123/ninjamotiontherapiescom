import React from 'react';
import { Activity, Zap, Layers, Bone, Move } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const services = [
    {
      icon: Activity,
      title: "Sports Massage",
      desc: "Designed to help athletes prevent injuries, enhance performance, and recover faster. Focuses on areas overused by repetitive movements.",
      features: ["Deep Tissue", "Friction", "Stretching", "Event Prep"]
    },
    {
      icon: Layers,
      title: "Remedial Massage",
      desc: "Systematic assessment and treatment of muscles, tendons, ligaments to assist in rehabilitation, pain management, and injury prevention.",
      features: ["Pain Relief", "Mobility", "Chronic Pain", "Postural"]
    },
    {
      icon: Zap,
      title: "Dry Needling",
      desc: "Modern technique using fine sterile needles to treat trigger points, relieve pain, and promote faster healing.",
      features: ["Trigger Point", "Neuromodulation", "Blood Flow", "Relaxation"]
    },
    {
      icon: Move,
      title: "Joint Mobilisation",
      desc: "Manual therapy technique restoring optimal joint function and range of motion through controlled movement.",
      features: ["Reduced Stiffness", "Decompression", "Spinal Health", "Better Gait"]
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">Our Services</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We don't just rub muscles. We engineer recovery using a toolkit of advanced manual therapy techniques tailored to your body's needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <div key={i} className="group bg-navy-900 border border-white/5 p-8 rounded-3xl hover:border-sky-500/50 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity text-sky-500">
                <s.icon size={120} />
              </div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-sky-500/10 rounded-2xl flex items-center justify-center text-sky-500 mb-6 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                  <s.icon size={28} />
                </div>
                
                <h3 className="font-display font-bold text-2xl text-white mb-4">{s.title}</h3>
                <p className="text-slate-400 mb-8 leading-relaxed min-h-[80px]">
                  {s.desc}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  {s.features.map((f, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-slate-300">
                      <div className="w-1.5 h-1.5 bg-sky-500 rounded-full"></div>
                      {f}
                    </div>
                  ))}
                </div>

                <Link 
                  to="/contact" 
                  className="inline-block w-full text-center bg-white/5 hover:bg-white/10 border border-white/10 text-white py-3 rounded-xl font-semibold transition-colors"
                >
                  Book {s.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;