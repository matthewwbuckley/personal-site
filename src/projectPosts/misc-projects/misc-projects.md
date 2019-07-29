---
path: '/misc-projects'
title: 'Misc Projects'
description: 'I have created some projects that are either not as big, or I dont want to go into a lot of detail. It also includes a small discussion on this site'
info: 'MongoDB, Express, React, Node, gatsby, sass, php/wordpress, Unity'
image: '/images/tree.png'
---

###Painter
After I created BOOST BALL I decided to make a narrative choice game. I planned to create a puzzle where multiple playthroughs are used to move items such that the "perfect" story could play out, similar to Groundhog Day. The project was built using Unity, unlike BOOST BALL which was built in Unreal. The switch was due to Unity having a purer implementation of C# than Unreal has of C++. I eventually decided not to pursue the project and moved on to website development.

The part of the project that saw the most work was inspired by a tutorial on [generating watercolor art programatically](http://www.tylerlhobbs.com/writings/watercolor). The technique builds semi-transparent 2D polygons modified by a noise function and slightly moved with translational noise, to create splotches. Multiple splotches are created to produce a painted effect. I thought that I could do the same, but make it animated so that a picture could paint itself as the user read a story. I didn't progress as far as I would have liked with the project, and it is a pure implementation of the technique, not suited for dynamic generation, leading it to be very resource intensive. 

`video: https://youtu.be/4jgPFjjSBM0`

Overall I thought it was quite nice. I did not publish it to the Unity Asset Store, despite some interest, due to it being too computationally expensive without reworking and the time required to polish and maintain the project for others. However, creating a limited store of multiple generated splotches would greatly lower comutational complexity and would have been the solution I would have implemented.

###Interactive Story Website Prototypes

The idea was to create a site where users could author and play interactive stories which are driven by author defined variables that the user could modify through choices. Initially I created the site in WordPress and learnt a very important lesson: test up to and beyond intended usage. After a few months of learning PHP and wordpress I had built a site in which all the individual elements worked as intended. I began telling people and tried to make a full complete interactive story. The site imploded, and I learned that it was doomed from the start. 

It was built using a popular plugin called Advanced Custom Fields (ACF), which allows a custom post type to built and is a very good plugin. Initial tests were positive but larger stories were impossible as ACF submitted a database call for each custom field, and the stories could easily balloon to have hundreds of custom fields. I spent some time thinking about it and realised a solution would be to submit a single JSON object instead of multiple custom fields. It worked, and I showed people that they could write hundereds of lines of JSON to make their own story. In a huge shock, no-one wanted to manually write hundreds of lines of JSON. Here I learnt another lesson: just because it fixes a problem does not mean it is a good solution.

I went on to remake the project in React, I think mainly out of annoyance at my previous failure. Over a similar ammount of time a usable site was built but had a number of design flaws. The major one being how the stories were written, which was a complex, dynamic form. Tiered navigation and selective rendering made the form relatively easy to navigate but no-one wants to fill in a form which may swell hundreds of inputs. There was some interest, with 100 users signed up and >150 stories started. Sadly the form made creation difficult and boring resulting in only a few simple stories created. I realised a week after I published the site that there was no way to fix the site and a complete re-write would be required to fill the needs of authors. Sadly, although I had learnt a lot, I consider this another failure and now with people signed up I felt that abandoning the site was letting them down. I was quite bored of this project by now, but I hated letting people down (even if it was all in my head, and people were very supportive) and have since remade the site. The new site has taken longer and I am happier with the design, which you can head here (not written yet).

###This Portfolio Site
A simple static website built using Gatsby and hosted on netlify, both of which have left me very impressed. I took the opportunity to try out sass, due to ease of its inclusion and the desire to have more structured css.
