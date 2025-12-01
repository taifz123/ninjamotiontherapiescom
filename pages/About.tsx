import React from 'react';
import { Award, BookOpen, UserCheck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">Meet Yuhan</h1>
          <p className="text-slate-400 text-lg">
            Dedicated to engineering your recovery through science, skill, and care.
          </p>
        </div>

        {/* Content Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Text */}
          <div className="space-y-8">
            <div className="bg-white/5 border border-white/5 p-8 rounded-2xl">
              <p className="text-slate-300 leading-relaxed mb-6">
                Yuhan is a dedicated and experienced massage therapist specializing in sports and remedial massage therapy. With a strong passion for helping clients achieve optimal health and wellness, Yuhan brings both technical expertise and genuine care to every treatment session.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Located inside <strong className="text-white">Olympian Frontiers Gym</strong>, Yuhan works alongside fitness professionals to provide comprehensive care for athletes, fitness enthusiasts, and individuals seeking relief from musculoskeletal conditions.
              </p>
            </div>

            {/* Stats/Philosophy */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-navy-900 p-6 rounded-xl border border-white/5 text-center">
                <div className="text-sky-500 mx-auto mb-4 w-10 h-10 flex items-center justify-center bg-sky-500/10 rounded-full">
                   <UserCheck size={20} />
                </div>
                <h3 className="text-white font-bold mb-2">Patient Centered</h3>
                <p className="text-xs text-slate-400">Tailored to your specific anatomy and goals.</p>
              </div>
              <div className="bg-navy-900 p-6 rounded-xl border border-white/5 text-center">
                <div className="text-sky-500 mx-auto mb-4 w-10 h-10 flex items-center justify-center bg-sky-500/10 rounded-full">
                   <BookOpen size={20} />
                </div>
                <h3 className="text-white font-bold mb-2">Evidence Based</h3>
                <p className="text-xs text-slate-400">Techniques backed by modern research.</p>
              </div>
              <div className="bg-navy-900 p-6 rounded-xl border border-white/5 text-center">
                <div className="text-sky-500 mx-auto mb-4 w-10 h-10 flex items-center justify-center bg-sky-500/10 rounded-full">
                   <Award size={20} />
                </div>
                <h3 className="text-white font-bold mb-2">Results Focused</h3>
                <p className="text-xs text-slate-400">Measurable improvements in range & pain.</p>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="font-display font-bold text-2xl text-white mb-6">Qualifications & Training</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                  <Award className="text-sky-500 shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold">Diploma of Remedial Massage</h4>
                    <p className="text-slate-500 text-sm">Certified Professional Qualification</p>
                  </div>
                </li>
                <li className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                  <Award className="text-sky-500 shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold">Advanced Techniques</h4>
                    <p className="text-slate-500 text-sm">Dry Needling & Joint Mobilisations</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative sticky top-32">
            <div className="absolute inset-0 bg-sky-500 rounded-2xl transform rotate-3 opacity-20"></div>
            <img 
              src="images/image8.jpeg" 
              alt="Yuhan Portrait" 
              className="relative z-10 rounded-2xl shadow-2xl w-full border border-white/10"
            />
            
            <div className="mt-8 grid grid-cols-2 gap-4">
               <img src="images/image4.jpeg" className="rounded-xl h-40 w-full object-cover opacity-80 hover:opacity-100 transition-opacity" alt="Detail" />
               <img src="images/image5.jpeg" className="rounded-xl h-40 w-full object-cover opacity-80 hover:opacity-100 transition-opacity" alt="Detail" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;