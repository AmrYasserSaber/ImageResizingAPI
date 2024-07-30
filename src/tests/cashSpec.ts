import cash from '../modules/cashing';
import fs from 'fs-extra';

describe('test out the cashing proccess', () => {
    beforeEach(() => fs.removeSync(`./src/cash/thumbnails`));
    it('creates thumbnails folder', () => {
        cash(`encenadaport`, 500, 300);
        expect(fs.readdirSync(`${__dirname}/../../src/cash`).length).toBe(1);
    });
});
