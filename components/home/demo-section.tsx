import { Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function DemoSection(){
    return (
            <section className="relative">
                <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12">
                <div aria-hidden="true"
                 className="pointer-events-none absolute inset-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-30">
                
                <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-400 to-blue-600 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style = {{
                    clipPath: 'polygon(50% 0%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }} />
                <div className="relative mx-auto max-w-3xl text-center">
                </div>
                </div>
                <div className="flex flex-col items-center justify-center text-center space-y-4 mx-auto max-w-3xl">
                    <div className="flex flex-col p-2 rounded-2xl bg-gray-100/80 backdrop-blur-xs border broder-gray-500/20"><Sparkles className="h-6 w-6 text-blue-400 animate-pulse" /></div>
                    <p className=" justify-center text-base text-blue-400">Behold The power of AI</p>
                    <div className="flex justify-center items-center px-2 sm:px-4 lg:px-6">
                    </div>
                </div>
            </div>
        </section>
        );
}