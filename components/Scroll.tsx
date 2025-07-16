// components/ScrollFadeIn.tsx
import { motion, useAnimation, Variants } from "framer-motion"
import { useEffect, useRef } from "react"
import { useInView } from "framer-motion"

interface ScrollFadeInProps {
  children: React.ReactNode
  direction?: 'up' | 'down' | 'left' | 'right'
  delay?: number
  duration?: number
  distance?: number
  className?: string
}

export default function ScrollFadeIn({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 0.6, 
  distance = 50,
  className = "" 
}: ScrollFadeInProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-50px" })
  const controls = useAnimation()

  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: distance }
      case 'down':
        return { opacity: 0, y: -distance }
      case 'left':
        return { opacity: 0, x: distance }
      case 'right':
        return { opacity: 0, x: -distance }
      default:
        return { opacity: 0, y: distance }
    }
  }

  useEffect(() => {
    if (inView) {
      controls.start({ 
        opacity: 1, 
        x: 0, 
        y: 0,
        transition: { 
          duration, 
          delay, 
          ease: "easeOut" 
        }
      })
    }
  }, [inView, controls, duration, delay])

  return (
    <motion.div
      ref={ref}
      initial={getInitialPosition()}
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Additional animation variants for different effects
export const ScaleIn = ({ 
  children, 
  delay = 0, 
  duration = 0.6,
  className = "" 
}: { 
  children: React.ReactNode, 
  delay?: number, 
  duration?: number,
  className?: string 
}) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-50px" })
  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start({ 
        opacity: 1, 
        scale: 1,
        transition: { 
          duration, 
          delay, 
          ease: "easeOut" 
        }
      })
    }
  }, [inView, controls, duration, delay])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const StaggerContainer = ({ 
  children, 
  staggerDelay = 0.1,
  className = "" 
}: { 
  children: React.ReactNode, 
  staggerDelay?: number,
  className?: string 
}) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-50px" })

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const StaggerItem = ({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode,
  className?: string 
}) => {
  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  )
}