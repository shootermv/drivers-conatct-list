[☣︎Demo☣︎](http://shootermv.github.io/drivers-contact-list/)  

# Motivation
The motivation behind this repo was -  
To create a "contacts gallery" App   
you can view list a of contacts, search and view additional details,  
App should be responsive  
App should support dark & light theming  
![intro](https://raw.githubusercontent.com/shootermv/drivers-contact-list/master/screen.png?raw=true)  
mobile support:  
![intro-mobile](https://raw.githubusercontent.com/shootermv/drivers-contact-list/master/screen-mobile.png?raw=true)  

# Tools Used To Build This App:  
- [Create React App](https://reactjs.org/docs/create-a-new-react-app.html)
- [Styled Components](https://styled-components.com/)
- [Redux](https://redux.js.org/)
- [Lodash](https://lodash.com/)

# Behaviors
* Should filter contacts when somebody types at the "search" box
* Should display addintional info when hovering above one of the contacts
* Should be resposive
* Should support missing fields
* should toggle theme

# Interesting Things About This Project
* It uses [React Hooks](https://reactjs.org/docs/hooks-intro.html)
* Semantic HTML
* Unit tests for reducer, utils & components  (```npm test```)
* Usage of css vars
* Uses [grid-css](https://css-tricks.com/snippets/css/complete-guide-grid/)
* Uses [storybook](https://storybook.js.org/) for visual tests of components

# How To Run Application
 ```bash
git clone https://github.com/shootermv/drivers-contact-list.git new-project
cd new-project
npm install
npm start
```        
# How To Run Cypress Tests:
```bash
npm start # to start dev server
``` 
in another terminal:   
```bash
npm run test:cy # to start cypress in dev mode
```  
you should see something like this:
![image](https://user-images.githubusercontent.com/1336862/116804710-a4185900-ab29-11eb-8c4c-0f4b323df070.png)
