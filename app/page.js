"use client"
import { useState } from 'react'

export default function Home() {
  const [url, setUrl] = useState('')
  const [result, setResult] = useState('')

  const handleShorten = (e) => {
    e.preventDefault()
    const encoded = btoa(url) // Basic encoding for demo
    setResult(`${window.location.origin}/step1?d=${encoded}`)
  }

  return (
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-5xl font-extrabold text-gray-900 mb-6">Shorten Links. Share Anywhere.</h2>
      <p className="text-xl text-gray-600 mb-10">Professional grade URL management with advanced tracking.</p>
      
      <form onSubmit={handleShorten} className="bg-white p-2 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-2 border border-gray-100">
        <input 
          type="url" required placeholder="Paste your long link here..." 
          className="flex-grow p-4 text-lg outline-none rounded-xl"
          onChange={(e) => setUrl(e.target.value)}
        />
        <button className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all">
          Shorten Now
        </button>
      </form>

      {result && (
        <div className="mt-8 p-6 bg-blue-50 border-2 border-blue-200 rounded-2xl animate-bounce">
          <p className="font-bold text-blue-800 mb-2">Your Short Link:</p>
          <code className="text-xl text-blue-600 break-all">{result}</code>
        </div>
      )}

      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        <div className="p-6 bg-white rounded-xl shadow-sm border">
          <h4 className="font-bold mb-2">Fast Redirects</h4>
          <p className="text-gray-500 text-sm">Our servers ensure 99.9% uptime and lightning speed.</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-sm border">
          <h4 className="font-bold mb-2">Secure Cloud</h4>
          <p className="text-gray-500 text-sm">All links are scanned for malware and phishing.</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-sm border">
          <h4 className="font-bold mb-2">Analytics</h4>
          <p className="text-gray-500 text-sm">Track every click with our advanced dashboard.</p>
        </div>
      </div>
    </div>
  )
    }
