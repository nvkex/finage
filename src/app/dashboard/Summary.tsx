'use client'

import Button from '@/components/Atomic/Button'
import { CalendarIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/16/solid'
import { NextPage } from 'next'
import { addExpense } from './service'

interface Props {
    data: object
}

interface CellProps {
    title: string;
    value: string;
    change?: {
        value: string;
        invert?: boolean;
    } | null;
}

const Cell: React.FC<CellProps> = ({ title, value, change = null }) => {
    let changeConfigs = null
    if (change)
        changeConfigs = {
            text: parseInt(change.value) > 0 && !change.invert ? 'text-green-700' : 'text-red-700',
            icon: parseInt(change.value) > 0 ? <ChevronUpIcon width={14} style={{ display: "unset" }} /> : <ChevronDownIcon width={14} style={{ display: "unset" }} />
        }
    return (
        <div>
            <span className="text-slate-500">{title}: </span>
            <span>₹{value} </span>
            {
                changeConfigs ? (
                    <span className={changeConfigs.text}>
                        ({changeConfigs.icon}₹{change?.value})
                    </span>
                ) : (<></>)
            }
        </div>
    )
}

const Summary: NextPage<Props> = ({ data = {} }) => {
    console.log({ data })
    return (
        < div className='w-[80%] m-auto border-b text-sm border-slate-500 py-1 flex justify-between items-center' >
            <div className='flex items-center'>
                <CalendarIcon width={16} style={{ display: "unset" }} />
                <span className='ml-1'>January</span>
            </div>
            <Cell title={"Expense"} value={"40,000"} change={{ value: "10,000", invert: true }} />
            <Cell title={"Income"} value={"3,00,000"} change={{ value: "2,00,000", invert: false }} />
            <Cell title={"Balance"} value={"2,60,000"} />
            <div>
                <Button onClick={addExpense}>Add</Button>
            </div>
        </div >
    )
}

export default Summary