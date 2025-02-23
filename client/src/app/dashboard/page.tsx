'use client'

import { Button } from "@/components/ui/button";
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
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);

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
            <CardTitle>{ticket.complaint_title.slice(0, 30)}{ticket.complaint_title.length > 30 && '...'}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p>Ticket #: {ticket.ticket_number}</p>
              <p className="text-sm text-gray-400">
                {new Date(ticket.date).toLocaleDateString()}
              </p>
              <Button onClick={() => setSelectedTicket(ticket)}>desc</Button>
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

      {selectedTicket && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <Card className="w-[90%] md:w-[50%] p-6 bg-white text-black">
            <CardHeader>
              <CardTitle>{selectedTicket.complaint_title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p><strong>Ticket : #</strong>{selectedTicket.ticket_number}</p>
              <p><strong>Date: </strong>{new Date(selectedTicket.date).toLocaleDateString()}</p>
              <p><strong>Severity: </strong>{selectedTicket.severity}</p>
              <p><strong>Complaint: </strong>{selectedTicket.complaint}</p>
              <Button onClick={() => setSelectedTicket(null)} className="mt-4">Close</Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
