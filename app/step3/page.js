"use client"
import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import AdBanner from '../../components/AdBanner'

function Step3Content() {
  const searchParams = useSearchParams()
  const d = searchParams.get('d')
  const finalLink = typeof window !== 'undefined' && d ? atob(d) : '#'

  return (
    <div className="max-w-2xl mx-auto text-center bg-white p-10 rounded-3xl shadow-xl border">
      <AdBanner />
      <h2 className="text-3xl font-black mb-8">Link is ready!</h2>
      <a 
        href={finalLink}
        className="inline-block bg-blue-600 text-white px-16 py-6 rounded-full text-2xl font-bold hover:scale-105 transition-all"
      >
        REDIRECT NOW
      </a>
      <div className="mt-10"><AdBanner /></div>
    </div>
  )
}

export default function Step3() { return <Suspense><Step3Content /></Suspense> }
