import React from 'react'
import './OurStatistics.css'
import OurStatisticsNum from './OurStatisticsNum'

const statsData = [
    {
        'title': 'Club',
        'number': '1240'
    },
    {
        'title': 'Active Member',
        'number': '2000'
    },
    {
        'title': 'Community',
        'number': '1.000'
    }
]

function OurStatistics() {
  return (
    <>
        <div className="container-fluid" id='our-statistics'>
            <div className="row">
                <div className='col-12 mb-3'>
                    <div className='text-white text-center pt-5' id='our-statistics__text'>
                        <h1 className='pb-5'>Our Statistics</h1>
                        <p className='pb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Vivamus lacinia odio vitae vestibulum vestibulum.</p>
                    </div>
                </div>
                <div className='row justify-content-center'>
                <OurStatisticsNum item = {statsData}/>
                </div>
            </div>
        </div>
    </>
  )
}

export default OurStatistics