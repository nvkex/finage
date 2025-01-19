import { CalendarIcon } from "@heroicons/react/16/solid";
import Summary from "./Summary";

export default function Dashboard() {
    return <main>
        <Summary data={{}} />
        <div className="mt-4">
            <div className="p-4 border-2 border-slate-800 min-w-[4rem] min-h-[4rem] w-[16rem]">
                <div className="text-lg border-b border-slate-800 mb-2">Monthly Statistics</div>
                <div className="flex items-baseline">
                    <CalendarIcon width={16} style={{ display: "unset" }} />
                    <span>Jan</span>
                </div>
                <div className="text-sm m-2">
                    <div><span className="text-slate-600">Expense: </span>₹21,515</div>
                    <div><span className="text-slate-600">Income: </span>₹90,000</div>
                    <div><span className="text-slate-600">Balance: </span>₹68,485</div>
                </div>
            </div>
        </div>
    </main>
}