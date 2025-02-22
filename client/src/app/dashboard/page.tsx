'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Dashboard() {
  const inquiries = [
    { id: 1, title: "Server Outage", severity: "High" },
    { id: 2, title: "Payment Delay", severity: "Medium" },
    { id: 3, title: "UI Bug", severity: "Low" },
    { id: 4, title: "Data Loss Issue", severity: "High" },
    { id: 5, title: "Email Bounce", severity: "Medium" },
    { id: 6, title: "Minor CSS Glitch", severity: "Low" },
  ];

  interface Inquiry {
    id: number;
    title: string;
    severity: "High" | "Medium" | "Low";
  }

  const renderCards = (severity: Inquiry["severity"]) => 
    inquiries
      .filter((inq) => inq.severity === severity)
      .map((inq) => (
        <Card key={inq.id} className="shadow-lg border border-gray-200">
          <CardHeader>
            <CardTitle>{inq.title}</CardTitle>
          </CardHeader>
          <CardContent>
            Severity: {inq.severity.charAt(0).toUpperCase() + inq.severity.slice(1)}
          </CardContent>
        </Card>
      ));

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
