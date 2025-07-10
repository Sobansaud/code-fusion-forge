
import React from 'react';
import { ArrowLeft, Zap, Code, Globe, Github, Smartphone, Palette, Database, Shield, Rocket, Users, BarChart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Features = () => {
  const mainFeatures = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast Generation",
      description: "Create complete websites in seconds with our advanced AI technology. No more waiting hours for development.",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Any Framework",
      description: "Generate websites in React, Vue, HTML, Angular, or any web technology. Complete flexibility for your projects.",
      color: "from-blue-400 to-purple-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "One-Click Deployment",
      description: "Deploy instantly to Vercel, Netlify, or push directly to your GitHub repository with seamless integration.",
      color: "from-green-400 to-teal-500"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Responsive",
      description: "Every generated website is fully responsive and optimized for all devices automatically.",
      color: "from-pink-400 to-red-500"
    }
  ];

  const additionalFeatures = [
    { icon: <Github className="w-6 h-6" />, title: "GitHub Integration", description: "Push code directly to your repositories" },
    { icon: <Palette className="w-6 h-6" />, title: "Custom Themes", description: "Beautiful, professional designs" },
    { icon: <Database className="w-6 h-6" />, title: "Database Ready", description: "Pre-configured database connections" },
    { icon: <Shield className="w-6 h-6" />, title: "Security First", description: "Built-in security best practices" },
    { icon: <Rocket className="w-6 h-6" />, title: "Fast Performance", description: "Optimized for speed and SEO" },
    { icon: <Users className="w-6 h-6" />, title: "Team Collaboration", description: "Work together on projects" },
    { icon: <BarChart className="w-6 h-6" />, title: "Analytics Ready", description: "Track your website performance" },
    { icon: <Code className="w-6 h-6" />, title: "Clean Code", description: "Production-ready, maintainable code" }
  ];

  const workflows = [
    {
      step: "1",
      title: "Describe Your Vision",
      description: "Simply tell us what kind of website you want to build in natural language."
    },
    {
      step: "2",
      title: "AI Generates Code",
      description: "Our advanced AI creates the complete website with all necessary files and components."
    },
    {
      step: "3",
      title: "Review & Customize",
      description: "Preview your website and make any adjustments using simple text commands."
    },
    {
      step: "4",
      title: "Deploy & Launch",
      description: "Deploy your website instantly or download the code to host anywhere."
    }
  ];

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
        <div className="max-w-7xl mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Powerful <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Features</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Everything you need to build modern, professional websites with AI. 
              From idea to deployment in minutes, not days.
            </p>
          </div>

          {/* Main Features */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {mainFeatures.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:scale-105 transition-all duration-300 group">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-white/70 text-lg leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* How It Works */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">How It Works</h2>
              <p className="text-white/70 text-lg">Four simple steps to your perfect website</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {workflows.map((workflow, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                    {workflow.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{workflow.title}</h3>
                  <p className="text-white/70">{workflow.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Features */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Everything You Need</h2>
              <p className="text-white/70 text-lg">Comprehensive features for professional web development</p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {additionalFeatures.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center">
                  <div className="text-purple-400 mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                  <p className="text-white/60 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white/5 backdrop-blur-lg rounded-2xl p-12 border border-white/10">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Something Amazing?</h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of developers who are already building faster with CodeFusion. 
              Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold text-lg px-8 py-3 transition-all duration-300 hover:scale-105"
                onClick={() => window.location.href = '/signup'}
              >
                Start Free Trial
              </Button>
              <Button 
                variant="outline" 
                className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-3"
                onClick={() => window.location.href = '/pricing'}
              >
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
