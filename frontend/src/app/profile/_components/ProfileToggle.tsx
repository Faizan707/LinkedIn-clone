'use client';
import { Button } from '@/components/ui/button';
import { useUserStore } from '@/store/useUserStore';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { deleteCookie } from 'cookies-next/client';
import React from 'react';

function ProfileToggle() {
  const { user } = useUserStore();
  const router = useRouter();
  const handleLogout = () => {
    deleteCookie('token');
    router.push('/');
  };
  return (
    <div className="absolute top-[100px] right-[-135px] z-50 w-80 rounded-lg border bg-white p-4 shadow-xl">
      <div className="flex flex-col items-center text-center">
        {user?.avatar ? (
          <Image
            src={user.avatar}
            alt={`${user.name}'s avatar`}
            width={72}
            height={72}
            className="mb-2 rounded-full object-cover"
          />
        ) : (
          <div className="mb-2 flex h-18 w-18 items-center justify-center rounded-full bg-gray-300 text-2xl font-semibold text-white">
            {user?.name?.charAt(0).toUpperCase() || 'U'}
          </div>
        )}
        <h2 className="text-lg font-semibold text-gray-800">{user?.name}</h2>
        <Button
          variant="outline"
          className="w-full rounded-full text-sm text-sky-500"
          onClick={() => router.push('/profile')}
        >
          View Profile
        </Button>
      </div>

      <div className="my-4 h-px w-full bg-gray-200" />

      <Button
        variant="ghost"
        className="w-full cursor-pointer rounded-full text-sm text-red-500 hover:bg-red-50"
        onClick={handleLogout}
      >
        Sign Out
      </Button>
    </div>
  );
}

export default ProfileToggle;
