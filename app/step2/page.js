"use client"
import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

export default function Step2() {
  const [count, setCount] = useState(8)
  const router = useRouter()
  const d = useSearchParams().get('d')

  useEffect(() => {
    if (count > 0) setTimeout(() => setCount(count - 1), 1000)
  }, [count])

  return (
    <div className="max-w-4xl mx-auto text-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="h-40 bg-gray-200 flex items-center justify-center rounded">ADS 2</div>
        <div className="h-40 bg-gray-200 flex items-center justify-center rounded">ADS 3</div>
      </div>
      <div className="bg-white p-10 rounded-3xl shadow-lg border max-w-lg mx-auto">
        <h2 className="text-2xl font-bold mb-4">Processing Link...</h2>
        <div className="w-20 h-20 border-8 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
        <p className="text-4xl font-black text-gray-800 mb-6">{count}s</p>
        <button 
          disabled={count > 0}
          onClick={() => router.push(`/step3?d=${d}`)}
          className={`w-full py-4 rounded-xl font-bold text-white transition ${count > 0 ? 'bg-gray-400' : 'bg-green-600 shadow-xl'}`}
        >
          {count > 0 ? "Wait..." : "Click to Continue"}
        </button>
      </div>
    </div>
  )
    }
