# URL Shortener API

<!-- First user need to Follow the Registration process  -->

# For Testing API Use PostMan

# API Routes are :

    1. POST  /user/register
        {
            "username":"abc",
            "password":xxx
            "confirmPassword":xxx
        }

    2. POST  /user/login
        {
             "username":"abc",
            "password":xxx
        }

    3. POST  /shorten
        <!-- Provide Token which generated in login route -->
        <!-- IN Headers Authorization: Bearer Token -->
        {
            "url":"https://www.google.com/"
        }

    4. GET  /(ShortUrlId) xxxx
         <!-- Provide Token which generated in login route -->
        <!-- IN Headers Authorization: Bearer Token -->

