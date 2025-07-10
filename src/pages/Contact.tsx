
import React, { useState } from 'react';
import { ArrowLeft, Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <div className="fixed top-6 left-6 z-50">
        <Button 
          variant="ghost" 
          className="text-white hover:bg-white/10 transition-all duration-300"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </Button>
      </div>

      <div className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get in <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Have questions, feedback, or need support? We'd love to hear from you. 
              Our team is here to help you build amazing websites with CodeFusion.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-white mb-2 block">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-purple-400"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-white mb-2 block">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-purple-400"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject" className="text-white mb-2 block">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-purple-400"
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-white mb-2 block">Message</Label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus:border-purple-400 focus:outline-none resize-none"
                    placeholder="Tell us more about your inquiry..."
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 transition-all duration-300 hover:scale-105"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-purple-400 mr-4" />
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <p className="text-white/70">support@codefusion.ai</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-purple-400 mr-4" />
                    <div>
                      <p className="text-white font-medium">Phone</p>
                      <p className="text-white/70">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 text-purple-400 mr-4" />
                    <div>
                      <p className="text-white font-medium">Address</p>
                      <p className="text-white/70">123 Tech Street, San Francisco, CA 94105</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Quick Support</h3>
                <p className="text-white/70 mb-4">
                  Need immediate help? Check out our knowledge base or start a live chat.
                </p>
                <div className="space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full border-white/20 text-white hover:bg-white/10"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Live Chat
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-white/20 text-white hover:bg-white/10"
                  >
                    Knowledge Base
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
