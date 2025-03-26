import { Button } from "@/components/ui/button";
import {  SearchIcon, UsersIcon, BriefcaseIcon, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Home() {
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Linkedin  className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-semibold text-blue-600">LinkedIn</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/sign-in">Sign In</Link>
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700" asChild>
              <Link href="/sign-up">Join now</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Welcome to your professional community
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Connect with professionals, find your dream job, and learn the skills you need to succeed.
              </p>

            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000"
                alt="Professional networking"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-3 gap-8 mt-24">
            <div className="p-6 bg-white rounded-lg shadow-sm border">
              <SearchIcon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Find the right job</h3>
              <p className="text-gray-600">
                Discover opportunities that match your skills and interests.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm border">
              <UsersIcon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Connect with others</h3>
              <p className="text-gray-600">
                Build your network with professionals in your industry.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm border">
              <BriefcaseIcon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Learn new skills</h3>
              <p className="text-gray-600">
                Advance your career with our learning resources.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-4">General</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Sign Up</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Help Center</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">About</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Press</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Browse LinkedIn</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Learning</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Jobs</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Salary</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Mobile</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Business Solutions</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Talent</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Marketing</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Sales</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Learning</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Directories</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Members</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Jobs</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Companies</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Featured</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Linkedin className="h-6 w-6 text-blue-600" />
                <span className="text-sm text-gray-600">© 2025 LinkedIn</span>
              </div>
              <div className="flex space-x-6">
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">Privacy Policy</Link>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">User Agreement</Link>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">Cookie Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}