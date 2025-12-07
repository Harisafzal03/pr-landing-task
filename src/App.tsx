import React, { useEffect, useState } from "react"
import { PageContent } from "./types/content"
import { Navbar } from "./components/sections/Navbar"
import { Hero } from "./components/sections/Hero"
import { Section } from "./components/sections/Section"
import { Pricing } from "./components/sections/Pricing"
import { Footer } from "./components/sections/Footer"

function App() {
  const [content, setContent] = useState<PageContent | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch("/content.json")
      .then((res) => res.json())
      .then((data: PageContent) => setContent(data))
      .catch((e) => setError(e.message))
  }, [])

  if (error) return <div className="p-6">Failed to load content: {error}</div>
  if (!content) return <div className="p-6">Loading...</div>

  return (
    <div className="min-h-screen bg-white">
      <Navbar data={content.navbar} />
      <Hero data={content.hero} />
      <Section id="how-it-works" data={content.howItWorks} yellowTop />
      <Section id="pr-crm" data={content.prCrm} />
      <Section id="leads-warning" data={content.leadsWarning} />
      <Pricing data={content.pricing} />
      <Footer data={content.footer} />
    </div>
  )
}

export default App