
import React from 'react';
import { ArrowLeft, Play, Clock, User, BookOpen, Video, Code, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Tutorials = () => {
  const tutorials = [
    {
      id: 1,
      title: "Getting Started with CodeFusion",
      description: "Learn the basics of creating your first website with AI",
      duration: "5 min",
      level: "Beginner",
      thumbnail: "bg-gradient-to-br from-blue-500 to-purple-600",
      icon: <BookOpen className="w-8 h-8" />
    },
    {
      id: 2,
      title: "Advanced Prompting Techniques",
      description: "Master the art of writing effective prompts for better results",
      duration: "12 min",
      level: "Intermediate",
      thumbnail: "bg-gradient-to-br from-green-500 to-teal-600",
      icon: <Code className="w-8 h-8" />
    },
    {
      id: 3,
      title: "Customizing Generated Websites",
      description: "How to edit and refine your AI-generated websites",
      duration: "8 min",
      level: "Beginner",
      thumbnail: "bg-gradient-to-br from-orange-500 to-red-600",
      icon: <Zap className="w-8 h-8" />
    },
    {
      id: 4,
      title: "Deploying Your Website",
      description: "Push your website to GitHub and deploy to production",
      duration: "10 min",
      level: "Intermediate",
      thumbnail: "bg-gradient-to-br from-pink-500 to-purple-600",
      icon: <Video className="w-8 h-8" />
    },
    {
      id: 5,
      title: "Building E-commerce Sites",
      description: "Create online stores with payment integration",
      duration: "15 min",
      level: "Advanced",
      thumbnail: "bg-gradient-to-br from-indigo-500 to-blue-600",
      icon: <BookOpen className="w-8 h-8" />
    },
    {
      id: 6,
      title: "SEO Optimization Tips",
      description: "Make your generated websites search engine friendly",
      duration: "7 min",
      level: "Intermediate",
      thumbnail: "bg-gradient-to-br from-teal-500 to-green-600",
      icon: <Code className="w-8 h-8" />
    }
  ];

  const categories = [
    { name: "Getting Started", count: 8 },
    { name: "Advanced Features", count: 12 },
    { name: "Deployment", count: 6 },
    { name: "Best Practices", count: 10 }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-500/20 text-green-400';
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-400';
      case 'Advanced': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
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
        <div className="max-w-7xl mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Learn <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">CodeFusion</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Master the art of AI-powered web development with our comprehensive tutorials. 
              From basics to advanced techniques, we've got you covered.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Categories Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 sticky top-24">
                <h3 className="text-xl font-bold text-white mb-4">Categories</h3>
                <div className="space-y-3">
                  {categories.map((category, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-white/10 cursor-pointer transition-colors">
                      <span className="text-white/80">{category.name}</span>
                      <span className="text-purple-400 text-sm">{category.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tutorials Grid */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 gap-6">
                {tutorials.map((tutorial) => (
                  <div key={tutorial.id} className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden hover:scale-105 transition-all duration-300 group cursor-pointer">
                    {/* Thumbnail */}
                    <div className={`h-48 ${tutorial.thumbnail} relative flex items-center justify-center`}>
                      <div className="text-white/80 group-hover:text-white transition-colors">
                        {tutorial.icon}
                      </div>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                      <div className="absolute top-4 right-4">
                        <div className="bg-black/50 backdrop-blur-sm rounded-full p-3 group-hover:scale-110 transition-transform">
                          <Play className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(tutorial.level)}`}>
                          {tutorial.level}
                        </span>
                        <div className="flex items-center text-white/60 text-sm">
                          <Clock className="w-4 h-4 mr-1" />
                          {tutorial.duration}
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                        {tutorial.title}
                      </h3>
                      <p className="text-white/70 text-sm">
                        {tutorial.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button 
                  variant="outline" 
                  className="border-white/20 text-white hover:bg-white/10 px-8 py-3"
                >
                  Load More Tutorials
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorials;
