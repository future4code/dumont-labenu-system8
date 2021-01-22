import { Request, Response } from "express";
import createTableTeacherSpecialtyData from "../data/createTableTeacherSpecialtyData";

export default async function createTableTeacherSpecialty (req: Request, res: Response): Promise<void> {

        try {

            await createTableTeacherSpecialtyData()

            res.status(201).send(`Tabela criada com sucesso!`)


        } catch(error) {
            res.status(400).send(error.sqlMessage || error.message)

        }
}