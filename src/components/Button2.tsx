import React from 'react'

type Props = {
    text: string
}

const Button2 = (props: Props) => {

    const { text } = props;

  return (
    <div className='button_two_container 
    text-center py-1 text-white rounded-3xl px-1'>
        <h2 className='text-xs'>{text}</h2>
    </div>
  )
}

export default Button2