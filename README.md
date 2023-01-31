## BASIC SETUP

### SETUP CREATE-REACT-APP AND STYLED COMPONENTS
Initialize Create-React-App
* `npx create-react-app redwood-light-app`

Setup React Router to handle routing to Awards, Contact and Team pages.
* `yarn add react-router-dom`

Import BrowserBrowser router into index.js and wrap App element in BrowserRouter tags.
* `import { BrowserRouter } from 'react-router-dom';`

Add Styled Components
* `yarn add styled-components`


### TESTING, ESLINT & PRETTIER SETUP
Add testing packages:
* `yarn add eslint-plugin-testing-library eslint-plugin-jest-dom`

Add most recent UserEvent dependency to Testing Library
* `yarn add @testing-library/user-event@^14`

Remove `eslintconfig` from package.json

Create `.eslintrc` and add standard config
```
{
  "plugins": [
    "jest-dom",
    "testing-library"
  ],
  "extends": [
    "react-app",
    "react-app/jest",
    "plugin:testing-library/react",
    "plugin:jest-dom/recommended"
  ]
}
```

Create `.vscode/settings.json` and add standard config
```
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```

### TYPESCRIPT CONFIGURATION
Add Typescript
* `yarn add typescript`

Add React Types
* `yarn add --dev @types/react @types/react-dom @types/react-router-dom`

Add Styled Component Types
* `yarn add --dev @types/styled-components`

Setup PNG handling
* create `global.d.ts` file in root directory
* inside: `declare module '*.png';

Create `tsconfig.json` and save in root directory
* "include" should reference the `src` folder and the `global.d.ts` file
* "compiler options" should have "jsx" set to "react-jsx" and "target" set to "es6"


## ADD REACT BOOTSTRAP
`yarn add react-bootstrap bootstrap`

Add react-bootstrap script tags to `public/index.html` from here:
https://react-bootstrap.netlify.app/getting-started/introduction/#browser-globals

import react bootstrap into `index.js`
`import 'bootstrap/dist/css/bootstrap.min.css'`

## SCREEN QUERY METHODS
Command: 
get - expect element to be in DOM
query - expect element not to be in DOM
find - expect element to appear async

[All]
* (exclude) expect only one match
* (include) expect more than one match

QueryType:
Role (most preferred)
AltText (images)
Text (display elements)
Form Elements
-PlaceholderText
-LabelText
-DisplayValue
