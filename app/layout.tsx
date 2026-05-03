import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Prompt Version Optimizer — A/B Test AI Prompts with Cost Tracking',
  description: 'Compare prompt variations side-by-side, track performance metrics, and calculate cost-per-quality ratios across different AI models.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e4cd60ce-ce30-4d72-9664-3095b258c1c8"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
