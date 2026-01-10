"use client"
import { useState, useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import AdBanner from '../../components/AdBanner'

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
    <div className="max-w-lg mx-auto text-center bg-white p-10 rounded-3xl shadow-lg border">
      <AdBanner />
      <h2 className="text-2xl font-bold mb-2">Processing Security...</h2>
      <div className="text-6xl font-black text-blue-600 my-8">{count}s</div>
      <button 
        disabled={count > 0}
        onClick={() => router.push(`/step3?d=${d}`)}
        className={`w-full py-4 rounded-xl font-bold text-xl ${count > 0 ? 'bg-gray-200 text-gray-400' : 'bg-green-600 text-white shadow-xl'}`}
      >
        {count > 0 ? "Please Wait..." : "Get Link"}
      </button>
    </div>
  )
}

export default function Step2() { return <Suspense><Step2Content /></Suspense> }
