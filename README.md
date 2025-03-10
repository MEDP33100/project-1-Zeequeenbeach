[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/2JhgCWku)
# MEDP 33100 Project 1: Interactive Storytelling

## Project Overview

- This project is an interactive adaptation of the popular nursery rhyme Sing a Song for Sixpence.
- As users scroll, they can read the rhyme while a version of the melody plays in the background. Each illustration moves gently, pausing when you hover over it.

## Figma Design

- [Figma Design](https://www.figma.com/board/rF4sH8DIsy0T58ZEpnpSrR/Sing-a-Song-for-Sixpence?node-id=0-1&t=wmg4V90nqKO5tiqL-1)
- I knew I wanted to implement a horizontal scroll, so I first mapped out the placement of each image and text as they appeared across the screen.
- From there, I decided which animations and sound effects to incorporate and when they should occur.

## Features

- CSS Animations
    - Images have a subtle float effect to create movement and visual interest.
    - Hovering over an image pauses the animation to prevent distractions.
    - "The End" text flickers, highlighting the conclusion of the site and story.
- GSAP Animations
    - The horizontal scrolling effect helps the story to flow.
    - Images slide smoothly into view as they appear on the screen.
- Sound Effects
    - A click sound occurs when "Begin" is clicked. It readies the user for the music.
    - The entire story is accompanied by a version of the rhyme's melody. The sound helps to immerse the user in the story.
- User-Triggered Events
    - The pop-up appears when the page loads, and users must click "Begin" to proceed. Clicking "Begin" closes the pop-up and plays the music.
    - Hovering over an image pauses any distracting animations. 
    - Scrolling through the website allows you to continue reading. 
- Responsive Design 
    - Desktop: Images and text are placed side by side with plenty of space, resulting in a balanced layout and readability.
    - Tablet: The layout is kept side by side but scaled down slightly. Images are reduced to about 45% width, and text size is slightly reduced to ensure readability without overwhelming the screen.
    - Mobile: The design remains side by side while adjusting for smaller screens. Images and text take up less space, with fewer gaps between them.

## Technologies Used

- Languages: HTML, CSS, JavaScript
- Libraries: GSAP for Animation
- Other: GitHub Pages for Hosting, Figma for Design

## Live Demo

- [Live on GitHub Pages](https://medp33100.github.io/project-1-Zeequeenbeach/)

## Credits

Sound
- Click Sound-Effect: [Pixbay](https://pixabay.com/sound-effects/mouse-click-sound-233951/)
- Background-Music: [Wikipedia](https://en.wikipedia.org/wiki/Sing_a_Song_of_Sixpence)

Other
- Illustration & Source Text: [Internet Archive](https://archive.org/details/singsongforsixpe00cald/page/n35/mode/2up)
- Font: [Google Font](https://fonts.google.com/specimen/EB+Garamond)

Resources
- [GSAP ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)
- [GSAP ScrollTrigger for Horizontal Scroll](https://gsap.com/community/forums/topic/33311-using-gsap-scrolltrigger-for-horizontal-scroll/)
- [How to Create an Awesome Horizontal Scroller](https://www.youtube.com/watch?v=Mg3YT5TKNG4)
- [CodePen Flickering Animation CSS](https://codepen.io/engsiang/pen/eWeNOP)
- [Stack Overflow Autoplay Audio](https://stackoverflow.com/questions/74753188/is-there-a-way-to-autoplay-audio-in-html)
- [Stack Overflow Media Queries](https://stackoverflow.com/questions/6370690/media-queries-how-to-target-desktop-tablet-and-mobile)
- [Geeks for Geeks CSS Floating Animation](https://www.geeksforgeeks.org/css-floating-animation/)
- Acknowledge any resources, tutorials, or references you used to help complete the project.

## Future Enhancements

- List any features you would’ve liked to add if given more time
- I would add more animations to the images. I would want to animate what the line was describing in further detail.
