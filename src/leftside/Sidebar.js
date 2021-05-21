import React from 'react'

const Sidebar = () => {
    return (
        <div className="flex justify-center " >

        <div className="text-blue-500">
            <a href = "#" className='flex items-center space-x-2 pr-5 pt-10 pl-8'  >🚀
            <span className ='px-2 text-2xl'>
                dev
            </span>
            </a>
           
            <div>
              <nav className='pl-8 pt-6 text-2xl'>HOME</nav>
          </div>
          <div>
              <nav className='pl-8 pt-6 text-2xl'>HOME</nav>
          </div>
          <div>
              <nav className='pl-8 pt-6 text-2xl'>HOME</nav>
          </div>
          <div>
              <nav className='pl-8 pt-6 text-2xl'>HOME</nav>
          </div>
          
          <a href = "#" className='flex items-center space-x-2 pr-5 pt-10 pl-8'  >🚀
            <span className ='p-2 text-2xl'>
                添加
            </span>
            </a>
        </div>
        
        </div>
    )
}

export default Sidebar
