---
path: '/short-stories'
title: 'Short Story Website'
description: 'A website to allow users to submit and rate short stories. I designed the site with the idea that less is more, to try and get an elegant perminant feel, similar to physical print. Overall, I think I failed and the site is somewhat boring. As a learning exercise it deepened my React knowedge, but I want to pursue other projects.'
info: 'MongoDB, Express, React, Node'
image: '/images/website.png'
---

A very simple "restricted" CRUD application which allows users to Create and Read short stories, of 100, 200, or 400 words, and rate and comment with 10, 20, or 40 words. The restriction is that there is no Update or Delete functionality. This was the design intent and was chosen to emulate print media, where once a piece it published it cannot be amended. 

I ultimately came away disappointed with this project. I wanted a simplistic design but made something that looks rather boring. I wanted a feeling of permanence to elicited a deliberate approach to publishing, but it simply raised the emotional cost of submitting a story. I wanted reviews and comments to be hidden before a user submits one themselves to reduce outside influences, but it made the site look empty.

The site was initially larger in scope with audio readings, series, and playlists, but these were cut as I felt less confident in the sites design on both a systemic and aesthetic level. There are programming design choices that I will avoid in the future. In particular the reference to the app being passed down was inelegant, and using context providers and consumers  would have improved readability. In addition, reference passing was used with the backend calls, where the calling method had a reference to the form that called it and set the data directly using that reference, instead of just returning the data. While it does work there is no need for the complexity and I do not like the design as it mixes responsibility.

Looking back, I have improved my react knowledge and feel more confident in the environment. The project was principally to get more comfortable in react and write a structured project. I am disappointed with the overall result, but as a learning exercise it was valuable. 

[Here is the github repository.](https://github.com/matthewwbuckley/WriterWebsite)