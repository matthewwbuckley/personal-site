---
path: '/boost-ball'
title: 'BOOST BALL'
description: 'BOOST BALL is a pool game I developed for Android using Unreal Engine 4. Developing a game had always been a goal of mine and I am pleased with the final product. I still have a passion for games but I do not see myself pursuing game development.'
info: 'Unreal Engine, GIMP, Blender'
image: '/images/pool.png'
---

I have always had an interest in games and wanted to make one. I had little experience so the design needed to be as simple as possible. I set out to make a simple pool game where the player has direct control over the cueball. This would limit the need for 3D modelling, animations, and texturing. On the second day I had finished my prototype and could tell I was almost done.
<br>
`video: https://youtu.be/L580kzq8R2c`
<br>
Bea-utiful. As it progressed further towards an actual game a few things became aparent. The gameplay was unsatisfying because hitting other balls lacked a feeling of impact. Experimenting with physics helped, but felt either too floaty or too heavy. The best results came from combining heavier physics and an additional force along the contact vector. Another prblem was that the game lacked urgency and excitement. Another ball that chased and destroyed the player was added, with its movement speed based on its proximity to the player. A timer was added and the player was penalised for hitting balls in the incorrect order.

These problems solved it was time to slap UI on there and admire the finished project.

`video: https://youtu.be/vpQIs2beImI`

I hated it. It looked bad. It sounded bad. It was boring. It was hard. Worst of all the optimal strategy was to ignore the potting order and just get lucky. I decided to start again with a long list of problems and complaints.

It was too hard to hit the balls accurately when using a touch screen and so the table was redesigned to be square with curved walls that funneled balls towards pockets. A time-limited boost ability was added to deliver a satisfying increase in power when needed, and a jump/pound feature was added to offer additional collision and escape possibilities. Both made gameplay more involved and interesting. The timer increased urgency but didnt create that sudden ramp in pressure acheived with a countdown. To enhance this a prominant 3-2-1 was added to the screen. To have audio feedback I used inhuman sounds which had tonal similarity to a 3-2-1 countdown. Potting balls in order was not exciting, and limited player behaviour, so balls were changed to have point values of 1, 3, and 9. Their size and density were changed with their point value to increase difficulty, affect the risk/reward payoff, and allowing players room to make tactical choices. Power-ups were added to further diversify gameplay, with one that increased the countdown timer, which allowed games to be extended. This feature would eventually be used to create a possibly endless arcade mode. Random ball placement was implemented to increase replayability, spawning based on a list of point values and times. This allowed different levels to be created, and a small campaign was built with an increasing difficulty curve and high scores for replayability.

These solutions also created their own problems. Spawning balls in during play led to questions of how and where to introduce them. The game ending chaser ball was still present and the threat of a loss required the spawn locations to be telegraphed to the player, and for them to be inactive until spawn in is complete. Spawning them in the air was also a way to lengthen this spawn in time, and kept the play surface uncluttered. The increase in speed and power of the cue, the reduction in weight of lower point balls, and the addition of a curve to the play table meant that balls were more likely to become airborn. To stop them leaving the table a transparent roof was added, and a downward pound action was added to the cue ball to reduce player inactivity. The additional height increased visual confusion and balls were hard to place on the z-axis. Due to the computational cost of dynamic lighting a flat lighting model was chosen, so the traditional shadow to help indicate its position was not an option. Instread, a semi transparent cylinder was extended below each ball. 

The result is a game that I am happy with, even if there are flaws.

`video: https://youtu.be/2GlBSN1zD48`

The main drawback is that the virtual joystick is not a great control method, leading movement to feel inaccurate. The particle effects are poor and uninteresting, the power-ups are uninspired, and cueball death should have a particle effect. I included different music and colour themes but I did not get good feedback on the default colour theme, which should have been more neutral. The flat UI was simplistic and could have been made more visually interesting. 

In the end I published on Android and at the time of writing has gained 10+ downloads and no reviews. It took around half a year or more to get familiar with the Unreal Engine and complete the game. Sadly, I think I had much more fun programming it than anyone had playing it, and is the most fun I have had with a project to date. I spent some more time considering game development, moving to Unity for its C# support (as opposed to Unreals modified implementation of C++, which I did not use) to create a few demos. After thinking on what I had acheived I didn't see game development as a safe career choice and decided to focus on web development. Despite not moving forward on the game development career path I am very happy that I actually made a playable and published game.

[Please feel free to try the game out for yourself.](https://play.google.com/store/apps/details?id=com.ScrireGames.BoostBall&hl=en_GB)

