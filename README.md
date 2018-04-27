AHBnB Challenge
=================

Task:
-------

The purpose of the project was to create a website, clone Airbnb.
We worked on the project in pairs.
The reason why not all members commit to the project is that the most of commits we did from one computer.
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

As a team, we decided to use JavaScript as the main Language for our project.

## Day first:
We hspend as a team discussing the model of the project.
We agreed to have following classes:
1. User - has an id, name, and email;
1. Property - has id, city, name, description, price, and owner(user);
1. Booking - belongs to Property and holds booking dates for the property;
1. BnB - class responsible for main methods and operations.

## Day second:
Marwa and Andrew spend time creating a draft view of our site.
Sam and Mary defined main classes and created methods and tests.
On this stage, we did not introduce Data Base and did not link our views to backend code.

## Day third:
We realized that in order to move further we need to link our code to the database.
We decided to use Postgres SQL and connected it to JavaScript.
It was a totally new concept for all of us and we have spent all day, trying to understand how to connect the database to the existing code.
In the end, we figured out that our approach was partially wrong and we need to re-start our project.

## Day four:
We initialized a new project with Express that helps to link together JS code, SQL, and HTTP.
We used our JS code as a base for model part n a new project and spend a day to link some of the methods to pages and Database.

## Day five:
We have to spend a lot of time trying to understand the flow, so we were not able to finish our project in time.
But we have learned a lot as a developer and we have learned to work as a team.
For all of us teamwork was the most important part of the project.
Every day we had a Stand-up and Retro as a group, where we discussed what went good and what was wrong.
We learned to give a feedback and understand each other.

We enjoyed the project and We have learned the lesson of the importance of good planning (first things first) and we are now ready to apply it in our next projects.

Technologies used
-----

In order to run tests, clone project and from root open file SpecRunner.html

* Jasmin 3.1.0
* Json
* JavaScript
* Fonts for interface
