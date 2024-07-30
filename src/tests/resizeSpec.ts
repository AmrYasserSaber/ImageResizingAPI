import resize from '../modules/resize';
import fs from 'fs-extra';

it('sould creat an resized image and save it', async () => {
    await resize('encenadaport', 500, 200);
    console.log(fs.readdirSync(`${__dirname}/../../src/cash/thumbnails/`));
    expect(
        fs
            .readdirSync(`${__dirname}/../../src/cash/thumbnails/`)
            .includes('encenadaport(500,200).jpg')
    ).toBe(true);
});
