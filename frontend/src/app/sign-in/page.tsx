import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import GoogleSignInButton from './_components/GoogleSignInButton';

function SignIn() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-blue-100 p-4">
      <Card className="w-full max-w-md rounded-2xl border-none bg-white shadow-xl transition-all duration-300 hover:shadow-2xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            Welcome to <span className="text-blue-600">LinkedIn</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 pt-0">
          <div className="space-y-4">
            
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="rounded-lg border-gray-300 px-4 py-2 transition-all duration-200 focus:ring-2 focus:ring-blue-500"
            />
            <Input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="rounded-lg border-gray-300 px-4 py-2 transition-all duration-200 focus:ring-2 focus:ring-blue-500"
            />
            <Button className="w-full rounded-lg bg-blue-600 py-2 font-semibold text-white transition-colors duration-200 hover:bg-blue-700">
              Sign In
            </Button>
            <GoogleSignInButton />
            <p className="mt-4 text-center text-sm text-gray-500">
              Don&apos;t have an account?{' '}
              <Link href="sign-up" className="text-blue-600 hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default SignIn;
