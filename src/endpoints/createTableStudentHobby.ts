import { Request, Response } from "express";
import createTableStudentHobbyData from "../data/createTableStudentHobbyData";

export default async function createTableStudentHobby (req: Request, res: Response): Promise<void> {

        try {

            await createTableStudentHobbyData()

            res.status(201).send(`Tabela criada com sucesso!`)


        } catch(error) {
            res.status(400).send(error.sqlMessage || error.message)

        }
}