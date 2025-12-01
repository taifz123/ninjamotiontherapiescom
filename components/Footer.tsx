import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img src="images/image1.png" alt="Logo" className="h-8 w-auto" />
              <span className="font-display font-bold text-lg text-white">
                NINJA <span className="text-sky-500">MOTION</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Professional rehabilitation and performance recovery. Engineering better movement for athletes and everyday warriors.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/ninjamotiontherapies_" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-sky-600 transition-all"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-white mb-6">Explore</h4>
            <ul className="space-y-3">
              {[
                { name: 'About Yuhan', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Conditions', path: '/conditions' },
                { name: 'Education', path: '/education' },
              ].map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-slate-400 hover:text-sky-400 text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-white mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-sky-500 mt-1 shrink-0" />
                <span className="text-slate-400 text-sm">
                  100 Jarrett St, Leichhardt,<br />NSW, 2040<br />(Olympian Frontiers Gym)
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-sky-500 shrink-0" />
                <a href="tel:0434766414" className="text-slate-400 hover:text-white text-sm transition-colors">
                  0434 766 414
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-sky-500 shrink-0" />
                <a href="mailto:yuhanharrisrmt@gmail.com" className="text-slate-400 hover:text-white text-sm transition-colors">
                  yuhanharrisrmt@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display font-bold text-white mb-6">Hours</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex justify-between">
                <span>Mon - Fri</span>
                <span className="text-white">By Schedule</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-white">By Schedule</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-sky-500">Closed</span>
              </li>
            </ul>
            <Link 
              to="/contact" 
              className="inline-block mt-6 text-sky-500 font-semibold text-sm hover:text-sky-400"
            >
              View Available Times &rarr;
            </Link>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Ninja Motion Therapies. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-300 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;