import { useEffect, useState } from 'react'

export const useShowOnScroll = yPositionTrigger => {
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const newShowFixed = window.scrollY > yPositionTrigger
      if (showFixed !== newShowFixed) setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  return [showFixed]
}
