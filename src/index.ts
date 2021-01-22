import knex from "knex";
import express from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import  insertStudent  from "./endpoints/createStudent";
import insertTeacher from "./endpoints/createTeacher";
import getStudentById from "./endpoints/getStudentById";
import createTableMission from "./endpoints/createTableMission";
import createTableStudent from "./endpoints/createTableStudent";
import createTableStudentHobby from "./endpoints/createTableStudentHobby";
import createTableTeacher from "./endpoints/createTableTeacher";
import createTableTeacherSpecialty from "./endpoints/createTableTeacherSpecialty";
import createMission from "./endpoints/createMission";
 
/******************************************************/

dotenv.config();

/******************************************************/

export const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
})

const app = express();

app.use(express.json());

/******************************************************/

app.post("/createtablemission", createTableMission);

app.post("/createtablestudent", createTableStudent);

app.post("/createtablestudenthobby", createTableStudentHobby)

app.post("/createtableteacher", createTableTeacher);

app.post("/createtableteacherspecialty", createTableTeacherSpecialty);

app.post("/createstudent", insertStudent);

app.post("/createteacher", insertTeacher);

app.post("/createmission", createMission);

app.get("/student/:id", getStudentById);


/******************************************************/

const server = app.listen(process.env.PORT || 3003, () => {
    if(server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.log(`Failure upon starting server.`);
    }
});

