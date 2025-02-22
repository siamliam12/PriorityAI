import React from 'react'

function page() {
  const ticketNumber = Math.floor(100000 + Math.random() * 900000);
  return (
    <div className="flex flex-col h-screen justify-center items-center bg-gray-900">
      <div className="flex flex-col items-center mb-4">
        <h1 className="text-2xl font-bold text-white mb-2">Inquiry Form</h1>
        <span className='text-white'>Ticket Number: {ticketNumber}</span>
      </div>
      <div className="w-full max-w-2xl p-4 shadow-md rounded bg-gray-800">
        <form className="flex flex-col">
          <div className="mb-4">
            <label htmlFor="title" className="block text-white text-sm font-bold mb-2">Title</label>
            <input type="text" id="title" name="title" className="w-full px-3 py-2 border rounded-md focus:outline-none bg-gray-900" />
          </div>
          <div className="mb-4">
            <label htmlFor="blog" className="block text-white text-sm font-bold mb-2">Inquiry</label>
            <textarea id="blog" name="blog" className="w-full px-3 py-2 border rounded-md focus:outline-none bg-gray-900 h-40"></textarea>
          </div>
          <button type="submit" className="w-full bg-white  text-black py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default page