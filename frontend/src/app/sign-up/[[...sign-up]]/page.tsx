import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className='min-h-screen flex justify-center items-center bg-gray-100'>
      <div className="w-full max-w-md">
        <SignUp 
          appearance={{
            elements: {
              card: "shadow-lg rounded-lg",
              formButtonPrimary: "bg-blue-600 hover:bg-blue-700 text-white"
            }
          }}
          afterSignUpUrl="/feed"
          redirectUrl="/feed"
        />
      </div>
    </div>
  )
}