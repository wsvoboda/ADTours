# American Dominican Tours

This is a full stack multi-page website for a tour company in the Dominincan Republic. 

It is hosted [here](https://ad-tours.herokuapp.com/).

The front end portion of this site was created using HTML, CSS, and JavaScript. The styling was done using Bootstrap. 

The back end uses express, Node, and Supabase.

The site opens to a homepage with a navigation bar and a carousel of pictures and phrases. The logo was created using Canva.

![image](https://user-images.githubusercontent.com/78281930/119207637-76f20300-ba64-11eb-93f1-5de6c2bb89db.png)

The Featured Tours page has several tours listed with a small description, cost per person, quanitity input, and button to add the tour to the cart.

![image](https://user-images.githubusercontent.com/78281930/119207686-b9b3db00-ba64-11eb-993e-b7bded196621.png)

The FAQ page has some frequently asked questions and answers! 

![image](https://user-images.githubusercontent.com/78281930/119207749-eec02d80-ba64-11eb-9b7a-6cf0785d2f79.png)

The Contact page brings the user to a form. The user can fill out the form and send a message. The message is sent to the database. The links to social media do not work yet because the business does not have those social media pages, yet.

![image](https://user-images.githubusercontent.com/78281930/119207806-2038f900-ba65-11eb-9366-58dce8d71818.png)

If the user has added tours to their cart, they can access the cart using the icon on the right side of the navigation bar.

![image](https://user-images.githubusercontent.com/78281930/119207846-4f4f6a80-ba65-11eb-964c-70e291907fac.png)

When the user first visits the home page, a cookie is created. This cookie follows the user through to all of the pages on the site. When the user adds tours to their cart, the cookie is saved to the database, along with their cart items. The cart page pulls everything from the database that matches the user's cookie. The user is able to update their trip quantity or remove tours from the cart altogether. The checkout button informs the user that checkout capability is coming soon. 

