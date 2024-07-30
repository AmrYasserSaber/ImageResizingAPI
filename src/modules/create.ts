import fs from 'fs-extra';
import Path from 'path';
const create = (path: string): unknown => {
    try {
        return fs.openSync(path, 'a+');
    } catch (error) {
        console.log(error);
    }
};
const createFolder = (path: string): unknown => {
    if (!fs.existsSync(path)) {
        try {
            return fs.mkdirSync(path);
        } catch (error) {
            console.log(error);
        }
    }
};

const deleteFolderRecursive = function (directoryPath: string): void {
    if (fs.existsSync(directoryPath)) {
        fs.readdirSync(directoryPath).forEach(function (file) {
            const curPath = Path.join(directoryPath, file);
            if (fs.lstatSync(curPath).isDirectory()) {
                // recurse
                deleteFolderRecursive(curPath);
            } else {
                // delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(directoryPath);
    }
};

const deleteFile = (path: string): unknown => fs.unlinkSync(path);

export { create, createFolder, deleteFolderRecursive, deleteFile };
