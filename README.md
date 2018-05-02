AHBnB Challenge
=================

Task:
-------

The purpose of this project was to create a clone of Airbnb.
We worked on the project in pairs.
Not all members of the team have made commits to the project because most of the commits were made from one computer during group work.
All team members equally contributed to the project.

User Story:
-------

```

As a User
I can enter AHbnb and see the start page.

As a User
I can search for the city I want to rent a property
and see all properties available in that city.

As a User
I can sign up/ login to book a property.

As a User
I can choose dates and see if the property is available for these dates.

As a User
I can create my property and post it on AHbnb.

As a User
I can update my property Name and Description.

As a User
I can update property Price.

As a User
I can delete from site property that belongs to me.
```

Approach:
-------

As a team, we decided to use JavaScript as the main programming language for our project.

## Day One:
We spent the first day working as a team discussing the model of the project.
We agreed to have following classes:
1. User - has an id, name, and email;
1. Property - has id, city, name, description, price, and owner(user);
1. Booking - belongs to Property and holds booking dates for the property;
1. BnB - class responsible for main methods and operations.

## Day Two:
Marwa and Andrew spent time creating a draft view of our site.
Sam and Mary defined main classes and created methods and tests.
At this stage, we chose to not introduce a database and did not link our views to backend code.

## Day Three:
We realised that in order to move further ahead we needed to link our code to the database.
We decided to use Postgres SQL and connected it using JavaScript.
It was a totally new concept for all of us, so we spent the day working together, trying to understand how to connect the database to our existing code.
In the end, we figured out that our approach was partially wrong and we need to re-start our project.

## Day Four:
We initialized a new project with Express that helped link together our JS code, SQL, and HTTP.
We used our JS code as a base for the model part in our new project and spent the day trying to link some of the methods to our HTML pages and our database.

## Day Five:
We spent a lot of time trying to understand the flow, so we were not able to finish our project in time.
Despite not finishing, we learnt a lot about working in a team and discovered a lot of new tools that will help us in future.
For all of us, teamwork was the most important part of the project.
Every day we had a stand-up and retro as a group. In our stand-up's we discussed our plans for the day and how we'd pair up and in our retro's, we discussed what went well during the day, what didn't go so well and provided feedback and guidance to each other.
We learned the importance of giving open and honest feedback, which helped us improve as a team, and individuals,  throughout the week.

We all enjoyed this project and learnt valuable lessons on the importance of good planning (first things first). We all now feel ready to take this forward with us and apply it to future projects.

Technologies used
-----

In order to run tests, clone project and from root open file SpecRunner.html

* Jasmin 3.1.0
* Json
* JavaScript
* Fonts for interface
