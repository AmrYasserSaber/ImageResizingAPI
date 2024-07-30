import fs from 'fs-extra';
import resize from './resize';
import { create, createFolder } from './create';

const cash = async (
    photo: string,
    width: number,
    height: number
): Promise<string> => {
    const availablePhotos: string[] = fs.readdirSync(
        `${__dirname}/../../images`
    );
    if (!availablePhotos.includes(`${photo}.jpg`)) {
        return 'please enter a name that exists in the images file';
    }
    await createFolder('./src/cash/thumbnails');
    const fileList: string[] = fs.readdirSync(
        __dirname + '/../../src/cash/thumbnails/'
    );
    if (fileList.includes(`${photo}(${width},${height}).jpg`)) {
        console.log('the image is in the cash');
    } else {
        await create(
            `${__dirname}/../../cash/thumbnails/${photo}(${width},${height}).jpg`
        );
        console.log('the image is not in the cash');
        await resize(photo, width, height);
    }
    return `${process.cwd()}/src/cash/thumbnails/${photo}(${width},${height}).jpg`;
};
export default cash;
