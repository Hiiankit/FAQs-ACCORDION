"use client"
import PropTypes from 'prop-types';
import Plus from '@/app/assets/images/icon-plus.svg';
import Minus from '@/app/assets/images/icon-minus.svg';
import Image from 'next/image';
import { useState } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';

type Props = {
    open?: boolean;
    question: string;
    answer: string;
};

export default function Accordion(props: Props) {
    const [animationParent] = useAutoAnimate();
    const [open, set] = useState(props.open || false);
function togle() {
    set(!open);
}

  return (
    <div ref={animationParent} className='gap-4 flex flex-col py-4 '>
        <p
        onClick={togle}
        className='flex justify-between sm:text-lg font-semibold cursor-pointer gap-2'> 
        <span>{props.question}</span> 
        {open ? (
            <Image className='w-auto h-6' src={Minus} alt='' />
        ):(
            <Image className='w-auto h-6' src={Plus} alt='' />
        )}
            
        </p>
        {open && (
            <p className='text-sm sm:text-base text-gray-400'>{props.answer}
            </p>
        )}
        
    </div>
  )
}


