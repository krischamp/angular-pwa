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

Now use the code below to edit the **newsapi.service.ts** file. We’ll add HttpClient and Observable to our imports, and create functions to get the news articles from our API endpoints.

Be sure to put in your NewsAPI key on the line.

## Fix app.module with service provider & HttpClient module

To use our new service provider we need to add it and HttpClientModule to our app.module.ts file. Open and edit the app.module.ts file.

## Add Technology News component

Now create a new component to display the Technology News by running:

```
ng g c articles-technology
```

Head back to your code editor and you’ll see the new articles-technology directory we created — as well as the navbar directory we made earlier.

Open the **articles-technology.component.ts** file and edit it to add our NewsAPI service and create the array for the Technology News articles.

Next open the **articles-technology.component.html** file and delete all the boilerplate code that was added when the CLI created it. Edit the file to display the Technology News articles from our service provider.

Let’s see how that looks. Open the **app.component.html** file, delete all the boilerplate code and add the articles-technology component:

```
<app-articles-technology></app-articles-technology>
```

Save your files and view the app in your browser to see the Technology News being displayed.

## Add the JavaScript News component

In your terminal, create a new component to hold our JavaScript News content:

```
ng g c articles-javascript
```

As we did with the articles-technology component files, first we’ll edit the **articles-javascript.component.ts** ... and then edit the **articles-javascript.component.html** file ...

## Add routing

Now that we have our Technology News and JavaScript News components, we’ll add our navigation. First we’ll add routing by editing the **app-routing.module.ts** file to import our components and construct paths to them.

Now we can format the navbar component by editing the **navbar.component.html** file ...

---

# PWA building

## Build the PWA

Now that we have a functioning app — let’s make it a PWA! Go to your terminal and run:

```
ng add @angular/pwa --project angular-pwa
```

Angular CLI will take care of a few things to setup our Angular application to be a PWA. It will:

1. Add the **@angular/service-worker** package
   ... to our **app.module.ts** file imports:

```
import{ ServiceWorkerModule } from ‘@angular/service-worker’;

@NgModule({ ..

imports: [ …

ServiceWorkerModule.register(‘ngsw-worker.js’, { enabled: environment.production })

] …
```

2. Create two files in the src directory
   ... **manifest.json** and **ngsw-config.json** and add manifest.json in the registered assets of our app in the angular.json file.

```
“assets”: [

“src/favicon.ico”,

“src/assets”,

“src/manifest.json”

]
```

3. Update our index.html file
   ... with a link to manifest.json and meta tags for theme-color.

```
<link rel=”manifest” href=”manifest.json”>

<meta name=”theme-color” content=”#1976d2">
```

If you ever want to change the theme color you’ll need to change it in both the index.html and the manifest.json files.

4. Alright — lets build our PWA. In your terminal run:

```
ng build --prod
```

Notice the new dist directory that was added to our project.

5. serve the pwa with live-server

The build created our service workers and everything else our app needs to be a PWA. To see it in action, we’ll need to serve it from an http-server because service workers don’t work with ng serve.

```
npm i -g http-server
```

and then launch the PWA by running:

```
http-server -p 8080 -c-1 dist/angular-pwa
```

Now go checkout our PWA at: http://127.0.0.1:8080

---

## Deploy the PWA with Netlify
