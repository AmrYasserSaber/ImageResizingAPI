import { Request, Response } from 'express';
import fs from 'fs';
import cash from '../modules/cashing';

const processingImage = async function (
    req: Request,
    res: Response
): Promise<unknown> {
    const inputwidth = req.query.width as string;
    const inputheight = req.query.height as string;
    if (isNaN(Number(inputwidth))) {
        return res.status(400).send({
            message: 'please enter the width as a number'
        });
    }
    if (isNaN(Number(inputheight))) {
        return res.status(400).send({
            message: 'please enter the height as a number'
        });
    }
    const width = Number(req.query.width as string);
    const height = Number(req.query.height as string);
    if (width > 1000) {
        return res.status(400).send('please enter a smaller width (<1000)');
    }
    if (width <= 0) {
        return res.status(400).send('please enter a positive number');
    }
    if (height > 1000) {
        return res.status(400).send('please enter a smaller height (<1000)');
    }
    if (height <= 0) {
        return res.status(400).send('please enter a positive number');
    }
    const photo = req.query.photo as string;
    if (/.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(photo)) {
        res.status(400).send({
            message: 'please enter the image name without any extention'
        });
    }
    if (!fs.readdirSync(`${__dirname}/../../images`).includes(`${photo}.jpg`)) {
        res.status(400).send({
            message: 'please enter a correct image name or a one that exists'
        });
    }
    const processedPhoto = await cash(photo, width, height);
    if (fs.existsSync(processedPhoto)) {
        res.status(200).sendFile(processedPhoto);
    } else {
        res.status(400).send("error couldn't process the photo");
    }
};

export default processingImage;
