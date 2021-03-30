import React from 'react'
import s from './Preloader.module.css'

const Preloader: React.FC = () => {
   return (
      <>
         <div className={s.loader}>
            <div>
            </div>
            <div>
            </div>
            <div>
            </div>
            <div>
            </div>
         </div>
      </>
   )
}
export default Preloader