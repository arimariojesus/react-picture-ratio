<div align="center">
  <h1>
    📐
    <br />
    react-picture-ratio
  </h1>

  <p align="center">
    Um simples (e espero que útil) componente react para renderizar suas imagens mantendo sua proporção.
  </p>

  <br />

<!-- Badges -->

[![Open Source? Yes!](https://badgen.net/badge/Open%20Source%20%3F/Yes%21/blue?icon=github)](https://github.com/arimariojesus/react-picture-ratio)
[![License](https://badgen.net/badge/License/MIT/blue)](https://github.com/arimariojesus/react-picture-ratio/blob/master/LICENSE)
![npm](https://img.shields.io/npm/v/react-picture-ratio)

<br />
<pre>npm i <a href="https://www.npmjs.com/package/react-picture-ratio">react-picture-ratio</a></pre>
<br />

</div>

## 💡 Por quê?

Este componente foi construído com o intuito de resolver dois principais problemas:

#### CLS (Cumulative Layout Shift)

Você já deve ter tido a experiência de acessar um site, ele não esta totalmente carregado, você dá um pequeno srcoll no conteúdo quando de repente... "pula" uma imagem na tela e empurra o conteúdo que você estava visualizando ou estava prestes a clicar. Pois bem, este tipo de comportamento é medido pelo [Core Web Vitals](https://web.dev/vitals) com a métrica de [Cumulative Layout Shift](https://web.dev/i18n/pt/cls/).

#### Aspect Ratio

O [Aspect Ratio](https://css-tricks.com/aspect-ratio-boxes/) nada mais é do que a proporção de determinado conteúdo relacionando sua dimões de largura e altura (a imagem abaixo ilustra bem isto). O nosso componente `react-picture-ratio` manterá a proporção que for passada mas adptando-se ao layout.

<figure>
  <img src="https://clipchamp.com/static/d7fbfcc0e5bccea2e2bb4e124d59647d/84aa4/image7.webp" alt="Comparação de diferentes proporções (aspect ratio) em dispositivos móveis." />
  <figcaption>
    <small>Comparação de diferentes proporções (aspect ratio) em dispositivos móveis.<br />Fonte: https://clipchamp.com/en/blog/what-aspect-ratio/</small>
  </figcaption>
</figure>

## Componente

* `<Picture />`: utilize o componente Picture como se fosse uma tag image.

| props | type | required | default | description |
| --- | --- | --- | --- | --- |
| aspectRatio | string | false | 4:3 | proporção `largura x altura` que deseja que sua imagem tenha  |
| className	| string |	false | - | Nome personalizado do atributo `class` para o wrap do componente |
| src	| string |	true | - | URL de uma imagem |
| alt	| string |	true | - | Texto alternativo para a imagem caso ela não seja carregada |

## Exemplo de uso

```typescript
import React from 'react';
import { Picture } from 'react-picture-ratio';

function App() {
  return (
    <div className="App">
      <Picture aspectRatio="450:300" src="https://via.placeholder.com/450x300" alt="Imagem com largura de 450px e altura de 300px" />
    </div>
  );
}
```

<img src="https://user-images.githubusercontent.com/64603070/141026855-62d97789-5a13-491c-9774-5197ab622eb2.gif" alt="Exemplo de carregamento do component Picture" width="700" />

## ☑ Instalação

Duas formas:

- 1ª Instale `react-picture` direto do npm para utilizar em seu projeto.
- 2ª Instale todo o repositório atual e contribua com ele.

### 1ª Instale `react-picture-ratio`

```bash
yarn add react-picture-ratio
# ou
npm i react-picture-ratio
```

### 2ª Contribua para `react-picture-ratio`

1. Faça o fork do projeto
> https://github.com/arimariojesus/react-picture-ratio/fork

```bash
# Clone o repositório
git clone https://github.com/{seu_usuario}/react-picture-ratio.git
cd react-picture-ratio

# Instale as dependências
yarn install

# Crie uma nova branch para suas alterações
git checkout -b nova_branch

# Após adicionar suas alterações rode os testes
yarn test
```
## 📝 Licença

Este projeto está sob a licença [MIT](https://github.com/arimariojesus/react-picture-ratio/blob/master/LICENSE).

## Author

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/arimariojesus" target="_blank">
        <img src="https://avatars3.githubusercontent.com/u/64603070" width="100px;" alt="Foto de Ari Jesus no GitHub"/><br>
        <sub>
          <b>Ari Jesus</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
