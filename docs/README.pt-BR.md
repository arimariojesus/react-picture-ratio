<div align="center">
  <h1>
    📐
    <br />
    react-picture-ratio
  </h1>

  <p align="center">
    A simple (and hopefully useful) react component to render your images keeping their aspect ratio.
  </p>

  <br />

<!-- Badges -->

[![Open Source? Yes!](https://badgen.net/badge/Open%20Source%20%3F/Yes%21/blue?icon=github)](https://github.com/arimariojesus/react-picture-ratio)
[![License](https://badgen.net/badge/License/MIT/blue)](https://github.com/arimariojesus/react-picture-ratio/blob/master/LICENSE)
![npm](https://img.shields.io/npm/v/react-picture-ratio)

<br />
<pre>npm i <a href="https://www.npmjs.com/package/react-picture-ratio">react-picture-ratio</a></pre>
<br />

[🇧🇷 Português do Brasil](https://github.com/beautifulinteractions/beautiful-react-hooks) | 🇺🇸 English

</div>

## 💡 Why?

This component was built in order to solve two main problems:

#### CLS (Cumulative Layout Shift)

You may have already had the expecrience of accessing a site, it is not fully loaded, you scroll the content when suddenly... "skips" an image on the screen and pushes the content you were viewing or were about to click. Well, this type of behavior is measured by [Core Web Vitals](https://web.dev/vitals) with the [Cumulative Layout Shift](https://web.dev/i18n/pt/cls/) metric.

#### Aspect Ratio

The [Aspect Ratio](https://css-tricks.com/aspect-ratio-boxes/) is nothing more than the proportion of a given content relating its dimensions of width and height (the image below illustrates this well). Our `react-picture-ratio` component will keep the proportion that is passed but adapting to the layout.

<figure>
  <img src="https://clipchamp.com/static/d7fbfcc0e5bccea2e2bb4e124d59647d/84aa4/image7.webp" alt="Comparison of different apect ratios on mobile devices" />
  <figcaption>
    <small>Comparison of different apect ratios on mobile devices.<br />Source: https://clipchamp.com/en/blog/what-aspect-ratio/</small>
  </figcaption>
</figure>

## Component

* `<Picture />`: use the Picture component as if it were an image tag.

| props | type | required | default | description |
| --- | --- | --- | --- | --- |
| aspectRatio | string | false | 4:3 | `width x height` ratio you want your image to be  |
| className	| string |	false | - | Custom name of `class` attribute for component wrap |
| src	| string |	true | - | URL of an image |
| alt	| string |	true | - | Alternative text for the image if it doesn't load |
> `<Picture />` inherits all properties from [ImgHTMLAttributes](https://use-form.netlify.app/interfaces/_node_modules__types_react_index_d_.react.imghtmlattributes.html)

## Use

```typescript
import React from 'react';
import { Picture } from 'react-picture-ratio';

function App() {
  return (
    <div className="App">
      <Picture
        aspectRatio="450:300" // or "450/300"
        src="https://via.placeholder.com/450x300"
        alt="Image with width of 450px and height of 300px"
      />
    </div>
  );
}
```

## ☑ Installation

Two ways:

- 1. Install `react-picture` directly from npm to use in your proeject.
- 2ª Install the entire current repository and contribute to it.

### 1. Install `react-picture-ratio`

```bash
yarn add react-picture-ratio
# or
npm i react-picture-ratio
```

### 2ª Contribute to `react-picture-ratio`

1. Fork the project
> https://github.com/arimariojesus/react-picture-ratio/fork

```bash
# Clone the repository
git clone https://github.com/{seu_usuario}/react-picture-ratio.git
cd react-picture-ratio

# Install dependencies
yarn install

# Create a new branch for your changes
git checkout -b nova_branch

# After addingg your changes run the tests
yarn test
```
## 📝 License

This project is under the [MIT](https://github.com/arimariojesus/react-picture-ratio/blob/master/LICENSE) license.

## Author

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/arimariojesus" target="_blank">
        <img src="https://avatars3.githubusercontent.com/u/64603070" width="100px;" alt="Photo of Ari Jesus on github"/><br>
        <sub>
          <b>Ari Jesus</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
