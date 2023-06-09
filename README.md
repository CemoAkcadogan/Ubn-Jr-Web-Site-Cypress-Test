# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# UbnJr Test
This Cypress test visits the UbnJr website, interacts with elements using XPath, and performs assertions.

# Prerequisites
Node.js installed on your machine
Cypress installed globally or locally in your project

# Installation
Clone this repository or download the code files.
Open a terminal or command prompt and navigate to the project directory.
Run the command npm install to install the required dependencies.

# Usage
Open the ubnjr.spec.js file in your preferred code editor.
Modify the code as needed for your specific use case, such as changing the website URL or adjusting the XPath expressions.
Save the file.
To run the test:

Open a terminal or command prompt.
Navigate to the project directory.
Run the command npx cypress open to open the Cypress Test Runner.
In the Test Runner window, click on the ubnjr.spec.js file to run the test.
The test will visit the specified URL, click on an element using XPath, enter values in input fields using XPath, and click on another element using XPath. It then performs assertions to check if the success message "Bilgileriniz başarıyla gönderildi." is visible and that the error message "Form gönderilirken bir hata oluştu." does not exist.

You can customize the test code to match your specific website and XPath expressions.

# Contributing
Contributions to this project are welcome. If you have any suggestions, bug reports, or improvements, please open an issue or submit a pull request.

# License
This project is licensed under the MIT License. Feel free to use and modify the code according to the terms of the license.

Please note that Cypress has its own licensing terms. Refer to the Cypress documentation for more information on the license for Cypress.
