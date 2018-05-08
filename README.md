# Peep

Peep is a theme for [Ghost](https://ghost.org), influenced by the things I wanted on my own blog but couldn't find in other themes. Most of the structure is built on top of my minimal [Sprout theme](https://github.com/pbzona/sprout).

![Peep desktop view](https://s3.amazonaws.com/peepthemesamples/peep-desktop.png)

## Installation

To install Peep on your own Ghost blog, download the repository as a zip file and upload it to the `content/themes` directory on your server. Alternatively, you can upload the zip file via the Ghost admin panel for your site.

## Configuration

Peep adheres to the [Ghost Theme Configuration Approach](https://github.com/unwitting/gtca), and contains a separate configuration object for options that fall outside the GTCA spec. GTCA defines a list of supported configuration properties in their project, but I've used their method to integrate a contact form into the theme via the `__peepCfg` configuration object as well. Future configuration options will be added via both of these methods, depending on their scope.

### Contact Form

The Peep contact form is powered by AWS Lambda, and it is optional. To add it, follow the steps [here](https://www.cloudassessments.com/blog/how-to-build-a-serverless-contact-form-on-aws/) to create a serverless contact form, and add the following to the **Blog Header** section in your Ghost admin (under **Code injection**):

```
<script>window.__peepCfg.contactForm = 'your API Gateway endpoint';</script>
```

Here's what it looks like on the site:

![Peep contact form](https://s3.amazonaws.com/peepthemesamples/peep-contact.png)

The contact form is a static page that you can enable by creating a post with the slug `/contact` and setting it as a *page*. If you don't want to use it, simply do not set the `window.__peepCfg.contactForm` script in your header and the page will display your content normally.

A confirmation message will be displayed below the contact form when the message is successfully sent (or if it isn't, an error will be shown). You can set custom messages for these by adding the following to your **Blog Header** in the Ghost admin:

```
<script>window.__peepCfg.contactSuccess = 'Your custom success message';</script>
<script>window.__peepCfg.contactError = 'Your custom error message';</script>
```

### Comments

Peep also supports comments via Disqus. To add comments to your site, add the following into the **Blog Header** section in your Ghost admin:

    <script>window.__themeCfg.disqusUsername = 'your Disqus site shortname'</script>

Make sure to replace the value with your own Disqus shortname!

### Other Theme Configuration Settings

Support for social media buttons via code injection is coming soon!

### Color Scheme

While the color scheme is not configurable via the admin panel, I have added what I think is a fairly simple way to change the color palette across the theme with just one or two changes. If you're not fan of the yellow on black, you can modify the primary color by going to `sass/base/_variables.scss` and changing the `$color-primary` and `$color-secondary` values to whatever you want. When you're done, be sure to compile the SASS by running `npm run sass:build` from the root of the theme directory.

## Code Highlighting

This theme now includes [Prism](http://prismjs.com/) for code syntax highlighting, in addition to my basic styles for inline code.

To use inline code:

    `var here = 'your inline code'`

To use code blocks with the default style (light gray background, red text, same as inline style):

    ```
    var myCode = 'this is some code';
    console.log(myCode);
    return someValue;
    ```

To use Prism, which includes full syntax highlighting in the Tomorrow Night theme, add the language name after the opening set of backticks:

    ```javascript
    var myArray = arr.map(function(el) {
        return el * 2;
    });
    ```

Languages supported by this theme (with name to use after initial backticks):

- JavaScript (javascript)
- C-like (clike)
- Bash (bash)
- Python (python)
- CSS (css)
- Nginx configuration (nginx)

I'm open to adding more as I have a need, but feel free to either change them up in your own version by downloading Prism with additional language selections, or make a PR.

## Development

I run my sites on Ghost because the theme system is just insanely fun to work with. If you want to mess with my theme (or create your own), I recommend starting [here](https://docs.ghost.org/docs/install-local). Peep is compatible with Ghost v1.19, and has been tested up to Ghost v1.22, so be sure to upgrade your local installation before running it.

### Styles

Peep uses SCSS within the `sass/` directory, which gets compiled into a `style.css` file within `assets/css/`.

To run a development mode that watches for changes, compiles them, and applies them to your site in real time, run `npm run sass:watch`. If you make changes you want to keep, you can build a production ready stylesheet (compiled, prefixed, minified) by running `npm run css:build`.

### Scripts

JavaScript files are organized in two ways: sitewide and page-specific.

Sitewide files are run everywhere on the blog, and are added by creating a module within the `assets/jss/scripts/` directory, importing it into `assets/js/main.js`, and making it browser-compatible by running `npm run js:build`.

Page-specific scripts are only meant to run on one page, and they're included in the `assets/js/singles/` directory. These scripts should be included individually on their respective pages.

## TODO

Here are a few of my plans for the immediate future:

- Reponsive display for mobile and tablet
- Add social media configuration
- Add comments
- Author pages?
- JS builds with source maps for larger bundles

