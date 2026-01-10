"use client";

import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

function About() {
  const textRef = useRef<HTMLParagraphElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (!textRef.current || !containerRef.current) return

    // 1. Split the text into characters and words
    const type = new SplitType(textRef.current, {
      types: 'chars,words',
      tagName: 'span'
    })

    // 2. The Animation
    // We target type.chars so every letter animates individually
    gsap.from(type.chars, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%', // Animation starts when top of text hits 80% of viewport
        end: 'top 10%',   // Animation ends when top of text hits 10% of viewport
        scrub: true,      // Links animation progress to scroll bar
        markers: false,   // Set to true if you want to see debug markers
      },
      opacity: 0.1,       // Start slightly transparent
      stagger: 0.03,      // Delay between each character
      color: 'var(--color-text-tertiary)'    // Start with a greyed out color
    })

    // 3. Cleanup
    // Essential in React: Revert text back to normal string when component unmounts
    return () => {
      type.revert()
    }
  }, [])

  return (
    <section className='relative w-screen h-screen bg-background'>
        <div className='anime-text-container'>
            <div className='copy-container w-full h-full flex m-8 pl-8 '>
                <div className='anime-text max-w-5xl'>
                    {/* Added ref={textRef} here to target this specific paragraph */}
                    <p 
                      ref={textRef} 
                      className='text-tertiary text-left mb-2xl text-5xl font-black leading-tight tracking-tighter'
                    >
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque quasi, sed sunt vel commodi labore molestiae facere, libero quam optio perspiciatis unde possimus reprehenderit magni esse harum corporis laudantium incidunt totam accusamus eius. Sint, magni labore quas illum laborum reprehenderit! Explicabo molestias minima exercitationem laboriosam quas, impedit inventore tenetur nobis!
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About;