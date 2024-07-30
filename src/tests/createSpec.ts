import { create, createFolder } from '../modules/create';
import fs from 'fs-extra';

it('should create a folder', () => {
    createFolder(__dirname + '/temptest');
    expect(fs.readdirSync(`${__dirname}`).includes('temptest')).toBe(true);
});
it('should create a file', () => {
    create(__dirname + '/temptest/test.js');
    expect(fs.readdirSync(`${__dirname}/temptest`).includes('test.js')).toBe(
        true
    );
});
