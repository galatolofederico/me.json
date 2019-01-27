# me.json

A (community?) effort to make **the** standard json schema to define yourself as an academic human being

## Documentation

* `anagraphic`
    * `fullname`
        * `first` First Name
        * `middle` Space-separated list of middle names
        * `last` Last name
    * `borndate`
        * `day`
        * `month`
        * `year`
    * `nationality`
* `digitalidentity`
    * `telephones` Array of
        * `scope`: Telephone number scope (eg. "office", "private", ...)
        * `value`: Telephone number
    * `websites`: Array of
        * `scope`: Website scope (eg. "personal", "institutional",... ) 
        * `value`: Website link
    * `emails` Array of
        * `scope`: Email scope (eg. "primary", "secondary", "institutional",... )
        * `value`: Email address
    * `profiles` Array of
        * `platform`: Name of the platform (eg. "github", "linkedin", "twitter", ...)
        * `value`: Link to the profile
* `publications`: Array of
    * `title`: Title of the publication
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
* `projects`: Array of
    * `name`
    * `description`
    * `link`: 
    * `afferences`: Array of afferences

