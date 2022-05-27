import React from 'react'
import './OurStatistics.css'

function OurStatisticsNum(props) {
  return (
    <>
        {
            props.item.map(
                stat => (
                    <div className="col-12 col-md-3 pb-5 mb-3">
                        <div className="text-center text-white">
                            <p className='display-3'>{stat.number}+</p>
                            <h4>{stat.title}</h4>
                        </div>
                    </div>
                )
            )
        }
    </>
  )
}

export default OurStatisticsNum