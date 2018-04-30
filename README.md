# Peep

Peep is a theme for [Ghost](https://ghost.org), influenced by the things I wanted on my own blog but couldn't find in other themes.

![Peep desktop view](https://s3.amazonaws.com/peepthemesamples/peep-desktop.png)

## Installation

To install Peep on your own Ghost blog, download the repository as a zip file and upload it to the `content/themes` directory on your server. Alternatively, you can upload the zip file via the Ghost admin panel for your site.

## Configuration

Peep follows a modified version of the [Ghost Theme Configuration Approach](https://github.com/unwitting/gtca). While the official GTCA defines a list of supported configuration properties, I've used their method to integrate a contact form into the theme via a configuration property that falls outside the official spec. Future configuration options will be added via GTCA as well.

### Contact Form

The Peep contact form is powered by AWS Lambda, and its is optional. To add it, follow the steps [here](https://www.cloudassessments.com/blog/how-to-build-a-serverless-contact-form-on-aws/) to create a serverless contact form, and add the following to the **Blog Header** section in your Ghost admin (under **Code injection**):

```
<script>window.__themeCfg.contactForm = 'your API Gateway endpoint';</script>
```

Here's what it looks like on the site:

![Peep contact form](https://s3.amazonaws.com/peepthemesamples/peep-contact.png)

*Note: The contact form is a static page that you can enable by creating a post with the slug `/contact` and setting it as a *page*. If you don't want to use it, or want to use your own contact page, you can remove the template by deleting the `page-contact.hbs` file from the theme.

Support for social media buttons and Disqus comments via code injection is coming soon!

### Color Scheme

While the color scheme is not configurable via the admin panel, I have added what I think is a fairly simple way to change the color palette across the theme with just one or two changes. If you're not fan of the yellow on black, you can modify the primary color by going to `sass/base/_variables.scss` and changing the `$color-primary` and `$color-secondary` values to whatever you want. When you're done, be sure to compile the SASS by running `npm run sass:build` from the root of the theme directory.

## Development

I run my sites on Ghost because the theme system is just insanely fun to work with. If you want to mess with my theme (or create your own), I recommend starting [here](https://docs.ghost.org/docs/install-local). Peep is compatible with Ghost v1.19 and above, so be sure to upgrade your local installation before running it.

## TODO

Here are a few of my plans for the immediate future:

- Reponsive display for mobile and tablet
- Better CSS build pipeline
- Better JS bundling
- Add social media configuration
- Add Prism support for code snippets
- Add comments
- Author pages?
- Handle stupid non-fatal `page` class error

