import UploadForm from '@/components/upload/upload-form';
import UploadHeader from '@/components/upload/upload-header';
import React from 'react';
import BgGradient from '@/components/common/bg-gradient';
import { Badge } from '@/components/ui/badge';
import { Sparkles } from 'lucide-react';
import { redirect } from 'next/dist/client/components/navigation';
import { currentUser } from '@clerk/nextjs/server';
import { hasReachedUploadLimit } from '@/lib/user';

export default async function upload() {
  const user = await currentUser();

  if(!user?.id) {
    redirect('/sign-in');
  }

  const userId = user.id;
  const userEmail = user.emailAddresses[0].emailAddress;

  const { hasReachedLimit } = await hasReachedUploadLimit(
    userId, userEmail
  );
  return (
    <section className="min-h-screen">
        <BgGradient className='from-blue-300 via-blue-200 to-teal-100'/>
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <div className='flex justify-center'>
                <div className="relative p-[1px] overflow-hidden rounded-full bg-linear-to-r from-blue-100 via-blue-300 to-blue-500 animate-gradient-x group">
                <Badge variant={'secondary'} className="relative px-6 py-2 text-base font-medium bg-white rounded-full group-hover:bg-gray-50 transition-colors duration-200">
                <Sparkles className="h-6 w-6 mr-2 text-blue-400 animate-pulse" />
                <p className=" justify-center text-base text-blue-400">Powered by AI</p>
                </Badge>
            </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-6 text-center py-6">
          <UploadHeader />
          <UploadForm />
        </div>
      </div>
    </section>
  );
}