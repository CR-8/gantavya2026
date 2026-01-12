import React from 'react'
import Hero from '@/components/layout/hero'
import About from '@/components/blocks/about'
import Gallery from '@/components/blocks/gallery'
import Sponsors from '@/components/blocks/sponsors'
import Events from '@/components/blocks/events'
import FAQ from '@/components/blocks/faq'

function Page() {
  return (
    <div>
      <Hero/>
      <About/>
      <Gallery/>
      <Events/>
      <Sponsors/>
      <FAQ/>
    </div>
  )
}

export default Page