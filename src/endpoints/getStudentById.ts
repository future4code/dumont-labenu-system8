import { Request, Response } from "express";
import { getStudentByIdData } from "../data/getStudentByIdData";
import { studentId } from "../types/types";

export default async function getStudentById(req: Request, res: Response): Promise<any> {
    try {

        const result = await getStudentByIdData(req.params.id)

        res.status(200).send(result)

    } catch(error) {

        res.status(400).send(error.sqlMessage || error.message)
    }
}