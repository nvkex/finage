import Button from '@/components/Atomic/Button'
import { ChevronUpIcon } from '@heroicons/react/16/solid'
import { NextPage } from 'next'

interface Props {
    data: object
}

const Summary: NextPage<Props> = ({ data = {} }) => {
    console.log({ data })
    return (
        < div className='w-[60%] m-auto border-b text-sm border-slate-500 py-1 flex justify-between items-baseline' >
            <div>
                <span>Expense: </span>
                <span>₹40,000 </span>
                <span className='text-red-600'>(<ChevronUpIcon width={14} style={{ display: "unset" }} />₹10,000)</span>
            </div>
            <div>
                <span>Income: </span>
                <span>₹3,00,000 </span>
                <span className='text-green-600'>(<ChevronUpIcon width={14} style={{ display: "unset" }} />₹2,00,000)</span>
            </div>
            <div>
                <Button>Add</Button>
            </div>
        </div >
    )
}

export default Summary