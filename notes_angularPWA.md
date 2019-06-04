# Init

## Build the Angular App

To begin building our Angular application, open your terminal and make a new directory (or choose an existing one) where you want to create the application (app). Then use the following Angular CLI command to create a new Angular app:

```
new angular-pwa
```

> Choose Yes for Angular Routing and CSS for stylesheet format.

## Add Angular Material

We’ll use Angular Material to handle the look, layout, and accessibility of our app. Go into the angular-pwa directory you just created and add Angular Material:

```
cd angular-pwa
ng add @angular/material
```

> Choose a color theme and answer Yes to add HammerJS and browser animations.

## start server

You can take a look at the boilerplate Angular application in your web browser (default port 4200)by running:

```
ng serve -o
```

## add nav-bar for routing

The app we’re building will let users view Technology and JavaScript news headlines. Since users will need to navigate between the two, lets add navigation with Angular Material by running:

```
ng g @angular/material:material-nav --name navbar
```

## Getting API key from newsAPI

We’ll get our content from the NewsAPI. You’ll need a key to access the api so head on over to the NewsAPI website and sign up as a Developer to get a free key.

## Add service provider

Once you have your NewsAPI key, lets create the service provider for our app by running:

```
ng generate service services/newsapi
```

This will create a new services subdirectory with boilerplate files inside it. Fire up the code editor of your choice and open the **newsapi.service.ts** file you just created in **angular-pwa/src/app/services/**

We want to setup two **API endpoints**; one for Technology News and another for JavaScript News. The NewsAPI Documentation shows how to format the http endpoints. Here’s what we’ll use:

> https://newsapi.org/v2/top-headlines?category=technology&language=en&country=us&apiKey=

> https://newsapi.org/v2/everything?q=javascript&sortBy=latest&apiKey=

## Add httpClient & methods in newsapi.service

Now use the code below to edit the newsapi.service.ts file. We’ll add HttpClient and Observable to our imports, and create functions to get the news articles from our API endpoints.

Be sure to put in your NewsAPI key on the line.

## Fix app.module with service provider & HttpClient module

To use our new service provider we need to add it and HttpClientModule to our app.module.ts file. Open and edit the app.module.ts file.

## Add Technology News component

Now create a new component to display the Technology News by running:

```
ng g c articles-technology
```

Head back to your code editor and you’ll see the new articles-technology directory we created — as well as the navbar directory we made earlier.
