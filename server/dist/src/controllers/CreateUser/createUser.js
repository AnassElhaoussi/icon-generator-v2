import fetch from "node-fetch";
import { prisma } from "../../util/prisma.js";
import * as fs from "fs";
export default async function (req, res) {
    const { access_token } = req.body;
    const emailsRecordFilePath = "../../emails.json";
    let loggedEmails = [];
    if (fs.existsSync(emailsRecordFilePath)) {
        loggedEmails = JSON.parse(fs.readFileSync(emailsRecordFilePath, "utf-8"));
    }
    try {
        // Getting the user object with his unique access token
        const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${access_token}`, {
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${access_token}`,
            },
        });
        // Destructuring properties from the user object
        const { id, email, verified_email, name, given_name, picture } = (await response.json());
        // Adding the new email to the array and saving the new array in the file
        email && loggedEmails.push(email);
        fs.writeFileSync(emailsRecordFilePath, JSON.stringify(loggedEmails), "utf-8");
        // Getting unique user email records from the logged emails array
        const uniqueUserEmailRecord = loggedEmails.filter((savedEmail) => savedEmail === email);
        try {
            const user = await prisma.$transaction(async (prisma) => {
                let user;
                if (uniqueUserEmailRecord.length === 1) {
                    // Creating the user using data fetched from google apis
                    user = await prisma.user.create({
                        data: {
                            id,
                            email,
                            verified_email,
                            name,
                            given_name,
                            picture,
                            generations: {},
                        },
                    });
                    // 3 Free credits for each new account signed in to the app
                    await prisma.credits.create({
                        data: {
                            userId: id,
                            amount: 3,
                        },
                        include: {
                            user: true,
                        },
                    });
                }
                // Finding the unique user if it's already created
                user = await prisma.user.findUnique({
                    where: {
                        email,
                        id,
                    },
                });
                return user;
            });
            res.status(200).send({
                status: 200,
                createdUser: user,
            });
        }
        catch (e) {
            throw new Error(e.message);
        }
    }
    catch (e) {
        throw new Error(e.message);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlVXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250cm9sbGVycy9DcmVhdGVVc2VyL2NyZWF0ZVVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxLQUFLLE1BQU0sWUFBWSxDQUFDO0FBRS9CLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMzQyxPQUFPLEtBQUssRUFBRSxNQUFNLElBQUksQ0FBQztBQUV6QixNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssV0FBVyxHQUFZLEVBQUUsR0FBYTtJQUN4RCxNQUFNLEVBQUUsWUFBWSxFQUFFLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztJQUNsQyxNQUFNLG9CQUFvQixHQUFHLG1CQUFtQixDQUFDO0lBQ2pELElBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQztJQUV0QixJQUFJLEVBQUUsQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFDO1FBQ3hDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsb0JBQW9CLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRUQsSUFBSSxDQUFDO1FBQ0gsdURBQXVEO1FBQ3ZELE1BQU0sUUFBUSxHQUFHLE1BQU0sS0FBSyxDQUMxQiw4REFBOEQsWUFBWSxFQUFFLEVBQzVFO1lBQ0UsT0FBTyxFQUFFO2dCQUNQLE1BQU0sRUFBRSxrQkFBa0I7Z0JBQzFCLGFBQWEsRUFBRSxVQUFVLFlBQVksRUFBRTthQUN4QztTQUNGLENBQ0YsQ0FBQztRQUVGLGdEQUFnRDtRQUNoRCxNQUFNLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsR0FDNUQsQ0FBQyxNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBZ0IsQ0FBQztRQUV6Qyx5RUFBeUU7UUFDekUsS0FBSyxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEMsRUFBRSxDQUFDLGFBQWEsQ0FDZCxvQkFBb0IsRUFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsRUFDNUIsT0FBTyxDQUNSLENBQUM7UUFFRixpRUFBaUU7UUFDakUsTUFBTSxxQkFBcUIsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUMvQyxDQUFDLFVBQWtCLEVBQUUsRUFBRSxDQUFDLFVBQVUsS0FBSyxLQUFLLENBQzdDLENBQUM7UUFFRixJQUFJLENBQUM7WUFDSCxNQUFNLElBQUksR0FBRyxNQUFNLE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFO2dCQUN0RCxJQUFJLElBQUksQ0FBQztnQkFDVCxJQUFJLHFCQUFxQixDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUUsQ0FBQztvQkFDdkMsd0RBQXdEO29CQUN4RCxJQUFJLEdBQUcsTUFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzt3QkFDOUIsSUFBSSxFQUFFOzRCQUNKLEVBQUU7NEJBQ0YsS0FBSzs0QkFDTCxjQUFjOzRCQUNkLElBQUk7NEJBQ0osVUFBVTs0QkFDVixPQUFPOzRCQUNQLFdBQVcsRUFBRSxFQUFFO3lCQUNoQjtxQkFDRixDQUFDLENBQUM7b0JBQ0gsMkRBQTJEO29CQUMzRCxNQUFNLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO3dCQUMxQixJQUFJLEVBQUU7NEJBQ0osTUFBTSxFQUFFLEVBQUU7NEJBQ1YsTUFBTSxFQUFFLENBQUM7eUJBQ1Y7d0JBQ0QsT0FBTyxFQUFFOzRCQUNQLElBQUksRUFBRSxJQUFJO3lCQUNYO3FCQUNGLENBQUMsQ0FBQztnQkFDTCxDQUFDO2dCQUVELGtEQUFrRDtnQkFDbEQsSUFBSSxHQUFHLE1BQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7b0JBQ2xDLEtBQUssRUFBRTt3QkFDTCxLQUFLO3dCQUNMLEVBQUU7cUJBQ0g7aUJBQ0YsQ0FBQyxDQUFDO2dCQUVILE9BQU8sSUFBSSxDQUFDO1lBQ2QsQ0FBQyxDQUFDLENBQUM7WUFFSCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDbkIsTUFBTSxFQUFFLEdBQUc7Z0JBQ1gsV0FBVyxFQUFFLElBQUk7YUFDbEIsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDWCxNQUFNLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QixDQUFDO0lBQ0gsQ0FBQztJQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7UUFDWCxNQUFNLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QixDQUFDO0FBQ0gsQ0FBQyJ9