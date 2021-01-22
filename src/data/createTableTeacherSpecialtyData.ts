import { connection } from "../index";

export default async function createTableTeacherSpecialtyData(){

    await connection.raw(`
    CREATE TABLE teacher_specialty (
    id VARCHAR(255) PRIMARY KEY NOT NULL,
    teacher_id VARCHAR(255) NOT NULL,
    specialty_id INT NOT NULL,
    FOREIGN KEY(teacher_id) REFERENCES teacher(id),
    FOREIGN KEY(specialty_id) REFERENCES specialty(id)
    )
    `)
}