
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import Footer from "@/components/landing/Footer";
import { Eye, EyeOff } from 'lucide-react';

const Login = () => {
  const [step, setStep] = useState<'identifier' | 'password'>('identifier');
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 'identifier' && identifier) {
      setStep('password');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <Link to="/" className="inline-block">
              <span className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                SocialFlow<span className="text-indigo-500">✦</span>
              </span>
            </Link>
            <h2 className="mt-6 text-2xl font-bold text-gray-900">
              {step === 'identifier' ? 'Sign in to your account' : 'Enter your password'}
            </h2>
            {step === 'password' && (
              <p className="mt-2 text-sm text-gray-600">
                Signing in as <span className="font-medium">{identifier}</span>
              </p>
            )}
          </div>
          
          <div className="mt-8 bg-white py-8 px-4 shadow-md sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleContinue}>
              {step === 'identifier' ? (
                <div>
                  <Label htmlFor="identifier" className="block text-sm font-medium text-gray-700">
                    Email or Phone Number
                  </Label>
                  <div className="mt-1">
                    <Input
                      id="identifier"
                      name="identifier"
                      type="text"
                      autoComplete="email"
                      required
                      value={identifier}
                      onChange={(e) => setIdentifier(e.target.value)}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                      placeholder="name@company.com"
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <Label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </Label>
                  <div className="mt-1 relative">
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>
              )}

              {step === 'password' && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Checkbox id="remember-me" />
                    <Label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                      Remember me
                    </Label>
                  </div>

                  <div className="text-sm">
                    <Link to="/forgot-password" className="font-medium text-primary hover:text-primary-700">
                      Forgot your password?
                    </Link>
                  </div>
                </div>
              )}

              <div>
                <Button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-primary hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  {step === 'identifier' ? 'Continue' : 'Sign in'}
                </Button>
              </div>
            </form>

            {step === 'identifier' && (
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Don't have an account?</span>
                  </div>
                </div>

                <div className="mt-6">
                  <Link
                    to="/signup"
                    className="w-full flex justify-center py-2 px-4 border border-primary rounded-md shadow-sm text-sm font-medium text-primary bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    Sign up for SocialFlow
                  </Link>
                </div>
              </div>
            )}
            
            {step === 'password' && (
              <div className="mt-4 text-center">
                <button 
                  onClick={() => setStep('identifier')}
                  className="text-sm text-primary hover:underline"
                >
                  Use a different account
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
