'use client';
import { Card, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useUserStore } from '@/store/useUserStore';
import Image from 'next/image';
function Post() {
  const { user } = useUserStore();

  return (
    <div className="mx-auto w-[800px]">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            {user?.avatar ? (
              <Image
                src={user.avatar}
                alt={`${user.name}'s avatar`}
                width={100}
                height={100}
                className="rounded-full object-cover"
              />
            ) : (
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-300 font-semibold text-white">
                {user?.name?.charAt(0).toUpperCase() || 'U'}
              </div>
            )}
            <Input
              type="button"
              value="Start a post"
              className="w-full rounded-full border border-gray-300 bg-gray-100 pt-5 pb-10 text-left font-medium hover:bg-gray-200 cursor-pointer"
            />
          </div>
        </CardHeader>
      </Card>
    </div>
  );
}

export default Post;
