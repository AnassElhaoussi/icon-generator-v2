import { GenerateDalleImage } from "../../providers/openai/GenerateDalleImage";
import { prisma } from "../../util/prisma";
import { UploadImages } from "../../providers/cloudinary/UploadImages";
export class GenerateImagesCtl {
    constructor() { }
    async handle(req, res) {
        // Request body
        const { prompt, n, email, prevCreditsAmt, creditsId, iconObject, iconDescription, color, style, isPremium, } = req.body;
        // Calling the class and the method that generates dalle images
        const generateDalleImage = new GenerateDalleImage();
        const generatedImages = await generateDalleImage.generateImages(prompt, n, isPremium);
        const uploadImages = new UploadImages();
        const newURLs = await uploadImages.handle(generatedImages.map((image) => image.url));
        const generation = await prisma.$transaction(async (prisma) => {
            // Adding a prisma child record that includes author data
            const generation = await prisma.generations.create({
                data: {
                    prompt,
                    n,
                    iconObject,
                    iconDescription,
                    color,
                    style,
                    URLs: newURLs,
                    authorEmail: email,
                    isPremium,
                },
                include: {
                    author: true,
                },
            });
            // Decrementing the amount of credits in the db record for n amount of generations
            await prisma.credits.update({
                where: { creditsId },
                data: { amount: prevCreditsAmt - n },
            });
            return generation;
        });
        // Sending a 200 status message to the client
        res.status(201).send(generation);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2VuZXJhdGVJbWFnZXNDdGwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvR2VuZXJhdGVJbWFnZXMvR2VuZXJhdGVJbWFnZXNDdGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDL0UsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUV2RSxNQUFNLE9BQU8saUJBQWlCO0lBQzVCLGdCQUFlLENBQUM7SUFDaEIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFZLEVBQUUsR0FBYTtRQUN0QyxlQUFlO1FBQ2YsTUFBTSxFQUNKLE1BQU0sRUFDTixDQUFDLEVBQ0QsS0FBSyxFQUNMLGNBQWMsRUFDZCxTQUFTLEVBQ1QsVUFBVSxFQUNWLGVBQWUsRUFDZixLQUFLLEVBQ0wsS0FBSyxFQUNMLFNBQVMsR0FDVixHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDYiwrREFBK0Q7UUFDL0QsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLGtCQUFrQixFQUFFLENBQUM7UUFDcEQsTUFBTSxlQUFlLEdBQUcsTUFBTSxrQkFBa0IsQ0FBQyxjQUFjLENBQzdELE1BQU0sRUFDTixDQUFDLEVBQ0QsU0FBUyxDQUNWLENBQUM7UUFDRixNQUFNLFlBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3hDLE1BQU0sT0FBTyxHQUFHLE1BQU0sWUFBWSxDQUFDLE1BQU0sQ0FDdkMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBYSxDQUN0RCxDQUFDO1FBRUYsTUFBTSxVQUFVLEdBQUcsTUFBTSxNQUFNLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUM1RCx5REFBeUQ7WUFDekQsTUFBTSxVQUFVLEdBQUcsTUFBTSxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztnQkFDakQsSUFBSSxFQUFFO29CQUNKLE1BQU07b0JBQ04sQ0FBQztvQkFDRCxVQUFVO29CQUNWLGVBQWU7b0JBQ2YsS0FBSztvQkFDTCxLQUFLO29CQUNMLElBQUksRUFBRSxPQUFPO29CQUNiLFdBQVcsRUFBRSxLQUFLO29CQUNsQixTQUFTO2lCQUNWO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxNQUFNLEVBQUUsSUFBSTtpQkFDYjthQUNGLENBQUMsQ0FBQztZQUVILGtGQUFrRjtZQUNsRixNQUFNLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO2dCQUMxQixLQUFLLEVBQUUsRUFBRSxTQUFTLEVBQUU7Z0JBQ3BCLElBQUksRUFBRSxFQUFFLE1BQU0sRUFBRSxjQUFjLEdBQUcsQ0FBQyxFQUFFO2FBQ3JDLENBQUMsQ0FBQztZQUVILE9BQU8sVUFBVSxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO1FBRUgsNkNBQTZDO1FBQzdDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ25DLENBQUM7Q0FDRiJ9