import { Request, Response } from "express";
import createTableTeacherData from "../data/createTableTeacherData";

export default async function createTableTeacher (req: Request, res: Response): Promise<void> {

    try {

        await createTableTeacherData()

        res.status(201).send(`Tabela criada com sucesso!`)


    } catch(error) {
        res.status(400).send(error.sqlMessage || error.message)

    } 
}