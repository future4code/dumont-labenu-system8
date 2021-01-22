import { connection } from "../index";

export default async function createTableMissionData(){

    await connection.raw(`
    CREATE TABLE mission (
    id VARCHAR(255) PRIMARY KEY NOT NULL,
    name VARCHAR(40) UNIQUE NOT NULL,
    start_date DATE NOT NULL,
    end_date date NOT  NULL,
    module INT NOT NULL
    )
    `)
}

