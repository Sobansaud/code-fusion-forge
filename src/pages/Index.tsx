
import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Code, Zap, Globe, Github, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Index = () => {
  const [prompt, setPrompt] = useState('');
  const [typewriterText, setTypewriterText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const placeholderTexts = [
    "Create a modern portfolio website with dark theme...",
    "Build a restaurant landing page with online ordering...",
    "Design an e-commerce store for handmade jewelry...",
    "Generate a blog platform with user authentication..."
  ];

  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);

  useEffect(() => {
    const text = placeholderTexts[currentPlaceholder];
    let currentIndex = 0;

    const typeInterval = setInterval(() => {
      if (currentIndex <= text.length) {
        setTypewriterText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentPlaceholder((prev) => (prev + 1) % placeholderTexts.length);
          setTypewriterText('');
        }, 2000);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, [currentPlaceholder]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      // Redirect to sign up page
      window.location.href = '/signup';
    }
  };

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Generate beautiful websites in seconds with AI"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Any Framework",
      description: "React, Vue, HTML, or any web technology"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Deploy Anywhere",
      description: "Push to GitHub or deploy to Vercel instantly"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              CodeFusion
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/about" className="text-white/80 hover:text-white font-semibold text-lg transition-all duration-300 hover:scale-105">
                About
              </a>
              <a href="/contact" className="text-white/80 hover:text-white font-semibold text-lg transition-all duration-300 hover:scale-105">
                Contact
              </a>
              <a href="/tutorials" className="text-white/80 hover:text-white font-semibold text-lg transition-all duration-300 hover:scale-105">
                Tutorials
              </a>
              <a href="/features" className="text-white/80 hover:text-white font-semibold text-lg transition-all duration-300 hover:scale-105">
                Features
              </a>
              <a href="/pricing" className="text-white/80 hover:text-white font-semibold text-lg transition-all duration-300 hover:scale-105">
                Pricing
              </a>
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                className="text-white hover:bg-white/10 font-semibold transition-all duration-300 hover:scale-105"
                onClick={() => window.location.href = '/login'}
              >
                Login
              </Button>
              <Button 
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                onClick={() => window.location.href = '/signup'}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* Main Heading */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Build Websites with
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent block mt-2">
                AI Magic
              </span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Transform your ideas into stunning websites instantly. Just describe what you want, 
              and our AI will generate beautiful, functional websites in any framework.
            </p>
          </div>

          {/* Prompt Input */}
          <div className="mb-16 max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="relative">
              <div className="relative group">
                <Input
                  type="text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder={typewriterText}
                  className="w-full h-16 text-lg px-6 pr-32 rounded-2xl border-2 border-white/20 bg-white/10 backdrop-blur-lg text-white placeholder-white/50 focus:border-purple-400 focus:bg-white/20 transition-all duration-300"
                />
                <Button
                  type="submit"
                  className="absolute right-2 top-2 h-12 px-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                >
                  Generate <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </form>
            <p className="text-white/60 mt-4 text-sm">
              ✨ No credit card required • Generate your first website for free
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
              >
                <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center space-x-6 text-white/60">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span>Trusted by 10,000+ developers</span>
            </div>
            <div className="w-px h-4 bg-white/20"></div>
            <div className="flex items-center space-x-2">
              <Github className="w-5 h-5" />
              <span>Open source friendly</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-lg border-t border-white/10 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-2">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                CodeFusion
              </div>
              <p className="text-white/70 max-w-md">
                The most powerful AI website builder. Create stunning websites in minutes, 
                not hours. Join thousands of developers who trust CodeFusion.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="/about" className="block text-white/70 hover:text-white transition-colors">About</a>
                <a href="/pricing" className="block text-white/70 hover:text-white transition-colors">Pricing</a>
                <a href="/tutorials" className="block text-white/70 hover:text-white transition-colors">Tutorials</a>
                <a href="/contact" className="block text-white/70 hover:text-white transition-colors">Contact</a>
              </div>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <div className="space-y-2">
                <a href="/help" className="block text-white/70 hover:text-white transition-colors">Help Center</a>
                <a href="/docs" className="block text-white/70 hover:text-white transition-colors">Documentation</a>
                <a href="/api" className="block text-white/70 hover:text-white transition-colors">API Reference</a>
                <a href="/status" className="block text-white/70 hover:text-white transition-colors">Status</a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-white/60 text-sm">
              © 2025 CodeFusion. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-white/60 hover:text-white text-sm transition-colors">Privacy</a>
              <a href="/terms" className="text-white/60 hover:text-white text-sm transition-colors">Terms</a>
              <a href="/cookies" className="text-white/60 hover:text-white text-sm transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
