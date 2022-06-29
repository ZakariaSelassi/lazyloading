import React, { lazy, Suspense } from 'react'

// lazy loading 
const About = lazy(() => import('./About'))

const Home = () => {
  return (
    <div>
        <h1>Home Page</h1>
        <Suspense fallback={<div>Loading...</div>}>
            <About />
        </Suspense>
    </div>
  )
}

export default Home