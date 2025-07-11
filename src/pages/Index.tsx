
import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Code, Zap, Globe, Github, Star, Shield, Rocket, Users, CheckCircle, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Index = () => {
  const [prompt, setPrompt] = useState('');
  const [typewriterText, setTypewriterText] = useState('');
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);

  const placeholderTexts = [
    "Create a modern portfolio website with dark theme...",
    "Build a restaurant landing page with online ordering...",
    "Design an e-commerce store for handmade jewelry...",
    "Generate a blog platform with user authentication...",
    "Create a SaaS landing page with pricing section..."
  ];

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
      window.location.href = '/signup';
    }
  };

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast Generation",
      description: "Generate beautiful, functional websites in under 30 seconds with our advanced AI engine"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Any Framework, Any Language", 
      description: "React, Vue, Next.js, HTML, CSS, JavaScript - we support all modern web technologies"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Deploy Anywhere",
      description: "Push to GitHub, deploy to Vercel, or download as ZIP - your choice, your control"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Production Ready",
      description: "Clean, optimized code with best practices, security, and performance built-in"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Advanced AI Models",
      description: "Powered by GPT-4 and Gemini for intelligent, context-aware code generation"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Collaboration",
      description: "Share projects, collaborate in real-time, and manage team access seamlessly"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Frontend Developer",
      content: "CodeFusion saved me weeks of development time. The generated code is clean and production-ready!",
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Startup Founder",
      content: "As a non-technical founder, CodeFusion helped me prototype my ideas incredibly fast.",
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "Full Stack Developer",
      content: "The best AI website builder I've used. The code quality is exceptional.",
      avatar: "ER"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      {/* Enhanced Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Enhanced Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                CodeFusion
              </div>
            </div>

            {/* Enhanced Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {['About', 'Features', 'Pricing', 'Tutorials', 'Contact'].map((link) => (
                <a 
                  key={link}
                  href={`/${link.toLowerCase()}`} 
                  className="relative text-white/80 hover:text-white font-semibold text-lg transition-all duration-300 hover:scale-105 group"
                >
                  {link}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            {/* Enhanced Auth Buttons */}
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                className="text-white hover:bg-white/10 font-semibold transition-all duration-300 hover:scale-105 border border-white/20 hover:border-white/40"
                onClick={() => window.location.href = '/login'}
              >
                Login
              </Button>
              <Button 
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25 border-0"
                onClick={() => window.location.href = '/signup'}
              >
                Start Building
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Main Heading with Enhanced Animation */}
          <div className="mb-12 animate-fade-in">
            <div className="inline-flex items-center bg-white/5 backdrop-blur-lg rounded-full px-6 py-3 mb-8 border border-white/10">
              <Sparkles className="w-5 h-5 text-purple-400 mr-2" />
              <span className="text-white/80 text-sm font-medium">Powered by Advanced AI Models</span>
            </div>
            
            <h1 className="text-7xl md:text-8xl font-bold text-white mb-8 leading-tight">
              Build Websites with
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent block mt-2 animate-gradient">
                AI Magic ✨
              </span>
            </h1>
            <p className="text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed mb-8">
              Transform your ideas into stunning, production-ready websites in seconds. 
              Just describe what you want, and our AI will generate beautiful, functional websites in any framework.
            </p>
            
            {/* Stats */}
            <div className="flex items-center justify-center space-x-12 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">50K+</div>
                <div className="text-white/60">Websites Created</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">15K+</div>
                <div className="text-white/60">Happy Developers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">99.9%</div>
                <div className="text-white/60">Uptime</div>
              </div>
            </div>
          </div>

          {/* Enhanced Prompt Input */}
          <div className="mb-20 max-w-5xl mx-auto">
            <form onSubmit={handleSubmit} className="relative">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative">
                  <Input
                    type="text"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder={typewriterText}
                    className="w-full h-20 text-xl px-8 pr-40 rounded-3xl border-2 border-white/20 bg-white/10 backdrop-blur-xl text-white placeholder-white/50 focus:border-purple-400 focus:bg-white/20 transition-all duration-300 shadow-2xl"
                  />
                  <Button
                    type="submit"
                    className="absolute right-3 top-3 h-14 px-8 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    <Play className="mr-2 w-5 h-5" />
                    Generate Website
                  </Button>
                </div>
              </div>
            </form>
            <div className="flex items-center justify-center mt-6 space-x-4">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <p className="text-white/60 text-lg">
                ✨ No credit card required • Generate your first 3 websites for free
              </p>
            </div>
          </div>

          {/* Enhanced Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-purple-500/50"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative">
                  <div className="text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-300 bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-white/70 text-lg leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-white mb-12">What Developers Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                  <p className="text-white/80 mb-4 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-white/60 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Social Proof */}
          <div className="flex items-center justify-center space-x-8 text-white/60 text-lg">
            <div className="flex items-center space-x-3">
              <Star className="w-6 h-6 text-yellow-400 fill-current" />
              <span>Trusted by 15,000+ developers worldwide</span>
            </div>
            <div className="w-px h-6 bg-white/20"></div>
            <div className="flex items-center space-x-3">
              <Github className="w-6 h-6" />
              <span>Open source friendly & GitHub integrated</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Footer */}
      <footer className="bg-black/40 backdrop-blur-xl border-t border-white/10 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            {/* Enhanced Brand Section */}
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Code className="w-7 h-7 text-white" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  CodeFusion
                </div>
              </div>
              <p className="text-white/70 text-lg leading-relaxed max-w-md mb-6">
                The most powerful AI website builder in the market. Create stunning, 
                production-ready websites in minutes, not hours. Join thousands of developers 
                who trust CodeFusion for their web development needs.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <Github className="w-5 h-5 text-white" />
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <Star className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Product</h3>
              <div className="space-y-3">
                {['Features', 'Pricing', 'Templates', 'Integrations', 'API'].map(link => (
                  <a key={link} href={`/${link.toLowerCase()}`} className="block text-white/70 hover:text-white transition-colors text-lg">
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Resources</h3>
              <div className="space-y-3">
                {['Documentation', 'Tutorials', 'Blog', 'Community', 'Changelog'].map(link => (
                  <a key={link} href={`/${link.toLowerCase()}`} className="block text-white/70 hover:text-white transition-colors text-lg">
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Support</h3>
              <div className="space-y-3">
                {['Help Center', 'Contact', 'Status', 'Privacy', 'Terms'].map(link => (
                  <a key={link} href={`/${link.toLowerCase()}`} className="block text-white/70 hover:text-white transition-colors text-lg">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-white/60 text-lg">
              © 2025 CodeFusion. All rights reserved. Built with ❤️ for developers.
            </p>
            <div className="flex items-center space-x-8 mt-4 md:mt-0">
              <a href="/privacy" className="text-white/60 hover:text-white text-lg transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-white/60 hover:text-white text-lg transition-colors">Terms of Service</a>
              <a href="/cookies" className="text-white/60 hover:text-white text-lg transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
