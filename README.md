# Purpose
This is my personal site, but it's pretty configurable. My goal is to make it pretty simple to add new content or list pages

# Updating Menu / Page Names 
The page names are stored in src/constants/config.js
If you add a page, or want to change a logo, you'll need to edit this file
Make sure the url is present in the router on pages/App/App.js
```
module.exports = {
  siteName: 'Decent Ventures',
  pages: [
    {
      name: "Projects",
      url: "/",
      logo: "logo.svg"
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


# Adding new content to a page
The AppList component can display basic content from a JSON object.
<AppList list={myList} />
```
[{
    name: "When I retire...",
    url: "https://medium.com/@micahriggan/when-i-retire-i-will-c9e363064086",
    actionUrl: "https://medium.com/@micahriggan/when-i-retire-i-will-c9e363064086",
    desc: `Tonight I was thinking about long term goals.`
  }]
```

Feel free to replace the content in blog.js, apps.js or courses.js with your own content and rename the pages in config.js


# ActionUrl
Each element can have an actionURL, this data that can be passed into an action function. 

An action function is a function that gets called for each element of the list and can output
some content that will display at the bottom of each post

See src/pages/Courses/Courses.js for an example of how to add a button to the end of each post
