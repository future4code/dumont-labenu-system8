import { connection } from "../index";

export default async function createTableTeacherData(){

    await connection.raw(`
    CREATE TABLE teacher (
    id VARCHAR(255) PRIMARY KEY NOT NULL,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    birth_date date NOT  NULL,
    mission_id VARCHAR(255) NOT NULL,
    FOREIGN KEY(mission_id) REFERENCES mission(id)
    )
    `)
}