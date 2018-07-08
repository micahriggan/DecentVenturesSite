# Purpose
This is my personal site, but it's pretty configurable. My goal is to make it pretty simple to add new content or list pages

# Updating Menu / Page Names 
The page names are stored in src/constants/config.js
If you add a page, or want to change a logo, you'll need to edit this file
Make sure the url is present in the router on pages/App/App.js
```
module.exports = {
  siteName: 'Decent Ventures',
  github: 'https://github.com/micahriggan',
  twitter: 'https://twitter.com/micahriggan',
  pages: [
    {
      name: "Projects",
      url: "/",
      logo: "logo.svg",
      disabled: true
    },
    {
      name: "Courses",
      url: "/courses",
      logo: "logo.svg"
    },
    {
      name: "Blog",
      url: "/blog",
      logo: "axo.png"
    },
  ]
};
```

# Logos
All of the page logos must be in src/resources 


# Creating a new Page

```
import React from "react";
import Posts from "../../components/Posts/Posts";
import Header from "../../components/Header/Header";
import blogs from "../../constants/blogs";
export default function(props) {
  const blogLink = url => (url ? <a href={url}>Read More on Medium</a> : "");

  return (
    <div>
      <Header path={props.location.pathname} />
      <Posts list={blogs} action={blogLink} />
    </div>
  );  
}
```

This is an example of how to create a blog page with the Posts component.

Actions are functions that take in the actionUrl property of a post, and return some content

```
// Edit the router in src/pages/App/App.js
<Router history={customHistory}>
  <Switch>
    <Route exact path="/" component={Posts} />
    <Route exact path="/blog" component={Blogs} />
    <Route exact path="/courses" component={Courses} />
  </Switch>
</Router>

```

## Steps to add a new page

* Create a page in src/pages/
* Add the page to src/constants/config.js
* Add the page to the router in src/pages/App/App.js
  * Make sure the url for the router matches what you put in config

## Disabling pages
If you set disabled: true a page will not show in the menu


# Adding a new post to a page
This is an example post
```
  {
    name: "Eth Dapps",
    logo: "images/color_logo_transparent.svg",
    url: "https://github.com/DecentVentures/ethdapps",
    actionUrl: "https://github.com/DecentVentures/ethdapps",
    desc: `A dapp that collects links and descriptions of ethereum dapps`
  },
```

* Go to the constants file that is being loaded into your page
* Append an object that has the properties above


# Using with s3 bucket, or static file hosting
If you use something like an s3 bucket, you may need to set the error page as index.html

This is because you will get a 404 when different links are clicked, since this project uses react-router
