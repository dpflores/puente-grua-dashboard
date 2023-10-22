import React, { useState } from 'react'

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
                <div className='flex flex-1 text-komatsu-blue text-xl'><Hourmeter/></div>
           
            </div>

        </div>
        
    </div>
  )
}


export function Hourmeter() {
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
  
    // Función para formatear los minutos y las horas con dos dígitos
    const formatTime = (value) => value.toString().padStart(2, '0');
  
    return (
      <div className="flex flex-row">
        <div className="hour">
          <span id="hourDisplay">{formatTime(hours)}</span>
        </div>
        <div className="separator">:</div>
        <div className="minute">
          <span id="minuteDisplay">{formatTime(minutes)}</span>
        </div>
      </div>
    );
  }