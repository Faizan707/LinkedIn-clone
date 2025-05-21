'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { setCookie } from 'cookies-next/client';
export default function GoogleSuccess() {
  const router = useRouter();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    if (token) {
      setCookie('token', token, {
        maxAge: 60 * 60 * 24,
        path: '/',
        secure: true,
        sameSite: 'lax',
      });
      router.push('/feeds');
    } else {
      router.push('/login');
    }
  }, [router]);

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="rounded-lg bg-white p-8 text-center shadow-md">
        <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-b-2 border-blue-500"></div>
        <h2 className="text-lg font-semibold text-gray-700">
          Signing in with Google...
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          Please wait while we log you in.
        </p>
      </div>
    </div>
  );
}
