
import React, { useState } from 'react';
import { User, ChevronDown, LogOut, Settings, Github } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const AuthenticatedNavbar = () => {
  const { user, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            CodeFusion
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/dashboard" className="text-white/80 hover:text-white font-semibold text-lg transition-all duration-300 hover:scale-105">
              Dashboard
            </a>
            <a href="/about" className="text-white/80 hover:text-white font-semibold text-lg transition-all duration-300 hover:scale-105">
              About
            </a>
            <a href="/tutorials" className="text-white/80 hover:text-white font-semibold text-lg transition-all duration-300 hover:scale-105">
              Tutorials
            </a>
            <a href="/pricing" className="text-white/80 hover:text-white font-semibold text-lg transition-all duration-300 hover:scale-105">
              Pricing
            </a>
          </div>

          {/* User Menu */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center space-x-3 bg-white/10 backdrop-blur-lg rounded-full px-4 py-2 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              {user?.avatar ? (
                <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />
              ) : (
                <User className="w-5 h-5 text-white" />
              )}
              <div className="text-left">
                <div className="text-white font-medium">{user?.name || user?.githubUsername}</div>
                <div className="text-purple-300 text-sm">{user?.credits} credits</div>
              </div>
              <ChevronDown className="w-4 h-4 text-white" />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-slate-800/90 backdrop-blur-lg rounded-xl border border-white/20 py-2 shadow-xl">
                <div className="px-4 py-2 border-b border-white/10">
                  <div className="text-white font-medium">{user?.name}</div>
                  <div className="text-white/60 text-sm">{user?.email}</div>
                </div>
                
                <button className="w-full text-left px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 flex items-center space-x-2">
                  <Settings className="w-4 h-4" />
                  <span>Settings</span>
                </button>
                
                <button className="w-full text-left px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 flex items-center space-x-2">
                  <Github className="w-4 h-4" />
                  <span>Connect GitHub</span>
                </button>
                
                <button 
                  onClick={logout}
                  className="w-full text-left px-4 py-2 text-red-400 hover:text-red-300 hover:bg-white/10 flex items-center space-x-2"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AuthenticatedNavbar;
