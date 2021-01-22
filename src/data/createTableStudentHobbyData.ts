import { connection } from "../index";

export default async function createTableStudenHobbyData(){

    await connection.raw(`
    CREATE TABLE student_hobby (
    id VARCHAR(255) PRIMARY KEY NOT NULL,
    student_id VARCHAR(255) NOT NULL,
    hobby_id INT NOT NULL,
    FOREIGN KEY(student_id) REFERENCES student(id),
    FOREIGN KEY(hobby_id) REFERENCES hobby(id)
    )
    `)
}