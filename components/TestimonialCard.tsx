import React from 'react';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

interface Props {
  data: Testimonial;
}

const TestimonialCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/5 p-8 rounded-2xl relative group hover:bg-white/10 transition-colors duration-300">
      <Quote className="absolute top-8 left-8 text-sky-500/20 group-hover:text-sky-500/40 transition-colors w-12 h-12" />
      <div className="relative z-10">
        <p className="text-slate-300 leading-relaxed italic mb-6 min-h-[100px]">
          "{data.quote}"
        </p>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-500 to-sky-700 flex items-center justify-center text-white font-bold text-sm">
            {data.name.charAt(0)}
          </div>
          <div>
            <h4 className="text-white font-display font-semibold">{data.name}</h4>
            <p className="text-sky-500 text-xs uppercase tracking-wider">{data.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;