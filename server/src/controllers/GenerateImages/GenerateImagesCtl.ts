import { Request, Response } from "express";
import { GenerateDalleImage } from "../../providers/openai/GenerateDalleImage";
import { prisma } from "../../util/prisma";
import { UploadImages } from "../../providers/cloudinary/UploadImages";

export class GenerateImagesCtl {
  constructor() {}
  async handle(req: Request, res: Response) {
    // Request body
    const {
      prompt,
      n,
      email,
      prevCreditsAmt,
      creditsId,
      iconObject,
      iconDescription,
      color,
      style,
      isPremium,
    } = req.body;
    // Calling the class and the method that generates dalle images
    const generateDalleImage = new GenerateDalleImage();
    const generatedImages = await generateDalleImage.generateImages(
      prompt,
      n,
      isPremium
    );
    const uploadImages = new UploadImages();
    const newURLs = await uploadImages.handle(
      generatedImages.map((image) => image.url) as string[]
    );

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
