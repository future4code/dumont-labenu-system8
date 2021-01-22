import { connection } from "../index";


export default async function createMissionData(id: number, name: string, start_date: string, end_date: string, module: number) {

    await connection.raw(`
    INSERT INTO mission 
    VALUES(${id}, "${name}", "${start_date}", "${end_date}", ${module});
    `)
    
}