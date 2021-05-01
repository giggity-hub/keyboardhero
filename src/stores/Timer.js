import { writable, get } from "svelte/store";


function createTimer(){

    let duration = 60

    const time = {
        elapsed: 0,
        remaining: duration,
        isRunning: false,
        duration: duration,
    }

    const {subscribe, set, update} = writable(time)

    const updateTime = () => {
        update(t => {
            t.elapsed++
            t.remaining--
            t.isRunning = true
            return t
        })
    }

    const resetTimer = () => {
        update(t => {
            t.isRunning = false;
            t.remaining = duration;
            t.elapsed = 0;
            t.total = duration;
            return t;
        })
    }

    return {
        subscribe,
        start: (finalCallback, d=duration) => {
            console.log("timer");
            const interval = setInterval(updateTime, 1000)
            updateTime()

            setTimeout(()=>{
                finalCallback();
                clearInterval(interval)
                resetTimer()
            }, duration*1000)
        },
        setDuration: (d) => {
            duration = d;
        }
    }
}

export const timer = createTimer()