import { writable } from "svelte/store"

function createEntriesCounter(){

    const counter = {
        "correct": 0,
        "corrected": 0,
        "error": 0,
        "total": 0,
    }

    const { subscribe, set, update } = writable(counter);

    return {
        subscribe,
        increment: (key) => {
            counter[key]++
            counter.total++
            set(counter)
        },
        decrement: (key) => {
            counter[key]--
            counter.total--
            set(counter)
        },
        reset: () => {
            for (let key in counter){
                counter[key] = 0;
            }
        }
    }
}

export const entries = createEntriesCounter()

