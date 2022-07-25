# prism-filemaker
FileMaker language module for Prism.js


## Prism

View the [Prism website](https://prismjs.com) to learn how to install the syntax highlighter. There are several ways to use Prism, I find that the easiest is to use a CDN such as [cdnjs](https://cdnjs.com/libraries/prism/1.28.0) in most cases. The Prism website talks about using a CDN [here](https://prismjs.com/#basic-usage-cdn)

## Use prism-filemaker

After you have loaded prism.js, load prism-filemaker.js. Use the `defer` attribute in your script tag to defer running the script until the dom is ready. Be sure to add defer to other scripts for proper loading. Using defer allows you to place the script tag in the head portion of your html.

```html
<script defer src="js/prism-filemaker.js"></script>;
```

## Example

The head of your html document should look something like the following code:

```html

<!-- PRISM JS -->
<script defer src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.28.0/prism.min.js"></script>

<!-- PRISM CSS THEME -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism-themes/1.9.0/prism-base16-ateliersulphurpool.light.min.css" />

<!-- PRISM FILEMAKER JS -->
<script defer src="js/prism-filemaker.js"></script>

```

## Demo

Load the `index.html` page in your browser to see an example of prism-filemaker highlighting several bits of FileMaker calculations. This demo html file uses [md-block](https://md-block.verou.me) to render markdown as html using a web component when the page is loaded.