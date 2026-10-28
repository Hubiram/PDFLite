import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Summarize Documents Effortlessly
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Experience the power of AI-driven document summarization.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400]:flex-row justify-center">
            <div>
                    <Button variant={'link'} className="text-white mt-6 text-base sm:text-lg lg:text-xl rounded-full px-8 sm:px-10 lg:px-12 py-6 sm:py-7 lg:py-8 lg:mt-16 bg-linear-to-r from-blue-200 to-blue-600 hover:from-blue-600 hover:to-blue-200 hover:no-underline shadow-lg hover:shadow-grey-100/2 transition-all flex items-center justify-around mx-auto animate-gradient-x">
                        <Link href="/#pricing" className="flex gap-2 items-center text-white">
                            <span>Get Started</span>
                            <ArrowRight className="animate-pulse" />
                        </Link>
                    </Button>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
}