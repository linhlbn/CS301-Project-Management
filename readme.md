# Project Management Final Project

| Table of Content |
| --- |
| I/ [Project Summary](#project-summary) |
| II/ [Team Members](#team-members) |
| III/ [Description](#description) |
| IV/ [Installation](#installation) |
| V/ [Usage](#usage) |
| VI/ [Project Techstack](#project-techstack) |
| VII/ [Project Status](#project-status) |
_____

## I/ <a id='project-summary'></a>Project Summary

Our final project for the Project Management course is an Ecommerce platform, tailored to the Food and Beverages industries. Built using Django, the platform provides a user-friendly shopping experience. It includes features such as product browsing, addition and confirmation of items in a cart, and user authentication for a personalized experience. While the payment functionality isn't currently included, the platform supports full CRUD operations for product management, demonstrating our proficiency in creating scalable and secure applications.

## II/ <a id='team-members'></a>Team Member
 
2059009 - Lê Quang Hải Đăng

2059017 - Văn Công Gia Hưng

2059025 - Phạm Thái Linh
 

## III/ <a id='description'></a>Description

Our project uses Django's Model-View-Template (MVT) architecture, creating a scalable and secure e-commerce platform for the Food and Beverage industry. By separating data structure (models), logic and processing (views), and presentation (templates), we've crafted an application that promotes efficiency in development and ease in maintenance.

At present, only administrators have the ability to add food products to the platform. While this guarantees a controlled and high-quality product listing, it limits the speed and volume of new product introductions. We've recognized this limitation and are planning a significant update for our next release to overcome it.

In the near future, we plan to extend product management rights to users with a designated 'vendor' role. These vendors will have the ability to add, edit, and delete their own product listings, bringing a much higher level of diversity and dynamism to the platform. By empowering these vendors, we hope to enhance our customer experience by offering a wider array of food and beverage choices.

As a team, we are engaged in close collaboration and iterative development practices. This approach is bolstering our technical abilities and fostering excellent teamwork. Currently, our project is ongoing, with a keen focus on refining the e-commerce functionality and gearing up for the expansion of product management capabilities in our next release. We are committed to meeting project milestones and delivering an effective, user-oriented outcome.

## IV/ <a id='installation'></a>Installation

1. Clone the project repository from our GitHub page.
2. Ensure Python 3.9+ and Django 4.2+ are installed on your machine. Also, Pip, the Python package manager, should be installed.
3. Navigate to the project directory and install the required dependencies using `$ pip install -r requirements.txt`.
4. Run the server using `python manage.py runserver`.
5. Access the project by navigating to `localhost:8000` or `http://127.0.0.1:8000/` on your web browser.

Detailed installation instructions are available in the documentation that we provided during the process of project initialization.

## V/ <a id='usage'></a>Usage

Our ecommerce platform is user-friendly and intuitive to navigate. Below, we provide a brief guide on how to use the platform:

1. Home Page: Once you access the platform, you'll land on the homepage which presents a selection of food and beverage items available for purchase. You can browse through the products, and for more details, click on the product's image or name.

2. Product Page: Here, you can view more details about the product, including its name, price of products. If you wish to purchase the product, select the desired products and product will be added into the product list on the right side of the browser.

3. Shopping Cart: You can access your shopping cart at any time by clicking the 'Cart' icon on the top-right corner of the page. Here, you can review the items in your cart, remove items and add more comment/ notes.

4. User Authentication: To have a personalized shopping experience, you can register on our platform by clicking on the 'Sign Up' button and providing the necessary information. If you're already registered, click 'Sign In' to access your account.

5. User Profile: we will update this feature in near future.

6. Admin Panel: As an administrator, you can manage the platform's products by navigating to the admin panel. Here, you can add new products, or update or delete existing ones. This feature is currently restricted to administrators, but we're working on extending these capabilities to vendor-role users in our next release.

Please remember that the application is in development phase, and certain features may be added or changed in future updates. We encourage you to provide us feedback to help us improve the platform.

## <a id='project-techstack'></a>VI/ Project Techstack

- **Django**: Our backend framework.
- **SQLite**: Our database system.
- **HTML/CSS/JavaScript & Bootstrap**: Our front-end technologies.

## <a id='project-status'></a>VII/ Project Status

Done based on requirements from team leader. (continuous improvements from developers)
