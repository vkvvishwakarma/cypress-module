# cypress-module
cypress-project: this project is related to sample project cypress with Chai library and Mochawesome report
-------
-------
### How to install cypress
 - first do the npm install
 - npm init
 - then install cypress
  ``` 
  npm install cypress --save-dev
  ```
 ### Cypress folder structure is not showing on project
 - then goto package.json file 
 - scroll and do the changes in script scope
 - add key 
   ```
    "cypress:open": "cypress open"
   ```
 - now goto terminal type the command npm run cypress:open and press enter
 - refresh the project cypress folder will be visible
- Now we need to run the following command to terminal for adding type as mocha
  ``` 
    npm i --save-dev @types/mocha
  ```

 ###for reporting purpose
* install the mocha first
  ```
    npm install --save-dev mocha
  ```
* install Mochawesome for html reporting 
  ``` 
    npm install --save-dev mochawesome
  ```
- Tell mocha to use the Mochawesome reporter
  ```
    - mocha testfile.js --reporter mochawesome
  ```
  
## compare the screenshot in cypress
  ```
    npm i -D cypress-image-diff-js
  ```
