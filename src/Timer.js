


export class Timer{
    constructor(callback, finalCallback, duration=5){
        this.callback = callback
        this.finalCallback = finalCallback
        this.duration = duration
        this.seconds = {
            elapsed: 0,
            remaining: duration
        }
        this.hasStarted = false
    }

    start = () => {
        if (this.hasStarted){
            throw "Cannot start Timer. Timer has already been started"
        }else{
            this.hasStarted = true;
            this.callback(this.seconds)

            let interval = setInterval(()=>{
                this.seconds.elapsed++
                this.seconds.remaining--
                this.callback(this.seconds)
            }, 1000)
    
            setTimeout(()=>{
                clearInterval(interval)
                this.finalCallback(this.seconds)
                this._reset();
            }, this.duration*1000)
        }

    }

    _reset(){
        this.hasStarted = false;
        this.seconds = {
            elapsed: 0,
            remaining: this.duration
        }
    }

}