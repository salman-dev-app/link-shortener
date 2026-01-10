"use client"
import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

function Step3Content() {
  const searchParams = useSearchParams()
  const d = searchParams.get('d')
  const finalLink = typeof window !== 'undefined' && d ? atob(d) : '#'

  return (
    <div className="max-w-3xl mx-auto text-center">
      <div className="w-full h-80 bg-gray-100 mb-10 flex items-center justify-center border-4 border-double">
        <span className="text-gray-400 font-bold text-2xl">FINAL AD SPACE (300x600)</span>
      </div>
      <h2 className="text-4xl font-black text-gray-900 mb-4">Ready to Go!</h2>
      <p className="text-gray-500 mb-8">Thank you for using our service.</p>
      <a 
        href={finalLink}
        className="inline-block bg-green-600 text-white px-20 py-6 rounded-full text-2xl font-bold shadow-2xl hover:bg-green-700 hover:scale-105 transition-all"
      >
        GET YOUR LINK
      </a>
    </div>
  )
}

export default function Step3() {
  return <Suspense><Step3Content /></Suspense>
}
