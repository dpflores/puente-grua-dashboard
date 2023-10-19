import React from 'react'
import FrenquencyChart from './charts/FrenquencyChart'
import CumulatedFrenquencyChart from './charts/CumulatedFrenquencyChart'
import BellChart from './charts/BellChart'

export default function EstatusMensual1() {
  return (
    <div className="grid grid-cols-2 w-full gap-4 p-4">
        
        <div className="col-span-1 flex flex-col gap-4">
           
            <FrenquencyChart />
            <BellChart />
            

        </div>

        <div className="col-span-1 flex flex-col gap-4">
           
            <CumulatedFrenquencyChart />
            <BellChart />
            
        </div>
            
    </div>
  )
}
