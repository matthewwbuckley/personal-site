---
path: '/boost-ball'
title: 'BOOST BALL'
description: 'BOOST BALL is a pool game I developed for Android using Unreal Engine 4. Developing a game had always been a goal of mine and I am pleased with the final product. I still have a passion for games but I do not see myself pursuing game development.'
info: 'Unreal Engine, GIMP, Blender'
image: '/images/pool.png'
---

I always wanted to build a game and it needed to be simple, since I was a solo developer and had little experience. I set out to make BOOST BALL, a simple pool game where the cue ball is moved by a virtual joystick on a phone or tablet. On the second day I had finished my prototype and could tell I was almost done...

<br>
`video: https://youtu.be/L580kzq8R2c`
<br>
Bea-utiful. As it progressed further towards an actual game two problems developed:

1) There was little urgency.
2) Hitting the others balls was unsatisfying.

As a solution to the urgency I added another ball that would chase the player, causing them to lose if contact was made. To try and make hits to be satisfying I had tried a number of combinations with friction, weight, elasticity, and linear and angular dampening. The results were either too floaty or too heavy. In the end I cheated and simply applied an additional force along the contact vector.

Everything working as it should, it was time to slap UI on there and admire the finished project.

`video: https://youtu.be/vpQIs2beImI`

I hated it. It looked bad. It sounded bad. Worst of all, it was boring. I decided to start again.

The table was changed to be square and to funnel balls towards holes using sloped walls to make up for inaccuracy with a touch screen control method. I made the cue ball faster and heavier. A roof was added so balls stayed on the table. The time counter was switched to a count down, to increase urgency. Potting balls in order was boring, so potting balls now gained the player points. Balls were restricted to 1, 3 and 9 points to force the player to make choices on which ball to target, with the high value balls being larger and heavier. The balls now spawn in over time to extend game length, and in random positions to increase replayability. A Boost ability was added to really smack the balls. Power-ups were added which can give more time or modify cue ball behaviour. Set levels and an endless arcade mode were be added.

All these changes led to their own challenges. Spawning balls in during play led to questions of how and where to introduce them. Since some balls can cause the player to lose the spawn location needs to be telegraphed and balls cannot be active until spawn in is complete. Spawning them in the air means they do not interfere with play. Balls spending more time in the air meant it was hard to place them in space without a shadow, difficult with the flat lighting style. A dark semi-transparent cylinder projected down from the ball made it easier. The cueball spent a lot of time in the air, slowing the game, so a Pound ability was added so that the player could return quickly to the table.

The result is a game that I am happy with, even if there are flaws.

`video: https://youtu.be/2GlBSN1zD48`

The main drawback is that the virtual joystick is not a great control method, leading movement to feel inaccurate. In addition; the particle effects are poor and uninteresting, the power-ups are uninspired, cueball death should have a particle effect. The main menu has another error, the Arcade button is above the Trials button, which was poor design as the Trials game mode initially acts as a tutorial. I included different music and colour themes but I did not get good feedback on the default colour theme.

In the end I published on Android and at the time of writing has gained 10+ downloads and no reviews. I think I had much more fun programming it than anyone had playing it, but I am happy that I released a game.

[Please feel free to try the game out for yourself.](https://play.google.com/store/apps/details?id=com.ScrireGames.BoostBall&hl=en_GB)

