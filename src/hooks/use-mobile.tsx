
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(false)

  React.useEffect(() => {
    // Initial check based on window width
    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    // Check mobile on initial render
    checkMobile()
    
    // Debounced resize handler with shorter timeout for more responsiveness
    let resizeTimer: number;
    const handleResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = window.setTimeout(() => {
        checkMobile()
      }, 50) // Reduced from 100ms to 50ms for faster response
    }
    
    // Add event listener with debounced handler
    window.addEventListener("resize", handleResize)
    
    // Check again after component is fully mounted
    const initialCheckTimer = setTimeout(checkMobile, 100)
    
    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      clearTimeout(resizeTimer)
      clearTimeout(initialCheckTimer)
    }
  }, [])

  return isMobile
}
