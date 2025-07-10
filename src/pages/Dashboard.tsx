
import React, { useState } from 'react';
import { ArrowRight, Sparkles, Code2, Download, Github, Image, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import AuthenticatedNavbar from '../components/AuthenticatedNavbar';
import { useAuth } from '../contexts/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedCode, setGeneratedCode] = useState('');
  const [generatedPages, setGeneratedPages] = useState<string[]>([]);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsGenerating(true);
    setGeneratedPages(['index.tsx', 'about.tsx', 'contact.tsx']);
    
    // Simulate AI generation
    setTimeout(() => {
      setGeneratedCode(`
// Generated Website Code
import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900">
      <header className="py-20 text-center">
        <h1 className="text-6xl font-bold text-white mb-6">
          Welcome to Your Generated Site
        </h1>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          ${prompt}
        </p>
      </header>
    </div>
  );
};

export default HomePage;
      `);
      setIsGenerating(false);
    }, 3000);
  };

  const handleDownloadZip = () => {
    console.log('Downloading ZIP...');
    // Implement ZIP download functionality
  };

  const handleConnectGitHub = () => {
    console.log('Connecting to GitHub...');
    // Implement GitHub connection
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <AuthenticatedNavbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Welcome Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4">
              Welcome back, {user?.name || user?.githubUsername}!
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Describe your dream website and watch AI bring it to life
            </p>
          </div>

          {/* Prompt Input */}
          <div className="max-w-4xl mx-auto mb-12">
            <form onSubmit={handleGenerate} className="relative">
              <div className="relative group">
                <Input
                  type="text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Build me a modern portfolio website with a dark theme and contact form..."
                  className="w-full h-16 text-lg px-6 pr-32 rounded-2xl border-2 border-white/20 bg-white/10 backdrop-blur-lg text-white placeholder-white/50 focus:border-purple-400 focus:bg-white/20 transition-all duration-300"
                  disabled={isGenerating}
                />
                <Button
                  type="submit"
                  disabled={isGenerating || !prompt.trim()}
                  className="absolute right-2 top-2 h-12 px-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                >
                  {isGenerating ? (
                    <>
                      <Sparkles className="mr-2 w-5 h-5 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      Generate <ArrowRight className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>

          {/* Generation Result */}
          {(isGenerating || generatedCode) && (
            <div className="grid lg:grid-cols-4 gap-6">
              {/* Left Sidebar - File Tree */}
              <div className="lg:col-span-1">
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                  <h3 className="text-white font-semibold mb-4 flex items-center">
                    <Code2 className="w-5 h-5 mr-2" />
                    Generated Files
                  </h3>
                  <div className="space-y-2">
                    {generatedPages.map((page, index) => (
                      <div key={index} className="text-white/70 hover:text-white cursor-pointer p-2 rounded-lg hover:bg-white/10 transition-colors">
                        📄 {page}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Main Area - Code Preview */}
              <div className="lg:col-span-3">
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden">
                  {/* Header */}
                  <div className="flex items-center justify-between p-4 border-b border-white/10">
                    <div className="flex items-center space-x-2">
                      <Code2 className="w-5 h-5 text-purple-400" />
                      <span className="text-white font-semibold">Code Preview</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Button
                        onClick={handleConnectGitHub}
                        variant="outline"
                        className="border-white/20 text-white hover:bg-white/10"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Connect GitHub
                      </Button>
                      <Button
                        onClick={handleDownloadZip}
                        className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download ZIP
                      </Button>
                    </div>
                  </div>

                  {/* Code Content */}
                  <div className="p-6">
                    {isGenerating ? (
                      <div className="flex flex-col items-center justify-center py-20">
                        <div className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 animate-pulse">
                          CodeFusion
                        </div>
                        <div className="flex items-center space-x-2 text-white/70">
                          <Zap className="w-5 h-5 animate-bounce" />
                          <span>AI is crafting your website...</span>
                        </div>
                      </div>
                    ) : (
                      <pre className="text-sm text-white/80 bg-slate-900/50 rounded-lg p-4 overflow-x-auto">
                        <code>{generatedCode}</code>
                      </pre>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Quick Actions */}
          {!isGenerating && !generatedCode && (
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer">
                <Code2 className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-white font-semibold mb-2">React Apps</h3>
                <p className="text-white/70 text-sm">Generate modern React applications with hooks and components</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer">
                <Image className="w-8 h-8 text-pink-400 mb-4" />
                <h3 className="text-white font-semibold mb-2">Landing Pages</h3>
                <p className="text-white/70 text-sm">Beautiful landing pages with animations and responsive design</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer">
                <Sparkles className="w-8 h-8 text-yellow-400 mb-4" />
                <h3 className="text-white font-semibold mb-2">Full Stack</h3>
                <p className="text-white/70 text-sm">Complete applications with backend APIs and databases</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
