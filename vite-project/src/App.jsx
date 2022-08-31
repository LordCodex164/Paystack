import { Navbar,Hero, Stats, Business,CardDeal, Billing, Clients, Testimonials, Footer } from './Components/index'

function App() {
  

  return (
    <>
      <div className='bg-primary w-full overflow-hidden'>
       <div className=' flex justify-center items-center px-6 sm:px-16 px-6'>
         <div className='w-full xl:w-[1280px] '>
         <Navbar/>
         </div>
      </div>  
     </div>

     <div className='bg-primary flex justify-center sm:px-16 px-6'>
      <div className='box-width w-full xl:w-[1480px]'> 
         <Hero/>
      </div>
     </div>

     <div className='bg-primary flex justify-center sm:px-16 px-6'>
      <div className='box-width w-full xl:w-[1480px]'> 
      <Stats/> 
      <Business/>
      <Billing/>
      <CardDeal/>
      <Testimonials/>
      <Clients/>
      <Footer/>
      </div>
     </div>
    </>
  )
}

export default App