import React, { useEffect, useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [iframeHeight, setIframeHeight] = useState(1000);

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (typeof e.data !== 'string') return;
      if (e.data.search('cliniko-bookings-resize') > -1) {
        const height = Number(e.data.split(':')[1]);
        setIframeHeight(height);
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <h1 className="font-display font-bold text-4xl md:text-5xl text-white text-center mb-16">Get In Touch</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Sidebar Info */}
          <div className="space-y-8">
            <div className="bg-navy-900 border border-white/5 p-8 rounded-2xl">
              <h3 className="font-display font-bold text-xl text-white mb-6">Contact Info</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-sky-500/10 flex items-center justify-center text-sky-500 shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Visit Us</h4>
                    <p className="text-slate-400 text-sm">
                      100 Jarrett St,<br/>Leichhardt, NSW 2040<br/>
                      <span className="text-sky-500 text-xs mt-1 block">Inside Olympian Frontiers Gym</span>
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-sky-500/10 flex items-center justify-center text-sky-500 shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Call Us</h4>
                    <a href="tel:0434766414" className="text-slate-400 text-sm hover:text-white transition-colors">
                      0434 766 414
                    </a>
                  </div>
                </li>
                 <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-sky-500/10 flex items-center justify-center text-sky-500 shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Hours</h4>
                    <p className="text-slate-400 text-sm">
                      Mon-Sat: By Schedule<br/>
                      Sun: Closed
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-white/10 h-64 grayscale hover:grayscale-0 transition-all duration-500">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.4566710434685!2d151.1554!3d-33.8778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12e4b3c4a00001%3A0x0!2s100%20Jarrett%20St%2C%20Leichhardt%20NSW%202040!5e0!3m2!1sen!2sau!4v1600000000000!5m2!1sen!2sau" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy"
                title="Map"
              ></iframe>
            </div>
          </div>

          {/* Booking Frame */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <iframe 
                id='cliniko-7112282' 
                src='https://ninja-motion-therapies.au4.cliniko.com/bookings?embedded=true' 
                width='100%' 
                height={iframeHeight}
                style={{border: 0, display: 'block'}}
                title="Booking System"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;