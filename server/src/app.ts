import bodyParser from "body-parser"
import express from "express";
import cors from "cors";
import studentRoute from "./routes/student.routes"
const app = express();
//middleware
app.use(express.urlencoded({extended : true}))
app.use(bodyParser.json());

app.use(cors())
// router
app.use('/api/v1/students', studentRoute)


//handle err



export default app