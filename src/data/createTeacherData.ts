import { connection } from "../index";

export async function createTeacherData(id: number, name: string, email: string, birth_date: string, mission_id: number) {

    await connection.raw(`
    INSERT INTO teacher 
    VALUES(${id}, "${name}", "${email}", "${birth_date}", ${mission_id});
    `)
    
}