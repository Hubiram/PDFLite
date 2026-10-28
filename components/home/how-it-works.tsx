import { ReactNode } from "react";
import { BrainCircuit, FileOutput, FileText, MoveRight } from 'lucide-react';

type Step = {
    label: string;
    description: string;
    icon: ReactNode;
}

const steps: Step[] =[
    {
        label: "Upload your document",
        description: "Easily upload your PDF document through our user-friendly interface. Simply click the 'Upload' button, select your file, and let our system handle the rest.",
        icon: <FileText size={64} strokeWidth={1.5}/>
    },
    {
        label: "AI Analysis",
        description: "Our advanced AI algorithms will analyze the content of your document, extracting key information and identifying important themes to create a comprehensive summary.",
        icon: <BrainCircuit size={64} strokeWidth={1.5}/>
    },
    {
        label: "Get your summary",
        description: "Receive a clear and concise summary of your document within seconds. You can view, download, or share the summary as needed, making it easier to understand and utilize the information.",
        icon: <FileOutput size={64} strokeWidth={1.5}/>
    }
]

export default function HowItWorks() {
    return (<section className="relative overflow-hidden bg-gray-50">
        <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12">
                <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-30">
                <div 
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-400 to-blue-600 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" 
                    style = {{
                    clipPath: 'polygon(50% 0%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}/>
                </div>
                <div className="text-center mb-16">
                    <h2 className="text-xl uppercase font-bold tracking-tight mb-4 text-blue-600 sm:text-4xl">How it works</h2>
                    <h3 className="font-bold text-3xl max-w-2xl mx-auto mt-4 leading-6 text-gray-600">Easy to read and concise summary</h3>
                </div>
                <div className="grid grid-cols-1 gap-y-16 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative lg:grid-cols-3 lg:gap-x-12 lg:gap-y-0">
                    {steps.map((step, idx)=>(
                            <div className="relative flex items-stretch" key={idx}>
                            <StepItem {...step} />
                            {idx<steps.length-1 &&(
                                <div className="hidden md:block top-1/2 -right-4 transform -translate-y-1/2 z-10 animate-pulse absolute">
                                <MoveRight 
                                    size={32}
                                    strokeWidth={1}
                                    className="text-blue-500" />
                                </div>
                            )}
                            </div>
                        ))}
                </div>
        </div>
    </section>
    );
}

function StepItem({icon, label, description}: Step){
    return (
        <div className="relative p-6 rounded-2xl bg-white/5  backdrop-blur-xs border-white/10 hover:bg-white/10 hover:border-blue-500/5 transition-colors group w-full">
        <div className="flex flex-col gap-4 h-full">
            <div className="flex items-center justify-center h-24 w-24 mx-auto rounded 2xl bg-linear-to-br from-blue-500/10 to-transparent group-hover:from-blue-500/20 transition-colors">
                <div className="text-blue-500">{icon}</div>
                </div>
                <div className="flex flex-col gap-1 flex-1 justify-between">
                    <h4 className="text-center font-bold text-xl">{label}</h4>
                    <p className="text-center text-gray-600 text-sm">{description}</p>
                </div>
            </div>
        </div>
    );
}