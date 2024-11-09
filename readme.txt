Schema->
User
    Name ->string
    Email->string
    Title->string
    Department->string
    Role->string
    Image->?  (API) ->string  (url)


APIs
    post -> createUser
    get  ->  getalldata


Frontend-->

2 Routes--> Page-1. 1. Home Data Show
            Page-2. 2. addemployee Photo-form

        Page-2 Button create Employee-> Post API --> createUser
        page-1 useEffect-type2(getalldata)

        UseEffect
        1. On Every render  
        2. On first render
        3. On dependency  