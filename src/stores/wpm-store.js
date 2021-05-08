
import { derived, get, writable } from "svelte/store";
import { entries } from "./entries-store";
import { timer } from "./Timer";


// function grossWpm(total, seconds){
//     return Math.round((total/5)/(seconds/60))
// }

// function netWpm(gross, error, seconds){
//     return Math.round(gross - error/(seconds/60))
// }

// const initialValue = {
//     net: 0,
//     gross: 0,
// }

// export const wpm = derived(
//     [timer, entries],
//     ([$timer, $entries]) => {
//         if ($timer.elapsed === 0) return initialValue;
//         let gross = grossWpm($entries.total, $timer.elapsed)
//         let net = netWpm(gross, $entries.error, $timer.elapsed)
//         return {net, gross};
//     },
//     initialValue
// )

//chars per seconds => words per minute
const cps2wpm = (cps) => cps*12

let arr = []

export const currentWpm = derived(entries, ($entries, set)=>{
    arr.push(Date.now())
    const interval = setInterval(()=>{
        let now = Date.now()
        arr = arr.filter(timeStamp => now - timeStamp < 1000)

        set(cps2wpm(arr.length))
    }, 10)
}, 0)

// export const currentWpm = writable(10)