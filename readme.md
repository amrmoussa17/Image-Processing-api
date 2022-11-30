
# Image Processing API 

> This project is part of Udacity Advanced web development Nano-degree

## Technologies

NodeJS, Express, Typescript, Jasmine, express-validator, Sharp. 
## Author

👤 **Amr Mamdouh**

- GitHub: [@amrmoussa17](https://github.com/amrmoussa17)
- LinkedIn: [amr-mamdouh-988123125](https://www.linkedin.com/in/amr-mamdouh-988123125)
## Summary
This app is built using an Express server. The URL query strings is used as inputs specifying image filename, width and height for the api. Then the api using Sharp module processes and resizes the image and serves it as a response.

## Usage and Installation

You can get the project up and running in simple steps.

```
npm install
```

Then you can use the following endpoint to process your images.

```
http://localhost:3000/img?filename=[$filename]&width=[$number]&height=[$number]
```
In the filename field type one of the following file names : fjord, encenadaport, icelandwaterfall, palmtunnel, santamonica

to use prettier + eslint

```
npm run lint
```

to test using jasmine

```
npm run test
```
## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

## Show your support

Give a ⭐️ if you like this project!
