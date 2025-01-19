'use client'

import { CalendarIcon } from "@heroicons/react/16/solid";
import Summary from "./Summary";

export default function Dashboard() {
    return <main>
        <Summary data={{}} />
        <div className="mt-4">
            <div className="p-4 border-2 border-slate-800 min-w-[4rem] min-h-[4rem] w-[16rem]">
                <div className="text-lg border-b border-slate-800 mb-2">Monthly Statistics</div>
                <div className="flex items-center">
                    <CalendarIcon width={16} style={{ display: "unset" }} />
                    <span className="ml-1">Jan</span>
                </div>
                <div className="text-sm m-2">
                    <table className="w-full">
                        <tbody>
                            <tr>
                                <td className="text-slate-500">Expense</td>
                                <td className="float-right">₹21,515</td>
                            </tr>
                            <tr>
                                <td className="text-slate-500">Income</td>
                                <td className="float-right">₹90,000</td>
                            </tr>
                            <tr>
                                <td className="text-slate-500">Balance</td>
                                <td className="float-right">₹68,485</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </main>
}