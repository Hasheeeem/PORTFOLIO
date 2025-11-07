import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Github, Linkedin, Mail, MapPin } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // idle, sending, sent

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate sending
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setStatus('sent');
    setTimeout(() => {
      setStatus('idle');
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="relative py-32 bg-black text-white overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Massive Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-7xl md:text-[150px] lg:text-[200px] font-black leading-none mb-8">
            LET'S <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">TALK</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400">
            Have a project in mind? Let's build something amazing together.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold mb-3 text-gray-400">Your Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="w-full bg-white/5 border-2 border-white/10 rounded-2xl px-6 py-4 text-lg focus:border-purple-500 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-3 text-gray-400">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  className="w-full bg-white/5 border-2 border-white/10 rounded-2xl px-6 py-4 text-lg focus:border-purple-500 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-3 text-gray-400">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  rows={6}
                  className="w-full bg-white/5 border-2 border-white/10 rounded-2xl px-6 py-4 text-lg focus:border-purple-500 outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status !== 'idle'}
                className={`
                  w-full py-6 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 transition-all
                  ${status === 'idle' ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:scale-105' : ''}
                  ${status === 'sending' ? 'bg-gray-600 cursor-wait' : ''}
                  ${status === 'sent' ? 'bg-green-600' : ''}
                `}
              >
                {status === 'idle' && (
                  <>
                    Send Message <Send className="w-6 h-6" />
                  </>
                )}
                {status === 'sending' && 'Sending...'}
                {status === 'sent' && '✓ Message Sent!'}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Quick Contact */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">Get in Touch</h3>
              
              <a
                href="mailto:hello@hasheem.dev"
                className="flex items-center gap-4 p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                  <Mail className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Email</div>
                  <div className="font-bold text-lg group-hover:text-purple-400 transition-colors">
                    hello@hasheem.dev
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-6 bg-white/5 rounded-2xl">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Location</div>
                  <div className="font-bold text-lg">Global (Remote)</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-bold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {[
                  { icon: Github, href: 'https://github.com/Hasheeeem', label: 'GitHub' },
                  { icon: Linkedin, href: '#', label: 'LinkedIn' },
                  { icon: Mail, href: 'mailto:hello@hasheem.dev', label: 'Email' },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 bg-white/5 rounded-xl flex items-center justify-center hover:bg-white/10 hover:scale-110 transition-all"
                    title={social.label}
                  >
                    <social.icon className="w-7 h-7" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="p-8 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl border-2 border-green-500/30">
              <div className="flex items-center gap-3 mb-3">
                <span className="relative flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
                </span>
                <span className="font-bold text-xl">Available Now</span>
              </div>
              <p className="text-gray-400">
                Open for freelance projects and full-time opportunities
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};