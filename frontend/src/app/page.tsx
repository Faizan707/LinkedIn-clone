'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Users, Briefcase, Award, MessageSquare, Menu, X } from 'lucide-react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const features = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: 'Connect with Professionals',
      description:
        'Build your network by connecting with industry leaders and peers worldwide.',
    },
    {
      icon: <Briefcase className="h-8 w-8 text-blue-600" />,
      title: 'Find Your Dream Job',
      description:
        'Explore thousands of job opportunities tailored to your skills and goals.',
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: 'Showcase Your Skills',
      description:
        'Highlight your expertise and achievements to stand out to employers.',
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-blue-600" />,
      title: 'Join Vibrant Communities',
      description:
        'Engage in discussions and share insights with like-minded professionals.',
    },
  ];

  const stats = [
    {
      value: '810M+',
      label: 'Members',
    },
    {
      value: '58M+',
      label: 'Companies',
    },
    {
      value: '20M+',
      label: 'Job listings',
    },
    {
      value: '200+',
      label: 'Countries',
    },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 bg-blue-700 shadow-lg">
        <div className="container mx-auto flex items-center justify-between px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <p className="text-2xl font-bold tracking-tight text-white sm:text-[30px]">
              LinkedIn
            </p>
          </div>

          <button
            className="text-white focus:outline-none md:hidden"
            onClick={toggleMenu}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          <div className="hidden items-center gap-4 md:flex">
            <Button
              asChild
              className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition-all duration-300 hover:bg-blue-400 sm:px-6 sm:py-3"
            >
              <Link href="/sign-up">Sign Up</Link>
            </Button>
            <Button
              asChild
              className="rounded-lg border-2 border-white bg-transparent px-4 py-2 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-blue-900 sm:px-6 sm:py-3"
            >
              <Link href="/sign-in">Sign In</Link>
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={`${isOpen ? 'flex' : 'hidden'} absolute top-16 left-0 z-50 w-full flex-col items-center gap-4 bg-blue-700 py-6 md:hidden`}
          >
            <Button
              asChild
              className="w-4/5 transform rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-400"
            >
              <Link href="/sign-up" onClick={toggleMenu}>
                Sign Up
              </Link>
            </Button>
            <Button
              asChild
              className="w-4/5 transform rounded-lg border-2 border-white bg-transparent px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-blue-900"
            >
              <Link href="/sign-in" onClick={toggleMenu}>
                Sign In
              </Link>
            </Button>
          </motion.div>
        </div>
      </nav>

      <div className="relative mx-auto my-12 flex max-w-7xl flex-col items-center justify-center">
        <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
          <div className="absolute top-0 h-48 w-px bg-gradient-to-b from-transparent via-blue-600 to-transparent" />
        </div>
        <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
          <div className="absolute top-0 h-48 w-px bg-gradient-to-b from-transparent via-blue-600 to-transparent" />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
          <div className="absolute mx-auto h-px w-48 bg-gradient-to-r from-transparent via-blue-600 to-transparent" />
        </div>

        <div className="px-6 py-12 text-center md:py-24 lg:py-32">
          <h1 className="relative z-10 mx-auto max-w-4xl text-3xl font-bold text-slate-800 md:text-5xl lg:text-6xl dark:text-slate-200">
            {'Connect, Grow, and Thrive Professionally'
              .split(' ')
              .map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, filter: 'blur(4px)', y: 10 }}
                  animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                    ease: 'easeInOut',
                  }}
                  className="mr-2 inline-block"
                >
                  {word}
                </motion.span>
              ))}
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.8, ease: 'easeInOut' }}
            className="relative z-10 mx-auto max-w-2xl py-6 text-lg font-normal text-neutral-600 dark:text-neutral-300"
          >
            Welcome to our LinkedIn-inspired platform, where professionals
            connect, grow, and thrive! Join a vibrant community to showcase your
            skills, network with industry leaders, and discover exciting career
            opportunities. Whether you're seeking your next big break or
            building meaningful relationships, our platform empowers you to
            elevate your professional journey with ease and confidence. Start
            connecting today and unlock your potential!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1, ease: 'easeInOut' }}
            className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <Button
              asChild
              className="transform rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700"
            >
              <Link href="/signup">Join Now</Link>
            </Button>
            <Button
              asChild
              className="transform rounded-lg border-2 border-blue-600 bg-transparent px-8 py-3 font-semibold text-blue-600 transition-all duration-300 hover:-translate-y-1 hover:bg-white"
            >
              <Link href="/learn-more">Learn More</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="w-full px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2, ease: 'easeInOut' }}
          className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.4 + index * 0.2 }}
              className="transform rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-center text-xl font-semibold text-slate-800 dark:text-slate-200">
                {feature.title}
              </h3>
              <p className="mt-2 text-center text-sm text-neutral-600 dark:text-neutral-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <section className="px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeInOut' }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              The world's largest professional network
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Join millions of professionals using LinkedIn every day.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4, ease: 'easeInOut' }}
            className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.6 + index * 0.2,
                  ease: 'easeInOut',
                }}
                className="text-center"
              >
                <h3 className="mb-2 text-4xl font-bold text-[#0A66C2]">
                  {stat.value}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <footer className="bg-blue-700 py-8 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeInOut' }}
            className="flex flex-col items-center text-center"
          >
            <p className="mb-4 text-2xl font-bold tracking-tight">LinkedIn</p>
            <p className="mb-4 max-w-2xl text-sm text-neutral-200">
              Connect, grow, and thrive with the world’s largest professional
              network.
            </p>
            <p className="text-xs text-neutral-300">
              &copy; {new Date().getFullYear()} LinkedIn. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </>
  );
}
