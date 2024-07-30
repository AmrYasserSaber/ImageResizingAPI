import express from 'express';

const logger = (
    req: express.Request,
    res: express.Response,
    // eslint-disable-next-line @typescript-eslint/ban-types
    next: Function
): void => {
    // eslint-disable-next-line prefer-const
    let url = req.url;
    console.log(`${url} was visited`);
    next();
};

export default logger;
