
import React from 'react';
import { ArrowLeft, Check, Star, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for trying out CodeFusion",
      features: [
        "3 website generations per month",
        "Basic templates",
        "Community support",
        "Export to HTML/CSS/JS",
        "7-day project storage"
      ],
      popular: false,
      buttonText: "Get Started Free",
      buttonVariant: "outline" as const
    },
    {
      name: "Pro",
      price: "$9",
      period: "per month",
      description: "Everything you need to build professional websites",
      features: [
        "Unlimited website generations",
        "All premium templates",
        "Priority support",
        "GitHub integration",
        "Custom domain deployment",
        "Advanced AI features",
        "Team collaboration",
        "30-day project storage",
        "API access"
      ],
      popular: true,
      buttonText: "Start Pro Trial",
      buttonVariant: "default" as const
    }
  ];

  const comparison = [
    { feature: "Website Generations", free: "3/month", pro: "Unlimited" },
    { feature: "Templates", free: "Basic", pro: "All Premium" },
    { feature: "Support", free: "Community", pro: "Priority" },
    { feature: "GitHub Integration", free: "❌", pro: "✅" },
    { feature: "Custom Domains", free: "❌", pro: "✅" },
    { feature: "Team Collaboration", free: "❌", pro: "✅" },
    { feature: "API Access", free: "❌", pro: "✅" },
    { feature: "Advanced AI", free: "❌", pro: "✅" }
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
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Simple, <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Transparent</span> Pricing
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Choose the plan that fits your needs. Start free and upgrade as you grow. 
              No hidden fees, cancel anytime.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-20 max-w-4xl mx-auto">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-purple-400 shadow-lg shadow-purple-400/20' 
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-white/60 text-lg">/{plan.period}</span>
                  </div>
                  <p className="text-white/70">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-white/80">
                      <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={plan.buttonVariant}
                  className={`w-full py-3 font-semibold transition-all duration-300 hover:scale-105 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white' 
                      : 'border-white/20 text-white hover:bg-white/10'
                  }`}
                  onClick={() => window.location.href = '/signup'}
                >
                  {plan.buttonText}
                </Button>
              </div>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Feature Comparison</h2>
              <p className="text-white/70">See exactly what's included in each plan</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left text-white font-semibold py-4">Feature</th>
                    <th className="text-center text-white font-semibold py-4">Free</th>
                    <th className="text-center text-white font-semibold py-4">
                      <div className="flex items-center justify-center">
                        <Zap className="w-4 h-4 text-purple-400 mr-1" />
                        Pro
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, index) => (
                    <tr key={index} className="border-b border-white/5">
                      <td className="text-white/80 py-4">{row.feature}</td>
                      <td className="text-center text-white/70 py-4">{row.free}</td>
                      <td className="text-center text-white/70 py-4">{row.pro}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                <h3 className="text-white font-semibold mb-3">Can I change plans anytime?</h3>
                <p className="text-white/70">Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                <h3 className="text-white font-semibold mb-3">Is there a free trial for Pro?</h3>
                <p className="text-white/70">Yes! We offer a 7-day free trial for the Pro plan. No credit card required to start.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                <h3 className="text-white font-semibold mb-3">What payment methods do you accept?</h3>
                <p className="text-white/70">We accept all major credit cards, PayPal, and offer local payment methods in select regions.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                <h3 className="text-white font-semibold mb-3">Do you offer refunds?</h3>
                <p className="text-white/70">Yes! We offer a 30-day money-back guarantee if you're not satisfied with CodeFusion.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
