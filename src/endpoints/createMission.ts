import { Request, Response } from "express";
import createMissionData from "../data/createMissiondata";


export default async function insertStudent (req: Request, res: Response): Promise<void> {
    try {
         
        if(
            !req.body.name ||
            !req.body.start_date ||
            !req.body.end_date ||
            !req.body.module
        ) {
            res.status(400).send("Preencha os campos corretamente!")
        }

        const id = Math.round(Math.random() * 550 / 5) * 5 + 5;

        await createMissionData(
            id,
            req.body.name,
            req.body.start_date,
            req.body.end_date,
            req.body.module
        )
        

        res.status(201).send(`Turma "${req.body.name}" cadastrado!`)

    }catch(error) {
        res.status(400).send(error.sqlMessage || error.message)
    }
}