import { Request, Response } from "express";
import createTableStudentData from "../data/createTableStudentData";

export default async function createTableStudent (req: Request, res: Response): Promise<void> {

    try {

        await createTableStudentData()

        res.status(201).send(`Tabela criada com sucesso!`)


    } catch(error) {
        res.status(400).send(error.sqlMessage || error.message)

    } 
}