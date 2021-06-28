# Hypermood - Hypermedia applications project

## Group name
JPF

## Website url
https://hypermood.herokuapp.com

## Index of the README
* [About the team members](#about)
* [Contribution](#contribution)
* [Technologies used](#technologies)
* [Components developed](#components)
* [Plugins](#plugins)
* [Comments about the usage of the framework](#comments)
* [Known issues](#known)
* [Build setup](#build)
* [Authors](#authors)

<a name="about"></a>
## About the team members
### Jessica Lucchetta
Personal code: 10801478  
Email: jessica.lucchetta@mail.polimi.it
### Pietro Lentini
Personal code: 10522669  
Email: pietro.lentini@mail.polimi.it
### Francesco Milano
Personal code: 10783199  
Email: francesco2.milano@mail.polimi.it

## Contribution
All three of us worked together on the website design, chatbot design, and documentation parts, while we divided the frontend programming work equally. In particular, during project development each of us took on particular responsibilities:

* Jessica was responsible for the front end and DB;
* Pietro was responsible for component architecture and chatbot;
* Francesco was responsible for adding features to improve the user experience and for the backend connection.

<a name="technologies"></a>
## Technologies used

### Nuxt.js
Nuxt.js is an open source JavaScript framework based on Vue that allows you to easily build Server-Side rendered applications (SSR). With Nuxt you can also create static pre-rendered pages (SSG), Client-Side rendered applications (CSR) and single page web applications (SPA).  
To find out more click [here](https://nuxtjs.org).

### PostgreSQL
PostgreSQL is a powerful, open source object-relational database system with over 30 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance.  
To find out more click [here](https://www.postgresql.org).

### Sequelize
Sequelize is a promise-based Node.js ORM for Postgres and other Databases: it is really convenient as it allows us to interact with the database of our website using javascript.  
To find out more click [here](https://sequelize.org).

<a name="components"></a>
## Components developed

### Areas

#### AreaName
This component consists mainly of a logo and a text and is used to show the area with the respective logo on the services and areas page. Clicking on it allows you to visit the area page with the required id to be provided. It also includes an optional description. All information is provided through attributes. It helps us for consistency between pages and code readability.

### Navigation

#### OrientationInfo
This component consists of a text with an arrow to move to a section of the site. As attribute it takes the text to show and the path to link. The purpose of the component is to orientate the user and to make the code of the Cover component more readable and reusable.

#### TheFooter
This component encloses the website footer with a link to the home page and links to the company's social pages.

#### TheHeader
This is the header of the website. This component is related to TheSidenav and TheSideNavToggle components.  
There is always the company logo on the left, while above 768px it shows the links to the main pages of the website, and below 768px the links are hidden to show TheSideNavToggle component, which consists of a hamburger menu. In the implementation it listens to the sidenavToggle event that allows to show or hide TheSidenav component.  
The full implementation of the 3 components can be seen in the default layout.

#### TheSidenav
This is a navigation bar to support the header in smaller screens. This component is connected to TheHeader and TheSideNavToggle components.  
It contains the company logo and the links to the main pages of the site. In the implementation it is visible only when the show property becomes true. It uses a transition when it appears and when it disappears which has been developed using the Vue transition component wrapper.  
The full implementation of the 3 components can be seen in the default layout.

#### TheSideNavToggle
This is an hamburger menu implemented in the header to appear in smaller screens. This component is linked to TheSidenav and TheHeader components. 
On click event it emits toggle event which is listened by TheHeader component to allow TheSidenav component to be shown.
Below 768px it is hidden.  
The full implementation of the 3 components can be seen in the default layout.

### People

#### PeoplePreview
This component dynamically creates CardImage components for an array of people received as an attribute. It is responsive and is used whenever there are more people to show in the site. It also allows to specify if the people in the array have a description to show or not (e.g. a role, like project manager).

### Services

#### ServicePreview
This component is the format in which the link to a service on the site is displayed. It displays the title and a brief description of the service, both of which are received as attributes. The component is used only in the ServicesPreviewList component and is designed for convenience and ease of reading the code.

#### ServicesPreviewList
This component is the format in which a group of links to the services of the company are shown. The services are received as an attribute in an array. The component generates a ServicePreview component for each service in the array and inserts it as an element of a responsive grid.

### Generic UI

#### CardImage
Component consisting of a circular image, title and description, clickable to reach a site path consisting of the attributes link and id concatenated. Used as a link for pages of individual people or individual areas.

#### CardImageBig
Component used to create cards to display areas dynamically on the Home Page. It consists of a title, an image and a button with a link, all received as attributes. The path reached by the button is the concatenation of the link and id attributes. The component was created to make the home page code more readable and for possible future uses.

#### Chatbot
Component which contains the implementation of the Multi Modal Chatbot developed by I3Lab of Politecnico di Milano. We designed the chatbot to resemble a window of a chat application. The component has a button to open and close the chatbot window labeled "Chat with me", which becomes "Close" once the window is open: this was designed to make the use of this new technology immediate for any user. In case the user has many messages the chatbot window becomes scrollable. If the window is scrollable every time the chat is opened or the user receives a message it will automatically scroll to the last received message.  
The chatbot uses the Vuex Store to manage messages, uses the mmcc-mixin.js mixin to receive messages and needs the mmcc.js plugin. The component is implemented in the default layout.  
To find out more on how to implement this chatbot click [here](https://gitlab.com/i3lab/mmcc/frontend/mmcc-vue/-/blob/master/docs/hypermedia-step-by-step.md).

#### Cover
This is a graphical component used as an introduction in all pages except the error page. It consists of an image, a title, and a description, received as an attribute. It is also possible to use the OrientationInfo component if one assigns the attributes parentSectionText and parentSectionName, which have been set in the specific pages of areas, services, and people in order to intuitively go to the page of the respective group.

## Plugins

### Chatbot
Plugin needed to use the Multi Modal Chatbot of I3Lab of Politecnico di Milano.  
To find out more on how to implement this chatbot click [here](https://gitlab.com/i3lab/mmcc/frontend/mmcc-vue/-/blob/master/docs/hypermedia-step-by-step.md).

### Vuex Store
Vuex is a state management pattern and library for Vue.js applications. It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion.  
We used this plugin to manage the Multi Modal Chatbot messages.
To find out more about the Vuex click [here](https://vuex.vuejs.org/#what-is-a-state-management-pattern).

### ESLint
EsLint is a program that comes to the rescue in order to write JavaScript correctly. It statically analyzes your code to quickly find problems.  
ESLint is built into most text editors and you can run ESLint as part of your continuous integration pipeline.  
It helped us work more fluidly on our own and as a team.  
To find out more about the ESLint click [here](https://eslint.org).

### Prettier
Prettier is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.  
It helped us work more fluidly on our own and as a team.  
To find out more about the Prettier click [here](https://prettier.io).

<a name="commments"></a>
## Comments about the usage of the framework
Thanks to Nuxt.js and Vue.js we were able to:

- Develop a website with high performance thanks to SSR;
- Manage the code simply thanks to the structure required by Nuxt.js;
- Implement features to improve the user experience with ease, such as implementing an error page;
- Divide the code into components to simplify management, reuse and reading of code;
- Design pages using components that maintain consistency across the website;
- Code and be able to see changes right away thanks to hot module replacement.

<a name="known"></a>
## Known issues
>All of the problems listed below were reported during the meetings with the tutor, who confirmed that they did not result from errors in our code.
*  On Android, using the native input component with the keypress.enter event, sending a message to the chatbot presents some issues: in particular trying to send a message will first send an empty message and then trying again the message is correctly sent;
* Browsing the site using HTTP protocol instead of HTTPS causes issues in retrieving correctly the pages.
* Heroku's dyno if not used for a long time may crash on the first boot. This is due to the usage of Heroku's free plan.

<a name="build"></a>
## Build setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Authors
* [Jessica Lucchetta](https://github.com/jessical97)
* [Pietro Lentini](https://github.com/lentinip)
* [Francesco Milano](https://github.com/francescomilanoz)