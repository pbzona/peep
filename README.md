# Sprout

This is a minimal theme for [Ghost](https://ghost.org).

The goal for Sprout is to create a super simple base from which I (or you!) can create the theme you really want for your blog. While Casper and other starter themes look great, I've found them to be opinionated. When building themes on top of other themes, I find myself tearing out a bunch of code before I even have something workable, and so I started this theme from scratch to avoid that problem.

## Installation

Since this is such a minimal theme, it's meant to be used for development (although I won't stop you if you want to use it on your blog as-is). To get started, install a local copy of Ghost and start it up according to the [instructions](https://docs.ghost.org/v1.0.0/docs/install-local#section-developing-themes).

Copy this project into your themes file (`[your-ghost-install-path]/content/themes`) and install the dependencies with NPM or Yarn. Finally, start the `sass:watch` NPM script and you're ready to start customizing.

## Assumptions

Sprout is meant to be used for a single user blog. I'll add more to this section once I've figured out what other opinionated things I'm doing.

## Customizing

The default color scheme is fairly basic - you define a primary color in the `_variables.scss` file and the theme creates a default color palette, applying appropriate shades of the color to things like links, header backgrounds, and inline code snippets.

The color scheme is what I've configured to be easily changeable so far. The rest of the styles can be edited in the SASS files, of course.