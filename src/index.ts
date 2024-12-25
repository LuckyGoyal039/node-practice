import express, { Request, Response } from 'express';
const app = express()

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

const PORT = '8000'
app.listen(PORT, () => {
    console.log("server running on port: ", PORT)
})

