'use client'
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react'

function GoogleSignUpButton() {
    const googleSignInLink = process.env.NEXT_PUBLIC_GOOGLE_SIGNIN || '#';

  return (
<Button
      type="button"
      className="flex w-full items-center justify-center gap-2 hover:cursor-pointer"
      onClick={() => (window.location.href = googleSignInLink)}
    >
      <Image
        src="/icons8-google-48.png"
        width={20}
        height={20}
        alt="Google icon"
      />
      Sign up with Google
    </Button>
)
}

export default GoogleSignUpButton