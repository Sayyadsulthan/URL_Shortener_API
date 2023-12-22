# URL Shortener API

# Hosted Url: 
https://urlshortener-8wtd.onrender.com/
 
<!-- First user need to Follow the Registration process  -->
 

# For Testing API Use PostMan

# API Routes are :

    1. POST  https://urlshortener-8wtd.onrender.com/user/register
        {
            "username":"abc",
            "password":xxx
            "confirmPassword":xxx
        }

    2. POST  https://urlshortener-8wtd.onrender.com/user/login
        {
             "username":"abc",
            "password":xxx
        }

    3. POST  https://urlshortener-8wtd.onrender.com/shorten
        <!-- Provide Token which generated in login route -->
        <!-- IN Headers Authorization: Bearer Token -->
        {
            "url":"https://www.google.com/"
        }

    4. GET  https://urlshortener-8wtd.onrender.com/(ShortUrlId) xxxx
         <!-- Provide Token which generated in login route -->
        <!-- IN Headers Authorization: Bearer Token -->

# Follow the Screen Shots for easy understand

# Register:

<img  alt="image" src="https://github.com/Sayyadsulthan/URL_Shortener_API/assets/105346556/c1011001-c440-4970-8ddd-84485642dfaf">

# Login:

<img width="642" alt="image" src="https://github.com/Sayyadsulthan/URL_Shortener_API/assets/105346556/c2911288-50b6-4267-9f2b-8d33479f8cb3">
     <img width="642" alt="image" src="https://github.com/Sayyadsulthan/URL_Shortener_API/assets/105346556/49a9048d-3d9d-4ec4-a824-5ac7a0aef4bd">
    

# Create the Short URL
       For Authentication use Authorization in key and value Bearer token 
       
       
    
<img width="624" alt="image" src="https://github.com/Sayyadsulthan/URL_Shortener_API/assets/105346556/a082a5b8-673b-4d11-93af-c98a04f885c0">
<img width="632" alt="image" src="https://github.com/Sayyadsulthan/URL_Shortener_API/assets/105346556/82094300-a34e-4089-8a7a-ad87769fe4cf">

<img width="637" alt="image" src="https://github.com/Sayyadsulthan/URL_Shortener_API/assets/105346556/7e919f78-d27b-4046-b2e4-a0f2b3cfef65">



# For use of the link

   <!-- Authentication steps are same as create short Url -->
    Put the shortUrl on routes last end
<img width="638" alt="image" src="https://github.com/Sayyadsulthan/URL_Shortener_API/assets/105346556/17ebe06c-34c5-46a7-8e06-0319eb9f7b3e">


    
 <img width="646" alt="image" src="https://github.com/Sayyadsulthan/URL_Shortener_API/assets/105346556/d044e766-bdd2-4f35-82b2-ecbe8cc097fa">
    
# Thank You for Reading.

    Fork this project and run on your system
