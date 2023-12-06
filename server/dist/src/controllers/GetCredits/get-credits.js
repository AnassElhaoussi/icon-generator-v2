import { prisma } from "../../util/prisma.js";
export default async function GetCredits(req, res) {
    const { id } = req.query;
    try {
        // Gets user's unique credits
        const uniqueCredits = await prisma.credits.findUnique({
            where: {
                userId: id,
            },
        });
        res.status(201).send({
            status: "OK",
            credits: uniqueCredits,
        });
    }
    
    catch (e) {
        throw new Error(e.message);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWNyZWRpdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvR2V0Q3JlZGl0cy9nZXQtY3JlZGl0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFM0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLFVBQVUsVUFBVSxDQUFDLEdBQVksRUFBRSxHQUFhO0lBQ2xFLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO0lBQ3pCLElBQUksQ0FBQztRQUNILDZCQUE2QjtRQUM3QixNQUFNLGFBQWEsR0FBRyxNQUFNLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1lBQ3BELEtBQUssRUFBRTtnQkFDTCxNQUFNLEVBQUUsRUFBWTthQUNyQjtTQUNGLENBQUMsQ0FBQztRQUVILEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ25CLE1BQU0sRUFBRSxJQUFJO1lBQ1osT0FBTyxFQUFFLGFBQWE7U0FDdkIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7UUFDWCxNQUFNLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QixDQUFDO0FBQ0gsQ0FBQyJ9