//packages
const express = require("express")
const config = require("config")
const bodyParser = require("body-parser")

//App configuration

const app = express()
const port = config.get("server-port")
const jsonParser = bodyParser.json()
const urlEncodedParser = bodyParser.urlencoded(
    {extended:true}
)

app.use(jsonParser)
app.use(urlEncodedParser)

const ipFn = require("./middleware/getIpAddress")
app.use("*", ipFn)

//Methods
app.get("/", (req,res,next) => {
    res.send("Welcome to rest api")
})

//Token middleware
const tkFn = require("./middleware/verifyToken") 
app.use(tkFn)

// Routes loading

const userRoutes = require("./routes/user.routes")
userRoutes(app)

const studentRoutes = require("./routes/student.routes")
studentRoutes(app)

const teacherRoutes = require("./routes/teacher.routes")
teacherRoutes(app)

const student_groupRoutes = require("./routes/student_group.routes")
student_groupRoutes(app)

const periodRoutes = require("./routes/period.routes")
periodRoutes(app)

const groupRoutes = require("./routes/group.routes")
groupRoutes(app)

const courseRoutes = require("./routes/course.routes")
courseRoutes(app)

app.listen(port, () => {
    console.log("Server is runing")
})