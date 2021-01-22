import { Request, Response } from "express";
import { createTeacherData } from "../data/createTeacherData";

export default async function insertTeacher (req: Request, res: Response): Promise<void> {

    try {

        if(!req.body.name ||
            !req.body.email ||
            !req.body.birth_date ||
            !req.body.mission_id
            ) {
                res.status(400).send("Preecha os campos corretamente!")
            }
            const id = Math.round(Math.random() * 550 / 5) * 5 + 5;

            await createTeacherData(
                id,
                req.body.name,
                req.body.email,
                req.body.birth_date,
                req.body.mission_id
            )


    }catch (error) {
        res.status(400).send(error.sqlMessage || error.message)


    }





}
    