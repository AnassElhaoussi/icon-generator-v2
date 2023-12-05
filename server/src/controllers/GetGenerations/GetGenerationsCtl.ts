import { Request, Response } from "express";
import { prisma } from "../../util/prisma";

export class GetGenerationsCtl {
  constructor() {}
  async get(req: Request, res: Response) {
    const { email } = req.query;
    // Find unique generation records
    const uniqueUserGenerations = await prisma.generations.findMany({
      where: {
        author: {
          email: email as string,
        },
      },
    });

    res.status(201).send(uniqueUserGenerations);
  }
}
