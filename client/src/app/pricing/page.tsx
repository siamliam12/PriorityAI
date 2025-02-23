'use client';

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Choose Your Plan</h1>
        <p className="text-gray-400 px-5">Find the plan that is right for you and start growing today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
        {/* Basic Plan */}
        <Card className="border border-gray-700 shadow-lg hover:shadow-2xl transition-all">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Developer Plan</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-5xl font-bold text-green-400">$9.99<span className="text-lg text-gray-400">/month</span></p>
            <ul className="text-left space-y-2">
              <li>✔️ Access to API features</li>
              <li>✔️ 24/7 customer support</li>
              <li>✔️ Up to 5 projects</li>
              <li>✔️ Basic analytics</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-green-600 hover:bg-green-500" asChild>
                <Link href="https://random-dareen-devdec-6d35bdc3.koyeb.app/docs">
                Get Started
                </Link>
                </Button>
          </CardFooter>
        </Card>

        {/* Pro Plan */}
        <Card className="border border-gray-700 shadow-lg hover:shadow-2xl transition-all">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Business Plan</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-5xl font-bold text-blue-400">$29.99<span className="text-lg text-gray-400">/month</span></p>
            <ul className="text-left space-y-2">
              <li>✔️ All Basic Plan features</li>
              <li>✔️ Unlimited projects</li>
              <li>✔️ Advanced analytics</li>
              <li>✔️ One clickSolution</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-blue-600 hover:bg-blue-500">Coming Soon</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}