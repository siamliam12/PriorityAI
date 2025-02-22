'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";

interface Ticket {
  id: number;
  complaint_title: string;
  severity: "High" | "Medium" | "Low";
  ticket_number: number;
  user_id: string;
  date: string;
  complaint: string;
}

interface ApiResponse {
  data: Ticket[];
}

export default function Dashboard() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch('https://random-dareen-devdec-6d35bdc3.koyeb.app/get-ticket');
        if (!response.ok) {
          throw new Error('Failed to fetch tickets');
        }
        const data: ApiResponse = await response.json();
        setTickets(data.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch tickets');
      } finally {
        setIsLoading(false);
      }
    };

    fetchTickets();
  }, []);

  const renderCards = (severity: Ticket["severity"]) => 
    tickets
      .filter((ticket) => ticket.severity === severity)
      .map((ticket) => (
        <Card key={ticket.id} className="shadow-lg border border-gray-200">
          <CardHeader>
            <CardTitle>{ticket.complaint_title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p>Date: {ticket.date}</p>
              <p>Ticket #: {ticket.ticket_number}</p>
              <p className="text-sm text-gray-400">
                {new Date(ticket.date).toLocaleDateString()}
              </p>
            </div>
          </CardContent>
        </Card>
      ));

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-900">
        <p className="text-white">Loading tickets...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-900">
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="p-8 min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-8 text-center">Inquiry Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-red-500">High Severity</h2>
          {renderCards("High")}
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-yellow-500">Medium Severity</h2>
          {renderCards("Medium")}
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-green-500">Low Severity</h2>
          {renderCards("Low")}
        </div>
      </div>
    </div>
  );
}