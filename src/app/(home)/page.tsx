import React from 'react'
import MainBg from '@/components/spline/spline'
import About from '@/components/blocks/about'
import Sponsors from '@/components/blocks/sponsors'
import Events from '@/components/blocks/events'

function Page() {
  return (
    <div>
      <MainBg/>
      <About/>
      <Events/>
      <Sponsors/>
    </div>
  )
}

export default Page