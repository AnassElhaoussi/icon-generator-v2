import { prisma } from "../../util/prisma";
export class GetGenerationsCtl {
    constructor() { }
    async get(req, res) {
        const { email } = req.query;
        // Find unique generation records
        const uniqueUserGenerations = await prisma.generations.findMany({
            where: {
                author: {
                    email: email,
                },
            },
        });
        res.status(201).send(uniqueUserGenerations);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2V0R2VuZXJhdGlvbnNDdGwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvR2V0R2VuZXJhdGlvbnMvR2V0R2VuZXJhdGlvbnNDdGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRTNDLE1BQU0sT0FBTyxpQkFBaUI7SUFDNUIsZ0JBQWUsQ0FBQztJQUNoQixLQUFLLENBQUMsR0FBRyxDQUFDLEdBQVksRUFBRSxHQUFhO1FBQ25DLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBQzVCLGlDQUFpQztRQUNqQyxNQUFNLHFCQUFxQixHQUFHLE1BQU0sTUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUM7WUFDOUQsS0FBSyxFQUFFO2dCQUNMLE1BQU0sRUFBRTtvQkFDTixLQUFLLEVBQUUsS0FBZTtpQkFDdkI7YUFDRjtTQUNGLENBQUMsQ0FBQztRQUVILEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDOUMsQ0FBQztDQUNGIn0=