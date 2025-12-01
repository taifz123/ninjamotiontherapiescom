import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Zap, ShieldCheck, HeartPulse } from 'lucide-react';
import TestimonialCard from '../components/TestimonialCard';
import { Testimonial } from '../types';

const Home: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Hayley Sprod",
      role: "Athlete",
      quote: "As an athlete, I’ve always been on the hunt for someone who could take my recovery to the next level... Yuhan has given me more relief in 20 minutes than anyone else has managed in an hour."
    },
    {
      id: 2,
      name: "Alex Mijalkovic",
      role: "Client",
      quote: "I have been seeing Yuhan for just 18 months... Highly recommended to those seeking support for training."
    },
    {
      id: 3,
      name: "Rose Marco",
      role: "Client",
      quote: "Yuhan is amazing! I went in after seeing several physios... he was super attentive and walked me through what he was doing and why."
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="images/image6.jpeg" 
            alt="Recovery in action" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/70 to-navy-950/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </span>
              Accepting New Patients
            </div>
            <h1 className="font-display font-bold text-5xl md:text-7xl text-white leading-tight mb-6">
              Engineering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-600">
                Recovery
              </span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 max-w-xl leading-relaxed">
              Experience elite-level sports and remedial massage therapy. Located inside Olympian Frontiers Gym, we combine technical expertise with deep physiological understanding to keep you moving at your peak.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="bg-sky-600 hover:bg-sky-500 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-sky-600/25 flex items-center justify-center gap-2"
              >
                Book Consultation
                <ArrowRight size={18} />
              </Link>
              <Link 
                to="/services" 
                className="bg-white/5 hover:bg-white/10 backdrop-blur border border-white/10 text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Grid */}
      <section className="py-20 bg-navy-950 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-32 relative z-20">
            {[
              { 
                icon: Activity, 
                title: "Sports Massage", 
                desc: "Prevent injuries and enhance performance with targeted deep tissue work." 
              },
              { 
                icon: HeartPulse, 
                title: "Remedial Therapy", 
                desc: "Treat musculoskeletal issues and chronic pain with evidence-based techniques." 
              },
              { 
                icon: Zap, 
                title: "Dry Needling", 
                desc: "Advanced techniques for instant relief from muscle stiffness and trigger points." 
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-navy-900/50 backdrop-blur-md border border-white/5 p-8 rounded-2xl hover:border-sky-500/30 transition-all duration-300 group">
                <div className="w-12 h-12 bg-sky-500/10 rounded-lg flex items-center justify-center text-sky-500 mb-6 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-sky-500/20 rounded-full blur-3xl"></div>
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img src="images/image8.jpeg" alt="Yuhan Therapy" className="w-full h-auto transform hover:scale-105 transition-transform duration-700" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-950 to-transparent p-8">
                  <p className="font-display font-bold text-white text-xl">Yuhan Harris</p>
                  <p className="text-sky-400 text-sm uppercase tracking-wide">Principal Therapist</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-sky-500 font-bold uppercase tracking-widest text-sm mb-4">About Us</h2>
              <h3 className="font-display font-bold text-3xl md:text-4xl text-white mb-6">
                Technical Expertise meets <br /> Genuine Care
              </h3>
              <p className="text-slate-400 mb-6 text-lg leading-relaxed">
                Yuhan holds a Diploma of Remedial Massage and brings extensive experience in sports rehabilitation. 
              </p>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Located inside the professional environment of Olympian Frontiers Gym, we bridge the gap between relaxation and clinical rehabilitation. Whether you're a competitive athlete or suffering from office-related posture issues, we design a recovery plan specifically for you.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-sky-500" />
                  <span className="text-slate-200 font-medium">HiCAPS Available</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-sky-500" />
                  <span className="text-slate-200 font-medium">Diploma Qualified</span>
                </div>
              </div>
              <Link to="/about" className="text-white border-b border-sky-500 pb-1 hover:text-sky-400 transition-colors inline-flex items-center gap-2">
                Meet Yuhan <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities / Bento Grid */}
      <section className="py-20 bg-navy-900/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl text-white mb-4">Our Environment</h2>
            <p className="text-slate-400">State-of-the-art facilities located within Olympian Frontiers Gym</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[600px]">
             {/* Large Main Image */}
            <div className="md:col-span-2 md:row-span-2 relative rounded-2xl overflow-hidden group">
               <img src="images/image9.jpeg" alt="Treatment Room" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
               <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent flex items-end p-6">
                 <h4 className="text-white font-bold text-lg">Private Treatment Suites</h4>
               </div>
            </div>
            
            {/* Secondary Images */}
            <div className="md:col-span-1 md:row-span-1 relative rounded-2xl overflow-hidden group">
               <img src="images/image2.jpeg" alt="Equipment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="md:col-span-1 md:row-span-1 relative rounded-2xl overflow-hidden group">
               <img src="images/image3.jpeg" alt="Consultation" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
             <div className="md:col-span-2 md:row-span-1 relative rounded-2xl overflow-hidden group">
               <img src="images/image7.jpeg" alt="Gym Floor Access" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
               <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent flex items-end p-6">
                 <h4 className="text-white font-bold text-lg">Integrated Gym Access</h4>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="font-display font-bold text-3xl text-white mb-12 text-center">Client Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(t => (
              <TestimonialCard key={t.id} data={t} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-sky-600 to-sky-800 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-navy-950/20 rounded-full blur-3xl"></div>
            
            <h2 className="relative z-10 font-display font-bold text-3xl md:text-5xl text-white mb-6">
              Ready to feel better?
            </h2>
            <p className="relative z-10 text-sky-100 text-lg mb-8 max-w-2xl mx-auto">
              Don't let pain hold you back. Book your assessment with Yuhan today and start your journey to recovery.
            </p>
            <Link 
              to="/contact" 
              className="relative z-10 inline-block bg-white text-sky-700 px-10 py-4 rounded-xl font-bold hover:bg-sky-50 transition-colors shadow-lg"
            >
              Book Your Appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;