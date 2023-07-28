# me.json

Myself as a JSON document.

I use this file to generate my [personal site](https://galatolo.me). If you like it and if you want to make it yours follow the instructions in the [website repository](https://github.com/galatolofederico/personal-website-next)

## Structure

* `anagraphic`
    * `fullname`
        * `first` First Name
        * `middle` Space-separated list of middle names
        * `last` Last name
    * `birthday`
        * `day`
        * `month`
        * `year`
    * `nationality`
* `digitalidentity`
    * `telephone`: Telephone number
    * `websites`: Website link
    * `emails`: Email address
    * `profiles` Array of
        * `platform`: Name of the platform (eg. "github", "linkedin", "twitter", ...)
        * `link`: Link to the profile
        * `description`: Very short description
        * `icon`: Font-Awesome icon
* `publications`: Array of
    * `title`: Title of the publication
    * `name`: Unique name for permalinks
    * `Authors`: Coma separated list of authors
    * `date`: Release date
        * `day`
        * `month`
        * `year`
    * `type`: One of "journal" "conference" "chapter" "book" "whitepaper" 
    * `container`: Journal/conference/book name 
    * `keywords`: Array of keywords
    * `afferences`: Array of afferences
    * `volume`
    * `issue`
    * `pages`
    * `isnn`
    * `isbn`
    * `doi`
    * `link`
    * `abstract`
* `advised_theses`: Array of
    * `title`: Thesis title
    * `author`: Candidate name
    * `advisors`: Thesis advisors
    * `type`: Thesis type (BS,MS,PhD,...)
    * `date`: Presentation date
        * `day`
        * `month`
        * `year`
    * `link`: Link to Document
* `projects`: Array of
    * `title`: Title of the project
    * `name`: Unique name for permalinks
    * `description`: Description of the project
    * `link`: Link to the project
    * `afferences`: Array of afferences
    * `date`: Date of start
        * `day`
        * `month`
        * `year`
* `lectures`: Array of
    * `title`: Title of the lecture
    * `name`: Unique name for permalinks
    * `position`: Where the lecture was held
    * `container`: Container in which the lecture was held
    * `date`: Date
        * `day`
        * `month`
        * `year`
    * `resources` Array of
        * `name`: Name of the resource
        * `link`: Link to the resource

