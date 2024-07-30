# Image Resizing Server

This server is designed to resize images based on the provided parameters. It allows you to specify the image, width, and height, and returns the resized image accordingly.

## Image Location

The server expects the images to be located in the following directory:

- Image Directory: `images`
- Thumbnails Directory: `src/cash/Thumbnails`
- Available Images: `encenadaport`, `fjord`, `icelandwaterfall`, `palmtunnel`, `santamonica`

## Parameters

The server supports the following parameters:

- `photo` (string): The filename of the image to be resized. Only PNG images are supported.
- `width` (number): The desired width of the resulting image.
- `height` (number): The desired height of the resulting image.

## Terminal Commands

The following terminal commands are available:

1. `npm run prettier`: Runs Prettier to format the code.
2. `npm run lint`: Runs ESLint to perform linting checks.
3. `npm run jasmine`: Runs Jasmine to execute tests.
4. `npm run build`: Converts the TypeScript files into JavaScript and runs the server.
5. `npm run dev`: Starts Nodemon for development, automatically restarting the server on file changes.
6. `npm run test`: Builds the server and runs Jasmine tests.
7. `npm run start`: Runs all the commands required to start the server.

## API Endpoint

To resize an image, you can send a GET request to the following endpoint:
http://localhost:8000/api/images/?photo=${imageName}&width=${desiredWidth}&height=${desiredHeight}

Replace `${imageName}` with the actual name of the image file (e.g., `fjord`), `${desiredWidth}` with the desired width of the resulting image, and `${desiredHeight}` with the desired height of the resulting image.

For example: http://localhost:8000/api/images/?photo=fjord&width=500&height=700


This endpoint will return the resized image.

Please ensure that the server is running before making any API requests.

**Note:** This README assumes you have the necessary dependencies installed and are familiar with running Node.js servers.



