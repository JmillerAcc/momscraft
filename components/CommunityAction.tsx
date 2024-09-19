import React from 'react'
import { ExpandableCardDemo } from './ui/ExpandableCards'

const CommunityAction = () => {
  return (
    <div className='p-2'>
        <div className=' rounded-xl p-3 flex flex-col break-words'>
            <h1 className="text-3xl font-bold text-center mb-2">
                &quot;But be <span className='text-purple font-bold'>doers</span> of the word, and not <span className='text-purple font-bold'>hearers</span> only, deceiving yourselves&quot; <span className='text-base font-light italic block md:inline mt-3 md:mt-0'>~James 1:22~</span>
            </h1>
           <div className='flex justify-center items-center h-full'>
                <p className="text-lg p-3 w-full max-w-5xl text-center">
                    Inspired by James 1:22, the Crafting <span className='text-purple font-bold'>Joy</span> community aims to exemplify <span className='text-purple font-bold'>Christian outreach.</span> We invite you to explore our upcoming and ongoing projects. If you feel called to serve, please contact Lavonne for guidance.
                </p> 
            </div>
            <div>
            </div>

        </div>
            <div className='mt-5 opacity-90' id='projects'>
                <ExpandableCardDemo />
            </div>   
    </div>
  )
}

export default CommunityAction