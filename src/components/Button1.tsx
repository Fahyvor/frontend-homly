"use client"
import React from 'react'
import { AiOutlineCaretDown } from 'react-icons/ai';

type Props = {
    text: string;
}

export default function Button1(props: Props) {

    const { text } = props;
  return (
    <div className='flex gap-3 rounded-2xl px-2 items-center
    justify-center button_one_container text-sm cursor-pointer'>
      <h1>{text}</h1>
      <AiOutlineCaretDown />
    </div>
  )
}