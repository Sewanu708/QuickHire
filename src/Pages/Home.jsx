import React from 'react'
import Hero from '../Components/Hero'
import Stats from '../Components/Stats'
import JobPosted from '../Components/JobPosted'
import LatestJob from '../Components/LatestJob'
import KnowMore from '../Components/KnowMore'
import Brands from '../Components/Brands'

function Home() {
    return (
        <div>
            <Hero />
            <Stats />
            <JobPosted />
            <LatestJob />
            <KnowMore />
            <Brands />
        </div>
    )
}

export default Home