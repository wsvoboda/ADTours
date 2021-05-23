# American Dominican Tours

This is a full stack multi-page website for a tour company in the Dominican Republic. 

It is hosted [here](https://ad-tours.herokuapp.com/).

The front end portion of this site was created using HTML, CSS, and JavaScript. The styling was done using Bootstrap. 

The back end uses express, Node, and Supabase.

The site opens to a homepage with a navigation bar and a carousel of pictures and phrases. The logo was created using Canva.

![image](https://user-images.githubusercontent.com/78281930/119246323-4aaeb300-bb46-11eb-85fb-292c1a6f4c7c.png)

The Featured Tours page has several tours listed with a small description, cost per person, quantity input, and button to add the tour to the cart.

![image](https://user-images.githubusercontent.com/78281930/119246337-61550a00-bb46-11eb-92c9-f15d27c8e61a.png)

The FAQ page has some frequently asked questions and answers! 

![image](https://user-images.githubusercontent.com/78281930/119246346-76ca3400-bb46-11eb-9132-e84828ef573e.png)

The Contact page brings the user to a form. The user can fill out the form and send a message. The message is sent to the database. The links to social media do not work yet because the business does not have those social media pages.

![image](https://user-images.githubusercontent.com/78281930/119246357-8a759a80-bb46-11eb-993d-561780511abd.png)

If the user has added tours to their cart, they can access the cart using the icon on the right side of the navigation bar.

![image](https://user-images.githubusercontent.com/78281930/119246370-a4af7880-bb46-11eb-8ad8-abb81ebc8d40.png)

When the user first visits the home page, a cookie is created. This cookie follows the user through to all of the pages on the site. When the user adds tours to their cart, the cookie is saved to the database, along with their cart items. The cart page pulls everything from the database that matches the user's cookie. The user is able to update their trip quantity or remove tours from the cart altogether. The checkout button informs the user that checkout capability is coming soon. 

