import { cn } from '@/lib/utils';
import { CheckIcon } from 'lucide-react';
import Link from 'next/link';
import { pricingPlans } from '@/utils/constants';

type Plan = {
  id: string;
  name: string;
  price: number;
  priceID: string;
  paymentLink: string;
  items: string[];
};

type PriceType = {
  id: string;
  name: string;
  price: number;
  priceID: string;
  items: string[];
  paymentLink: string;
};

const PricingCard = ({
  name,
  price,
  priceID,
  items,
  id,
  paymentLink,
}: PriceType) => {
  return (
    <div className="relative w-full max-w-lg hover:scale-105 hover:transition-all duration-300">
      <div
        className={cn(
          'relative flex flex-col h-full gap-4 lg:gap-8 z-10 p-8 border-[1px] border-gray-500/20 rounded-2xl',
          id == 'pro' && 'border-blue-500 gap-5 border-2'
        )}
      >
        <div className="flex justify-between items-center gap-4">
          <div>
            <p className="text-lg lg:text-xl font-bold capitalize">{name}</p>
            <p className="text-base-content/80 mt-2">{priceID}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <p className="text-5xl tracking-tight font-extrabold">₹{price}</p>
          <div className="flex flex-col justify-end mb-[4px]">
            <p className="text-xs">/year</p>
          </div>
        </div>
        <div className="space-y-2.5 leading-relaxed text-base">
          {items.map((item, idx) => (
            <li className="flex items-center gap-2" key={idx}>
              <CheckIcon size={18} />
              <span>{item}</span>
            </li>
          ))}
        </div>
        <div className="space-y-2 flex justify-center w-full">
          <Link
            href={paymentLink}
            className={cn(
              'w-full rounded-full flex items-center justify-center gap-2 bg-linear-to-r from-blue-800 to-blue-500 hover:bg-linear-to-l text-white border-2 py-2',
              id === 'pro'
                ? 'border-blue-900'
                : 'from-blue-400 to-blue-500 border-blue-100'
            )}
          >
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function PricingSection() {
  return (
    <section>
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12">
        <div className="flex items-center justify-center w-full pb-12">
          <h2 className="uppercase font-bold text-xl mb-8 text-blue-500">
            Pricing
          </h2>
        </div>
        <div className="relative flex justify-center flex-col lg:flex-row items-center lg:items-stretch gap-8">
          {pricingPlans.map((plan: Plan) => (
            <PricingCard key={plan.id} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}