---
path: '/misc-projects'
title: 'Misc Projects'
description: 'I have created some projects that are either not as big, or I dont want to go into a lot of detail. It also includes a small discussion on this site'
info: 'MongoDB, Express, React, Node, gatsby, sass, php/wordpress, Unity'
image: '/images/tree.png'
---

###Painter
After I created BOOST BALL I decided to make a narrative choice game. I planned to create a puzzle where multiple playthroughs are used to move items such that the "perfect" story could play out, similar to Groundhog Day. The project was built using Unity, unlike BOOST BALL which was built in Unreal. The switch was due to Unity having a purer implementation of C# than Unreal has of C++. I eventually decided not to pursue the project and moved on to website development.

Part of the project was inspired by a tutorial on [generating watercolor art programatically](http://www.tylerlhobbs.com/writings/watercolor). The technique builds semi-transparent 2D polygons modified by a noise function and slightly moved with translational noise, to create splotches. Multiple splotches are created to produce a painted effect. I thought that I could do the same, but make it animated so that a picture could paint itself as the user read a story. I didn't progress as far as I would have liked with the project, and it is currently a very resource intensive effect.

`video: https://youtu.be/4jgPFjjSBM0`

Overall I thought it was quite nice. I did not publish it to the Unity Asset Store, despite some interest, due to it being too computationally expensive without reworking and the time required to polish and maintain the project for others. 

###Interactive Story Website

My first website project which, in hindsight was too complex. The idea was to create a site where users could author and play interactive stories which are driven by author defined variables that the user could modify through choices. Initially I created the site in WordPress and learnt a very important lesson: test up to and beyond intended usage.

The wordpress site was doomed from the start. It was built using a popular plugin called Advanced Custom Fields (ACF), which allows a custom post type to built. Initial tests were positive but larger stories were impossible as ACF submitted a database call for each custom field, and the stories could easily balloon to have hundreds of custom fields. 

I went on to remake the project in React and produced a usable sitebut the project has a number of design flaws, not including the laberynthian codebase. The major one being how the stories were written, which was a complex, dynamic form. Tiered navigation and selective rendering made the form relatively easy to navigate but no-one wants to fill in a form which may swell hundreds of inputs. There was some interest, with 100 users signed up and >150 stories started. Sadly the form made creation difficult and boring resulting in only a few simple stories created. I may remake the site with some alterations once I have more experience, once I have a solution to the problems I see with the site.

###This Portfolio Site
A simple static website built using Gatsby and hosted on netlify, both of which have left me very impressed. I took the opportunity to try out sass, due to ease of its inclusion and the desire to have more structured css.
