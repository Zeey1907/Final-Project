import React from 'react'
import './Section.css'
import hand from '../../assets/hand1.svg'
import lin from '../../assets/Line 4.svg'
import two from '../../assets/handa.svg'
import hand2 from '../../assets/hand2.svg'
import Line1 from '../../assets/Line 1.svg'

const Section = () => {
  return (
    <div className='sect-cont'>
        <div className='sect-div'>
            <h4 className='sect-h4'>Choose your Investment Plans </h4>
            <p className='sect-p'>
                Sed id curabitur tempus eget. Arcu rhoncus, pellentesque malesuada
            </p>
        </div>
        <section className='sect-section'>
            <div className='sect-card'>
             <img src={hand}   alt="hand" className='sect-image'/>
             <p className='sect-p1'>
                Regular Package
             </p>
             <img src={lin} alt='line' className='sect-line'/>
             <p className='sect-p2'> 
                # 50,000
             </p>
             <p className='sect-p3'>
                1 Month Investment
             </p>
             <p className='sect-p4'>
                20% ROI
             </p>
             <p className='sect-p5'>
                Money Gurantee
             </p>
             <button className='sect-button'>Proceed</button>

            </div>
            <div className='sect-card'>
               <img src={two}  alt="hand" className='sect-image'/> 
                <p className='sect-p1'>
                Regular Package
             </p>
             <img src={lin} alt='line' className='sect-line'/>
             <p className='sect-p2'> 
                # 50,000
             </p>
             <p className='sect-p3'>
                1 Month Investment
             </p>
             <p className='sect-p4'>
                20% ROI
             </p>
             <p className='sect-p5'>
                Money Gurantee
             </p>
             <button className='sect-button'>Proceed</button>


            </div>
            <div className='sect-card'>
               <img src={hand2} alt="hand" className='sect-image'/> 
                <p className='sect-p1'>
                Regular Package
             </p>
             <img src={lin} alt='line' className='sect-line'/>
             <p className='sect-p2'> 
                # 50,000
             </p>
             <p className='sect-p3'>
                1 Month Investment
             </p>
             <p className='sect-p4'>
                20% ROI
             </p>
             <p className='sect-p5'>
                Money Gurantee
             </p>
             <button className='sect-button'>Proceed</button>

            </div>
        </section>
        <div className='testimony'>
            <h5>
                Testimonials
            </h5>
            {/* <img src={Line1} alt='line' className='sect-line1'/> */}
            <p>
                “I came across Jassper Enterprise through a friends page and since I have been patronizing they are very reliable and fast ‘ good customer services and polite attendance ‘ big ups to them , u guys should try them out too you won’t regret it”
            </p>
            <h6>
                Tobbey
            </h6>
        </div>

    </div>
  )
}

export default Section