import { Request, Response } from "express";
import createStudentData from "../data/createStudentData";



export default async function insertStudent (req: Request, res: Response): Promise<void> {
    try {
         
        if(
            !req.body.name ||
            !req.body.email ||
            !req.body.birth_date ||
            !req.body.mission_id
        ) {
            res.status(400).send("Preencha os campos corretamente!")
        }

        const id = Math.round(Math.random() * 550 / 5) * 5 + 5;

        await createStudentData(
            id,
            req.body.name,
            req.body.email,
            req.body.birth_date,
            req.body.mission_id
        )
        

        res.status(201).send(`Estudante ${req.body.name} cadastrado!`)

    }catch(error) {
        res.status(400).send(error.sqlMessage || error.message)
    }
}