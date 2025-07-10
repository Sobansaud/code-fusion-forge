
import React from 'react';
import { ArrowLeft, Sparkles, Users, Target, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const stats = [
    { number: "10,000+", label: "Websites Created" },
    { number: "5,000+", label: "Happy Developers" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" }
  ];

  const team = [
    {
      name: "Alex Rodriguez",
      role: "Founder & CEO",
      description: "Former Google engineer with 10+ years in AI and web development"
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      description: "AI researcher and full-stack developer, MIT graduate"
    },
    {
      name: "Michael Torres",
      role: "Lead Designer",
      description: "Award-winning UI/UX designer with focus on developer tools"
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
        <div className="max-w-6xl mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">CodeFusion</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              We're revolutionizing web development by making it accessible to everyone. 
              Our AI-powered platform transforms ideas into beautiful, functional websites in seconds.
            </p>
          </div>

          {/* Mission Section */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-purple-400 mr-3" />
                <h2 className="text-3xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                We believe that creating websites should be as simple as describing what you want. 
                That's why we built CodeFusion - to democratize web development and empower anyone 
                to bring their digital ideas to life.
              </p>
              <p className="text-white/70 text-lg leading-relaxed">
                From entrepreneurs launching their first business to developers prototyping new ideas, 
                CodeFusion makes web development faster, easier, and more accessible than ever before.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <Sparkles className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-4">Why CodeFusion?</h3>
              <ul className="space-y-3 text-white/70">
                <li>• Generate websites in any framework or technology</li>
                <li>• Deploy instantly to GitHub or hosting platforms</li>
                <li>• Edit and refine with natural language commands</li>
                <li>• Professional quality output every time</li>
                <li>• Better pricing than competitors</li>
              </ul>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-white/70 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Team Section */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-purple-400 mr-3" />
              <h2 className="text-3xl font-bold text-white">Meet Our Team</h2>
            </div>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              We're a passionate team of engineers, designers, and innovators 
              dedicated to making web development accessible to everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {team.map((member, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-purple-400 font-medium mb-3">{member.role}</p>
                <p className="text-white/70 text-sm">{member.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white/5 backdrop-blur-lg rounded-2xl p-12 border border-white/10">
            <Award className="w-12 h-12 text-purple-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Something Amazing?</h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of developers who trust CodeFusion to bring their ideas to life. 
              Start building your next project today.
            </p>
            <Button 
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold text-lg px-8 py-3 transition-all duration-300 hover:scale-105"
              onClick={() => window.location.href = '/signup'}
            >
              Get Started Free
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
