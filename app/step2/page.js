"use client"
import { useState, useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

function Step2Content() {
  const [count, setCount] = useState(10)
  const router = useRouter()
  const searchParams = useSearchParams()
  const d = searchParams.get('d')

  useEffect(() => {
    if (count > 0) {
      const t = setTimeout(() => setCount(count - 1), 1000)
      return () => clearTimeout(t)
    }
  }, [count])

  return (
    <div className="max-w-4xl mx-auto text-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="h-40 bg-gray-100 flex items-center justify-center rounded">SQUARE AD #2</div>
        <div className="h-40 bg-gray-100 flex items-center justify-center rounded">SQUARE AD #3</div>
      </div>
      <div className="bg-white p-10 rounded-3xl shadow-lg border max-w-lg mx-auto">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">Please Wait...</h2>
        <p className="text-gray-400 mb-6">Your link is being encrypted.</p>
        <div className="text-6xl font-black text-blue-600 mb-8">{count}s</div>
        <button 
          disabled={count > 0}
          onClick={() => router.push(`/step3?d=${d}`)}
          className={`w-full py-4 rounded-xl font-bold text-xl transition ${count > 0 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-blue-600 text-white shadow-xl hover:bg-blue-700'}`}
        >
          {count > 0 ? "Loading Link..." : "Click to Continue"}
        </button>
      </div>
    </div>
  )
}

export default function Step2() {
  return <Suspense><Step2Content /></Suspense>
}
