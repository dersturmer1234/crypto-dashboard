import React from 'react'
import Navbar from '../_components/Navbar'

interface MainLayoutProps {
    children: React.ReactNode   
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="h-full flex-shrink-0 overflow-y-scroll flex-col">
        <Navbar />
      <main className="flex-grow justify-center">
        {children}
      </main>
    </div>
  )
}

export default MainLayout
