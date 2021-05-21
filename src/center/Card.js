import React from 'react'

const Card = (props) => {
    return (
        <div className='flex justify-center'>
        
        <div className="inline-block my-10  w-4/5 h-100 bg-gray-200 ">
            <div className='px-5 py-5'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFX9GSPm6VlPFiQkZvd_Jh6bAYaWwxvVuoFA&usqp=CAU" className="w-full"/>
            <h3>{props.name}</h3>
            <h4>{props.genre}--{props.year}</h4>
            </div>
            
        </div>
        </div>
         
      
    )
}

export default Card
