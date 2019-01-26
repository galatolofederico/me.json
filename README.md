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
    * `onlineidentity`
        * `emails` Object of Objects
            * `primary`: Primary email
            * `$scope`: $scope E-Mail
        * `profiles` List of Object
            * `$platform`: Link to profile on $platform
    * `publications`: Array of
        * `title`: Title of the publication
        * `Authors`: Coma separated list of authors
        * `date`: Release date
            * `day`
            * `month`
            * `year`
        * `type`: One of "journal" "conference" "chapter" "book" "whitepaper" 
        * `container`: Journal/conference/book name 
        * `volume`
        * `issue`
        * `pages`
        * `isnn`
        * `isbn`
        * `doi`
        * `link`
        * `abstract`


