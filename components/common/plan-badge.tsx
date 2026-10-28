import { currentUser } from "@clerk/nextjs/server";
import { getPriceIdForActiveUser } from "@/lib/user";
import { pricingPlans } from "@/utils/constants";
import { Crown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default async function PlanBadge() {
    
    const user = await currentUser();
    if(!user?.id) return null;

    const email = user?.emailAddresses?.[0].emailAddress;

    let priceID: string | null = null;
    if(email) {
        priceID = await getPriceIdForActiveUser(email);
    }

    let planName = "Buy a Plan";

    const plan = pricingPlans.find((plan) => plan.priceID === priceID);

    if(plan) {
        planName = plan.name;
    }

    return <Badge variant="outline" className={cn('ml-2 bg-linear-to-r from-amber-100 to-amber-200 border-amber-300 hidden lg:flex flex-row items-center', !priceID && 'bg-linear-to-r from-blue-100 to-blue-200 border-blue-300')}>
        <Crown className={cn('w-3 h-3 mr-1 text-amber-600', !priceID && 'text-blue-600')}/>
        {planName}</Badge>;
}