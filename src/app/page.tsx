import Image from 'next/image';
import desktopbg from './assets/background-pattern-desktop.svg'
import mobilebg from './assets/background-pattern-mobile.svg'
import starIcon from './assets/images/icon-star.svg'
import Accordion from './component/accordion';
import { faqs } from './data';


export default function Home() {
  return (
    <main className='bg-purple-100 min-h-screen relative p-4 pb-10'>
      <Backgroundimg/>
      
      <section className='bg-white rounded-lg relative transition-all mx-auto max-w-xs sm:max-w-2xl flex flex-col gap-4 mt-40 sm:mt-24 p-5 '>
        <h1 className='flex gap-3 items-center'>
          <Image src={starIcon} 
          alt='' className='h-6 w-auto'/>
          <span className='text-4xl font-bold'>FAQs
          </span>
        </h1>
        <div className='flex flex-col gap-4 divide-y'>
          {faqs.map((d,i) =>(
            <Accordion 
            answer={d.answer}
            question={d.question}
            open={d.open}
            key={i}/> 
          ))}
          </div>
      </section>
      
      
    </main>
  );
}


function Backgroundimg() {
  return (
    <div className='flex h-auto absolute top-0 left-0 w-full'>
    <Image 
      src={desktopbg}
      alt=''
      className='w-full h-full object-cover hidden md:block'
    />
    <Image 
      src={mobilebg}
      alt=''
      className='w-full h-full object-cover md:hidden'
    />
  </div>
  )
}
