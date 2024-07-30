import sharp from 'sharp';

const resize = async (
    photo: string,
    width: number,
    height: number
): Promise<void> => {
    try {
        await sharp(__dirname + `../../../images/${photo}.jpg`)
            .resize(width, height)
            .toFile(`./src/cash/thumbnails/${photo}(${width},${height}).jpg`)
            .then(() => {
                console.log('Success');
            });
    } catch (error) {
        console.log(error);
    }
};

export default resize;
