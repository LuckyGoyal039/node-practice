import EventEmitter from 'events'
console.log("something..........................")
const emitter = new EventEmitter();

emitter.on('bake-pizza', async (size, specs, ...arg) => {
    setTimeout(() => {
        console.log("setTimeout called")
    }, 1000)
    console.log(`start baking the ${size} pizza with ${specs}`);
    console.log("other arguments:", arg);
})
export default emitter;