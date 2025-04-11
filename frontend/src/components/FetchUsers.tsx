'use client'
import React from 'react';
import { useUser } from '@clerk/nextjs'; // Clerk ka useUser hook import karna
import Image from 'next/image';

function FetchUsers() {
  const { isLoaded, isSignedIn, user } = useUser(); // Clerk se user data fetch karna

  // Jab tak data load nahi hota, loading state dikhana
  if (!isLoaded) {
    return <div>Loading user data...</div>;
  }

  // Agar user signed in nahi hai, toh message dikhana
  if (!isSignedIn) {
    return <div>Please sign in to see your details.</div>;
  }

  // Jab user signed in hai, toh uski details dikhana
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <h1>User Details</h1>
      <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
      <p><strong>Email:</strong> {user?.primaryEmailAddress?.emailAddress}</p>
      <p><strong>User ID</strong>{user.id}</p>
{user?.imageUrl ? (
        <Image
          src={user.imageUrl} // Clerk se profile image URL
          alt={`${user.firstName}'s avatar`}
          width={100} // Image ki width specify karna zaroori hai
          height={100} // Image ki height specify karna zaroori hai
          className="rounded-full" // Optional: Circular avatar ke liye
        />
      ) : (
        <p>No avatar available</p>
      )}    </div>
  );
}

export default FetchUsers;