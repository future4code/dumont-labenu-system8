import { connection } from "../index";


export default async function createStudentData(id: number, name: string, email: string, birth_date: string, mission_id: number) {

    await connection.raw(`
    INSERT INTO student 
    VALUES(${id}, "${name}", "${email}", "${birth_date}", ${mission_id});
    `)
    
}