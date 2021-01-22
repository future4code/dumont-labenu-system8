import { Request, Response } from "express";
import createTableMissionData from "../data/createTableMissionData";

export default async function createTableMission (req: Request, res: Response): Promise<void> {

        try {

            await createTableMissionData()

            res.status(201).send(`Tabela criada com sucesso!`)


        } catch(error) {
            res.status(400).send(error.sqlMessage || error.message)

        }
}