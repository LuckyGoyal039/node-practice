import express, { Request, Response } from 'express';
const app = express()
import emitter from './event/index.js';

app.get('/', (req: Request, res: Response) => {
    try {
        console.log("first get request");
        res.json({
            mess: "Hi from the server"
        })
    } catch (err) {
        console.log("something went wrong", err);
        res.status(500).json({
            mess: "something went wrong",
        })

    }
})


console.log("before event")
emitter.emit('bake-pizza', "large", "extra cheese")
console.log("after event")

const PORT = '8000'
app.listen(PORT, () => {
    console.log("server running on port: ", PORT)
})

