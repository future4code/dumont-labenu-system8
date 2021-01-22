import { connection } from "../index";


export async function getStudentByIdData(id: any) {

    const result: any = await connection.raw(`
    SELECT name FROM student
    WHERE id = "${id}"
    `)
    
    return result[0]
}