'use client';
import { useState } from 'react';

function Counter() {
    const [num, setNum] = useState(0)

    const handlePlus = () =>{
        setNum(p => p + 1)
    }

    const handleMinus = () =>{
        if(num > 0){
            setNum(p => p - 1)
        }
    }

	return (
		<div className={'flex mx-2 items-center h-24'}>
			<button onClick = {handlePlus} className={`w-1/5 rounded-r-lg h-full bg-prime-orange text-center text-4xl font-bold text-prime-white`}>+</button>
            <div className={"w-3/5 bg-gray-500 text-white flex items-center justify-center text-center text-4xl h-full"}>{num}</div>
			<button onClick = {handleMinus} className={`w-1/5 items-center rounded-l-lg h-full bg-prime-orange text-center text-4xl font-bold text-prime-white`}>-</button>
		</div>
	);
}

export default Counter;
