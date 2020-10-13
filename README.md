# React, Redux, and Redux-Observable Boilerplate
This is is the boilerplate code for creation a react application with support of redux and redux-observable

## Guideline
### **`Available Commands`**
Please check the *Commands* section down below.

### **`Import Statement`**
Import statement should be divided in two catagories "External Dependencies" and "Internal Dependencies" e.g.
```javascript
// External dependencies
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

// Internal dependencies
import store from 'core/store/store.config';
```

#### **`Internal Dependencies should be injected in the following order`**
1. common or core configuration imports
2. common or core utility imports
3. common or core store imports (reducer, action, epic)
4. common or core components imports
5. feature or pages or layout or components config imports
6. feature or pages or layout or components utility imports
7. feature or pages or layout or components store imports (reducer, action, epic)
8. feature or pages or layout or components components imports
9. All Assets (*.scss, *.png, *.svg)

```javascript
// External dependencies
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

// Internal dependencies
import store from 'core/store/store.config';
import * as constant from 'common/constants';
import * as commonAction from 'common/common.actions';
import AuthComponent from 'common/auth/auth.component';
import * as dashboardAction from 'page/dashboard/dashboard.action';
import * as dashboardReducer from 'page/dashboard/dashboard.reducer';
import CarousalComponent from 'components/carousal/carousal.container'
import 'styles/layout/dashboard.scss';
```

#### Incorrect vs Correct import
```javascript
// Incorrect (not recommended)
import {
  uuid, 
  phoneFormatter, 
  dateFormatter, 
  stringFormatter, 
  MAX_WINDOW_SIZE,
  MIN_WINDOW_SIZE
} from 'common/constants'

// correct 
// For only one or two item from the file
import { uuid } from 'common/constants'

// correct 
// For more than two items
import * as constant from 'common/constants';
```

### **`Folder structure`**
Although, in an enterprise level application folder structure does not help much but file name does since we search a file instead of a folder. Still it is a good idea to follows some sort of folder structure guideline. The following folder structure is more suitable for a application which consists different pages. But if you are create a site where pages are consider as features then change 'pages' to 'features'
```sh
src
  |-core
  |   |-store
  |-common
  |   |-components
  |   |-containers
  |   |-layouts
  |   |-utils
  |   |+common.action.js
  |-pages
  |   |-dashboard
  |   |   |-components
  |   |   |-containers
  |   |   |-layouts
  |   |   +dashboard.page.component.js
  |   |   +dashboard.reducer.js
  |   |   +dashboard.epic.js
  |   |   +dashboard.action.js
  +app.js
  +index.js
  +setupTest.js
```
### **`Components naming convention`**
Component name should in kebab case, type, and sub-type should be separated with ( . )  `e.g. client-list.container.component.js`
- Page Component should be `login.page.component.js`
- Page child route component should `login.route.component.js`
- Layout component should be `login-header.layout.component.js`
- Container component should be `login-form.container.component.js`
- Presentation component should be `login-form.component.js`
- Core/Common component 
  - Component should be `user-avatar.component.js`, `grid-item.component.js` 
  - Container should be `grid.container.js`
  - layout should be `grid-list.layout.component.js` and `grid-thumb-list.layout.component.js`
  - Router Component should be `root.router.component.js`
  - ErrorBoundary Component should be `route.error-boundary.component.js` and `grid.error-boundary.component.js`
  - Suspense and fallback Component should be `suspense.component.js`, `page.fallback.component.js`
  - Loader Component should be `spinner.component.js`

### **`Component composition`**
```XML
<App>
  <Provider store={}>
    <Router>
      <Switch>
        
        <PublicRoute>
          <Login>
        <PublicRoute>

        <ProtectedRoute>
          <Dashboard>
            <Switch>
              <Route>
                <Container>
                  <Layout>
                    <Component />
                  </Layout>
                </Container>
              </Route>
            </Switch>
            <Container>
              <Layout>
                <Component />
              </Layout>
            </Container>
          <Dashboard>
        </ProtectedRoute>
        ...
      </Switch>
    </Router>
  </Provider>
</App>
```

### **`Component code`** 
There are the following set up rules against each type of component along with there sample code.

#### `Presentation Component`
* File name should `login.component.js`
* Should be placed inside `pages/login/components`
* It should be state less functional component.
* It should be a dumb component.
* Only other render function can be placed inside it. 
* Define all the props in propTypes 
* In some cases presentation component can render container component as a child. But do it sparingly.
```javascript
// External dependencies
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Login component render login UI on screen.
 * @param {Object} props login properties 
 */ 
export default function LoginComponent(props){
  const {username, password, onChange:handleChange} = props;

  /**
   * Render user name control
   */ 
  function renderUsernameControl(){
    return (
      <>
        <label htmlFor='username'></label>
        <input id='username' value={username} onChange={handleChange} />
      </>
    )
  }

  return (
    <form>
      {renderUsernameControl()}
    </form>
  )
}

LoginComponent.propTypes = {
  username: PropType.string.isRequired,
  password: PropType.string.isRequired,
  onChange: PropType.func.isRequired
}
```

#### `Container Component`
* File name should be `login.container.component`
* Should be placed inside `pages/login/container`
* It should be a stateful functional component
* It can connect to redux store and dispatch events.
* It can render both Layout and Presentation Component.

```javascript
// External dependencies
import React, { useState } from 'react';

// Internal dependencies
import LoginComponent from 'page/login/components/login.component'

/**
 * Login container component act as presenter
 */ 
function LoginContainerComponent(){
  const [formState, setFormState] = useState({
    username:'',
    password:''
  });

  /**
   * handle form input change
   * @param {Event} event change event
   */ 
  function handleFormInputChange(event) => {
    const {id, value} = event.currentTarget;
    setFormState({...formState, [id]:value});
  }

  return (
    <LoginComponent 
      username={username}
      onChange={handleChange}
    />
  )
}
```


## Commands

### **`Run application on local`** 
```sh
# install all the dependencies via running the following command.
# NOTE: run it only once or when new dependencies are added to package.json 
$ npm install

# Run the following command to start local server
$ npm start
```
### **`Run test environment`**
```sh
# Run test
$ npm run test

# Debug test
$ npm run test:debug
```

### **`Test coverage`**
```sh
# Check test coverage on console window
$ npm run test:coverage
```

### **`Create build for deployment`**
> Although, these build will be created using CI/CD tools but it can be helpful for checking and analyzing deploy ready build.
```sh
# Build for development environment
$ npm run build:development

# Build for production environment
$ npm run build:production
```

### **`Analyze deployment build`**
```sh
# First create the build using the command given in *Create build for deployment*
$ npm run analyze
```

### **`Linter and formatter`**
This repository contains linting and formatting rules. 

> Linting rules are hooked with git commit command. If any linting rule breaks it will throw error. These rules are there to keep code clean.

The following are commands to manually check and auto fix linting errors. **But it is re-commended that you should fix all the error manually.**
```sh
# Check linting errors
$ npm run lint

# Auto fix linting errors
$ npm run fix-lint
```

For formatting code files, we are using `Prettier` settings please check '.prettierrc'.

> `In order to adhere to standard formatting please ignore setting up formatter in your IDE (VSCode) via plugins`

```sh
# Auto format
$ npm run format
```

## Code Commit
* Should follow git flow branching convention
  * feature branch should start with `feature/<branch name>`
  * bug fixing branch name should start with `bugfix/<bug-id>`
* Create a pull request against `develop` branch for feature and bug fix.
* Good To have: Try not mix functionalities in a single commit.

The Following is same of creating feature branch
```sh
# Create a 'feature/login-module' branch
$ git flow feature start login-module

# Push the branch to server once all the commit are made.
$ git push --set-upstream origin feature/login-module

# Create a pull request once the pull request is closed run following command
$ git flow feature finish login-module
```

## References