'use client'
import { CircleHelp } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect } from 'react';

function Page() {
      useEffect(() => {
        const fetchTickets = async () => {
          try {
            const response = await fetch('https://random-dareen-devdec-6d35bdc3.koyeb.app/dashboard',{
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            console.log(data)
          } catch (err) {
            console.log(err)
          } 
        };
    
        fetchTickets();
      }, []);
    return (
<div className="flex items-center justify-center min-h-screen bg-[#1F2937]">
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-green-500 text-3xl text-center">Ticket Submitted</h1>
        <p className="mt-2 text-center text-gray-700">Your ticket has been successfully recorded to the database.</p>
        
        <div className="mt-6 text-center">
            <CircleHelp className="text-blue-500 mx-auto text-4xl" />
        </div>
        
        <div className="mt-6">
            <h2 className="text-2xl mb-2">Instructions</h2>
            <p className="text-white bg-gray-800 p-4 rounded-md">
            This is a demo of the inquiry system. Your response has been successfully saved to the database. You can go to the <u> <Link href='/dashboard'>dashboard</Link></u> to view your response, along with other responses, which are automatically categorized using AI.
            </p>
        </div>
    </div>
</div>


    );
}

export default Page;