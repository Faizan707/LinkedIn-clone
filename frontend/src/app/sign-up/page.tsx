import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import GoogleSignUpButton from './_components/GoogleSignUpButton';
import React from 'react';
import Link from 'next/link';
import axiosInstance from '@/lib/axios';
import { redirect } from 'next/navigation';
import SignUpForm from './_components/SignUpForm';
export async function signUpAction(formData: FormData) {
  const name =  formData.get('name') as string;
  const email =  formData.get('email') as string;
  const password =  formData.get('password') as string;

  

  try {



    const response = await axiosInstance.post('/api/auth/signup', {
      name,
      email,
      password,
    });

    console.log('Signup successful:', response.data);

    // ✅ Redirect to login page after success
    redirect('/login'); // or whatever your login route is

  } catch (error: any) {
    console.error('Signup failed:', error?.response?.data || error.message || error);
  }
}

function SignUp() {
  return (
      <SignUpForm/>
  );
}

export default SignUp;
