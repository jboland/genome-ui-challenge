# Genome UI Development Challenge

## The Challenge

This repository contains a basic HTML site with an image and some copy. Your mission, if you choose to accept it, is to add some form of navigation structure on to the page so that a user can easily toggle between the four major copy sections on the page. The navigation pattern and design are completely up to you - take this challenge and run with it!

## The Rules

1. You must complete this challenge as a fork of this repository. You must have your final commit in to your forked version of this repository no later than 3 days after you fork the code.

2. All code in your fork must be your own. Use of existing libraries or frameworks is permitted, but you must be the one to implement/integrate the libraries into the site.

3. The original page content and banner image must be preserved. Any other aspects of layout can be added to/modified as needed.

4. The navigation structure must be developed from a mobile-first standpoint. It should be responsive and fully functional on both mobile and desktop browsers.

5. Site styling must be done using [Sass](http://sass-lang.com/). Do not modify the site CSS files directly.

## What We're Looking For

* Semantic HTML
* Clean code
* Compliance with basic accessibility standards (WCAG 2.0)
* An intuitive user interface
* Creativity, from both a design and a functionality standpoint
* Cross-browser and cross-device compatibility (for current versions of all major browsers)

## The Result

*Insert your fork's documentation or a brief summary of how you completed the challenge here.*
I was aiming at simplicity here.  I was considering adding in some show-hide functionality that would selectively display the content chosen from the nav, but opted not to do this because sometimes as a user I find it frustrating to have content hidden from me.  I wanted to keep things simple and avoid bringing in large frameworks, CSS or JS.  For that reason I opted for the vanilla-js approach and the one plugin that did not require jQuery to assist in scrolling animation.

Two things I did not get to that I would have liked to are:

1. On scroll, I would have liked to implement an active class on the nav items on the desktop as you reach each section.  I know this would have been relatively easy to accomplish if I were using jQuery, but I had opted not to and I did not have the time to figure this out in vanilla JS.

2. I would have liked to better differentiate the final section from the rest.  It was lacking in content, and thus was short in height.  I could flub the height and make it large just by more padding or increased font-size (which I did to an extent).  Doing something like adding more copy or adding in an image would have been helpful here, but based on the rules it seemed better not to mess with the actual content of the site, so I abstained.

As for the design choices, I tried my best here, but I am not much of a visual designer, so apologies if some of my choices are not the greatest.

Nav and close images courtesy of https://icomoon.io/
Smooth scroll courtesy of https://github.com/cferdinandi/smooth-scroll

