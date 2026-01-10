"use client"
import { useState } from 'react'
import AdBanner from '../components/AdBanner'

export default function Home() {
  const [url, setUrl] = useState('')
  const [result, setResult] = useState('')

  const handleShorten = (e) => {
    e.preventDefault()
    const encoded = btoa(url) 
    setResult(`${window.location.origin}/step1?d=${encoded}`)
  }

  return (
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-5xl font-extrabold text-gray-900 mb-6">Shorten Your Links.</h2>
      <p className="text-xl text-gray-600 mb-10">Safe, fast, and optimized for global sharing.</p>
      
      <form onSubmit={handleShorten} className="bg-white p-2 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-2 border border-gray-100 mb-10">
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
        <div className="mt-8 p-6 bg-green-50 border-2 border-green-200 rounded-2xl animate-pulse">
          <p className="font-bold text-green-800 mb-2">Your Shortened Link:</p>
          <code className="text-xl text-blue-600 break-all">{result}</code>
        </div>
      )}

      <AdBanner />
    </div>
  )
}
