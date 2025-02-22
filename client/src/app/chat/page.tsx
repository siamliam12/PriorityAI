"use client"

import React, { useState } from 'react'
interface TicketFormData {
  user_id?: string;
  ticket_number?: number;
  date?: string;
  complaint_title?: string;
  complaint?: string;
  severity?: 'Low' | 'Medium' | 'High';
}

function Page() {

  const [formData, setFormData] = useState<TicketFormData>({
    complaint_title: '',
    complaint: '',
})
const [isLoading, setIsLoading] = useState(false)
const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e:React.FormEvent)=>{
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    const ticketNumber = Math.floor(100000 + Math.random() * 900000);
    const randomId = Math.floor(100000 + Math.random() * 900000);
    const guestUserId = 'guest_' + randomId.toString()
    const severity = 'Low'
    const completeTicketData = {
      ...formData,
      ticket_number: ticketNumber,
      user_id: guestUserId,
      severity: severity,
      date: new Date().toISOString() // Optional: add current date
  }
    try {
      const response = await fetch('https://priorityai.onrender.com/create-ticket',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body: JSON.stringify(completeTicketData)
      })
      if (!response.ok) {
        throw new Error('Failed to create ticket')
    }
    const data = await response.json()
    console.log('Ticket created:', data)
    
    // Reset form after successful submission
    setFormData({
        complaint_title: '',
        complaint: '',
    })
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Something went wrong')
    }
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
        ...prev,
        [name]: value
    }))
}
  return (
    <div className="flex flex-col h-screen justify-center items-center bg-gray-900">
      <div className="flex flex-col items-center mb-4">
        <h1 className="text-2xl font-bold text-white mb-2">DEMO Inquiry Form</h1>
        {/* <span className='text-white'>Ticket Number: {ticketNumber}</span> */}
      </div>
      <div className="w-full max-w-2xl p-4 shadow-md rounded bg-gray-800">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="complaint_title" className="block text-white text-sm font-bold mb-2">Title</label>
            <input type="complaint_title" id="complaint_title" name="complaint_title" className="w-full px-3 py-2 border rounded-md focus:outline-none text-white bg-gray-900"    value={formData.complaint_title}
                    onChange={handleChange}/>
          </div>
          <div className="mb-4">
            <label htmlFor="complaint" className="block text-white text-sm font-bold mb-2">Inquiry</label>
            <textarea id="complaint" name="complaint" className="w-full px-3 py-2 border rounded-md focus:outline-none bg-gray-900 h-40 text-white"   value={formData.complaint}
                    onChange={handleChange}></textarea>
          </div>
          {error && (
                <div className="text-red-600 text-sm">
                    {error}
                </div>
            )}
          <button type="submit" disabled={isLoading} className="w-full bg-white  text-black py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500">{isLoading ? 'Submitting...' : 'Submit'}</button>
        </form>
      </div>
    </div>
  )
}

export default Page