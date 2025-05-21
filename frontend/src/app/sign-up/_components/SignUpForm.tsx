'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SignupSchema,SignupSchemaType } from '@/lib/schema'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import GoogleSignUpButton from './GoogleSignUpButton'
import Link from 'next/link'
import axiosInstance from '@/lib/axios'
import { useRouter } from 'next/navigation'
function SignUpForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignupSchemaType>({
    resolver: zodResolver(SignupSchema),
  })
  const router = useRouter()
const onSubmit = async (data: SignupSchemaType) => {
  console.log("Form Data:", data);

  try {
    const response = await axiosInstance.post('/api/auth/signup', data);
    reset()
    router.push('sign-in')
} catch (error: any) {
    console.error("Signup failed:", error.response?.data || error.message);
  }
};


  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-blue-100 p-4">
      <Card className="w-full max-w-md rounded-2xl border-none bg-white shadow-xl transition-all duration-300 hover:shadow-2xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            Welcome to <span className="text-blue-600">LinkedIn</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 pt-0">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Enter your name"
                {...register("name")}
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div>
              <Input
                type="email"
                placeholder="Enter your email"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>


            <div>
              <Input
                type="password"
                placeholder="Enter your password"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-sm text-red-500">{errors.password.message}</p>
              )}
            </div>

            <Button
              className="w-full cursor-pointer rounded-lg bg-blue-600 py-2 font-semibold text-white transition-colors duration-200 hover:bg-blue-700"
              type="submit"
            >
              Sign Up
            </Button>

            <GoogleSignUpButton />

            <p className="mt-4 flex justify-center text-center text-sm text-gray-500">
              Don&apos;t have an account?{' '}
              <Link href="sign-in" className="text-blue-600 hover:underline">
                Sign in
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default SignUpForm
