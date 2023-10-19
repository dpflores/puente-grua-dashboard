import React from 'react'

export default function Description() {
  return (
    <div className='bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-2'>
        <strong className='text-gray-700 font-medium'>Descripción del dispositivo</strong>
        <div className='mt-20  mx-20   items-justify flex flex-col'>
    
            <div className='flex flex-row my-5'>
                <div className='flex flex-1 mr-10'>Equipo: </div>
                <div className='flex flex-1 '>Puente Grúa</div>
           
            </div>
            <div className='flex flex-row my-5'>
                <div className='flex flex-1 mr-10'>Ubicación: </div>
                <div className='flex flex-1 '>Taller Principal</div>
           
            </div>

            <div className='flex flex-row my-5'>
                <div className='flex flex-1 mr-10'>Tensión: </div>
                <div className='flex flex-1 '>220V/60Hz</div>
           
            </div>

            <div className='flex flex-row my-5'>
                <div className='flex flex-1 mr-10'>Estatus: </div>
                <div className='flex flex-1 text-green-700'>Operando</div>
           
            </div>


            <div className='flex flex-row my-5'>
                <div className='flex flex-1 mr-10'>Horómetro: </div>
                <div className='flex flex-1'><Hourmeter/></div>
           
            </div>

        </div>
        
    </div>
  )
}


export function Hourmeter() {
    return (
        <div class="flex flex-row">
            <div class="hour">
            <span id="hourDisplay">00</span>
            </div>
            <div class="separator">:</div>
            <div class="minute">
            <span id="minuteDisplay">00</span>
            </div>
      
        </div>
    )

}