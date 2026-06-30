import { createContext, useContext } from 'react'

// Lets any component trigger the app-level page-transition "warp" overlay.
export const WarpContext = createContext(() => {})
export const useWarp = () => useContext(WarpContext)
