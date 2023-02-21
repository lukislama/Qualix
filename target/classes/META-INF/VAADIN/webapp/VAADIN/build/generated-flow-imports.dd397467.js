import{i as x,r as A,T as F,a as ir,c as sr,t as rr,b as at,d as Fo,e as Ho,f as Ae,g as $o,x as Bo,h as Vo,Z as or,w as qo,y as Uo,_ as Wo}from"./indexhtml.cd3dada5.js";/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const nr=document.createElement("template");nr.innerHTML=`
  <style>
    @font-face {
      font-family: 'lumo-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABEgAAsAAAAAIjQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuKY21hcAAAAYgAAAD4AAADrsCU8d5nbHlmAAACgAAAC2cAABeAWri7U2hlYWQAAA3oAAAAMAAAADZa/6SsaGhlYQAADhgAAAAdAAAAJAbpA35obXR4AAAOOAAAABAAAACspBAAAGxvY2EAAA5IAAAAWAAAAFh57oA4bWF4cAAADqAAAAAfAAAAIAFKAXBuYW1lAAAOwAAAATEAAAIuUUJZCHBvc3QAAA/0AAABKwAAAelm8SzVeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+yDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mIO+p/FEMUcxDANKMwIkgMABn8MLQB4nO3SWW6DMABF0UtwCEnIPM/zhLK8LqhfXRybSP14XUYtHV9hGYQwQBNIo3cUIPkhQeM7rib1ekqnXg981XuC1qvy84lzojleh3puxL0hPjGjRU473teloEefAUNGjJkwZcacBUtWrNmwZceeA0dOnLlw5cadB09elPGhGf+j0NTI/65KfXerT6JhqKnpRKtgOpuqaTrtKjPUlqHmhto21I7pL6i6hlqY3q7qGWrfUAeGOjTUkaGODXViqFNDnRnq3FAXhro01JWhrg11Y6hbQ90Z6t5QD4Z6NNSToZ4N9WKoV0O9GerdUB+G+jTUl6GWRvkL24BkEXictVh9bFvVFb/nxvbz+7Rf/N6zHcd2bCfP+Wic1Z9N0jpNHCD9SNqqoVBgbQoMjY+pjA4hNnWa2pV1rHSIif0DGkyT2k10Kmu1Cag6huj4ZpqYBHSqJsTEJgZCG3TaVBFv595nO3ZIv4RIrPPuvefe884599zzO/cRF8G/tgn6CFFImNgkR0ggX8wlspbhSSWSdrC5ozd30s2dw5afzvgtyz9/zG9t1hV4RtF1pXolowvtzc2z6L2aYUQM45jKH9WDTvd1LRDoDASYWhfTzTyvboXz6uZX4ARX5wrF39y+HM2+CJ8d0pkyqBIqoze3D12ez4DrFoYzxI8dWwMrDlZ2DMqQAR9AROsJU+2smlTPaTTco52BVxXa2a2+I8vvqd2dVHm1LoPeTn/AZPRYGthDYOeZjBjKoFsVGulR3lGU95SeCK44oHU7MhWUGUKZDT3oSUcG2GWuh+EDDfUYA/jhIhl0TOsJNYSEu7mQmi3UzfXwZKA4BsVsHLXQYGgJW95qEtpJ1VcW9HiTriZBlFEqxsDjA09yCNUoQxxwd7KWSTt2y3GTKifkqHRCoWZc3m11Wa/dKdFgXD4kSYfkeJBKd8KMz7J8dZn/cGRCcLGDnA2Ge3bKzcvlnTDNthFWLH7Xt80ua5FMjA4WKelWv5Xo16vHuYzpRbJhhdVlftuRK0VlR27D9lu5TF0DPBi60OrHNO0AfP/uRWvhn/U3LXICE+nh+3IHPUJ8JE6GyBjZQLbjGchlrSgYngF8zyrIF4NJD3atUcgWsWunGN/UHX5B5/yg7uF87Nqp4Gf52F3gH73DjEZNRoqCKAr9giQJp5rGJABpiVE2htNhW9R8nw0jqYjCYcY4LIjwYNScf4WN06IZnZCEqsI4cFaQbo4Z1TsZBx40YhXkHOecaYE5oY37IIQ+iJJ+UsDYSun5MuRSBRZRUUhlY2DqOGajOR6zrSU/5My6l2DnusH1GQgnw5BZP7iuYM/ahcfQ7Z8y51ddfutvuwNqWQ0cBYr8fj0U0vsHpwerVaB2sWhXT2NExi2r1KUE2tUuVMnkepVQrxTmpQrZTG4iu8he8iPyM3KcPE/+RP5KPoE2CEAKclCBzXATxkYOtUY/o961PWRqsj0chRrHFBbtrjP9/P0ven5pcbRdpL94vfsy33e5+izuwz3nFLFPVNayPZx/jdG1fOChflFRvYzsW6L18efgLrSWIgvcqnGJYi4skO4xREURjbDuxKke5v0T3Mrzkt2fi31uyZlLLrqIpEuXXsMlgw442Jb0GAxjS1DM20kBoCzHLXm/jEm0IltdcvU0fEW24jgiwwRjVd9u4NJHcIyoHJcwvyVqgqj5hqBJ1ZWSJryh9p56UWhX1XbhRbW2ZopuZWsQd5y8mEQ8M+C6xjRYxZbDKWf5AgY+Qq/l6wSPk16zDFjowYuu+wjx13mfkxbyDDxadYT/LijZyI0THB+6yfLaWsRcO82zo9mWTNtpO18qlorZoIVMwSN40tky5DOQ1MCIAe24mvlsuwIIxPb10+uXDQ4uWz/9m3rj+ql7p6bufZARuPVq5tXtsn6KwfP8Jy0TeWOyNhUJN6mhX5rkUTtUppQWEMNTqEdaCGKFYKJaQrCE4JtDLYOlNEKmO5kBTPGY2A0N2sY3+dVlo1N9ycBsIGtOjQ2p/tlZvzo0ur4v6cOh8NTospB7U/X40KahoU3bGIH97dnwmtHlYffVG3R1YOwKM2vNhrPhCT5zk64sG53oS4b31aYjqe/B7+kQiXBN+b6h21hNUPMq29B8CU4elINdygMPKF1B+WBTG7Z9ZshpN/xwEuuDQZR+nuoo4CDaAiiwXmLpmukMQyPf/JMclqgL1ixZQ/nnP2VbdUODFGt2fgBvL123rlLYu/6A9ckb7F3K0/CyBMEu6aQoPscroCcacVehvyQyCZAsizsWWBkoLC+WAiWnOksLKaeuQDzGuqSk42aiYTiJ4zf9afl17SrqaTO1f+XlZAfIuYcq7/IqYMaMrksOJ6vHkOCPDq943xcCnHqVD9pHFRpMqSPXrIua1WNs+tOz1U+ciTCDpPk+c4QYJIHnYhxP/kVPAq+ahFpVhPcHp8qyarhiF+HsBU9Hrl+UZa876fbKipL0KqB6OdUveErgtOI97fZ63ae9SvWU6k2w1JfwqnUbHsYcFCJFrC/W12zIMMirWYEHxMPs6LGYSdkSZ5TsNP9PCpwnWC3HKZ1lydNjWHC2Mn3l6vL0dHn1ldP3LTSrX+vKrBqv7KmMr8p0SR6P1NqF63or6XRlIyO90f7+kf7+myOhvt4tq7f09oUiTc2/dycGgqFQcCDRLYmi1NL7fk0CknVMxEg/cdfs/TnpJMNkgqwj17B8beVazSrVbU4lG67IZYOCnWrYy3yBR9cyWcChywos3LJBEdhhFoAdYjiw0rLGm0xU5OzoGm5/ZfmHjVZpNNg6SznzGKDdwv2cCtVn6Eaxo12cfxLprpVtTcZ6hVx6dow7Yq7e8LXO8PY9Jgjoze9yCtU5FNbegcKkQMdCbt9au/te4Ebe0jkc0ukUL32eYnTpNs20h0KpUOhZPYwVcfhZnfdqeCvDfXiuCbAoYWcXERPc/mDQD3/hdF+wK4i/xv3kYfprIpAuMkk2kW3kdtS0kBIKpZwp8KxmsCyfM1MFzAss9LBkDxRyThiaqTLwKYKJVTwmWTudMyz+yks09346MDh4m72yOxCKrt1XMlQ1qPVlTEVVQ1ofdK/sCWjtZu9qGwZ8YZ9PPWlo1IV3eW3+U0aXblP39zrt+JPf6UhEQ1rUjNBULN+utyuaDNW34kpAVuSOeMTyWbSNWnooFu+QFNWQ4d/Ox4IPWx41fP/fB/Rjeoz08ezPA9TysMtmnOXfGN7Ui3xIYLDALrlDLOP09qtJuY2OeL0+QZXdRnR1nxRVBF/SOyKKPpcrn9mWzH4rH9IidE+PTNU2182+hOgSItrE1slByS24vaLvJpxOqe4Pduf3HJkZ+jLqUz9rRzB7p8gKcgWZwV1L8JtUS5Z2JxZSOCuBoMTQihMzLbCPA0KqGMAljRQjONklW/wjnXKy8vxT/Elvm3/KiMUMOoV0/vnDYlhec0SMKtt3/kKMyOt33tj2bqxQLsTjSGLl+EAsNhCnTyRGktW55EgCn/A4PlnWn+Mg8bgZrWqHxTbPwMuyy1u5YeZF2SUM7JRhddwRgiRuxpmgJmxn9ZW7XpcF3ViX/ar6ptRpGJ0S9Adg4qhb9sI3vbL7qNJV/y4i07t5TZBiho1imFoMz3gED+CtjYUxvP4SOxov4bFoNPg5aR1e+G4UgDPoedJTpogyCJ7oYvRqoVS0MQAy+CoNEdTDUjok5ZHZL/WtjV7rFj3PKQE3iKp7ou+rIxN3b9LB1dGjeT4cvKo3FrnWpYpuaFd/h3dtV8UeKN1Y9hpR3dt4p0H/zKuPQq0kZQUIIpuDfoiETsnIk+gCWMJZUXHtE8V9LkUc2TE8vOMbO4ax/MACabzyaGXc7u3FBr11ThBdB8SIeMAlCntG2KThHSPsaj2Dc9KNyY2a0KZ7ODaTHoRiFkeYz+shZBpCS4X6471KKKnuHd84edfk5F37d1XO5bbkcltu2ZLNbvnPXiUVAnVvprJrP+NObryjxrllS65md6Tm6wzFHRR4dY3QUUjb7MgxaIixU8hspi98fl/Xc+IB4iU66eCVL9YfAfahiSUt4TONS8x0D8W7u8vd3fGWx6OXlM/U1IoU/s61PGhpyXRFa3eReq2qG56lvmYtXavCC1iN7lbiBpWxXHU+cSlztVLVz0tVN600fVsLxaVDknhYioeoXP3t4lqV1r79MAw0GCI1FTL1YIGzPL1MMlJ9ZsN9P7lvA2yr9ZFUzwzPrVgxN/x/SS+chwB4nGNgZGBgAOLPrYdY4vltvjJwM78AijDUqG5oRND/XzNPZboF5HIwMIFEAU/lC+J4nGNgZGBgDvqfBSRfMAAB81QGRgZUoA0AVvYDbwAAAHicY2BgYGB+MTQwAM8EJo8AAAAAAE4AmgDoAQoBLAFOAXABmgHEAe4CGgKcAugEmgS8BNYE8gUOBSoFegXQBf4GRAZmBrYHGAeQCBgIUghqCP4JRgm+CdoKBAo+CoQKugr0C1QLmgvAeJxjYGRgYNBmTGEQZQABJiDmAkIGhv9gPgMAGJQBvAB4nG2RPU7DMBiG3/QP0UoIBGJh8QILavozdmRo9w7d09RpUzlx5LgVvQMn4BAcgoEzcAgOwVvzSZVQbcnf48fvFysJgGt8IcJxROiG9TgauODuj5ukG+EW+UG4jR4ehTv0Q+EunjER7uEWmk+IWpc0d3gVbuAKb8JN+nfhFvlDuI17fAp36L+Fu1jgR7iHp+jF7Arbz1Nb1nO93pnEncSJFtrVuS3VKB6e5EyX2iVer9TyoOr9eux9pjJnCzW1pdfGWFU5u9WpjzfeV5PBIBMfp7aAwQ4FLPrIkbKWqDHn+67pDRK4s4lzbsEux5qHvcIIMb/nueSMyTKkE3jWFdNLHLjW2PPmMa1Hxn3GjGW/wjT0HtOG09JU4WxLk9LH2ISuiv9twJn9y8fh9uIXI+BknAAAAHicbY7ZboMwEEW5CVBCSLrv+76kfJRjTwHFsdGAG+Xvy5JUfehIHp0rnxmNN/D6ir3/a4YBhvARIMQOIowQY4wEE0yxiz3s4wCHOMIxTnCKM5zjApe4wjVucIs73OMBj3jCM17wije84wMzfHqJ0EVmUkmmJo77oOmrHvfIRZbXsTCZplTZldlgb3TYGVHProwFs11t1A57tcON2rErR3PBqcwF1/6ctI6k0GSU4JHMSS6WghdJQ99sTbfuN7QLJ9vQ37dNrgyktnIxlDYLJNuqitpRbYWKFNuyDT6pog6oOYKHtKakeakqKjHXpPwlGRcsC+OqxLIiJpXqoqqDMreG2l5bv9Ri3TRX+c23DZna9WFFgmXuO6Ps1Jm/w6ErW8N3FbHn/QC444j0AA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }

    html {
      --lumo-icons-align-center: "\\ea01";
      --lumo-icons-align-left: "\\ea02";
      --lumo-icons-align-right: "\\ea03";
      --lumo-icons-angle-down: "\\ea04";
      --lumo-icons-angle-left: "\\ea05";
      --lumo-icons-angle-right: "\\ea06";
      --lumo-icons-angle-up: "\\ea07";
      --lumo-icons-arrow-down: "\\ea08";
      --lumo-icons-arrow-left: "\\ea09";
      --lumo-icons-arrow-right: "\\ea0a";
      --lumo-icons-arrow-up: "\\ea0b";
      --lumo-icons-bar-chart: "\\ea0c";
      --lumo-icons-bell: "\\ea0d";
      --lumo-icons-calendar: "\\ea0e";
      --lumo-icons-checkmark: "\\ea0f";
      --lumo-icons-chevron-down: "\\ea10";
      --lumo-icons-chevron-left: "\\ea11";
      --lumo-icons-chevron-right: "\\ea12";
      --lumo-icons-chevron-up: "\\ea13";
      --lumo-icons-clock: "\\ea14";
      --lumo-icons-cog: "\\ea15";
      --lumo-icons-cross: "\\ea16";
      --lumo-icons-download: "\\ea17";
      --lumo-icons-dropdown: "\\ea18";
      --lumo-icons-edit: "\\ea19";
      --lumo-icons-error: "\\ea1a";
      --lumo-icons-eye: "\\ea1b";
      --lumo-icons-eye-disabled: "\\ea1c";
      --lumo-icons-menu: "\\ea1d";
      --lumo-icons-minus: "\\ea1e";
      --lumo-icons-ordered-list: "\\ea1f";
      --lumo-icons-phone: "\\ea20";
      --lumo-icons-photo: "\\ea21";
      --lumo-icons-play: "\\ea22";
      --lumo-icons-plus: "\\ea23";
      --lumo-icons-redo: "\\ea24";
      --lumo-icons-reload: "\\ea25";
      --lumo-icons-search: "\\ea26";
      --lumo-icons-undo: "\\ea27";
      --lumo-icons-unordered-list: "\\ea28";
      --lumo-icons-upload: "\\ea29";
      --lumo-icons-user: "\\ea2a";
    }
  </style>
`;document.head.appendChild(nr.content);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Go=x`
  :host {
    --lumo-size-xs: 1.625rem;
    --lumo-size-s: 1.875rem;
    --lumo-size-m: 2.25rem;
    --lumo-size-l: 2.75rem;
    --lumo-size-xl: 3.5rem;

    /* Icons */
    --lumo-icon-size-s: 1.25em;
    --lumo-icon-size-m: 1.5em;
    --lumo-icon-size-l: 2.25em;
    /* For backwards compatibility */
    --lumo-icon-size: var(--lumo-icon-size-m);
  }
`,ar=document.createElement("template");ar.innerHTML=`<style>${Go.toString().replace(":host","html")}</style>`;document.head.appendChild(ar.content);A("vaadin-checkbox",x`
    :host {
      color: var(--lumo-body-text-color);
      font-size: var(--lumo-font-size-m);
      font-family: var(--lumo-font-family);
      line-height: var(--lumo-line-height-s);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-tap-highlight-color: transparent;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      cursor: default;
      outline: none;
      --_checkbox-size: var(--vaadin-checkbox-size, calc(var(--lumo-size-m) / 2));
    }

    :host([has-label]) ::slotted(label) {
      padding-block: var(--lumo-space-xs);
      padding-inline: var(--lumo-space-xs) var(--lumo-space-s);
    }

    [part='checkbox'] {
      width: var(--_checkbox-size);
      height: var(--_checkbox-size);
      margin: var(--lumo-space-xs);
      position: relative;
      border-radius: var(--lumo-border-radius-s);
      background-color: var(--lumo-contrast-20pct);
      transition: transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2), background-color 0.15s;
      cursor: var(--lumo-clickable-cursor);
    }

    :host([indeterminate]) [part='checkbox'],
    :host([checked]) [part='checkbox'] {
      background-color: var(--lumo-primary-color);
    }

    /* Checkmark */
    [part='checkbox']::after {
      pointer-events: none;
      font-family: 'lumo-icons';
      content: var(--lumo-icons-checkmark);
      color: var(--lumo-primary-contrast-color);
      font-size: calc(var(--_checkbox-size) + 2px);
      line-height: 1;
      position: absolute;
      top: -1px;
      left: -1px;
      contain: content;
      opacity: 0;
    }

    :host([checked]) [part='checkbox']::after {
      opacity: 1;
    }

    /* Indeterminate checkmark */
    :host([indeterminate]) [part='checkbox']::after {
      content: '';
      opacity: 1;
      top: 45%;
      height: 10%;
      left: 22%;
      right: 22%;
      width: auto;
      border: 0;
      background-color: var(--lumo-primary-contrast-color);
    }

    /* Focus ring */
    :host([focus-ring]) [part='checkbox'] {
      box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);
    }

    /* Disabled */
    :host([disabled]) {
      pointer-events: none;
      color: var(--lumo-disabled-text-color);
    }

    :host([disabled]) ::slotted(label) {
      color: inherit;
    }

    :host([disabled]) [part='checkbox'] {
      background-color: var(--lumo-contrast-10pct);
    }

    :host([disabled]) [part='checkbox']::after {
      color: var(--lumo-contrast-30pct);
    }

    :host([indeterminate][disabled]) [part='checkbox']::after {
      background-color: var(--lumo-contrast-30pct);
    }

    /* RTL specific styles */
    :host([dir='rtl'][has-label]) ::slotted(label) {
      padding: var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-s);
    }

    /* Used for activation "halo" */
    [part='checkbox']::before {
      pointer-events: none;
      color: transparent;
      width: 100%;
      height: 100%;
      line-height: var(--_checkbox-size);
      border-radius: inherit;
      background-color: inherit;
      transform: scale(1.4);
      opacity: 0;
      transition: transform 0.1s, opacity 0.8s;
    }

    /* Hover */
    :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part='checkbox'] {
      background-color: var(--lumo-contrast-30pct);
    }

    /* Disable hover for touch devices */
    @media (pointer: coarse) {
      :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part='checkbox'] {
        background-color: var(--lumo-contrast-20pct);
      }
    }

    /* Active */
    :host([active]) [part='checkbox'] {
      transform: scale(0.9);
      transition-duration: 0.05s;
    }

    :host([active][checked]) [part='checkbox'] {
      transform: scale(1.1);
    }

    :host([active]:not([checked])) [part='checkbox']::before {
      transition-duration: 0.01s, 0.01s;
      transform: scale(0);
      opacity: 0.4;
    }
  `,{moduleId:"lumo-checkbox"});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.JSCompiler_renameProperty=function(r,t){return r};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let jo=/(url\()([^)]*)(\))/g,Ko=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/,lt,W;function qe(r,t){if(r&&Ko.test(r)||r==="//")return r;if(lt===void 0){lt=!1;try{const e=new URL("b","http://a");e.pathname="c%20d",lt=e.href==="http://a/c%20d"}catch{}}if(t||(t=document.baseURI||window.location.href),lt)try{return new URL(r,t).href}catch{return r}return W||(W=document.implementation.createHTMLDocument("temp"),W.base=W.createElement("base"),W.head.appendChild(W.base),W.anchor=W.createElement("a"),W.body.appendChild(W.anchor)),W.base.href=t,W.anchor.href=r,W.anchor.href||r}function gi(r,t){return r.replace(jo,function(e,i,s,o){return i+"'"+qe(s.replace(/["']/g,""),t)+"'"+o})}function vi(r){return r.substring(0,r.lastIndexOf("/")+1)}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const lr=!window.ShadyDOM||!window.ShadyDOM.inUse;Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss);const Yo=lr&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const r=new CSSStyleSheet;r.replaceSync("");const t=document.createElement("div");return t.attachShadow({mode:"open"}),t.shadowRoot.adoptedStyleSheets=[r],t.shadowRoot.adoptedStyleSheets[0]===r}catch{return!1}})();let Qo=window.Polymer&&window.Polymer.rootPath||vi(document.baseURI||window.location.href),mt=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,ac=window.Polymer&&window.Polymer.setPassiveTouchGestures||!1,Ge=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,Xo=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,dr=window.Polymer&&window.Polymer.legacyOptimizations||!1,cr=window.Polymer&&window.Polymer.legacyWarnings||!1,Zo=window.Polymer&&window.Polymer.syncInitialRender||!1,Zt=window.Polymer&&window.Polymer.legacyUndefined||!1,Jo=window.Polymer&&window.Polymer.orderedComputed||!1,en=!0;const tn=function(r){en=r};let Wi=window.Polymer&&window.Polymer.removeNestedTemplates||!1,hr=window.Polymer&&window.Polymer.fastDomIf||!1,sn=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1,lc=window.Polymer&&window.Polymer.legacyNoObservedAttributes||!1,rn=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let on=0;const N=function(r){let t=r.__mixinApplications;t||(t=new WeakMap,r.__mixinApplications=t);let e=on++;function i(s){let o=s.__mixinSet;if(o&&o[e])return s;let n=t,a=n.get(s);if(!a){a=r(s),n.set(s,a);let l=Object.create(a.__mixinSet||o||null);l[e]=!0,a.__mixinSet=l}return a}return i};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let bi={},ur={};function Gi(r,t){bi[r]=ur[r.toLowerCase()]=t}function ji(r){return bi[r]||ur[r.toLowerCase()]}function nn(r){r.querySelector("style")&&console.warn("dom-module %s has style outside template",r.id)}class Ee extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,e){if(t){let i=ji(t);return i&&e?i.querySelector(e):i}return null}attributeChangedCallback(t,e,i,s){e!==i&&this.register()}get assetpath(){if(!this.__assetpath){const t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,e=qe(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=vi(e)}return this.__assetpath}register(t){if(t=t||this.id,t){if(Ge&&ji(t)!==void 0)throw Gi(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,Gi(t,this),nn(this)}}}Ee.prototype.modules=bi;customElements.define("dom-module",Ee);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const an="link[rel=import][type~=css]",ln="include",Ki="shady-unscoped";function yi(r){return Ee.import(r)}function Yi(r){let t=r.body?r.body:r;const e=gi(t.textContent,r.baseURI),i=document.createElement("style");return i.textContent=e,i}function dn(r){const t=r.trim().split(/\s+/),e=[];for(let i=0;i<t.length;i++)e.push(...cn(t[i]));return e}function cn(r){const t=yi(r);if(!t)return console.warn("Could not find style data in module named",r),[];if(t._styles===void 0){const e=[];e.push(...Ci(t));const i=t.querySelector("template");i&&e.push(...St(i,t.assetpath)),t._styles=e}return t._styles}function St(r,t){if(!r._styles){const e=[],i=r.content.querySelectorAll("style");for(let s=0;s<i.length;s++){let o=i[s],n=o.getAttribute(ln);n&&e.push(...dn(n).filter(function(a,l,d){return d.indexOf(a)===l})),t&&(o.textContent=gi(o.textContent,t)),e.push(o)}r._styles=e}return r._styles}function hn(r){let t=yi(r);return t?Ci(t):[]}function Ci(r){const t=[],e=r.querySelectorAll(an);for(let i=0;i<e.length;i++){let s=e[i];if(s.import){const o=s.import,n=s.hasAttribute(Ki);if(n&&!o._unscopedStyle){const a=Yi(o);a.setAttribute(Ki,""),o._unscopedStyle=a}else o._style||(o._style=Yi(o));t.push(n?o._unscopedStyle:o._style)}}return t}function dc(r){let t=r.trim().split(/\s+/),e="";for(let i=0;i<t.length;i++)e+=un(t[i]);return e}function un(r){let t=yi(r);if(t&&t._cssText===void 0){let e=_n(t),i=t.querySelector("template");i&&(e+=pn(i,t.assetpath)),t._cssText=e||null}return t||console.warn("Could not find style data in module named",r),t&&t._cssText||""}function pn(r,t){let e="";const i=St(r,t);for(let s=0;s<i.length;s++){let o=i[s];o.parentNode&&o.parentNode.removeChild(o),e+=o.textContent}return e}function _n(r){let t="",e=Ci(r);for(let i=0;i<e.length;i++)t+=e[i].textContent;return t}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const P=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?r=>ShadyDOM.patch(r):r=>r;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Jt(r){return r.indexOf(".")>=0}function ee(r){let t=r.indexOf(".");return t===-1?r:r.slice(0,t)}function pr(r,t){return r.indexOf(t+".")===0}function je(r,t){return t.indexOf(r+".")===0}function gt(r,t,e){return t+e.slice(r.length)}function cc(r,t){return r===t||pr(r,t)||je(r,t)}function Be(r){if(Array.isArray(r)){let t=[];for(let e=0;e<r.length;e++){let i=r[e].toString().split(".");for(let s=0;s<i.length;s++)t.push(i[s])}return t.join(".")}else return r}function _r(r){return Array.isArray(r)?Be(r).split("."):r.toString().split(".")}function q(r,t,e){let i=r,s=_r(t);for(let o=0;o<s.length;o++){if(!i)return;let n=s[o];i=i[n]}return e&&(e.path=s.join(".")),i}function Qi(r,t,e){let i=r,s=_r(t),o=s[s.length-1];if(s.length>1){for(let n=0;n<s.length-1;n++){let a=s[n];if(i=i[a],!i)return}i[o]=e}else i[t]=e;return s.join(".")}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const vt={},fn=/-[a-z]/g,mn=/([A-Z])/g;function fr(r){return vt[r]||(vt[r]=r.indexOf("-")<0?r:r.replace(fn,t=>t[1].toUpperCase()))}function Pt(r){return vt[r]||(vt[r]=r.replace(mn,"-$1").toLowerCase())}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let gn=0,mr=0,be=[],vn=0,ei=!1,gr=document.createTextNode("");new window.MutationObserver(bn).observe(gr,{characterData:!0});function bn(){ei=!1;const r=be.length;for(let t=0;t<r;t++){let e=be[t];if(e)try{e()}catch(i){setTimeout(()=>{throw i})}}be.splice(0,r),mr+=r}const ti={after(r){return{run(t){return window.setTimeout(t,r)},cancel(t){window.clearTimeout(t)}}},run(r,t){return window.setTimeout(r,t)},cancel(r){window.clearTimeout(r)}},yn={run(r){return window.requestAnimationFrame(r)},cancel(r){window.cancelAnimationFrame(r)}},Cn={run(r){return window.requestIdleCallback?window.requestIdleCallback(r):window.setTimeout(r,16)},cancel(r){window.cancelIdleCallback?window.cancelIdleCallback(r):window.clearTimeout(r)}},wi={run(r){return ei||(ei=!0,gr.textContent=vn++),be.push(r),gn++},cancel(r){const t=r-mr;if(t>=0){if(!be[t])throw new Error("invalid async handle: "+r);be[t]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const wn=wi,vr=N(r=>{class t extends r{static createProperties(i){const s=this.prototype;for(let o in i)o in s||s._createPropertyAccessor(o)}static attributeNameForProperty(i){return i.toLowerCase()}static typeForProperty(i){}_createPropertyAccessor(i,s){this._addPropertyToAttributeMap(i),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[i]||(this.__dataHasAccessor[i]=!0,this._definePropertyAccessor(i,s))}_addPropertyToAttributeMap(i){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let s=this.__dataAttributes[i];return s||(s=this.constructor.attributeNameForProperty(i),this.__dataAttributes[s]=i),s}_definePropertyAccessor(i,s){Object.defineProperty(this,i,{get(){return this.__data[i]},set:s?function(){}:function(o){this._setPendingProperty(i,o,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let i in this.__dataHasAccessor)this.hasOwnProperty(i)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[i]=this[i],delete this[i])}_initializeInstanceProperties(i){Object.assign(this,i)}_setProperty(i,s){this._setPendingProperty(i,s)&&this._invalidateProperties()}_getProperty(i){return this.__data[i]}_setPendingProperty(i,s,o){let n=this.__data[i],a=this._shouldPropertyChange(i,s,n);return a&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(i in this.__dataOld)&&(this.__dataOld[i]=n),this.__data[i]=s,this.__dataPending[i]=s),a}_isPropertyPending(i){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(i))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,wn.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const i=this.__data,s=this.__dataPending,o=this.__dataOld;this._shouldPropertiesChange(i,s,o)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(i,s,o)),this.__dataCounter--}_shouldPropertiesChange(i,s,o){return Boolean(s)}_propertiesChanged(i,s,o){}_shouldPropertyChange(i,s,o){return o!==s&&(o===o||s===s)}attributeChangedCallback(i,s,o,n){s!==o&&this._attributeToProperty(i,o),super.attributeChangedCallback&&super.attributeChangedCallback(i,s,o,n)}_attributeToProperty(i,s,o){if(!this.__serializing){const n=this.__dataAttributes,a=n&&n[i]||i;this[a]=this._deserializeValue(s,o||this.constructor.typeForProperty(a))}}_propertyToAttribute(i,s,o){this.__serializing=!0,o=arguments.length<3?this[i]:o,this._valueToNodeAttribute(this,o,s||this.constructor.attributeNameForProperty(i)),this.__serializing=!1}_valueToNodeAttribute(i,s,o){const n=this._serializeValue(s);(o==="class"||o==="name"||o==="slot")&&(i=P(i)),n===void 0?i.removeAttribute(o):i.setAttribute(o,n===""&&window.trustedTypes?window.trustedTypes.emptyScript:n)}_serializeValue(i){switch(typeof i){case"boolean":return i?"":void 0;default:return i!=null?i.toString():void 0}}_deserializeValue(i,s){switch(s){case Boolean:return i!==null;case Number:return Number(i);default:return i}}}return t});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const br={};let dt=HTMLElement.prototype;for(;dt;){let r=Object.getOwnPropertyNames(dt);for(let t=0;t<r.length;t++)br[r[t]]=!0;dt=Object.getPrototypeOf(dt)}const xn=(()=>window.trustedTypes?r=>trustedTypes.isHTML(r)||trustedTypes.isScript(r)||trustedTypes.isScriptURL(r):()=>!1)();function An(r,t){if(!br[t]){let e=r[t];e!==void 0&&(r.__data?r._setPendingProperty(t,e):(r.__dataProto?r.hasOwnProperty(JSCompiler_renameProperty("__dataProto",r))||(r.__dataProto=Object.create(r.__dataProto)):r.__dataProto={},r.__dataProto[t]=e))}}const En=N(r=>{const t=vr(r);class e extends t{static createPropertiesForAttributes(){let s=this.observedAttributes;for(let o=0;o<s.length;o++)this.prototype._createPropertyAccessor(fr(s[o]))}static attributeNameForProperty(s){return Pt(s)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(s){for(let o in s)this._setProperty(o,s[o])}_ensureAttribute(s,o){const n=this;n.hasAttribute(s)||this._valueToNodeAttribute(n,o,s)}_serializeValue(s){switch(typeof s){case"object":if(s instanceof Date)return s.toString();if(s){if(xn(s))return s;try{return JSON.stringify(s)}catch{return""}}default:return super._serializeValue(s)}}_deserializeValue(s,o){let n;switch(o){case Object:try{n=JSON.parse(s)}catch{n=s}break;case Array:try{n=JSON.parse(s)}catch{n=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${s}`)}break;case Date:n=isNaN(s)?String(s):Number(s),n=new Date(n);break;default:n=super._deserializeValue(s,o);break}return n}_definePropertyAccessor(s,o){An(this,s),super._definePropertyAccessor(s,o)}_hasAccessor(s){return this.__dataHasAccessor&&this.__dataHasAccessor[s]}_isPropertyPending(s){return Boolean(this.__dataPending&&s in this.__dataPending)}}return e});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const In={"dom-if":!0,"dom-repeat":!0};let Xi=!1,Zi=!1;function Tn(){if(!Xi){Xi=!0;const r=document.createElement("textarea");r.placeholder="a",Zi=r.placeholder===r.textContent}return Zi}function Sn(r){Tn()&&r.localName==="textarea"&&r.placeholder&&r.placeholder===r.textContent&&(r.textContent=null)}const Pn=(()=>{const r=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:t=>t});return(t,e,i)=>{const s=e.getAttribute(i);if(r&&i.startsWith("on-")){t.setAttribute(i,r.createScript(s,i));return}t.setAttribute(i,s)}})();function On(r){let t=r.getAttribute("is");if(t&&In[t]){let e=r;for(e.removeAttribute("is"),r=e.ownerDocument.createElement(t),e.parentNode.replaceChild(r,e),r.appendChild(e);e.attributes.length;){const{name:i}=e.attributes[0];Pn(r,e,i),e.removeAttribute(i)}}return r}function yr(r,t){let e=t.parentInfo&&yr(r,t.parentInfo);if(e){for(let i=e.firstChild,s=0;i;i=i.nextSibling)if(t.parentIndex===s++)return i}else return r}function zn(r,t,e,i){i.id&&(t[i.id]=e)}function kn(r,t,e){if(e.events&&e.events.length)for(let i=0,s=e.events,o;i<s.length&&(o=s[i]);i++)r._addMethodEventListenerToNode(t,o.name,o.value,r)}function Ln(r,t,e,i){e.templateInfo&&(t._templateInfo=e.templateInfo,t._parentTemplateInfo=i)}function Rn(r,t,e){return r=r._methodHost||r,function(s){r[e]?r[e](s,s.detail):console.warn("listener method `"+e+"` not defined")}}const Nn=N(r=>{class t extends r{static _parseTemplate(i,s){if(!i._templateInfo){let o=i._templateInfo={};o.nodeInfoList=[],o.nestedTemplate=Boolean(s),o.stripWhiteSpace=s&&s.stripWhiteSpace||i.hasAttribute&&i.hasAttribute("strip-whitespace"),this._parseTemplateContent(i,o,{parent:null})}return i._templateInfo}static _parseTemplateContent(i,s,o){return this._parseTemplateNode(i.content,s,o)}static _parseTemplateNode(i,s,o){let n=!1,a=i;return a.localName=="template"&&!a.hasAttribute("preserve-content")?n=this._parseTemplateNestedTemplate(a,s,o)||n:a.localName==="slot"&&(s.hasInsertionPoint=!0),Sn(a),a.firstChild&&this._parseTemplateChildNodes(a,s,o),a.hasAttributes&&a.hasAttributes()&&(n=this._parseTemplateNodeAttributes(a,s,o)||n),n||o.noted}static _parseTemplateChildNodes(i,s,o){if(!(i.localName==="script"||i.localName==="style"))for(let n=i.firstChild,a=0,l;n;n=l){if(n.localName=="template"&&(n=On(n)),l=n.nextSibling,n.nodeType===Node.TEXT_NODE){let c=l;for(;c&&c.nodeType===Node.TEXT_NODE;)n.textContent+=c.textContent,l=c.nextSibling,i.removeChild(c),c=l;if(s.stripWhiteSpace&&!n.textContent.trim()){i.removeChild(n);continue}}let d={parentIndex:a,parentInfo:o};this._parseTemplateNode(n,s,d)&&(d.infoIndex=s.nodeInfoList.push(d)-1),n.parentNode&&a++}}static _parseTemplateNestedTemplate(i,s,o){let n=i,a=this._parseTemplate(n,s);return(a.content=n.content.ownerDocument.createDocumentFragment()).appendChild(n.content),o.templateInfo=a,!0}static _parseTemplateNodeAttributes(i,s,o){let n=!1,a=Array.from(i.attributes);for(let l=a.length-1,d;d=a[l];l--)n=this._parseTemplateNodeAttribute(i,s,o,d.name,d.value)||n;return n}static _parseTemplateNodeAttribute(i,s,o,n,a){return n.slice(0,3)==="on-"?(i.removeAttribute(n),o.events=o.events||[],o.events.push({name:n.slice(3),value:a}),!0):n==="id"?(o.id=a,!0):!1}static _contentForTemplate(i){let s=i._templateInfo;return s&&s.content||i.content}_stampTemplate(i,s){i&&!i.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(i),s=s||this.constructor._parseTemplate(i);let o=s.nodeInfoList,n=s.content||i.content,a=document.importNode(n,!0);a.__noInsertionPoint=!s.hasInsertionPoint;let l=a.nodeList=new Array(o.length);a.$={};for(let d=0,c=o.length,h;d<c&&(h=o[d]);d++){let m=l[d]=yr(a,h);zn(this,a.$,m,h),Ln(this,m,h,s),kn(this,m,h)}return a=a,a}_addMethodEventListenerToNode(i,s,o,n){n=n||i;let a=Rn(n,s,o);return this._addEventListenerToNode(i,s,a),a}_addEventListenerToNode(i,s,o){i.addEventListener(s,o)}_removeEventListenerFromNode(i,s,o){i.removeEventListener(s,o)}}return t});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let Ke=0;const Ye=[],T={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},Cr="__computeInfo",Dn=/[A-Z]/;function Bt(r,t,e){let i=r[t];if(!i)i=r[t]={};else if(!r.hasOwnProperty(t)&&(i=r[t]=Object.create(r[t]),e))for(let s in i){let o=i[s],n=i[s]=Array(o.length);for(let a=0;a<o.length;a++)n[a]=o[a]}return i}function Ve(r,t,e,i,s,o){if(t){let n=!1;const a=Ke++;for(let l in e){let d=s?ee(l):l,c=t[d];if(c)for(let h=0,m=c.length,g;h<m&&(g=c[h]);h++)(!g.info||g.info.lastRun!==a)&&(!s||xi(l,g.trigger))&&(g.info&&(g.info.lastRun=a),g.fn(r,l,e,i,g.info,s,o),n=!0)}return n}return!1}function Mn(r,t,e,i,s,o,n,a){let l=!1,d=n?ee(i):i,c=t[d];if(c)for(let h=0,m=c.length,g;h<m&&(g=c[h]);h++)(!g.info||g.info.lastRun!==e)&&(!n||xi(i,g.trigger))&&(g.info&&(g.info.lastRun=e),g.fn(r,i,s,o,g.info,n,a),l=!0);return l}function xi(r,t){if(t){let e=t.name;return e==r||!!(t.structured&&pr(e,r))||!!(t.wildcard&&je(e,r))}else return!0}function Ji(r,t,e,i,s){let o=typeof s.method=="string"?r[s.method]:s.method,n=s.property;o?o.call(r,r.__data[n],i[n]):s.dynamicFn||console.warn("observer method `"+s.method+"` not defined")}function Fn(r,t,e,i,s){let o=r[T.NOTIFY],n,a=Ke++;for(let d in t)t[d]&&(o&&Mn(r,o,a,d,e,i,s)||s&&Hn(r,d,e))&&(n=!0);let l;n&&(l=r.__dataHost)&&l._invalidateProperties&&l._invalidateProperties()}function Hn(r,t,e){let i=ee(t);if(i!==t){let s=Pt(i)+"-changed";return wr(r,s,e[t],t),!0}return!1}function wr(r,t,e,i){let s={value:e,queueProperty:!0};i&&(s.path=i),P(r).dispatchEvent(new CustomEvent(t,{detail:s}))}function $n(r,t,e,i,s,o){let a=(o?ee(t):t)!=t?t:null,l=a?q(r,a):r.__data[t];a&&l===void 0&&(l=e[t]),wr(r,s.eventName,l,a)}function Bn(r,t,e,i,s){let o,n=r.detail,a=n&&n.path;a?(i=gt(e,i,a),o=n&&n.value):o=r.currentTarget[e],o=s?!o:o,(!t[T.READ_ONLY]||!t[T.READ_ONLY][i])&&t._setPendingPropertyOrPath(i,o,!0,Boolean(a))&&(!n||!n.queueProperty)&&t._invalidateProperties()}function Vn(r,t,e,i,s){let o=r.__data[t];mt&&(o=mt(o,s.attrName,"attribute",r)),r._propertyToAttribute(t,s.attrName,o)}function qn(r,t,e,i){let s=r[T.COMPUTE];if(s)if(Jo){Ke++;const o=Wn(r),n=[];for(let l in t)es(l,s,n,o,i);let a;for(;a=n.shift();)xr(r,"",t,e,a)&&es(a.methodInfo,s,n,o,i);Object.assign(e,r.__dataOld),Object.assign(t,r.__dataPending),r.__dataPending=null}else{let o=t;for(;Ve(r,s,o,e,i);)Object.assign(e,r.__dataOld),Object.assign(t,r.__dataPending),o=r.__dataPending,r.__dataPending=null}}const Un=(r,t,e)=>{let i=0,s=t.length-1,o=-1;for(;i<=s;){const n=i+s>>1,a=e.get(t[n].methodInfo)-e.get(r.methodInfo);if(a<0)i=n+1;else if(a>0)s=n-1;else{o=n;break}}o<0&&(o=s+1),t.splice(o,0,r)},es=(r,t,e,i,s)=>{const o=s?ee(r):r,n=t[o];if(n)for(let a=0;a<n.length;a++){const l=n[a];l.info.lastRun!==Ke&&(!s||xi(r,l.trigger))&&(l.info.lastRun=Ke,Un(l.info,e,i))}};function Wn(r){let t=r.constructor.__orderedComputedDeps;if(!t){t=new Map;const e=r[T.COMPUTE];let{counts:i,ready:s,total:o}=Gn(r),n;for(;n=s.shift();){t.set(n,t.size);const a=e[n];a&&a.forEach(l=>{const d=l.info.methodInfo;--o,--i[d]===0&&s.push(d)})}o!==0&&console.warn(`Computed graph for ${r.localName} incomplete; circular?`),r.constructor.__orderedComputedDeps=t}return t}function Gn(r){const t=r[Cr],e={},i=r[T.COMPUTE],s=[];let o=0;for(let n in t){const a=t[n];o+=e[n]=a.args.filter(l=>!l.literal).length+(a.dynamicFn?1:0)}for(let n in i)t[n]||s.push(n);return{counts:e,ready:s,total:o}}function xr(r,t,e,i,s){let o=ii(r,t,e,i,s);if(o===Ye)return!1;let n=s.methodInfo;return r.__dataHasAccessor&&r.__dataHasAccessor[n]?r._setPendingProperty(n,o,!0):(r[n]=o,!1)}function jn(r,t,e){let i=r.__dataLinkedPaths;if(i){let s;for(let o in i){let n=i[o];je(o,t)?(s=gt(o,n,t),r._setPendingPropertyOrPath(s,e,!0,!0)):je(n,t)&&(s=gt(n,o,t),r._setPendingPropertyOrPath(s,e,!0,!0))}}}function Vt(r,t,e,i,s,o,n){e.bindings=e.bindings||[];let a={kind:i,target:s,parts:o,literal:n,isCompound:o.length!==1};if(e.bindings.push(a),Zn(a)){let{event:d,negate:c}=a.parts[0];a.listenerEvent=d||Pt(s)+"-changed",a.listenerNegate=c}let l=t.nodeInfoList.length;for(let d=0;d<a.parts.length;d++){let c=a.parts[d];c.compoundIndex=d,Kn(r,t,a,c,l)}}function Kn(r,t,e,i,s){if(!i.literal)if(e.kind==="attribute"&&e.target[0]==="-")console.warn("Cannot set attribute "+e.target+' because "-" is not a valid attribute starting character');else{let o=i.dependencies,n={index:s,binding:e,part:i,evaluator:r};for(let a=0;a<o.length;a++){let l=o[a];typeof l=="string"&&(l=Er(l),l.wildcard=!0),r._addTemplatePropertyEffect(t,l.rootProperty,{fn:Yn,info:n,trigger:l})}}}function Yn(r,t,e,i,s,o,n){let a=n[s.index],l=s.binding,d=s.part;if(o&&d.source&&t.length>d.source.length&&l.kind=="property"&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let c=e[t];t=gt(d.source,l.target,t),a._setPendingPropertyOrPath(t,c,!1,!0)&&r._enqueueClient(a)}else{let c=s.evaluator._evaluateBinding(r,d,t,e,i,o);c!==Ye&&Qn(r,a,l,d,c)}}function Qn(r,t,e,i,s){if(s=Xn(t,s,e,i),mt&&(s=mt(s,e.target,e.kind,t)),e.kind=="attribute")r._valueToNodeAttribute(t,s,e.target);else{let o=e.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[o]?(!t[T.READ_ONLY]||!t[T.READ_ONLY][o])&&t._setPendingProperty(o,s)&&r._enqueueClient(t):r._setUnmanagedPropertyToNode(t,o,s)}}function Xn(r,t,e,i){if(e.isCompound){let s=r.__dataCompoundStorage[e.target];s[i.compoundIndex]=t,t=s.join("")}return e.kind!=="attribute"&&(e.target==="textContent"||e.target==="value"&&(r.localName==="input"||r.localName==="textarea"))&&(t=t==null?"":t),t}function Zn(r){return Boolean(r.target)&&r.kind!="attribute"&&r.kind!="text"&&!r.isCompound&&r.parts[0].mode==="{"}function Jn(r,t){let{nodeList:e,nodeInfoList:i}=t;if(i.length)for(let s=0;s<i.length;s++){let o=i[s],n=e[s],a=o.bindings;if(a)for(let l=0;l<a.length;l++){let d=a[l];ea(n,d),ta(n,r,d)}n.__dataHost=r}}function ea(r,t){if(t.isCompound){let e=r.__dataCompoundStorage||(r.__dataCompoundStorage={}),i=t.parts,s=new Array(i.length);for(let n=0;n<i.length;n++)s[n]=i[n].literal;let o=t.target;e[o]=s,t.literal&&t.kind=="property"&&(o==="className"&&(r=P(r)),r[o]=t.literal)}}function ta(r,t,e){if(e.listenerEvent){let i=e.parts[0];r.addEventListener(e.listenerEvent,function(s){Bn(s,t,e.target,i.source,i.negate)})}}function ts(r,t,e,i,s,o){o=t.static||o&&(typeof o!="object"||o[t.methodName]);let n={methodName:t.methodName,args:t.args,methodInfo:s,dynamicFn:o};for(let a=0,l;a<t.args.length&&(l=t.args[a]);a++)l.literal||r._addPropertyEffect(l.rootProperty,e,{fn:i,info:n,trigger:l});return o&&r._addPropertyEffect(t.methodName,e,{fn:i,info:n}),n}function ii(r,t,e,i,s){let o=r._methodHost||r,n=o[s.methodName];if(n){let a=r._marshalArgs(s.args,t,e);return a===Ye?Ye:n.apply(o,a)}else s.dynamicFn||console.warn("method `"+s.methodName+"` not defined")}const ia=[],Ar="(?:[a-zA-Z_$][\\w.:$\\-*]*)",sa="(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)",ra="(?:'(?:[^'\\\\]|\\\\.)*')",oa='(?:"(?:[^"\\\\]|\\\\.)*")',na="(?:"+ra+"|"+oa+")",is="(?:("+Ar+"|"+sa+"|"+na+")\\s*)",aa="(?:"+is+"(?:,\\s*"+is+")*)",la="(?:\\(\\s*(?:"+aa+"?)\\)\\s*)",da="("+Ar+"\\s*"+la+"?)",ca="(\\[\\[|{{)\\s*",ha="(?:]]|}})",ua="(?:(!)\\s*)?",pa=ca+ua+da+ha,ss=new RegExp(pa,"g");function rs(r){let t="";for(let e=0;e<r.length;e++){let i=r[e].literal;t+=i||""}return t}function qt(r){let t=r.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let i={methodName:t[1],static:!0,args:ia};if(t[2].trim()){let s=t[2].replace(/\\,/g,"&comma;").split(",");return _a(s,i)}else return i}return null}function _a(r,t){return t.args=r.map(function(e){let i=Er(e);return i.literal||(t.static=!1),i},this),t}function Er(r){let t=r.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),e={name:t,value:"",literal:!1},i=t[0];switch(i==="-"&&(i=t[1]),i>="0"&&i<="9"&&(i="#"),i){case"'":case'"':e.value=t.slice(1,-1),e.literal=!0;break;case"#":e.value=Number(t),e.literal=!0;break}return e.literal||(e.rootProperty=ee(t),e.structured=Jt(t),e.structured&&(e.wildcard=t.slice(-2)==".*",e.wildcard&&(e.name=t.slice(0,-2)))),e}function os(r,t,e){let i=q(r,e);return i===void 0&&(i=t[e]),i}function Ir(r,t,e,i){const s={indexSplices:i};Zt&&!r._overrideLegacyUndefined&&(t.splices=s),r.notifyPath(e+".splices",s),r.notifyPath(e+".length",t.length),Zt&&!r._overrideLegacyUndefined&&(s.indexSplices=[])}function ze(r,t,e,i,s,o){Ir(r,t,e,[{index:i,addedCount:s,removed:o,object:t,type:"splice"}])}function fa(r){return r[0].toUpperCase()+r.substring(1)}const Ai=N(r=>{const t=Nn(En(r));class e extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return T}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(ke.length){let s=ke[ke.length-1];s._enqueueClient(this),this.__dataHost=s}}_initializeProtoProperties(s){this.__data=Object.create(s),this.__dataPending=Object.create(s),this.__dataOld={}}_initializeInstanceProperties(s){let o=this[T.READ_ONLY];for(let n in s)(!o||!o[n])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[n]=this.__dataPending[n]=s[n])}_addPropertyEffect(s,o,n){this._createPropertyAccessor(s,o==T.READ_ONLY);let a=Bt(this,o,!0)[s];a||(a=this[o][s]=[]),a.push(n)}_removePropertyEffect(s,o,n){let a=Bt(this,o,!0)[s],l=a.indexOf(n);l>=0&&a.splice(l,1)}_hasPropertyEffect(s,o){let n=this[o];return Boolean(n&&n[s])}_hasReadOnlyEffect(s){return this._hasPropertyEffect(s,T.READ_ONLY)}_hasNotifyEffect(s){return this._hasPropertyEffect(s,T.NOTIFY)}_hasReflectEffect(s){return this._hasPropertyEffect(s,T.REFLECT)}_hasComputedEffect(s){return this._hasPropertyEffect(s,T.COMPUTE)}_setPendingPropertyOrPath(s,o,n,a){if(a||ee(Array.isArray(s)?s[0]:s)!==s){if(!a){let l=q(this,s);if(s=Qi(this,s,o),!s||!super._shouldPropertyChange(s,o,l))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(s,o,n))return jn(this,s,o),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[s])return this._setPendingProperty(s,o,n);this[s]=o}return!1}_setUnmanagedPropertyToNode(s,o,n){(n!==s[o]||typeof n=="object")&&(o==="className"&&(s=P(s)),s[o]=n)}_setPendingProperty(s,o,n){let a=this.__dataHasPaths&&Jt(s),l=a?this.__dataTemp:this.__data;return this._shouldPropertyChange(s,o,l[s])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),s in this.__dataOld||(this.__dataOld[s]=this.__data[s]),a?this.__dataTemp[s]=o:this.__data[s]=o,this.__dataPending[s]=o,(a||this[T.NOTIFY]&&this[T.NOTIFY][s])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[s]=n),!0):!1}_setProperty(s,o){this._setPendingProperty(s,o,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(s){this.__dataPendingClients=this.__dataPendingClients||[],s!==this&&this.__dataPendingClients.push(s)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let s=this.__dataPendingClients;if(s){this.__dataPendingClients=null;for(let o=0;o<s.length;o++){let n=s[o];n.__dataEnabled?n.__dataPending&&n._flushProperties():n._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(s,o){for(let n in s)(o||!this[T.READ_ONLY]||!this[T.READ_ONLY][n])&&this._setPendingPropertyOrPath(n,s[n],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(s,o,n){let a=this.__dataHasPaths;this.__dataHasPaths=!1;let l;qn(this,o,n,a),l=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(o,n,a),this._flushClients(),Ve(this,this[T.REFLECT],o,n,a),Ve(this,this[T.OBSERVE],o,n,a),l&&Fn(this,l,o,n,a),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(s,o,n){this[T.PROPAGATE]&&Ve(this,this[T.PROPAGATE],s,o,n),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,s,o,n)}_runEffectsForTemplate(s,o,n,a){const l=(d,c)=>{Ve(this,s.propertyEffects,d,n,c,s.nodeList);for(let h=s.firstChild;h;h=h.nextSibling)this._runEffectsForTemplate(h,d,n,c)};s.runEffects?s.runEffects(l,o,a):l(o,a)}linkPaths(s,o){s=Be(s),o=Be(o),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[s]=o}unlinkPaths(s){s=Be(s),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[s]}notifySplices(s,o){let n={path:""},a=q(this,s,n);Ir(this,a,n.path,o)}get(s,o){return q(o||this,s)}set(s,o,n){n?Qi(n,s,o):(!this[T.READ_ONLY]||!this[T.READ_ONLY][s])&&this._setPendingPropertyOrPath(s,o,!0)&&this._invalidateProperties()}push(s,...o){let n={path:""},a=q(this,s,n),l=a.length,d=a.push(...o);return o.length&&ze(this,a,n.path,l,o.length,[]),d}pop(s){let o={path:""},n=q(this,s,o),a=Boolean(n.length),l=n.pop();return a&&ze(this,n,o.path,n.length,0,[l]),l}splice(s,o,n,...a){let l={path:""},d=q(this,s,l);o<0?o=d.length-Math.floor(-o):o&&(o=Math.floor(o));let c;return arguments.length===2?c=d.splice(o):c=d.splice(o,n,...a),(a.length||c.length)&&ze(this,d,l.path,o,a.length,c),c}shift(s){let o={path:""},n=q(this,s,o),a=Boolean(n.length),l=n.shift();return a&&ze(this,n,o.path,0,0,[l]),l}unshift(s,...o){let n={path:""},a=q(this,s,n),l=a.unshift(...o);return o.length&&ze(this,a,n.path,0,o.length,[]),l}notifyPath(s,o){let n;if(arguments.length==1){let a={path:""};o=q(this,s,a),n=a.path}else Array.isArray(s)?n=Be(s):n=s;this._setPendingPropertyOrPath(n,o,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(s,o){this._addPropertyEffect(s,T.READ_ONLY),o&&(this["_set"+fa(s)]=function(n){this._setProperty(s,n)})}_createPropertyObserver(s,o,n){let a={property:s,method:o,dynamicFn:Boolean(n)};this._addPropertyEffect(s,T.OBSERVE,{fn:Ji,info:a,trigger:{name:s}}),n&&this._addPropertyEffect(o,T.OBSERVE,{fn:Ji,info:a,trigger:{name:o}})}_createMethodObserver(s,o){let n=qt(s);if(!n)throw new Error("Malformed observer expression '"+s+"'");ts(this,n,T.OBSERVE,ii,null,o)}_createNotifyingProperty(s){this._addPropertyEffect(s,T.NOTIFY,{fn:$n,info:{eventName:Pt(s)+"-changed",property:s}})}_createReflectedProperty(s){let o=this.constructor.attributeNameForProperty(s);o[0]==="-"?console.warn("Property "+s+" cannot be reflected to attribute "+o+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(s,T.REFLECT,{fn:Vn,info:{attrName:o}})}_createComputedProperty(s,o,n){let a=qt(o);if(!a)throw new Error("Malformed computed expression '"+o+"'");const l=ts(this,a,T.COMPUTE,xr,s,n);Bt(this,Cr)[s]=l}_marshalArgs(s,o,n){const a=this.__data,l=[];for(let d=0,c=s.length;d<c;d++){let{name:h,structured:m,wildcard:g,value:b,literal:C}=s[d];if(!C)if(g){const y=je(h,o),S=os(a,n,y?o:h);b={path:y?o:h,value:S,base:y?q(a,h):S}}else b=m?os(a,n,h):a[h];if(Zt&&!this._overrideLegacyUndefined&&b===void 0&&s.length>1)return Ye;l[d]=b}return l}static addPropertyEffect(s,o,n){this.prototype._addPropertyEffect(s,o,n)}static createPropertyObserver(s,o,n){this.prototype._createPropertyObserver(s,o,n)}static createMethodObserver(s,o){this.prototype._createMethodObserver(s,o)}static createNotifyingProperty(s){this.prototype._createNotifyingProperty(s)}static createReadOnlyProperty(s,o){this.prototype._createReadOnlyProperty(s,o)}static createReflectedProperty(s){this.prototype._createReflectedProperty(s)}static createComputedProperty(s,o,n){this.prototype._createComputedProperty(s,o,n)}static bindTemplate(s){return this.prototype._bindTemplate(s)}_bindTemplate(s,o){let n=this.constructor._parseTemplate(s),a=this.__preBoundTemplateInfo==n;if(!a)for(let l in n.propertyEffects)this._createPropertyAccessor(l);if(o)if(n=Object.create(n),n.wasPreBound=a,!this.__templateInfo)this.__templateInfo=n;else{const l=s._parentTemplateInfo||this.__templateInfo,d=l.lastChild;n.parent=l,l.lastChild=n,n.previousSibling=d,d?d.nextSibling=n:l.firstChild=n}else this.__preBoundTemplateInfo=n;return n}static _addTemplatePropertyEffect(s,o,n){let a=s.hostProps=s.hostProps||{};a[o]=!0;let l=s.propertyEffects=s.propertyEffects||{};(l[o]=l[o]||[]).push(n)}_stampTemplate(s,o){o=o||this._bindTemplate(s,!0),ke.push(this);let n=super._stampTemplate(s,o);if(ke.pop(),o.nodeList=n.nodeList,!o.wasPreBound){let a=o.childNodes=[];for(let l=n.firstChild;l;l=l.nextSibling)a.push(l)}return n.templateInfo=o,Jn(this,o),this.__dataClientsReady&&(this._runEffectsForTemplate(o,this.__data,null,!1),this._flushClients()),n}_removeBoundDom(s){const o=s.templateInfo,{previousSibling:n,nextSibling:a,parent:l}=o;n?n.nextSibling=a:l&&(l.firstChild=a),a?a.previousSibling=n:l&&(l.lastChild=n),o.nextSibling=o.previousSibling=null;let d=o.childNodes;for(let c=0;c<d.length;c++){let h=d[c];P(P(h).parentNode).removeChild(h)}}static _parseTemplateNode(s,o,n){let a=t._parseTemplateNode.call(this,s,o,n);if(s.nodeType===Node.TEXT_NODE){let l=this._parseBindings(s.textContent,o);l&&(s.textContent=rs(l)||" ",Vt(this,o,n,"text","textContent",l),a=!0)}return a}static _parseTemplateNodeAttribute(s,o,n,a,l){let d=this._parseBindings(l,o);if(d){let c=a,h="property";Dn.test(a)?h="attribute":a[a.length-1]=="$"&&(a=a.slice(0,-1),h="attribute");let m=rs(d);return m&&h=="attribute"&&(a=="class"&&s.hasAttribute("class")&&(m+=" "+s.getAttribute(a)),s.setAttribute(a,m)),h=="attribute"&&c=="disable-upgrade$"&&s.setAttribute(a,""),s.localName==="input"&&c==="value"&&s.setAttribute(c,""),s.removeAttribute(c),h==="property"&&(a=fr(a)),Vt(this,o,n,h,a,d,m),!0}else return t._parseTemplateNodeAttribute.call(this,s,o,n,a,l)}static _parseTemplateNestedTemplate(s,o,n){let a=t._parseTemplateNestedTemplate.call(this,s,o,n);const l=s.parentNode,d=n.templateInfo,c=l.localName==="dom-if",h=l.localName==="dom-repeat";Wi&&(c||h)&&(l.removeChild(s),n=n.parentInfo,n.templateInfo=d,n.noted=!0,a=!1);let m=d.hostProps;if(hr&&c)m&&(o.hostProps=Object.assign(o.hostProps||{},m),Wi||(n.parentInfo.noted=!0));else{let g="{";for(let b in m){let C=[{mode:g,source:b,dependencies:[b],hostProp:!0}];Vt(this,o,n,"property","_host_"+b,C)}}return a}static _parseBindings(s,o){let n=[],a=0,l;for(;(l=ss.exec(s))!==null;){l.index>a&&n.push({literal:s.slice(a,l.index)});let d=l[1][0],c=Boolean(l[2]),h=l[3].trim(),m=!1,g="",b=-1;d=="{"&&(b=h.indexOf("::"))>0&&(g=h.substring(b+2),h=h.substring(0,b),m=!0);let C=qt(h),y=[];if(C){let{args:S,methodName:E}=C;for(let U=0;U<S.length;U++){let B=S[U];B.literal||y.push(B)}let L=o.dynamicFns;(L&&L[E]||C.static)&&(y.push(E),C.dynamicFn=!0)}else y.push(h);n.push({source:h,mode:d,negate:c,customEvent:m,signature:C,dependencies:y,event:g}),a=ss.lastIndex}if(a&&a<s.length){let d=s.substring(a);d&&n.push({literal:d})}return n.length?n:null}static _evaluateBinding(s,o,n,a,l,d){let c;return o.signature?c=ii(s,n,a,l,o.signature):n!=o.source?c=q(s,o.source):d&&Jt(n)?c=q(s,n):c=s.__data[n],o.negate&&(c=!c),c}}return e}),ke=[];/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function hc(r){}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function ma(r){const t={};for(let e in r){const i=r[e];t[e]=typeof i=="function"?{type:i}:i}return t}const ga=N(r=>{const t=vr(r);function e(o){const n=Object.getPrototypeOf(o);return n.prototype instanceof s?n:null}function i(o){if(!o.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",o))){let n=null;if(o.hasOwnProperty(JSCompiler_renameProperty("properties",o))){const a=o.properties;a&&(n=ma(a))}o.__ownProperties=n}return o.__ownProperties}class s extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const n=this._properties;this.__observedAttributes=n?Object.keys(n).map(a=>this.prototype._addPropertyToAttributeMap(a)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const n=e(this);n&&n.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const n=i(this);n&&this.createProperties(n)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const n=e(this);this.__properties=Object.assign({},n&&n._properties,i(this))}return this.__properties}static typeForProperty(n){const a=this._properties[n];return a&&a.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return s});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const va="3.5.1",ns=window.ShadyCSS&&window.ShadyCSS.cssBuild,ba=N(r=>{const t=ga(Ai(r));function e(l){if(!l.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",l))){l.__propertyDefaults=null;let d=l._properties;for(let c in d){let h=d[c];"value"in h&&(l.__propertyDefaults=l.__propertyDefaults||{},l.__propertyDefaults[c]=h)}}return l.__propertyDefaults}function i(l){return l.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",l))||(l.__ownObservers=l.hasOwnProperty(JSCompiler_renameProperty("observers",l))?l.observers:null),l.__ownObservers}function s(l,d,c,h){c.computed&&(c.readOnly=!0),c.computed&&(l._hasReadOnlyEffect(d)?console.warn(`Cannot redefine computed property '${d}'.`):l._createComputedProperty(d,c.computed,h)),c.readOnly&&!l._hasReadOnlyEffect(d)?l._createReadOnlyProperty(d,!c.computed):c.readOnly===!1&&l._hasReadOnlyEffect(d)&&console.warn(`Cannot make readOnly property '${d}' non-readOnly.`),c.reflectToAttribute&&!l._hasReflectEffect(d)?l._createReflectedProperty(d):c.reflectToAttribute===!1&&l._hasReflectEffect(d)&&console.warn(`Cannot make reflected property '${d}' non-reflected.`),c.notify&&!l._hasNotifyEffect(d)?l._createNotifyingProperty(d):c.notify===!1&&l._hasNotifyEffect(d)&&console.warn(`Cannot make notify property '${d}' non-notify.`),c.observer&&l._createPropertyObserver(d,c.observer,h[c.observer]),l._addPropertyToAttributeMap(d)}function o(l,d,c,h){if(!ns){const m=d.content.querySelectorAll("style"),g=St(d),b=hn(c),C=d.content.firstElementChild;for(let S=0;S<b.length;S++){let E=b[S];E.textContent=l._processStyleText(E.textContent,h),d.content.insertBefore(E,C)}let y=0;for(let S=0;S<g.length;S++){let E=g[S],L=m[y];L!==E?(E=E.cloneNode(!0),L.parentNode.insertBefore(E,L)):y++,E.textContent=l._processStyleText(E.textContent,h)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(d,c),rn&&ns&&Yo){const m=d.content.querySelectorAll("style");if(m){let g="";Array.from(m).forEach(b=>{g+=b.textContent,b.parentNode.removeChild(b)}),l._styleSheet=new CSSStyleSheet,l._styleSheet.replaceSync(g)}}}function n(l){let d=null;if(l&&(!Ge||Xo)&&(d=Ee.import(l,"template"),Ge&&!d))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${l}`);return d}class a extends t{static get polymerElementVersion(){return va}static _finalizeClass(){t._finalizeClass.call(this);const d=i(this);d&&this.createObservers(d,this._properties),this._prepareTemplate()}static _prepareTemplate(){let d=this.template;d&&(typeof d=="string"?(console.error("template getter must return HTMLTemplateElement"),d=null):dr||(d=d.cloneNode(!0))),this.prototype._template=d}static createProperties(d){for(let c in d)s(this.prototype,c,d[c],d)}static createObservers(d,c){const h=this.prototype;for(let m=0;m<d.length;m++)h._createMethodObserver(d[m],c)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let d=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;typeof d=="function"&&(d=d()),this._template=d!==void 0?d:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&n(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(d){this._template=d}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const d=this.importMeta;if(d)this._importPath=vi(d.url);else{const c=Ee.import(this.is);this._importPath=c&&c.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=Qo,this.importPath=this.constructor.importPath;let d=e(this.constructor);if(!!d)for(let c in d){let h=d[c];if(this._canApplyPropertyDefault(c)){let m=typeof h.value=="function"?h.value.call(this):h.value;this._hasAccessor(c)?this._setPendingProperty(c,m,!0):this[c]=m}}}_canApplyPropertyDefault(d){return!this.hasOwnProperty(d)}static _processStyleText(d,c){return gi(d,c)}static _finalizeTemplate(d){const c=this.prototype._template;if(c&&!c.__polymerFinalized){c.__polymerFinalized=!0;const h=this.importPath,m=h?qe(h):"";o(this,c,d,m),this.prototype._bindTemplate(c)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(d){const c=P(this);if(c.attachShadow)return d?(c.shadowRoot||(c.attachShadow({mode:"open",shadyUpgradeFragment:d}),c.shadowRoot.appendChild(d),this.constructor._styleSheet&&(c.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),Zo&&window.ShadyDOM&&window.ShadyDOM.flushInitial(c.shadowRoot),c.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(d){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,d)}resolveUrl(d,c){return!c&&this.importPath&&(c=qe(this.importPath)),qe(d,c)}static _parseTemplateContent(d,c,h){return c.dynamicFns=c.dynamicFns||this._properties,t._parseTemplateContent.call(this,d,c,h)}static _addTemplatePropertyEffect(d,c,h){return cr&&!(c in this._properties)&&!(h.info.part.signature&&h.info.part.signature.static)&&!h.info.part.hostProp&&!d.nestedTemplate&&console.warn(`Property '${c}' used in template but not declared in 'properties'; attribute will not be observed.`),t._addTemplatePropertyEffect.call(this,d,c,h)}}return a});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const as=window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:r=>r});class Tr{constructor(t,e){Pr(t,e);const i=e.reduce((s,o,n)=>s+Sr(o)+t[n+1],t[0]);this.value=i.toString()}toString(){return this.value}}function Sr(r){if(r instanceof Tr)return r.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${r}`)}function ya(r){if(r instanceof HTMLTemplateElement)return r.innerHTML;if(r instanceof Tr)return Sr(r);throw new Error(`non-template value passed to Polymer's html function: ${r}`)}const z=function(t,...e){Pr(t,e);const i=document.createElement("template");let s=e.reduce((o,n,a)=>o+ya(n)+t[a+1],t[0]);return as&&(s=as.createHTML(s)),i.innerHTML=s,i},Pr=(r,t)=>{if(!Array.isArray(r)||!Array.isArray(r.raw)||t.length!==r.length-1)throw new TypeError("Invalid call to the html template tag")};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const O=ba(HTMLElement);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ot=N(r=>class extends r{static get properties(){return{disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0}}}_disabledChanged(e){this._setAriaDisabled(e)}_setAriaDisabled(e){e?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")}click(){this.disabled||super.click()}});/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */let ls=0,Or=0;const ye=[];let ds=0,si=!1;const zr=document.createTextNode("");new window.MutationObserver(Ca).observe(zr,{characterData:!0});function Ca(){si=!1;const r=ye.length;for(let t=0;t<r;t++){const e=ye[t];if(e)try{e()}catch(i){setTimeout(()=>{throw i})}}ye.splice(0,r),Or+=r}const K={after(r){return{run(t){return window.setTimeout(t,r)},cancel(t){window.clearTimeout(t)}}},run(r,t){return window.setTimeout(r,t)},cancel(r){window.clearTimeout(r)}},Ie={run(r){return window.requestAnimationFrame(r)},cancel(r){window.cancelAnimationFrame(r)}},kr={run(r){return window.requestIdleCallback?window.requestIdleCallback(r):window.setTimeout(r,16)},cancel(r){window.cancelIdleCallback?window.cancelIdleCallback(r):window.clearTimeout(r)}},de={run(r){si||(si=!0,zr.textContent=ds,ds+=1),ye.push(r);const t=ls;return ls+=1,t},cancel(r){const t=r-Or;if(t>=0){if(!ye[t])throw new Error(`invalid async handle: ${r}`);ye[t]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const wa=!1,xa=r=>r,Ei=typeof document.head.style.touchAction=="string",bt="__polymerGestures",Ut="__polymerGesturesHandled",ri="__polymerGesturesTouchAction",cs=25,hs=5,Aa=2,Ea=["mousedown","mousemove","mouseup","click"],Ia=[0,1,4,2],Ta=function(){try{return new MouseEvent("test",{buttons:1}).buttons===1}catch{return!1}}();function Ii(r){return Ea.indexOf(r)>-1}let Lr=!1;(function(){try{const r=Object.defineProperty({},"passive",{get(){Lr=!0}});window.addEventListener("test",null,r),window.removeEventListener("test",null,r)}catch{}})();function Rr(r){if(!(Ii(r)||r==="touchend")&&Ei&&Lr&&wa)return{passive:!0}}const Sa=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/),Pa={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function le(r){const t=r.type;if(!Ii(t))return!1;if(t==="mousemove"){let i=r.buttons===void 0?1:r.buttons;return r instanceof window.MouseEvent&&!Ta&&(i=Ia[r.which]||0),Boolean(i&1)}return(r.button===void 0?0:r.button)===0}function Oa(r){if(r.type==="click"){if(r.detail===0)return!0;const t=se(r);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;const e=t.getBoundingClientRect(),i=r.pageX,s=r.pageY;return!(i>=e.left&&i<=e.right&&s>=e.top&&s<=e.bottom)}return!1}const X={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function za(r){let t="auto";const e=Dr(r);for(let i=0,s;i<e.length;i++)if(s=e[i],s[ri]){t=s[ri];break}return t}function Nr(r,t,e){r.movefn=t,r.upfn=e,document.addEventListener("mousemove",t),document.addEventListener("mouseup",e)}function Ce(r){document.removeEventListener("mousemove",r.movefn),document.removeEventListener("mouseup",r.upfn),r.movefn=null,r.upfn=null}const Dr=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:r=>r.composedPath&&r.composedPath()||[],J={},ae=[];function ka(r,t){let e=document.elementFromPoint(r,t),i=e;for(;i&&i.shadowRoot&&!window.ShadyDOM;){const s=i;if(i=i.shadowRoot.elementFromPoint(r,t),s===i)break;i&&(e=i)}return e}function se(r){const t=Dr(r);return t.length>0?t[0]:r.target}function Mr(r){const t=r.type,i=r.currentTarget[bt];if(!i)return;const s=i[t];if(!s)return;if(!r[Ut]&&(r[Ut]={},t.startsWith("touch"))){const n=r.changedTouches[0];if(t==="touchstart"&&r.touches.length===1&&(X.touch.id=n.identifier),X.touch.id!==n.identifier)return;Ei||(t==="touchstart"||t==="touchmove")&&La(r)}const o=r[Ut];if(!o.skip){for(let n=0,a;n<ae.length;n++)a=ae[n],s[a.name]&&!o[a.name]&&a.flow&&a.flow.start.indexOf(r.type)>-1&&a.reset&&a.reset();for(let n=0,a;n<ae.length;n++)a=ae[n],s[a.name]&&!o[a.name]&&(o[a.name]=!0,a[t](r))}}function La(r){const t=r.changedTouches[0],e=r.type;if(e==="touchstart")X.touch.x=t.clientX,X.touch.y=t.clientY,X.touch.scrollDecided=!1;else if(e==="touchmove"){if(X.touch.scrollDecided)return;X.touch.scrollDecided=!0;const i=za(r);let s=!1;const o=Math.abs(X.touch.x-t.clientX),n=Math.abs(X.touch.y-t.clientY);r.cancelable&&(i==="none"?s=!0:i==="pan-x"?s=n>o:i==="pan-y"&&(s=o>n)),s?r.preventDefault():Se("track")}}function Te(r,t,e){return J[t]?(Ra(r,t,e),!0):!1}function Fr(r,t,e){return J[t]?(Na(r,t,e),!0):!1}function Ra(r,t,e){const i=J[t],s=i.deps,o=i.name;let n=r[bt];n||(r[bt]=n={});for(let a=0,l,d;a<s.length;a++)l=s[a],!(Sa&&Ii(l)&&l!=="click")&&(d=n[l],d||(n[l]=d={_count:0}),d._count===0&&r.addEventListener(l,Mr,Rr(l)),d[o]=(d[o]||0)+1,d._count=(d._count||0)+1);r.addEventListener(t,e),i.touchAction&&Ma(r,i.touchAction)}function Na(r,t,e){const i=J[t],s=i.deps,o=i.name,n=r[bt];if(n)for(let a=0,l,d;a<s.length;a++)l=s[a],d=n[l],d&&d[o]&&(d[o]=(d[o]||1)-1,d._count=(d._count||1)-1,d._count===0&&r.removeEventListener(l,Mr,Rr(l)));r.removeEventListener(t,e)}function zt(r){ae.push(r);for(let t=0;t<r.emits.length;t++)J[r.emits[t]]=r}function Da(r){for(let t=0,e;t<ae.length;t++){e=ae[t];for(let i=0,s;i<e.emits.length;i++)if(s=e.emits[i],s===r)return e}return null}function Ma(r,t){Ei&&r instanceof HTMLElement&&de.run(()=>{r.style.touchAction=t}),r[ri]=t}function Ti(r,t,e){const i=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(i.detail=e,xa(r).dispatchEvent(i),i.defaultPrevented){const s=e.preventer||e.sourceEvent;s&&s.preventDefault&&s.preventDefault()}}function Se(r){const t=Da(r);t.info&&(t.info.prevent=!0)}zt({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset(){Ce(this.info)},mousedown(r){if(!le(r))return;const t=se(r),e=this,i=o=>{le(o)||(Le("up",t,o),Ce(e.info))},s=o=>{le(o)&&Le("up",t,o),Ce(e.info)};Nr(this.info,i,s),Le("down",t,r)},touchstart(r){Le("down",se(r),r.changedTouches[0],r)},touchend(r){Le("up",se(r),r.changedTouches[0],r)}});function Le(r,t,e,i){!t||Ti(t,r,{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:i,prevent(s){return Se(s)}})}zt({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove(r){this.moves.length>Aa&&this.moves.shift(),this.moves.push(r)},movefn:null,upfn:null,prevent:!1},reset(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,Ce(this.info)},mousedown(r){if(!le(r))return;const t=se(r),e=this,i=o=>{const n=o.clientX,a=o.clientY;us(e.info,n,a)&&(e.info.state=e.info.started?o.type==="mouseup"?"end":"track":"start",e.info.state==="start"&&Se("tap"),e.info.addMove({x:n,y:a}),le(o)||(e.info.state="end",Ce(e.info)),t&&Wt(e.info,t,o),e.info.started=!0)},s=o=>{e.info.started&&i(o),Ce(e.info)};Nr(this.info,i,s),this.info.x=r.clientX,this.info.y=r.clientY},touchstart(r){const t=r.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove(r){const t=se(r),e=r.changedTouches[0],i=e.clientX,s=e.clientY;us(this.info,i,s)&&(this.info.state==="start"&&Se("tap"),this.info.addMove({x:i,y:s}),Wt(this.info,t,e),this.info.state="track",this.info.started=!0)},touchend(r){const t=se(r),e=r.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:e.clientX,y:e.clientY}),Wt(this.info,t,e))}});function us(r,t,e){if(r.prevent)return!1;if(r.started)return!0;const i=Math.abs(r.x-t),s=Math.abs(r.y-e);return i>=hs||s>=hs}function Wt(r,t,e){if(!t)return;const i=r.moves[r.moves.length-2],s=r.moves[r.moves.length-1],o=s.x-r.x,n=s.y-r.y;let a,l=0;i&&(a=s.x-i.x,l=s.y-i.y),Ti(t,"track",{state:r.state,x:e.clientX,y:e.clientY,dx:o,dy:n,ddx:a,ddy:l,sourceEvent:e,hover(){return ka(e.clientX,e.clientY)}})}zt({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown(r){le(r)&&(this.info.x=r.clientX,this.info.y=r.clientY)},click(r){le(r)&&ps(this.info,r)},touchstart(r){const t=r.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend(r){ps(this.info,r.changedTouches[0],r)}});function ps(r,t,e){const i=Math.abs(t.clientX-r.x),s=Math.abs(t.clientY-r.y),o=se(e||t);!o||Pa[o.localName]&&o.hasAttribute("disabled")||(isNaN(i)||isNaN(s)||i<=cs&&s<=cs||Oa(t))&&(r.prevent||Ti(o,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:e}))}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const kt=N(r=>class extends r{ready(){super.ready(),this.addEventListener("keydown",e=>{this._onKeyDown(e)}),this.addEventListener("keyup",e=>{this._onKeyUp(e)})}_onKeyDown(e){switch(e.key){case"Enter":this._onEnter(e);break;case"Escape":this._onEscape(e);break}}_onKeyUp(e){}_onEnter(e){}_onEscape(e){}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Si=r=>class extends Ot(kt(r)){get _activeKeys(){return[" "]}ready(){super.ready(),Te(this,"down",e=>{this._shouldSetActive(e)&&this._setActive(!0)}),Te(this,"up",()=>{this._setActive(!1)})}disconnectedCallback(){super.disconnectedCallback(),this._setActive(!1)}_shouldSetActive(e){return!this.disabled}_onKeyDown(e){super._onKeyDown(e),this._shouldSetActive(e)&&this._activeKeys.includes(e.key)&&(this._setActive(!0),document.addEventListener("keyup",i=>{this._activeKeys.includes(i.key)&&this._setActive(!1)},{once:!0}))}_setActive(e){this.toggleAttribute("active",e)}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Y=N(r=>class extends r{constructor(){super(),this.__controllers=new Set}connectedCallback(){super.connectedCallback(),this.__controllers.forEach(e=>{e.hostConnected&&e.hostConnected()})}disconnectedCallback(){super.disconnectedCallback(),this.__controllers.forEach(e=>{e.hostDisconnected&&e.hostDisconnected()})}addController(e){this.__controllers.add(e),this.$!==void 0&&this.isConnected&&e.hostConnected&&e.hostConnected()}removeController(e){this.__controllers.delete(e)}}),Fa=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,ft=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Ha(){function r(){return!0}return Hr(r)}function $a(){try{return Ba()?!0:Va()?ft?!qa():!Ha():!1}catch{return!1}}function Ba(){return localStorage.getItem("vaadin.developmentmode.force")}function Va(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function qa(){return!!(ft&&Object.keys(ft).map(t=>ft[t]).filter(t=>t.productionMode).length>0)}function Hr(r,t){if(typeof r!="function")return;const e=Fa.exec(r.toString());if(e)try{r=new Function(e[1])}catch(i){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",i)}return r(t)}window.Vaadin=window.Vaadin||{};const _s=function(r,t){if(window.Vaadin.developmentMode)return Hr(r,t)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=$a());function Ua(){}const Wa=function(){if(typeof _s=="function")return _s(Ua)};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class R{static debounce(t,e,i){return t instanceof R?t._cancelAsync():t=new R,t.setConfig(e,i),t}constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run(()=>{this._timer=null,Qe.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),Qe.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}}let Qe=new Set;function $r(r){Qe.add(r)}function Ga(){const r=Boolean(Qe.size);return Qe.forEach(t=>{try{t.flush()}catch(e){setTimeout(()=>{throw e})}}),r}const Ue=()=>{let r;do r=Ga();while(r)};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class we{static detectScrollType(){const t=document.createElement("div");t.textContent="ABCD",t.dir="rtl",t.style.fontSize="14px",t.style.width="4px",t.style.height="1px",t.style.position="absolute",t.style.top="-1000px",t.style.overflow="scroll",document.body.appendChild(t);let e="reverse";return t.scrollLeft>0?e="default":(t.scrollLeft=2,t.scrollLeft<2&&(e="negative")),document.body.removeChild(t),e}static getNormalizedScrollLeft(t,e,i){const{scrollLeft:s}=i;if(e!=="rtl"||!t)return s;switch(t){case"negative":return i.scrollWidth-i.clientWidth+s;case"reverse":return i.scrollWidth-i.clientWidth-s;default:return s}}static setNormalizedScrollLeft(t,e,i,s){if(e!=="rtl"||!t){i.scrollLeft=s;return}switch(t){case"negative":i.scrollLeft=i.clientWidth-i.scrollWidth+s;break;case"reverse":i.scrollLeft=i.scrollWidth-i.clientWidth-s;break;default:i.scrollLeft=s;break}}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Q=[];function ja(){const r=ni();Q.forEach(t=>{oi(t,r)})}let ct;const Ka=new MutationObserver(ja);Ka.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});function oi(r,t,e=r.getAttribute("dir")){t?r.setAttribute("dir",t):e!=null&&r.removeAttribute("dir")}function ni(){return document.documentElement.getAttribute("dir")}const he=r=>class extends r{static get properties(){return{dir:{type:String,value:"",reflectToAttribute:!0,converter:{fromAttribute:e=>e||"",toAttribute:e=>e===""?null:e}}}}static finalize(){super.finalize(),ct||(ct=we.detectScrollType())}connectedCallback(){super.connectedCallback(),(!this.hasAttribute("dir")||this.__restoreSubscription)&&(this.__subscribe(),oi(this,ni(),null))}attributeChangedCallback(e,i,s){if(super.attributeChangedCallback(e,i,s),e!=="dir")return;const o=ni(),n=s===o&&Q.indexOf(this)===-1,a=!s&&i&&Q.indexOf(this)===-1;n||a?(this.__subscribe(),oi(this,o,s)):s!==o&&i===o&&this.__unsubscribe()}disconnectedCallback(){super.disconnectedCallback(),this.__restoreSubscription=Q.includes(this),this.__unsubscribe()}_valueToNodeAttribute(e,i,s){s==="dir"&&i===""&&!e.hasAttribute("dir")||super._valueToNodeAttribute(e,i,s)}_attributeToProperty(e,i,s){e==="dir"&&!i?this.dir="":super._attributeToProperty(e,i,s)}__subscribe(){Q.includes(this)||Q.push(this)}__unsubscribe(){Q.includes(this)&&Q.splice(Q.indexOf(this),1)}__getNormalizedScrollLeft(e){return we.getNormalizedScrollLeft(ct,this.getAttribute("dir")||"ltr",e)}__setNormalizedScrollLeft(e,i){return we.setNormalizedScrollLeft(ct,this.getAttribute("dir")||"ltr",e,i)}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */tn(!1);window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.developmentModeCallback=window.Vaadin.developmentModeCallback||{};window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){Wa()};let Gt;const fs=new Set,V=r=>class extends he(r){static get version(){return"23.3.5"}static finalize(){super.finalize();const{is:e}=this;e&&!fs.has(e)&&(window.Vaadin.registrations.push(this),fs.add(e),window.Vaadin.developmentModeCallback&&(Gt=R.debounce(Gt,kr,()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()}),$r(Gt)))}constructor(){super(),document.doctype===null&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Re(r,t,e){return{index:r,removed:t,addedCount:e}}const Br=0,Vr=1,ai=2,li=3;function Ya(r,t,e,i,s,o){let n=o-s+1,a=e-t+1,l=new Array(n);for(let d=0;d<n;d++)l[d]=new Array(a),l[d][0]=d;for(let d=0;d<a;d++)l[0][d]=d;for(let d=1;d<n;d++)for(let c=1;c<a;c++)if(Pi(r[t+c-1],i[s+d-1]))l[d][c]=l[d-1][c-1];else{let h=l[d-1][c]+1,m=l[d][c-1]+1;l[d][c]=h<m?h:m}return l}function Qa(r){let t=r.length-1,e=r[0].length-1,i=r[t][e],s=[];for(;t>0||e>0;){if(t==0){s.push(ai),e--;continue}if(e==0){s.push(li),t--;continue}let o=r[t-1][e-1],n=r[t-1][e],a=r[t][e-1],l;n<a?l=n<o?n:o:l=a<o?a:o,l==o?(o==i?s.push(Br):(s.push(Vr),i=o),t--,e--):l==n?(s.push(li),t--,i=n):(s.push(ai),e--,i=a)}return s.reverse(),s}function Xa(r,t,e,i,s,o){let n=0,a=0,l,d=Math.min(e-t,o-s);if(t==0&&s==0&&(n=Za(r,i,d)),e==r.length&&o==i.length&&(a=Ja(r,i,d-n)),t+=n,s+=n,e-=a,o-=a,e-t==0&&o-s==0)return[];if(t==e){for(l=Re(t,[],0);s<o;)l.removed.push(i[s++]);return[l]}else if(s==o)return[Re(t,[],e-t)];let c=Qa(Ya(r,t,e,i,s,o));l=void 0;let h=[],m=t,g=s;for(let b=0;b<c.length;b++)switch(c[b]){case Br:l&&(h.push(l),l=void 0),m++,g++;break;case Vr:l||(l=Re(m,[],0)),l.addedCount++,m++,l.removed.push(i[g]),g++;break;case ai:l||(l=Re(m,[],0)),l.addedCount++,m++;break;case li:l||(l=Re(m,[],0)),l.removed.push(i[g]),g++;break}return l&&h.push(l),h}function Za(r,t,e){for(let i=0;i<e;i++)if(!Pi(r[i],t[i]))return i;return e}function Ja(r,t,e){let i=r.length,s=t.length,o=0;for(;o<e&&Pi(r[--i],t[--s]);)o++;return o}function el(r,t){return Xa(r,0,r.length,t,0,t.length)}function Pi(r,t){return r===t}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function fe(r){return r.localName==="slot"}let $=class{static getFlattenedNodes(r){const t=P(r);return fe(r)?(r=r,t.assignedNodes({flatten:!0})):Array.from(t.childNodes).map(e=>fe(e)?(e=e,P(e).assignedNodes({flatten:!0})):[e]).reduce((e,i)=>e.concat(i),[])}constructor(r,t){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=r,this.callback=t,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){fe(this._target)?this._listenSlots([this._target]):P(this._target).children&&(this._listenSlots(P(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,r=>{this._processMutations(r)}):(this._nativeChildrenObserver=new MutationObserver(r=>{this._processMutations(r)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){fe(this._target)?this._unlistenSlots([this._target]):P(this._target).children&&(this._unlistenSlots(P(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,wi.run(()=>this.flush()))}_processMutations(r){this._processSlotMutations(r),this.flush()}_processSlotMutations(r){if(r)for(let t=0;t<r.length;t++){let e=r[t];e.addedNodes&&this._listenSlots(e.addedNodes),e.removedNodes&&this._unlistenSlots(e.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let r={target:this._target,addedNodes:[],removedNodes:[]},t=this.constructor.getFlattenedNodes(this._target),e=el(t,this._effectiveNodes);for(let s=0,o;s<e.length&&(o=e[s]);s++)for(let n=0,a;n<o.removed.length&&(a=o.removed[n]);n++)r.removedNodes.push(a);for(let s=0,o;s<e.length&&(o=e[s]);s++)for(let n=o.index;n<o.index+o.addedCount;n++)r.addedNodes.push(t[n]);this._effectiveNodes=t;let i=!1;return(r.addedNodes.length||r.removedNodes.length)&&(i=!0,this.callback.call(this._target,r)),i}_listenSlots(r){for(let t=0;t<r.length;t++){let e=r[t];fe(e)&&e.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(r){for(let t=0;t<r.length;t++){let e=r[t];fe(e)&&e.removeEventListener("slotchange",this._boundSchedule)}}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let tl=0;function Lt(){return tl++}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class re extends EventTarget{static generateId(t,e){return`${t||"default"}-${e.localName}-${Lt()}`}constructor(t,e,i,s,o){super(),this.host=t,this.slotName=e,this.slotFactory=i,this.slotInitializer=s,o&&(this.defaultId=re.generateId(e,t))}hostConnected(){if(!this.initialized){let t=this.getSlotChild();t?(this.node=t,this.initCustomNode(t)):t=this.attachDefaultNode(),this.initNode(t),this.observe(),this.initialized=!0}}attachDefaultNode(){const{host:t,slotName:e,slotFactory:i}=this;let s=this.defaultNode;return!s&&i&&(s=i(t),s instanceof Element&&(e!==""&&s.setAttribute("slot",e),this.node=s,this.defaultNode=s)),s&&t.appendChild(s),s}getSlotChild(){const{slotName:t}=this;return Array.from(this.host.childNodes).find(e=>e.nodeType===Node.ELEMENT_NODE&&e.slot===t||e.nodeType===Node.TEXT_NODE&&e.textContent.trim()&&t==="")}initNode(t){const{slotInitializer:e}=this;e&&e(this.host,t)}initCustomNode(t){}teardownNode(t){}observe(){const{slotName:t}=this,e=t===""?"slot:not([name])":`slot[name=${t}]`,i=this.host.shadowRoot.querySelector(e);this.__slotObserver=new $(i,s=>{const o=this.node,n=s.addedNodes.find(a=>a!==o);s.removedNodes.length&&s.removedNodes.forEach(a=>{this.teardownNode(a)}),n&&(o&&o.isConnected&&this.host.removeChild(o),this.node=n,n!==this.defaultNode&&(this.initCustomNode(n),this.initNode(n)))})}}/**
 * @license
 * Copyright (c) 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Pe extends re{constructor(t){super(t,"tooltip"),this.setTarget(t)}initCustomNode(t){t.target=this.target,this.context!==void 0&&(t.context=this.context),this.manual!==void 0&&(t.manual=this.manual),this.opened!==void 0&&(t.opened=this.opened),this.position!==void 0&&(t._position=this.position),this.shouldShow!==void 0&&(t.shouldShow=this.shouldShow)}setContext(t){this.context=t;const e=this.node;e&&(e.context=t)}setManual(t){this.manual=t;const e=this.node;e&&(e.manual=t)}setOpened(t){this.opened=t;const e=this.node;e&&(e.opened=t)}setPosition(t){this.position=t;const e=this.node;e&&(e._position=t)}setShouldShow(t){this.shouldShow=t;const e=this.node;e&&(e.shouldShow=t)}setTarget(t){this.target=t;const e=this.node;e&&(e.target=t)}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let Oi=!1;window.addEventListener("keydown",()=>{Oi=!0},{capture:!0});window.addEventListener("mousedown",()=>{Oi=!1},{capture:!0});function zi(){return Oi}function qr(r){const t=r.style;if(t.visibility==="hidden"||t.display==="none")return!0;const e=window.getComputedStyle(r);return e.visibility==="hidden"||e.display==="none"}function il(r){if(!ol(r))return-1;const t=r.getAttribute("tabindex")||0;return Number(t)}function sl(r,t){const e=Math.max(r.tabIndex,0),i=Math.max(t.tabIndex,0);return e===0||i===0?i>e:e>i}function rl(r,t){const e=[];for(;r.length>0&&t.length>0;)sl(r[0],t[0])?e.push(t.shift()):e.push(r.shift());return e.concat(r,t)}function di(r){const t=r.length;if(t<2)return r;const e=Math.ceil(t/2),i=di(r.slice(0,e)),s=di(r.slice(e));return rl(i,s)}function Ur(r,t){if(r.nodeType!==Node.ELEMENT_NODE||qr(r))return!1;const e=r,i=il(e);let s=i>0;i>=0&&t.push(e);let o=[];return e.localName==="slot"?o=e.assignedNodes({flatten:!0}):o=(e.shadowRoot||e).children,[...o].forEach(n=>{s=Ur(n,t)||s}),s}function ms(r){return r.offsetParent===null?!0:qr(r)}function ol(r){return r.matches('[tabindex="-1"]')?!1:r.matches("input, select, textarea, button, object")?r.matches(":not([disabled])"):r.matches("a[href], area[href], iframe, [tabindex], [contentEditable]")}function Rt(r){return r.getRootNode().activeElement===r}function nl(r){const t=[];return Ur(r,t)?di(t):t}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Wr=N(r=>class extends r{static get properties(){return{stateTarget:{type:Object,observer:"_stateTargetChanged"}}}static get delegateAttrs(){return[]}static get delegateProps(){return[]}ready(){super.ready(),this._createDelegateAttrsObserver(),this._createDelegatePropsObserver()}_stateTargetChanged(e){e&&(this._ensureAttrsDelegated(),this._ensurePropsDelegated())}_createDelegateAttrsObserver(){this._createMethodObserver(`_delegateAttrsChanged(${this.constructor.delegateAttrs.join(", ")})`)}_createDelegatePropsObserver(){this._createMethodObserver(`_delegatePropsChanged(${this.constructor.delegateProps.join(", ")})`)}_ensureAttrsDelegated(){this.constructor.delegateAttrs.forEach(e=>{this._delegateAttribute(e,this[e])})}_ensurePropsDelegated(){this.constructor.delegateProps.forEach(e=>{this._delegateProperty(e,this[e])})}_delegateAttrsChanged(...e){this.constructor.delegateAttrs.forEach((i,s)=>{this._delegateAttribute(i,e[s])})}_delegatePropsChanged(...e){this.constructor.delegateProps.forEach((i,s)=>{this._delegateProperty(i,e[s])})}_delegateAttribute(e,i){!this.stateTarget||(e==="invalid"&&this._delegateAttribute("aria-invalid",i?"true":!1),typeof i=="boolean"?this.stateTarget.toggleAttribute(e,i):i?this.stateTarget.setAttribute(e,i):this.stateTarget.removeAttribute(e))}_delegateProperty(e,i){!this.stateTarget||(this.stateTarget[e]=i)}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ki=N(r=>class extends r{static get properties(){return{inputElement:{type:Object,readOnly:!0,observer:"_inputElementChanged"},type:{type:String,readOnly:!0},value:{type:String,value:"",observer:"_valueChanged",notify:!0},_hasInputValue:{type:Boolean,value:!1,observer:"_hasInputValueChanged"}}}constructor(){super(),this._boundOnInput=this.__onInput.bind(this),this._boundOnChange=this._onChange.bind(this)}clear(){this.value=""}_addInputListeners(e){e.addEventListener("input",this._boundOnInput),e.addEventListener("change",this._boundOnChange)}_removeInputListeners(e){e.removeEventListener("input",this._boundOnInput),e.removeEventListener("change",this._boundOnChange)}_forwardInputValue(e){!this.inputElement||(e!=null?this.inputElement.value=e:this.inputElement.value="")}_inputElementChanged(e,i){e?this._addInputListeners(e):i&&this._removeInputListeners(i)}_hasInputValueChanged(e,i){(e||i)&&this.dispatchEvent(new CustomEvent("has-input-value-changed"))}__onInput(e){this._setHasInputValue(e),this._onInput(e)}_onInput(e){const i=e.composedPath()[0];this.__userInput=e.isTrusted,this.value=i.value,this.__userInput=!1}_onChange(e){}_toggleHasValue(e){this.toggleAttribute("has-value",e)}_valueChanged(e,i){this._toggleHasValue(this._hasValue),!(e===""&&i===void 0)&&(this.__userInput||this._forwardInputValue(e))}get _hasValue(){return this.value!=null&&this.value!==""}_setHasInputValue(e){const i=e.composedPath()[0];this._hasInputValue=i.value.length>0}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const al=N(r=>class extends Wr(Ot(ki(r))){static get properties(){return{checked:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0}}}static get delegateProps(){return[...super.delegateProps,"checked"]}_onChange(e){const i=e.target;this._toggleChecked(i.checked),Rt(i)||i.focus()}_toggleChecked(e){this.checked=e}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Li=N(r=>class extends r{get _keyboardActive(){return zi()}ready(){this.addEventListener("focusin",e=>{this._shouldSetFocus(e)&&this._setFocused(!0)}),this.addEventListener("focusout",e=>{this._shouldRemoveFocus(e)&&this._setFocused(!1)}),super.ready()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(e){this.toggleAttribute("focused",e),this.toggleAttribute("focus-ring",e&&this._keyboardActive)}_shouldSetFocus(e){return!0}_shouldRemoveFocus(e){return!0}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ri=r=>class extends Ot(r){static get properties(){return{tabindex:{type:Number,reflectToAttribute:!0,observer:"_tabindexChanged"},_lastTabIndex:{type:Number}}}_disabledChanged(e,i){super._disabledChanged(e,i),e?(this.tabindex!==void 0&&(this._lastTabIndex=this.tabindex),this.tabindex=-1):i&&(this.tabindex=this._lastTabIndex)}_tabindexChanged(e){this.disabled&&e!==-1&&(this._lastTabIndex=e,this.tabindex=-1)}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Gr=N(r=>class extends Li(Ri(r)){static get properties(){return{autofocus:{type:Boolean},focusElement:{type:Object,readOnly:!0,observer:"_focusElementChanged"},_lastTabIndex:{value:0}}}constructor(){super(),this._boundOnBlur=this._onBlur.bind(this),this._boundOnFocus=this._onFocus.bind(this)}ready(){super.ready(),this.autofocus&&!this.disabled&&requestAnimationFrame(()=>{this.focus(),this.setAttribute("focus-ring","")})}focus(){!this.focusElement||this.disabled||(this.focusElement.focus(),this._setFocused(!0))}blur(){!this.focusElement||(this.focusElement.blur(),this._setFocused(!1))}click(){this.focusElement&&!this.disabled&&this.focusElement.click()}_focusElementChanged(e,i){e?(e.disabled=this.disabled,this._addFocusListeners(e),this.__forwardTabIndex(this.tabindex)):i&&this._removeFocusListeners(i)}_addFocusListeners(e){e.addEventListener("blur",this._boundOnBlur),e.addEventListener("focus",this._boundOnFocus)}_removeFocusListeners(e){e.removeEventListener("blur",this._boundOnBlur),e.removeEventListener("focus",this._boundOnFocus)}_onFocus(e){e.stopPropagation(),this.dispatchEvent(new Event("focus"))}_onBlur(e){e.stopPropagation(),this.dispatchEvent(new Event("blur"))}_shouldSetFocus(e){return e.target===this.focusElement}_disabledChanged(e,i){super._disabledChanged(e,i),this.focusElement&&(this.focusElement.disabled=e),e&&this.blur()}_tabindexChanged(e){this.__forwardTabIndex(e)}__forwardTabIndex(e){e!==void 0&&this.focusElement&&(this.focusElement.tabIndex=e,e!==-1&&(this.tabindex=void 0)),this.disabled&&e&&(e!==-1&&(this._lastTabIndex=e),this.tabindex=void 0)}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ni extends re{constructor(t,e){super(t,"input",()=>document.createElement("input"),(i,s)=>{i.value&&s.setAttribute("value",i.value),i.type&&s.setAttribute("type",i.type),s.id=this.defaultId,typeof e=="function"&&e(s)},!0)}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ll extends re{constructor(t){super(t,"label",()=>document.createElement("label"),(e,i)=>{this.__updateLabelId(i),this.__updateDefaultLabel(this.label),this.__observeLabel(i)},!0)}get labelId(){return this.node.id}initCustomNode(t){this.__updateLabelId(t);const e=this.__hasLabel(t);this.__toggleHasLabel(e)}teardownNode(t){this.__labelObserver&&this.__labelObserver.disconnect();let e=this.getSlotChild();!e&&t!==this.defaultNode&&(e=this.attachDefaultNode(),this.initNode(e));const i=this.__hasLabel(e);this.__toggleHasLabel(i)}setLabel(t){this.label=t,this.__updateDefaultLabel(t)}__hasLabel(t){return t?t.children.length>0||this.__isNotEmpty(t.textContent):!1}__isNotEmpty(t){return Boolean(t&&t.trim()!=="")}__observeLabel(t){this.__labelObserver=new MutationObserver(e=>{e.forEach(i=>{const s=i.target,o=s===this.node;if(i.type==="attributes")o&&s.id!==this.defaultId&&this.__updateLabelId(s);else if(o||s.parentElement===this.node){const n=this.__hasLabel(this.node);this.__toggleHasLabel(n)}})}),this.__labelObserver.observe(t,{attributes:!0,attributeFilter:["id"],childList:!0,subtree:!0,characterData:!0})}__toggleHasLabel(t){this.host.toggleAttribute("has-label",t),this.dispatchEvent(new CustomEvent("label-changed",{detail:{hasLabel:t,node:this.node}}))}__updateDefaultLabel(t){if(this.defaultNode&&(this.defaultNode.textContent=t,this.defaultNode===this.node)){const e=this.__isNotEmpty(t);this.__toggleHasLabel(e)}}__updateLabelId(t){t.id||(t.id=this.defaultId)}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const jr=N(r=>class extends Y(r){static get properties(){return{label:{type:String,observer:"_labelChanged"}}}get _labelId(){return this._labelController.labelId}get _labelNode(){return this._labelController.node}constructor(){super(),this._labelController=new ll(this)}ready(){super.ready(),this.addController(this._labelController)}_labelChanged(e){this._labelController.setLabel(e)}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Di{constructor(t,e){this.input=t,this.__preventDuplicateLabelClick=this.__preventDuplicateLabelClick.bind(this),e.addEventListener("label-changed",i=>{this.__initLabel(i.detail.node)}),this.__initLabel(e.node)}__initLabel(t){t&&(t.addEventListener("click",this.__preventDuplicateLabelClick),this.input&&t.setAttribute("for",this.input.id))}__preventDuplicateLabelClick(){const t=e=>{e.stopImmediatePropagation(),this.input.removeEventListener("click",t)};this.input.addEventListener("click",t)}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class dl{constructor(t,e,i){this.sourceSlot=t,this.targetFactory=e,this.copyCallback=i,t&&t.addEventListener("slotchange",()=>{this.__copying?this.__copying=!1:this.__checkAndCopyNodesToSlotTarget()})}hostConnected(){this.__sourceSlotObserver=new MutationObserver(()=>this.__checkAndCopyNodesToSlotTarget()),this.__copying||this.__checkAndCopyNodesToSlotTarget()}__checkAndCopyNodesToSlotTarget(){this.__sourceSlotObserver.disconnect();const t=this.targetFactory();if(!t)return;this.__slotTargetClones&&(this.__slotTargetClones.forEach(i=>{i.parentElement===t&&t.removeChild(i)}),delete this.__slotTargetClones);const e=this.sourceSlot.assignedNodes({flatten:!0}).filter(i=>!(i.nodeType===Node.TEXT_NODE&&i.textContent.trim()===""));e.length>0&&(t.innerHTML="",this.__copying=!0,this.__copyNodesToSlotTarget(e,t))}__copyNodesToSlotTarget(t,e){this.__slotTargetClones=this.__slotTargetClones||[],t.forEach(i=>{const s=i.cloneNode(!0);this.__slotTargetClones.push(s),e.appendChild(s),this.__sourceSlotObserver.observe(i,{attributes:!0,childList:!0,subtree:!0,characterData:!0})}),typeof this.copyCallback=="function"&&this.copyCallback(t)}}/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class gs extends jr(al(Gr(Si(V(F(Y(O))))))){static get is(){return"vaadin-checkbox"}static get template(){return z`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }

        :host([disabled]) {
          -webkit-tap-highlight-color: transparent;
        }

        .vaadin-checkbox-container {
          display: grid;
          grid-template-columns: auto 1fr;
          align-items: baseline;
        }

        [part='checkbox'],
        ::slotted(input),
        ::slotted(label) {
          grid-row: 1;
        }

        [part='checkbox'],
        ::slotted(input) {
          grid-column: 1;
        }

        [part='checkbox'] {
          width: var(--vaadin-checkbox-size, 1em);
          height: var(--vaadin-checkbox-size, 1em);
        }

        [part='checkbox']::before {
          display: block;
          content: '\\202F';
          line-height: var(--vaadin-checkbox-size, 1em);
          contain: paint;
        }

        /* visually hidden */
        ::slotted(input) {
          opacity: 0;
          cursor: inherit;
          margin: 0;
          align-self: stretch;
          -webkit-appearance: none;
        }
      </style>
      <div class="vaadin-checkbox-container">
        <div part="checkbox"></div>
        <slot name="input"></slot>
        <slot name="label"></slot>

        <div style="display: none !important">
          <slot id="noop"></slot>
        </div>
      </div>
      <slot name="tooltip"></slot>
    `}static get properties(){return{indeterminate:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0},name:{type:String,value:""}}}static get delegateProps(){return[...super.delegateProps,"indeterminate"]}static get delegateAttrs(){return[...super.delegateAttrs,"name"]}constructor(){super(),this._setType("checkbox"),this.value="on"}ready(){super.ready(),this.addController(new Ni(this,t=>{this._setInputElement(t),this._setFocusElement(t),this.stateTarget=t,this.ariaTarget=t})),this.addController(new Di(this.inputElement,this._labelController)),this.addController(new dl(this.$.noop,()=>this._labelController.node,()=>this.__warnDeprecated())),this._tooltipController=new Pe(this),this.addController(this._tooltipController)}__warnDeprecated(){console.warn(`WARNING: Since Vaadin 22, placing the label as a direct child of a <vaadin-checkbox> is deprecated.
Please use <label slot="label"> wrapper or the label property instead.`)}_shouldSetActive(t){return t.target.localName==="a"?!1:super._shouldSetActive(t)}_toggleChecked(t){this.indeterminate&&(this.indeterminate=!1),super._toggleChecked(t)}}customElements.define(gs.is,gs);A("vaadin-grid",x`
    :host {
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      line-height: var(--lumo-line-height-s);
      color: var(--lumo-body-text-color);
      background-color: var(--lumo-base-color);
      box-sizing: border-box;
      -webkit-text-size-adjust: 100%;
      -webkit-tap-highlight-color: transparent;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      /* For internal use only */
      --_lumo-grid-border-color: var(--lumo-contrast-20pct);
      --_lumo-grid-secondary-border-color: var(--lumo-contrast-10pct);
      --_lumo-grid-border-width: 1px;
      --_lumo-grid-selected-row-color: var(--lumo-primary-color-10pct);
    }

    /* No (outer) border */

    :host(:not([theme~='no-border'])) {
      border: var(--_lumo-grid-border-width) solid var(--_lumo-grid-border-color);
    }

    :host([disabled]) {
      opacity: 0.7;
    }

    /* Cell styles */

    [part~='cell'] {
      min-height: var(--lumo-size-m);
      background-color: var(--lumo-base-color);
    }

    [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      cursor: default;
      padding: var(--lumo-space-xs) var(--lumo-space-m);
    }

    /* Apply row borders by default and introduce the "no-row-borders" variant */
    :host(:not([theme~='no-row-borders'])) [part~='cell']:not([part~='details-cell']) {
      border-top: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    /* Hide first body row top border */
    :host(:not([theme~='no-row-borders'])) [part='row'][first] [part~='cell']:not([part~='details-cell']) {
      border-top: 0;
      min-height: calc(var(--lumo-size-m) - var(--_lumo-grid-border-width));
    }

    /* Focus-ring */

    [part~='row'] {
      position: relative;
    }

    [part~='row']:focus,
    [part~='focused-cell']:focus {
      outline: none;
    }

    :host([navigating]) [part~='row']:focus::before,
    :host([navigating]) [part~='focused-cell']:focus::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      pointer-events: none;
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }

    :host([navigating]) [part~='row']:focus::before {
      transform: translateX(calc(-1 * var(--_grid-horizontal-scroll-position)));
      z-index: 3;
    }

    /* Drag and Drop styles */
    :host([dragover])::after {
      content: '';
      position: absolute;
      z-index: 100;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      pointer-events: none;
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }

    [part~='row'][dragover] {
      z-index: 100 !important;
    }

    [part~='row'][dragover] [part~='cell'] {
      overflow: visible;
    }

    [part~='row'][dragover] [part~='cell']::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      height: calc(var(--_lumo-grid-border-width) + 2px);
      pointer-events: none;
      background: var(--lumo-primary-color-50pct);
    }

    [part~='row'][dragover] [part~='cell'][last-frozen]::after {
      right: -1px;
    }

    :host([theme~='no-row-borders']) [dragover] [part~='cell']::after {
      height: 2px;
    }

    [part~='row'][dragover='below'] [part~='cell']::after {
      top: 100%;
      bottom: auto;
      margin-top: -1px;
    }

    :host([all-rows-visible]) [part~='row'][last][dragover='below'] [part~='cell']::after {
      height: 1px;
    }

    [part~='row'][dragover='above'] [part~='cell']::after {
      top: auto;
      bottom: 100%;
      margin-bottom: -1px;
    }

    [part~='row'][details-opened][dragover='below'] [part~='cell']:not([part~='details-cell'])::after,
    [part~='row'][details-opened][dragover='above'] [part~='details-cell']::after {
      display: none;
    }

    [part~='row'][dragover][dragover='on-top'] [part~='cell']::after {
      height: 100%;
      opacity: 0.5;
    }

    [part~='row'][dragstart] [part~='cell'] {
      border: none !important;
      box-shadow: none !important;
    }

    [part~='row'][dragstart] [part~='cell'][last-column] {
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
    }

    [part~='row'][dragstart] [part~='cell'][first-column] {
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
    }

    #scroller [part~='row'][dragstart]:not([dragstart=''])::after {
      display: block;
      position: absolute;
      left: var(--_grid-drag-start-x);
      top: var(--_grid-drag-start-y);
      z-index: 100;
      content: attr(dragstart);
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      padding: calc(var(--lumo-space-xs) * 0.8);
      color: var(--lumo-error-contrast-color);
      background-color: var(--lumo-error-color);
      border-radius: var(--lumo-border-radius-m);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
      font-weight: 500;
      text-transform: initial;
      letter-spacing: initial;
      min-width: calc(var(--lumo-size-s) * 0.7);
      text-align: center;
    }

    /* Headers and footers */

    [part~='header-cell'] ::slotted(vaadin-grid-cell-content),
    [part~='footer-cell'] ::slotted(vaadin-grid-cell-content),
    [part~='reorder-ghost'] {
      font-size: var(--lumo-font-size-s);
      font-weight: 500;
    }

    [part~='footer-cell'] ::slotted(vaadin-grid-cell-content) {
      font-weight: 400;
    }

    [part='row']:only-child [part~='header-cell'] {
      min-height: var(--lumo-size-xl);
    }

    /* Header borders */

    /* Hide first header row top border */
    :host(:not([theme~='no-row-borders'])) [part='row']:first-child [part~='header-cell'] {
      border-top: 0;
    }

    [part='row']:last-child [part~='header-cell'] {
      border-bottom: var(--_lumo-grid-border-width) solid transparent;
    }

    :host(:not([theme~='no-row-borders'])) [part='row']:last-child [part~='header-cell'] {
      border-bottom-color: var(--_lumo-grid-secondary-border-color);
    }

    /* Overflow uses a stronger border color */
    :host([overflow~='top']) [part='row']:last-child [part~='header-cell'] {
      border-bottom-color: var(--_lumo-grid-border-color);
    }

    /* Footer borders */

    [part='row']:first-child [part~='footer-cell'] {
      border-top: var(--_lumo-grid-border-width) solid transparent;
    }

    :host(:not([theme~='no-row-borders'])) [part='row']:first-child [part~='footer-cell'] {
      border-top-color: var(--_lumo-grid-secondary-border-color);
    }

    /* Overflow uses a stronger border color */
    :host([overflow~='bottom']) [part='row']:first-child [part~='footer-cell'] {
      border-top-color: var(--_lumo-grid-border-color);
    }

    /* Column reordering */

    :host([reordering]) [part~='cell'] {
      background: linear-gradient(var(--lumo-shade-20pct), var(--lumo-shade-20pct)) var(--lumo-base-color);
    }

    :host([reordering]) [part~='cell'][reorder-status='allowed'] {
      background: var(--lumo-base-color);
    }

    :host([reordering]) [part~='cell'][reorder-status='dragging'] {
      background: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct)) var(--lumo-base-color);
    }

    [part~='reorder-ghost'] {
      opacity: 0.85;
      box-shadow: var(--lumo-box-shadow-s);
      /* TODO Use the same styles as for the cell element (reorder-ghost copies styles from the cell element) */
      padding: var(--lumo-space-s) var(--lumo-space-m) !important;
    }

    /* Column resizing */

    [part='resize-handle'] {
      width: 3px;
      background-color: var(--lumo-primary-color-50pct);
      opacity: 0;
      transition: opacity 0.2s;
    }

    :host(:not([reordering])) *:not([column-resizing]) [part~='cell']:hover [part='resize-handle'],
    [part='resize-handle']:active {
      opacity: 1;
      transition-delay: 0.15s;
    }

    /* Column borders */

    :host([theme~='column-borders']) [part~='cell']:not([last-column]):not([part~='details-cell']) {
      border-right: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    /* Frozen columns */

    [last-frozen] {
      border-right: var(--_lumo-grid-border-width) solid transparent;
      overflow: hidden;
    }

    :host([overflow~='start']) [part~='cell'][last-frozen]:not([part~='details-cell']) {
      border-right-color: var(--_lumo-grid-border-color);
    }

    [first-frozen-to-end] {
      border-left: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([overflow~='end']) [part~='cell'][first-frozen-to-end]:not([part~='details-cell']) {
      border-left-color: var(--_lumo-grid-border-color);
    }

    /* Row stripes */

    :host([theme~='row-stripes']) [part~='row']:not([odd]) [part~='body-cell'],
    :host([theme~='row-stripes']) [part~='row']:not([odd]) [part~='details-cell'] {
      background-image: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
      background-repeat: repeat-x;
    }

    /* Selected row */

    /* Raise the selected rows above unselected rows (so that box-shadow can cover unselected rows) */
    :host(:not([reordering])) [part~='row'][selected] {
      z-index: 1;
    }

    :host(:not([reordering])) [part~='row'][selected] [part~='body-cell']:not([part~='details-cell']) {
      background-image: linear-gradient(var(--_lumo-grid-selected-row-color), var(--_lumo-grid-selected-row-color));
      background-repeat: repeat;
    }

    /* Cover the border of an unselected row */
    :host(:not([theme~='no-row-borders'])) [part~='row'][selected] [part~='cell']:not([part~='details-cell']) {
      box-shadow: 0 var(--_lumo-grid-border-width) 0 0 var(--_lumo-grid-selected-row-color);
    }

    /* Compact */

    :host([theme~='compact']) [part='row']:only-child [part~='header-cell'] {
      min-height: var(--lumo-size-m);
    }

    :host([theme~='compact']) [part~='cell'] {
      min-height: var(--lumo-size-s);
    }

    :host([theme~='compact']) [part='row'][first] [part~='cell']:not([part~='details-cell']) {
      min-height: calc(var(--lumo-size-s) - var(--_lumo-grid-border-width));
    }

    :host([theme~='compact']) [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      padding: var(--lumo-space-xs) var(--lumo-space-s);
    }

    /* Wrap cell contents */

    :host([theme~='wrap-cell-content']) [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      white-space: normal;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part~='row'][dragstart] [part~='cell'][last-column] {
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
    }

    :host([dir='rtl']) [part~='row'][dragstart] [part~='cell'][first-column] {
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
    }

    :host([dir='rtl'][theme~='column-borders']) [part~='cell']:not([last-column]):not([part~='details-cell']) {
      border-right: none;
      border-left: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    :host([dir='rtl']) [last-frozen] {
      border-right: none;
      border-left: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([dir='rtl']) [first-frozen-to-end] {
      border-left: none;
      border-right: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([dir='rtl'][overflow~='start']) [part~='cell'][last-frozen]:not([part~='details-cell']) {
      border-left-color: var(--_lumo-grid-border-color);
    }

    :host([dir='rtl'][overflow~='end']) [part~='cell'][first-frozen-to-end]:not([part~='details-cell']) {
      border-right-color: var(--_lumo-grid-border-color);
    }
  `,{moduleId:"lumo-grid"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Nt(r){if(window.Vaadin&&window.Vaadin.templateRendererCallback){window.Vaadin.templateRendererCallback(r);return}r.querySelector("template")&&console.warn(`WARNING: <template> inside <${r.localName}> is no longer supported. Import @vaadin/polymer-legacy-adapter/template-renderer.js to enable compatibility.`)}/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Kr=r=>class extends r{static get properties(){return{resizable:{type:Boolean,value(){if(this.localName==="vaadin-grid-column-group")return;const e=this.parentNode;return e&&e.localName==="vaadin-grid-column-group"&&e.resizable||!1}},frozen:{type:Boolean,value:!1},frozenToEnd:{type:Boolean,value:!1},hidden:{type:Boolean,value:!1},header:{type:String},textAlign:{type:String},_lastFrozen:{type:Boolean,value:!1},_firstFrozenToEnd:{type:Boolean,value:!1},_order:Number,_reorderStatus:Boolean,_emptyCells:Array,_headerCell:Object,_footerCell:Object,_grid:Object,__initialized:{type:Boolean,value:!0},headerRenderer:Function,_headerRenderer:{type:Function,computed:"_computeHeaderRenderer(headerRenderer, header, __initialized)"},footerRenderer:Function,_footerRenderer:{type:Function,computed:"_computeFooterRenderer(footerRenderer, __initialized)"},__gridColumnElement:{type:Boolean,value:!0}}}static get observers(){return["_widthChanged(width, _headerCell, _footerCell, _cells.*)","_frozenChanged(frozen, _headerCell, _footerCell, _cells.*)","_frozenToEndChanged(frozenToEnd, _headerCell, _footerCell, _cells.*)","_flexGrowChanged(flexGrow, _headerCell, _footerCell, _cells.*)","_textAlignChanged(textAlign, _cells.*, _headerCell, _footerCell)","_orderChanged(_order, _headerCell, _footerCell, _cells.*)","_lastFrozenChanged(_lastFrozen)","_firstFrozenToEndChanged(_firstFrozenToEnd)","_onRendererOrBindingChanged(_renderer, _cells, _cells.*, path)","_onHeaderRendererOrBindingChanged(_headerRenderer, _headerCell, path, header)","_onFooterRendererOrBindingChanged(_footerRenderer, _footerCell)","_resizableChanged(resizable, _headerCell)","_reorderStatusChanged(_reorderStatus, _headerCell, _footerCell, _cells.*)","_hiddenChanged(hidden, _headerCell, _footerCell, _cells.*)"]}connectedCallback(){super.connectedCallback(),requestAnimationFrame(()=>{!this._grid||this._allCells.forEach(e=>{e._content.parentNode||this._grid.appendChild(e._content)})})}disconnectedCallback(){super.disconnectedCallback(),requestAnimationFrame(()=>{this._grid||this._allCells.forEach(e=>{e._content.parentNode&&e._content.parentNode.removeChild(e._content)})}),this._gridValue=void 0}ready(){super.ready(),Nt(this)}_findHostGrid(){let e=this;for(;e&&!/^vaadin.*grid(-pro)?$/.test(e.localName);)e=e.assignedSlot?e.assignedSlot.parentNode:e.parentNode;return e||void 0}get _grid(){return this._gridValue||(this._gridValue=this._findHostGrid()),this._gridValue}get _allCells(){return[].concat(this._cells||[]).concat(this._emptyCells||[]).concat(this._headerCell).concat(this._footerCell).filter(e=>e)}_renderHeaderAndFooter(){this._renderHeaderCellContent(this._headerRenderer,this._headerCell),this._renderFooterCellContent(this._footerRenderer,this._footerCell)}_flexGrowChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("flexGrow"),this._allCells.forEach(i=>{i.style.flexGrow=e})}_orderChanged(e){this._allCells.forEach(i=>{i.style.order=e})}_widthChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("width"),this._allCells.forEach(i=>{i.style.width=e})}_frozenChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("frozen",e),this._allCells.forEach(i=>i.toggleAttribute("frozen",e)),this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}_frozenToEndChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("frozenToEnd",e),this._allCells.forEach(i=>{this._grid&&i.parentElement===this._grid.$.sizer||i.toggleAttribute("frozen-to-end",e)}),this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}_lastFrozenChanged(e){this._allCells.forEach(i=>i.toggleAttribute("last-frozen",e)),this.parentElement&&this.parentElement._columnPropChanged&&(this.parentElement._lastFrozen=e)}_firstFrozenToEndChanged(e){this._allCells.forEach(i=>{this._grid&&i.parentElement===this._grid.$.sizer||i.toggleAttribute("first-frozen-to-end",e)}),this.parentElement&&this.parentElement._columnPropChanged&&(this.parentElement._firstFrozenToEnd=e)}_generateHeader(e){return e.substr(e.lastIndexOf(".")+1).replace(/([A-Z])/g,"-$1").toLowerCase().replace(/-/g," ").replace(/^./,i=>i.toUpperCase())}_reorderStatusChanged(e){this._allCells.forEach(i=>i.setAttribute("reorder-status",e))}_resizableChanged(e,i){e===void 0||i===void 0||i&&[i].concat(this._emptyCells).forEach(s=>{if(s){const o=s.querySelector('[part~="resize-handle"]');if(o&&s.removeChild(o),e){const n=document.createElement("div");n.setAttribute("part","resize-handle"),s.appendChild(n)}}})}_textAlignChanged(e){if(e===void 0)return;if(["start","end","center"].indexOf(e)===-1){console.warn('textAlign can only be set as "start", "end" or "center"');return}let i;getComputedStyle(this._grid).direction==="ltr"?e==="start"?i="left":e==="end"&&(i="right"):e==="start"?i="right":e==="end"&&(i="left"),this._allCells.forEach(s=>{s._content.style.textAlign=e,getComputedStyle(s._content).textAlign!==e&&(s._content.style.textAlign=i)})}_hiddenChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("hidden",e),!!e!=!!this._previousHidden&&this._grid&&(e===!0&&this._allCells.forEach(i=>{i._content.parentNode&&i._content.parentNode.removeChild(i._content)}),this._grid._debouncerHiddenChanged=R.debounce(this._grid._debouncerHiddenChanged,Ie,()=>{this._grid&&this._grid._renderColumnTree&&this._grid._renderColumnTree(this._grid._columnTree)}),this._grid._debounceUpdateFrozenColumn&&this._grid._debounceUpdateFrozenColumn(),this._grid._resetKeyboardNavigation&&this._grid._resetKeyboardNavigation()),this._previousHidden=e}_runRenderer(e,i,s){const o=[i._content,this];s&&s.item&&o.push(s),e.apply(this,o)}__renderCellsContent(e,i){this.hidden||!this._grid||i.forEach(s=>{if(!s.parentElement)return;const o=this._grid.__getRowModel(s.parentElement);!e||(s._renderer!==e&&this._clearCellContent(s),s._renderer=e,(o.item||e===this._headerRenderer||e===this._footerRenderer)&&this._runRenderer(e,s,o))})}_clearCellContent(e){e._content.innerHTML="",delete e._content._$litPart$}_renderHeaderCellContent(e,i){!i||!e||(this.__renderCellsContent(e,[i]),this._grid&&i.parentElement&&this._grid.__debounceUpdateHeaderFooterRowVisibility(i.parentElement))}_onHeaderRendererOrBindingChanged(e,i,...s){this._renderHeaderCellContent(e,i)}_renderBodyCellsContent(e,i){!i||!e||this.__renderCellsContent(e,i)}_onRendererOrBindingChanged(e,i,...s){this._renderBodyCellsContent(e,i)}_renderFooterCellContent(e,i){!i||!e||(this.__renderCellsContent(e,[i]),this._grid&&i.parentElement&&this._grid.__debounceUpdateHeaderFooterRowVisibility(i.parentElement))}_onFooterRendererOrBindingChanged(e,i){this._renderFooterCellContent(e,i)}__setTextContent(e,i){e.textContent!==i&&(e.textContent=i)}__textHeaderRenderer(){this.__setTextContent(this._headerCell._content,this.header)}_defaultHeaderRenderer(){!this.path||this.__setTextContent(this._headerCell._content,this._generateHeader(this.path))}_defaultRenderer(e,i,{item:s}){!this.path||this.__setTextContent(e,this.get(this.path,s))}_defaultFooterRenderer(){}_computeHeaderRenderer(e,i){return e||(i!=null?this.__textHeaderRenderer:this._defaultHeaderRenderer)}_computeRenderer(e){return e||this._defaultRenderer}_computeFooterRenderer(e){return e||this._defaultFooterRenderer}};class ci extends Kr(he(O)){static get is(){return"vaadin-grid-column"}static get properties(){return{width:{type:String,value:"100px"},flexGrow:{type:Number,value:1},renderer:Function,_renderer:{type:Function,computed:"_computeRenderer(renderer, __initialized)"},path:{type:String},autoWidth:{type:Boolean,value:!1},_focusButtonMode:{type:Boolean,value:!1},_cells:Array}}}customElements.define(ci.is,ci);/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */A("vaadin-grid",x`
    @keyframes vaadin-grid-appear {
      to {
        opacity: 1;
      }
    }

    :host {
      display: block;
      animation: 1ms vaadin-grid-appear;
      height: 400px;
      flex: 1 1 auto;
      align-self: stretch;
      position: relative;
    }

    :host([hidden]) {
      display: none !important;
    }

    :host([disabled]) {
      pointer-events: none;
    }

    #scroller {
      display: block;
      transform: translateY(0);
      width: auto;
      height: auto;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }

    :host([all-rows-visible]) {
      height: auto;
      align-self: flex-start;
      flex-grow: 0;
      width: 100%;
    }

    :host([all-rows-visible]) #scroller {
      width: 100%;
      height: 100%;
      position: relative;
    }

    :host([all-rows-visible]) #items {
      min-height: 1px;
    }

    #table {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      overflow: auto;
      position: relative;
      outline: none;
      /* Workaround for a Desktop Safari bug: new stacking context here prevents the scrollbar from getting hidden */
      z-index: 0;
    }

    #header,
    #footer {
      display: block;
      position: -webkit-sticky;
      position: sticky;
      left: 0;
      overflow: visible;
      width: 100%;
      z-index: 1;
    }

    #header {
      top: 0;
    }

    th {
      text-align: inherit;
    }

    /* Safari doesn't work with "inherit" */
    [safari] th {
      text-align: initial;
    }

    #footer {
      bottom: 0;
    }

    #items {
      flex-grow: 1;
      flex-shrink: 0;
      display: block;
      position: -webkit-sticky;
      position: sticky;
      width: 100%;
      left: 0;
      overflow: visible;
    }

    [part~='row'] {
      display: flex;
      width: 100%;
      box-sizing: border-box;
      margin: 0;
    }

    [part~='row'][loading] [part~='body-cell'] ::slotted(vaadin-grid-cell-content) {
      opacity: 0;
    }

    #items [part~='row'] {
      position: absolute;
    }

    #items [part~='row']:empty {
      height: 100%;
    }

    [part~='cell']:not([part~='details-cell']) {
      flex-shrink: 0;
      flex-grow: 1;
      box-sizing: border-box;
      display: flex;
      width: 100%;
      position: relative;
      align-items: center;
      padding: 0;
      white-space: nowrap;
    }

    [part~='cell'] > [tabindex] {
      display: flex;
      align-items: inherit;
      outline: none;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }

    [part~='details-cell'] {
      position: absolute;
      bottom: 0;
      width: 100%;
      box-sizing: border-box;
      padding: 0;
    }

    [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      display: block;
      width: 100%;
      box-sizing: border-box;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    [hidden] {
      display: none !important;
    }

    [frozen],
    [frozen-to-end] {
      z-index: 2;
      will-change: transform;
    }

    [no-scrollbars][safari] #table,
    [no-scrollbars][firefox] #table {
      overflow: hidden;
    }

    /* Reordering styles */
    :host([reordering]) [part~='cell'] ::slotted(vaadin-grid-cell-content),
    :host([reordering]) [part~='resize-handle'],
    #scroller[no-content-pointer-events] [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      pointer-events: none;
    }

    [part~='reorder-ghost'] {
      visibility: hidden;
      position: fixed;
      pointer-events: none;
      opacity: 0.5;

      /* Prevent overflowing the grid in Firefox */
      top: 0;
      left: 0;
    }

    :host([reordering]) {
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }

    /* Resizing styles */
    [part~='resize-handle'] {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      cursor: col-resize;
      z-index: 1;
    }

    [part~='resize-handle']::before {
      position: absolute;
      content: '';
      height: 100%;
      width: 35px;
      transform: translateX(-50%);
    }

    [last-column] [part~='resize-handle']::before,
    [last-frozen] [part~='resize-handle']::before {
      width: 18px;
      transform: none;
      right: 0;
    }

    [frozen-to-end] [part~='resize-handle'] {
      left: 0;
      right: auto;
    }

    [frozen-to-end] [part~='resize-handle']::before {
      left: 0;
      right: auto;
    }

    [first-frozen-to-end] [part~='resize-handle']::before {
      width: 18px;
      transform: none;
    }

    [first-frozen-to-end] {
      margin-inline-start: auto;
    }

    /* Hide resize handle if scrolled to end */
    :host(:not([overflow~='end'])) [first-frozen-to-end] [part~='resize-handle'] {
      display: none;
    }

    #scroller[column-resizing] {
      -ms-user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }

    /* Sizer styles */
    #sizer {
      display: flex;
      position: absolute;
      visibility: hidden;
    }

    #sizer [part~='details-cell'] {
      display: none !important;
    }

    #sizer [part~='cell'][hidden] {
      display: none !important;
    }

    #sizer [part~='cell'] {
      display: block;
      flex-shrink: 0;
      line-height: 0;
      height: 0 !important;
      min-height: 0 !important;
      max-height: 0 !important;
      padding: 0 !important;
      border: none !important;
    }

    #sizer [part~='cell']::before {
      content: '-';
    }

    #sizer [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      display: none !important;
    }

    /* RTL specific styles */

    :host([dir='rtl']) #items,
    :host([dir='rtl']) #header,
    :host([dir='rtl']) #footer {
      left: auto;
    }

    :host([dir='rtl']) [part~='reorder-ghost'] {
      left: auto;
      right: 0;
    }

    :host([dir='rtl']) [part~='resize-handle'] {
      left: 0;
      right: auto;
    }

    :host([dir='rtl']) [part~='resize-handle']::before {
      transform: translateX(50%);
    }

    :host([dir='rtl']) [last-column] [part~='resize-handle']::before,
    :host([dir='rtl']) [last-frozen] [part~='resize-handle']::before {
      left: 0;
      right: auto;
    }

    :host([dir='rtl']) [frozen-to-end] [part~='resize-handle'] {
      right: 0;
      left: auto;
    }

    :host([dir='rtl']) [frozen-to-end] [part~='resize-handle']::before {
      right: 0;
      left: auto;
    }
  `,{moduleId:"vaadin-grid-styles"});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let yt=!1,Yr=[],Qr=[];function Xr(){yt=!0,requestAnimationFrame(function(){yt=!1,cl(Yr),setTimeout(function(){hl(Qr)})})}function cl(r){for(;r.length;)Zr(r.shift())}function hl(r){for(let t=0,e=r.length;t<e;t++)Zr(r.shift())}function Zr(r){const t=r[0],e=r[1],i=r[2];try{e.apply(t,i)}catch(s){setTimeout(()=>{throw s})}}function Jr(r,t,e){yt||Xr(),Yr.push([r,t,e])}function eo(r,t,e){yt||Xr(),Qr.push([r,t,e])}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Dt=r=>r.test(navigator.userAgent),hi=r=>r.test(navigator.platform),ul=r=>r.test(navigator.vendor),vs=Dt(/Android/),pl=Dt(/Chrome/)&&ul(/Google Inc/),_l=Dt(/Firefox/),fl=hi(/^iPad/)||hi(/^Mac/)&&navigator.maxTouchPoints>1,ml=hi(/^iPhone/),Xe=ml||fl,to=Dt(/^((?!chrome|android).)*safari/i),Ze=(()=>{try{return document.createEvent("TouchEvent"),!0}catch{return!1}})();/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */const bs=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/),gl=bs&&bs[1]>=8,ys=3,vl={_ratio:.5,_scrollerPaddingTop:0,_scrollPosition:0,_physicalSize:0,_physicalAverage:0,_physicalAverageCount:0,_physicalTop:0,_virtualCount:0,_estScrollHeight:0,_scrollHeight:0,_viewportHeight:0,_viewportWidth:0,_physicalItems:null,_physicalSizes:null,_firstVisibleIndexVal:null,_lastVisibleIndexVal:null,_maxPages:2,_templateCost:0,get _physicalBottom(){return this._physicalTop+this._physicalSize},get _scrollBottom(){return this._scrollPosition+this._viewportHeight},get _virtualEnd(){return this._virtualStart+this._physicalCount-1},get _hiddenContentSize(){return this._physicalSize-this._viewportHeight},get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},get _maxVirtualStart(){const r=this._virtualCount;return Math.max(0,r-this._physicalCount)},get _virtualStart(){return this._virtualStartVal||0},set _virtualStart(r){r=this._clamp(r,0,this._maxVirtualStart),this._virtualStartVal=r},get _physicalStart(){return this._physicalStartVal||0},set _physicalStart(r){r%=this._physicalCount,r<0&&(r=this._physicalCount+r),this._physicalStartVal=r},get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},get _physicalCount(){return this._physicalCountVal||0},set _physicalCount(r){this._physicalCountVal=r},get _optPhysicalSize(){return this._viewportHeight===0?1/0:this._viewportHeight*this._maxPages},get _isVisible(){return Boolean(this.offsetWidth||this.offsetHeight)},get firstVisibleIndex(){let r=this._firstVisibleIndexVal;if(r==null){let t=this._physicalTop+this._scrollOffset;r=this._iterateItems((e,i)=>{if(t+=this._getPhysicalSizeIncrement(e),t>this._scrollPosition)return i})||0,this._firstVisibleIndexVal=r}return r},get lastVisibleIndex(){let r=this._lastVisibleIndexVal;if(r==null){let t=this._physicalTop+this._scrollOffset;this._iterateItems((e,i)=>{t<this._scrollBottom&&(r=i),t+=this._getPhysicalSizeIncrement(e)}),this._lastVisibleIndexVal=r}return r},get _scrollOffset(){return this._scrollerPaddingTop+this.scrollOffset},_scrollHandler(){const r=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop));let t=r-this._scrollPosition;const e=t>=0;if(this._scrollPosition=r,this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,Math.abs(t)>this._physicalSize&&this._physicalSize>0){t-=this._scrollOffset;const i=Math.round(t/this._physicalAverage);this._virtualStart+=i,this._physicalStart+=i,this._physicalTop=Math.min(Math.floor(this._virtualStart)*this._physicalAverage,this._scrollPosition),this._update()}else if(this._physicalCount>0){const i=this._getReusables(e);e?(this._physicalTop=i.physicalTop,this._virtualStart+=i.indexes.length,this._physicalStart+=i.indexes.length):(this._virtualStart-=i.indexes.length,this._physicalStart-=i.indexes.length),this._update(i.indexes,e?null:i.indexes),this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),de)}},_getReusables(r){let t,e,i;const s=[],o=this._hiddenContentSize*this._ratio,n=this._virtualStart,a=this._virtualEnd,l=this._physicalCount;let d=this._physicalTop+this._scrollOffset;const c=this._physicalBottom+this._scrollOffset,h=this._scrollPosition,m=this._scrollBottom;for(r?(t=this._physicalStart,e=h-d):(t=this._physicalEnd,e=c-m);i=this._getPhysicalSizeIncrement(t),e-=i,!(s.length>=l||e<=o);)if(r){if(a+s.length+1>=this._virtualCount||d+i>=h-this._scrollOffset)break;s.push(t),d+=i,t=(t+1)%l}else{if(n-s.length<=0||d+this._physicalSize-i<=m)break;s.push(t),d-=i,t=t===0?l-1:t-1}return{indexes:s,physicalTop:d-this._scrollOffset}},_update(r,t){if(!(r&&r.length===0||this._physicalCount===0)){if(this._assignModels(r),this._updateMetrics(r),t)for(;t.length;){const e=t.pop();this._physicalTop-=this._getPhysicalSizeIncrement(e)}this._positionItems(),this._updateScrollerSize()}},_isClientFull(){return this._scrollBottom!==0&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},_increasePoolIfNeeded(r){const e=this._clamp(this._physicalCount+r,ys,this._virtualCount-this._virtualStart)-this._physicalCount;let i=Math.round(this._physicalCount*.5);if(!(e<0)){if(e>0){const s=window.performance.now();[].push.apply(this._physicalItems,this._createPool(e));for(let o=0;o<e;o++)this._physicalSizes.push(0);this._physicalCount+=e,this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd&&(this._physicalStart+=e),this._update(),this._templateCost=(window.performance.now()-s)/e,i=Math.round(this._physicalCount*.5)}this._virtualEnd>=this._virtualCount-1||i===0||(this._isClientFull()?this._physicalSize<this._optPhysicalSize&&this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,i)),kr):this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,i),de))}},_render(){if(!(!this.isAttached||!this._isVisible))if(this._physicalCount!==0){const r=this._getReusables(!0);this._physicalTop=r.physicalTop,this._virtualStart+=r.indexes.length,this._physicalStart+=r.indexes.length,this._update(r.indexes),this._update(),this._increasePoolIfNeeded(0)}else this._virtualCount>0&&(this.updateViewportBoundaries(),this._increasePoolIfNeeded(ys))},_itemsChanged(r){r.path==="items"&&(this._virtualStart=0,this._physicalTop=0,this._virtualCount=this.items?this.items.length:0,this._physicalIndexForKey={},this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._physicalCount=this._physicalCount||0,this._physicalItems=this._physicalItems||[],this._physicalSizes=this._physicalSizes||[],this._physicalStart=0,this._scrollTop>this._scrollOffset&&this._resetScrollPosition(0),this._debounce("_render",this._render,Ie))},_iterateItems(r,t){let e,i,s,o;if(arguments.length===2&&t){for(o=0;o<t.length;o++)if(e=t[o],i=this._computeVidx(e),(s=r.call(this,e,i))!=null)return s}else{for(e=this._physicalStart,i=this._virtualStart;e<this._physicalCount;e++,i++)if((s=r.call(this,e,i))!=null)return s;for(e=0;e<this._physicalStart;e++,i++)if((s=r.call(this,e,i))!=null)return s}},_computeVidx(r){return r>=this._physicalStart?this._virtualStart+(r-this._physicalStart):this._virtualStart+(this._physicalCount-this._physicalStart)+r},_updateMetrics(r){Ue();let t=0,e=0;const i=this._physicalAverageCount,s=this._physicalAverage;this._iterateItems((o,n)=>{e+=this._physicalSizes[o],this._physicalSizes[o]=this._physicalItems[o].offsetHeight,t+=this._physicalSizes[o],this._physicalAverageCount+=this._physicalSizes[o]?1:0},r),this._physicalSize=this._physicalSize+t-e,this._physicalAverageCount!==i&&(this._physicalAverage=Math.round((s*i+t)/this._physicalAverageCount))},_positionItems(){this._adjustScrollPosition();let r=this._physicalTop;this._iterateItems(t=>{this.translate3d(0,`${r}px`,0,this._physicalItems[t]),r+=this._physicalSizes[t]})},_getPhysicalSizeIncrement(r){return this._physicalSizes[r]},_adjustScrollPosition(){const r=this._virtualStart===0?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);if(r!==0){this._physicalTop-=r;const t=this._scrollPosition;!gl&&t>0&&this._resetScrollPosition(t-r)}},_resetScrollPosition(r){this.scrollTarget&&r>=0&&(this._scrollTop=r,this._scrollPosition=this._scrollTop)},_updateScrollerSize(r){this._estScrollHeight=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage,r=r||this._scrollHeight===0,r=r||this._scrollPosition>=this._estScrollHeight-this._physicalSize,(r||Math.abs(this._estScrollHeight-this._scrollHeight)>=this._viewportHeight)&&(this.$.items.style.height=`${this._estScrollHeight}px`,this._scrollHeight=this._estScrollHeight)},scrollToIndex(r){if(typeof r!="number"||r<0||r>this.items.length-1||(Ue(),this._physicalCount===0))return;r=this._clamp(r,0,this._virtualCount-1),(!this._isIndexRendered(r)||r>=this._maxVirtualStart)&&(this._virtualStart=r-1),this._assignModels(),this._updateMetrics(),this._physicalTop=this._virtualStart*this._physicalAverage;let t=this._physicalStart,e=this._virtualStart,i=0;const s=this._hiddenContentSize;for(;e<r&&i<=s;)i+=this._getPhysicalSizeIncrement(t),t=(t+1)%this._physicalCount,e+=1;this._updateScrollerSize(!0),this._positionItems(),this._resetScrollPosition(this._physicalTop+this._scrollOffset+i),this._increasePoolIfNeeded(0),this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null},_resetAverage(){this._physicalAverage=0,this._physicalAverageCount=0},_resizeHandler(){this._debounce("_render",()=>{this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._isVisible?(this.updateViewportBoundaries(),this.toggleScrollListener(!0),this._resetAverage(),this._render()):this.toggleScrollListener(!1)},Ie)},_isIndexRendered(r){return r>=this._virtualStart&&r<=this._virtualEnd},_getPhysicalIndex(r){return(this._physicalStart+(r-this._virtualStart))%this._physicalCount},_clamp(r,t,e){return Math.min(e,Math.max(t,r))},_debounce(r,t,e){this._debouncers=this._debouncers||{},this._debouncers[r]=R.debounce(this._debouncers[r],e,t.bind(this)),$r(this._debouncers[r])}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const bl=1e5,jt=1e3;class io{constructor({createElements:t,updateElement:e,scrollTarget:i,scrollContainer:s,elementsContainer:o,reorderElements:n}){this.isAttached=!0,this._vidxOffset=0,this.createElements=t,this.updateElement=e,this.scrollTarget=i,this.scrollContainer=s,this.elementsContainer=o||s,this.reorderElements=n,this._maxPages=1.3,this.__placeholderHeight=200,this.__elementHeightQueue=Array(10),this.timeouts={SCROLL_REORDER:500,IGNORE_WHEEL:500,FIX_INVALID_ITEM_POSITIONING:100},this.__resizeObserver=new ResizeObserver(()=>this._resizeHandler()),getComputedStyle(this.scrollTarget).overflow==="visible"&&(this.scrollTarget.style.overflow="auto"),getComputedStyle(this.scrollContainer).position==="static"&&(this.scrollContainer.style.position="relative"),this.__resizeObserver.observe(this.scrollTarget),this.scrollTarget.addEventListener("scroll",()=>this._scrollHandler()),this._scrollLineHeight=this._getScrollLineHeight(),this.scrollTarget.addEventListener("wheel",a=>this.__onWheel(a)),this.reorderElements&&(this.scrollTarget.addEventListener("mousedown",()=>{this.__mouseDown=!0}),this.scrollTarget.addEventListener("mouseup",()=>{this.__mouseDown=!1,this.__pendingReorder&&this.__reorderElements()}))}get scrollOffset(){return 0}get adjustedFirstVisibleIndex(){return this.firstVisibleIndex+this._vidxOffset}get adjustedLastVisibleIndex(){return this.lastVisibleIndex+this._vidxOffset}scrollToIndex(t){if(typeof t!="number"||isNaN(t)||this.size===0||!this.scrollTarget.offsetHeight)return;t=this._clamp(t,0,this.size-1);const e=this.__getVisibleElements().length;let i=Math.floor(t/this.size*this._virtualCount);this._virtualCount-i<e?(i=this._virtualCount-(this.size-t),this._vidxOffset=this.size-this._virtualCount):i<e?t<jt?(i=t,this._vidxOffset=0):(i=jt,this._vidxOffset=t-i):this._vidxOffset=t-i,this.__skipNextVirtualIndexAdjust=!0,super.scrollToIndex(i),this.adjustedFirstVisibleIndex!==t&&this._scrollTop<this._maxScrollTop&&!this.grid&&(this._scrollTop-=this.__getIndexScrollOffset(t)||0),this._scrollHandler()}flush(){this.scrollTarget.offsetHeight!==0&&(this._resizeHandler(),Ue(),this._scrollHandler(),this.__fixInvalidItemPositioningDebouncer&&this.__fixInvalidItemPositioningDebouncer.flush(),this.__scrollReorderDebouncer&&this.__scrollReorderDebouncer.flush(),this.__debouncerWheelAnimationFrame&&this.__debouncerWheelAnimationFrame.flush())}update(t=0,e=this.size-1){this.__getVisibleElements().forEach(i=>{i.__virtualIndex>=t&&i.__virtualIndex<=e&&this.__updateElement(i,i.__virtualIndex,!0)})}__updateElement(t,e,i){t.style.paddingTop&&(t.style.paddingTop=""),!this.__preventElementUpdates&&(t.__lastUpdatedIndex!==e||i)&&(this.updateElement(t,e),t.__lastUpdatedIndex=e);const s=t.offsetHeight;if(s===0)t.style.paddingTop=`${this.__placeholderHeight}px`,requestAnimationFrame(()=>this._resizeHandler());else{this.__elementHeightQueue.push(s),this.__elementHeightQueue.shift();const o=this.__elementHeightQueue.filter(n=>n!==void 0);this.__placeholderHeight=Math.round(o.reduce((n,a)=>n+a,0)/o.length)}}__getIndexScrollOffset(t){const e=this.__getVisibleElements().find(i=>i.__virtualIndex===t);return e?this.scrollTarget.getBoundingClientRect().top-e.getBoundingClientRect().top:void 0}get size(){return this.__size}set size(t){if(t===this.size)return;this.__fixInvalidItemPositioningDebouncer&&this.__fixInvalidItemPositioningDebouncer.cancel(),this._debouncers&&this._debouncers._increasePoolIfNeeded&&this._debouncers._increasePoolIfNeeded.cancel(),this.__preventElementUpdates=!0;let e,i;if(t>0&&(e=this.adjustedFirstVisibleIndex,i=this.__getIndexScrollOffset(e)),this.__size=t,this._itemsChanged({path:"items"}),Ue(),t>0){e=Math.min(e,t-1),this.scrollToIndex(e);const s=this.__getIndexScrollOffset(e);i!==void 0&&s!==void 0&&(this._scrollTop+=i-s)}this.elementsContainer.children.length||requestAnimationFrame(()=>this._resizeHandler()),this.__preventElementUpdates=!1,this._resizeHandler(),Ue()}get _scrollTop(){return this.scrollTarget.scrollTop}set _scrollTop(t){this.scrollTarget.scrollTop=t}get items(){return{length:Math.min(this.size,bl)}}get offsetHeight(){return this.scrollTarget.offsetHeight}get $(){return{items:this.scrollContainer}}updateViewportBoundaries(){const t=window.getComputedStyle(this.scrollTarget);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(t["padding-top"],10),this._isRTL=Boolean(t.direction==="rtl"),this._viewportWidth=this.elementsContainer.offsetWidth,this._viewportHeight=this.scrollTarget.offsetHeight,this._scrollPageHeight=this._viewportHeight-this._scrollLineHeight,this.grid&&this._updateGridMetrics()}setAttribute(){}_createPool(t){const e=this.createElements(t),i=document.createDocumentFragment();return e.forEach(s=>{s.style.position="absolute",i.appendChild(s),this.__resizeObserver.observe(s)}),this.elementsContainer.appendChild(i),e}_assignModels(t){this._iterateItems((e,i)=>{const s=this._physicalItems[e];s.hidden=i>=this.size,s.hidden?delete s.__lastUpdatedIndex:(s.__virtualIndex=i+(this._vidxOffset||0),this.__updateElement(s,s.__virtualIndex))},t)}_isClientFull(){return setTimeout(()=>{this.__clientFull=!0}),this.__clientFull||super._isClientFull()}translate3d(t,e,i,s){s.style.transform=`translateY(${e})`}toggleScrollListener(){}_scrollHandler(){this._adjustVirtualIndexOffset(this._scrollTop-(this.__previousScrollTop||0));const t=this.scrollTarget.scrollTop-this._scrollPosition;if(super._scrollHandler(),this._physicalCount!==0){const e=t>=0,i=this._getReusables(!e);i.indexes.length&&(this._physicalTop=i.physicalTop,e?(this._virtualStart-=i.indexes.length,this._physicalStart-=i.indexes.length):(this._virtualStart+=i.indexes.length,this._physicalStart+=i.indexes.length),this._resizeHandler())}t&&(this.__fixInvalidItemPositioningDebouncer=R.debounce(this.__fixInvalidItemPositioningDebouncer,K.after(this.timeouts.FIX_INVALID_ITEM_POSITIONING),()=>this.__fixInvalidItemPositioning())),this.reorderElements&&(this.__scrollReorderDebouncer=R.debounce(this.__scrollReorderDebouncer,K.after(this.timeouts.SCROLL_REORDER),()=>this.__reorderElements())),this.__previousScrollTop=this._scrollTop,this._scrollTop===0&&this.firstVisibleIndex!==0&&Math.abs(t)>0&&this.scrollToIndex(0)}__fixInvalidItemPositioning(){if(!this.scrollTarget.isConnected)return;const t=this._physicalTop>this._scrollTop,e=this._physicalBottom<this._scrollBottom,i=this.adjustedFirstVisibleIndex===0,s=this.adjustedLastVisibleIndex===this.size-1;if(t&&!i||e&&!s){const o=e,n=this._ratio;this._ratio=0,this._scrollPosition=this._scrollTop+(o?-1:1),this._scrollHandler(),this._ratio=n}}__onWheel(t){if(t.ctrlKey||this._hasScrolledAncestor(t.target,t.deltaX,t.deltaY))return;let e=t.deltaY;if(t.deltaMode===WheelEvent.DOM_DELTA_LINE?e*=this._scrollLineHeight:t.deltaMode===WheelEvent.DOM_DELTA_PAGE&&(e*=this._scrollPageHeight),this._deltaYAcc=this._deltaYAcc||0,this._wheelAnimationFrame){this._deltaYAcc+=e,t.preventDefault();return}e+=this._deltaYAcc,this._deltaYAcc=0,this._wheelAnimationFrame=!0,this.__debouncerWheelAnimationFrame=R.debounce(this.__debouncerWheelAnimationFrame,Ie,()=>{this._wheelAnimationFrame=!1});const i=Math.abs(t.deltaX)+Math.abs(e);this._canScroll(this.scrollTarget,t.deltaX,e)?(t.preventDefault(),this.scrollTarget.scrollTop+=e,this.scrollTarget.scrollLeft+=t.deltaX,this._hasResidualMomentum=!0,this._ignoreNewWheel=!0,this._debouncerIgnoreNewWheel=R.debounce(this._debouncerIgnoreNewWheel,K.after(this.timeouts.IGNORE_WHEEL),()=>{this._ignoreNewWheel=!1})):this._hasResidualMomentum&&i<=this._previousMomentum||this._ignoreNewWheel?t.preventDefault():i>this._previousMomentum&&(this._hasResidualMomentum=!1),this._previousMomentum=i}_hasScrolledAncestor(t,e,i){if(t===this.scrollTarget||t===this.scrollTarget.getRootNode().host)return!1;if(this._canScroll(t,e,i)&&["auto","scroll"].indexOf(getComputedStyle(t).overflow)!==-1)return!0;if(t!==this&&t.parentElement)return this._hasScrolledAncestor(t.parentElement,e,i)}_canScroll(t,e,i){return i>0&&t.scrollTop<t.scrollHeight-t.offsetHeight||i<0&&t.scrollTop>0||e>0&&t.scrollLeft<t.scrollWidth-t.offsetWidth||e<0&&t.scrollLeft>0}_getScrollLineHeight(){const t=document.createElement("div");t.style.fontSize="initial",t.style.display="none",document.body.appendChild(t);const e=window.getComputedStyle(t).fontSize;return document.body.removeChild(t),e?window.parseInt(e):void 0}__getVisibleElements(){return Array.from(this.elementsContainer.children).filter(t=>!t.hidden)}__reorderElements(){if(this.__mouseDown){this.__pendingReorder=!0;return}this.__pendingReorder=!1;const t=this._virtualStart+(this._vidxOffset||0),e=this.__getVisibleElements(),s=e.find(a=>a.contains(this.elementsContainer.getRootNode().activeElement)||a.contains(this.scrollTarget.getRootNode().activeElement))||e[0];if(!s)return;const o=s.__virtualIndex-t,n=e.indexOf(s)-o;if(n>0)for(let a=0;a<n;a++)this.elementsContainer.appendChild(e[a]);else if(n<0)for(let a=e.length+n;a<e.length;a++)this.elementsContainer.insertBefore(e[a],e[0]);if(to){const{transform:a}=this.scrollTarget.style;this.scrollTarget.style.transform="translateZ(0)",setTimeout(()=>{this.scrollTarget.style.transform=a})}}_adjustVirtualIndexOffset(t){if(this._virtualCount>=this.size)this._vidxOffset=0;else if(this.__skipNextVirtualIndexAdjust)this.__skipNextVirtualIndexAdjust=!1;else if(Math.abs(t)>1e4){const e=this._scrollTop/(this.scrollTarget.scrollHeight-this.scrollTarget.offsetHeight),i=e*this.size;this._vidxOffset=Math.round(i-e*this._virtualCount)}else{const e=this._vidxOffset,i=jt,s=100;this._scrollTop===0?(this._vidxOffset=0,e!==this._vidxOffset&&super.scrollToIndex(0)):this.firstVisibleIndex<i&&this._vidxOffset>0&&(this._vidxOffset-=Math.min(this._vidxOffset,s),super.scrollToIndex(this.firstVisibleIndex+(e-this._vidxOffset)));const o=this.size-this._virtualCount;this._scrollTop>=this._maxScrollTop&&this._maxScrollTop>0?(this._vidxOffset=o,e!==this._vidxOffset&&super.scrollToIndex(this._virtualCount-1)):this.firstVisibleIndex>this._virtualCount-i&&this._vidxOffset<o&&(this._vidxOffset+=Math.min(o-this._vidxOffset,s),super.scrollToIndex(this.firstVisibleIndex-(this._vidxOffset-e)))}}}Object.setPrototypeOf(io.prototype,vl);class so{constructor(t){this.__adapter=new io(t)}get size(){return this.__adapter.size}set size(t){this.__adapter.size=t}scrollToIndex(t){this.__adapter.scrollToIndex(t)}update(t=0,e=this.size-1){this.__adapter.update(t,e)}flush(){this.__adapter.flush()}get firstVisibleIndex(){return this.__adapter.adjustedFirstVisibleIndex}get lastVisibleIndex(){return this.__adapter.adjustedLastVisibleIndex}}/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const yl=r=>class extends r{static get observers(){return["_a11yUpdateGridSize(size, _columnTree, _columnTree.*)"]}_a11yGetHeaderRowCount(e){return e.filter(i=>i.some(s=>s.headerRenderer||s.path||s.header)).length}_a11yGetFooterRowCount(e){return e.filter(i=>i.some(s=>s.headerRenderer)).length}_a11yUpdateGridSize(e,i){if(e===void 0||i===void 0)return;const s=i[i.length-1];this.$.table.setAttribute("aria-rowcount",e+this._a11yGetHeaderRowCount(i)+this._a11yGetFooterRowCount(i)),this.$.table.setAttribute("aria-colcount",s&&s.length||0),this._a11yUpdateHeaderRows(),this._a11yUpdateFooterRows()}_a11yUpdateHeaderRows(){Array.from(this.$.header.children).forEach((e,i)=>e.setAttribute("aria-rowindex",i+1))}_a11yUpdateFooterRows(){Array.from(this.$.footer.children).forEach((e,i)=>e.setAttribute("aria-rowindex",this._a11yGetHeaderRowCount(this._columnTree)+this.size+i+1))}_a11yUpdateRowRowindex(e,i){e.setAttribute("aria-rowindex",i+this._a11yGetHeaderRowCount(this._columnTree)+1)}_a11yUpdateRowSelected(e,i){e.setAttribute("aria-selected",Boolean(i)),Array.from(e.children).forEach(s=>s.setAttribute("aria-selected",Boolean(i)))}_a11yUpdateRowExpanded(e){this.__isRowExpandable(e)?e.setAttribute("aria-expanded","false"):this.__isRowCollapsible(e)?e.setAttribute("aria-expanded","true"):e.removeAttribute("aria-expanded")}_a11yUpdateRowLevel(e,i){i>0||this.__isRowCollapsible(e)||this.__isRowExpandable(e)?e.setAttribute("aria-level",i+1):e.removeAttribute("aria-level")}_a11ySetRowDetailsCell(e,i){Array.from(e.children).forEach(s=>{s!==i&&s.setAttribute("aria-controls",i.id)})}_a11yUpdateCellColspan(e,i){e.setAttribute("aria-colspan",Number(i))}_a11yUpdateSorters(){Array.from(this.querySelectorAll("vaadin-grid-sorter")).forEach(e=>{let i=e.parentNode;for(;i&&i.localName!=="vaadin-grid-cell-content";)i=i.parentNode;i&&i.assignedSlot&&i.assignedSlot.parentNode.setAttribute("aria-sort",{asc:"ascending",desc:"descending"}[String(e.direction)]||"none")})}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Cl=r=>class extends r{static get properties(){return{activeItem:{type:Object,notify:!0,value:null}}}ready(){super.ready(),this.$.scroller.addEventListener("click",this._onClick.bind(this)),this.addEventListener("cell-activate",this._activateItem.bind(this)),this.addEventListener("row-activate",this._activateItem.bind(this))}_activateItem(e){const i=e.detail.model,s=i?i.item:null;s&&(this.activeItem=this._itemsEqual(this.activeItem,s)?null:s)}_onClick(e){if(e.defaultPrevented)return;const i=e.composedPath(),s=i[i.indexOf(this.$.table)-3];if(!s||s.getAttribute("part").indexOf("details-cell")>-1)return;const o=s._content,n=this.getRootNode().activeElement;!o.contains(n)&&!this._isFocusable(e.target)&&!(e.target instanceof HTMLLabelElement)&&this.dispatchEvent(new CustomEvent("cell-activate",{detail:{model:this.__getRowModel(s.parentElement)}}))}_isFocusable(e){return ro(e)}},ro=r=>{if(!r.parentNode)return!1;const e=Array.from(r.parentNode.querySelectorAll("[tabindex], button, input, select, textarea, object, iframe, a[href], area[href]")).filter(i=>{const s=i.getAttribute("part");return!(s&&s.includes("body-cell"))}).includes(r);return!r.disabled&&e&&r.offsetParent&&getComputedStyle(r).visibility!=="hidden"};function me(r,t){return r.split(".").reduce((e,i)=>e[i],t)}function Cs(r,t,e){if(e.length===0)return!1;let i=!0;return r.forEach(({path:s})=>{if(!s||s.indexOf(".")===-1)return;const o=s.replace(/\.[^.]*$/,"");me(o,e[0])===void 0&&(console.warn(`Path "${s}" used for ${t} does not exist in all of the items, ${t} is disabled.`),i=!1)}),i}function wl(r,t){return r.sort((e,i)=>t.map(s=>s.direction==="asc"?ws(me(s.path,e),me(s.path,i)):s.direction==="desc"?ws(me(s.path,i),me(s.path,e)):0).reduce((s,o)=>s!==0?s:o,0))}function Ct(r){return[void 0,null].indexOf(r)>=0?"":isNaN(r)?r.toString():r}function ws(r,t){return r=Ct(r),t=Ct(t),r<t?-1:r>t?1:0}function xl(r,t){return r.filter(e=>t.every(i=>{const s=Ct(me(i.path,e)),o=Ct(i.value).toString().toLowerCase();return s.toString().toLowerCase().includes(o)}))}const Al=r=>(t,e)=>{let i=r?[...r]:[];t.filters&&Cs(t.filters,"filtering",i)&&(i=xl(i,t.filters)),Array.isArray(t.sortOrders)&&t.sortOrders.length&&Cs(t.sortOrders,"sorting",i)&&(i=wl(i,t.sortOrders));const s=Math.min(i.length,t.pageSize),o=t.page*s,n=o+s,a=i.slice(o,n);e(a,i.length)};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const El=r=>class extends r{static get properties(){return{items:Array}}static get observers(){return["__dataProviderOrItemsChanged(dataProvider, items, isAttached, items.*, _filters, _sorters)"]}__setArrayDataProvider(e){const i=Al(this.items);i.__items=e,this.setProperties({_arrayDataProvider:i,size:e.length,dataProvider:i})}__dataProviderOrItemsChanged(e,i,s){!s||(this._arrayDataProvider?e!==this._arrayDataProvider?this.setProperties({_arrayDataProvider:void 0,items:void 0}):i?this._arrayDataProvider.__items===i?(this.clearCache(),this.size=this._effectiveSize):this.__setArrayDataProvider(i):(this.setProperties({_arrayDataProvider:void 0,dataProvider:void 0,size:0}),this.clearCache()):i&&this.__setArrayDataProvider(i))}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function oo(r,t,e){let i=1;r.forEach(s=>{i%10===0&&(i+=1),s._order=e+i*t,i+=1})}/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Il=r=>class extends r{static get properties(){return{columnReorderingAllowed:{type:Boolean,value:!1},_orderBaseScope:{type:Number,value:1e7}}}static get observers(){return["_updateOrders(_columnTree)"]}ready(){super.ready(),Te(this,"track",this._onTrackEvent),this._reorderGhost=this.shadowRoot.querySelector('[part="reorder-ghost"]'),this.addEventListener("touchstart",this._onTouchStart.bind(this)),this.addEventListener("touchmove",this._onTouchMove.bind(this)),this.addEventListener("touchend",this._onTouchEnd.bind(this)),this.addEventListener("contextmenu",this._onContextMenu.bind(this))}_onContextMenu(e){this.hasAttribute("reordering")&&e.preventDefault()}_onTouchStart(e){this._startTouchReorderTimeout=setTimeout(()=>{this._onTrackStart({detail:{x:e.touches[0].clientX,y:e.touches[0].clientY}})},100)}_onTouchMove(e){this._draggedColumn&&e.preventDefault(),clearTimeout(this._startTouchReorderTimeout)}_onTouchEnd(){clearTimeout(this._startTouchReorderTimeout),this._onTrackEnd()}_onTrackEvent(e){if(e.detail.state==="start"){const i=e.composedPath(),s=i[i.indexOf(this.$.header)-2];if(!s||!s._content||s._content.contains(this.getRootNode().activeElement)||this.$.scroller.hasAttribute("column-resizing"))return;this._touchDevice||this._onTrackStart(e)}else e.detail.state==="track"?this._onTrack(e):e.detail.state==="end"&&this._onTrackEnd(e)}_onTrackStart(e){if(!this.columnReorderingAllowed)return;const i=e.composedPath&&e.composedPath();if(i&&i.some(o=>o.hasAttribute&&o.hasAttribute("draggable")))return;const s=this._cellFromPoint(e.detail.x,e.detail.y);if(!(!s||!s.getAttribute("part").includes("header-cell"))){for(this.toggleAttribute("reordering",!0),this._draggedColumn=s._column;this._draggedColumn.parentElement.childElementCount===1;)this._draggedColumn=this._draggedColumn.parentElement;this._setSiblingsReorderStatus(this._draggedColumn,"allowed"),this._draggedColumn._reorderStatus="dragging",this._updateGhost(s),this._reorderGhost.style.visibility="visible",this._updateGhostPosition(e.detail.x,this._touchDevice?e.detail.y-50:e.detail.y),this._autoScroller()}}_onTrack(e){if(!this._draggedColumn)return;const i=this._cellFromPoint(e.detail.x,e.detail.y);if(!i)return;const s=this._getTargetColumn(i,this._draggedColumn);if(this._isSwapAllowed(this._draggedColumn,s)&&this._isSwappableByPosition(s,e.detail.x)){const o=this._columnTree.findIndex(c=>c.includes(s)),n=this._getColumnsInOrder(o),a=n.indexOf(this._draggedColumn),l=n.indexOf(s),d=a<l?1:-1;for(let c=a;c!==l;c+=d)this._swapColumnOrders(this._draggedColumn,n[c+d])}this._updateGhostPosition(e.detail.x,this._touchDevice?e.detail.y-50:e.detail.y),this._lastDragClientX=e.detail.x}_onTrackEnd(){!this._draggedColumn||(this.toggleAttribute("reordering",!1),this._draggedColumn._reorderStatus="",this._setSiblingsReorderStatus(this._draggedColumn,""),this._draggedColumn=null,this._lastDragClientX=null,this._reorderGhost.style.visibility="hidden",this.dispatchEvent(new CustomEvent("column-reorder",{detail:{columns:this._getColumnsInOrder()}})))}_getColumnsInOrder(e=this._columnTree.length-1){return this._columnTree[e].filter(i=>!i.hidden).sort((i,s)=>i._order-s._order)}_cellFromPoint(e,i){e=e||0,i=i||0,this._draggedColumn||this.$.scroller.toggleAttribute("no-content-pointer-events",!0);const s=this.shadowRoot.elementFromPoint(e,i);if(this.$.scroller.toggleAttribute("no-content-pointer-events",!1),s&&s._column)return s}_updateGhostPosition(e,i){const s=this._reorderGhost.getBoundingClientRect(),o=e-s.width/2,n=i-s.height/2,a=parseInt(this._reorderGhost._left||0),l=parseInt(this._reorderGhost._top||0);this._reorderGhost._left=a-(s.left-o),this._reorderGhost._top=l-(s.top-n),this._reorderGhost.style.transform=`translate(${this._reorderGhost._left}px, ${this._reorderGhost._top}px)`}_updateGhost(e){const i=this._reorderGhost;i.textContent=e._content.innerText;const s=window.getComputedStyle(e);return["boxSizing","display","width","height","background","alignItems","padding","border","flex-direction","overflow"].forEach(o=>{i.style[o]=s[o]}),i}_updateOrders(e){e!==void 0&&(e[0].forEach(i=>{i._order=0}),oo(e[0],this._orderBaseScope,0))}_setSiblingsReorderStatus(e,i){Array.from(e.parentNode.children).filter(s=>/column/.test(s.localName)&&this._isSwapAllowed(s,e)).forEach(s=>{s._reorderStatus=i})}_autoScroller(){if(this._lastDragClientX){const e=this._lastDragClientX-this.getBoundingClientRect().right+50,i=this.getBoundingClientRect().left-this._lastDragClientX+50;e>0?this.$.table.scrollLeft+=e/10:i>0&&(this.$.table.scrollLeft-=i/10)}this._draggedColumn&&setTimeout(()=>this._autoScroller(),10)}_isSwapAllowed(e,i){if(e&&i){const s=e!==i,o=e.parentElement===i.parentElement,n=e.frozen&&i.frozen||e.frozenToEnd&&i.frozenToEnd||!e.frozen&&!e.frozenToEnd&&!i.frozen&&!i.frozenToEnd;return s&&o&&n}}_isSwappableByPosition(e,i){const s=Array.from(this.$.header.querySelectorAll('tr:not([hidden]) [part~="cell"]')).find(a=>e.contains(a._column)),o=this.$.header.querySelector("tr:not([hidden]) [reorder-status=dragging]").getBoundingClientRect(),n=s.getBoundingClientRect();return n.left>o.left?i>n.right-o.width:i<n.left+o.width}_swapColumnOrders(e,i){[e._order,i._order]=[i._order,e._order],this._debounceUpdateFrozenColumn(),this._updateFirstAndLastColumn()}_getTargetColumn(e,i){if(e&&i){let s=e._column;for(;s.parentElement!==i.parentElement&&s!==this;)s=s.parentElement;return s.parentElement===i.parentElement?s:e._column}}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Tl=r=>class extends r{ready(){super.ready();const e=this.$.scroller;Te(e,"track",this._onHeaderTrack.bind(this)),e.addEventListener("touchmove",i=>e.hasAttribute("column-resizing")&&i.preventDefault()),e.addEventListener("contextmenu",i=>i.target.getAttribute("part")==="resize-handle"&&i.preventDefault()),e.addEventListener("mousedown",i=>i.target.getAttribute("part")==="resize-handle"&&i.preventDefault())}_onHeaderTrack(e){const i=e.target;if(i.getAttribute("part")==="resize-handle"){let o=i.parentElement._column;for(this.$.scroller.toggleAttribute("column-resizing",!0);o.localName==="vaadin-grid-column-group";)o=o._childColumns.slice(0).sort((c,h)=>c._order-h._order).filter(c=>!c.hidden).pop();const n=e.detail.x,a=Array.from(this.$.header.querySelectorAll('[part~="row"]:last-child [part~="cell"]')),l=a.find(c=>c._column===o);if(l.offsetWidth){const c=getComputedStyle(l._content),h=10+parseInt(c.paddingLeft)+parseInt(c.paddingRight)+parseInt(c.borderLeftWidth)+parseInt(c.borderRightWidth)+parseInt(c.marginLeft)+parseInt(c.marginRight);let m;const g=l.offsetWidth,b=l.getBoundingClientRect();l.hasAttribute("frozen-to-end")?m=g+(this.__isRTL?n-b.right:b.left-n):m=g+(this.__isRTL?b.left-n:n-b.right),o.width=`${Math.max(h,m)}px`,o.flexGrow=0}a.sort((c,h)=>c._column._order-h._column._order).forEach((c,h,m)=>{h<m.indexOf(l)&&(c._column.width=`${c.offsetWidth}px`,c._column.flexGrow=0)});const d=this._frozenToEndCells[0];if(d&&this.$.table.scrollWidth>this.$.table.offsetWidth){const c=d.getBoundingClientRect(),h=n-(this.__isRTL?c.right:c.left);(this.__isRTL&&h<=0||!this.__isRTL&&h>=0)&&(this.$.table.scrollLeft+=h)}e.detail.state==="end"&&(this.$.scroller.toggleAttribute("column-resizing",!1),this.dispatchEvent(new CustomEvent("column-resize",{detail:{resizedColumn:o}}))),this._resizeHandler()}}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const G=class no{constructor(t,e,i){this.grid=t,this.parentCache=e,this.parentItem=i,this.itemCaches={},this.items={},this.effectiveSize=0,this.size=0,this.pendingRequests={}}isLoading(){return Boolean(Object.keys(this.pendingRequests).length||Object.keys(this.itemCaches).filter(t=>this.itemCaches[t].isLoading())[0])}getItemForIndex(t){const{cache:e,scaledIndex:i}=this.getCacheAndIndex(t);return e.items[i]}updateSize(){this.effectiveSize=!this.parentItem||this.grid._isExpanded(this.parentItem)?this.size+Object.keys(this.itemCaches).reduce((t,e)=>{const i=this.itemCaches[e];return i.updateSize(),t+i.effectiveSize},0):0}ensureSubCacheForScaledIndex(t){if(!this.itemCaches[t]){const e=new no(this.grid,this,this.items[t]);this.itemCaches[t]=e,this.grid._loadPage(0,e)}}getCacheAndIndex(t){let e=t;const i=Object.keys(this.itemCaches);for(let s=0;s<i.length;s++){const o=Number(i[s]),n=this.itemCaches[o];if(e<=o)return{cache:this,scaledIndex:e};if(e<=o+n.effectiveSize)return n.getCacheAndIndex(e-o-1);e-=n.effectiveSize}return{cache:this,scaledIndex:e}}},Sl=r=>class extends r{static get properties(){return{size:{type:Number,notify:!0},pageSize:{type:Number,value:50,observer:"_pageSizeChanged"},dataProvider:{type:Object,notify:!0,observer:"_dataProviderChanged"},loading:{type:Boolean,notify:!0,readOnly:!0,reflectToAttribute:!0},_cache:{type:Object,value(){return new G(this)}},_hasData:{type:Boolean,value:!1},itemHasChildrenPath:{type:String,value:"children"},itemIdPath:{type:String,value:null},expandedItems:{type:Object,notify:!0,value:()=>[]},__expandedKeys:{type:Object,computed:"__computeExpandedKeys(itemIdPath, expandedItems.*)"}}}static get observers(){return["_sizeChanged(size)","_expandedItemsChanged(expandedItems.*)"]}_sizeChanged(e){const i=e-this._cache.size;this._cache.size+=i,this._cache.effectiveSize+=i,this._effectiveSize=this._cache.effectiveSize}_getItem(e,i){if(e>=this._effectiveSize)return;i.index=e;const{cache:s,scaledIndex:o}=this._cache.getCacheAndIndex(e),n=s.items[o];n?(i.toggleAttribute("loading",!1),this._updateItem(i,n),this._isExpanded(n)&&s.ensureSubCacheForScaledIndex(o)):(i.toggleAttribute("loading",!0),this._loadPage(this._getPageForIndex(o),s))}getItemId(e){return this.itemIdPath?this.get(this.itemIdPath,e):e}_isExpanded(e){return this.__expandedKeys.has(this.getItemId(e))}_expandedItemsChanged(){this._cache.updateSize(),this._effectiveSize=this._cache.effectiveSize,this.__updateVisibleRows()}__computeExpandedKeys(e,i){const s=i.base||[],o=new Set;return s.forEach(n=>{o.add(this.getItemId(n))}),o}expandItem(e){this._isExpanded(e)||(this.expandedItems=[...this.expandedItems,e])}collapseItem(e){this._isExpanded(e)&&(this.expandedItems=this.expandedItems.filter(i=>!this._itemsEqual(i,e)))}_getIndexLevel(e){let{cache:i}=this._cache.getCacheAndIndex(e),s=0;for(;i.parentCache;)i=i.parentCache,s+=1;return s}_loadPage(e,i){if(!i.pendingRequests[e]&&this.dataProvider){this._setLoading(!0),i.pendingRequests[e]=!0;const s={page:e,pageSize:this.pageSize,sortOrders:this._mapSorters(),filters:this._mapFilters(),parentItem:i.parentItem};this.dataProvider(s,(o,n)=>{n!==void 0?i.size=n:s.parentItem&&(i.size=o.length);const a=Array.from(this.$.items.children).map(l=>l._item);o.forEach((l,d)=>{const c=e*this.pageSize+d;i.items[c]=l,this._isExpanded(l)&&a.indexOf(l)>-1&&i.ensureSubCacheForScaledIndex(c)}),this._hasData=!0,delete i.pendingRequests[e],this._debouncerApplyCachedData=R.debounce(this._debouncerApplyCachedData,K.after(0),()=>{this._setLoading(!1),this._cache.updateSize(),this._effectiveSize=this._cache.effectiveSize,Array.from(this.$.items.children).filter(l=>!l.hidden).forEach(l=>{this._cache.getItemForIndex(l.index)&&this._getItem(l.index,l)}),this.__scrollToPendingIndex()}),this._cache.isLoading()||this._debouncerApplyCachedData.flush(),this.__itemsReceived()})}}_getPageForIndex(e){return Math.floor(e/this.pageSize)}clearCache(){this._cache=new G(this),this._cache.size=this.size||0,this._cache.updateSize(),this._hasData=!1,this.__updateVisibleRows(),this._effectiveSize||this._loadPage(0,this._cache)}_pageSizeChanged(e,i){i!==void 0&&e!==i&&this.clearCache()}_checkSize(){this.size===void 0&&this._effectiveSize===0&&console.warn("The <vaadin-grid> needs the total number of items in order to display rows. Set the total number of items to the `size` property, or provide the total number of items in the second argument of the `dataProvider`\u2019s `callback` call.")}_dataProviderChanged(e,i){i!==void 0&&this.clearCache(),this._ensureFirstPageLoaded(),this._debouncerCheckSize=R.debounce(this._debouncerCheckSize,K.after(2e3),this._checkSize.bind(this))}_ensureFirstPageLoaded(){this._hasData||this._loadPage(0,this._cache)}_itemsEqual(e,i){return this.getItemId(e)===this.getItemId(i)}_getItemIndexInArray(e,i){let s=-1;return i.forEach((o,n)=>{this._itemsEqual(o,e)&&(s=n)}),s}scrollToIndex(e){super.scrollToIndex(e),!isNaN(e)&&(this._cache.isLoading()||!this.clientHeight)&&(this.__pendingScrollToIndex=e)}__scrollToPendingIndex(){if(this.__pendingScrollToIndex&&this.$.items.children.length){const e=this.__pendingScrollToIndex;delete this.__pendingScrollToIndex,this.scrollToIndex(e)}}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ne={BETWEEN:"between",ON_TOP:"on-top",ON_TOP_OR_BETWEEN:"on-top-or-between",ON_GRID:"on-grid"},ie={ON_TOP:"on-top",ABOVE:"above",BELOW:"below",EMPTY:"empty"},Pl=!("draggable"in document.createElement("div")),Ol=r=>class extends r{static get properties(){return{dropMode:String,rowsDraggable:Boolean,dragFilter:Function,dropFilter:Function,__dndAutoScrollThreshold:{value:50}}}static get observers(){return["_dragDropAccessChanged(rowsDraggable, dropMode, dragFilter, dropFilter, loading)"]}ready(){super.ready(),this.$.table.addEventListener("dragstart",this._onDragStart.bind(this)),this.$.table.addEventListener("dragend",this._onDragEnd.bind(this)),this.$.table.addEventListener("dragover",this._onDragOver.bind(this)),this.$.table.addEventListener("dragleave",this._onDragLeave.bind(this)),this.$.table.addEventListener("drop",this._onDrop.bind(this)),this.$.table.addEventListener("dragenter",e=>{this.dropMode&&(e.preventDefault(),e.stopPropagation())})}_onDragStart(e){if(this.rowsDraggable){let i=e.target;if(i.localName==="vaadin-grid-cell-content"&&(i=i.assignedSlot.parentNode.parentNode),i.parentNode!==this.$.items)return;if(e.stopPropagation(),this.toggleAttribute("dragging-rows",!0),this._safari){const a=i.style.transform;i.style.top=/translateY\((.*)\)/.exec(a)[1],i.style.transform="none",requestAnimationFrame(()=>{i.style.top="",i.style.transform=a})}const s=i.getBoundingClientRect();Pl?e.dataTransfer.setDragImage(i):e.dataTransfer.setDragImage(i,e.clientX-s.left,e.clientY-s.top);let o=[i];this._isSelected(i._item)&&(o=this.__getViewportRows().filter(a=>this._isSelected(a._item)).filter(a=>!this.dragFilter||this.dragFilter(this.__getRowModel(a)))),e.dataTransfer.setData("text",this.__formatDefaultTransferData(o)),i.setAttribute("dragstart",o.length>1?o.length:""),this.style.setProperty("--_grid-drag-start-x",`${e.clientX-s.left+20}px`),this.style.setProperty("--_grid-drag-start-y",`${e.clientY-s.top+10}px`),requestAnimationFrame(()=>{i.removeAttribute("dragstart"),this.updateStyles({"--_grid-drag-start-x":"","--_grid-drag-start-y":""})});const n=new CustomEvent("grid-dragstart",{detail:{draggedItems:o.map(a=>a._item),setDragData:(a,l)=>e.dataTransfer.setData(a,l),setDraggedItemsCount:a=>i.setAttribute("dragstart",a)}});n.originalEvent=e,this.dispatchEvent(n)}}_onDragEnd(e){this.toggleAttribute("dragging-rows",!1),e.stopPropagation();const i=new CustomEvent("grid-dragend");i.originalEvent=e,this.dispatchEvent(i)}_onDragLeave(e){e.stopPropagation(),this._clearDragStyles()}_onDragOver(e){if(this.dropMode){if(this._dropLocation=void 0,this._dragOverItem=void 0,this.__dndAutoScroll(e.clientY)){this._clearDragStyles();return}let i=e.composedPath().find(s=>s.localName==="tr");if(!this._effectiveSize||this.dropMode===Ne.ON_GRID)this._dropLocation=ie.EMPTY;else if(!i||i.parentNode!==this.$.items){if(i)return;if(this.dropMode===Ne.BETWEEN||this.dropMode===Ne.ON_TOP_OR_BETWEEN)i=Array.from(this.$.items.children).filter(s=>!s.hidden).pop(),this._dropLocation=ie.BELOW;else return}else{const s=i.getBoundingClientRect();if(this._dropLocation=ie.ON_TOP,this.dropMode===Ne.BETWEEN){const o=e.clientY-s.top<s.bottom-e.clientY;this._dropLocation=o?ie.ABOVE:ie.BELOW}else this.dropMode===Ne.ON_TOP_OR_BETWEEN&&(e.clientY-s.top<s.height/3?this._dropLocation=ie.ABOVE:e.clientY-s.top>s.height/3*2&&(this._dropLocation=ie.BELOW))}if(i&&i.hasAttribute("drop-disabled")){this._dropLocation=void 0;return}e.stopPropagation(),e.preventDefault(),this._dropLocation===ie.EMPTY?this.toggleAttribute("dragover",!0):i?(this._dragOverItem=i._item,i.getAttribute("dragover")!==this._dropLocation&&i.setAttribute("dragover",this._dropLocation)):this._clearDragStyles()}}__dndAutoScroll(e){if(this.__dndAutoScrolling)return!0;const i=this.$.header.getBoundingClientRect().bottom,s=this.$.footer.getBoundingClientRect().top,o=i-e+this.__dndAutoScrollThreshold,n=e-s+this.__dndAutoScrollThreshold;let a=0;if(n>0?a=n*2:o>0&&(a=-o*2),a){const l=this.$.table.scrollTop;if(this.$.table.scrollTop+=a,l!==this.$.table.scrollTop)return this.__dndAutoScrolling=!0,setTimeout(()=>{this.__dndAutoScrolling=!1},20),!0}}__getViewportRows(){const e=this.$.header.getBoundingClientRect().bottom,i=this.$.footer.getBoundingClientRect().top;return Array.from(this.$.items.children).filter(s=>{const o=s.getBoundingClientRect();return o.bottom>e&&o.top<i})}_clearDragStyles(){this.removeAttribute("dragover"),Array.from(this.$.items.children).forEach(e=>e.removeAttribute("dragover"))}_onDrop(e){if(this.dropMode){e.stopPropagation(),e.preventDefault();const i=e.dataTransfer.types&&Array.from(e.dataTransfer.types).map(o=>({type:o,data:e.dataTransfer.getData(o)}));this._clearDragStyles();const s=new CustomEvent("grid-drop",{bubbles:e.bubbles,cancelable:e.cancelable,detail:{dropTargetItem:this._dragOverItem,dropLocation:this._dropLocation,dragData:i}});s.originalEvent=e,this.dispatchEvent(s)}}__formatDefaultTransferData(e){return e.map(i=>Array.from(i.children).filter(s=>!s.hidden&&s.getAttribute("part").indexOf("details-cell")===-1).sort((s,o)=>s._column._order>o._column._order?1:-1).map(s=>s._content.textContent.trim()).filter(s=>s).join("	")).join(`
`)}_dragDropAccessChanged(){this.filterDragAndDrop()}filterDragAndDrop(){Array.from(this.$.items.children).filter(e=>!e.hidden).forEach(e=>{this._filterDragAndDrop(e,this.__getRowModel(e))})}_filterDragAndDrop(e,i){const s=this.loading||e.hasAttribute("loading"),o=!this.rowsDraggable||s||this.dragFilter&&!this.dragFilter(i),n=!this.dropMode||s||this.dropFilter&&!this.dropFilter(i);Array.from(e.children).map(l=>l._content).forEach(l=>{o?l.removeAttribute("draggable"):l.setAttribute("draggable",!0)}),e.toggleAttribute("drag-disabled",!!o),e.toggleAttribute("drop-disabled",!!n)}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function ao(r,t){if(!r||!t||r.length!==t.length)return!1;for(let e=0,i=r.length;e<i;e++)if(r[e]instanceof Array&&t[e]instanceof Array){if(!ao(r[e],t[e]))return!1}else if(r[e]!==t[e])return!1;return!0}const zl=r=>class extends r{static get properties(){return{_columnTree:Object}}ready(){super.ready(),this._addNodeObserver()}_hasColumnGroups(e){for(let i=0;i<e.length;i++)if(e[i].localName==="vaadin-grid-column-group")return!0;return!1}_getChildColumns(e){return $.getFlattenedNodes(e).filter(this._isColumnElement)}_flattenColumnGroups(e){return e.map(i=>i.localName==="vaadin-grid-column-group"?this._getChildColumns(i):[i]).reduce((i,s)=>i.concat(s),[])}_getColumnTree(){const e=$.getFlattenedNodes(this).filter(this._isColumnElement),i=[e];let s=e;for(;this._hasColumnGroups(s);)s=this._flattenColumnGroups(s),i.push(s);return i}_updateColumnTree(){const e=this._getColumnTree();ao(e,this._columnTree)||(this._columnTree=e)}_addNodeObserver(){this._observer=new $(this,e=>{const i=s=>s.filter(this._isColumnElement).length>0;if(i(e.addedNodes)||i(e.removedNodes)){const s=e.removedNodes.flatMap(n=>n._allCells),o=n=>s.filter(a=>a._content.contains(n)).length;this.__removeSorters(this._sorters.filter(o)),this.__removeFilters(this._filters.filter(o)),this._updateColumnTree()}this._debouncerCheckImports=R.debounce(this._debouncerCheckImports,K.after(2e3),this._checkImports.bind(this)),this._ensureFirstPageLoaded()})}_checkImports(){["vaadin-grid-column-group","vaadin-grid-filter","vaadin-grid-filter-column","vaadin-grid-tree-toggle","vaadin-grid-selection-column","vaadin-grid-sort-column","vaadin-grid-sorter"].forEach(e=>{const i=this.querySelector(e);i&&!(i instanceof O)&&console.warn(`Make sure you have imported the required module for <${e}> element.`)})}_updateFirstAndLastColumn(){Array.from(this.shadowRoot.querySelectorAll("tr")).forEach(e=>this._updateFirstAndLastColumnForRow(e))}_updateFirstAndLastColumnForRow(e){Array.from(e.querySelectorAll('[part~="cell"]:not([part~="details-cell"])')).sort((i,s)=>i._column._order-s._column._order).forEach((i,s,o)=>{i.toggleAttribute("first-column",s===0),i.toggleAttribute("last-column",s===o.length-1)})}_isColumnElement(e){return e.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/.test(e.localName)}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const kl=r=>class extends r{getEventContext(e){const i={},s=e.__composedPath||e.composedPath(),o=s[s.indexOf(this.$.table)-3];return o&&(i.section=["body","header","footer","details"].find(n=>o.getAttribute("part").indexOf(n)>-1),o._column&&(i.column=o._column),(i.section==="body"||i.section==="details")&&Object.assign(i,this.__getRowModel(o.parentElement))),i}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ll=r=>class extends r{static get properties(){return{_filters:{type:Array,value:()=>[]}}}ready(){super.ready(),this.addEventListener("filter-changed",this._filterChanged.bind(this))}_filterChanged(e){e.stopPropagation(),this.__addFilter(e.target),this.__applyFilters()}__removeFilters(e){e.length!==0&&(this._filters=this._filters.filter(i=>e.indexOf(i)<0),this.__applyFilters())}__addFilter(e){this._filters.indexOf(e)===-1&&this._filters.push(e)}__applyFilters(){this.dataProvider&&this.isAttached&&this.clearCache()}_mapFilters(){return this._filters.map(e=>({path:e.path,value:e.value}))}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Rl(r){const t=[];for(;r;){if(r.nodeType===Node.DOCUMENT_NODE){t.push(r);break}if(r.nodeType===Node.DOCUMENT_FRAGMENT_NODE){t.push(r),r=r.host;continue}if(r.assignedSlot){r=r.assignedSlot;continue}r=r.parentNode}return t}function lo(r){return r?new Set(r.split(" ")):new Set}function co(r){return[...r].join(" ")}function Mt(r,t,e){const i=lo(r.getAttribute(t));i.add(e),r.setAttribute(t,co(i))}function Ft(r,t,e){const i=lo(r.getAttribute(t));if(i.delete(e),i.size===0){r.removeAttribute(t);return}r.setAttribute(t,co(i))}function Nl(r){return r.nodeType===Node.TEXT_NODE&&r.textContent.trim()===""}/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Dl=r=>class extends r{static get properties(){return{_headerFocusable:{type:Object,observer:"_focusableChanged"},_itemsFocusable:{type:Object,observer:"_focusableChanged"},_footerFocusable:{type:Object,observer:"_focusableChanged"},_navigatingIsHidden:Boolean,_focusedItemIndex:{type:Number,value:0},_focusedColumnOrder:Number,_focusedCell:{type:Object,observer:"_focusedCellChanged"},interacting:{type:Boolean,value:!1,reflectToAttribute:!0,readOnly:!0,observer:"_interactingChanged"}}}ready(){super.ready(),!(this._ios||this._android)&&(this.addEventListener("keydown",this._onKeyDown),this.addEventListener("keyup",this._onKeyUp),this.addEventListener("focusin",this._onFocusIn),this.addEventListener("focusout",this._onFocusOut),this.$.table.addEventListener("focusin",this._onContentFocusIn.bind(this)),this.addEventListener("mousedown",()=>{this.toggleAttribute("navigating",!1),this._isMousedown=!0,this._focusedColumnOrder=void 0}),this.addEventListener("mouseup",()=>{this._isMousedown=!1}))}get __rowFocusMode(){return this.__isRow(this._itemsFocusable)||this.__isRow(this._headerFocusable)||this.__isRow(this._footerFocusable)}set __rowFocusMode(e){["_itemsFocusable","_footerFocusable","_headerFocusable"].forEach(i=>{const s=this[i];if(e){const o=s&&s.parentElement;this.__isCell(s)?this[i]=o:this.__isCell(o)&&(this[i]=o.parentElement)}else if(!e&&this.__isRow(s)){const o=s.firstElementChild;this[i]=o._focusButton||o}})}_focusableChanged(e,i){i&&i.setAttribute("tabindex","-1"),e&&this._updateGridSectionFocusTarget(e)}_focusedCellChanged(e,i){i&&Ft(i,"part","focused-cell"),e&&Mt(e,"part","focused-cell")}_interactingChanged(){this._updateGridSectionFocusTarget(this._headerFocusable),this._updateGridSectionFocusTarget(this._itemsFocusable),this._updateGridSectionFocusTarget(this._footerFocusable)}__updateItemsFocusable(){if(!this._itemsFocusable)return;const e=this.shadowRoot.activeElement===this._itemsFocusable;this._getVisibleRows().forEach(i=>{if(i.index===this._focusedItemIndex)if(this.__rowFocusMode)this._itemsFocusable=i;else{let s=this._itemsFocusable.parentElement,o=this._itemsFocusable;if(s){this.__isCell(s)&&(o=s,s=s.parentElement);const n=[...s.children].indexOf(o);this._itemsFocusable=this.__getFocusable(i,i.children[n])}}}),e&&this._itemsFocusable.focus()}_onKeyDown(e){const i=e.key;let s;switch(i){case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"PageUp":case"PageDown":case"Home":case"End":s="Navigation";break;case"Enter":case"Escape":case"F2":s="Interaction";break;case"Tab":s="Tab";break;case" ":s="Space";break}this._detectInteracting(e),this.interacting&&s!=="Interaction"&&(s=void 0),s&&this[`_on${s}KeyDown`](e,i)}_ensureScrolledToIndex(e){[...this.$.items.children].find(s=>s.index===e)?this.__scrollIntoViewport(e):this.scrollToIndex(e)}__isRowExpandable(e){if(this.itemHasChildrenPath){const i=e._item;return i&&this.get(this.itemHasChildrenPath,i)&&!this._isExpanded(i)}}__isRowCollapsible(e){return this._isExpanded(e._item)}__isDetailsCell(e){return e.matches('[part~="details-cell"]')}__isCell(e){return e instanceof HTMLTableCellElement}__isRow(e){return e instanceof HTMLTableRowElement}__getIndexOfChildElement(e){return Array.prototype.indexOf.call(e.parentNode.children,e)}_onNavigationKeyDown(e,i){e.preventDefault();const s=this._lastVisibleIndex-this._firstVisibleIndex-1;let o=0,n=0;switch(i){case"ArrowRight":o=this.__isRTL?-1:1;break;case"ArrowLeft":o=this.__isRTL?1:-1;break;case"Home":this.__rowFocusMode||e.ctrlKey?n=-1/0:o=-1/0;break;case"End":this.__rowFocusMode||e.ctrlKey?n=1/0:o=1/0;break;case"ArrowDown":n=1;break;case"ArrowUp":n=-1;break;case"PageDown":n=s;break;case"PageUp":n=-s;break}const a=e.composedPath().find(h=>this.__isRow(h)),l=e.composedPath().find(h=>this.__isCell(h));if(this.__rowFocusMode&&!a||!this.__rowFocusMode&&!l)return;const d=this.__isRTL?"ArrowLeft":"ArrowRight",c=this.__isRTL?"ArrowRight":"ArrowLeft";if(i===d){if(this.__rowFocusMode){if(this.__isRowExpandable(a)){this.expandItem(a._item);return}this.__rowFocusMode=!1,this._onCellNavigation(a.firstElementChild,0,0);return}}else if(i===c)if(this.__rowFocusMode){if(this.__isRowCollapsible(a)){this.collapseItem(a._item);return}}else{const h=[...a.children].sort((m,g)=>m._order-g._order);if(l===h[0]||this.__isDetailsCell(l)){this.__rowFocusMode=!0,this._onRowNavigation(a,0);return}}this.__rowFocusMode?this._onRowNavigation(a,n):this._onCellNavigation(l,o,n)}_onRowNavigation(e,i){const{dstRow:s}=this.__navigateRows(i,e);s&&s.focus()}__getIndexInGroup(e,i){return e.parentNode===this.$.items?i!==void 0?i:e.index:this.__getIndexOfChildElement(e)}__navigateRows(e,i,s){const o=this.__getIndexInGroup(i,this._focusedItemIndex),n=i.parentNode,a=(n===this.$.items?this._effectiveSize:n.children.length)-1;let l=Math.max(0,Math.min(o+e,a));if(n!==this.$.items){if(l>o)for(;l<a&&n.children[l].hidden;)l+=1;else if(l<o)for(;l>0&&n.children[l].hidden;)l-=1;return this.toggleAttribute("navigating",!0),{dstRow:n.children[l]}}let d=!1;if(s){const c=this.__isDetailsCell(s);if(n===this.$.items){const h=i._item,m=this._cache.getItemForIndex(l);c?d=e===0:d=e===1&&this._isDetailsOpened(h)||e===-1&&l!==o&&this._isDetailsOpened(m),d!==c&&(e===1&&d||e===-1&&!d)&&(l=o)}}return this._ensureScrolledToIndex(l),this._focusedItemIndex=l,this.toggleAttribute("navigating",!0),{dstRow:[...n.children].find(c=>!c.hidden&&c.index===l),dstIsRowDetails:d}}_onCellNavigation(e,i,s){const o=e.parentNode,{dstRow:n,dstIsRowDetails:a}=this.__navigateRows(s,o,e);if(!n)return;const l=this.__getIndexOfChildElement(e),d=this.__isDetailsCell(e),c=o.parentNode,h=this.__getIndexInGroup(o,this._focusedItemIndex);if(this._focusedColumnOrder===void 0&&(d?this._focusedColumnOrder=0:this._focusedColumnOrder=this._getColumns(c,h).filter(m=>!m.hidden)[l]._order),a)[...n.children].find(g=>this.__isDetailsCell(g)).focus();else{const m=this.__getIndexInGroup(n,this._focusedItemIndex),g=this._getColumns(c,m).filter(B=>!B.hidden),b=g.map(B=>B._order).sort((B,te)=>B-te),C=b.length-1,y=b.indexOf(b.slice(0).sort((B,te)=>Math.abs(B-this._focusedColumnOrder)-Math.abs(te-this._focusedColumnOrder))[0]),S=s===0&&d?y:Math.max(0,Math.min(y+i,C));S!==y&&(this._focusedColumnOrder=void 0);const L=g.reduce((B,te,ue)=>(B[te._order]=ue,B),{})[b[S]],U=n.children[L];this._scrollHorizontallyToCell(U),U.focus()}}_onInteractionKeyDown(e,i){const s=e.composedPath()[0],o=s.localName==="input"&&!/^(button|checkbox|color|file|image|radio|range|reset|submit)$/i.test(s.type);let n;switch(i){case"Enter":n=this.interacting?!o:!0;break;case"Escape":n=!1;break;case"F2":n=!this.interacting;break}const{cell:a}=this._getGridEventLocation(e);if(this.interacting!==n&&a!==null)if(n){const l=a._content.querySelector("[focus-target]")||[...a._content.querySelectorAll("*")].find(d=>this._isFocusable(d));l&&(e.preventDefault(),l.focus(),this._setInteracting(!0),this.toggleAttribute("navigating",!1))}else e.preventDefault(),this._focusedColumnOrder=void 0,a.focus(),this._setInteracting(!1),this.toggleAttribute("navigating",!0);i==="Escape"&&this._hideTooltip(!0)}_predictFocusStepTarget(e,i){const s=[this.$.table,this._headerFocusable,this._itemsFocusable,this._footerFocusable,this.$.focusexit];let o=s.indexOf(e);for(o+=i;o>=0&&o<=s.length-1;){let n=s[o];if(n&&!this.__rowFocusMode&&(n=s[o].parentNode),!n||n.hidden)o+=i;else break}return s[o]}_onTabKeyDown(e){const i=this._predictFocusStepTarget(e.composedPath()[0],e.shiftKey?-1:1);if(!!i){if(e.stopPropagation(),i===this.$.table)this.$.table.focus();else if(i===this.$.focusexit)this.$.focusexit.focus();else if(i===this._itemsFocusable){let s=i;const o=this.__isRow(i)?i:i.parentNode;if(this._ensureScrolledToIndex(this._focusedItemIndex),o.index!==this._focusedItemIndex&&this.__isCell(i)){const n=Array.from(o.children).indexOf(this._itemsFocusable),a=Array.from(this.$.items.children).find(l=>!l.hidden&&l.index===this._focusedItemIndex);a&&(s=a.children[n])}e.preventDefault(),s.focus()}else e.preventDefault(),i.focus();this.toggleAttribute("navigating",!0)}}_onSpaceKeyDown(e){e.preventDefault();const i=e.composedPath()[0],s=this.__isRow(i);(s||!i._content||!i._content.firstElementChild)&&this.dispatchEvent(new CustomEvent(s?"row-activate":"cell-activate",{detail:{model:this.__getRowModel(s?i:i.parentElement)}}))}_onKeyUp(e){if(!/^( |SpaceBar)$/.test(e.key)||this.interacting)return;e.preventDefault();const i=e.composedPath()[0];if(i._content&&i._content.firstElementChild){const s=this.hasAttribute("navigating");i._content.firstElementChild.dispatchEvent(new MouseEvent("click",{shiftKey:e.shiftKey,bubbles:!0,composed:!0,cancelable:!0})),this.toggleAttribute("navigating",s)}}_onFocusIn(e){this._isMousedown||this.toggleAttribute("navigating",!0);const i=e.composedPath()[0];i===this.$.table||i===this.$.focusexit?(this._predictFocusStepTarget(i,i===this.$.table?1:-1).focus(),this._setInteracting(!1)):this._detectInteracting(e)}_onFocusOut(e){this.toggleAttribute("navigating",!1),this._detectInteracting(e),this._hideTooltip(),this._focusedCell=null}_onContentFocusIn(e){const{section:i,cell:s,row:o}=this._getGridEventLocation(e);if(!(!s&&!this.__rowFocusMode)){if(this._detectInteracting(e),i&&(s||o))if(this._activeRowGroup=i,this.$.header===i?this._headerFocusable=this.__getFocusable(o,s):this.$.items===i?this._itemsFocusable=this.__getFocusable(o,s):this.$.footer===i&&(this._footerFocusable=this.__getFocusable(o,s)),s){const n=this.getEventContext(e);s.dispatchEvent(new CustomEvent("cell-focus",{bubbles:!0,composed:!0,detail:{context:n}})),this._focusedCell=s._focusButton||s,zi()&&e.target===s&&this._showTooltip(e)}else this._focusedCell=null;this._detectFocusedItemIndex(e)}}__getFocusable(e,i){return this.__rowFocusMode?e:i._focusButton||i}_detectInteracting(e){const i=e.composedPath().some(s=>s.localName==="vaadin-grid-cell-content");this._setInteracting(i),this.__updateHorizontalScrollPosition()}_detectFocusedItemIndex(e){const{section:i,row:s}=this._getGridEventLocation(e);i===this.$.items&&(this._focusedItemIndex=s.index)}_updateGridSectionFocusTarget(e){if(!e)return;const i=this._getGridSectionFromFocusTarget(e),s=this.interacting&&i===this._activeRowGroup;e.tabIndex=s?-1:0}_preventScrollerRotatingCellFocus(e,i){e.index===this._focusedItemIndex&&this.hasAttribute("navigating")&&this._activeRowGroup===this.$.items&&(this._navigatingIsHidden=!0,this.toggleAttribute("navigating",!1)),i===this._focusedItemIndex&&this._navigatingIsHidden&&(this._navigatingIsHidden=!1,this.toggleAttribute("navigating",!0))}_getColumns(e,i){let s=this._columnTree.length-1;return e===this.$.header?s=i:e===this.$.footer&&(s=this._columnTree.length-1-i),this._columnTree[s]}__isValidFocusable(e){return this.$.table.contains(e)&&e.offsetHeight}_resetKeyboardNavigation(){if(["header","footer"].forEach(e=>{if(!this.__isValidFocusable(this[`_${e}Focusable`])){const i=[...this.$[e].children].find(o=>o.offsetHeight),s=i?[...i.children].find(o=>!o.hidden):null;i&&s&&(this[`_${e}Focusable`]=this.__getFocusable(i,s))}}),!this.__isValidFocusable(this._itemsFocusable)&&this.$.items.firstElementChild){const e=this.__getFirstVisibleItem(),i=e?[...e.children].find(s=>!s.hidden):null;i&&e&&(delete this._focusedColumnOrder,this._itemsFocusable=this.__getFocusable(e,i))}else this.__updateItemsFocusable()}_scrollHorizontallyToCell(e){if(e.hasAttribute("frozen")||e.hasAttribute("frozen-to-end")||this.__isDetailsCell(e))return;const i=e.getBoundingClientRect(),s=e.parentNode,o=Array.from(s.children).indexOf(e),n=this.$.table.getBoundingClientRect();let a=n.left,l=n.right;for(let d=o-1;d>=0;d--){const c=s.children[d];if(!(c.hasAttribute("hidden")||this.__isDetailsCell(c))&&(c.hasAttribute("frozen")||c.hasAttribute("frozen-to-end"))){a=c.getBoundingClientRect().right;break}}for(let d=o+1;d<s.children.length;d++){const c=s.children[d];if(!(c.hasAttribute("hidden")||this.__isDetailsCell(c))&&(c.hasAttribute("frozen")||c.hasAttribute("frozen-to-end"))){l=c.getBoundingClientRect().left;break}}i.left<a&&(this.$.table.scrollLeft+=Math.round(i.left-a)),i.right>l&&(this.$.table.scrollLeft+=Math.round(i.right-l))}_getGridEventLocation(e){const i=e.composedPath(),s=i.indexOf(this.$.table),o=s>=1?i[s-1]:null,n=s>=2?i[s-2]:null,a=s>=3?i[s-3]:null;return{section:o,row:n,cell:a}}_getGridSectionFromFocusTarget(e){return e===this._headerFocusable?this.$.header:e===this._itemsFocusable?this.$.items:e===this._footerFocusable?this.$.footer:null}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ml=r=>class extends r{static get properties(){return{detailsOpenedItems:{type:Array,value:()=>[]},rowDetailsRenderer:Function,_detailsCells:{type:Array}}}static get observers(){return["_detailsOpenedItemsChanged(detailsOpenedItems.*, rowDetailsRenderer)","_rowDetailsRendererChanged(rowDetailsRenderer)"]}ready(){super.ready(),this._detailsCellResizeObserver=new ResizeObserver(e=>{e.forEach(({target:i})=>{this._updateDetailsCellHeight(i.parentElement)}),this.__virtualizer.__adapter._resizeHandler()})}_rowDetailsRendererChanged(e){!e||this._columnTree&&Array.from(this.$.items.children).forEach(i=>{if(!i.querySelector("[part~=details-cell]")){this._updateRow(i,this._columnTree[this._columnTree.length-1]);const s=this._isDetailsOpened(i._item);this._toggleDetailsCell(i,s)}})}_detailsOpenedItemsChanged(e,i){e.path==="detailsOpenedItems.length"||!e.value||[...this.$.items.children].forEach(s=>{if(s.hasAttribute("details-opened")){this._updateItem(s,s._item);return}i&&this._isDetailsOpened(s._item)&&this._updateItem(s,s._item)})}_configureDetailsCell(e){e.setAttribute("part","cell details-cell"),e.toggleAttribute("frozen",!0),this._detailsCellResizeObserver.observe(e)}_toggleDetailsCell(e,i){const s=e.querySelector('[part~="details-cell"]');!s||(s.hidden=!i,!s.hidden&&this.rowDetailsRenderer&&(s._renderer=this.rowDetailsRenderer))}_updateDetailsCellHeight(e){const i=e.querySelector('[part~="details-cell"]');!i||(i.hidden?e.style.removeProperty("padding-bottom"):e.style.setProperty("padding-bottom",`${i.offsetHeight}px`))}_updateDetailsCellHeights(){[...this.$.items.children].forEach(e=>{this._updateDetailsCellHeight(e)})}_isDetailsOpened(e){return this.detailsOpenedItems&&this._getItemIndexInArray(e,this.detailsOpenedItems)!==-1}openItemDetails(e){this._isDetailsOpened(e)||(this.detailsOpenedItems=[...this.detailsOpenedItems,e])}closeItemDetails(e){this._isDetailsOpened(e)&&(this.detailsOpenedItems=this.detailsOpenedItems.filter(i=>!this._itemsEqual(i,e)))}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ht=new ResizeObserver(r=>{setTimeout(()=>{r.forEach(t=>{t.target.resizables?t.target.resizables.forEach(e=>{e._onResize(t.contentRect)}):t.target._onResize(t.contentRect)})})}),ho=N(r=>class extends r{connectedCallback(){if(super.connectedCallback(),ht.observe(this),this._observeParent){const e=this.parentNode instanceof ShadowRoot?this.parentNode.host:this.parentNode;e.resizables||(e.resizables=new Set,ht.observe(e)),e.resizables.add(this),this.__parent=e}}disconnectedCallback(){super.disconnectedCallback(),ht.unobserve(this);const e=this.__parent;if(this._observeParent&&e){const i=e.resizables;i&&(i.delete(this),i.size===0&&ht.unobserve(e)),this.__parent=null}}get _observeParent(){return!1}_onResize(e){}notifyResize(){console.warn("WARNING: Since Vaadin 23, notifyResize() is deprecated. The component uses a ResizeObserver internally and doesn't need to be explicitly notified of resizes.")}});/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Fl={SCROLLING:500},Hl=r=>class extends ho(r){static get properties(){return{_frozenCells:{type:Array,value:()=>[]},_frozenToEndCells:{type:Array,value:()=>[]},_rowWithFocusedElement:Element}}get _scrollTop(){return this.$.table.scrollTop}set _scrollTop(e){this.$.table.scrollTop=e}get _scrollLeft(){return this.$.table.scrollLeft}ready(){super.ready(),this.scrollTarget=this.$.table,this.$.items.addEventListener("focusin",e=>{const i=e.composedPath().indexOf(this.$.items);this._rowWithFocusedElement=e.composedPath()[i-1]}),this.$.items.addEventListener("focusout",()=>{this._rowWithFocusedElement=void 0}),this.$.table.addEventListener("scroll",()=>this._afterScroll())}_onResize(){this._updateOverflow(),this.__updateHorizontalScrollPosition()}scrollToIndex(e){e=Math.min(this._effectiveSize-1,Math.max(0,e)),this.__virtualizer.scrollToIndex(e),this.__scrollIntoViewport(e)}__scrollIntoViewport(e){const i=[...this.$.items.children].find(s=>s.index===e);if(i){const s=i.getBoundingClientRect(),o=this.$.footer.getBoundingClientRect().top,n=this.$.header.getBoundingClientRect().bottom;s.bottom>o?this.$.table.scrollTop+=s.bottom-o:s.top<n&&(this.$.table.scrollTop-=n-s.top)}}_scheduleScrolling(){this._scrollingFrame||(this._scrollingFrame=requestAnimationFrame(()=>this.$.scroller.toggleAttribute("scrolling",!0))),this._debounceScrolling=R.debounce(this._debounceScrolling,K.after(Fl.SCROLLING),()=>{cancelAnimationFrame(this._scrollingFrame),delete this._scrollingFrame,this.$.scroller.toggleAttribute("scrolling",!1)})}_afterScroll(){this.__updateHorizontalScrollPosition(),this.hasAttribute("reordering")||this._scheduleScrolling(),this.hasAttribute("navigating")||this._hideTooltip(!0),this._updateOverflow()}_updateOverflow(){let e="";const i=this.$.table;i.scrollTop<i.scrollHeight-i.clientHeight&&(e+=" bottom"),i.scrollTop>0&&(e+=" top");const s=this.__getNormalizedScrollLeft(i);s>0&&(e+=" start"),s<i.scrollWidth-i.clientWidth&&(e+=" end"),this.__isRTL&&(e=e.replace(/start|end/gi,o=>o==="start"?"end":"start")),i.scrollLeft<i.scrollWidth-i.clientWidth&&(e+=" right"),i.scrollLeft>0&&(e+=" left"),this._debounceOverflow=R.debounce(this._debounceOverflow,Ie,()=>{const o=e.trim();o.length>0&&this.getAttribute("overflow")!==o?this.setAttribute("overflow",o):o.length===0&&this.hasAttribute("overflow")&&this.removeAttribute("overflow")})}_frozenCellsChanged(){this._debouncerCacheElements=R.debounce(this._debouncerCacheElements,de,()=>{Array.from(this.shadowRoot.querySelectorAll('[part~="cell"]')).forEach(e=>{e.style.transform=""}),this._frozenCells=Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen]")),this._frozenToEndCells=Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen-to-end]")),this.__updateHorizontalScrollPosition()}),this._debounceUpdateFrozenColumn()}_debounceUpdateFrozenColumn(){this.__debounceUpdateFrozenColumn=R.debounce(this.__debounceUpdateFrozenColumn,de,()=>this._updateFrozenColumn())}_updateFrozenColumn(){if(!this._columnTree)return;const e=this._columnTree[this._columnTree.length-1].slice(0);e.sort((o,n)=>o._order-n._order);let i,s;for(let o=0;o<e.length;o++){const n=e[o];n._lastFrozen=!1,n._firstFrozenToEnd=!1,s===void 0&&n.frozenToEnd&&!n.hidden&&(s=o),n.frozen&&!n.hidden&&(i=o)}i!==void 0&&(e[i]._lastFrozen=!0),s!==void 0&&(e[s]._firstFrozenToEnd=!0)}__updateHorizontalScrollPosition(){const e=this.$.table.scrollWidth,i=this.$.table.clientWidth,s=Math.max(0,this.$.table.scrollLeft),o=this.__getNormalizedScrollLeft(this.$.table),n=`translate(${-s}px, 0)`;this.$.header.style.transform=n,this.$.footer.style.transform=n,this.$.items.style.transform=n;const a=this.__isRTL?o+i-e:s,l=`translate(${a}px, 0)`;for(let h=0;h<this._frozenCells.length;h++)this._frozenCells[h].style.transform=l;const c=`translate(${this.__isRTL?o:s+i-e}px, 0)`;for(let h=0;h<this._frozenToEndCells.length;h++)this._frozenToEndCells[h].style.transform=c;this.hasAttribute("navigating")&&this.__rowFocusMode&&this.$.table.style.setProperty("--_grid-horizontal-scroll-position",`${-a}px`)}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const $l=r=>class extends r{static get properties(){return{selectedItems:{type:Object,notify:!0,value:()=>[]},__selectedKeys:{type:Object,computed:"__computeSelectedKeys(itemIdPath, selectedItems.*)"}}}static get observers(){return["__selectedItemsChanged(itemIdPath, selectedItems.*)"]}_isSelected(e){return this.__selectedKeys.has(this.getItemId(e))}selectItem(e){this._isSelected(e)||(this.selectedItems=[...this.selectedItems,e])}deselectItem(e){this._isSelected(e)&&(this.selectedItems=this.selectedItems.filter(i=>!this._itemsEqual(i,e)))}_toggleItem(e){this._isSelected(e)?this.deselectItem(e):this.selectItem(e)}__selectedItemsChanged(){this.requestContentUpdate()}__computeSelectedKeys(e,i){const s=i.base||[],o=new Set;return s.forEach(n=>{o.add(this.getItemId(n))}),o}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let xs="prepend";const Bl=r=>class extends r{static get properties(){return{multiSort:{type:Boolean,value:!1},multiSortPriority:{type:String,value:()=>xs},multiSortOnShiftClick:{type:Boolean,value:!1},_sorters:{type:Array,value:()=>[]},_previousSorters:{type:Array,value:()=>[]}}}static setDefaultMultiSortPriority(e){xs=["append","prepend"].includes(e)?e:"prepend"}ready(){super.ready(),this.addEventListener("sorter-changed",this._onSorterChanged)}_onSorterChanged(e){const i=e.target;e.stopPropagation(),i._grid=this,this.__updateSorter(i,e.detail.shiftClick,e.detail.fromSorterClick),this.__applySorters()}__removeSorters(e){e.length!==0&&(this._sorters=this._sorters.filter(i=>e.indexOf(i)<0),this.multiSort&&this.__updateSortOrders(),this.__applySorters())}__updateSortOrders(){this._sorters.forEach((e,i)=>{e._order=this._sorters.length>1?i:null})}__appendSorter(e){e.direction?this._sorters.includes(e)||this._sorters.push(e):this._removeArrayItem(this._sorters,e),this.__updateSortOrders()}__prependSorter(e){this._removeArrayItem(this._sorters,e),e.direction&&this._sorters.unshift(e),this.__updateSortOrders()}__updateSorter(e,i,s){if(!(!e.direction&&this._sorters.indexOf(e)===-1)){if(e._order=null,this.multiSort&&(!this.multiSortOnShiftClick||!s)||this.multiSortOnShiftClick&&i)this.multiSortPriority==="append"?this.__appendSorter(e):this.__prependSorter(e);else if(e.direction||this.multiSortOnShiftClick){const o=this._sorters.filter(n=>n!==e);this._sorters=e.direction?[e]:[],o.forEach(n=>{n._order=null,n.direction=null})}}}__applySorters(){this.dataProvider&&this.isAttached&&JSON.stringify(this._previousSorters)!==JSON.stringify(this._mapSorters())&&this.clearCache(),this._a11yUpdateSorters(),this._previousSorters=this._mapSorters()}_mapSorters(){return this._sorters.map(e=>({path:e.path,direction:e.direction}))}_removeArrayItem(e,i){const s=e.indexOf(i);s>-1&&e.splice(s,1)}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Vl=r=>class extends r{static get properties(){return{cellClassNameGenerator:Function}}static get observers(){return["__cellClassNameGeneratorChanged(cellClassNameGenerator)"]}__cellClassNameGeneratorChanged(){this.generateCellClassNames()}generateCellClassNames(){Array.from(this.$.items.children).filter(e=>!e.hidden&&!e.hasAttribute("loading")).forEach(e=>this._generateCellClassNames(e,this.__getRowModel(e)))}_generateCellClassNames(e,i){Array.from(e.children).forEach(s=>{if(s.__generatedClasses&&s.__generatedClasses.forEach(o=>s.classList.remove(o)),this.cellClassNameGenerator){const o=this.cellClassNameGenerator(s._column,i);s.__generatedClasses=o&&o.split(" ").filter(n=>n.length>0),s.__generatedClasses&&s.__generatedClasses.forEach(n=>s.classList.add(n))}})}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class We extends V(F(Sl(El(zl(Cl(Hl($l(Bl(Ml(Dl(yl(Ll(Il(Tl(Y(kl(Ol(Vl(Ri(O)))))))))))))))))))){static get template(){return z`
      <div
        id="scroller"
        safari$="[[_safari]]"
        ios$="[[_ios]]"
        loading$="[[loading]]"
        column-reordering-allowed$="[[columnReorderingAllowed]]"
      >
        <table id="table" role="treegrid" aria-multiselectable="true" tabindex="0">
          <caption id="sizer" part="row"></caption>
          <thead id="header" role="rowgroup"></thead>
          <tbody id="items" role="rowgroup"></tbody>
          <tfoot id="footer" role="rowgroup"></tfoot>
        </table>

        <div part="reorder-ghost"></div>
      </div>

      <slot name="tooltip"></slot>

      <div id="focusexit" tabindex="0"></div>
    `}static get is(){return"vaadin-grid"}static get observers(){return["_columnTreeChanged(_columnTree, _columnTree.*)","_effectiveSizeChanged(_effectiveSize, __virtualizer, _hasData, _columnTree)"]}static get properties(){return{_safari:{type:Boolean,value:to},_ios:{type:Boolean,value:Xe},_firefox:{type:Boolean,value:_l},_android:{type:Boolean,value:vs},_touchDevice:{type:Boolean,value:Ze},allRowsVisible:{type:Boolean,value:!1,reflectToAttribute:!0},_recalculateColumnWidthOnceLoadingFinished:{type:Boolean,value:!0},isAttached:{value:!1},__gridElement:{type:Boolean,value:!0}}}constructor(){super(),this.addEventListener("animationend",this._onAnimationEnd)}connectedCallback(){super.connectedCallback(),this.isAttached=!0,this.recalculateColumnWidths()}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1,this._hideTooltip(!0)}__getFirstVisibleItem(){return this._getVisibleRows().find(t=>this._isInViewport(t))}get _firstVisibleIndex(){const t=this.__getFirstVisibleItem();return t?t.index:void 0}__getLastVisibleItem(){return this._getVisibleRows().reverse().find(t=>this._isInViewport(t))}get _lastVisibleIndex(){const t=this.__getLastVisibleItem();return t?t.index:void 0}_isInViewport(t){const e=this.$.table.getBoundingClientRect(),i=t.getBoundingClientRect(),s=this.$.header.getBoundingClientRect().height,o=this.$.footer.getBoundingClientRect().height;return i.bottom>e.top+s&&i.top<e.bottom-o}_getVisibleRows(){return Array.from(this.$.items.children).filter(t=>!t.hidden).sort((t,e)=>t.index-e.index)}ready(){super.ready(),this.__virtualizer=new so({createElements:this._createScrollerRows.bind(this),updateElement:this._updateScrollerItem.bind(this),scrollContainer:this.$.items,scrollTarget:this.$.table,reorderElements:!0}),new ResizeObserver(()=>setTimeout(()=>this.__updateFooterPositioning())).observe(this.$.footer),Nt(this),this._tooltipController=new Pe(this),this.addController(this._tooltipController),this._tooltipController.setManual(!0)}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i),t==="dir"&&(this.__isRTL=i==="rtl")}__getBodyCellCoordinates(t){if(this.$.items.contains(t)&&t.localName==="td")return{item:t.parentElement._item,column:t._column}}__focusBodyCell({item:t,column:e}){const i=this._getVisibleRows().find(o=>o._item===t),s=i&&[...i.children].find(o=>o._column===e);s&&s.focus()}_effectiveSizeChanged(t,e,i,s){if(e&&i&&s){const o=this.shadowRoot.activeElement,n=this.__getBodyCellCoordinates(o);e.size=t,e.update(),e.flush(),n&&o.parentElement.hidden&&this.__focusBodyCell(n),this._resetKeyboardNavigation()}}__hasRowsWithClientHeight(){return!!Array.from(this.$.items.children).filter(t=>t.clientHeight).length}__itemsReceived(){this._recalculateColumnWidthOnceLoadingFinished&&!this._cache.isLoading()&&this.__hasRowsWithClientHeight()&&(this._recalculateColumnWidthOnceLoadingFinished=!1,this.recalculateColumnWidths())}__getIntrinsicWidth(t){if(this.__intrinsicWidthCache.has(t))return this.__intrinsicWidthCache.get(t);const e=this.__calculateIntrinsicWidth(t);return this.__intrinsicWidthCache.set(t,e),e}__calculateIntrinsicWidth(t){const e=t.width,i=t.flexGrow;t.width="auto",t.flexGrow=0;const s=t._allCells.filter(o=>!this.$.items.contains(o)||this._isInViewport(o.parentElement)).reduce((o,n)=>Math.max(o,n.offsetWidth+1),0);return t.flexGrow=i,t.width=e,s}__getDistributedWidth(t,e){if(t==null||t===this)return 0;const i=Math.max(this.__getIntrinsicWidth(t),this.__getDistributedWidth(t.parentElement,t));if(!e)return i;const s=t,o=i,n=s._visibleChildColumns.map(c=>this.__getIntrinsicWidth(c)).reduce((c,h)=>c+h,0),a=Math.max(0,o-n),d=this.__getIntrinsicWidth(e)/n*a;return this.__getIntrinsicWidth(e)+d}_recalculateColumnWidths(t){this.__virtualizer.flush(),[...this.$.header.children,...this.$.footer.children].forEach(e=>{e.__debounceUpdateHeaderFooterRowVisibility&&e.__debounceUpdateHeaderFooterRowVisibility.flush()}),this._debouncerHiddenChanged&&this._debouncerHiddenChanged.flush(),this.__intrinsicWidthCache=new Map,t.forEach(e=>{e.width=`${this.__getDistributedWidth(e)}px`})}recalculateColumnWidths(){if(!!this._columnTree)if(this._cache.isLoading())this._recalculateColumnWidthOnceLoadingFinished=!0;else{const t=this._getColumns().filter(e=>!e.hidden&&e.autoWidth);this._recalculateColumnWidths(t)}}_createScrollerRows(t){const e=[];for(let i=0;i<t;i++){const s=document.createElement("tr");s.setAttribute("part","row"),s.setAttribute("role","row"),s.setAttribute("tabindex","-1"),this._columnTree&&this._updateRow(s,this._columnTree[this._columnTree.length-1],"body",!1,!0),e.push(s)}return this._columnTree&&this._columnTree[this._columnTree.length-1].forEach(i=>i.isConnected&&i.notifyPath&&i.notifyPath("_cells.*",i._cells)),Jr(this,()=>{this._updateFirstAndLastColumn(),this._resetKeyboardNavigation(),this._afterScroll(),this.__itemsReceived()}),e}_createCell(t,e){const s=`vaadin-grid-cell-content-${this._contentIndex=this._contentIndex+1||0}`,o=document.createElement("vaadin-grid-cell-content");o.setAttribute("slot",s);const n=document.createElement(t);n.id=s.replace("-content-","-"),n.setAttribute("role",t==="td"?"gridcell":"columnheader"),!vs&&!Xe&&(n.addEventListener("mouseenter",l=>{this.$.scroller.hasAttribute("scrolling")||this._showTooltip(l)}),n.addEventListener("mouseleave",()=>{this._hideTooltip()}),n.addEventListener("mousedown",()=>{this._hideTooltip(!0)}));const a=document.createElement("slot");if(a.setAttribute("name",s),e&&e._focusButtonMode){const l=document.createElement("div");l.setAttribute("role","button"),l.setAttribute("tabindex","-1"),n.appendChild(l),n._focusButton=l,n.focus=function(){n._focusButton.focus()},l.appendChild(a)}else n.setAttribute("tabindex","-1"),n.appendChild(a);return n._content=o,o.addEventListener("mousedown",()=>{if(pl){const l=d=>{const c=o.contains(this.getRootNode().activeElement),h=d.composedPath().includes(o);!c&&h&&n.focus(),document.removeEventListener("mouseup",l,!0)};document.addEventListener("mouseup",l,!0)}else setTimeout(()=>{o.contains(this.getRootNode().activeElement)||n.focus()})}),n}_updateRow(t,e,i,s,o){i=i||"body";const n=document.createDocumentFragment();Array.from(t.children).forEach(a=>{a._vacant=!0}),t.innerHTML="",e.filter(a=>!a.hidden).forEach((a,l,d)=>{let c;if(i==="body"){if(a._cells=a._cells||[],c=a._cells.find(h=>h._vacant),c||(c=this._createCell("td",a),a._cells.push(c)),c.setAttribute("part","cell body-cell"),t.appendChild(c),l===d.length-1&&this.rowDetailsRenderer){this._detailsCells=this._detailsCells||[];const h=this._detailsCells.find(m=>m._vacant)||this._createCell("td");this._detailsCells.indexOf(h)===-1&&this._detailsCells.push(h),h._content.parentElement||n.appendChild(h._content),this._configureDetailsCell(h),t.appendChild(h),this._a11ySetRowDetailsCell(t,h),h._vacant=!1}a.notifyPath&&!o&&a.notifyPath("_cells.*",a._cells)}else{const h=i==="header"?"th":"td";s||a.localName==="vaadin-grid-column-group"?(c=a[`_${i}Cell`]||this._createCell(h),c._column=a,t.appendChild(c),a[`_${i}Cell`]=c):(a._emptyCells=a._emptyCells||[],c=a._emptyCells.find(m=>m._vacant)||this._createCell(h),c._column=a,t.appendChild(c),a._emptyCells.indexOf(c)===-1&&a._emptyCells.push(c)),c.setAttribute("part",`cell ${i}-cell`)}c._content.parentElement||n.appendChild(c._content),c._vacant=!1,c._column=a}),i!=="body"&&this.__debounceUpdateHeaderFooterRowVisibility(t),this.appendChild(n),this._frozenCellsChanged(),this._updateFirstAndLastColumnForRow(t)}__debounceUpdateHeaderFooterRowVisibility(t){t.__debounceUpdateHeaderFooterRowVisibility=R.debounce(t.__debounceUpdateHeaderFooterRowVisibility,de,()=>this.__updateHeaderFooterRowVisibility(t))}__updateHeaderFooterRowVisibility(t){if(!t)return;const e=Array.from(t.children).filter(i=>{const s=i._column;if(s._emptyCells&&s._emptyCells.indexOf(i)>-1)return!1;if(t.parentElement===this.$.header){if(s.headerRenderer)return!0;if(s.header===null)return!1;if(s.path||s.header!==void 0)return!0}else if(s.footerRenderer)return!0;return!1});t.hidden!==!e.length&&(t.hidden=!e.length),this._resetKeyboardNavigation()}_updateScrollerItem(t,e){this._preventScrollerRotatingCellFocus(t,e),this._columnTree&&(t.toggleAttribute("first",e===0),t.toggleAttribute("last",e===this._effectiveSize-1),t.toggleAttribute("odd",e%2),this._a11yUpdateRowRowindex(t,e),this._getItem(e,t))}_columnTreeChanged(t){this._renderColumnTree(t),this.recalculateColumnWidths()}_renderColumnTree(t){for(Array.from(this.$.items.children).forEach(e=>this._updateRow(e,t[t.length-1],null,!1,!0));this.$.header.children.length<t.length;){const e=document.createElement("tr");e.setAttribute("part","row"),e.setAttribute("role","row"),e.setAttribute("tabindex","-1"),this.$.header.appendChild(e);const i=document.createElement("tr");i.setAttribute("part","row"),i.setAttribute("role","row"),i.setAttribute("tabindex","-1"),this.$.footer.appendChild(i)}for(;this.$.header.children.length>t.length;)this.$.header.removeChild(this.$.header.firstElementChild),this.$.footer.removeChild(this.$.footer.firstElementChild);Array.from(this.$.header.children).forEach((e,i)=>this._updateRow(e,t[i],"header",i===t.length-1)),Array.from(this.$.footer.children).forEach((e,i)=>this._updateRow(e,t[t.length-1-i],"footer",i===0)),this._updateRow(this.$.sizer,t[t.length-1]),this._resizeHandler(),this._frozenCellsChanged(),this._updateFirstAndLastColumn(),this._resetKeyboardNavigation(),this._a11yUpdateHeaderRows(),this._a11yUpdateFooterRows(),this.__updateFooterPositioning(),this.generateCellClassNames()}__updateFooterPositioning(){this._firefox&&parseFloat(navigator.userAgent.match(/Firefox\/(\d{2,3}.\d)/)[1])<99&&(this.$.items.style.paddingBottom=0,this.allRowsVisible||(this.$.items.style.paddingBottom=`${this.$.footer.offsetHeight}px`))}_updateItem(t,e){t._item=e;const i=this.__getRowModel(t);this._toggleDetailsCell(t,i.detailsOpened),this._a11yUpdateRowLevel(t,i.level),this._a11yUpdateRowSelected(t,i.selected),t.toggleAttribute("expanded",i.expanded),t.toggleAttribute("selected",i.selected),t.toggleAttribute("details-opened",i.detailsOpened),this._generateCellClassNames(t,i),this._filterDragAndDrop(t,i),Array.from(t.children).forEach(s=>{if(s._renderer){const o=s._column||this;s._renderer.call(o,s._content,o,i)}}),this._updateDetailsCellHeight(t),this._a11yUpdateRowExpanded(t,i.expanded)}_resizeHandler(){this._updateDetailsCellHeights(),this.__updateFooterPositioning(),this.__updateHorizontalScrollPosition()}_onAnimationEnd(t){t.animationName.indexOf("vaadin-grid-appear")===0&&(t.stopPropagation(),this.__itemsReceived(),requestAnimationFrame(()=>{this.__scrollToPendingIndex()}))}__getRowModel(t){return{index:t.index,item:t._item,level:this._getIndexLevel(t.index),expanded:this._isExpanded(t._item),selected:this._isSelected(t._item),detailsOpened:!!this.rowDetailsRenderer&&this._isDetailsOpened(t._item)}}_showTooltip(t){const e=this._tooltipController.node;e&&e.isConnected&&(this._tooltipController.setTarget(t.target),this._tooltipController.setContext(this.getEventContext(t)),e._stateController.open({focus:t.type==="focusin",hover:t.type==="mouseenter"}))}_hideTooltip(t){const e=this._tooltipController.node;e&&e._stateController.close(t)}requestContentUpdate(){this._columnTree&&(this._columnTree.forEach(t=>{t.forEach(e=>{e._renderHeaderAndFooter&&e._renderHeaderAndFooter()})}),this.__updateVisibleRows())}__updateVisibleRows(t,e){this.__virtualizer&&this.__virtualizer.update(t,e)}notifyResize(){console.warn("WARNING: Since Vaadin 22, notifyResize() is deprecated. The component uses a ResizeObserver internally and doesn't need to be explicitly notified of resizes.")}}customElements.define(We.is,We);A("vaadin-app-layout",x`
    [part='navbar']::before {
      background: var(--lumo-base-color) linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
    }

    :host(:not([dir='rtl']):not([overlay])) [part='drawer'] {
      border-right: 1px solid var(--lumo-contrast-10pct);
    }

    :host([dir='rtl']:not([overlay])) [part='drawer'] {
      border-left: 1px solid var(--lumo-contrast-10pct);
    }

    :host([overlay]) [part='drawer']::before {
      background: var(--lumo-base-color);
    }

    [part='navbar']::before,
    :host([overlay]) [part='drawer']::before {
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      z-index: -1;
    }

    :host([overlay]) [part='drawer']::before {
      background: var(--lumo-base-color);
      height: var(--_vaadin-app-layout-drawer-scroll-size, 100%);
    }

    [part='backdrop'] {
      background-color: var(--lumo-shade-20pct);
      opacity: 1;
    }

    [part] ::slotted(h2),
    [part] ::slotted(h3),
    [part] ::slotted(h4) {
      margin-top: var(--lumo-space-xs) !important;
      margin-bottom: var(--lumo-space-xs) !important;
    }

    @supports (-webkit-backdrop-filter: blur(1px)) or (backdrop-filter: blur(1px)) {
      [part='navbar']::before {
        opacity: 0.8;
      }

      [part='navbar'] {
        -webkit-backdrop-filter: blur(24px);
        backdrop-filter: blur(24px);
      }

      :host([overlay]) [part='drawer']::before {
        opacity: 0.9;
      }

      :host([overlay]) [part='drawer'] {
        -webkit-backdrop-filter: blur(24px);
        backdrop-filter: blur(24px);
      }
    }
  `,{moduleId:"lumo-app-layout"});const uo=document.createElement("template");uo.innerHTML=`
  <style>
    /* Use units so that the values can be used in calc() */
    html {
      --safe-area-inset-top: env(safe-area-inset-top, 0px);
      --safe-area-inset-right: env(safe-area-inset-right, 0px);
      --safe-area-inset-bottom: env(safe-area-inset-bottom, 0px);
      --safe-area-inset-left: env(safe-area-inset-left, 0px);
    }
  </style>
`;document.head.appendChild(uo.content);/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function po(){if(Xe){const r=window.innerHeight,e=window.innerWidth>r,i=document.documentElement.clientHeight;e&&i>r?document.documentElement.style.setProperty("--vaadin-viewport-offset-bottom",`${i-r}px`):document.documentElement.style.setProperty("--vaadin-viewport-offset-bottom","")}}po();window.addEventListener("resize",po);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Kt=[];class _o{constructor(t){this.host=t,this.__trapNode=null,this.__onKeyDown=this.__onKeyDown.bind(this)}hostConnected(){document.addEventListener("keydown",this.__onKeyDown)}hostDisconnected(){document.removeEventListener("keydown",this.__onKeyDown)}trapFocus(t){if(this.__trapNode=t,this.__focusableElements.length===0)throw this.__trapNode=null,new Error("The trap node should have at least one focusable descendant or be focusable itself.");Kt.push(this),this.__focusedElementIndex===-1&&this.__focusableElements[0].focus()}releaseFocus(){this.__trapNode=null,Kt.pop()}__onKeyDown(t){if(!!this.__trapNode&&this===Array.from(Kt).pop()&&t.key==="Tab"){t.preventDefault();const e=t.shiftKey;this.__focusNextElement(e)}}__focusNextElement(t=!1){const e=this.__focusableElements,i=t?-1:1,s=this.__focusedElementIndex,o=(e.length+s+i)%e.length,n=e[o];n.focus(),n.localName==="input"&&n.select()}get __focusableElements(){return nl(this.__trapNode)}get __focusedElementIndex(){const t=this.__focusableElements;return t.indexOf(t.filter(Rt).pop())}}/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class As extends V(F(Y(O))){static get template(){return z`
      <style>
        :host {
          display: block;
          box-sizing: border-box;
          height: 100%;
          --vaadin-app-layout-transition: 200ms;
          transition: padding var(--vaadin-app-layout-transition);
          --vaadin-app-layout-touch-optimized: false;
          --vaadin-app-layout-navbar-offset-top: var(--_vaadin-app-layout-navbar-offset-size);
          --vaadin-app-layout-navbar-offset-bottom: var(--_vaadin-app-layout-navbar-offset-size-bottom);
          padding-top: var(--vaadin-app-layout-navbar-offset-top);
          padding-bottom: var(--vaadin-app-layout-navbar-offset-bottom);
          padding-left: var(--vaadin-app-layout-navbar-offset-left);
        }

        :host([dir='rtl']) {
          padding-left: 0;
          padding-right: var(--vaadin-app-layout-navbar-offset-left);
        }

        :host([hidden]),
        [hidden] {
          display: none !important;
        }

        :host([no-anim]) {
          --vaadin-app-layout-transition: none !important;
        }

        :host([drawer-opened]) {
          --vaadin-app-layout-drawer-offset-left: var(--_vaadin-app-layout-drawer-offset-size);
        }

        :host([overlay]) {
          --vaadin-app-layout-drawer-offset-left: 0;
          --vaadin-app-layout-navbar-offset-left: 0;
        }

        :host(:not([no-scroll])) [content] {
          overflow: auto;
        }

        [content] {
          height: 100%;
        }

        @media (pointer: coarse) and (max-width: 800px) and (min-height: 500px) {
          :host {
            --vaadin-app-layout-touch-optimized: true;
          }
        }

        [part='navbar'],
        [part='navbar']::before {
          position: fixed;
          display: flex;
          align-items: center;
          top: 0;
          right: 0;
          left: 0;
          transition: left var(--vaadin-app-layout-transition);
          padding-top: var(--safe-area-inset-top);
          padding-left: var(--safe-area-inset-left);
          padding-right: var(--safe-area-inset-right);
          z-index: 1;
        }

        :host(:not([dir='rtl'])[primary-section='drawer'][drawer-opened]:not([overlay])) [part='navbar'] {
          left: var(--vaadin-app-layout-drawer-offset-left, 0);
        }

        :host([dir='rtl'][primary-section='drawer'][drawer-opened]:not([overlay])) [part='navbar'] {
          right: var(--vaadin-app-layout-drawer-offset-left, 0);
        }

        :host([primary-section='drawer']) [part='drawer'] {
          top: 0;
        }

        [part='navbar'][bottom] {
          top: auto;
          bottom: 0;
          padding-bottom: var(--safe-area-inset-bottom);
        }

        [part='drawer'] {
          overflow: auto;
          position: fixed;
          top: var(--vaadin-app-layout-navbar-offset-top, 0);
          right: auto;
          bottom: var(--vaadin-app-layout-navbar-offset-bottom, var(--vaadin-viewport-offset-bottom, 0));
          left: var(--vaadin-app-layout-navbar-offset-left, 0);
          transition: transform var(--vaadin-app-layout-transition), visibility var(--vaadin-app-layout-transition);
          transform: translateX(-100%);
          max-width: 90%;
          width: 16em;
          box-sizing: border-box;
          padding: var(--safe-area-inset-top) 0 var(--safe-area-inset-bottom) var(--safe-area-inset-left);
          outline: none;
          /* The drawer should be inaccessible by the tabbing navigation when it is closed. */
          visibility: hidden;
        }

        :host([drawer-opened]) [part='drawer'] {
          /* The drawer should be accessible by the tabbing navigation when it is opened. */
          visibility: visible;
          transform: translateX(0%);
          touch-action: manipulation;
        }

        [part='backdrop'] {
          background-color: #000;
          opacity: 0.3;
        }

        :host(:not([drawer-opened])) [part='backdrop'] {
          opacity: 0;
        }

        :host([overlay]) [part='backdrop'] {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          pointer-events: none;
          transition: opacity var(--vaadin-app-layout-transition);
          -webkit-tap-highlight-color: transparent;
        }

        :host([overlay]) [part='drawer'] {
          top: 0;
          bottom: 0;
        }

        :host([overlay]) [part='drawer'],
        :host([overlay]) [part='backdrop'] {
          z-index: 2;
        }

        :host([drawer-opened][overlay]) [part='backdrop'] {
          pointer-events: auto;
          touch-action: manipulation;
        }

        :host([dir='rtl']) [part='drawer'] {
          left: auto;
          right: var(--vaadin-app-layout-navbar-offset-start, 0);
          transform: translateX(100%);
        }

        :host([dir='rtl']) [part='navbar'],
        :host([dir='rtl']) [part='navbar']::before {
          transition: right var(--vaadin-app-layout-transition);
        }

        :host([dir='rtl'][drawer-opened]) [part='drawer'] {
          transform: translateX(0%);
        }

        :host(:not([dir='rtl'])[drawer-opened]:not([overlay])) {
          padding-left: var(--vaadin-app-layout-drawer-offset-left);
        }

        :host([dir='rtl'][drawer-opened]:not([overlay])) {
          padding-right: var(--vaadin-app-layout-drawer-offset-left);
        }

        @media (max-width: 800px), (max-height: 600px) {
          :host {
            --vaadin-app-layout-drawer-overlay: true;
          }

          [part='drawer'] {
            width: 20em;
          }
        }
      </style>
      <div part="navbar" id="navbarTop">
        <slot name="navbar"></slot>
      </div>
      <div part="backdrop" on-click="_onBackdropClick" on-touchend="_onBackdropTouchend"></div>
      <div part="drawer" id="drawer" on-keydown="__onDrawerKeyDown">
        <slot name="drawer" id="drawerSlot"></slot>
      </div>
      <div content>
        <slot></slot>
      </div>
      <div part="navbar" id="navbarBottom" bottom hidden>
        <slot name="navbar-bottom"></slot>
      </div>
      <div hidden><slot id="touchSlot" name="navbar touch-optimized"></slot></div>
    `}static get is(){return"vaadin-app-layout"}static get properties(){return{i18n:{type:Object,observer:"__i18nChanged",value:()=>({drawer:"Drawer"})},primarySection:{type:String,value:"navbar",notify:!0,reflectToAttribute:!0,observer:"__primarySectionChanged"},drawerOpened:{type:Boolean,notify:!0,value:!0,reflectToAttribute:!0,observer:"__drawerOpenedChanged"},overlay:{type:Boolean,notify:!0,readOnly:!0,value:!1,reflectToAttribute:!0},closeDrawerOn:{type:String,value:"vaadin-router-location-changed",observer:"_closeDrawerOnChanged"}}}static dispatchCloseOverlayDrawerEvent(){window.dispatchEvent(new CustomEvent("close-overlay-drawer"))}constructor(){super(),this.__boundResizeListener=this._resize.bind(this),this.__drawerToggleClickListener=this._drawerToggleClick.bind(this),this.__closeOverlayDrawerListener=this.__closeOverlayDrawer.bind(this),this.__trapFocusInDrawer=this.__trapFocusInDrawer.bind(this),this.__releaseFocusFromDrawer=this.__releaseFocusFromDrawer.bind(this),this.__focusTrapController=new _o(this)}connectedCallback(){super.connectedCallback(),this._blockAnimationUntilAfterNextRender(),window.addEventListener("resize",this.__boundResizeListener),this.addEventListener("drawer-toggle-click",this.__drawerToggleClickListener),Jr(this,this._afterFirstRender),this._updateTouchOptimizedMode();const t=this.$.navbarTop.firstElementChild;this._navbarChildObserver=new $(t,()=>{this._updateTouchOptimizedMode()}),this._touchChildObserver=new $(this.$.touchSlot,()=>{this._updateTouchOptimizedMode()}),this._drawerChildObserver=new $(this.$.drawerSlot,()=>{this._updateDrawerSize()}),this._updateDrawerSize(),this._updateOverlayMode(),this._navbarSizeObserver=new ResizeObserver(()=>{this._blockAnimationUntilAfterNextRender(),this._updateOffsetSize()}),this._navbarSizeObserver.observe(this.$.navbarTop),this._navbarSizeObserver.observe(this.$.navbarBottom),window.addEventListener("close-overlay-drawer",this.__closeOverlayDrawerListener)}ready(){super.ready(),this.addController(this.__focusTrapController),this.__setAriaExpanded()}disconnectedCallback(){super.disconnectedCallback(),this._navbarChildObserver&&this._navbarChildObserver.disconnect(),this._drawerChildObserver&&this._drawerChildObserver.disconnect(),this._touchChildObserver&&this._touchChildObserver.disconnect(),window.removeEventListener("resize",this.__boundResizeListener),this.removeEventListener("drawer-toggle-click",this.__drawerToggleClickListener),window.removeEventListener("close-overlay-drawer",this.__drawerToggleClickListener)}__primarySectionChanged(t){["navbar","drawer"].includes(t)||this.set("primarySection","navbar")}__drawerOpenedChanged(t,e){this.overlay&&(t?(this._updateDrawerHeight(),this.__trapFocusInDrawer()):e&&this.__releaseFocusFromDrawer()),this.__setAriaExpanded()}__i18nChanged(){this.__updateDrawerAriaAttributes()}_afterFirstRender(){this._blockAnimationUntilAfterNextRender(),this._updateOffsetSize()}_drawerToggleClick(t){t.stopPropagation(),this.drawerOpened=!this.drawerOpened}__closeOverlayDrawer(){this.overlay&&(this.drawerOpened=!1)}__setAriaExpanded(){const t=this.querySelector("vaadin-drawer-toggle");t&&t.setAttribute("aria-expanded",this.drawerOpened)}_updateDrawerSize(){const t=this.querySelectorAll("[slot=drawer]").length,e=this.$.drawer;t===0?e.setAttribute("hidden",""):e.removeAttribute("hidden"),this._updateOffsetSize()}_resize(){this._blockAnimationUntilAfterNextRender(),this._updateTouchOptimizedMode(),this._updateOverlayMode()}_updateOffsetSize(){const e=this.$.navbarTop.getBoundingClientRect(),s=this.$.navbarBottom.getBoundingClientRect();this.style.setProperty("--_vaadin-app-layout-navbar-offset-size",`${e.height}px`),this.style.setProperty("--_vaadin-app-layout-navbar-offset-size-bottom",`${s.height}px`);const n=this.$.drawer.getBoundingClientRect();this.style.setProperty("--_vaadin-app-layout-drawer-offset-size",`${n.width}px`)}_updateDrawerHeight(){const{scrollHeight:t,offsetHeight:e}=this.$.drawer,i=t>e?`${t}px`:"100%";this.style.setProperty("--_vaadin-app-layout-drawer-scroll-size",i)}_updateOverlayMode(){const t=this._getCustomPropertyValue("--vaadin-app-layout-drawer-overlay")==="true";!this.overlay&&t&&(this._drawerStateSaved=this.drawerOpened,this.drawerOpened=!1),this._setOverlay(t),!this.overlay&&this._drawerStateSaved&&(this.drawerOpened=this._drawerStateSaved,this._drawerStateSaved=null),this._updateDrawerHeight(),this.__updateDrawerAriaAttributes()}__updateDrawerAriaAttributes(){const t=this.$.drawer;this.overlay?(t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.setAttribute("aria-label",this.i18n.drawer)):(t.removeAttribute("role"),t.removeAttribute("aria-modal"),t.removeAttribute("aria-label"))}__drawerTransitionComplete(){return new Promise(t=>{if(this._getCustomPropertyValue("--vaadin-app-layout-transition")==="none"){t();return}this.$.drawer.addEventListener("transitionend",t,{once:!0})})}async __trapFocusInDrawer(){await this.__drawerTransitionComplete(),this.drawerOpened&&(this.$.drawer.setAttribute("tabindex","0"),this.__focusTrapController.trapFocus(this.$.drawer))}async __releaseFocusFromDrawer(){if(await this.__drawerTransitionComplete(),this.drawerOpened)return;this.__focusTrapController.releaseFocus(),this.$.drawer.removeAttribute("tabindex");const t=this.querySelector("vaadin-drawer-toggle");t&&(t.focus(),t.setAttribute("focus-ring","focus"))}__onDrawerKeyDown(t){t.key==="Escape"&&this.overlay&&(this.drawerOpened=!1)}_closeDrawerOnChanged(t,e){e&&window.removeEventListener(e,this.__closeOverlayDrawerListener),t&&window.addEventListener(t,this.__closeOverlayDrawerListener)}_onBackdropClick(){this._close()}_onBackdropTouchend(t){t.preventDefault(),this._close()}_close(){this.drawerOpened=!1}_getCustomPropertyValue(t){return(getComputedStyle(this).getPropertyValue(t)||"").trim().toLowerCase()}_updateTouchOptimizedMode(){const t=this._getCustomPropertyValue("--vaadin-app-layout-touch-optimized")==="true",e=this.querySelectorAll('[slot*="navbar"]');e.length>0&&Array.from(e).forEach(i=>{i.getAttribute("slot").indexOf("touch-optimized")>-1&&(i.__touchOptimized=!0),t&&i.__touchOptimized?i.setAttribute("slot","navbar-bottom"):i.setAttribute("slot","navbar")}),this.$.navbarTop.querySelector("[name=navbar]").assignedNodes().length===0?this.$.navbarTop.setAttribute("hidden",""):this.$.navbarTop.removeAttribute("hidden"),t?this.$.navbarBottom.removeAttribute("hidden"):this.$.navbarBottom.setAttribute("hidden",""),this._updateOffsetSize()}_blockAnimationUntilAfterNextRender(){this.setAttribute("no-anim",""),eo(this,()=>{this.removeAttribute("no-anim")})}}customElements.define(As.is,As);const Mi=x`
  :host {
    /* Sizing */
    --lumo-button-size: var(--lumo-size-m);
    min-width: calc(var(--lumo-button-size) * 2);
    height: var(--lumo-button-size);
    padding: 0 calc(var(--lumo-button-size) / 3 + var(--lumo-border-radius-m) / 2);
    margin: var(--lumo-space-xs) 0;
    box-sizing: border-box;
    /* Style */
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    font-weight: 500;
    color: var(--_lumo-button-color, var(--lumo-primary-text-color));
    background-color: var(--_lumo-button-background-color, var(--lumo-contrast-5pct));
    border-radius: var(--lumo-border-radius-m);
    cursor: var(--lumo-clickable-cursor);
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Set only for the internal parts so we don’t affect the host vertical alignment */
  [part='label'],
  [part='prefix'],
  [part='suffix'] {
    line-height: var(--lumo-line-height-xs);
  }

  [part='label'] {
    padding: calc(var(--lumo-button-size) / 6) 0;
  }

  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-button-size: var(--lumo-size-s);
  }

  :host([theme~='large']) {
    font-size: var(--lumo-font-size-l);
    --lumo-button-size: var(--lumo-size-l);
  }

  /* For interaction states */
  :host::before,
  :host::after {
    content: '';
    /* We rely on the host always being relative */
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: currentColor;
    border-radius: inherit;
    opacity: 0;
    pointer-events: none;
  }

  /* Hover */

  @media (any-hover: hover) {
    :host(:hover)::before {
      opacity: 0.02;
    }
  }

  /* Active */

  :host::after {
    transition: opacity 1.4s, transform 0.1s;
    filter: blur(8px);
  }

  :host([active])::before {
    opacity: 0.05;
    transition-duration: 0s;
  }

  :host([active])::after {
    opacity: 0.1;
    transition-duration: 0s, 0s;
    transform: scale(0);
  }

  /* Keyboard focus */

  :host([focus-ring]) {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  :host([theme~='primary'][focus-ring]) {
    box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);
  }

  /* Types (primary, tertiary, tertiary-inline */

  :host([theme~='tertiary']),
  :host([theme~='tertiary-inline']) {
    background-color: transparent !important;
    min-width: 0;
  }

  :host([theme~='tertiary']) {
    padding: 0 calc(var(--lumo-button-size) / 6);
  }

  :host([theme~='tertiary-inline'])::before {
    display: none;
  }

  :host([theme~='tertiary-inline']) {
    margin: 0;
    height: auto;
    padding: 0;
    line-height: inherit;
    font-size: inherit;
  }

  :host([theme~='tertiary-inline']) [part='label'] {
    padding: 0;
    overflow: visible;
    line-height: inherit;
  }

  :host([theme~='primary']) {
    background-color: var(--_lumo-button-primary-background-color, var(--lumo-primary-color));
    color: var(--_lumo-button-primary-color, var(--lumo-primary-contrast-color));
    font-weight: 600;
    min-width: calc(var(--lumo-button-size) * 2.5);
  }

  :host([theme~='primary'])::before {
    background-color: black;
  }

  @media (any-hover: hover) {
    :host([theme~='primary']:hover)::before {
      opacity: 0.05;
    }
  }

  :host([theme~='primary'][active])::before {
    opacity: 0.1;
  }

  :host([theme~='primary'][active])::after {
    opacity: 0.2;
  }

  /* Colors (success, error, contrast) */

  :host([theme~='success']) {
    color: var(--lumo-success-text-color);
  }

  :host([theme~='success'][theme~='primary']) {
    background-color: var(--lumo-success-color);
    color: var(--lumo-success-contrast-color);
  }

  :host([theme~='error']) {
    color: var(--lumo-error-text-color);
  }

  :host([theme~='error'][theme~='primary']) {
    background-color: var(--lumo-error-color);
    color: var(--lumo-error-contrast-color);
  }

  :host([theme~='contrast']) {
    color: var(--lumo-contrast);
  }

  :host([theme~='contrast'][theme~='primary']) {
    background-color: var(--lumo-contrast);
    color: var(--lumo-base-color);
  }

  /* Disabled state. Keep selectors after other color variants. */

  :host([disabled]) {
    pointer-events: none;
    color: var(--lumo-disabled-text-color);
  }

  :host([theme~='primary'][disabled]) {
    background-color: var(--lumo-contrast-30pct);
    color: var(--lumo-base-color);
  }

  :host([theme~='primary'][disabled]) [part] {
    opacity: 0.7;
  }

  /* Icons */

  [part] ::slotted(vaadin-icon),
  [part] ::slotted(iron-icon) {
    display: inline-block;
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }

  /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
  [part] ::slotted(vaadin-icon[icon^='vaadin:']),
  [part] ::slotted(iron-icon[icon^='vaadin:']) {
    padding: 0.25em;
    box-sizing: border-box !important;
  }

  [part='prefix'] {
    margin-left: -0.25em;
    margin-right: 0.25em;
  }

  [part='suffix'] {
    margin-left: 0.25em;
    margin-right: -0.25em;
  }

  /* Icon-only */

  :host([theme~='icon']:not([theme~='tertiary-inline'])) {
    min-width: var(--lumo-button-size);
    padding-left: calc(var(--lumo-button-size) / 4);
    padding-right: calc(var(--lumo-button-size) / 4);
  }

  :host([theme~='icon']) [part='prefix'],
  :host([theme~='icon']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='prefix'] {
    margin-left: 0.25em;
    margin-right: -0.25em;
  }

  :host([dir='rtl']) [part='suffix'] {
    margin-left: -0.25em;
    margin-right: 0.25em;
  }

  :host([dir='rtl'][theme~='icon']) [part='prefix'],
  :host([dir='rtl'][theme~='icon']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }
`;A("vaadin-button",Mi,{moduleId:"lumo-button"});const ql=x`
  :host {
    width: var(--lumo-size-l);
    height: var(--lumo-size-l);
    min-width: auto;
    margin: 0 var(--lumo-space-s);
    padding: 0;
    background: transparent;
  }

  [part='icon'],
  [part='icon']::after,
  [part='icon']::before {
    position: inherit;
    height: auto;
    width: auto;
    background: transparent;
    top: auto;
  }

  [part='icon']::before {
    font-family: lumo-icons;
    font-size: var(--lumo-icon-size-m);
    content: var(--lumo-icons-menu);
  }
`;A("vaadin-drawer-toggle",[Mi,ql],{moduleId:"lumo-drawer-toggle"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ul=r=>class extends Si(Ri(Li(r))){static get properties(){return{tabindex:{value:0}}}get _activeKeys(){return["Enter"," "]}ready(){super.ready(),this.hasAttribute("role")||this.setAttribute("role","button")}_onKeyDown(e){super._onKeyDown(e),this._activeKeys.includes(e.key)&&(e.preventDefault(),this.click())}};/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class wt extends Ul(V(F(Y(O)))){static get is(){return"vaadin-button"}static get template(){return z`
      <style>
        :host {
          display: inline-block;
          position: relative;
          outline: none;
          white-space: nowrap;
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Aligns the button with form fields when placed on the same line.
          Note, to make it work, the form fields should have the same "::before" pseudo-element. */
        .vaadin-button-container::before {
          content: '\\2003';
          display: inline-block;
          width: 0;
          max-height: 100%;
        }

        .vaadin-button-container {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          width: 100%;
          height: 100%;
          min-height: inherit;
          text-shadow: inherit;
        }

        [part='prefix'],
        [part='suffix'] {
          flex: none;
        }

        [part='label'] {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      </style>
      <div class="vaadin-button-container">
        <span part="prefix" aria-hidden="true">
          <slot name="prefix"></slot>
        </span>
        <span part="label">
          <slot></slot>
        </span>
        <span part="suffix" aria-hidden="true">
          <slot name="suffix"></slot>
        </span>
      </div>
      <slot name="tooltip"></slot>
    `}ready(){super.ready(),this._tooltipController=new Pe(this),this.addController(this._tooltipController)}}customElements.define(wt.is,wt);/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Es extends wt{static get template(){return z`
      <style>
        :host {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: default;
          position: relative;
          outline: none;
          height: 24px;
          width: 24px;
          padding: 4px;
        }

        [part='icon'],
        [part='icon']::after,
        [part='icon']::before {
          position: absolute;
          top: 8px;
          height: 3px;
          width: 24px;
          background-color: #000;
        }

        [part='icon']::after,
        [part='icon']::before {
          content: '';
        }

        [part='icon']::after {
          top: 6px;
        }

        [part='icon']::before {
          top: 12px;
        }
      </style>
      <slot id="slot">
        <div part="icon"></div>
      </slot>
      <div part="icon" hidden$="[[!_showFallbackIcon]]"></div>
      <slot name="tooltip"></slot>
    `}static get is(){return"vaadin-drawer-toggle"}static get properties(){return{ariaLabel:{type:String,value:"Toggle navigation panel",reflectToAttribute:!0},_showFallbackIcon:{type:Boolean,value:!1}}}constructor(){super(),this.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("drawer-toggle-click",{bubbles:!0,composed:!0}))})}ready(){super.ready(),this._observer=new $(this,()=>{this._toggleFallbackIcon()})}_toggleFallbackIcon(){const t=this.$.slot.assignedNodes();this._showFallbackIcon=t.length>0&&t.every(e=>Nl(e))}}customElements.define(Es.is,Es);A("vaadin-input-container",x`
    :host {
      border-radius: var(--lumo-border-radius-m);
      background-color: var(--lumo-contrast-10pct);
      padding: 0 calc(0.375em + var(--lumo-border-radius-m) / 4 - 1px);
      font-weight: 500;
      line-height: 1;
      position: relative;
      cursor: text;
      box-sizing: border-box;
    }

    /* Used for hover and activation effects */
    :host::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border-radius: inherit;
      pointer-events: none;
      background-color: var(--lumo-contrast-50pct);
      opacity: 0;
      transition: transform 0.15s, opacity 0.2s;
      transform-origin: 100% 0;
    }

    ::slotted(:not([slot$='fix'])) {
      cursor: inherit;
      min-height: var(--lumo-text-field-size, var(--lumo-size-m));
      padding: 0 0.25em;
      --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
      -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);
      mask-image: var(--_lumo-text-field-overflow-mask-image);
    }

    /* Read-only */
    :host([readonly]) {
      color: var(--lumo-secondary-text-color);
      background-color: transparent;
      cursor: default;
    }

    :host([readonly])::after {
      background-color: transparent;
      opacity: 1;
      border: 1px dashed var(--lumo-contrast-30pct);
    }

    /* Disabled */
    :host([disabled]) {
      background-color: var(--lumo-contrast-5pct);
    }

    :host([disabled]) ::slotted(*) {
      color: var(--lumo-disabled-text-color);
      -webkit-text-fill-color: var(--lumo-disabled-text-color);
    }

    /* Invalid */
    :host([invalid]) {
      background-color: var(--lumo-error-color-10pct);
    }

    :host([invalid])::after {
      background-color: var(--lumo-error-color-50pct);
    }

    /* Slotted icons */
    ::slotted(iron-icon),
    ::slotted(vaadin-icon) {
      color: var(--lumo-contrast-60pct);
      width: var(--lumo-icon-size-m);
      height: var(--lumo-icon-size-m);
    }

    /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
    ::slotted(iron-icon[icon^='vaadin:']),
    ::slotted(vaadin-icon[icon^='vaadin:']) {
      padding: 0.25em;
      box-sizing: border-box !important;
    }

    /* Text align */
    :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent, #000 1.25em);
    }

    @-moz-document url-prefix() {
      :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {
        mask-image: var(--_lumo-text-field-overflow-mask-image);
      }
    }

    :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {
      text-align: start;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center']) ::slotted(:not([slot$='fix'])) {
      text-align: center;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {
      text-align: end;
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }

    /* RTL specific styles */
    :host([dir='rtl'])::after {
      transform-origin: 0% 0;
    }

    :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }
  `,{moduleId:"lumo-input-container"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Is extends F(he(O)){static get is(){return"vaadin-input-container"}static get template(){return z`
      <style>
        :host {
          display: flex;
          align-items: center;
          flex: 0 1 auto;
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Reset the native input styles */
        ::slotted(input) {
          -webkit-appearance: none;
          -moz-appearance: none;
          flex: auto;
          white-space: nowrap;
          overflow: hidden;
          width: 100%;
          height: 100%;
          outline: none;
          margin: 0;
          padding: 0;
          border: 0;
          border-radius: 0;
          min-width: 0;
          font: inherit;
          line-height: normal;
          color: inherit;
          background-color: transparent;
          /* Disable default invalid style in Firefox */
          box-shadow: none;
        }

        ::slotted(*) {
          flex: none;
        }

        ::slotted(:is(input, textarea))::placeholder {
          /* Use ::slotted(input:placeholder-shown) in themes to style the placeholder. */
          /* because ::slotted(...)::placeholder does not work in Safari. */
          font: inherit;
          color: inherit;
          /* Override default opacity in Firefox */
          opacity: 1;
        }
      </style>
      <slot name="prefix"></slot>
      <slot></slot>
      <slot name="suffix"></slot>
    `}static get properties(){return{disabled:{type:Boolean,reflectToAttribute:!0},readonly:{type:Boolean,reflectToAttribute:!0},invalid:{type:Boolean,reflectToAttribute:!0}}}ready(){super.ready(),this.addEventListener("pointerdown",t=>{t.target===this&&t.preventDefault()}),this.addEventListener("click",t=>{t.target===this&&this.shadowRoot.querySelector("slot:not([name])").assignedNodes({flatten:!0}).forEach(e=>e.focus&&e.focus())})}}customElements.define(Is.is,Is);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const it=x`
  :host {
    top: var(--lumo-space-m);
    right: var(--lumo-space-m);
    bottom: var(--lumo-space-m);
    left: var(--lumo-space-m);
    /* Workaround for Edge issue (only on Surface), where an overflowing vaadin-list-box inside vaadin-select-overlay makes the overlay transparent */
    /* stylelint-disable-next-line */
    outline: 0px solid transparent;
  }

  [part='overlay'] {
    background-color: var(--lumo-base-color);
    background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
    border-radius: var(--lumo-border-radius-m);
    box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-m);
    color: var(--lumo-body-text-color);
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    font-weight: 400;
    line-height: var(--lumo-line-height-m);
    letter-spacing: 0;
    text-transform: none;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  [part='content'] {
    padding: var(--lumo-space-xs);
  }

  [part='backdrop'] {
    background-color: var(--lumo-shade-20pct);
    animation: 0.2s lumo-overlay-backdrop-enter both;
    will-change: opacity;
  }

  @keyframes lumo-overlay-backdrop-enter {
    0% {
      opacity: 0;
    }
  }

  :host([closing]) [part='backdrop'] {
    animation: 0.2s lumo-overlay-backdrop-exit both;
  }

  @keyframes lumo-overlay-backdrop-exit {
    100% {
      opacity: 0;
    }
  }

  @keyframes lumo-overlay-dummy-animation {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 1;
    }
  }
`;A("",it,{moduleId:"lumo-overlay"});A("vaadin-overlay",it,{moduleId:"lumo-vaadin-overlay"});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Fi(r,t,e,i,s){let o;s&&(o=typeof e=="object"&&e!==null,o&&(i=r.__dataTemp[t]));let n=i!==e&&(i===i||e===e);return o&&n&&(r.__dataTemp[t]=e),n}const Hi=N(r=>{class t extends r{_shouldPropertyChange(i,s,o){return Fi(this,i,s,o,!0)}}return t}),Uc=N(r=>{class t extends r{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(i,s,o){return Fi(this,i,s,o,this.mutableData)}}return t});Hi._mutablePropertyChange=Fi;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let ui=null;function pi(){return ui}pi.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:pi,writable:!0}});const fo=Ai(pi),Wl=Hi(fo);function Gl(r,t){ui=r,Object.setPrototypeOf(r,t.prototype),new t,ui=null}const jl=Ai(class{});function mo(r,t){for(let e=0;e<t.length;e++){let i=t[e];if(Boolean(r)!=Boolean(i.__hideTemplateChildren__))if(i.nodeType===Node.TEXT_NODE)r?(i.__polymerTextContent__=i.textContent,i.textContent=""):i.textContent=i.__polymerTextContent__;else if(i.localName==="slot")if(r)i.__polymerReplaced__=document.createComment("hidden-slot"),P(P(i).parentNode).replaceChild(i.__polymerReplaced__,i);else{const s=i.__polymerReplaced__;s&&P(P(s).parentNode).replaceChild(i,s)}else i.style&&(r?(i.__polymerDisplay__=i.style.display,i.style.display="none"):i.style.display=i.__polymerDisplay__);i.__hideTemplateChildren__=r,i._showHideChildren&&i._showHideChildren(r)}}class oe extends jl{constructor(t){super(),this._configureProperties(t),this.root=this._stampTemplate(this.__dataHost);let e=[];this.children=e;for(let s=this.root.firstChild;s;s=s.nextSibling)e.push(s),s.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let i=this.__templatizeOptions;(t&&i.instanceProps||!i.instanceProps)&&this._enableProperties()}_configureProperties(t){if(this.__templatizeOptions.forwardHostProp)for(let i in this.__hostProps)this._setPendingProperty(i,this.__dataHost["_host_"+i]);for(let i in t)this._setPendingProperty(i,t[i])}forwardHostProp(t,e){this._setPendingPropertyOrPath(t,e,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(t,e,i){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(t,e,s=>{s.model=this,i(s)});else{let s=this.__dataHost.__dataHost;s&&s._addEventListenerToNode(t,e,i)}}_showHideChildren(t){mo(t,this.children)}_setUnmanagedPropertyToNode(t,e,i){t.__hideTemplateChildren__&&t.nodeType==Node.TEXT_NODE&&e=="textContent"?t.__polymerTextContent__=i:super._setUnmanagedPropertyToNode(t,e,i)}get parentModel(){let t=this.__parentModel;if(!t){let e;t=this;do t=t.__dataHost.__dataHost;while((e=t.__templatizeOptions)&&!e.parentModel);this.__parentModel=t}return t}dispatchEvent(t){return!0}}oe.prototype.__dataHost;oe.prototype.__templatizeOptions;oe.prototype._methodHost;oe.prototype.__templatizeOwner;oe.prototype.__hostProps;const Kl=Hi(oe);function Ts(r){let t=r.__dataHost;return t&&t._methodHost||t}function Yl(r,t,e){let i=e.mutableData?Kl:oe;Je.mixin&&(i=Je.mixin(i));let s=class extends i{};return s.prototype.__templatizeOptions=e,s.prototype._bindTemplate(r),Zl(s,r,t,e),s}function Ql(r,t,e,i){let s=e.forwardHostProp;if(s&&t.hasHostProps){const o=r.localName=="template";let n=t.templatizeTemplateClass;if(!n){if(o){let l=e.mutableData?Wl:fo;class d extends l{}n=t.templatizeTemplateClass=d}else{const l=r.constructor;class d extends l{}n=t.templatizeTemplateClass=d}let a=t.hostProps;for(let l in a)n.prototype._addPropertyEffect("_host_"+l,n.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:Xl(l,s)}),n.prototype._createNotifyingProperty("_host_"+l);cr&&i&&td(t,e,i)}if(r.__dataProto&&Object.assign(r.__data,r.__dataProto),o)Gl(r,n),r.__dataTemp={},r.__dataPending=null,r.__dataOld=null,r._enableProperties();else{Object.setPrototypeOf(r,n.prototype);const a=t.hostProps;for(let l in a)if(l="_host_"+l,l in r){const d=r[l];delete r[l],r.__data[l]=d}}}}function Xl(r,t){return function(i,s,o){t.call(i.__templatizeOwner,s.substring(6),o[s])}}function Zl(r,t,e,i){let s=e.hostProps||{};for(let o in i.instanceProps){delete s[o];let n=i.notifyInstanceProp;n&&r.prototype._addPropertyEffect(o,r.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:Jl(o,n)})}if(i.forwardHostProp&&t.__dataHost)for(let o in s)e.hasHostProps||(e.hasHostProps=!0),r.prototype._addPropertyEffect(o,r.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:ed()})}function Jl(r,t){return function(i,s,o){t.call(i.__templatizeOwner,i,s,o[s])}}function ed(){return function(t,e,i){t.__dataHost._setPendingPropertyOrPath("_host_"+e,i[e],!0,!0)}}function Je(r,t,e){if(Ge&&!Ts(r))throw new Error("strictTemplatePolicy: template owner not trusted");if(e=e||{},r.__templatizeOwner)throw new Error("A <template> can only be templatized once");r.__templatizeOwner=t;let s=(t?t.constructor:oe)._parseTemplate(r),o=s.templatizeInstanceClass;o||(o=Yl(r,s,e),s.templatizeInstanceClass=o);const n=Ts(r);Ql(r,s,e,n);let a=class extends o{};return a.prototype._methodHost=n,a.prototype.__dataHost=r,a.prototype.__templatizeOwner=t,a.prototype.__hostProps=s.hostProps,a=a,a}function td(r,t,e){const i=e.constructor._properties,{propertyEffects:s}=r,{instanceProps:o}=t;for(let n in s)if(!i[n]&&!(o&&o[n])){const a=s[n];for(let l=0;l<a.length;l++){const{part:d}=a[l].info;if(!(d.signature&&d.signature.static)){console.warn(`Property '${n}' used in template but not declared in 'properties'; attribute will not be observed.`);break}}}}function Gc(r,t){let e;for(;t;)if(e=t.__dataHost?t:t.__templatizeInstance)if(e.__dataHost!=r)t=e.__dataHost;else return e;else t=P(t).parentNode;return null}/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class j extends F(he(Y(O))){static get template(){return z`
      <style>
        :host {
          z-index: 200;
          position: fixed;

          /* Despite of what the names say, <vaadin-overlay> is just a container
          for position/sizing/alignment. The actual overlay is the overlay part. */

          /* Default position constraints: the entire viewport. Note: themes can
          override this to introduce gaps between the overlay and the viewport. */
          top: 0;
          right: 0;
          bottom: var(--vaadin-overlay-viewport-bottom);
          left: 0;

          /* Use flexbox alignment for the overlay part. */
          display: flex;
          flex-direction: column; /* makes dropdowns sizing easier */
          /* Align to center by default. */
          align-items: center;
          justify-content: center;

          /* Allow centering when max-width/max-height applies. */
          margin: auto;

          /* The host is not clickable, only the overlay part is. */
          pointer-events: none;

          /* Remove tap highlight on touch devices. */
          -webkit-tap-highlight-color: transparent;

          /* CSS API for host */
          --vaadin-overlay-viewport-bottom: 0;
        }

        :host([hidden]),
        :host(:not([opened]):not([closing])) {
          display: none !important;
        }

        [part='overlay'] {
          -webkit-overflow-scrolling: touch;
          overflow: auto;
          pointer-events: auto;

          /* Prevent overflowing the host in MSIE 11 */
          max-width: 100%;
          box-sizing: border-box;

          -webkit-tap-highlight-color: initial; /* reenable tap highlight inside */
        }

        [part='backdrop'] {
          z-index: -1;
          content: '';
          background: rgba(0, 0, 0, 0.5);
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          pointer-events: auto;
        }
      </style>

      <div id="backdrop" part="backdrop" hidden$="[[!withBackdrop]]"></div>
      <div part="overlay" id="overlay" tabindex="0">
        <div part="content" id="content">
          <slot></slot>
        </div>
      </div>
    `}static get is(){return"vaadin-overlay"}static get properties(){return{opened:{type:Boolean,notify:!0,observer:"_openedChanged",reflectToAttribute:!0},owner:Element,renderer:Function,template:{type:Object,notify:!0},content:{type:Object,notify:!0},withBackdrop:{type:Boolean,value:!1,reflectToAttribute:!0},model:Object,modeless:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_modelessChanged"},hidden:{type:Boolean,reflectToAttribute:!0,observer:"_hiddenChanged"},focusTrap:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!1},restoreFocusNode:{type:HTMLElement},_mouseDownInside:{type:Boolean},_mouseUpInside:{type:Boolean},_instance:{type:Object},_originalContentPart:Object,_contentNodes:Array,_oldOwner:Element,_oldModel:Object,_oldTemplate:Object,_oldRenderer:Object,_oldOpened:Boolean}}static get observers(){return["_templateOrRendererChanged(template, renderer, owner, model, opened)"]}constructor(){super(),this._boundMouseDownListener=this._mouseDownListener.bind(this),this._boundMouseUpListener=this._mouseUpListener.bind(this),this._boundOutsideClickListener=this._outsideClickListener.bind(this),this._boundKeydownListener=this._keydownListener.bind(this),this._observer=new $(this,t=>{this._setTemplateFromNodes(t.addedNodes)}),this._boundIronOverlayCanceledListener=this._ironOverlayCanceled.bind(this),Xe&&(this._boundIosResizeListener=()=>this._detectIosNavbar()),this.__focusTrapController=new _o(this)}ready(){super.ready(),this._observer.flush(),this.addEventListener("click",()=>{}),this.$.backdrop.addEventListener("click",()=>{}),this.addController(this.__focusTrapController)}_detectIosNavbar(){if(!this.opened)return;const t=window.innerHeight,i=window.innerWidth>t,s=document.documentElement.clientHeight;i&&s>t?this.style.setProperty("--vaadin-overlay-viewport-bottom",`${s-t}px`):this.style.setProperty("--vaadin-overlay-viewport-bottom","0")}_setTemplateFromNodes(t){this.template=t.find(e=>e.localName&&e.localName==="template")||this.template}close(t){const e=new CustomEvent("vaadin-overlay-close",{bubbles:!0,cancelable:!0,detail:{sourceEvent:t}});this.dispatchEvent(e),e.defaultPrevented||(this.opened=!1)}connectedCallback(){super.connectedCallback(),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))}disconnectedCallback(){super.disconnectedCallback(),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener)}requestContentUpdate(){this.renderer&&this.renderer.call(this.owner,this.content,this.owner,this.model)}_ironOverlayCanceled(t){t.preventDefault()}_mouseDownListener(t){this._mouseDownInside=t.composedPath().indexOf(this.$.overlay)>=0}_mouseUpListener(t){this._mouseUpInside=t.composedPath().indexOf(this.$.overlay)>=0}_outsideClickListener(t){if(t.composedPath().includes(this.$.overlay)||this._mouseDownInside||this._mouseUpInside){this._mouseDownInside=!1,this._mouseUpInside=!1;return}if(!this._last)return;const e=new CustomEvent("vaadin-overlay-outside-click",{bubbles:!0,cancelable:!0,detail:{sourceEvent:t}});this.dispatchEvent(e),this.opened&&!e.defaultPrevented&&this.close(t)}_keydownListener(t){if(!!this._last&&!(this.modeless&&!t.composedPath().includes(this.$.overlay))&&t.key==="Escape"){const e=new CustomEvent("vaadin-overlay-escape-press",{bubbles:!0,cancelable:!0,detail:{sourceEvent:t}});this.dispatchEvent(e),this.opened&&!e.defaultPrevented&&this.close(t)}}_ensureTemplatized(){this._setTemplateFromNodes(Array.from(this.children))}_openedChanged(t,e){this._instance||this._ensureTemplatized(),t?(this.__restoreFocusNode=this._getActiveElement(),this._animatedOpening(),eo(this,()=>{this.focusTrap&&this.__focusTrapController.trapFocus(this.$.overlay);const i=new CustomEvent("vaadin-overlay-open",{bubbles:!0});this.dispatchEvent(i)}),document.addEventListener("keydown",this._boundKeydownListener),this.modeless||this._addGlobalListeners()):e&&(this.focusTrap&&this.__focusTrapController.releaseFocus(),this._animatedClosing(),document.removeEventListener("keydown",this._boundKeydownListener),this.modeless||this._removeGlobalListeners())}_hiddenChanged(t){t&&this.hasAttribute("closing")&&this._flushAnimation("closing")}_shouldAnimate(){const t=getComputedStyle(this).getPropertyValue("animation-name");return!(getComputedStyle(this).getPropertyValue("display")==="none")&&t&&t!=="none"}_enqueueAnimation(t,e){const i=`__${t}Handler`,s=o=>{o&&o.target!==this||(e(),this.removeEventListener("animationend",s),delete this[i])};this[i]=s,this.addEventListener("animationend",s)}_flushAnimation(t){const e=`__${t}Handler`;typeof this[e]=="function"&&this[e]()}_animatedOpening(){this.parentNode===document.body&&this.hasAttribute("closing")&&this._flushAnimation("closing"),this._attachOverlay(),this.modeless||this._enterModalState(),this.setAttribute("opening",""),this._shouldAnimate()?this._enqueueAnimation("opening",()=>{this._finishOpening()}):this._finishOpening()}_attachOverlay(){this._placeholder=document.createComment("vaadin-overlay-placeholder"),this.parentNode.insertBefore(this._placeholder,this),document.body.appendChild(this),this.bringToFront()}_finishOpening(){document.addEventListener("iron-overlay-canceled",this._boundIronOverlayCanceledListener),this.removeAttribute("opening")}_finishClosing(){document.removeEventListener("iron-overlay-canceled",this._boundIronOverlayCanceledListener),this._detachOverlay(),this.$.overlay.style.removeProperty("pointer-events"),this.removeAttribute("closing")}_animatedClosing(){if(this.hasAttribute("opening")&&this._flushAnimation("opening"),this._placeholder){this._exitModalState();const t=this.restoreFocusNode||this.__restoreFocusNode;if(this.restoreFocusOnClose&&t){const e=this._getActiveElement();(e===document.body||this._deepContains(e))&&setTimeout(()=>t.focus()),this.__restoreFocusNode=null}this.setAttribute("closing",""),this.dispatchEvent(new CustomEvent("vaadin-overlay-closing")),this._shouldAnimate()?this._enqueueAnimation("closing",()=>{this._finishClosing()}):this._finishClosing()}}_detachOverlay(){this._placeholder.parentNode.insertBefore(this,this._placeholder),this._placeholder.parentNode.removeChild(this._placeholder)}static get __attachedInstances(){return Array.from(document.body.children).filter(t=>t instanceof j&&!t.hasAttribute("closing")).sort((t,e)=>t.__zIndex-e.__zIndex||0)}get _last(){return this===j.__attachedInstances.pop()}_modelessChanged(t){t?(this._removeGlobalListeners(),this._exitModalState()):this.opened&&(this._addGlobalListeners(),this._enterModalState())}_addGlobalListeners(){document.addEventListener("mousedown",this._boundMouseDownListener),document.addEventListener("mouseup",this._boundMouseUpListener),document.documentElement.addEventListener("click",this._boundOutsideClickListener,!0)}_enterModalState(){document.body.style.pointerEvents!=="none"&&(this._previousDocumentPointerEvents=document.body.style.pointerEvents,document.body.style.pointerEvents="none"),j.__attachedInstances.forEach(t=>{t!==this&&(t.shadowRoot.querySelector('[part="overlay"]').style.pointerEvents="none")})}_removeGlobalListeners(){document.removeEventListener("mousedown",this._boundMouseDownListener),document.removeEventListener("mouseup",this._boundMouseUpListener),document.documentElement.removeEventListener("click",this._boundOutsideClickListener,!0)}_exitModalState(){this._previousDocumentPointerEvents!==void 0&&(document.body.style.pointerEvents=this._previousDocumentPointerEvents,delete this._previousDocumentPointerEvents);const t=j.__attachedInstances;let e;for(;(e=t.pop())&&!(e!==this&&(e.shadowRoot.querySelector('[part="overlay"]').style.removeProperty("pointer-events"),!e.modeless)););}_removeOldContent(){!this.content||!this._contentNodes||(this._observer.disconnect(),this._contentNodes.forEach(t=>{t.parentNode===this.content&&this.content.removeChild(t)}),this._originalContentPart&&(this.$.content.parentNode.replaceChild(this._originalContentPart,this.$.content),this.$.content=this._originalContentPart,this._originalContentPart=void 0),this._observer.connect(),this._contentNodes=void 0,this.content=void 0)}_stampOverlayTemplate(t){this._removeOldContent(),t._Templatizer||(t._Templatizer=Je(t,this,{forwardHostProp(i,s){this._instance&&this._instance.forwardHostProp(i,s)}})),this._instance=new t._Templatizer({}),this._contentNodes=Array.from(this._instance.root.childNodes);const e=t._templateRoot||(t._templateRoot=t.getRootNode());if(e!==document){this.$.content.shadowRoot||this.$.content.attachShadow({mode:"open"});let i=Array.from(e.querySelectorAll("style")).reduce((s,o)=>s+o.textContent,"");if(i=i.replace(/:host/g,":host-nomatch"),i){const s=document.createElement("style");s.textContent=i,this.$.content.shadowRoot.appendChild(s),this._contentNodes.unshift(s)}this.$.content.shadowRoot.appendChild(this._instance.root),this.content=this.$.content.shadowRoot}else this.appendChild(this._instance.root),this.content=this}_removeNewRendererOrTemplate(t,e,i,s){t!==e?this.template=void 0:i!==s&&(this.renderer=void 0)}_templateOrRendererChanged(t,e,i,s,o){if(t&&e)throw this._removeNewRendererOrTemplate(t,this._oldTemplate,e,this._oldRenderer),new Error("You should only use either a renderer or a template for overlay content");const n=this._oldOwner!==i||this._oldModel!==s;this._oldModel=s,this._oldOwner=i;const a=this._oldTemplate!==t;this._oldTemplate=t;const l=this._oldRenderer!==e;this._oldRenderer=e;const d=this._oldOpened!==o;this._oldOpened=o,l&&(this.content=this,this.content.innerHTML="",delete this.content._$litPart$),t&&a?this._stampOverlayTemplate(t):e&&(l||d||n)&&o&&this.requestContentUpdate()}_getActiveElement(){let t=document.activeElement||document.body;for(;t.shadowRoot&&t.shadowRoot.activeElement;)t=t.shadowRoot.activeElement;return t}_deepContains(t){if(this.contains(t))return!0;let e=t;const i=t.ownerDocument;for(;e&&e!==i&&e!==this;)e=e.parentNode||e.host;return e===this}bringToFront(){let t="";const e=j.__attachedInstances.filter(i=>i!==this).pop();e&&(t=e.__zIndex+1),this.style.zIndex=t,this.__zIndex=t||parseFloat(getComputedStyle(this).zIndex)}}customElements.define(j.is,j);/**
 * @license
 * Copyright (c) 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const id=x`
  [part~='loader'] {
    box-sizing: border-box;
    width: var(--lumo-icon-size-s);
    height: var(--lumo-icon-size-s);
    border: 2px solid transparent;
    border-color: var(--lumo-primary-color-10pct) var(--lumo-primary-color-10pct) var(--lumo-primary-color)
      var(--lumo-primary-color);
    border-radius: calc(0.5 * var(--lumo-icon-size-s));
    opacity: 0;
    pointer-events: none;
  }

  :host(:not([loading])) [part~='loader'] {
    display: none;
  }

  :host([loading]) [part~='loader'] {
    animation: 1s linear infinite lumo-loader-rotate, 0.3s 0.1s lumo-loader-fade-in both;
  }

  @keyframes lumo-loader-fade-in {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes lumo-loader-rotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const $i=x`
  :host([opening]),
  :host([closing]) {
    animation: 0.14s lumo-overlay-dummy-animation;
  }

  [part='overlay'] {
    will-change: opacity, transform;
  }

  :host([opening]) [part='overlay'] {
    animation: 0.1s lumo-menu-overlay-enter ease-out both;
  }

  @keyframes lumo-menu-overlay-enter {
    0% {
      opacity: 0;
      transform: translateY(-4px);
    }
  }

  :host([closing]) [part='overlay'] {
    animation: 0.1s lumo-menu-overlay-exit both;
  }

  @keyframes lumo-menu-overlay-exit {
    100% {
      opacity: 0;
    }
  }
`;A("",$i,{moduleId:"lumo-menu-overlay-core"});const sd=x`
  /* Small viewport (bottom sheet) styles */
  /* Use direct media queries instead of the state attributes ([phone] and [fullscreen]) provided by the elements */
  @media (max-width: 420px), (max-height: 420px) {
    :host {
      top: 0 !important;
      right: 0 !important;
      bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;
      left: 0 !important;
      align-items: stretch !important;
      justify-content: flex-end !important;
    }

    [part='overlay'] {
      max-height: 50vh;
      width: 100vw;
      border-radius: 0;
      box-shadow: var(--lumo-box-shadow-xl);
    }

    /* The content part scrolls instead of the overlay part, because of the gradient fade-out */
    [part='content'] {
      padding: 30px var(--lumo-space-m);
      max-height: inherit;
      box-sizing: border-box;
      -webkit-overflow-scrolling: touch;
      overflow: auto;
      -webkit-mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);
      mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);
    }

    [part='backdrop'] {
      display: block;
    }

    /* Animations */

    :host([opening]) [part='overlay'] {
      animation: 0.2s lumo-mobile-menu-overlay-enter cubic-bezier(0.215, 0.61, 0.355, 1) both;
    }

    :host([closing]),
    :host([closing]) [part='backdrop'] {
      animation-delay: 0.14s;
    }

    :host([closing]) [part='overlay'] {
      animation: 0.14s 0.14s lumo-mobile-menu-overlay-exit cubic-bezier(0.55, 0.055, 0.675, 0.19) both;
    }
  }

  @keyframes lumo-mobile-menu-overlay-enter {
    0% {
      transform: translateY(150%);
    }
  }

  @keyframes lumo-mobile-menu-overlay-exit {
    100% {
      transform: translateY(150%);
    }
  }
`,go=[it,$i,sd];A("",go,{moduleId:"lumo-menu-overlay"});const rd=x`
  [part='content'] {
    padding: 0;
  }

  :host {
    --_vaadin-combo-box-items-container-border-width: var(--lumo-space-xs);
    --_vaadin-combo-box-items-container-border-style: solid;
    --_vaadin-combo-box-items-container-border-color: transparent;
  }

  /* Loading state */

  /* When items are empty, the spinner needs some room */
  :host(:not([closing])) [part~='content'] {
    min-height: calc(2 * var(--lumo-space-s) + var(--lumo-icon-size-s));
  }

  [part~='overlay'] {
    position: relative;
  }

  :host([top-aligned]) [part~='overlay'] {
    margin-top: var(--lumo-space-xs);
  }

  :host([bottom-aligned]) [part~='overlay'] {
    margin-bottom: var(--lumo-space-xs);
  }

  [part~='loader'] {
    position: absolute;
    z-index: 1;
    left: var(--lumo-space-s);
    right: var(--lumo-space-s);
    top: var(--lumo-space-s);
    margin-left: auto;
    margin-inline-start: auto;
    margin-inline-end: 0;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part~='loader'] {
    left: auto;
    margin-left: 0;
    margin-right: auto;
    margin-inline-start: 0;
    margin-inline-end: auto;
  }
`;A("vaadin-combo-box-overlay",[it,$i,rd,id],{moduleId:"lumo-combo-box-overlay"});const vo=x`
  :host {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-xs);
    padding: 0.5em calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4) 0.5em
      var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius-m) / 4));
    min-height: var(--lumo-size-m);
    outline: none;
    border-radius: var(--lumo-border-radius-m);
    cursor: var(--lumo-clickable-cursor);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);
  }

  /* Checkmark */
  [part='checkmark']::before {
    display: var(--_lumo-item-selected-icon-display, none);
    content: var(--lumo-icons-checkmark);
    font-family: lumo-icons;
    font-size: var(--lumo-icon-size-m);
    line-height: 1;
    font-weight: normal;
    width: 1em;
    height: 1em;
    margin: calc((1 - var(--lumo-line-height-xs)) * var(--lumo-font-size-m) / 2) 0;
    color: var(--lumo-primary-text-color);
    flex: none;
    opacity: 0;
    transition: transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2), opacity 0.1s;
  }

  :host([selected]) [part='checkmark']::before {
    opacity: 1;
  }

  :host([active]:not([selected])) [part='checkmark']::before {
    transform: scale(0.8);
    opacity: 0;
    transition-duration: 0s;
  }

  [part='content'] {
    flex: auto;
  }

  /* Disabled */
  :host([disabled]) {
    color: var(--lumo-disabled-text-color);
    cursor: default;
    pointer-events: none;
  }

  /* TODO a workaround until we have "focus-follows-mouse". After that, use the hover style for focus-ring as well */
  @media (any-hover: hover) {
    :host(:hover:not([disabled])) {
      background-color: var(--lumo-primary-color-10pct);
    }

    :host([focus-ring]:not([disabled])) {
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }
  }

  /* RTL specific styles */
  :host([dir='rtl']) {
    padding-left: calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4);
    padding-right: var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius-m) / 4));
  }

  /* Slotted icons */
  :host ::slotted(vaadin-icon),
  :host ::slotted(iron-icon) {
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }
`;A("vaadin-item",vo,{moduleId:"lumo-item"});const od=x`
  :host {
    transition: background-color 100ms;
    overflow: hidden;
    --_lumo-item-selected-icon-display: block;
  }

  @media (any-hover: hover) {
    :host([focused]:not([disabled])) {
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }
  }
`;A("vaadin-combo-box-item",[vo,od],{moduleId:"lumo-combo-box-item"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const bo=x`
  [part$='button'] {
    flex: none;
    width: 1em;
    height: 1em;
    line-height: 1;
    font-size: var(--lumo-icon-size-m);
    text-align: center;
    color: var(--lumo-contrast-60pct);
    transition: 0.2s color;
    cursor: var(--lumo-clickable-cursor);
  }

  [part$='button']:hover {
    color: var(--lumo-contrast-90pct);
  }

  :host([disabled]) [part$='button'],
  :host([readonly]) [part$='button'] {
    color: var(--lumo-contrast-20pct);
    cursor: default;
  }

  [part$='button']::before {
    font-family: 'lumo-icons';
    display: block;
  }
`;A("",bo,{moduleId:"lumo-field-button"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const nd=x`
  :host([has-helper]) [part='helper-text']::before {
    content: '';
    display: block;
    height: 0.4em;
  }

  [part='helper-text'] {
    display: block;
    color: var(--lumo-secondary-text-color);
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    transition: color 0.2s;
  }

  :host(:hover:not([readonly])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  :host([disabled]) [part='helper-text'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::before {
    display: none;
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::after {
    content: '';
    display: block;
    height: 0.4em;
  }

  :host([has-helper][theme~='helper-above-field']) [part='label'] {
    order: 0;
    padding-bottom: 0.4em;
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text'] {
    order: 1;
  }

  :host([has-helper][theme~='helper-above-field']) [part='label'] + * {
    order: 2;
  }

  :host([has-helper][theme~='helper-above-field']) [part='error-message'] {
    order: 3;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const yo=x`
  [part='label'] {
    align-self: flex-start;
    color: var(--lumo-secondary-text-color);
    font-weight: 500;
    font-size: var(--lumo-font-size-s);
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    transition: color 0.2s;
    line-height: 1;
    padding-right: 1em;
    padding-bottom: 0.5em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: relative;
    max-width: 100%;
    box-sizing: border-box;
  }

  :host([has-label])::before {
    margin-top: calc(var(--lumo-font-size-s) * 1.5);
  }

  :host([has-label][theme~='small'])::before {
    margin-top: calc(var(--lumo-font-size-xs) * 1.5);
  }

  :host([has-label]) {
    padding-top: var(--lumo-space-m);
  }

  :host([has-label]) ::slotted([slot='tooltip']) {
    --vaadin-tooltip-offset-bottom: calc((var(--lumo-space-m) - var(--lumo-space-xs)) * -1);
  }

  :host([required]) [part='required-indicator']::after {
    content: var(--lumo-required-field-indicator, '•');
    transition: opacity 0.2s;
    color: var(--lumo-required-field-indicator-color, var(--lumo-primary-text-color));
    position: absolute;
    right: 0;
    width: 1em;
    text-align: center;
  }

  :host([invalid]) [part='required-indicator']::after {
    color: var(--lumo-required-field-indicator-color, var(--lumo-error-text-color));
  }

  [part='error-message'] {
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
    color: var(--lumo-error-text-color);
    will-change: max-height;
    transition: 0.4s max-height;
    max-height: 5em;
  }

  :host([has-error-message]) [part='error-message']::before,
  :host([has-error-message]) [part='error-message']::after {
    content: '';
    display: block;
    height: 0.4em;
  }

  :host(:not([invalid])) [part='error-message'] {
    max-height: 0;
    overflow: hidden;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='label'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }

  :host([dir='rtl']) [part='label'] {
    padding-left: 1em;
    padding-right: 0;
  }

  :host([dir='rtl']) [part='required-indicator']::after {
    right: auto;
    left: 0;
  }

  :host([dir='rtl']) [part='error-message'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }
`;A("",yo,{moduleId:"lumo-required-field"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ad=x`
  :host {
    --lumo-text-field-size: var(--lumo-size-m);
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-m);
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: var(--lumo-space-xs) 0;
  }

  :host::before {
    height: var(--lumo-text-field-size);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  :host([focused]:not([readonly])) [part='label'] {
    color: var(--lumo-primary-text-color);
  }

  :host([focused]) [part='input-field'] ::slotted(:is(input, textarea)) {
    -webkit-mask-image: none;
    mask-image: none;
  }

  ::slotted(:is(input, textarea):placeholder-shown) {
    color: var(--lumo-secondary-text-color);
  }

  /* Hover */
  :host(:hover:not([readonly]):not([focused])) [part='label'] {
    color: var(--lumo-body-text-color);
  }

  :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {
    opacity: 0.1;
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused])) [part='label'] {
      color: var(--lumo-secondary-text-color);
    }

    :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {
      opacity: 0;
    }

    :host(:active:not([readonly]):not([focused])) [part='input-field']::after {
      opacity: 0.2;
    }
  }

  /* Trigger when not focusing using the keyboard */
  :host([focused]:not([focus-ring]):not([readonly])) [part='input-field']::after {
    transform: scaleX(0);
    transition-duration: 0.15s, 1s;
  }

  /* Focus-ring */
  :host([focus-ring]) [part='input-field'] {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  /* Read-only and disabled */
  :host(:is([readonly], [disabled])) ::slotted(:is(input, textarea):placeholder-shown) {
    opacity: 0;
  }

  /* Disabled style */
  :host([disabled]) {
    pointer-events: none;
  }

  :host([disabled]) [part='label'],
  :host([disabled]) [part='input-field'] ::slotted(*) {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  /* Invalid style */
  :host([invalid][focus-ring]) [part='input-field'] {
    box-shadow: 0 0 0 2px var(--lumo-error-color-50pct);
  }

  :host([input-prevented]) [part='input-field'] {
    animation: shake 0.15s infinite;
  }

  @keyframes shake {
    25% {
      transform: translateX(4px);
    }
    75% {
      transform: translateX(-4px);
    }
  }

  /* Small theme */
  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-text-field-size: var(--lumo-size-s);
  }

  :host([theme~='small']) [part='label'] {
    font-size: var(--lumo-font-size-xs);
  }

  :host([theme~='small']) [part='error-message'] {
    font-size: var(--lumo-font-size-xxs);
  }

  /* Slotted content */
  [part='input-field'] ::slotted(:not(iron-icon):not(vaadin-icon):not(input):not(textarea)) {
    color: var(--lumo-secondary-text-color);
    font-weight: 400;
  }

  [part='clear-button']::before {
    content: var(--lumo-icons-cross);
  }
`,st=[yo,bo,nd,ad];A("",st,{moduleId:"lumo-input-field-shared-styles"});const ld=x`
  :host {
    outline: none;
  }

  [part='toggle-button']::before {
    content: var(--lumo-icons-dropdown);
  }
`;A("vaadin-combo-box",[st,ld],{moduleId:"lumo-combo-box"});/**
 * @license
 * Copyright (c) 2015 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ss extends F(he(O)){static get template(){return z`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none;
        }
      </style>
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `}static get is(){return"vaadin-combo-box-item"}static get properties(){return{index:Number,item:Object,label:String,selected:{type:Boolean,value:!1,reflectToAttribute:!0},focused:{type:Boolean,value:!1,reflectToAttribute:!0},renderer:Function,_oldRenderer:Function}}static get observers(){return["__rendererOrItemChanged(renderer, index, item.*, selected, focused)","__updateLabel(label, renderer)"]}connectedCallback(){super.connectedCallback(),this._comboBox=this.parentNode.comboBox;const t=this._comboBox.getAttribute("dir");t&&this.setAttribute("dir",t)}requestContentUpdate(){if(!this.renderer)return;const t={index:this.index,item:this.item,focused:this.focused,selected:this.selected};this.renderer(this,this._comboBox,t)}__rendererOrItemChanged(t,e,i){i===void 0||e===void 0||(this._oldRenderer!==t&&(this.innerHTML="",delete this._$litPart$),t&&(this._oldRenderer=t,this.requestContentUpdate()))}__updateLabel(t,e){e||(this.textContent=t)}}customElements.define(Ss.is,Ss);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Yt={start:"top",end:"bottom"},Qt={start:"left",end:"right"},Ps=new ResizeObserver(r=>{setTimeout(()=>{r.forEach(t=>{t.target.__overlay&&t.target.__overlay._updatePosition()})})}),Bi=r=>class extends r{static get properties(){return{positionTarget:{type:Object,value:null},horizontalAlign:{type:String,value:"start"},verticalAlign:{type:String,value:"top"},noHorizontalOverlap:{type:Boolean,value:!1},noVerticalOverlap:{type:Boolean,value:!1}}}static get observers(){return["__positionSettingsChanged(horizontalAlign, verticalAlign, noHorizontalOverlap, noVerticalOverlap)","__overlayOpenedChanged(opened, positionTarget)"]}constructor(){super(),this.__onScroll=this.__onScroll.bind(this),this._updatePosition=this._updatePosition.bind(this)}connectedCallback(){super.connectedCallback(),this.opened&&this.__addUpdatePositionEventListeners()}disconnectedCallback(){super.disconnectedCallback(),this.__removeUpdatePositionEventListeners()}__addUpdatePositionEventListeners(){window.addEventListener("resize",this._updatePosition),this.__positionTargetAncestorRootNodes=Rl(this.positionTarget),this.__positionTargetAncestorRootNodes.forEach(e=>{e.addEventListener("scroll",this.__onScroll,!0)})}__removeUpdatePositionEventListeners(){window.removeEventListener("resize",this._updatePosition),this.__positionTargetAncestorRootNodes&&(this.__positionTargetAncestorRootNodes.forEach(e=>{e.removeEventListener("scroll",this.__onScroll,!0)}),this.__positionTargetAncestorRootNodes=null)}__overlayOpenedChanged(e,i){if(this.__removeUpdatePositionEventListeners(),i&&(i.__overlay=null,Ps.unobserve(i),e&&(this.__addUpdatePositionEventListeners(),i.__overlay=this,Ps.observe(i))),e){const s=getComputedStyle(this);this.__margins||(this.__margins={},["top","bottom","left","right"].forEach(o=>{this.__margins[o]=parseInt(s[o],10)})),this.setAttribute("dir",s.direction),this._updatePosition(),requestAnimationFrame(()=>this._updatePosition())}}get __isRTL(){return this.getAttribute("dir")==="rtl"}__positionSettingsChanged(){this._updatePosition()}__onScroll(e){this.contains(e.target)||this._updatePosition()}_updatePosition(){if(!this.positionTarget||!this.opened)return;const e=this.positionTarget.getBoundingClientRect(),i=this.__shouldAlignStartVertically(e);this.style.justifyContent=i?"flex-start":"flex-end";const s=this.__shouldAlignStartHorizontally(e,this.__isRTL),o=!this.__isRTL&&s||this.__isRTL&&!s;this.style.alignItems=o?"flex-start":"flex-end";const n=this.getBoundingClientRect(),a=this.__calculatePositionInOneDimension(e,n,this.noVerticalOverlap,Yt,this,i),l=this.__calculatePositionInOneDimension(e,n,this.noHorizontalOverlap,Qt,this,s);Object.assign(this.style,a,l),this.toggleAttribute("bottom-aligned",!i),this.toggleAttribute("top-aligned",i),this.toggleAttribute("end-aligned",!o),this.toggleAttribute("start-aligned",o)}__shouldAlignStartHorizontally(e,i){const s=Math.max(this.__oldContentWidth||0,this.$.overlay.offsetWidth);this.__oldContentWidth=this.$.overlay.offsetWidth;const o=Math.min(window.innerWidth,document.documentElement.clientWidth),n=!i&&this.horizontalAlign==="start"||i&&this.horizontalAlign==="end";return this.__shouldAlignStart(e,s,o,this.__margins,n,this.noHorizontalOverlap,Qt)}__shouldAlignStartVertically(e){const i=Math.max(this.__oldContentHeight||0,this.$.overlay.offsetHeight);this.__oldContentHeight=this.$.overlay.offsetHeight;const s=Math.min(window.innerHeight,document.documentElement.clientHeight),o=this.verticalAlign==="top";return this.__shouldAlignStart(e,i,s,this.__margins,o,this.noVerticalOverlap,Yt)}__shouldAlignStart(e,i,s,o,n,a,l){const d=s-e[a?l.end:l.start]-o[l.end],c=e[a?l.start:l.end]-o[l.start],h=n?d:c,g=h>(n?c:d)||h>i;return n===g}__adjustBottomProperty(e,i,s){let o;if(e===i.end){if(i.end===Yt.end){const n=Math.min(window.innerHeight,document.documentElement.clientHeight);if(s>n&&this.__oldViewportHeight){const a=this.__oldViewportHeight-n;o=s-a}this.__oldViewportHeight=n}if(i.end===Qt.end){const n=Math.min(window.innerWidth,document.documentElement.clientWidth);if(s>n&&this.__oldViewportWidth){const a=this.__oldViewportWidth-n;o=s-a}this.__oldViewportWidth=n}}return o}__calculatePositionInOneDimension(e,i,s,o,n,a){const l=a?o.start:o.end,d=a?o.end:o.start,c=parseFloat(n.style[l]||getComputedStyle(n)[l]),h=this.__adjustBottomProperty(l,o,c),m=i[a?o.start:o.end]-e[s===a?o.end:o.start],g=h?`${h}px`:`${c+m*(a?-1:1)}px`;return{[l]:g,[d]:""}}};/**
 * @license
 * Copyright (c) 2015 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */A("vaadin-combo-box-overlay",x`
    #overlay {
      width: var(--vaadin-combo-box-overlay-width, var(--_vaadin-combo-box-overlay-default-width, auto));
    }

    [part='content'] {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
  `,{moduleId:"vaadin-combo-box-overlay-styles"});let ut;class Os extends Bi(j){static get is(){return"vaadin-combo-box-overlay"}static get template(){return ut||(ut=super.template.cloneNode(!0),ut.content.querySelector('[part~="overlay"]').removeAttribute("tabindex")),ut}static get observers(){return["_setOverlayWidth(positionTarget, opened)"]}connectedCallback(){super.connectedCallback();const t=this._comboBox,e=t&&t.getAttribute("dir");e&&this.setAttribute("dir",e)}ready(){super.ready();const t=document.createElement("div");t.setAttribute("part","loader");const e=this.shadowRoot.querySelector('[part~="content"]');e.parentNode.insertBefore(t,e)}_outsideClickListener(t){const e=t.composedPath();!e.includes(this.positionTarget)&&!e.includes(this)&&this.close()}_setOverlayWidth(t,e){if(t&&e){const i=this.localName;this.style.setProperty(`--_${i}-default-width`,`${t.clientWidth}px`);const s=getComputedStyle(this._comboBox).getPropertyValue(`--${i}-width`);s===""?this.style.removeProperty(`--${i}-width`):this.style.setProperty(`--${i}-width`,s),this._updatePosition()}}}customElements.define(Os.is,Os);/**
 * @license
 * Copyright (c) 2015 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ce=class{toString(){return""}};/**
 * @license
 * Copyright (c) 2015 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class zs extends O{static get is(){return"vaadin-combo-box-scroller"}static get template(){return z`
      <style>
        :host {
          display: block;
          min-height: 1px;
          overflow: auto;

          /* Fixes item background from getting on top of scrollbars on Safari */
          transform: translate3d(0, 0, 0);

          /* Enable momentum scrolling on iOS */
          -webkit-overflow-scrolling: touch;

          /* Fixes scrollbar disappearing when 'Show scroll bars: Always' enabled in Safari */
          box-shadow: 0 0 0 white;
        }

        #selector {
          border-width: var(--_vaadin-combo-box-items-container-border-width);
          border-style: var(--_vaadin-combo-box-items-container-border-style);
          border-color: var(--_vaadin-combo-box-items-container-border-color);
        }
      </style>
      <div id="selector">
        <slot></slot>
      </div>
    `}static get properties(){return{items:{type:Array,observer:"__itemsChanged"},focusedIndex:{type:Number,observer:"__focusedIndexChanged"},loading:{type:Boolean,observer:"__loadingChanged"},opened:{type:Boolean,observer:"__openedChanged"},selectedItem:{type:Object,observer:"__selectedItemChanged"},itemIdPath:{type:String},comboBox:{type:Object},getItemLabel:{type:Object},renderer:{type:Object,observer:"__rendererChanged"},theme:{type:String}}}constructor(){super(),this.__boundOnItemClick=this.__onItemClick.bind(this)}__openedChanged(t){t&&this.requestContentUpdate()}ready(){super.ready(),this.id=`${this.localName}-${Lt()}`,this.__hostTagName=this.constructor.is.replace("-scroller",""),this.setAttribute("role","listbox"),this.addEventListener("click",t=>t.stopPropagation()),this.__patchWheelOverScrolling(),this.__virtualizer=new so({createElements:this.__createElements.bind(this),updateElement:this.__updateElement.bind(this),elementsContainer:this,scrollTarget:this,scrollContainer:this.$.selector})}requestContentUpdate(){this.__virtualizer&&this.__virtualizer.update()}scrollIntoView(t){if(!(this.opened&&t>=0))return;const e=this._visibleItemsCount();let i=t;t>this.__virtualizer.lastVisibleIndex-1?(this.__virtualizer.scrollToIndex(t),i=t-e+1):t>this.__virtualizer.firstVisibleIndex&&(i=this.__virtualizer.firstVisibleIndex),this.__virtualizer.scrollToIndex(Math.max(0,i));const s=[...this.children].find(l=>!l.hidden&&l.index===this.__virtualizer.lastVisibleIndex);if(!s||t!==s.index)return;const o=s.getBoundingClientRect(),n=this.getBoundingClientRect(),a=o.bottom-n.bottom+this._viewportTotalPaddingBottom;a>0&&(this.scrollTop+=a)}__getAriaRole(t){return t!==void 0?"option":!1}__getAriaSelected(t,e){return this.__isItemFocused(t,e).toString()}__isItemFocused(t,e){return!this.loading&&t===e}__isItemSelected(t,e,i){return t instanceof ce?!1:i&&t!==void 0&&e!==void 0?this.get(i,t)===this.get(i,e):t===e}__itemsChanged(t){this.__virtualizer&&t&&(this.__virtualizer.size=t.length,this.__virtualizer.flush(),this.requestContentUpdate())}__loadingChanged(){this.requestContentUpdate()}__selectedItemChanged(){this.requestContentUpdate()}__focusedIndexChanged(t,e){t!==e&&this.requestContentUpdate(),t>=0&&!this.loading&&this.scrollIntoView(t)}__rendererChanged(t,e){(t||e)&&this.requestContentUpdate()}__createElements(t){return[...Array(t)].map(()=>{const e=document.createElement(`${this.__hostTagName}-item`);return e.addEventListener("click",this.__boundOnItemClick),e.tabIndex="-1",e.style.width="100%",e})}__updateElement(t,e){const i=this.items[e],s=this.focusedIndex;t.setProperties({item:i,index:e,label:this.getItemLabel(i),selected:this.__isItemSelected(i,this.selectedItem,this.itemIdPath),renderer:this.renderer,focused:this.__isItemFocused(s,e)}),t.id=`${this.__hostTagName}-item-${e}`,t.setAttribute("role",this.__getAriaRole(e)),t.setAttribute("aria-selected",this.__getAriaSelected(s,e)),t.setAttribute("aria-posinset",e+1),t.setAttribute("aria-setsize",this.items.length),this.theme?t.setAttribute("theme",this.theme):t.removeAttribute("theme"),i instanceof ce&&this.__requestItemByIndex(e)}__onItemClick(t){this.dispatchEvent(new CustomEvent("selection-changed",{detail:{item:t.currentTarget.item}}))}__patchWheelOverScrolling(){this.$.selector.addEventListener("wheel",t=>{const e=this.scrollTop===0,i=this.scrollHeight-this.scrollTop-this.clientHeight<=1;(e&&t.deltaY<0||i&&t.deltaY>0)&&t.preventDefault()})}get _viewportTotalPaddingBottom(){if(this._cachedViewportTotalPaddingBottom===void 0){const t=window.getComputedStyle(this.$.selector);this._cachedViewportTotalPaddingBottom=[t.paddingBottom,t.borderBottomWidth].map(e=>parseInt(e,10)).reduce((e,i)=>e+i)}return this._cachedViewportTotalPaddingBottom}__requestItemByIndex(t){requestAnimationFrame(()=>{this.dispatchEvent(new CustomEvent("index-requested",{detail:{index:t,currentScrollerPos:this._oldScrollerPosition}}))})}_visibleItemsCount(){return this.__virtualizer.scrollToIndex(this.__virtualizer.firstVisibleIndex),this.__virtualizer.size>0?this.__virtualizer.lastVisibleIndex-this.__virtualizer.firstVisibleIndex+1:0}}customElements.define(zs.is,zs);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class dd extends re{constructor(t){super(t,"error-message",()=>document.createElement("div"),(e,i)=>{this.__updateErrorId(i),this.__updateHasError()},!0)}get errorId(){return this.node&&this.node.id}setErrorMessage(t){this.errorMessage=t,this.__updateHasError()}setInvalid(t){this.invalid=t,this.__updateHasError()}initCustomNode(t){this.__updateErrorId(t),t.textContent&&!this.errorMessage&&(this.errorMessage=t.textContent.trim()),this.__updateHasError()}teardownNode(t){let e=this.getSlotChild();!e&&t!==this.defaultNode&&(e=this.attachDefaultNode(),this.initNode(e)),this.__updateHasError()}__isNotEmpty(t){return Boolean(t&&t.trim()!=="")}__updateHasError(){const t=this.node,e=Boolean(this.invalid&&this.__isNotEmpty(this.errorMessage));t&&(t.textContent=e?this.errorMessage:"",t.hidden=!e,e?t.setAttribute("role","alert"):t.removeAttribute("role")),this.host.toggleAttribute("has-error-message",e)}__updateErrorId(t){t.id||(t.id=this.defaultId)}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class cd{constructor(t){this.host=t,this.__required=!1}setTarget(t){this.__target=t,this.__setAriaRequiredAttribute(this.__required),this.__setLabelIdToAriaAttribute(this.__labelId),this.__setErrorIdToAriaAttribute(this.__errorId),this.__setHelperIdToAriaAttribute(this.__helperId)}setRequired(t){this.__setAriaRequiredAttribute(t),this.__required=t}setLabelId(t){this.__setLabelIdToAriaAttribute(t,this.__labelId),this.__labelId=t}setErrorId(t){this.__setErrorIdToAriaAttribute(t,this.__errorId),this.__errorId=t}setHelperId(t){this.__setHelperIdToAriaAttribute(t,this.__helperId),this.__helperId=t}get __isGroupField(){return this.__target===this.host}__setLabelIdToAriaAttribute(t,e){this.__setAriaAttributeId("aria-labelledby",t,e)}__setErrorIdToAriaAttribute(t,e){this.__isGroupField?this.__setAriaAttributeId("aria-labelledby",t,e):this.__setAriaAttributeId("aria-describedby",t,e)}__setHelperIdToAriaAttribute(t,e){this.__isGroupField?this.__setAriaAttributeId("aria-labelledby",t,e):this.__setAriaAttributeId("aria-describedby",t,e)}__setAriaRequiredAttribute(t){!this.__target||["input","textarea"].includes(this.__target.localName)||(t?this.__target.setAttribute("aria-required","true"):this.__target.removeAttribute("aria-required"))}__setAriaAttributeId(t,e,i){!this.__target||(i&&Ft(this.__target,t,i),e&&Mt(this.__target,t,e))}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class hd extends re{constructor(t){super(t,"helper",null,null,!0)}get helperId(){return this.node&&this.node.id}initCustomNode(t){this.__updateHelperId(t),this.__observeHelper(t);const e=this.__hasHelper(t);this.__toggleHasHelper(e)}teardownNode(t){this.__helperIdObserver&&this.__helperIdObserver.disconnect();const e=this.getSlotChild();if(e&&e!==this.defaultNode){const i=this.__hasHelper(e);this.__toggleHasHelper(i)}else this.__applyDefaultHelper(this.helperText,e)}setHelperText(t){this.helperText=t;const e=this.getSlotChild();(!e||e===this.defaultNode)&&this.__applyDefaultHelper(t,e)}__hasHelper(t){return t?t.children.length>0||t.nodeType===Node.ELEMENT_NODE&&customElements.get(t.localName)||this.__isNotEmpty(t.textContent):!1}__isNotEmpty(t){return t&&t.trim()!==""}__applyDefaultHelper(t,e){const i=this.__isNotEmpty(t);i&&!e&&(this.slotFactory=()=>document.createElement("div"),e=this.attachDefaultNode(),this.__updateHelperId(e),this.__observeHelper(e)),e&&(e.textContent=t),this.__toggleHasHelper(i)}__observeHelper(t){this.__helperObserver=new MutationObserver(e=>{e.forEach(i=>{const s=i.target,o=s===this.node;if(i.type==="attributes")o&&s.id!==this.defaultId&&this.__updateHelperId(s);else if(o||s.parentElement===this.node){const n=this.__hasHelper(this.node);this.__toggleHasHelper(n)}})}),this.__helperObserver.observe(t,{attributes:!0,attributeFilter:["id"],childList:!0,subtree:!0,characterData:!0})}__toggleHasHelper(t){this.host.toggleAttribute("has-helper",t),this.dispatchEvent(new CustomEvent("helper-changed",{detail:{hasHelper:t,node:this.node}}))}__updateHelperId(t){t.id||(t.id=this.defaultId)}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Co=N(r=>class extends r{static get properties(){return{invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},required:{type:Boolean,reflectToAttribute:!0}}}validate(){const e=this.checkValidity();return this._setInvalid(!e),this.dispatchEvent(new CustomEvent("validated",{detail:{valid:e}})),e}checkValidity(){return!this.required||!!this.value}_setInvalid(e){this._shouldSetInvalid(e)&&(this.invalid=e)}_shouldSetInvalid(e){return!0}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ud=r=>class extends Co(jr(Y(r))){static get properties(){return{ariaTarget:{type:Object,observer:"_ariaTargetChanged"},errorMessage:{type:String,observer:"_errorMessageChanged"},helperText:{type:String,observer:"_helperTextChanged"}}}static get observers(){return["_invalidChanged(invalid)","_requiredChanged(required)"]}get _errorId(){return this._errorController.errorId}get _errorNode(){return this._errorController.node}get _helperId(){return this._helperController.helperId}get _helperNode(){return this._helperController.node}constructor(){super(),this._fieldAriaController=new cd(this),this._helperController=new hd(this),this._errorController=new dd(this),this._labelController.addEventListener("label-changed",e=>{const{hasLabel:i,node:s}=e.detail;this.__labelChanged(i,s)}),this._helperController.addEventListener("helper-changed",e=>{const{hasHelper:i,node:s}=e.detail;this.__helperChanged(i,s)})}ready(){super.ready(),this.addController(this._fieldAriaController),this.addController(this._helperController),this.addController(this._errorController)}__helperChanged(e,i){e?this._fieldAriaController.setHelperId(i.id):this._fieldAriaController.setHelperId(null)}__labelChanged(e,i){e?this._fieldAriaController.setLabelId(i.id):this._fieldAriaController.setLabelId(null)}_errorMessageChanged(e){this._errorController.setErrorMessage(e)}_helperTextChanged(e){this._helperController.setHelperText(e)}_ariaTargetChanged(e){e&&this._fieldAriaController.setTarget(e)}_requiredChanged(e){this._fieldAriaController.setRequired(e)}_invalidChanged(e){this._errorController.setInvalid(e),setTimeout(()=>{e?this._fieldAriaController.setErrorId(this._errorController.errorId):this._fieldAriaController.setErrorId(null)})}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const wo=N(r=>class extends Wr(Co(ki(r))){static get constraints(){return["required"]}static get delegateAttrs(){return[...super.delegateAttrs,"required"]}ready(){super.ready(),this._createConstraintsObserver()}checkValidity(){return this.inputElement&&this._hasValidConstraints(this.constructor.constraints.map(e=>this[e]))?this.inputElement.checkValidity():!this.invalid}_hasValidConstraints(e){return e.some(i=>this.__isValidConstraint(i))}_createConstraintsObserver(){this._createMethodObserver(`_constraintsChanged(stateTarget, ${this.constructor.constraints.join(", ")})`)}_constraintsChanged(e,...i){if(!e)return;const s=this._hasValidConstraints(i),o=this.__previousHasConstraints&&!s;(this._hasValue||this.invalid)&&s?this.validate():o&&this._setInvalid(!1),this.__previousHasConstraints=s}_onChange(e){e.stopPropagation(),this.validate(),this.dispatchEvent(new CustomEvent("change",{detail:{sourceEvent:e},bubbles:e.bubbles,cancelable:e.cancelable}))}__isValidConstraint(e){return Boolean(e)||e===0}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Xt=new WeakMap;function pd(r){return Xt.has(r)||Xt.set(r,new Set),Xt.get(r)}function _d(r,t){const e=document.createElement("style");e.textContent=r,t===document?document.head.appendChild(e):t.insertBefore(e,t.firstChild)}const fd=N(r=>class extends r{get slotStyles(){return{}}connectedCallback(){super.connectedCallback(),this.__applySlotStyles()}__applySlotStyles(){const e=this.getRootNode(),i=pd(e);this.slotStyles.forEach(s=>{i.has(s)||(_d(s,e),i.add(s))})}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const xo=r=>class extends fd(Gr(wo(ud(kt(r))))){static get properties(){return{allowedCharPattern:{type:String,observer:"_allowedCharPatternChanged"},autoselect:{type:Boolean,value:!1},clearButtonVisible:{type:Boolean,reflectToAttribute:!0,value:!1},name:{type:String,reflectToAttribute:!0},placeholder:{type:String,reflectToAttribute:!0},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},title:{type:String,reflectToAttribute:!0}}}static get delegateAttrs(){return[...super.delegateAttrs,"name","type","placeholder","readonly","invalid","title"]}constructor(){super(),this._boundOnPaste=this._onPaste.bind(this),this._boundOnDrop=this._onDrop.bind(this),this._boundOnBeforeInput=this._onBeforeInput.bind(this)}get clearElement(){return console.warn(`Please implement the 'clearElement' property in <${this.localName}>`),null}get slotStyles(){return[`
          :is(input[slot='input'], textarea[slot='textarea'])::placeholder {
            font: inherit;
            color: inherit;
          }
        `]}ready(){super.ready(),this.clearElement&&this.clearElement.addEventListener("click",e=>this._onClearButtonClick(e))}_onClearButtonClick(e){e.preventDefault(),this.inputElement.focus(),this.__clear()}_onFocus(e){super._onFocus(e),this.autoselect&&this.inputElement&&this.inputElement.select()}_onEscape(e){super._onEscape(e),this.clearButtonVisible&&!!this.value&&(e.stopPropagation(),this.__clear())}_onChange(e){e.stopPropagation(),this.validate(),this.dispatchEvent(new CustomEvent("change",{detail:{sourceEvent:e},bubbles:e.bubbles,cancelable:e.cancelable}))}__clear(){this.clear(),this.inputElement.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),this.inputElement.dispatchEvent(new Event("change",{bubbles:!0}))}_addInputListeners(e){super._addInputListeners(e),e.addEventListener("paste",this._boundOnPaste),e.addEventListener("drop",this._boundOnDrop),e.addEventListener("beforeinput",this._boundOnBeforeInput)}_removeInputListeners(e){super._removeInputListeners(e),e.removeEventListener("paste",this._boundOnPaste),e.removeEventListener("drop",this._boundOnDrop),e.removeEventListener("beforeinput",this._boundOnBeforeInput)}_onKeyDown(e){super._onKeyDown(e),this.allowedCharPattern&&!this.__shouldAcceptKey(e)&&(e.preventDefault(),this._markInputPrevented())}_markInputPrevented(){this.setAttribute("input-prevented",""),this._preventInputDebouncer=R.debounce(this._preventInputDebouncer,K.after(200),()=>{this.removeAttribute("input-prevented")})}__shouldAcceptKey(e){return e.metaKey||e.ctrlKey||!e.key||e.key.length!==1||this.__allowedCharRegExp.test(e.key)}_onPaste(e){if(this.allowedCharPattern){const i=e.clipboardData.getData("text");this.__allowedTextRegExp.test(i)||(e.preventDefault(),this._markInputPrevented())}}_onDrop(e){if(this.allowedCharPattern){const i=e.dataTransfer.getData("text");this.__allowedTextRegExp.test(i)||(e.preventDefault(),this._markInputPrevented())}}_onBeforeInput(e){this.allowedCharPattern&&e.data&&!this.__allowedTextRegExp.test(e.data)&&(e.preventDefault(),this._markInputPrevented())}_allowedCharPatternChanged(e){if(e)try{this.__allowedCharRegExp=new RegExp(`^${e}$`),this.__allowedTextRegExp=new RegExp(`^${e}*$`)}catch(i){console.error(i)}}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ao=r=>class extends wo(r){static get properties(){return{pattern:{type:String},preventInvalidInput:{type:Boolean,observer:"_preventInvalidInputChanged"}}}static get delegateAttrs(){return[...super.delegateAttrs,"pattern"]}static get constraints(){return[...super.constraints,"pattern"]}_checkInputValue(){if(this.preventInvalidInput){const e=this.inputElement;e&&e.value.length>0&&!this.checkValidity()&&(e.value=this.value||"",this.setAttribute("input-prevented",""),this._inputDebouncer=R.debounce(this._inputDebouncer,K.after(200),()=>{this.removeAttribute("input-prevented")}))}}_onInput(e){this._checkInputValue(),super._onInput(e)}_preventInvalidInputChanged(e){e&&console.warn('WARNING: Since Vaadin 23.2, "preventInvalidInput" is deprecated. Please use "allowedCharPattern" instead.')}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const md=x`
  [part='clear-button'] {
    display: none;
    cursor: default;
  }

  [part='clear-button']::before {
    content: '✕';
  }

  :host([clear-button-visible][has-value]:not([disabled]):not([readonly])) [part='clear-button'] {
    display: block;
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const gd=x`
  :host {
    display: inline-flex;
    outline: none;
  }

  :host::before {
    content: '\\2003';
    width: 0;
    display: inline-block;
    /* Size and position this element on the same vertical position as the input-field element
          to make vertical align for the host element work as expected */
  }

  :host([hidden]) {
    display: none !important;
  }

  :host(:not([has-label])) [part='label'] {
    display: none;
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const vd=x`
  [class$='container'] {
    display: flex;
    flex-direction: column;
    min-width: 100%;
    max-width: 100%;
    width: var(--vaadin-field-default-width, 12em);
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Eo=[gd,vd,md];/**
 * @license
 * Copyright (c) 2015 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const bd=r=>class extends r{static get properties(){return{pageSize:{type:Number,value:50,observer:"_pageSizeChanged"},size:{type:Number,observer:"_sizeChanged"},dataProvider:{type:Object,observer:"_dataProviderChanged"},_pendingRequests:{value:()=>({})},__placeHolder:{value:new ce},__previousDataProviderFilter:{type:String}}}static get observers(){return["_dataProviderFilterChanged(filter)","_warnDataProviderValue(dataProvider, value)","_ensureFirstPage(opened)"]}ready(){super.ready(),this._scroller.addEventListener("index-requested",e=>{const i=e.detail.index,s=e.detail.currentScrollerPos,o=Math.floor(this.pageSize*1.5);if(!this._shouldSkipIndex(i,o,s)&&i!==void 0){const n=this._getPageForIndex(i);this._shouldLoadPage(n)&&this._loadPage(n)}})}_dataProviderFilterChanged(e){if(this.__previousDataProviderFilter===void 0&&e===""){this.__previousDataProviderFilter=e;return}this.__previousDataProviderFilter!==e&&(this.__previousDataProviderFilter=e,this._pendingRequests={},this.loading=this._shouldFetchData(),this.size=void 0,this.clearCache())}_shouldFetchData(){return this.dataProvider?this.opened||this.filter&&this.filter.length:!1}_ensureFirstPage(e){e&&this._shouldLoadPage(0)&&this._loadPage(0)}_shouldSkipIndex(e,i,s){return s!==0&&e>=s-i&&e<=s+i}_shouldLoadPage(e){if(!this.filteredItems||this._forceNextRequest)return this._forceNextRequest=!1,!0;const i=this.filteredItems[e*this.pageSize];return i!==void 0?i instanceof ce:this.size===void 0}_loadPage(e){if(this._pendingRequests[e]||!this.dataProvider)return;const i={page:e,pageSize:this.pageSize,filter:this.filter},s=(o,n)=>{if(this._pendingRequests[e]!==s)return;const a=this.filteredItems?[...this.filteredItems]:[];a.splice(i.page*i.pageSize,o.length,...o),this.filteredItems=a,!this.opened&&!this._isInputFocused()&&this._commitValue(),n!==void 0&&(this.size=n),delete this._pendingRequests[e],Object.keys(this._pendingRequests).length===0&&(this.loading=!1)};this._pendingRequests[e]=s,this.loading=!0,this.dataProvider(i,s)}_getPageForIndex(e){return Math.floor(e/this.pageSize)}clearCache(){if(!this.dataProvider)return;this._pendingRequests={};const e=[];for(let i=0;i<(this.size||0);i++)e.push(this.__placeHolder);this.filteredItems=e,this._shouldFetchData()?(this._forceNextRequest=!1,this._loadPage(0)):this._forceNextRequest=!0}_sizeChanged(e=0){const i=(this.filteredItems||[]).slice(0,e);for(let s=0;s<e;s++)i[s]=i[s]!==void 0?i[s]:this.__placeHolder;this.filteredItems=i,this._flushPendingRequests(e)}_pageSizeChanged(e,i){if(Math.floor(e)!==e||e<1)throw this.pageSize=i,new Error("`pageSize` value must be an integer > 0");this.clearCache()}_dataProviderChanged(e,i){this._ensureItemsOrDataProvider(()=>{this.dataProvider=i}),this.clearCache()}_ensureItemsOrDataProvider(e){if(this.items!==void 0&&this.dataProvider!==void 0)throw e(),new Error("Using `items` and `dataProvider` together is not supported");this.dataProvider&&!this.filteredItems&&(this.filteredItems=[])}_warnDataProviderValue(e,i){if(e&&i!==""&&(this.selectedItem===void 0||this.selectedItem===null)){const s=this.__getItemIndexByValue(this.filteredItems,i);(s<0||!this._getItemLabel(this.filteredItems[s]))&&console.warn("Warning: unable to determine the label for the provided `value`. Nothing to display in the text field. This usually happens when setting an initial `value` before any items are returned from the `dataProvider` callback. Consider setting `selectedItem` instead of `value`")}}_flushPendingRequests(e){if(this._pendingRequests){const i=Math.ceil(e/this.pageSize),s=Object.keys(this._pendingRequests);for(let o=0;o<s.length;o++){const n=parseInt(s[o]);n>=i&&this._pendingRequests[n]([],e)}}}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class yd{constructor(t){this.host=t,t.addEventListener("opened-changed",()=>{t.opened||this.__setVirtualKeyboardEnabled(!1)}),t.addEventListener("blur",()=>this.__setVirtualKeyboardEnabled(!0)),t.addEventListener("touchstart",()=>this.__setVirtualKeyboardEnabled(!0))}__setVirtualKeyboardEnabled(t){this.host.inputElement&&(this.host.inputElement.inputMode=t?"":"none")}}/**
 * @license
 * Copyright (c) 2015 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function ks(r){return r!=null}function Ls(r,t){return r.findIndex(e=>e instanceof ce?!1:t(e))}const Cd=r=>class extends Y(kt(ki(Ot(r)))){static get properties(){return{opened:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0,observer:"_openedChanged"},autoOpenDisabled:{type:Boolean},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},renderer:Function,items:{type:Array,observer:"_itemsChanged"},allowCustomValue:{type:Boolean,value:!1},filteredItems:{type:Array,observer:"_filteredItemsChanged"},_lastCommittedValue:String,loading:{type:Boolean,value:!1,reflectToAttribute:!0},_focusedIndex:{type:Number,observer:"_focusedIndexChanged",value:-1},filter:{type:String,value:"",notify:!0},selectedItem:{type:Object,notify:!0},itemLabelPath:{type:String,value:"label",observer:"_itemLabelPathChanged"},itemValuePath:{type:String,value:"value"},itemIdPath:String,_toggleElement:{type:Object,observer:"_toggleElementChanged"},_closeOnBlurIsPrevented:Boolean,_scroller:Object,_overlayOpened:{type:Boolean,observer:"_overlayOpenedChanged"}}}static get observers(){return["_selectedItemChanged(selectedItem, itemValuePath, itemLabelPath)","_openedOrItemsChanged(opened, filteredItems, loading)","_updateScroller(_scroller, filteredItems, opened, loading, selectedItem, itemIdPath, _focusedIndex, renderer, theme)"]}constructor(){super(),this._boundOnFocusout=this._onFocusout.bind(this),this._boundOverlaySelectedItemChanged=this._overlaySelectedItemChanged.bind(this),this._boundOnClearButtonMouseDown=this.__onClearButtonMouseDown.bind(this),this._boundOnClick=this._onClick.bind(this),this._boundOnOverlayTouchAction=this._onOverlayTouchAction.bind(this),this._boundOnTouchend=this._onTouchend.bind(this)}get _tagNamePrefix(){return"vaadin-combo-box"}get _inputElementValue(){return this.inputElement?this.inputElement[this._propertyForValue]:void 0}set _inputElementValue(e){this.inputElement&&(this.inputElement[this._propertyForValue]=e)}get _nativeInput(){return this.inputElement}_inputElementChanged(e){super._inputElementChanged(e);const i=this._nativeInput;i&&(i.autocomplete="off",i.autocapitalize="off",i.setAttribute("role","combobox"),i.setAttribute("aria-autocomplete","list"),i.setAttribute("aria-expanded",!!this.opened),i.setAttribute("spellcheck","false"),i.setAttribute("autocorrect","off"),this._revertInputValueToValue(),this.clearElement&&this.clearElement.addEventListener("mousedown",this._boundOnClearButtonMouseDown))}ready(){super.ready(),this._initOverlay(),this._initScroller(),this.addEventListener("focusout",this._boundOnFocusout),this._lastCommittedValue=this.value,this.addEventListener("click",this._boundOnClick),this.addEventListener("touchend",this._boundOnTouchend);const e=()=>{requestAnimationFrame(()=>{this.$.overlay.bringToFront()})};this.addEventListener("mousedown",e),this.addEventListener("touchstart",e),Nt(this),this.addController(new yd(this))}disconnectedCallback(){super.disconnectedCallback(),this.close()}requestContentUpdate(){!this._scroller||(this._scroller.requestContentUpdate(),this._getItemElements().forEach(e=>{e.requestContentUpdate()}))}open(){!this.disabled&&!this.readonly&&(this.opened=!0)}close(){this.opened=!1}_propertiesChanged(e,i,s){super._propertiesChanged(e,i,s),i.filter!==void 0&&this._filterChanged(i.filter)}_initOverlay(){const e=this.$.overlay;e._comboBox=this,e.addEventListener("touchend",this._boundOnOverlayTouchAction),e.addEventListener("touchmove",this._boundOnOverlayTouchAction),e.addEventListener("mousedown",i=>i.preventDefault()),e.addEventListener("opened-changed",i=>{this._overlayOpened=i.detail.value})}_initScroller(e){const i=`${this._tagNamePrefix}-scroller`,s=this.$.overlay;s.renderer=n=>{n.firstChild||n.appendChild(document.createElement(i))},s.requestContentUpdate();const o=s.querySelector(i);o.comboBox=e||this,o.getItemLabel=this._getItemLabel.bind(this),o.addEventListener("selection-changed",this._boundOverlaySelectedItemChanged),this._scroller=o}_updateScroller(e,i,s,o,n,a,l,d,c){e&&(s&&(e.style.maxHeight=getComputedStyle(this).getPropertyValue(`--${this._tagNamePrefix}-overlay-max-height`)||"65vh"),e.setProperties({items:s?i:[],opened:s,loading:o,selectedItem:n,itemIdPath:a,focusedIndex:l,renderer:d,theme:c}))}_openedOrItemsChanged(e,i,s){this._overlayOpened=!!(e&&(s||i&&i.length))}_overlayOpenedChanged(e,i){e?(this.dispatchEvent(new CustomEvent("vaadin-combo-box-dropdown-opened",{bubbles:!0,composed:!0})),this._onOpened()):i&&this.filteredItems&&this.filteredItems.length&&(this.close(),this.dispatchEvent(new CustomEvent("vaadin-combo-box-dropdown-closed",{bubbles:!0,composed:!0})))}_focusedIndexChanged(e,i){i!==void 0&&this._updateActiveDescendant(e)}_isInputFocused(){return this.inputElement&&Rt(this.inputElement)}_updateActiveDescendant(e){const i=this._nativeInput;if(!i)return;const s=this._getItemElements().find(o=>o.index===e);s?i.setAttribute("aria-activedescendant",s.id):i.removeAttribute("aria-activedescendant")}_openedChanged(e,i){if(i===void 0)return;e?(this._openedWithFocusRing=this.hasAttribute("focus-ring"),!this._isInputFocused()&&!Ze&&this.focus(),this.$.overlay.restoreFocusOnClose=!0):(this._onClosed(),this._openedWithFocusRing&&this._isInputFocused()&&this.setAttribute("focus-ring",""));const s=this._nativeInput;s&&(s.setAttribute("aria-expanded",!!e),e?s.setAttribute("aria-controls",this._scroller.id):s.removeAttribute("aria-controls"))}_onOverlayTouchAction(){this._closeOnBlurIsPrevented=!0,this.inputElement.blur(),this._closeOnBlurIsPrevented=!1}_isClearButton(e){return e.composedPath()[0]===this.clearElement}_handleClearButtonClick(e){e.preventDefault(),this._clear(),this.opened&&this.requestContentUpdate()}_onToggleButtonClick(e){e.preventDefault(),this.opened?this.close():this.open()}_onHostClick(e){this.autoOpenDisabled||(e.preventDefault(),this.open())}_onClick(e){const i=e.composedPath();this._isClearButton(e)?this._handleClearButtonClick(e):i.indexOf(this._toggleElement)>-1?this._onToggleButtonClick(e):this._onHostClick(e)}_onKeyDown(e){super._onKeyDown(e),e.key==="Tab"?this.$.overlay.restoreFocusOnClose=!1:e.key==="ArrowDown"?(this._onArrowDown(),e.preventDefault()):e.key==="ArrowUp"&&(this._onArrowUp(),e.preventDefault())}_getItemLabel(e){let i=e&&this.itemLabelPath?this.get(this.itemLabelPath,e):void 0;return i==null&&(i=e?e.toString():""),i}_getItemValue(e){let i=e&&this.itemValuePath?this.get(this.itemValuePath,e):void 0;return i===void 0&&(i=e?e.toString():""),i}_onArrowDown(){if(this.opened){const e=this.filteredItems;e&&(this._focusedIndex=Math.min(e.length-1,this._focusedIndex+1),this._prefillFocusedItemLabel())}else this.open()}_onArrowUp(){if(this.opened){if(this._focusedIndex>-1)this._focusedIndex=Math.max(0,this._focusedIndex-1);else{const e=this.filteredItems;e&&(this._focusedIndex=e.length-1)}this._prefillFocusedItemLabel()}else this.open()}_prefillFocusedItemLabel(){if(this._focusedIndex>-1){const e=this.filteredItems[this._focusedIndex];this._inputElementValue=this._getItemLabel(e),this._markAllSelectionRange()}}_setSelectionRange(e,i){this._isInputFocused()&&this.inputElement.setSelectionRange&&this.inputElement.setSelectionRange(e,i)}_markAllSelectionRange(){this._inputElementValue!==void 0&&this._setSelectionRange(0,this._inputElementValue.length)}_clearSelectionRange(){if(this._inputElementValue!==void 0){const e=this._inputElementValue?this._inputElementValue.length:0;this._setSelectionRange(e,e)}}_closeOrCommit(){!this.opened&&!this.loading?this._commitValue():this.close()}_onEnter(e){if(!this.allowCustomValue&&this._inputElementValue!==""&&this._focusedIndex<0){e.preventDefault(),e.stopPropagation();return}this.opened&&(e.preventDefault(),e.stopPropagation()),this._closeOrCommit()}_onEscape(e){this.autoOpenDisabled?this.opened||this.value!==this._inputElementValue&&this._inputElementValue.length>0?(e.stopPropagation(),this._focusedIndex=-1,this.cancel()):this.clearButtonVisible&&!this.opened&&!!this.value&&(e.stopPropagation(),this._clear()):this.opened?(e.stopPropagation(),this._focusedIndex>-1?(this._focusedIndex=-1,this._revertInputValue()):this.cancel()):this.clearButtonVisible&&!!this.value&&(e.stopPropagation(),this._clear())}_toggleElementChanged(e){e&&(e.addEventListener("mousedown",i=>i.preventDefault()),e.addEventListener("click",()=>{Ze&&!this._isInputFocused()&&document.activeElement.blur()}))}_clear(){this.selectedItem=null,this.allowCustomValue&&(this.value=""),this._detectAndDispatchChange()}cancel(){this._revertInputValueToValue(),this._lastCommittedValue=this.value,this._closeOrCommit()}_onOpened(){requestAnimationFrame(()=>{this._scrollIntoView(this._focusedIndex),this._updateActiveDescendant(this._focusedIndex)}),this._lastCommittedValue=this.value}_onClosed(){(!this.loading||this.allowCustomValue)&&this._commitValue()}_commitValue(){if(this._focusedIndex>-1){const e=this.filteredItems[this._focusedIndex];this.selectedItem!==e&&(this.selectedItem=e),this._inputElementValue=this._getItemLabel(this.selectedItem)}else if(this._inputElementValue===""||this._inputElementValue===void 0)this.selectedItem=null,this.allowCustomValue&&(this.value="");else{const e=[...this.filteredItems||[],this.selectedItem],i=e[this.__getItemIndexByLabel(e,this._inputElementValue)];if(this.allowCustomValue&&!i){const s=this._inputElementValue;this._lastCustomValue=s;const o=new CustomEvent("custom-value-set",{detail:s,composed:!0,cancelable:!0,bubbles:!0});this.dispatchEvent(o),o.defaultPrevented||(this.value=s)}else!this.allowCustomValue&&!this.opened&&i?this.value=this._getItemValue(i):this._inputElementValue=this.selectedItem?this._getItemLabel(this.selectedItem):this.value||""}this._detectAndDispatchChange(),this._clearSelectionRange(),this.filter=""}get _propertyForValue(){return"value"}_onInput(e){const i=this._inputElementValue,s={};this.filter===i?this._filterChanged(this.filter):s.filter=i,!this.opened&&!this._isClearButton(e)&&!this.autoOpenDisabled&&(s.opened=!0),this.setProperties(s)}_onChange(e){e.stopPropagation()}_itemLabelPathChanged(e){typeof e!="string"&&console.error("You should set itemLabelPath to a valid string")}_filterChanged(e){this._scrollIntoView(0),this._focusedIndex=-1,this.items?this.filteredItems=this._filterItems(this.items,e):this._filteredItemsChanged(this.filteredItems)}_revertInputValue(){this.filter!==""?this._inputElementValue=this.filter:this._revertInputValueToValue(),this._clearSelectionRange()}_revertInputValueToValue(){this.allowCustomValue&&!this.selectedItem?this._inputElementValue=this.value:this._inputElementValue=this._getItemLabel(this.selectedItem)}_selectedItemChanged(e){if(e==null)this.filteredItems&&(this.allowCustomValue||(this.value=""),this._toggleHasValue(this._hasValue),this._inputElementValue=this.value);else{const i=this._getItemValue(e);if(this.value!==i&&(this.value=i,this.value!==i))return;this._toggleHasValue(!0),this._inputElementValue=this._getItemLabel(e)}this.filteredItems&&(this._focusedIndex=this.filteredItems.indexOf(e))}_valueChanged(e,i){e===""&&i===void 0||(ks(e)?(this._getItemValue(this.selectedItem)!==e&&this._selectItemForValue(e),!this.selectedItem&&this.allowCustomValue&&(this._inputElementValue=e),this._toggleHasValue(this._hasValue)):this.selectedItem=null,this.filter="",this._lastCommittedValue=void 0)}_detectAndDispatchChange(){this.value!==this._lastCommittedValue&&(this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this._lastCommittedValue=this.value)}_itemsChanged(e,i){this._ensureItemsOrDataProvider(()=>{this.items=i}),e?this.filteredItems=e.slice(0):i&&(this.filteredItems=null)}_filteredItemsChanged(e,i){const s=i?i[this._focusedIndex]:null,o=this.__getItemIndexByValue(e,this.value);(this.selectedItem===null||this.selectedItem===void 0)&&o>=0&&(this.selectedItem=e[o]);const n=this.__getItemIndexByValue(e,this._getItemValue(s));n>-1?this._focusedIndex=n:this.__setInitialFocusedIndex()}__setInitialFocusedIndex(){const e=this._inputElementValue;e===void 0||e===this._getItemLabel(this.selectedItem)?this._focusedIndex=this.__getItemIndexByLabel(this.filteredItems,this._getItemLabel(this.selectedItem)):this._focusedIndex=this.__getItemIndexByLabel(this.filteredItems,this.filter)}_filterItems(e,i){return e&&e.filter(o=>(i=i?i.toString().toLowerCase():"",this._getItemLabel(o).toString().toLowerCase().indexOf(i)>-1))}_selectItemForValue(e){const i=this.__getItemIndexByValue(this.filteredItems,e),s=this.selectedItem;i>=0?this.selectedItem=this.filteredItems[i]:this.dataProvider&&this.selectedItem===void 0?this.selectedItem=void 0:this.selectedItem=null,this.selectedItem===null&&s===null&&this._selectedItemChanged(this.selectedItem)}_getItemElements(){return Array.from(this._scroller.querySelectorAll(`${this._tagNamePrefix}-item`))}_scrollIntoView(e){!this._scroller||this._scroller.scrollIntoView(e)}__getItemIndexByValue(e,i){return!e||!ks(i)?-1:Ls(e,s=>this._getItemValue(s)===i)}__getItemIndexByLabel(e,i){return!e||!i?-1:Ls(e,s=>this._getItemLabel(s).toString().toLowerCase()===i.toString().toLowerCase())}_overlaySelectedItemChanged(e){e.stopPropagation(),!(e.detail.item instanceof ce)&&this.opened&&(this._focusedIndex=this.filteredItems.indexOf(e.detail.item),this.close())}__onClearButtonMouseDown(e){e.preventDefault(),this.inputElement.focus()}_onFocusout(e){if(!(e.relatedTarget&&e.relatedTarget.localName===`${this._tagNamePrefix}-item`)){if(e.relatedTarget===this.$.overlay){e.composedPath()[0].focus();return}if(!this.readonly&&!this._closeOnBlurIsPrevented){if(!this.opened&&this.allowCustomValue&&this._inputElementValue===this._lastCustomValue){delete this._lastCustomValue;return}this._closeOrCommit()}}}_onTouchend(e){!this.clearElement||e.composedPath()[0]!==this.clearElement||(e.preventDefault(),this._clear())}};/**
 * @license
 * Copyright (c) 2015 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */A("vaadin-combo-box",Eo,{moduleId:"vaadin-combo-box-styles"});class Rs extends bd(Cd(Ao(xo(F(V(O)))))){static get is(){return"vaadin-combo-box"}static get template(){return z`
      <style>
        :host([opened]) {
          pointer-events: auto;
        }
      </style>

      <div class="vaadin-combo-box-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
          <div id="toggleButton" part="toggle-button" slot="suffix" aria-hidden="true"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <vaadin-combo-box-overlay
        id="overlay"
        opened="[[_overlayOpened]]"
        loading$="[[loading]]"
        theme$="[[_theme]]"
        position-target="[[_positionTarget]]"
        no-vertical-overlap
        restore-focus-node="[[inputElement]]"
      ></vaadin-combo-box-overlay>

      <slot name="tooltip"></slot>
    `}static get properties(){return{_positionTarget:{type:Object}}}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new Ni(this,t=>{this._setInputElement(t),this._setFocusElement(t),this.stateTarget=t,this.ariaTarget=t})),this.addController(new Di(this.inputElement,this._labelController)),this._tooltipController=new Pe(this),this.addController(this._tooltipController),this._tooltipController.setPosition("top"),this._tooltipController.setShouldShow(t=>!t.opened),this._positionTarget=this.shadowRoot.querySelector('[part="input-field"]'),this._toggleElement=this.$.toggleButton}_setFocused(t){super._setFocused(t),t||this.validate()}_shouldRemoveFocus(t){return t.relatedTarget===this.$.overlay?(t.composedPath()[0].focus(),!1):!0}_onClearButtonClick(t){t.stopPropagation(),this._handleClearButtonClick(t)}_onHostClick(t){const e=t.composedPath();(e.includes(this._labelNode)||e.includes(this._positionTarget))&&super._onHostClick(t)}}customElements.define(Rs.is,Rs);const wd=x`
  :host([phone]) {
    top: 0 !important;
    right: 0 !important;
    bottom: var(--vaadin-overlay-viewport-bottom) !important;
    left: 0 !important;
    align-items: stretch;
    justify-content: flex-end;
  }

  /* TODO These style overrides should not be needed.
   We should instead offer a way to have non-selectable items inside the context menu. */

  :host {
    --_lumo-list-box-item-selected-icon-display: none;
    --_lumo-list-box-item-padding-left: calc(var(--lumo-space-m) + var(--lumo-border-radius-m) / 4);
  }

  [part='overlay'] {
    outline: none;
  }
`;A("vaadin-context-menu-overlay",[go,wd],{moduleId:"lumo-context-menu-overlay"});A("vaadin-context-menu-list-box",x`
    :host(.vaadin-menu-list-box) {
      --_lumo-list-box-item-selected-icon-display: block;
    }

    /* Normal item */
    [part='items'] ::slotted(.vaadin-menu-item) {
      -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);
      cursor: default;
    }

    [part='items'] ::slotted(.vaadin-menu-item) {
      outline: none;
      border-radius: var(--lumo-border-radius-m);
      padding-left: var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius-m) / 4));
      padding-right: calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4);
    }

    :host(.vaadin-menu-list-box) [part='items'] ::slotted(.vaadin-menu-item) {
      padding-left: calc(var(--lumo-border-radius-m) / 4);
      padding-right: calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4);
    }

    /* Hovered item */
    /* TODO a workaround until we have "focus-follows-mouse". After that, use the hover style for focus-ring as well */
    [part='items'] ::slotted(.vaadin-menu-item:hover:not([disabled])),
    [part='items'] ::slotted(.vaadin-menu-item[expanded]:not([disabled])) {
      background-color: var(--lumo-primary-color-10pct);
    }

    /* RTL styles */
    :host([dir='rtl'])[part='items'] ::slotted(.vaadin-menu-item) {
      padding-left: calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4);
      padding-right: var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius-m) / 4));
    }

    :host([dir='rtl'].vaadin-menu-list-box) [part='items'] ::slotted(.vaadin-menu-item) {
      padding-left: calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4);
      padding-right: calc(var(--lumo-border-radius-m) / 4);
    }

    /* Focused item */
    @media (pointer: coarse) {
      [part='items'] ::slotted(.vaadin-menu-item:hover:not([expanded]):not([disabled])) {
        background-color: transparent;
      }
    }
  `,{moduleId:"lumo-context-menu-list-box"});A("vaadin-context-menu-item",x`
    /* :hover needed to workaround https://github.com/vaadin/web-components/issues/3133 */
    :host(:hover) {
      user-select: none;
      -ms-user-select: none;
      -webkit-user-select: none;
    }

    :host(.vaadin-menu-item[menu-item-checked]) [part='checkmark']::before {
      opacity: 1;
    }

    :host(.vaadin-menu-item.vaadin-context-menu-parent-item)::after {
      font-family: lumo-icons;
      font-size: var(--lumo-icon-size-xs);
      content: var(--lumo-icons-angle-right);
      color: var(--lumo-tertiary-text-color);
    }

    :host(:not([dir='rtl']).vaadin-menu-item.vaadin-context-menu-parent-item)::after {
      margin-right: calc(var(--lumo-space-m) * -1);
      padding-left: var(--lumo-space-m);
    }

    :host([expanded]) {
      background-color: var(--lumo-primary-color-10pct);
    }

    /* RTL styles */
    :host([dir='rtl'].vaadin-menu-item.vaadin-context-menu-parent-item)::after {
      content: var(--lumo-icons-angle-left);
      margin-left: calc(var(--lumo-space-m) * -1);
      padding-right: var(--lumo-space-m);
    }
  `,{moduleId:"lumo-context-menu-item"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const xd=r=>class extends Si(Li(r)){static get properties(){return{_hasVaadinItemMixin:{value:!0},selected:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_selectedChanged"},_value:String}}get _activeKeys(){return["Enter"," "]}get value(){return this._value!==void 0?this._value:this.textContent.trim()}set value(e){this._value=e}ready(){super.ready();const e=this.getAttribute("value");e!==null&&(this.value=e)}focus(){this.disabled||(super.focus(),this._setFocused(!0))}_shouldSetActive(e){return!this.disabled&&!(e.type==="keydown"&&e.defaultPrevented)}_selectedChanged(e){this.setAttribute("aria-selected",e)}_disabledChanged(e){super._disabledChanged(e),e&&(this.selected=!1,this.blur())}_onKeyDown(e){super._onKeyDown(e),this._activeKeys.includes(e.key)&&!e.defaultPrevented&&(e.preventDefault(),this.click())}};/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class xt extends xd(F(he(O))){static get template(){return z`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `}static get is(){return"vaadin-item"}constructor(){super(),this.value}}customElements.define(xt.is,xt);A("vaadin-list-box",x`
    :host {
      -webkit-tap-highlight-color: transparent;
      --_lumo-item-selected-icon-display: var(--_lumo-list-box-item-selected-icon-display, block);
    }

    /* Dividers */
    [part='items'] ::slotted(hr) {
      height: 1px;
      border: 0;
      padding: 0;
      margin: var(--lumo-space-s) var(--lumo-border-radius-m);
      background-color: var(--lumo-contrast-10pct);
    }
  `,{moduleId:"lumo-list-box"});/**
 * @license
 * Copyright (c) 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ad=r=>class extends kt(r){focus(){const e=this._getItems();if(Array.isArray(e)){const i=this._getAvailableIndex(e,0,null,s=>!ms(s));i>=0&&e[i].focus()}}get focused(){return(this._getItems()||[]).find(Rt)}get _vertical(){return!0}_getItems(){return Array.from(this.children)}_onKeyDown(e){if(super._onKeyDown(e),e.metaKey||e.ctrlKey)return;const{key:i}=e,s=this._getItems()||[],o=s.indexOf(this.focused);let n,a;const d=!this._vertical&&this.getAttribute("dir")==="rtl"?-1:1;this.__isPrevKey(i)?(a=-d,n=o-d):this.__isNextKey(i)?(a=d,n=o+d):i==="Home"?(a=1,n=0):i==="End"&&(a=-1,n=s.length-1),n=this._getAvailableIndex(s,n,a,c=>!ms(c)),n>=0&&(e.preventDefault(),this._focus(n,!0))}__isPrevKey(e){return this._vertical?e==="ArrowUp":e==="ArrowLeft"}__isNextKey(e){return this._vertical?e==="ArrowDown":e==="ArrowRight"}_focus(e,i=!1){const s=this._getItems();this._focusItem(s[e],i)}_focusItem(e){e&&(e.focus(),e.setAttribute("focus-ring",""))}_getAvailableIndex(e,i,s,o){const n=e.length;let a=i;for(let l=0;typeof a=="number"&&l<n;l+=1,a+=s||1){a<0?a=n-1:a>=n&&(a=0);const d=e[a];if(!d.hasAttribute("disabled")&&this.__isMatchingItem(d,o))return a}return-1}__isMatchingItem(e,i){return typeof i=="function"?i(e):!0}};/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ed=r=>class extends Ad(r){static get properties(){return{_hasVaadinListMixin:{value:!0},selected:{type:Number,reflectToAttribute:!0,notify:!0},orientation:{type:String,reflectToAttribute:!0,value:""},items:{type:Array,readOnly:!0,notify:!0},_searchBuf:{type:String,value:""}}}static get observers(){return["_enhanceItems(items, orientation, selected, disabled)"]}ready(){super.ready(),this.addEventListener("click",e=>this._onClick(e)),this._observer=new $(this,()=>{this._setItems(this._filterItems($.getFlattenedNodes(this)))})}_getItems(){return this.items}_enhanceItems(e,i,s,o){if(!o&&e){this.setAttribute("aria-orientation",i||"vertical"),this.items.forEach(a=>{i?a.setAttribute("orientation",i):a.removeAttribute("orientation")}),this._setFocusable(s||0);const n=e[s];e.forEach(a=>{a.selected=a===n}),n&&!n.disabled&&this._scrollToItem(s)}}_filterItems(e){return e.filter(i=>i._hasVaadinItemMixin)}_onClick(e){if(e.metaKey||e.shiftKey||e.ctrlKey||e.defaultPrevented)return;const i=this._filterItems(e.composedPath())[0];let s;i&&!i.disabled&&(s=this.items.indexOf(i))>=0&&(this.selected=s)}_searchKey(e,i){this._searchReset=R.debounce(this._searchReset,K.after(500),()=>{this._searchBuf=""}),this._searchBuf+=i.toLowerCase(),this.items.some(o=>this.__isMatchingKey(o))||(this._searchBuf=i.toLowerCase());const s=this._searchBuf.length===1?e+1:e;return this._getAvailableIndex(this.items,s,1,o=>this.__isMatchingKey(o)&&getComputedStyle(o).display!=="none")}__isMatchingKey(e){return e.textContent.replace(/[^\p{L}\p{Nd}]/gu,"").toLowerCase().startsWith(this._searchBuf)}get _isRTL(){return!this._vertical&&this.getAttribute("dir")==="rtl"}_onKeyDown(e){if(e.metaKey||e.ctrlKey)return;const i=e.key,s=this.items.indexOf(this.focused);if(/[a-zA-Z0-9]/.test(i)&&i.length===1){const o=this._searchKey(s,i);o>=0&&this._focus(o);return}super._onKeyDown(e)}_isItemHidden(e){return getComputedStyle(e).display==="none"}_setFocusable(e){e=this._getAvailableIndex(this.items,e,1);const i=this.items[e];this.items.forEach(s=>{s.tabIndex=s===i?0:-1})}_focus(e){this.items.forEach((i,s)=>{i.focused=s===e}),this._setFocusable(e),this._scrollToItem(e),super._focus(e)}focus(){this._observer&&this._observer.flush();const e=this.querySelector('[tabindex="0"]')||(this.items?this.items[0]:null);this._focusItem(e)}get _scrollerElement(){return console.warn(`Please implement the '_scrollerElement' property in <${this.localName}>`),this}_scrollToItem(e){const i=this.items[e];if(!i)return;const s=this._vertical?["top","bottom"]:this._isRTL?["right","left"]:["left","right"],o=this._scrollerElement.getBoundingClientRect(),n=(this.items[e+1]||i).getBoundingClientRect(),a=(this.items[e-1]||i).getBoundingClientRect();let l=0;!this._isRTL&&n[s[1]]>=o[s[1]]||this._isRTL&&n[s[1]]<=o[s[1]]?l=n[s[1]]-o[s[1]]:(!this._isRTL&&a[s[0]]<=o[s[0]]||this._isRTL&&a[s[0]]>=o[s[0]])&&(l=a[s[0]]-o[s[0]]),this._scroll(l)}get _vertical(){return this.orientation!=="horizontal"}_scroll(e){if(this._vertical)this._scrollerElement.scrollTop+=e;else{const i=this.getAttribute("dir")||"ltr",s=we.detectScrollType(),o=we.getNormalizedScrollLeft(s,i,this._scrollerElement)+e;we.setNormalizedScrollLeft(s,i,this._scrollerElement,o)}}};/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Id=r=>class extends Ed(r){static get properties(){return{multiple:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_multipleChanged"},selectedValues:{type:Array,notify:!0,value:()=>[]}}}static get observers(){return["_enhanceMultipleItems(items, multiple, selected, selectedValues, selectedValues.*)"]}ready(){this.addEventListener("click",e=>this._onMultipleClick(e)),super.ready()}_enhanceMultipleItems(e,i,s,o){if(!(!e||!i)){if(o){const n=o.map(a=>e[a]);e.forEach(a=>{a.selected=n.includes(a)})}this._scrollToLastSelectedItem()}}_scrollToLastSelectedItem(){const e=this.selectedValues.slice(-1)[0];e&&!e.disabled&&this._scrollToItem(e)}_onMultipleClick(e){const i=this._filterItems(e.composedPath())[0],s=i&&!i.disabled?this.items.indexOf(i):-1;s<0||!this.multiple||(e.preventDefault(),this.selectedValues.includes(s)?this.selectedValues=this.selectedValues.filter(o=>o!==s):this.selectedValues=this.selectedValues.concat(s))}_multipleChanged(e,i){!e&&i&&(this.selectedValues=[],this.items.forEach(s=>{s.selected=!1})),e&&!i&&this.selected!==void 0&&(this.selectedValues=[...this.selectedValues,this.selected],this.selected=void 0)}};/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class _i extends V(Id(F(Y(O)))){static get template(){return z`
      <style>
        :host {
          display: flex;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='items'] {
          height: 100%;
          width: 100%;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }
      </style>
      <div part="items">
        <slot></slot>
      </div>

      <slot name="tooltip"></slot>
    `}static get is(){return"vaadin-list-box"}static get properties(){return{orientation:{readOnly:!0}}}constructor(){super(),this.focused}ready(){super.ready(),this.setAttribute("role","list"),setTimeout(this._checkImport.bind(this),2e3),this._tooltipController=new Pe(this),this.addController(this._tooltipController)}get _scrollerElement(){return this.shadowRoot.querySelector('[part="items"]')}_checkImport(){const t=this.querySelector("vaadin-item");t&&!(t instanceof O)&&console.warn("Make sure you have imported the vaadin-item element.")}}customElements.define(_i.is,_i);/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */zt({name:"vaadin-contextmenu",deps:["touchstart","touchmove","touchend","contextmenu"],flow:{start:["touchstart","contextmenu"],end:["contextmenu"]},emits:["vaadin-contextmenu"],info:{sourceEvent:null},reset(){this.info.sourceEvent=null,this._cancelTimer(),this.info.touchJob=null,this.info.touchStartCoords=null},_cancelTimer(){this._timerId&&(clearTimeout(this._timerId),delete this._fired)},_setSourceEvent(r){this.info.sourceEvent=r;const t=r.composedPath();this.info.sourceEvent.__composedPath=t},touchstart(r){this._setSourceEvent(r),this.info.touchStartCoords={x:r.changedTouches[0].clientX,y:r.changedTouches[0].clientY};const t=r.composedPath()[0]||r.target;this._timerId=setTimeout(()=>{const e=r.changedTouches[0];r.shiftKey||(Xe&&(this._fired=!0,this.fire(t,e.clientX,e.clientY)),Se("tap"))},500)},touchmove(r){const e=this.info.touchStartCoords;(Math.abs(e.x-r.changedTouches[0].clientX)>15||Math.abs(e.y-r.changedTouches[0].clientY)>15)&&this._cancelTimer()},touchend(r){this._fired&&r.preventDefault(),this._cancelTimer()},contextmenu(r){r.shiftKey||(this._setSourceEvent(r),this.fire(r.target,r.clientX,r.clientY),Se("tap"))},fire(r,t,e){const i=this.info.sourceEvent,s=new Event("vaadin-contextmenu",{bubbles:!0,cancelable:!0,composed:!0});s.detail={x:t,y:e,sourceEvent:i},r.dispatchEvent(s),s.defaultPrevented&&i&&i.preventDefault&&i.preventDefault()}});/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */A("vaadin-context-menu-overlay",x`
    :host {
      align-items: flex-start;
      justify-content: flex-start;
    }

    :host([right-aligned]),
    :host([end-aligned]) {
      align-items: flex-end;
    }

    :host([bottom-aligned]) {
      justify-content: flex-end;
    }

    [part='overlay'] {
      background-color: #fff;
    }
  `,{moduleId:"vaadin-context-menu-overlay-styles"});class Ns extends Bi(j){static get is(){return"vaadin-context-menu-overlay"}static get properties(){return{parentOverlay:{type:Object,readOnly:!0}}}static get observers(){return["_themeChanged(_theme)"]}ready(){super.ready(),this.addEventListener("keydown",t=>{if(!t.defaultPrevented&&t.composedPath()[0]===this.$.overlay&&[38,40].indexOf(t.keyCode)>-1){const e=this.getFirstChild();e&&Array.isArray(e.items)&&e.items.length&&(t.preventDefault(),t.keyCode===38?e.items[e.items.length-1].focus():e.focus())}})}getFirstChild(){return this.content.querySelector(":not(style):not(slot)")}_themeChanged(){this.close()}getBoundaries(){const t=this.getBoundingClientRect(),e=this.$.overlay.getBoundingClientRect();let i=t.bottom-e.height;const s=this.parentOverlay;if(s&&s.hasAttribute("bottom-aligned")){const o=getComputedStyle(s);i=i-parseFloat(o.bottom)-parseFloat(o.height)}return{xMax:t.right-e.width,xMin:t.left+e.width,yMax:i}}_updatePosition(){if(super._updatePosition(),this.positionTarget&&this.parentOverlay){const t=this.$.content,e=getComputedStyle(t);!!this.style.left?this.style.left=`${parseFloat(this.style.left)+parseFloat(e.paddingLeft)}px`:this.style.right=`${parseFloat(this.style.right)+parseFloat(e.paddingRight)}px`,!!this.style.bottom?this.style.bottom=`${parseFloat(this.style.bottom)-parseFloat(e.paddingBottom)}px`:this.style.top=`${parseFloat(this.style.top)-parseFloat(e.paddingTop)}px`}}}customElements.define(Ns.is,Ns);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Td{constructor(t,e){this.query=t,this.callback=e,this._boundQueryHandler=this._queryHandler.bind(this)}hostConnected(){this._removeListener(),this._mediaQuery=window.matchMedia(this.query),this._addListener(),this._queryHandler(this._mediaQuery)}hostDisconnected(){this._removeListener()}_addListener(){this._mediaQuery&&this._mediaQuery.addListener(this._boundQueryHandler)}_removeListener(){this._mediaQuery&&this._mediaQuery.removeListener(this._boundQueryHandler),this._mediaQuery=null}_queryHandler(t){typeof this.callback=="function"&&this.callback(t.matches)}}/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ds extends xt{static get is(){return"vaadin-context-menu-item"}}customElements.define(Ds.is,Ds);class Ms extends _i{static get is(){return"vaadin-context-menu-list-box"}}customElements.define(Ms.is,Ms);const Sd=r=>class extends r{static get properties(){return{items:Array}}ready(){super.ready(),this.__itemsOutsideClickListener=e=>{e.composedPath().some(i=>i.localName==="vaadin-context-menu-overlay")||this.dispatchEvent(new CustomEvent("items-outside-click"))},this.addEventListener("items-outside-click",()=>this.items&&this.close())}connectedCallback(){super.connectedCallback(),document.documentElement.addEventListener("click",this.__itemsOutsideClickListener)}disconnectedCallback(){super.disconnectedCallback(),document.documentElement.removeEventListener("click",this.__itemsOutsideClickListener)}get __isRTL(){return this.getAttribute("dir")==="rtl"}__forwardFocus(){const e=this.$.overlay,i=e.getFirstChild();if(e.parentOverlay){const s=e.parentOverlay.querySelector("[expanded]");s&&s.hasAttribute("focused")&&i?i.focus():e.$.overlay.focus()}else i&&i.focus()}__openSubMenu(e,i){e.items=i._item.children,e.listenOn=i;const s=this.$.overlay,o=e.$.overlay;o.positionTarget=i,o.noHorizontalOverlap=!0,o._setParentOverlay(s),s.hasAttribute("theme")?e.setAttribute("theme",s.getAttribute("theme")):e.removeAttribute("theme");const n=e.$.overlay.$.content;n.style.minWidth="",i.dispatchEvent(new CustomEvent("opensubmenu",{detail:{children:i._item.children}}))}__itemsRenderer(e,i,s){this.__initMenu(e,i);const o=e.querySelector(this.constructor.is);o.closeOn=i.closeOn;const n=e.querySelector("vaadin-context-menu-list-box");n.innerHTML="",Array.from(s.detail.children||i.items).forEach(l=>{let d;l.component instanceof HTMLElement?d=l.component:d=document.createElement(l.component||"vaadin-context-menu-item"),d instanceof xt?(d.setAttribute("role","menuitem"),d.classList.add("vaadin-menu-item")):d.localName==="hr"&&d.setAttribute("role","separator"),this._setMenuItemTheme(d,l,this._theme),d._item=l,l.text&&(d.textContent=l.text),this.__toggleMenuComponentAttribute(d,"menu-item-checked",l.checked),this.__toggleMenuComponentAttribute(d,"disabled",l.disabled),d.setAttribute("aria-haspopup","false"),d.classList.remove("vaadin-context-menu-parent-item"),l.children&&l.children.length&&(d.classList.add("vaadin-context-menu-parent-item"),d.setAttribute("aria-haspopup","true"),d.setAttribute("aria-expanded","false"),d.removeAttribute("expanded")),n.appendChild(d)})}_setMenuItemTheme(e,i,s){let o=e.getAttribute("theme")||s;i.theme!=null&&(o=Array.isArray(i.theme)?i.theme.join(" "):i.theme),o?e.setAttribute("theme",o):e.removeAttribute("theme")}__toggleMenuComponentAttribute(e,i,s){s?(e.setAttribute(i,""),e[`__has-${i}`]=!0):e[`__has-${i}`]&&(e.removeAttribute(i),e[`__has-${i}`]=!1)}__initMenu(e,i){if(e.firstElementChild){const s=e.querySelector("vaadin-context-menu-list-box");this._theme?s.setAttribute("theme",this._theme):s.removeAttribute("theme")}else{const s=document.createElement("vaadin-context-menu-list-box");e.appendChild(s),this._theme&&s.setAttribute("theme",this._theme),s.classList.add("vaadin-menu-list-box"),requestAnimationFrame(()=>s.setAttribute("role","menu"));const o=document.createElement(this.constructor.is);o.setAttribute("hidden",""),e.appendChild(o),o.$.overlay.modeless=!0,o.openOn="opensubmenu",i.addEventListener("opened-changed",a=>!a.detail.value&&o.close()),o.addEventListener("opened-changed",a=>{if(!a.detail.value){const l=s.querySelector("[expanded]");l&&(l.setAttribute("aria-expanded","false"),l.removeAttribute("expanded"))}}),s.addEventListener("selected-changed",a=>{if(typeof a.detail.value=="number"){const l=a.target.items[a.detail.value]._item;if(!l.children){const d={value:l};i.dispatchEvent(new CustomEvent("item-selected",{detail:d}))}s.selected=null}}),o.addEventListener("item-selected",a=>{i.dispatchEvent(new CustomEvent("item-selected",{detail:a.detail}))}),o.addEventListener("close-all-menus",()=>{i.dispatchEvent(new CustomEvent("close-all-menus"))}),i.addEventListener("close-all-menus",i.close),i.addEventListener("item-selected",i.close),i.$.overlay.$.backdrop.addEventListener("click",()=>i.close()),i.$.overlay.addEventListener("keydown",a=>{const l=this.__isRTL;!l&&a.keyCode===37||l&&a.keyCode===39?(i.close(),i.listenOn.focus()):(a.key==="Escape"||a.key==="Tab")&&i.dispatchEvent(new CustomEvent("close-all-menus"))}),requestAnimationFrame(()=>{this.__openListenerActive=!0});const n=(a,l=a.composedPath().find(d=>d.localName==="vaadin-context-menu-item"))=>{if(!!this.__openListenerActive){if(i.$.overlay.hasAttribute("opening")){requestAnimationFrame(()=>n(a,l));return}if(l){if(o.items!==l._item.children&&o.close(),!i.opened)return;l._item.children&&l._item.children.length?(l.setAttribute("aria-expanded","true"),l.setAttribute("expanded",""),this.__openSubMenu(o,l)):o.listenOn.focus()}}};i.$.overlay.addEventListener(Ze?"click":"mouseover",n),i.$.overlay.addEventListener("keydown",a=>{const l=this.__isRTL;(!l&&a.keyCode===39||l&&a.keyCode===37||a.keyCode===13||a.keyCode===32)&&n(a)})}}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Fs extends Y(V(ir(Sd(O)))){static get template(){return z`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>

      <slot id="slot"></slot>

      <vaadin-context-menu-overlay
        id="overlay"
        on-opened-changed="_onOverlayOpened"
        on-vaadin-overlay-open="_onVaadinOverlayOpen"
        with-backdrop="[[_phone]]"
        phone$="[[_phone]]"
        model="[[_context]]"
        theme$="[[_theme]]"
      >
      </vaadin-context-menu-overlay>
    `}static get is(){return"vaadin-context-menu"}static get properties(){return{selector:{type:String},opened:{type:Boolean,value:!1,notify:!0,readOnly:!0},openOn:{type:String,value:"vaadin-contextmenu"},listenOn:{type:Object,value(){return this}},closeOn:{type:String,value:"click",observer:"_closeOnChanged"},renderer:{type:Function},_context:Object,_boundClose:Object,_boundOpen:Object,_phone:{type:Boolean},_touch:{type:Boolean,value:Ze},_wide:{type:Boolean},_wideMediaQuery:{type:String,value:"(min-device-width: 750px)"}}}static get observers(){return["_openedChanged(opened)","_targetOrOpenOnChanged(listenOn, openOn)","_rendererChanged(renderer, items)","_touchOrWideChanged(_touch, _wide)"]}constructor(){super(),this._boundOpen=this.open.bind(this),this._boundClose=this.close.bind(this),this._boundOnGlobalContextMenu=this._onGlobalContextMenu.bind(this)}connectedCallback(){super.connectedCallback(),this.__boundOnScroll=this.__onScroll.bind(this),window.addEventListener("scroll",this.__boundOnScroll,!0)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("scroll",this.__boundOnScroll,!0),this.close()}ready(){super.ready(),this._overlayElement=this.$.overlay,this.addController(new Td(this._wideMediaQuery,t=>{this._wide=t})),Nt(this)}_onOverlayOpened(t){this._setOpened(t.detail.value),this.__alignOverlayPosition()}_onVaadinOverlayOpen(){this.__alignOverlayPosition(),this.$.overlay.style.opacity="",this.__forwardFocus()}_targetOrOpenOnChanged(t,e){this._oldListenOn&&this._oldOpenOn&&(this._unlisten(this._oldListenOn,this._oldOpenOn,this._boundOpen),this._oldListenOn.style.webkitTouchCallout="",this._oldListenOn.style.webkitUserSelect="",this._oldListenOn.style.userSelect="",this._oldListenOn=null,this._oldOpenOn=null),t&&e&&(this._listen(t,e,this._boundOpen),this._oldListenOn=t,this._oldOpenOn=e)}_touchOrWideChanged(t,e){this._phone=!e&&t}_setListenOnUserSelect(t){this.listenOn.style.webkitTouchCallout=t,this.listenOn.style.webkitUserSelect=t,this.listenOn.style.userSelect=t,document.getSelection().removeAllRanges()}_closeOnChanged(t,e){const i="vaadin-overlay-outside-click";e&&(this._unlisten(this.$.overlay,e,this._boundClose),this._unlisten(this.$.overlay.root,e,this._boundClose)),t?(this._listen(this.$.overlay,t,this._boundClose),this._listen(this.$.overlay.root,t,this._boundClose),this._unlisten(this.$.overlay,i,this._preventDefault)):this._listen(this.$.overlay,i,this._preventDefault)}_preventDefault(t){t.preventDefault()}_openedChanged(t){t?(document.documentElement.addEventListener("contextmenu",this._boundOnGlobalContextMenu,!0),this._setListenOnUserSelect("none")):(document.documentElement.removeEventListener("contextmenu",this._boundOnGlobalContextMenu,!0),this._setListenOnUserSelect("")),this.$.overlay.opened=t}requestContentUpdate(){!this._overlayElement||!this.renderer||this._overlayElement.requestContentUpdate()}_rendererChanged(t,e){if(e){if(t)throw new Error("The items API cannot be used together with a renderer");this.closeOn==="click"&&(this.closeOn=""),t=this.__itemsRenderer}this.$.overlay.setProperties({owner:this,renderer:t})}close(){this._setOpened(!1)}_contextTarget(t){if(this.selector){const e=this.listenOn.querySelectorAll(this.selector);return Array.prototype.filter.call(e,i=>t.composedPath().indexOf(i)>-1)[0]}return t.target}open(t){t&&!this.opened&&(this._context={detail:t.detail,target:this._contextTarget(t)},this._context.target&&(this._preventDefault(t),t.stopPropagation(),this.__x=this._getEventCoordinate(t,"x"),this.__pageXOffset=window.pageXOffset,this.__y=this._getEventCoordinate(t,"y"),this.__pageYOffset=window.pageYOffset,this.$.overlay.style.opacity="0",this._setOpened(!0)))}__onScroll(){if(!this.opened)return;const t=window.pageYOffset-this.__pageYOffset,e=window.pageXOffset-this.__pageXOffset;this.__adjustPosition("left",-e),this.__adjustPosition("right",e),this.__adjustPosition("top",-t),this.__adjustPosition("bottom",t),this.__pageYOffset+=t,this.__pageXOffset+=e}__adjustPosition(t,e){const s=this.$.overlay.style;s[t]=`${(parseInt(s[t])||0)+e}px`}__alignOverlayPosition(){const t=this.$.overlay;if(t.positionTarget)return;const e=t.style;["top","right","bottom","left"].forEach(c=>e.removeProperty(c)),["right-aligned","end-aligned","bottom-aligned"].forEach(c=>t.removeAttribute(c));const{xMax:i,xMin:s,yMax:o}=t.getBoundaries(),n=this.__x,a=this.__y,l=document.documentElement.clientWidth,d=document.documentElement.clientHeight;this.__isRTL?n>l/2||n>s?e.right=`${Math.max(0,l-n)}px`:(e.left=`${n}px`,this._setEndAligned(t)):n<l/2||n<i?e.left=`${n}px`:(e.right=`${Math.max(0,l-n)}px`,this._setEndAligned(t)),a<d/2||a<o?e.top=`${a}px`:(e.bottom=`${Math.max(0,d-a)}px`,t.setAttribute("bottom-aligned",""))}_setEndAligned(t){t.setAttribute("end-aligned",""),this.__isRTL||t.setAttribute("right-aligned","")}_getEventCoordinate(t,e){if(t.detail instanceof Object){if(t.detail[e])return t.detail[e];if(t.detail.sourceEvent)return this._getEventCoordinate(t.detail.sourceEvent,e)}else{const i=`client${e.toUpperCase()}`,s=t.changedTouches?t.changedTouches[0][i]:t[i];if(s===0){const o=t.target.getBoundingClientRect();return e==="x"?o.left:o.top+o.height}return s}}_listen(t,e,i){J[e]?Te(t,e,i):t.addEventListener(e,i)}_unlisten(t,e,i){J[e]?Fr(t,e,i):t.removeEventListener(e,i)}_onGlobalContextMenu(t){t.shiftKey||(t.preventDefault(),this.close())}}customElements.define(Fs.is,Fs);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */A("vaadin-text-field",st,{moduleId:"lumo-text-field-styles"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Pd=r=>class extends xo(r){static get properties(){return{autocomplete:{type:String},autocorrect:{type:String},autocapitalize:{type:String,reflectToAttribute:!0}}}static get delegateAttrs(){return[...super.delegateAttrs,"autocapitalize","autocomplete","autocorrect"]}_inputElementChanged(e){super._inputElementChanged(e),e&&(e.value&&e.value!==this.value&&(console.warn(`Please define value on the <${this.localName}> component!`),e.value=""),this.value&&(e.value=this.value))}get __data(){return this.__dataValue||{}}set __data(e){this.__dataValue=e}_setFocused(e){super._setFocused(e),e||this.validate()}_onInput(e){super._onInput(e),this.invalid&&this.validate()}_valueChanged(e,i){super._valueChanged(e,i),i!==void 0&&this.invalid&&this.validate()}};/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */A("vaadin-text-field",Eo,{moduleId:"vaadin-text-field-styles"});class At extends Ao(Pd(F(V(O)))){static get is(){return"vaadin-text-field"}static get template(){return z`
      <style>
        [part='input-field'] {
          flex-grow: 0;
        }
      </style>

      <div class="vaadin-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <slot name="suffix" slot="suffix"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
      <slot name="tooltip"></slot>
    `}static get properties(){return{maxlength:{type:Number},minlength:{type:Number}}}static get delegateAttrs(){return[...super.delegateAttrs,"maxlength","minlength"]}static get constraints(){return[...super.constraints,"maxlength","minlength"]}constructor(){super(),this._setType("text")}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new Ni(this,t=>{this._setInputElement(t),this._setFocusElement(t),this.stateTarget=t,this.ariaTarget=t})),this.addController(new Di(this.inputElement,this._labelController)),this._tooltipController=new Pe(this),this._tooltipController.setPosition("top"),this.addController(this._tooltipController)}}customElements.define(At.is,At);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Od=x`
  :host([dir='rtl']) [part='input-field'] ::slotted(input) {
    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input:placeholder-shown) {
    --_lumo-text-field-overflow-mask-image: none;
  }
`;A("vaadin-email-field",[st,Od],{moduleId:"lumo-email-field"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */A("vaadin-email-field",x`
    :host([dir='rtl']) [part='input-field'] {
      direction: ltr;
    }

    :host([dir='rtl']) [part='input-field'] ::slotted(input)::placeholder {
      direction: rtl;
      text-align: left;
    }
  `,{moduleId:"vaadin-email-field-styles"});class zd extends At{static get is(){return"vaadin-email-field"}constructor(){super(),this._setType("email"),this.pattern="^([a-zA-Z0-9_\\.\\-+])+@[a-zA-Z0-9-.]+\\.[a-zA-Z0-9-]{2,}$"}ready(){super.ready(),this.inputElement&&(this.inputElement.autocapitalize="off")}}customElements.define("vaadin-email-field",zd);A("vaadin-form-item",x`
    :host {
      --vaadin-form-item-row-spacing: 0;
    }

    /* font-weight, margin-bottom, transition and line-height same as for part label in text-field */
    [part='label'] {
      color: var(--lumo-secondary-text-color);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-s);
      font-weight: 500;
      margin-top: var(--lumo-space-m);
      margin-left: calc(var(--lumo-border-radius-m) / 4);
      margin-bottom: var(--lumo-space-xs);
      transition: color 0.4s;
      line-height: 1.333;
    }

    [part='required-indicator']::after {
      content: var(--lumo-required-field-indicator, '•');
      transition: opacity 0.2s;
      opacity: 0;
      color: var(--lumo-required-field-indicator-color, var(--lumo-primary-text-color));
      position: relative;
      width: 1em;
      text-align: center;
    }

    :host([required]) [part='required-indicator']::after {
      opacity: 1;
    }

    :host([invalid]) [part='required-indicator']::after {
      color: var(--lumo-required-field-indicator-color, var(--lumo-error-text-color));
    }
  `,{moduleId:"lumo-form-item"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Hs extends F(O){static get template(){return z`
      <style>
        :host {
          display: inline-flex;
          flex-direction: row;
          align-items: baseline;
          margin: calc(0.5 * var(--vaadin-form-item-row-spacing, 1em)) 0;
        }

        :host([label-position='top']) {
          flex-direction: column;
          align-items: stretch;
        }

        :host([hidden]) {
          display: none !important;
        }

        #label {
          width: var(--vaadin-form-item-label-width, 8em);
          flex: 0 0 auto;
        }

        :host([label-position='top']) #label {
          width: auto;
        }

        #spacing {
          width: var(--vaadin-form-item-label-spacing, 1em);
          flex: 0 0 auto;
        }

        #content {
          flex: 1 1 auto;
        }

        #content ::slotted(.full-width) {
          box-sizing: border-box;
          width: 100%;
          min-width: 0;
        }
      </style>
      <div id="label" part="label" on-click="__onLabelClick">
        <slot name="label" id="labelSlot" on-slotchange="__onLabelSlotChange"></slot>
        <span part="required-indicator" aria-hidden="true"></span>
      </div>
      <div id="spacing"></div>
      <div id="content">
        <slot id="contentSlot" on-slotchange="__onContentSlotChange"></slot>
      </div>
    `}static get is(){return"vaadin-form-item"}constructor(){super(),this.__updateInvalidState=this.__updateInvalidState.bind(this),this.__fieldNodeObserver=new MutationObserver(()=>this.__updateRequiredState(this.__fieldNode.required)),this.__labelNode=null,this.__fieldNode=null}_getFieldAriaTarget(t){return t.ariaTarget||t}__linkLabelToField(t){Mt(this._getFieldAriaTarget(t),"aria-labelledby",this.__labelId)}__unlinkLabelFromField(t){Ft(this._getFieldAriaTarget(t),"aria-labelledby",this.__labelId)}__onLabelClick(){const t=this.__fieldNode;t&&(t.focus(),t.click())}__getValidateFunction(t){return t.validate||t.checkValidity}__onLabelSlotChange(){this.__labelNode&&(this.__labelNode=null,this.__fieldNode&&this.__unlinkLabelFromField(this.__fieldNode));const t=this.$.labelSlot.assignedElements()[0];t&&(this.__labelNode=t,this.__labelNode.id?this.__labelId=this.__labelNode.id:(this.__labelId=`label-${this.localName}-${Lt()}`,this.__labelNode.id=this.__labelId),this.__fieldNode&&this.__linkLabelToField(this.__fieldNode))}__onContentSlotChange(){this.__fieldNode&&(this.__unlinkLabelFromField(this.__fieldNode),this.__updateRequiredState(!1),this.__fieldNodeObserver.disconnect(),this.__fieldNode=null);const t=this.$.contentSlot.assignedElements();t.length>1&&console.warn(`WARNING: Since Vaadin 23, placing multiple fields directly to a <vaadin-form-item> is deprecated.
Please wrap fields with a <vaadin-custom-field> instead.`);const e=t.find(i=>!!this.__getValidateFunction(i));e&&(this.__fieldNode=e,this.__updateRequiredState(this.__fieldNode.required),this.__fieldNodeObserver.observe(this.__fieldNode,{attributes:!0,attributeFilter:["required"]}),this.__labelNode&&this.__linkLabelToField(this.__fieldNode))}__updateRequiredState(t){t?(this.setAttribute("required",""),this.__fieldNode.addEventListener("blur",this.__updateInvalidState),this.__fieldNode.addEventListener("change",this.__updateInvalidState)):(this.removeAttribute("invalid"),this.removeAttribute("required"),this.__fieldNode.removeEventListener("blur",this.__updateInvalidState),this.__fieldNode.removeEventListener("change",this.__updateInvalidState))}__updateInvalidState(){const t=this.__getValidateFunction(this.__fieldNode).call(this.__fieldNode);this.toggleAttribute("invalid",t===!1)}}customElements.define(Hs.is,Hs);A("vaadin-form-layout",x`
    :host {
      --vaadin-form-layout-column-spacing: var(--lumo-space-l);
    }
  `,{moduleId:"lumo-form-layout"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class $s extends ho(V(F(O))){static get template(){return z`
      <style>
        :host {
          display: block;
          max-width: 100%;
          animation: 1ms vaadin-form-layout-appear;
          /* CSS API for host */
          --vaadin-form-item-label-width: 8em;
          --vaadin-form-item-label-spacing: 1em;
          --vaadin-form-item-row-spacing: 1em;
          --vaadin-form-layout-column-spacing: 2em; /* (default) */
          align-self: stretch;
        }

        @keyframes vaadin-form-layout-appear {
          to {
            opacity: 1 !important; /* stylelint-disable-line keyframe-declaration-no-important */
          }
        }

        :host([hidden]) {
          display: none !important;
        }

        #layout {
          display: flex;

          align-items: baseline; /* default \`stretch\` is not appropriate */

          flex-wrap: wrap; /* the items should wrap */
        }

        #layout ::slotted(*) {
          /* Items should neither grow nor shrink. */
          flex-grow: 0;
          flex-shrink: 0;

          /* Margins make spacing between the columns */
          margin-left: calc(0.5 * var(--vaadin-form-layout-column-spacing));
          margin-right: calc(0.5 * var(--vaadin-form-layout-column-spacing));
        }

        #layout ::slotted(br) {
          display: none;
        }
      </style>
      <div id="layout">
        <slot id="slot"></slot>
      </div>
    `}static get is(){return"vaadin-form-layout"}static get properties(){return{responsiveSteps:{type:Array,value(){return[{minWidth:0,columns:1,labelsPosition:"top"},{minWidth:"20em",columns:1},{minWidth:"40em",columns:2}]},observer:"_responsiveStepsChanged"},_columnCount:{type:Number},_labelsOnTop:{type:Boolean}}}static get observers(){return["_invokeUpdateLayout(_columnCount, _labelsOnTop)"]}ready(){this._styleElement=document.createElement("style"),this.appendChild(this._styleElement),this._styleElement.textContent=" ",super.ready(),this.addEventListener("animationend",this.__onAnimationEnd)}connectedCallback(){super.connectedCallback(),requestAnimationFrame(()=>this._selectResponsiveStep()),requestAnimationFrame(()=>this._updateLayout()),this._observeChildrenColspanChange()}disconnectedCallback(){super.disconnectedCallback(),this.__mutationObserver.disconnect(),this.__childObserver.disconnect()}_observeChildrenColspanChange(){const t={attributes:!0};this.__mutationObserver=new MutationObserver(e=>{e.forEach(i=>{i.type==="attributes"&&(i.attributeName==="colspan"||i.attributeName==="hidden")&&this._updateLayout()})}),this.__childObserver=new $(this,e=>{const i=this._getObservableNodes(e.addedNodes),s=this._getObservableNodes(e.removedNodes);i.forEach(o=>{this.__mutationObserver.observe(o,t)}),(i.length>0||s.length>0)&&this._updateLayout()})}_getObservableNodes(t){const e=["template","style","dom-repeat","dom-if"];return Array.from(t).filter(i=>i.nodeType===Node.ELEMENT_NODE&&e.indexOf(i.localName.toLowerCase())===-1)}_naturalNumberOrOne(t){return typeof t=="number"&&t>=1&&t<1/0?Math.floor(t):1}_isValidCSSLength(t){return t==="inherit"||t==="normal"?!1:(this._styleElement.firstChild.nodeValue=`#styleElement { word-spacing: ${t}; }`,this._styleElement.sheet?["",null].indexOf(this._styleElement.sheet.cssRules[0].style.getPropertyValue("word-spacing"))<0:!0)}_responsiveStepsChanged(t,e){try{if(!Array.isArray(t))throw new Error('Invalid "responsiveSteps" type, an Array is required.');if(t.length<1)throw new Error('Invalid empty "responsiveSteps" array, at least one item is required.');t.forEach(i=>{if(this._naturalNumberOrOne(i.columns)!==i.columns)throw new Error(`Invalid 'columns' value of ${i.columns}, a natural number is required.`);if(i.minWidth!==void 0&&!this._isValidCSSLength(i.minWidth))throw new Error(`Invalid 'minWidth' value of ${i.minWidth}, a valid CSS length required.`);if(i.labelsPosition!==void 0&&["aside","top"].indexOf(i.labelsPosition)===-1)throw new Error(`Invalid 'labelsPosition' value of ${i.labelsPosition}, 'aside' or 'top' string is required.`)})}catch(i){e&&e!==t?(console.warn(`${i.message} Using previously set 'responsiveSteps' instead.`),this.responsiveSteps=e):(console.warn(`${i.message} Using default 'responsiveSteps' instead.`),this.responsiveSteps=[{minWidth:0,columns:1,labelsPosition:"top"},{minWidth:"20em",columns:1},{minWidth:"40em",columns:2}])}this._selectResponsiveStep()}__onAnimationEnd(t){t.animationName.indexOf("vaadin-form-layout-appear")===0&&this._selectResponsiveStep()}_selectResponsiveStep(){let t;const e="background-position";this.responsiveSteps.forEach(i=>{this.$.layout.style.setProperty(e,i.minWidth),parseFloat(getComputedStyle(this.$.layout).getPropertyValue(e))<=this.offsetWidth&&(t=i)}),this.$.layout.style.removeProperty(e),t&&(this._columnCount=t.columns,this._labelsOnTop=t.labelsPosition==="top")}_invokeUpdateLayout(){this._updateLayout()}updateStyles(t={}){console.warn("WARNING: Since Vaadin 23, updateStyles() is deprecated. Use the native element.style.setProperty API to set custom CSS property values."),Object.entries(t).forEach(([e,i])=>{this.style.setProperty(e,i)}),this._updateLayout()}_updateLayout(){const t=getComputedStyle(this),e=t.getPropertyValue("--vaadin-form-layout-column-spacing"),i=t.direction,s=`margin-${i==="ltr"?"left":"right"}`,o=`margin-${i==="ltr"?"right":"left"}`,n=this.offsetWidth;let a=0;Array.from(this.children).filter(l=>l.localName==="br"||getComputedStyle(l).display!=="none").forEach((l,d,c)=>{if(l.localName==="br"){a=0;return}let h;h=this._naturalNumberOrOne(parseFloat(l.getAttribute("colspan"))),h=Math.min(h,this._columnCount);const m=h/this._columnCount;l.style.width=`calc(${m*99.9}% - ${1-m} * ${e})`,a+h>this._columnCount&&(a=0),a===0?l.style.setProperty(s,"0px"):l.style.removeProperty(s);const g=d+1,b=g<c.length&&c[g].localName==="br";if(a+h===this._columnCount)l.style.setProperty(o,"0px");else if(b){const C=(this._columnCount-a-h)/this._columnCount;l.style.setProperty(o,`calc(${C*n}px + ${C} * ${e})`)}else l.style.removeProperty(o);a=(a+h)%this._columnCount,l.localName==="vaadin-form-item"&&(this._labelsOnTop?l.getAttribute("label-position")!=="top"&&(l.__useLayoutLabelPosition=!0,l.setAttribute("label-position","top")):l.__useLayoutLabelPosition&&(delete l.__useLayoutLabelPosition,l.removeAttribute("label-position")))})}_onResize(){this._selectResponsiveStep()}}customElements.define($s.is,$s);/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Bs extends Kr(O){static get is(){return"vaadin-grid-column-group"}static get properties(){return{_childColumns:{value(){return this._getChildColumns(this)}},flexGrow:{type:Number,readOnly:!0},width:{type:String,readOnly:!0},_visibleChildColumns:Array,_colSpan:Number,_rootColumns:Array}}static get observers(){return["_groupFrozenChanged(frozen, _rootColumns)","_groupFrozenToEndChanged(frozenToEnd, _rootColumns)","_groupHiddenChanged(hidden)","_colSpanChanged(_colSpan, _headerCell, _footerCell)","_groupOrderChanged(_order, _rootColumns)","_groupReorderStatusChanged(_reorderStatus, _rootColumns)","_groupResizableChanged(resizable, _rootColumns)"]}connectedCallback(){super.connectedCallback(),this._addNodeObserver(),this._updateFlexAndWidth()}disconnectedCallback(){super.disconnectedCallback(),this._observer&&this._observer.disconnect()}_columnPropChanged(t,e){t==="hidden"&&(this._preventHiddenSynchronization=!0,this._updateVisibleChildColumns(this._childColumns),this._preventHiddenSynchronization=!1),/flexGrow|width|hidden|_childColumns/.test(t)&&this._updateFlexAndWidth(),t==="frozen"&&(this.frozen=this.frozen||e),t==="lastFrozen"&&(this._lastFrozen=this._lastFrozen||e),t==="frozenToEnd"&&(this.frozenToEnd=this.frozenToEnd||e),t==="firstFrozenToEnd"&&(this._firstFrozenToEnd=this._firstFrozenToEnd||e)}_groupOrderChanged(t,e){if(e){const i=e.slice(0);if(!t){i.forEach(a=>{a._order=0});return}const s=/(0+)$/.exec(t).pop().length,o=~~(Math.log(e.length)/Math.LN10)+1,n=10**(s-o);i[0]&&i[0]._order&&i.sort((a,l)=>a._order-l._order),oo(i,n,t)}}_groupReorderStatusChanged(t,e){t===void 0||e===void 0||e.forEach(i=>{i._reorderStatus=t})}_groupResizableChanged(t,e){t===void 0||e===void 0||e.forEach(i=>{i.resizable=t})}_updateVisibleChildColumns(t){this._visibleChildColumns=Array.prototype.filter.call(t,e=>!e.hidden),this._colSpan=this._visibleChildColumns.length,this._updateAutoHidden()}_updateFlexAndWidth(){if(!!this._visibleChildColumns){if(this._visibleChildColumns.length>0){const t=this._visibleChildColumns.reduce((e,i)=>(e+=` + ${(i.width||"0px").replace("calc","")}`,e),"").substring(3);this._setWidth(`calc(${t})`)}else this._setWidth("0px");this._setFlexGrow(Array.prototype.reduce.call(this._visibleChildColumns,(t,e)=>t+e.flexGrow,0))}}__scheduleAutoFreezeWarning(t,e){if(this._grid){const i=e.replace(/([A-Z])/g,"-$1").toLowerCase(),s=t[0][e]||t[0].hasAttribute(i);t.every(n=>(n[e]||n.hasAttribute(i))===s)||(this._grid.__autoFreezeWarningDebouncer=R.debounce(this._grid.__autoFreezeWarningDebouncer,Ie,()=>{console.warn(`WARNING: Joining ${e} and non-${e} Grid columns inside the same column group! This will automatically freeze all the joined columns to avoid rendering issues. If this was intentional, consider marking each joined column explicitly as ${e}. Otherwise, exclude the ${e} columns from the joined group.`)}))}}_groupFrozenChanged(t,e){e===void 0||t===void 0||t!==!1&&(this.__scheduleAutoFreezeWarning(e,"frozen"),Array.from(e).forEach(i=>{i.frozen=t}))}_groupFrozenToEndChanged(t,e){e===void 0||t===void 0||t!==!1&&(this.__scheduleAutoFreezeWarning(e,"frozenToEnd"),Array.from(e).forEach(i=>{i.frozenToEnd=t}))}_groupHiddenChanged(t){(t||this.__groupHiddenInitialized)&&this._synchronizeHidden(),this.__groupHiddenInitialized=!0}_updateAutoHidden(){const t=this._autoHidden;this._autoHidden=(this._visibleChildColumns||[]).length===0,(t||this._autoHidden)&&(this.hidden=this._autoHidden)}_synchronizeHidden(){this._childColumns&&!this._preventHiddenSynchronization&&this._childColumns.forEach(t=>{t.hidden=this.hidden})}_colSpanChanged(t,e,i){e&&(e.setAttribute("colspan",t),this._grid&&this._grid._a11yUpdateCellColspan(e,t)),i&&(i.setAttribute("colspan",t),this._grid&&this._grid._a11yUpdateCellColspan(i,t))}_getChildColumns(t){return $.getFlattenedNodes(t).filter(this._isColumnElement)}_addNodeObserver(){this._observer=new $(this,t=>{(t.addedNodes.filter(this._isColumnElement).length>0||t.removedNodes.filter(this._isColumnElement).length>0)&&(this._preventHiddenSynchronization=!0,this._rootColumns=this._getChildColumns(this),this._childColumns=this._rootColumns,this._updateVisibleChildColumns(this._childColumns),this._preventHiddenSynchronization=!1,de.run(()=>{this._grid&&this._grid._updateColumnTree&&this._grid._updateColumnTree()}))}),this._observer.flush()}_isColumnElement(t){return t.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/.test(t.localName)}}customElements.define(Bs.is,Bs);A("vaadin-grid-sorter",x`
    :host {
      justify-content: flex-start;
      align-items: baseline;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      cursor: var(--lumo-clickable-cursor);
    }

    [part='content'] {
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    [part='indicators'] {
      margin-left: var(--lumo-space-s);
    }

    [part='indicators']::before {
      transform: scale(0.8);
    }

    :host(:not([direction]):not(:hover)) [part='indicators'] {
      color: var(--lumo-tertiary-text-color);
    }

    :host([direction]) {
      color: var(--lumo-primary-text-color);
    }

    [part='order'] {
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part='indicators'] {
      margin-right: var(--lumo-space-s);
      margin-left: 0;
    }
  `,{moduleId:"lumo-grid-sorter"});/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Io=document.createElement("template");Io.innerHTML=`
  <style>
    @font-face {
      font-family: 'vaadin-grid-sorter-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAQwAA0AAAAABuwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAEFAAAABkAAAAcfep+mUdERUYAAAP4AAAAHAAAAB4AJwAOT1MvMgAAAZgAAAA/AAAAYA8TBPpjbWFwAAAB7AAAAFUAAAFeF1fZ4mdhc3AAAAPwAAAACAAAAAgAAAAQZ2x5ZgAAAlgAAABcAAAAnMvguMloZWFkAAABMAAAAC8AAAA2C5Ap72hoZWEAAAFgAAAAHQAAACQGbQPHaG10eAAAAdgAAAAUAAAAHAoAAABsb2NhAAACRAAAABIAAAASAIwAYG1heHAAAAGAAAAAFgAAACAACwAKbmFtZQAAArQAAAECAAACZxWCgKhwb3N0AAADuAAAADUAAABZCrApUXicY2BkYGAA4rDECVrx/DZfGbhZGEDgyqNPOxH0/wNMq5kPALkcDEwgUQBWRA0dAHicY2BkYGA+8P8AAwMLAwgwrWZgZEAFbABY4QM8AAAAeJxjYGRgYOAAQiYGEICQSAAAAi8AFgAAeJxjYGY6yziBgZWBgWkm0xkGBoZ+CM34msGYkZMBFTAKoAkwODAwvmRiPvD/AIMDMxCD1CDJKjAwAgBktQsXAHicY2GAAMZQCM0EwqshbAALxAEKeJxjYGBgZoBgGQZGBhCIAPIYwXwWBhsgzcXAwcAEhIwMCi+Z/v/9/x+sSuElA4T9/4k4K1gHFwMMMILMY2QDYmaoABOQYGJABUA7WBiGNwAAJd4NIQAAAAAAAAAACAAIABAAGAAmAEAATgAAeJyNjLENgDAMBP9tIURJwQCMQccSZgk2i5fIYBDAidJjycXr7x5EPwE2wY8si7jmyBNXGo/bNBerxJNrpxhbO3/fEFpx8ZICpV+ghxJ74fAMe+h7Ox14AbrsHB14nK2QQWrDMBRER4mTkhQK3ZRQKOgCNk7oGQqhhEIX2WSlWEI1BAlkJ5CDdNsj5Ey9Rncdi38ES+jzNJo/HwTgATcoDEthhY3wBHc4CE+pfwsX5F/hGe7Vo/AcK/UhvMSz+mGXKhZU6pww8ISz3oWn1BvhgnwTnuEJf8Jz1OpFeIlX9YULDLdFi4ASHolkSR0iuYdjLak1vAequBhj21D61Nqyi6l3qWybGPjySbPHGScGJl6dP58MYcQRI0bts7mjebBqrFENH7t3qWtj0OuqHnXcW7b0HOTZFnKryRGW2hFX1m0O2vEM3opNMfTau+CS6Z3Vx6veNnEXY6jwDxhsc2gAAHicY2BiwA84GBgYmRiYGJkZmBlZGFkZ2djScyoLMgzZS/MyDQwMwLSrpYEBlIbxjQDrzgsuAAAAAAEAAf//AA94nGNgZGBg4AFiMSBmYmAEQnYgZgHzGAAD6wA2eJxjYGBgZACCKyoz1cD0o087YTQATOcIewAAAA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }
  </style>
`;document.head.appendChild(Io.content);class Vs extends F(he(O)){static get template(){return z`
      <style>
        :host {
          display: inline-flex;
          cursor: pointer;
          max-width: 100%;
        }

        [part='content'] {
          flex: 1 1 auto;
        }

        [part='indicators'] {
          position: relative;
          align-self: center;
          flex: none;
        }

        [part='order'] {
          display: inline;
          vertical-align: super;
        }

        [part='indicators']::before {
          font-family: 'vaadin-grid-sorter-icons';
          display: inline-block;
        }

        :host(:not([direction])) [part='indicators']::before {
          content: '\\e901';
        }

        :host([direction='asc']) [part='indicators']::before {
          content: '\\e900';
        }

        :host([direction='desc']) [part='indicators']::before {
          content: '\\e902';
        }
      </style>

      <div part="content">
        <slot></slot>
      </div>
      <div part="indicators">
        <span part="order">[[_getDisplayOrder(_order)]]</span>
      </div>
    `}static get is(){return"vaadin-grid-sorter"}static get properties(){return{path:String,direction:{type:String,reflectToAttribute:!0,notify:!0,value:null},_order:{type:Number,value:null},_isConnected:{type:Boolean,observer:"__isConnectedChanged"}}}static get observers(){return["_pathOrDirectionChanged(path, direction)"]}ready(){super.ready(),this.addEventListener("click",this._onClick.bind(this))}connectedCallback(){super.connectedCallback(),this._isConnected=!0}disconnectedCallback(){super.disconnectedCallback(),this._isConnected=!1,!this.parentNode&&this._grid&&this._grid.__removeSorters([this])}_pathOrDirectionChanged(){this.__dispatchSorterChangedEvenIfPossible()}__isConnectedChanged(t,e){e!==!1&&this.__dispatchSorterChangedEvenIfPossible()}__dispatchSorterChangedEvenIfPossible(){this.path===void 0||this.direction===void 0||!this._isConnected||(this.dispatchEvent(new CustomEvent("sorter-changed",{detail:{shiftClick:Boolean(this._shiftClick),fromSorterClick:Boolean(this._fromSorterClick)},bubbles:!0,composed:!0})),this._fromSorterClick=!1,this._shiftClick=!1)}_getDisplayOrder(t){return t===null?"":t+1}_onClick(t){if(t.defaultPrevented)return;const e=this.getRootNode().activeElement;this!==e&&this.contains(e)||(t.preventDefault(),this._shiftClick=t.shiftKey,this._fromSorterClick=!0,this.direction==="asc"?this.direction="desc":this.direction==="desc"?this.direction=null:this.direction="asc")}}customElements.define(Vs.is,Vs);const kd=x`
  :host([theme~='margin']) {
    margin: var(--lumo-space-m);
  }

  :host([theme~='padding']) {
    padding: var(--lumo-space-m);
  }

  :host([theme~='spacing-xs']) {
    gap: var(--lumo-space-xs);
  }

  :host([theme~='spacing-s']) {
    gap: var(--lumo-space-s);
  }

  :host([theme~='spacing']) {
    gap: var(--lumo-space-m);
  }

  :host([theme~='spacing-l']) {
    gap: var(--lumo-space-l);
  }

  :host([theme~='spacing-xl']) {
    gap: var(--lumo-space-xl);
  }
`;A("vaadin-horizontal-layout",kd,{moduleId:"lumo-horizontal-layout"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class qs extends V(F(O)){static get template(){return z`
      <style>
        :host {
          display: flex;
          box-sizing: border-box;
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Theme variations */
        :host([theme~='margin']) {
          margin: 1em;
        }

        :host([theme~='padding']) {
          padding: 1em;
        }

        :host([theme~='spacing']) {
          gap: 1em;
        }
      </style>

      <slot></slot>
    `}static get is(){return"vaadin-horizontal-layout"}}customElements.define(qs.is,qs);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ld=x`
  :host {
    position: absolute;
    right: 0;
    top: 0;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    min-width: auto;
    background: transparent;
    outline: none;
  }
`;A("vaadin-password-field-button",[Mi,Ld],{moduleId:"lumo-password-field-button"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Rd=x`
  [part='reveal-button']::before {
    content: var(--lumo-icons-eye);
  }

  :host([password-visible]) [part='reveal-button']::before {
    content: var(--lumo-icons-eye-disabled);
  }

  /* Make it easy to hide the button across the whole app */
  [part='reveal-button'] {
    position: relative;
    display: var(--lumo-password-field-reveal-button-display, block);
  }

  [part='reveal-button'][hidden] {
    display: none !important;
  }
`;A("vaadin-password-field",[st,Rd],{moduleId:"lumo-password-field"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Us extends wt{static get is(){return"vaadin-password-field-button"}static get template(){return z`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <slot name="tooltip"></slot>
    `}}customElements.define(Us.is,Us);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Nd=z`
  <div part="reveal-button" slot="suffix">
    <slot name="reveal"></slot>
  </div>
`;let pt;class Ws extends At{static get is(){return"vaadin-password-field"}static get template(){if(!pt){pt=super.template.cloneNode(!0);const t=Nd.content.querySelector('[part="reveal-button"]');pt.content.querySelector('[part="input-field"]').appendChild(t)}return pt}static get properties(){return{revealButtonHidden:{type:Boolean,observer:"_revealButtonHiddenChanged",value:!1},passwordVisible:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_passwordVisibleChanged",readOnly:!0},i18n:{type:Object,value:()=>({reveal:"Show password"})}}}static get observers(){return["__i18nChanged(i18n.*)"]}get slotStyles(){const t=this.localName;return[...super.slotStyles,`
        ${t} [slot="input"]::-ms-reveal {
          display: none;
        }
      `]}get _revealNode(){return this._revealButtonController&&this._revealButtonController.node}constructor(){super(),this._setType("password"),this.__boundRevealButtonClick=this._onRevealButtonClick.bind(this),this.__boundRevealButtonTouchend=this._onRevealButtonTouchend.bind(this)}ready(){super.ready(),this._revealPart=this.shadowRoot.querySelector('[part="reveal-button"]'),this._revealButtonController=new re(this,"reveal",()=>document.createElement("vaadin-password-field-button"),(t,e)=>{e.disabled=t.disabled,e.addEventListener("click",t.__boundRevealButtonClick),e.addEventListener("touchend",t.__boundRevealButtonTouchend)}),this.addController(this._revealButtonController),this.__updateAriaLabel(this.i18n),this._updateToggleState(!1),this._toggleRevealHidden(this.revealButtonHidden),this.inputElement&&(this.inputElement.autocapitalize="off")}_shouldSetFocus(t){return t.target===this.inputElement||t.target===this._revealNode}_shouldRemoveFocus(t){return!(t.relatedTarget===this._revealNode||t.relatedTarget===this.inputElement&&t.target===this._revealNode)}_setFocused(t){if(super._setFocused(t),!t)this._setPasswordVisible(!1);else{const e=this.getRootNode().activeElement===this._revealNode;this.toggleAttribute("focus-ring",this._keyboardActive&&!e)}}__updateAriaLabel(t){t.reveal&&this._revealNode&&this._revealNode.setAttribute("aria-label",t.reveal)}__i18nChanged(t){this.__updateAriaLabel(t.base)}_revealButtonHiddenChanged(t){this._toggleRevealHidden(t)}_togglePasswordVisibility(){this._setPasswordVisible(!this.passwordVisible)}_onRevealButtonClick(){this._togglePasswordVisibility()}_onRevealButtonTouchend(t){t.preventDefault(),this._togglePasswordVisibility(),this.inputElement.focus()}_toggleRevealHidden(t){this._revealNode&&(t?(this._revealPart.setAttribute("hidden",""),this._revealNode.setAttribute("tabindex","-1"),this._revealNode.setAttribute("aria-hidden","true")):(this._revealPart.removeAttribute("hidden"),this._revealNode.setAttribute("tabindex","0"),this._revealNode.removeAttribute("aria-hidden")))}_updateToggleState(t){this._revealNode&&this._revealNode.setAttribute("aria-pressed",t?"true":"false")}_passwordVisibleChanged(t){this._setType(t?"text":"password"),this._updateToggleState(t)}_disabledChanged(t,e){super._disabledChanged(t,e),this._revealNode&&(this._revealNode.disabled=t)}}customElements.define(Ws.is,Ws);const Dd=x`
  :host {
    max-width: calc(var(--lumo-size-m) * 10);
    background: var(--lumo-base-color) linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
  }

  [part='form'] {
    padding: var(--lumo-space-l);
  }

  [part='form-title'] {
    margin-top: calc(var(--lumo-font-size-xxxl) - var(--lumo-font-size-xxl));
  }

  #forgotPasswordButton {
    margin: var(--lumo-space-s) auto;
  }

  [part='error-message'] {
    background-color: var(--lumo-error-color-10pct);
    padding: var(--lumo-space-m);
    border-radius: var(--lumo-border-radius-m);
    margin-top: var(--lumo-space-m);
    margin-bottom: var(--lumo-space-s);
    color: var(--lumo-error-text-color);
  }

  :host(:not([dir='rtl'])) [part='error-message'] {
    padding-left: var(--lumo-size-m);
  }

  :host([dir='rtl']) [part='error-message'] {
    padding-right: var(--lumo-size-m);
  }

  [part='error-message']::before {
    content: var(--lumo-icons-error);
    font-family: lumo-icons;
    font-size: var(--lumo-icon-size-m);
    position: absolute;
    width: var(--lumo-size-m);
    height: 1em;
    line-height: 1;
    text-align: center;
  }

  :host(:not([dir='rtl'])) [part='error-message']::before {
    /* Visual centering */
    margin-left: calc(var(--lumo-size-m) * -0.95);
  }

  :host([dir='rtl']) [part='error-message']::before {
    /* Visual centering */
    margin-right: calc(var(--lumo-size-m) * -0.95);
  }

  [part='error-message-title'] {
    margin: 0 0 0.25em;
    color: inherit;
  }

  [part='error-message-description'] {
    font-size: var(--lumo-font-size-s);
    line-height: var(--lumo-line-height-s);
    margin: 0;
    opacity: 0.9;
  }

  [part='footer'] {
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-s);
    color: var(--lumo-secondary-text-color);
  }
`;A("vaadin-login-form-wrapper",[sr,rr,Dd],{moduleId:"lumo-login-form-wrapper"});/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const To=r=>class extends r{static get properties(){return{action:{type:String,value:null},disabled:{type:Boolean,value:!1,notify:!0},error:{type:Boolean,value:!1,reflectToAttribute:!0,notify:!0},noForgotPassword:{type:Boolean,value:!1},noAutofocus:{type:Boolean,value:!1},i18n:{type:Object,value(){return{form:{title:"Log in",username:"Username",password:"Password",submit:"Log in",forgotPassword:"Forgot password"},errorMessage:{title:"Incorrect username or password",message:"Check that you have entered the correct username and password and try again."}}}},_preventAutoEnable:{type:Boolean,value:!1}}}_retargetEvent(e){e.stopPropagation();const{detail:i,composed:s,cancelable:o,bubbles:n}=e;this.dispatchEvent(new CustomEvent(e.type,{bubbles:n,cancelable:o,composed:s,detail:i}))||e.preventDefault()}};/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Gs extends To(V(F(O))){static get template(){return z`
      <style>
        :host {
          overflow: hidden;
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='form'] {
          flex: 1;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
        }

        [part='form-title'] {
          margin: 0;
        }

        [part='error-message'] {
          position: relative;
        }
      </style>
      <section part="form">
        <h2 part="form-title">[[i18n.form.title]]</h2>
        <div part="error-message" hidden$="[[!error]]">
          <h5 part="error-message-title">[[i18n.errorMessage.title]]</h5>
          <p part="error-message-description">[[i18n.errorMessage.message]]</p>
        </div>

        <slot name="form"></slot>

        <vaadin-button
          id="forgotPasswordButton"
          theme="tertiary small forgot-password"
          on-click="_forgotPassword"
          hidden$="[[noForgotPassword]]"
          >[[i18n.form.forgotPassword]]</vaadin-button
        >

        <div part="footer">
          <p>[[i18n.additionalInformation]]</p>
        </div>
      </section>
    `}static get is(){return"vaadin-login-form-wrapper"}_forgotPassword(){this.dispatchEvent(new CustomEvent("forgot-password"))}}customElements.define(Gs.is,Gs);A("vaadin-login-form",x`
    vaadin-button[part='vaadin-login-submit'] {
      margin-top: var(--lumo-space-l);
      margin-bottom: var(--lumo-space-s);
    }
  `,{moduleId:"lumo-login-form"});/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class js extends To(V(F(O))){static get template(){return z`
      <style>
        [part='vaadin-login-native-form'] * {
          width: 100%;
        }
      </style>
      <vaadin-login-form-wrapper
        theme$="[[_theme]]"
        part="vaadin-login-native-form-wrapper"
        error="[[error]]"
        no-forgot-password="[[noForgotPassword]]"
        i18n="[[i18n]]"
        on-login="_retargetEvent"
        on-forgot-password="_retargetEvent"
      >
        <form part="vaadin-login-native-form" method="POST" action$="[[action]]" slot="form">
          <input id="csrf" type="hidden" />
          <vaadin-text-field
            name="username"
            label="[[i18n.form.username]]"
            id="vaadinLoginUsername"
            required
            on-keydown="_handleInputKeydown"
            autocapitalize="none"
            autocorrect="off"
            spellcheck="false"
            autocomplete="username"
          >
            <input type="text" slot="input" on-keyup="_handleInputKeyup" />
          </vaadin-text-field>

          <vaadin-password-field
            name="password"
            label="[[i18n.form.password]]"
            id="vaadinLoginPassword"
            required
            on-keydown="_handleInputKeydown"
            spellcheck="false"
            autocomplete="current-password"
          >
            <input type="password" slot="input" on-keyup="_handleInputKeyup" />
          </vaadin-password-field>

          <vaadin-button part="vaadin-login-submit" theme="primary contained" on-click="submit" disabled$="[[disabled]]"
            >[[i18n.form.submit]]</vaadin-button
          >
        </form>
      </vaadin-login-form-wrapper>
    `}static get is(){return"vaadin-login-form"}connectedCallback(){super.connectedCallback(),this.noAutofocus||this.$.vaadinLoginUsername.focus()}_attachDom(t){this.appendChild(t)}static get observers(){return["_errorChanged(error)"]}_errorChanged(){this.error&&!this._preventAutoEnable&&(this.disabled=!1)}submit(){const t=this.$.vaadinLoginUsername,e=this.$.vaadinLoginPassword;if(this.disabled||!(t.validate()&&e.validate()))return;this.error=!1,this.disabled=!0;const i={bubbles:!0,cancelable:!0,detail:{username:t.value,password:e.value}},s=this.dispatchEvent(new CustomEvent("login",i));if(this.action&&s){const o=document.querySelector("meta[name=_csrf_parameter]"),n=document.querySelector("meta[name=_csrf]");o&&n&&(this.$.csrf.name=o.content,this.$.csrf.value=n.content),this.querySelector('[part="vaadin-login-native-form"]').submit()}}_handleInputKeydown(t){if(t.key==="Enter"){const{currentTarget:e}=t,i=e.id==="vaadinLoginUsername"?this.$.vaadinLoginPassword:this.$.vaadinLoginUsername;e.validate()&&(i.validate()?this.submit():i.focus())}}_handleInputKeyup(t){const e=t.currentTarget;t.key==="Tab"&&e instanceof HTMLInputElement&&e.select()}}customElements.define(js.is,js);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let Ks=0;function So(r,t=[],e={}){const i=e.moduleId||`custom-style-module-${Ks}`;Ks+=1;const s=document.createElement("dom-module");r&&s.setAttribute("theme-for",r);const o=!!(t.length&&e.moduleId),n=[].concat(e.include||[]);n.length===0?s.__allStyles=t:o||(s.__partialStyles=t),s.innerHTML=`
    <template>
      ${n.map(a=>`<style include=${a}></style>`)}
      ${o?`<style>${t.map(a=>a.cssText).join(`
`)}</style>`:""}
    </template>
  `,s.register(i)}function Md(r){return St(r.querySelector("template")).map(t=>Fo(t.textContent))}function Fd(){const t=Ee.prototype.modules;return Object.keys(t).map(e=>{const i=t[e],s=i.getAttribute("theme-for");return i.__allStyles=i.__allStyles||Md(i).concat(i.__partialStyles||[]),{themeFor:s,moduleId:e,styles:i.__allStyles}})}window.Vaadin=window.Vaadin||{};window.Vaadin.styleModules={getAllThemes:Fd,registerStyles:So};at&&at.length>0&&(at.forEach(r=>{So(r.themeFor,r.styles,{moduleId:r.moduleId,include:r.include})}),at.length=0);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Et extends O{static create(t,e){const i=new this;return i.__template=e,i.__component=t,i}static get is(){return"vaadin-template-renderer-templatizer"}constructor(){super(),this.__template=null,this.__component=null,this.__TemplateClass=null,this.__templateInstances=new Set}render(t,e={}){let i=t.__templateInstance;if(this.__hasTemplateInstance(i)&&this.__isTemplateInstanceAttachedToDOM(i)){this.__updateProperties(i,e);return}this.__hasTemplateInstance(i)&&this.__disposeOfTemplateInstance(i),i=this.__createTemplateInstance(e),t.__templateInstance=i,t.innerHTML="",t.appendChild(i.root)}__updateProperties(t,e){t.item===e.item&&t._setPendingProperty("item"),t.__properties=e,t.setProperties(e)}__createTemplateInstance(t){this.__createTemplateClass(t);const e=new this.__TemplateClass(t);return e.__properties=t,this.__templateInstances.add(e),e}__disposeOfTemplateInstance(t){this.__templateInstances.delete(t)}__hasTemplateInstance(t){return this.__templateInstances.has(t)}__isTemplateInstanceAttachedToDOM(t){return t.children.length===0?!1:!!t.children[0].parentElement}__createTemplateClass(t){if(this.__TemplateClass)return;const e=Object.keys(t).reduce((i,s)=>({...i,[s]:!0}),{});this.__TemplateClass=Je(this.__template,this,{parentModel:!0,instanceProps:e,forwardHostProp(i,s){this.__templateInstances.forEach(o=>{o.forwardHostProp(i,s)})},notifyInstanceProp(i,s,o){let n;n=s.split(".")[0],n=n[0].toUpperCase()+n.slice(1);const a=`_on${n}PropertyChanged`;this[a]&&this[a](i,s,o)}})}}customElements.define(Et.is,Et);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class et extends Et{static get is(){return"vaadin-template-renderer-grid-templatizer"}_onItemPropertyChanged(t,e,i){if(e==="item"||!Array.isArray(this.__grid.items))return;const s=this.__grid.items.indexOf(t.item);e=e.replace(/^item\./,""),e=`items.${s}.${e}`,this.__grid.notifyPath(e,i)}_onExpandedPropertyChanged(t,e,i){t.__properties.expanded!==i&&(i?this.__grid.expandItem(t.item):this.__grid.collapseItem(t.item))}_onSelectedPropertyChanged(t,e,i){t.__properties.selected!==i&&(i?this.__grid.selectItem(t.item):this.__grid.deselectItem(t.item))}_onDetailsOpenedPropertyChanged(t,e,i){t.__properties.detailsOpened!==i&&(i?this.__grid.openItemDetails(t.item):this.__grid.closeItemDetails(t.item))}get __grid(){return this.__component.__gridElement?this.__component:this.__component._grid}}customElements.define(et.is,et);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function ge(r,t,e=Et){const i=e.create(r,t),s=(o,n,a)=>{i.render(o,a)};return t.__templatizer=i,s.__templatized=!0,s}function ve(r,t,e){const i=r[t];if(i&&!i.__templatized){const s=r.localName;throw new Error(`Cannot use both a template and a renderer for <${s} />.`)}r[t]=e}function Hd(r){r.__suppressTemplateWarning||r.hasAttribute("suppress-template-warning")||(console.warn(`WARNING: <template> inside <${r.localName}> is deprecated. Use a renderer function instead (see https://vaad.in/template-renderer)`),r.__suppressTemplateWarning=!0)}function $d(r,t){if(t.matches(".row-details")){const e=ge(r,t,et);ve(r,"rowDetailsRenderer",e)}}function Bd(r,t){if(t.matches(".header")){const i=ge(r,t);ve(r,"headerRenderer",i);return}if(t.matches(".footer")){const i=ge(r,t);ve(r,"footerRenderer",i);return}if(t.matches(".editor")){const i=ge(r,t,et);ve(r,"editModeRenderer",i);return}const e=ge(r,t,et);ve(r,"renderer",e)}function Vd(r,t){if(Hd(r),r.__gridElement){$d(r,t);return}if(r.__gridColumnElement){Bd(r,t);return}const e=ge(r,t);ve(r,"renderer",e)}function Po(r){$.getFlattenedNodes(r).filter(t=>t instanceof HTMLTemplateElement).forEach(t=>{t.__templatizer||Vd(r,t)})}function qd(r){r.__templateObserver||(r.__templateObserver=new $(r,()=>{Po(r)}))}window.Vaadin=window.Vaadin||{};window.Vaadin.templateRendererCallback=r=>{Po(r),qd(r)};const Ud=x`
  :host {
    --vaadin-tooltip-offset-top: var(--lumo-space-xs);
    --vaadin-tooltip-offset-bottom: var(--lumo-space-xs);
    --vaadin-tooltip-offset-start: var(--lumo-space-xs);
    --vaadin-tooltip-offset-end: var(--lumo-space-xs);
  }

  [part='overlay'] {
    background: var(--lumo-base-color) linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-s);
  }

  [part='content'] {
    padding: var(--lumo-space-xs) var(--lumo-space-s);
  }
`;A("vaadin-tooltip-overlay",[it,Ud],{moduleId:"lumo-tooltip-overlay"});/**
 * @license
 * Copyright (c) 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */A("vaadin-tooltip-overlay",x`
    [part='overlay'] {
      max-width: 40ch;
    }

    :host([position^='top'][top-aligned]) [part='overlay'],
    :host([position^='bottom'][top-aligned]) [part='overlay'] {
      margin-top: var(--vaadin-tooltip-offset-top, 0);
    }

    :host([position^='top'][bottom-aligned]) [part='overlay'],
    :host([position^='bottom'][bottom-aligned]) [part='overlay'] {
      margin-bottom: var(--vaadin-tooltip-offset-bottom, 0);
    }

    :host([position^='start'][start-aligned]) [part='overlay'],
    :host([position^='end'][start-aligned]) [part='overlay'] {
      margin-inline-start: var(--vaadin-tooltip-offset-start, 0);
    }

    :host([position^='start'][end-aligned]) [part='overlay'],
    :host([position^='end'][end-aligned]) [part='overlay'] {
      margin-inline-end: var(--vaadin-tooltip-offset-end, 0);
    }
  `,{moduleId:"vaadin-tooltip-overlay-styles"});let De;class Ys extends Bi(j){static get is(){return"vaadin-tooltip-overlay"}static get template(){return De||(De=super.template.cloneNode(!0),De.content.querySelector('[part~="overlay"]').removeAttribute("tabindex"),De.content.querySelector('[part~="content"]').innerHTML="<slot></slot>"),De}static get properties(){return{position:{type:String,reflectToAttribute:!0}}}ready(){super.ready(),this.owner=this.__dataHost,this.owner._overlayElement=this}requestContentUpdate(){if(super.requestContentUpdate(),this.toggleAttribute("hidden",this.textContent.trim()===""),this.positionTarget&&this.owner){const t=getComputedStyle(this.owner);["top","bottom","start","end"].forEach(e=>{this.style.setProperty(`--vaadin-tooltip-offset-${e}`,t.getPropertyValue(`--vaadin-tooltip-offset-${e}`))})}}_updatePosition(){if(super._updatePosition(),!!this.positionTarget){if(this.position==="bottom"||this.position==="top"){const t=this.positionTarget.getBoundingClientRect(),e=this.$.overlay.getBoundingClientRect(),i=t.width/2-e.width/2;if(this.style.left){const s=e.left+i;s>0&&(this.style.left=`${s}px`)}if(this.style.right){const s=parseFloat(this.style.right)+i;s>0&&(this.style.right=`${s}px`)}}if(this.position==="start"||this.position==="end"){const t=this.positionTarget.getBoundingClientRect(),e=this.$.overlay.getBoundingClientRect(),i=t.height/2-e.height/2;this.style.top=`${e.top+i}px`}}}}customElements.define(Ys.is,Ys);/**
 * @license
 * Copyright (c) 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const xe=500;let Oo=xe,zo=xe,ko=xe;const _t=new Set;let Me=!1,Fe=null,He=null;class Wd{constructor(t){this.host=t}open(t={immediate:!1}){const{immediate:e,hover:i,focus:s}=t,o=i&&this.hoverDelay>0,n=s&&this.focusDelay>0;!e&&(o||n)&&!this.__closeTimeout?this.__warmupTooltip(n):this.__showTooltip()}close(t){!t&&this.hideDelay>0?this.__scheduleClose():(this.__abortClose(),this._setOpened(!1)),this.__abortWarmUp(),Me&&(this.__abortCooldown(),this.__scheduleCooldown())}get openedProp(){return this.host.manual?"opened":"_autoOpened"}get focusDelay(){const t=this.host;return t.focusDelay!=null&&t.focusDelay>0?t.focusDelay:Oo}get hoverDelay(){const t=this.host;return t.hoverDelay!=null&&t.hoverDelay>0?t.hoverDelay:zo}get hideDelay(){const t=this.host;return t.hideDelay!=null&&t.hideDelay>0?t.hideDelay:ko}_isOpened(){return this.host[this.openedProp]}_setOpened(t){this.host[this.openedProp]=t}__flushClosingTooltips(){_t.forEach(t=>{t._stateController.close(!0),_t.delete(t)})}__showTooltip(){this.__abortClose(),this.__flushClosingTooltips(),this._setOpened(!0),Me=!0,this.__abortWarmUp(),this.__abortCooldown()}__warmupTooltip(t){this._isOpened()||(Me?this.__showTooltip():this.__scheduleWarmUp(t))}__abortClose(){this.__closeTimeout&&(clearTimeout(this.__closeTimeout),this.__closeTimeout=null)}__abortCooldown(){He&&(clearTimeout(He),He=null)}__abortWarmUp(){Fe&&(clearTimeout(Fe),Fe=null)}__scheduleClose(){this._isOpened()&&(_t.add(this.host),this.__closeTimeout=setTimeout(()=>{_t.delete(this.host),this.__closeTimeout=null,this._setOpened(!1)},this.hideDelay))}__scheduleCooldown(){He=setTimeout(()=>{He=null,Me=!1},this.hideDelay)}__scheduleWarmUp(t){const e=t?this.focusDelay:this.hoverDelay;Fe=setTimeout(()=>{Fe=null,Me=!0,this.__showTooltip()},e)}}class Qs extends ir(V(O)){static get is(){return"vaadin-tooltip"}static get template(){return z`
      <style>
        :host {
          display: none;
        }
      </style>
      <vaadin-tooltip-overlay
        id="[[_uniqueId]]"
        role="tooltip"
        renderer="[[_renderer]]"
        theme$="[[_theme]]"
        opened="[[__computeOpened(manual, opened, _autoOpened, _isConnected)]]"
        position-target="[[target]]"
        position="[[__effectivePosition]]"
        no-horizontal-overlap$="[[__computeNoHorizontalOverlap(__effectivePosition)]]"
        no-vertical-overlap$="[[__computeNoVerticalOverlap(__effectivePosition)]]"
        horizontal-align="[[__computeHorizontalAlign(__effectivePosition)]]"
        vertical-align="[[__computeVerticalAlign(__effectivePosition)]]"
        on-mouseleave="__onOverlayMouseLeave"
        modeless
      ></vaadin-tooltip-overlay>
    `}static get properties(){return{context:{type:Object,value:()=>({})},focusDelay:{type:Number},for:{type:String,observer:"__forChanged"},hideDelay:{type:Number},hoverDelay:{type:Number},manual:{type:Boolean,value:!1},opened:{type:Boolean,value:!1},position:{type:String},shouldShow:{type:Object,value:()=>(t,e)=>!0},target:{type:Object,observer:"__targetChanged"},text:{type:String,observer:"__textChanged"},generator:{type:Object},_autoOpened:{type:Boolean,observer:"__autoOpenedChanged"},_position:{type:String,value:"bottom"},__effectivePosition:{type:String,computed:"__computePosition(position, _position)"},_overlayElement:Object,__isTargetHidden:{type:Boolean,value:!1},_isConnected:{type:Boolean}}}static get observers(){return["__generatorChanged(_overlayElement, generator, context)"]}static setDefaultFocusDelay(t){Oo=t!=null&&t>=0?t:xe}static setDefaultHideDelay(t){ko=t!=null&&t>=0?t:xe}static setDefaultHoverDelay(t){zo=t!=null&&t>=0?t:xe}constructor(){super(),this._uniqueId=`vaadin-tooltip-${Lt()}`,this._renderer=this.__tooltipRenderer.bind(this),this.__onFocusin=this.__onFocusin.bind(this),this.__onFocusout=this.__onFocusout.bind(this),this.__onMouseDown=this.__onMouseDown.bind(this),this.__onMouseEnter=this.__onMouseEnter.bind(this),this.__onMouseLeave=this.__onMouseLeave.bind(this),this.__onKeyDown=this.__onKeyDown.bind(this),this.__onOverlayOpen=this.__onOverlayOpen.bind(this),this.__targetVisibilityObserver=new IntersectionObserver(([t])=>{this.__onTargetVisibilityChange(t.isIntersecting)},{threshold:1}),this._stateController=new Wd(this)}connectedCallback(){super.connectedCallback(),this._isConnected=!0,document.body.addEventListener("vaadin-overlay-open",this.__onOverlayOpen)}disconnectedCallback(){super.disconnectedCallback(),this._autoOpened&&this._stateController.close(!0),this._isConnected=!1,document.body.removeEventListener("vaadin-overlay-open",this.__onOverlayOpen)}__computeHorizontalAlign(t){return["top-end","bottom-end","start-top","start","start-bottom"].includes(t)?"end":"start"}__computeNoHorizontalOverlap(t){return["start-top","start","start-bottom","end-top","end","end-bottom"].includes(t)}__computeNoVerticalOverlap(t){return["top-start","top-end","top","bottom-start","bottom","bottom-end"].includes(t)}__computeVerticalAlign(t){return["top-start","top-end","top","start-bottom","end-bottom"].includes(t)?"bottom":"top"}__computeOpened(t,e,i,s){return s&&(t?e:i)}__computePosition(t,e){return t||e}__tooltipRenderer(t){t.textContent=typeof this.generator=="function"?this.generator(this.context):this.text}__autoOpenedChanged(t,e){t?document.addEventListener("keydown",this.__onKeyDown,!0):e&&document.removeEventListener("keydown",this.__onKeyDown,!0)}__forChanged(t){if(t){const e=this.getRootNode().getElementById(t);e?this.target=e:console.warn(`No element with id="${t}" found to show tooltip.`)}}__targetChanged(t,e){e&&(e.removeEventListener("mouseenter",this.__onMouseEnter),e.removeEventListener("mouseleave",this.__onMouseLeave),e.removeEventListener("focusin",this.__onFocusin),e.removeEventListener("focusout",this.__onFocusout),e.removeEventListener("mousedown",this.__onMouseDown),this.__targetVisibilityObserver.unobserve(e),Ft(e,"aria-describedby",this._uniqueId)),t&&(t.addEventListener("mouseenter",this.__onMouseEnter),t.addEventListener("mouseleave",this.__onMouseLeave),t.addEventListener("focusin",this.__onFocusin),t.addEventListener("focusout",this.__onFocusout),t.addEventListener("mousedown",this.__onMouseDown),requestAnimationFrame(()=>{this.__targetVisibilityObserver.observe(t)}),Mt(t,"aria-describedby",this._uniqueId))}__onFocusin(t){this.manual||!zi()||this.target.contains(t.relatedTarget)||!this.__isShouldShow()||(this.__focusInside=!0,!this.__isTargetHidden&&(!this.__hoverInside||!this._autoOpened)&&this._stateController.open({focus:!0}))}__onFocusout(t){this.manual||this.target.contains(t.relatedTarget)||(this.__focusInside=!1,this.__hoverInside||this._stateController.close(!0))}__onKeyDown(t){t.key==="Escape"&&(t.stopPropagation(),this._stateController.close(!0))}__onMouseDown(){this._stateController.close(!0)}__onMouseEnter(){this.manual||!this.__isShouldShow()||this.__hoverInside||(this.__hoverInside=!0,!this.__isTargetHidden&&(!this.__focusInside||!this._autoOpened)&&this._stateController.open({hover:!0}))}__onMouseLeave(t){t.relatedTarget!==this._overlayElement&&this.__handleMouseLeave()}__onOverlayMouseLeave(t){t.relatedTarget!==this.target&&this.__handleMouseLeave()}__handleMouseLeave(){this.manual||(this.__hoverInside=!1,this.__focusInside||this._stateController.close())}__onOverlayOpen(){this.manual||this._overlayElement.opened&&!this._overlayElement._last&&this._stateController.close(!0)}__onTargetVisibilityChange(t){const e=this.__isTargetHidden;if(this.__isTargetHidden=!t,e&&t&&(this.__focusInside||this.__hoverInside)){this._stateController.open({immediate:!0});return}!t&&this._autoOpened&&this._stateController.close(!0)}__isShouldShow(){return!(typeof this.shouldShow=="function"&&this.shouldShow(this.target,this.context)!==!0)}__textChanged(t,e){this._overlayElement&&(t||e)&&this._overlayElement.requestContentUpdate()}__generatorChanged(t,e,i){t&&((e!==this.__oldTextGenerator||i!==this.__oldContext)&&t.requestContentUpdate(),this.__oldTextGenerator=e,this.__oldContext=i)}}customElements.define(Qs.is,Qs);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gd={HTML:1,SVG:2},jd=(r,t)=>t===void 0?(r==null?void 0:r._$litType$)!==void 0:(r==null?void 0:r._$litType$)===t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class fi extends Ho{constructor(t){if(super(t),this.it=Ae,t.type!==$o.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===Ae||t==null)return this._t=void 0,this.it=t;if(t===Bo)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}fi.directiveName="unsafeHTML",fi.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class mi extends fi{}mi.directiveName="unsafeSVG",mi.resultType=2;const Kd=Vo(mi);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Yd(r){let t=Ae;if(r){const e=r.cloneNode(!0);e.removeAttribute("id"),t=qo`${Kd(e.outerHTML)}`}return t}function Qd(r){return jd(r,Gd.SVG)||r===Ae}function Xd(r){let t=r==null||r===""?Ae:r;return Qd(t)||(console.error("[vaadin-icon] Invalid svg passed, please use Lit svg literal."),t=Ae),t}function ch(r,t){const e=Xd(r);or(e,t)}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const $e={};class It extends V(O){static get template(){return null}static get is(){return"vaadin-iconset"}static get properties(){return{name:{type:String,observer:"__nameChanged"},size:{type:Number,value:24}}}static getIconset(t){let e=$e[t];return e||(e=document.createElement("vaadin-iconset"),e.name=t,$e[t]=e),e}connectedCallback(){super.connectedCallback(),this.style.display="none"}applyIcon(t){this._icons=this._icons||this.__createIconMap();const e=this._icons[this.__getIconId(t)];return{svg:Yd(e),size:this.size,viewBox:e?e.getAttribute("viewBox"):null}}__createIconMap(){const t={};return this.querySelectorAll("[id]").forEach(e=>{t[this.__getIconId(e.id)]=e}),t}__getIconId(t){return(t||"").replace(`${this.name}:`,"")}__nameChanged(t,e){e&&($e[t]=It.getIconset(e),delete $e[e]),t&&($e[t]=this,document.dispatchEvent(new CustomEvent("vaadin-iconset-registered",{detail:t})))}}customElements.define(It.is,It);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Lo=document.createElement("template");Lo.innerHTML=`<vaadin-iconset name="lumo" size="1000">
<svg xmlns="http://www.w3.org/2000/svg">
<defs>
<g id="lumo:align-center"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m83 191c0-18 13-33 29-33H721c16 0 29 15 29 33 0 18-13 33-29 34H279C263 442 250 427 250 408zM250 792c0-18 13-33 29-34H721c16 0 29 15 29 34s-13 33-29 33H279C263 825 250 810 250 792z m-83-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>
<g id="lumo:align-left"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m0 191c0-18 13-33 28-33H638c16 0 29 15 29 33 0 18-13 33-29 34H195C179 442 167 427 167 408zM167 792c0-18 13-33 28-34H638c16 0 29 15 29 34s-13 33-29 33H195C179 825 167 810 167 792z m0-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>
<g id="lumo:align-right"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m166 191c0-18 13-33 29-33H805c16 0 29 15 28 33 0 18-13 33-28 34H362C346 442 333 427 333 408zM333 792c0-18 13-33 29-34H805c16 0 29 15 28 34s-13 33-28 33H362C346 825 333 810 333 792z m-166-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>
<g id="lumo:angle-down"><path d="M283 391c-18-16-46-15-63 4-16 18-15 46 3 63l244 224c17 15 43 15 60 0l250-229c18-16 20-45 3-63-16-18-45-20-63-4l-220 203-214-198z"></path></g>
<g id="lumo:angle-left"><path d="M601 710c16 18 15 46-3 63-18 16-46 15-63-4l-224-244c-15-17-15-43 0-59l229-250c16-18 45-20 63-4 18 16 20 45 3 63l-203 220 198 215z"></path></g>
<g id="lumo:angle-right"><path d="M399 275c-16-18-15-46 3-63 18-16 46-15 63 4l224 244c15 17 15 43 0 59l-229 250c-16 18-45 20-63 4-18-16-20-45-3-63l203-220-198-215z"></path></g>
<g id="lumo:angle-up"><path d="M283 635c-18 16-46 15-63-3-16-18-15-46 3-63l244-224c17-15 43-15 60 0l250 229c18 16 20 45 3 63-16 18-45 20-63 3l-220-202L283 635z"></path></g>
<g id="lumo:arrow-down"><path d="M538 646l125-112c15-14 39-12 53 4 14 15 12 39-4 53l-187 166c0 0 0 0 0 0-14 13-36 12-50 0l-187-166c-15-14-17-37-4-53 14-15 37-17 53-4L462 646V312c0-21 17-38 38-37s38 17 37 37v334z"></path></g>
<g id="lumo:arrow-left"><path d="M375 538l111 125c14 15 12 39-3 53-15 14-39 12-53-4l-166-187c0 0 0 0 0 0-13-14-12-36 0-50l166-187c14-15 37-17 53-4 15 14 17 37 3 53L375 463h333c21 0 38 17 38 37 0 21-17 38-38 38h-333z"></path></g>
<g id="lumo:arrow-right"><path d="M625 538h-333c-21 0-38-17-38-38 0-21 17-38 38-37h333l-111-126c-14-15-12-39 3-53 15-14 39-12 53 4l166 187c13 14 13 36 0 50 0 0 0 0 0 0l-166 187c-14 15-37 17-53 4-15-14-17-37-3-53l111-125z"></path></g>
<g id="lumo:arrow-up"><path d="M538 354V688c0 21-17 38-38 37s-38-17-38-38V354l-125 112c-15 14-39 12-53-4-14-15-12-39 4-53l187-166c14-13 36-13 50 0 0 0 0 0 0 0l187 166c15 14 17 37 4 53-14 15-37 17-53 4L538 354z"></path></g>
<g id="lumo:bar-chart"><path d="M175 500h108c28 0 50 22 50 50v233c0 28-22 50-50 50H175c-28 0-50-22-50-50v-233c0-28 22-50 50-50z m33 67c-9 0-17 7-16 16v167c0 9 7 17 16 17h42c9 0 17-7 17-17v-167c0-9-7-17-17-16H208zM446 167h108c28 0 50 22 50 50v566c0 28-22 50-50 50h-108c-28 0-50-22-50-50V217c0-28 22-50 50-50z m33 66c-9 0-17 7-17 17v500c0 9 7 17 17 17h42c9 0 17-7 16-17V250c0-9-7-17-16-17h-42zM717 333h108c28 0 50 22 50 50v400c0 28-22 50-50 50h-108c-28 0-50-22-50-50V383c0-28 22-50 50-50z m33 67c-9 0-17 7-17 17v333c0 9 7 17 17 17h42c9 0 17-7 16-17v-333c0-9-7-17-16-17h-42z"></path></g>
<g id="lumo:bell"><path d="M367 675H292v-258C292 325 366 250 459 250H458V208c0-23 18-42 42-41 23 0 42 18 42 41v42h-1C634 250 708 325 708 417V675h-75v-258c0-51-41-92-91-92h-84C408 325 367 366 367 417V675z m-159 37c0-21 17-38 38-37h508c21 0 37 17 38 37 0 21-17 38-38 38H246C225 750 208 733 208 713z m230 71h125v32c0 17-14 31-32 31h-62c-17 0-32-14-31-31v-32z"></path></g>
<g id="lumo:calendar"><path d="M375 208h250v-20C625 176 634 167 646 167h41C699 167 708 176 708 188V208h74c23 0 41 19 41 42v42C823 315 804 333 782 333H218C196 333 177 315 177 292V250C177 227 196 208 218 208H292v-20C292 176 301 167 313 167h41C366 167 375 176 375 188V208zM229 375h42C283 375 292 384 292 396v41C292 449 282 458 271 458h-42C217 458 208 449 208 437v-41C208 384 218 375 229 375z m125 0h42C408 375 417 384 417 396v41C417 449 407 458 396 458h-42C342 458 333 449 333 437v-41C333 384 343 375 354 375z m125 0h42C533 375 542 384 542 396v41C542 449 532 458 521 458h-42C467 458 458 449 458 437v-41C458 384 468 375 479 375z m-250 125h42C283 500 292 509 292 521v41C292 574 282 583 271 583h-42C217 583 208 574 208 562v-41C208 509 218 500 229 500z m125 0h42C408 500 417 509 417 521v41C417 574 407 583 396 583h-42C342 583 333 574 333 562v-41C333 509 343 500 354 500z m125 0h42c12 0 21 9 21 21v41C542 574 532 583 521 583h-42C467 583 458 574 458 562v-41C458 509 468 500 479 500z m-250 125h42C283 625 292 634 292 646v41C292 699 282 708 271 708h-42C217 708 208 699 208 687v-41C208 634 218 625 229 625z m125 0h42C408 625 417 634 417 646v41C417 699 407 708 396 708h-42C342 708 333 699 333 687v-41C333 634 343 625 354 625z m125 0h42c12 0 21 9 21 21v41C542 699 532 708 521 708h-42C467 708 458 699 458 687v-41C458 634 468 625 479 625z m125-250h42C658 375 667 384 667 396v41C667 449 657 458 646 458h-42C592 458 583 449 583 437v-41C583 384 593 375 604 375z m0 125h42c12 0 21 9 21 21v41C667 574 657 583 646 583h-42C592 583 583 574 583 562v-41C583 509 593 500 604 500z m0 125h42c12 0 21 9 21 21v41C667 699 657 708 646 708h-42C592 708 583 699 583 687v-41C583 634 593 625 604 625z m125 0h42c12 0 21 9 21 21v41C792 699 782 708 771 708h-42C717 708 708 699 708 687v-41C708 634 718 625 729 625z m-500 125h42C283 750 292 759 292 771v41C292 824 282 833 271 833h-42C217 833 208 824 208 812v-41C208 759 218 750 229 750z m125 0h42C408 750 417 759 417 771v41C417 824 407 833 396 833h-42C342 833 333 824 333 812v-41C333 759 343 750 354 750z m125 0h42c12 0 21 9 21 21v41C542 824 532 833 521 833h-42C467 833 458 824 458 812v-41C458 759 468 750 479 750z m125 0h42c12 0 21 9 21 21v41C667 824 657 833 646 833h-42C592 833 583 824 583 812v-41C583 759 593 750 604 750z m125 0h42c12 0 21 9 21 21v41C792 824 782 833 771 833h-42C717 833 708 824 708 812v-41C708 759 718 750 729 750z m0-250h42c12 0 21 9 21 21v41C792 574 782 583 771 583h-42C717 583 708 574 708 562v-41C708 509 718 500 729 500z m0-125h42C783 375 792 384 792 396v41C792 449 782 458 771 458h-42C717 458 708 449 708 437v-41C708 384 718 375 729 375z"></path></g>
<g id="lumo:checkmark"><path d="M318 493c-15-15-38-15-53 0-15 15-15 38 0 53l136 136c15 15 38 15 53 0l323-322c15-15 15-38 0-53-15-15-38-15-54 0l-295 296-110-110z"></path></g>
<g id="lumo:chevron-down"><path d="M533 654l210-199c9-9 9-23 0-32C739 419 733 417 726 417H274C261 417 250 427 250 439c0 6 2 12 7 16l210 199c18 17 48 17 66 0z"></path></g>
<g id="lumo:chevron-left"><path d="M346 533l199 210c9 9 23 9 32 0 4-4 7-10 6-17V274C583 261 573 250 561 250c-6 0-12 2-16 7l-199 210c-17 18-17 48 0 66z"></path></g>
<g id="lumo:chevron-right"><path d="M654 533L455 743c-9 9-23 9-32 0C419 739 417 733 417 726V274C417 261 427 250 439 250c6 0 12 2 16 7l199 210c17 18 17 48 0 66z"></path></g>
<g id="lumo:chevron-up"><path d="M533 346l210 199c9 9 9 23 0 32-4 4-10 7-17 6H274C261 583 250 573 250 561c0-6 2-12 7-16l210-199c18-17 48-17 66 0z"></path></g>
<g id="lumo:clock"><path d="M538 489l85 85c15 15 15 38 0 53-15 15-38 15-53 0l-93-93a38 38 0 0 1-2-2C467 525 462 515 462 504V308c0-21 17-38 38-37 21 0 38 17 37 37v181zM500 833c-184 0-333-149-333-333s149-333 333-333 333 149 333 333-149 333-333 333z m0-68c146 0 265-118 265-265 0-146-118-265-265-265-146 0-265 118-265 265 0 146 118 265 265 265z"></path></g>
<g id="lumo:cog"><path d="M833 458l-81-18c-8-25-17-50-29-75L767 292 708 233l-72 49c-21-12-46-25-75-30L542 167h-84l-19 79c-25 8-50 17-71 30L296 233 233 296l47 69c-12 21-21 46-29 71L167 458v84l84 25c8 25 17 50 29 75L233 708 292 767l76-44c21 12 46 25 75 29L458 833h84l19-81c25-8 50-17 75-29L708 767l59-59-44-66c12-21 25-46 29-75L833 542v-84z m-333 217c-96 0-175-79-175-175 0-96 79-175 175-175 96 0 175 79 175 175 0 96-79 175-175 175z"></path></g>
<g id="lumo:cross"><path d="M445 500l-142-141c-15-15-15-40 0-56 15-15 40-15 56 0L500 445l141-142c15-15 40-15 56 0 15 15 15 40 0 56L555 500l142 141c15 15 15 40 0 56-15 15-40 15-56 0L500 555l-141 142c-15 15-40 15-56 0-15-15-15-40 0-56L445 500z"></path></g>
<g id="lumo:download"><path d="M538 521l125-112c15-14 39-12 53 4 14 15 12 39-4 53l-187 166a38 38 0 0 1 0 0c-14 13-36 12-50 0l-187-166c-15-14-17-37-4-53 14-15 37-17 53-4L462 521V188c0-21 17-38 38-38s38 17 37 38v333zM758 704c0-21 17-38 38-37 21 0 38 17 37 37v92c0 21-17 38-37 37H204c-21 0-38-17-37-37v-92c0-21 17-38 37-37s38 17 38 37v54h516v-54z"></path></g>
<g id="lumo:dropdown"><path d="M317 393c-15-14-39-13-53 3-14 15-13 39 3 53l206 189c14 13 36 13 50 0l210-193c15-14 17-38 3-53-14-15-38-17-53-3l-185 171L317 393z"></path></g>
<g id="lumo:edit"><path d="M673 281l62 56-205 233c-9 10-38 24-85 39a8 8 0 0 1-5 0c-4-1-7-6-6-10l0 0c14-47 25-76 35-86l204-232z m37-42l52-59c15-17 41-18 58-2 17 16 18 42 3 59L772 295l-62-56zM626 208l-67 75h-226C305 283 283 306 283 333v334C283 695 306 717 333 717h334c28 0 50-22 50-50v-185L792 398v269C792 736 736 792 667 792H333C264 792 208 736 208 667V333C208 264 264 208 333 208h293z"></path></g>
<g id="lumo:error"><path d="M500 833c-184 0-333-149-333-333s149-333 333-333 333 149 333 333-149 333-333 333z m0-68c146 0 265-118 265-265 0-146-118-265-265-265-146 0-265 118-265 265 0 146 118 265 265 265zM479 292h42c12 0 21 9 20 20l-11 217c0 8-6 13-13 13h-34c-7 0-13-6-13-13l-11-217C459 301 468 292 479 292zM483 608h34c12 0 21 9 20 21v33c0 12-9 21-20 21h-34c-12 0-21-9-21-21v-33c0-12 9-21 21-21z"></path></g>
<g id="lumo:eye"><path d="M500 750c-187 0-417-163-417-250s230-250 417-250 417 163 417 250-230 250-417 250z m-336-231c20 22 47 46 78 69C322 644 411 678 500 678s178-34 258-90c31-22 59-46 78-69 6-7 12-14 16-19-4-6-9-12-16-19-20-22-47-46-78-69C678 356 589 322 500 322s-178 34-258 90c-31 22-59 46-78 69-6 7-12 14-16 19 4 6 9 12 16 19zM500 646c-81 0-146-65-146-146s65-146 146-146 146 65 146 146-65 146-146 146z m0-75c39 0 71-32 71-71 0-39-32-71-71-71-39 0-71 32-71 71 0 39 32 71 71 71z"></path></g>
<g id="lumo:eye-disabled"><path d="M396 735l60-60c15 2 30 3 44 3 89 0 178-34 258-90 31-22 59-46 78-69 6-7 12-14 16-19-4-6-9-12-16-19-20-22-47-46-78-69-8-5-15-11-23-15l50-51C862 397 917 458 917 500c0 87-230 250-417 250-34 0-69-5-104-15zM215 654C138 603 83 542 83 500c0-87 230-250 417-250 34 0 69 5 104 15l-59 60c-15-2-30-3-45-3-89 0-178 34-258 90-31 22-59 46-78 69-6 7-12 14-16 19 4 6 9 12 16 19 20 22 47 46 78 69 8 5 16 11 24 16L215 654z m271-9l159-159c0 5 1 9 1 14 0 81-65 146-146 146-5 0-9 0-14-1z m-131-131C354 510 354 505 354 500c0-81 65-146 146-146 5 0 10 0 14 1l-159 159z m-167 257L780 179c12-12 32-12 44 0 12 12 12 32 0 44L232 815c-12 12-32 12-44 0s-12-32 0-44z"></path></g>
<g id="lumo:menu"><path d="M167 292c0-23 19-42 41-42h584C815 250 833 268 833 292c0 23-19 42-41 41H208C185 333 167 315 167 292z m0 208c0-23 19-42 41-42h584C815 458 833 477 833 500c0 23-19 42-41 42H208C185 542 167 523 167 500z m0 208c0-23 19-42 41-41h584C815 667 833 685 833 708c0 23-19 42-41 42H208C185 750 167 732 167 708z"></path></g>
<g id="lumo:minus"><path d="M261 461c-22 0-39 18-39 39 0 22 18 39 39 39h478c22 0 39-18 39-39 0-22-18-39-39-39H261z"></path></g>
<g id="lumo:ordered-list"><path d="M138 333V198H136l-43 28v-38l45-31h45V333H138z m-61 128c0-35 27-59 68-59 39 0 66 21 66 53 0 20-11 37-43 64l-29 27v2h74V583H80v-30l55-52c26-24 32-33 33-43 0-13-10-22-24-22-15 0-26 10-26 25v1h-41v-1zM123 759v-31h21c15 0 25-8 25-21 0-13-10-21-25-21-15 0-26 9-26 23h-41c1-34 27-56 68-57 39 0 66 20 66 49 0 20-14 36-33 39v3c24 3 40 19 39 41 0 32-30 54-73 54-41 0-69-22-70-57h43c1 13 11 22 28 22 16 0 27-9 27-22 0-14-10-22-28-22h-21zM333 258c0-18 15-33 34-33h516c18 0 33 15 34 33 0 18-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z"></path></g>
<g id="lumo:phone"><path d="M296 208l42-37c17-15 44-13 58 4a42 42 0 0 1 5 7L459 282c12 20 5 45-15 57l-7 4c-17 10-25 30-19 48l20 66a420 420 0 0 0 93 157l41 45c13 14 35 17 51 8l7-5c20-12 45-5 57 16L745 777c12 20 5 45-15 57a42 42 0 0 1-8 4l-52 17c-61 21-129 4-174-43l-50-52c-81-85-141-189-175-302l-24-78c-19-62 0-129 49-172z"></path></g>
<g id="lumo:photo"><path d="M208 167h584c69 0 125 56 125 125v416c0 69-56 125-125 125H208c-69 0-125-56-125-125V292c0-69 56-125 125-125z m584 75H208c-28 0-50 22-50 50v416c0 28 22 50 50 50h584c28 0 50-22 50-50V292c0-28-22-50-50-50zM239 740l167-167c12-12 31-14 45-6l73 43 172-201c13-15 34-18 50-7l95 67v92l-111-78-169 199c-12 14-32 17-47 8l-76-43-111 111H229c2-7 5-13 10-18zM458 427C458 490 407 542 344 542S229 490 229 427c0-63 51-115 115-115S458 364 458 427z m-62 0C396 398 373 375 344 375S292 398 292 427c0 29 23 52 52 52s52-23 52-52z"></path></g>
<g id="lumo:play"><path d="M689 528l-298 175c-13 8-34 8-48 0-6-4-10-9-10-14V311C333 300 348 292 367 292c9 0 17 2 24 5l298 175c26 15 26 40 0 56z"></path></g>
<g id="lumo:plus"><path d="M461 461H261c-22 0-39 18-39 39 0 22 18 39 39 39h200v200c0 22 18 39 39 39 22 0 39-18 39-39v-200h200c22 0 39-18 39-39 0-22-18-39-39-39h-200V261c0-22-18-39-39-39-22 0-39 18-39 39v200z"></path></g>
<g id="lumo:redo"><path d="M290 614C312 523 393 458 491 458c55 0 106 22 144 57l-88 88c-3 3-5 7-5 11 0 8 6 15 15 15l193-5c17 0 31-15 31-32l5-192c0-4-1-8-4-11-6-6-16-6-22 0l-66 67C641 406 570 375 491 375c-136 0-248 90-281 215-1 2-1 5-1 8-8 44 45 68 73 32 4-5 7-11 8-16z"></path></g>
<g id="lumo:reload"><path d="M500 233V137c0-9 7-16 15-16 4 0 8 2 10 4l133 140c12 12 12 32 0 45l-133 140c-6 6-15 6-21 0C502 447 500 443 500 438V308c-117 0-212 95-212 213 0 117 95 212 212 212 117 0 212-95 212-212 0-21 17-38 38-38s38 17 37 38c0 159-129 288-287 287-159 0-288-129-288-287 0-159 129-288 288-288z"></path></g>
<g id="lumo:search"><path d="M662 603l131 131c16 16 16 42 0 59-16 16-43 16-59 0l-131-131C562 691 512 708 458 708c-138 0-250-112-250-250 0-138 112-250 250-250 138 0 250 112 250 250 0 54-17 104-46 145zM458 646c104 0 188-84 188-188S562 271 458 271 271 355 271 458s84 188 187 188z"></path></g>
<g id="lumo:undo"><path d="M710 614C688 523 607 458 509 458c-55 0-106 22-144 57l88 88c3 3 5 7 5 11 0 8-6 15-15 15l-193-5c-17 0-31-15-31-32L214 400c0-4 1-8 4-11 6-6 16-6 22 0l66 67C359 406 430 375 509 375c136 0 248 90 281 215 1 2 1 5 1 8 8 44-45 68-73 32-4-5-7-11-8-16z"></path></g>
<g id="lumo:unordered-list"><path d="M146 325c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63z m0 250c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63z m0 250c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63zM333 258c0-18 15-33 34-33h516c18 0 33 15 34 33 0 18-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z"></path></g>
<g id="lumo:upload"><path d="M454 271V604c0 21-17 38-37 38s-38-17-38-38V271L254 382c-15 14-39 12-53-3-14-15-12-39 3-53L391 160c14-13 36-13 51-1 0 0 0 0 0 1l187 166c15 14 17 37 3 53-14 15-37 17-53 3L454 271zM675 704c0-21 17-38 37-37 21 0 38 17 38 37v92c0 21-17 38-38 37H121c-21 0-38-17-38-37v-92c0-21 17-38 38-37s38 17 37 37v54h517v-54z"></path></g>
<g id="lumo:user"><path d="M500 500c-69 0-125-56-125-125s56-125 125-125 125 56 125 125-56 125-125 125z m-292 292c0-115 131-208 292-209s292 93 292 209H208z"></path></g>
</defs>
</svg>
</vaadin-iconset>`;document.head.appendChild(Lo.content);const Zd=x`
  :host([theme~='margin']) {
    margin: var(--lumo-space-m);
  }

  :host([theme~='padding']) {
    padding: var(--lumo-space-m);
  }

  :host([theme~='spacing-xs']) {
    gap: var(--lumo-space-xs);
  }

  :host([theme~='spacing-s']) {
    gap: var(--lumo-space-s);
  }

  :host([theme~='spacing']) {
    gap: var(--lumo-space-m);
  }

  :host([theme~='spacing-l']) {
    gap: var(--lumo-space-l);
  }

  :host([theme~='spacing-xl']) {
    gap: var(--lumo-space-xl);
  }
`;A("vaadin-vertical-layout",Zd,{moduleId:"lumo-vertical-layout"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Xs extends V(F(O)){static get template(){return z`
      <style>
        :host {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          box-sizing: border-box;
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Theme variations */
        :host([theme~='margin']) {
          margin: 1em;
        }

        :host([theme~='padding']) {
          padding: 1em;
        }

        :host([theme~='spacing']) {
          gap: 1em;
        }
      </style>

      <slot></slot>
    `}static get is(){return"vaadin-vertical-layout"}}customElements.define(Xs.is,Xs);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class Z{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run(()=>{this._timer=null,tt.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),tt.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}static debounce(t,e,i){return t instanceof Z?t._cancelAsync():t=new Z,t.setConfig(e,i),t}}let tt=new Set;const Jd=function(r){tt.add(r)},ec=function(){const r=Boolean(tt.size);return tt.forEach(t=>{try{t.flush()}catch(e){setTimeout(()=>{throw e})}}),r};(function(){const r=function(t){return window.Vaadin.Flow.tryCatchWrapper(t,"Vaadin Combo Box")};window.Vaadin.Flow.comboBoxConnector={initLazy:t=>r(function(e){if(e.$connector)return;e.$connector={};const i={};let s={},o="";const n=new window.Vaadin.ComboBoxPlaceholder,a=(()=>{let h="",m=!1;return{needsDataCommunicatorReset:()=>m=!0,getLastFilterSentToServer:()=>h,requestData:(y,S,E)=>{const L=S-y,U=E.filter;e.$server.setRequestedRange(y,L,U),h=U,m&&(e.$server.resetDataCommunicator(),m=!1)}}})(),l=(h=Object.keys(i))=>{h.forEach(m=>{i[m]([],e.size),delete i[m];const g=parseInt(m)*e.pageSize,b=g+e.pageSize,C=Math.min(b,e.filteredItems.length);for(let y=g;y<C;y++)e.filteredItems[y]=n})};e.dataProvider=function(h,m){if(h.pageSize!=e.pageSize)throw"Invalid pageSize";if(e._clientSideFilter)if(s[0]){c(s[0],h.filter,m);return}else h.filter="";if(h.filter!==o){s={},o=h.filter,this._filterDebouncer=Z.debounce(this._filterDebouncer,ti.after(500),()=>{if(a.getLastFilterSentToServer()===h.filter&&a.needsDataCommunicatorReset(),h.filter!==o)throw new Error("Expected params.filter to be '"+o+"' but was '"+h.filter+"'");this._filterDebouncer=void 0,l(),e.dataProvider(h,m)});return}if(this._filterDebouncer){i[h.page]=m;return}if(s[h.page])d(h.page,m);else{i[h.page]=m;const b=Math.max(h.pageSize*2,500),C=Object.keys(i).map(E=>parseInt(E)),y=Math.min(...C),S=Math.max(...C);if(C.length*h.pageSize>b)h.page===y?l([String(S)]):l([String(y)]),e.dataProvider(h,m);else if(S-y+1!==C.length)l();else{const E=h.pageSize*y,L=h.pageSize*(S+1);a.requestData(E,L,h)}}},e.$connector.clear=r((h,m)=>{const g=Math.floor(h/e.pageSize),b=Math.ceil(m/e.pageSize);for(let C=g;C<g+b;C++)delete s[C]}),e.$connector.filter=r(function(h,m){return m=m?m.toString().toLowerCase():"",e._getItemLabel(h,e.itemLabelPath).toString().toLowerCase().indexOf(m)>-1}),e.$connector.set=r(function(h,m,g){if(g!=a.getLastFilterSentToServer())return;if(h%e.pageSize!=0)throw"Got new data to index "+h+" which is not aligned with the page size of "+e.pageSize;if(h===0&&m.length===0&&i[0]){s[0]=[];return}const b=h/e.pageSize,C=Math.ceil(m.length/e.pageSize);for(let y=0;y<C;y++){let S=b+y,E=m.slice(y*e.pageSize,(y+1)*e.pageSize);s[S]=E}}),e.$connector.updateData=r(function(h){const m=new Map(h.map(g=>[g.key,g]));e.filteredItems=e.filteredItems.map(g=>m.get(g.key)||g)}),e.$connector.updateSize=r(function(h){e._clientSideFilter||(e.size=h)}),e.$connector.reset=r(function(){l(),s={},e.clearCache()}),e.$connector.confirm=r(function(h,m){if(m!=a.getLastFilterSentToServer())return;let g=Object.getOwnPropertyNames(i);for(let b=0;b<g.length;b++){let C=g[b];s[C]&&d(C,i[C])}e.$server.confirmUpdate(h)});const d=r(function(h,m){let g=s[h];e._clientSideFilter?c(g,e.filter,m):(delete s[h],m(g,e.size))}),c=r(function(h,m,g){let b=h;m&&(b=h.filter(C=>e.$connector.filter(C,m))),g(b,b.length)});e.addEventListener("custom-value-set",r(h=>h.preventDefault()))})(t)}})();window.Vaadin.ComboBoxPlaceholder=ce;(function(){function r(n){return window.Vaadin.Flow.tryCatchWrapper(n,"Vaadin Context Menu")}function t(n,a){try{return window.Vaadin.Flow.clients[n].getByNodeId(a)}catch(l){console.error("Could not get node %s from app %s",a,n),console.error(l)}}function e(n,a){n.$connector||(n.$connector={generateItems:r(l=>{const d=i(a,l);n.items=d})})}function i(n,a){const l=t(n,a);if(!!l)return Array.from(l.children).map(d=>{const c={component:d,checked:d._checked,theme:d.__theme};return d.localName=="vaadin-context-menu-item"&&d._containerNodeId&&(c.children=i(n,d._containerNodeId)),d._item=c,c})}function s(n,a){n._item&&(n._item.checked=a)}function o(n,a){n._item&&(n._item.theme=a)}window.Vaadin.Flow.contextMenuConnector={initLazy(...n){return r(e)(...n)},generateItemsTree(...n){return r(i)(...n)},setChecked(...n){return r(s)(...n)},setTheme(...n){return r(o)(...n)}}})();(function(){function r(e){return window.Vaadin.Flow.tryCatchWrapper(e,"Vaadin Context Menu Target")}function t(e){e.$contextMenuTargetConnector||(e.$contextMenuTargetConnector={openOnHandler:r(function(i){i.preventDefault(),i.stopPropagation(),this.$contextMenuTargetConnector.openEvent=i;let s={};e.getContextMenuBeforeOpenDetail&&(s=e.getContextMenuBeforeOpenDetail(i)),e.dispatchEvent(new CustomEvent("vaadin-context-menu-before-open",{detail:s}))}),updateOpenOn:r(function(i){this.removeListener(),this.openOnEventType=i,customElements.whenDefined("vaadin-context-menu").then(r(()=>{J[i]?Te(e,i,this.openOnHandler):e.addEventListener(i,this.openOnHandler)}))}),removeListener:r(function(){this.openOnEventType&&(J[this.openOnEventType]?Fr(e,this.openOnEventType,this.openOnHandler):e.removeEventListener(this.openOnEventType,this.openOnHandler))}),openMenu:r(function(i){i.open(this.openEvent)}),removeConnector:r(function(){this.removeListener(),e.$contextMenuTargetConnector=void 0})})}window.Vaadin.Flow.contextMenuTargetConnector={init(...e){return r(t)(...e)}}})();window.Vaadin=window.Vaadin||{};window.Vaadin.Flow=window.Vaadin.Flow||{};window.Vaadin.Flow.dndConnector={__ondragenterListener:function(r){const t=r.currentTarget.__dropEffect;r.currentTarget.hasAttribute("disabled")||(t&&(r.dataTransfer.dropEffect=t),t&&t!=="none"&&(r.currentTarget.classList.contains("v-drag-over-target")?r.currentTarget["__skip-leave"]=!0:r.currentTarget.classList.add("v-drag-over-target"),r.preventDefault(),r.stopPropagation()))},__ondragoverListener:function(r){if(!r.currentTarget.hasAttribute("disabled")){const t=r.currentTarget.__dropEffect;t&&(r.dataTransfer.dropEffect=t),r.preventDefault(),r.stopPropagation()}},__ondragleaveListener:function(r){r.currentTarget["__skip-leave"]?r.currentTarget["__skip-leave"]=!1:r.currentTarget.classList.remove("v-drag-over-target"),r.stopPropagation()},__ondropListener:function(r){const t=r.currentTarget.__dropEffect;t&&(r.dataTransfer.dropEffect=t),r.currentTarget.classList.remove("v-drag-over-target"),r.preventDefault(),r.stopPropagation()},updateDropTarget:function(r){r.__active?(r.addEventListener("dragenter",this.__ondragenterListener,!1),r.addEventListener("dragover",this.__ondragoverListener,!1),r.addEventListener("dragleave",this.__ondragleaveListener,!1),r.addEventListener("drop",this.__ondropListener,!1)):(r.removeEventListener("dragenter",this.__ondragenterListener,!1),r.removeEventListener("dragover",this.__ondragoverListener,!1),r.removeEventListener("dragleave",this.__ondragleaveListener,!1),r.removeEventListener("drop",this.__ondropListener,!1),r.classList.remove("v-drag-over-target"))},__dragstartListener:function(r){r.stopPropagation(),r.dataTransfer.setData("text/plain",""),r.currentTarget.hasAttribute("disabled")?r.preventDefault():(r.currentTarget.__effectAllowed&&(r.dataTransfer.effectAllowed=r.currentTarget.__effectAllowed),r.currentTarget.classList.add("v-dragged"))},__dragendListener:function(r){r.currentTarget.classList.remove("v-dragged")},updateDragSource:function(r){r.draggable?(r.addEventListener("dragstart",this.__dragstartListener,!1),r.addEventListener("dragend",this.__dragendListener,!1)):(r.removeEventListener("dragstart",this.__dragstartListener,!1),r.removeEventListener("dragend",this.__dragendListener,!1))}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const tc=function(){let r,t;do r=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),t=ec();while(r||t)};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Zs=!1;function ic(){if(dr&&!lr){if(!Zs){Zs=!0;const r=document.createElement("style");r.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(r)}return!0}return!1}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class Ro extends O{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"},notifyDomChange:{type:Boolean}}}constructor(){super(),this.__renderDebouncer=null,this._lastIf=!1,this.__hideTemplateChildren__=!1,this.__template,this._templateInfo}__debounceRender(){this.__renderDebouncer=Z.debounce(this.__renderDebouncer,wi,()=>this.__render()),Jd(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const t=P(this).parentNode;(!t||t.nodeType==Node.DOCUMENT_FRAGMENT_NODE&&!P(t).host)&&this.__teardownInstance()}connectedCallback(){super.connectedCallback(),ic()||(this.style.display="none"),this.if&&this.__debounceRender()}__ensureTemplate(){if(!this.__template){const t=this;let e=t._templateInfo?t:P(t).querySelector("template");if(!e){let i=new MutationObserver(()=>{if(P(this).querySelector("template"))i.disconnect(),this.__render();else throw new Error("dom-if requires a <template> child")});return i.observe(this,{childList:!0}),!1}this.__template=e}return!0}__ensureInstance(){let t=P(this).parentNode;if(this.__hasInstance()){let e=this.__getInstanceNodes();if(e&&e.length&&P(this).previousSibling!==e[e.length-1])for(let s=0,o;s<e.length&&(o=e[s]);s++)P(t).insertBefore(o,this)}else{if(!t||!this.__ensureTemplate())return!1;this.__createAndInsertInstance(t)}return!0}render(){tc()}__render(){if(this.if){if(!this.__ensureInstance())return}else this.restamp&&this.__teardownInstance();this._showHideChildren(),(!sn||this.notifyDomChange)&&this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__hasInstance(){}__getInstanceNodes(){}__createAndInsertInstance(t){}__teardownInstance(){}_showHideChildren(){}}class sc extends Ro{constructor(){super(),this.__instance=null,this.__syncInfo=null}__hasInstance(){return Boolean(this.__instance)}__getInstanceNodes(){return this.__instance.templateInfo.childNodes}__createAndInsertInstance(t){const e=this.__dataHost||this;if(Ge&&!this.__dataHost)throw new Error("strictTemplatePolicy: template owner not trusted");const i=e._bindTemplate(this.__template,!0);i.runEffects=(s,o,n)=>{let a=this.__syncInfo;if(this.if)a&&(this.__syncInfo=null,this._showHideChildren(),o=Object.assign(a.changedProps,o)),s(o,n);else if(this.__instance)if(a||(a=this.__syncInfo={runEffects:s,changedProps:{}}),n)for(const l in o){const d=ee(l);a.changedProps[d]=this.__dataHost[d]}else Object.assign(a.changedProps,o)},this.__instance=e._stampTemplate(this.__template,i),P(t).insertBefore(this.__instance,this)}__syncHostProperties(){const t=this.__syncInfo;t&&(this.__syncInfo=null,t.runEffects(t.changedProps,!1))}__teardownInstance(){const t=this.__dataHost||this;this.__instance&&(t._removeBoundDom(this.__instance),this.__instance=null,this.__syncInfo=null)}_showHideChildren(){const t=this.__hideTemplateChildren__||!this.if;this.__instance&&Boolean(this.__instance.__hidden)!==t&&(this.__instance.__hidden=t,mo(t,this.__instance.templateInfo.childNodes)),t||this.__syncHostProperties()}}class rc extends Ro{constructor(){super(),this.__ctor=null,this.__instance=null,this.__invalidProps=null}__hasInstance(){return Boolean(this.__instance)}__getInstanceNodes(){return this.__instance.children}__createAndInsertInstance(t){this.__ctor||(this.__ctor=Je(this.__template,this,{mutableData:!0,forwardHostProp:function(e,i){this.__instance&&(this.if?this.__instance.forwardHostProp(e,i):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[ee(e)]=!0))}})),this.__instance=new this.__ctor,P(t).insertBefore(this.__instance.root,this)}__teardownInstance(){if(this.__instance){let t=this.__instance.children;if(t&&t.length){let e=P(t[0]).parentNode;if(e){e=P(e);for(let i=0,s;i<t.length&&(s=t[i]);i++)e.removeChild(s)}}this.__invalidProps=null,this.__instance=null}}__syncHostProperties(){let t=this.__invalidProps;if(t){this.__invalidProps=null;for(let e in t)this.__instance._setPendingProperty(e,this.__dataHost[e]);this.__instance._flushProperties()}}_showHideChildren(){const t=this.__hideTemplateChildren__||!this.if;this.__instance&&Boolean(this.__instance.__hidden)!==t&&(this.__instance.__hidden=t,this.__instance._showHideChildren(t)),t||this.__syncHostProperties()}}const Js=hr?sc:rc;customElements.define(Js.is,Js);class er extends O{static get template(){return z`
      <style>
        :host {
          animation: 1ms flow-component-renderer-appear;
        }

        @keyframes flow-component-renderer-appear {
          to {
            opacity: 1;
          }
        }
      </style>
      <slot></slot>
    `}static get is(){return"flow-component-renderer"}static get properties(){return{nodeid:Number,appid:String}}static get observers(){return["_attachRenderedComponentIfAble(appid, nodeid)"]}ready(){super.ready(),this.addEventListener("click",function(t){this.firstChild&&typeof this.firstChild.click=="function"&&t.target===this&&(t.stopPropagation(),this.firstChild.click())}),this.addEventListener("animationend",this._onAnimationEnd)}_asyncAttachRenderedComponentIfAble(){this._debouncer=Z.debounce(this._debouncer,Cn,()=>this._attachRenderedComponentIfAble())}_attachRenderedComponentIfAble(){if(!this.nodeid||!this.appid)return;const t=this._getRenderedComponent();this.firstChild?t?this.firstChild!==t?(this.replaceChild(t,this.firstChild),this._defineFocusTarget(),this.onComponentRendered()):(this._defineFocusTarget(),this.onComponentRendered()):this._asyncAttachRenderedComponentIfAble():t?(this.appendChild(t),this._defineFocusTarget(),this.onComponentRendered()):this._asyncAttachRenderedComponentIfAble()}_getRenderedComponent(){try{return window.Vaadin.Flow.clients[this.appid].getByNodeId(this.nodeid)}catch(t){console.error("Could not get node %s from app %s",this.nodeid,this.appid),console.error(t)}return null}onComponentRendered(){}_defineFocusTarget(){var t=this._getFirstFocusableDescendant(this.firstChild);t!==null&&t.setAttribute("focus-target","true")}_getFirstFocusableDescendant(t){if(this._isFocusable(t))return t;if(t.hasAttribute&&(t.hasAttribute("disabled")||t.hasAttribute("hidden"))||!t.children)return null;for(var e=0;e<t.children.length;e++){var i=this._getFirstFocusableDescendant(t.children[e]);if(i!==null)return i}return null}_isFocusable(t){return t.hasAttribute&&typeof t.hasAttribute=="function"&&(t.hasAttribute("disabled")||t.hasAttribute("hidden"))?!1:t.tabIndex===0}_onAnimationEnd(t){t.animationName.indexOf("flow-component-renderer-appear")===0&&this._attachRenderedComponentIfAble()}}window.customElements.define(er.is,er);(function(){const r=function(e){return window.Vaadin.Flow.tryCatchWrapper(e,"Vaadin Grid")};let t=!1;window.Vaadin.Flow.gridConnector={initLazy:e=>r(function(i){if(i.$connector)return;t||(t=!0,G.prototype.ensureSubCacheForScaledIndexOriginal=G.prototype.ensureSubCacheForScaledIndex,G.prototype.ensureSubCacheForScaledIndex=r(function(u){if(!this.grid.$connector){this.ensureSubCacheForScaledIndexOriginal(u);return}this.itemCaches[u]||this.grid.$connector.beforeEnsureSubCacheForScaledIndex(this,u)}),G.prototype.isLoadingOriginal=G.prototype.isLoading,G.prototype.isLoading=r(function(){return this.grid.$connector?Boolean(this.grid.$connector.hasEnsureSubCacheQueue()||Object.keys(this.pendingRequests).length||Object.keys(this.itemCaches).filter(u=>this.itemCaches[u].isLoading())[0]):this.isLoadingOriginal()}),G.prototype.doEnsureSubCacheForScaledIndex=r(function(u){if(!this.itemCaches[u]){const _=new G.prototype.constructor(this.grid,this,this.items[u]);_.itemkeyCaches={},this.itemkeyCaches||(this.itemkeyCaches={}),this.itemCaches[u]=_,this.itemkeyCaches[this.grid.getItemId(_.parentItem)]=_,this.grid._loadPage(0,_)}}),G.prototype.getCacheAndIndexByKey=r(function(u){for(let p in this.items)if(this.grid.getItemId(this.items[p])===u)return{cache:this,scaledIndex:p};const _=Object.keys(this.itemkeyCaches);for(let p=0;p<_.length;p++){const f=_[p];let w=this.itemkeyCaches[f].getCacheAndIndexByKey(u);if(w)return w}}),G.prototype.getLevel=r(function(){let u=this,_=0;for(;u.parentCache;)u=u.parentCache,_++;return _}));const s={},o={},n={},a=50,l=20;let d=[],c,h=[],m;const g=150;let b,C={};const y="null";C[y]=[0,0];const S=["SINGLE","NONE","MULTI"];let E={},L="SINGLE",U=!1;i.size=0,i.itemIdPath="key",i.$connector={},i.$connector.hasEnsureSubCacheQueue=r(()=>h.length>0),i.$connector.hasParentRequestQueue=r(()=>d.length>0),i.$connector.hasRootRequestQueue=r(()=>Object.keys(s).length>0||b&&b.isActive()),i.$connector.beforeEnsureSubCacheForScaledIndex=r(function(u,_){h.push({cache:u,scaledIndex:_,itemkey:i.getItemId(u.items[_]),level:u.getLevel()}),m=Z.debounce(m,yn,()=>{for(;h.length;)i.$connector.flushEnsureSubCache()})}),i.$connector.doSelection=r(function(u,_){if(L==="NONE"||!u.length||_&&i.hasAttribute("disabled"))return;L==="SINGLE"&&(i.selectedItems=[],E={});const p=u.filter(f=>f!==null);i.selectedItems=i.selectedItems.concat(p),u.forEach(f=>{f&&(E[f.key]=f,_&&(f.selected=!0,i.$server.select(f.key)));const v=!i.activeItem||!f||f.key!=i.activeItem.key;!_&&L==="SINGLE"&&v&&(i.activeItem=f)})}),i.$connector.doDeselection=r(function(u,_){if(L==="NONE"||!u.length||_&&i.hasAttribute("disabled"))return;const p=i.selectedItems.slice();for(;u.length;){const f=u.shift();for(let v=0;v<p.length;v++){const w=p[v];if(f&&f.key===w.key){p.splice(v,1);break}}f&&(delete E[f.key],_&&(delete f.selected,i.$server.deselect(f.key)))}i.selectedItems=p}),i.__activeItemChanged=r(function(u,_){L=="SINGLE"&&(u?E[u.key]||i.$connector.doSelection([u],!0):_&&E[_.key]&&(i.__deselectDisallowed?i.activeItem=_:i.$connector.doDeselection([_],!0)))}),i._createPropertyObserver("activeItem","__activeItemChanged",!0),i.__activeItemChangedDetails=r(function(u,_){i.__disallowDetailsOnClick||u==null&&_===void 0||(u&&!u.detailsOpened?i.$server.setDetailsVisible(u.key):i.$server.setDetailsVisible(null))}),i._createPropertyObserver("activeItem","__activeItemChangedDetails",!0),i.$connector._getPageIfSameLevel=r(function(u,_,p){let f=i._cache.getCacheAndIndex(_),v=f.cache.parentItem,w=v?i.getItemId(v):y;return u!==w?p:i._getPageForIndex(f.scaledIndex)}),i.$connector.getCacheByKey=r(function(u){let _=i._cache.getCacheAndIndexByKey(u);if(_)return _.cache}),i.$connector.flushEnsureSubCache=r(function(){let u=h.splice(0,1)[0],_=u.itemkey;const p=i._getVisibleRows();let f=p[0].index,v=p[p.length-1].index,w=v-f,I=Math.max(0,f-w),D=Math.min(v+w,i._effectiveSize);for(let k=I;k<=D;k++){let M=i._cache.getItemForIndex(k);if(i.getItemId(M)===_){if(i._isExpanded(M))return u.cache.doEnsureSubCacheForScaledIndex(u.scaledIndex),!0;break}}return!1}),i.$connector.flushParentRequests=r(function(){let u=d.splice(0,l);return u.length?(i.$server.setParentRequestedRanges(u),!0):!1}),i.$connector.beforeParentRequest=r(function(u,_,p){d.push({firstIndex:u,size:_,parentKey:p}),c=Z.debounce(c,ti.after(a),()=>{for(;d.length;)i.$connector.flushParentRequests()})}),i.$connector.fetchPage=r(function(u,_,p){const f=i._getVisibleRows();let v=f.length>0?f[0].index:0,w=f.length>0?f[f.length-1].index:0,I=w-v,D=Math.max(0,v-I),k=Math.min(w+I,i._effectiveSize),M=_,H=_;for(let _e=D;_e<=k;_e++)M=Math.min(M,i.$connector._getPageIfSameLevel(p,_e,M)),H=Math.max(H,i.$connector._getPageIfSameLevel(p,_e,H));let ne=Math.max(0,M),Oe=p!==y?H:Math.min(H,Math.floor(i.size/i.pageSize)),pe=C[p];if(pe||(pe=[-1,-1]),pe[0]!=ne||pe[1]!=Oe){pe=[ne,Oe],C[p]=pe;let _e=Oe-ne+1;u(ne*i.pageSize,_e*i.pageSize)}}),i.dataProvider=r(function(u,_){if(u.pageSize!=i.pageSize)throw"Invalid pageSize";let p=u.page;if(u.parentItem){let f=i.getItemId(u.parentItem);o[f]||(o[f]={});let v=i.$connector.getCacheByKey(f),w=v&&v.itemkeyCaches?v.itemkeyCaches[f]:void 0;n[f]&&n[f][p]&&w?(p=Math.min(p,Math.floor(n[f].size/i.pageSize)),h=[],_(n[f][p],n[f].size),$t(),h=[],i.requestContentUpdate()):(o[f][p]=_,i.$connector.fetchPage((I,D)=>i.$connector.beforeParentRequest(I,D,u.parentItem.key),p,f))}else p=Math.min(p,Math.floor(i.size/i.pageSize)),n[y]&&n[y][p]?_(n[y][p]):(s[p]=_,b=Z.debounce(b,ti.after(i._hasData?g:0),()=>{i.$connector.fetchPage((f,v)=>i.$server.setRequestedRange(f,v),p,y)}))});const B=r(function(u,_){_!==void 0&&!U&&i.$server.sortersChanged(i._sorters.map(function(p){return{path:p.path,direction:p.direction}}))});i.$connector.setSorterDirections=r(function(u){U=!0,setTimeout(r(()=>{try{const _=Array.from(i.querySelectorAll("vaadin-grid-sorter"));i._sorters.forEach(p=>{_.includes(p)||_.push(p)}),_.forEach(p=>{u.filter(f=>f.column===p.getAttribute("path"))[0]||(p.direction=null)}),i.multiSortPriority!=="append"&&(u=u.reverse()),u.forEach(({column:p,direction:f})=>{_.forEach(v=>{v.getAttribute("path")===p&&v.direction!==f&&(v.direction=f)})})}finally{U=!1}}))}),i._createPropertyObserver("_previousSorters",B),i._updateItem=r(function(u,_){We.prototype._updateItem.call(i,u,_),u.hidden||Array.from(u.children).forEach(p=>{p._content&&p._content.__templateInstance&&p._content.__templateInstance.children&&Array.from(p._content.__templateInstance.children).forEach(f=>{f._attachRenderedComponentIfAble&&f._attachRenderedComponentIfAble(),f.children&&Array.from(f.children).forEach(v=>{v._attachRenderedComponentIfAble&&v._attachRenderedComponentIfAble()})})}),L===S[1]&&(u.removeAttribute("aria-selected"),Array.from(u.children).forEach(p=>p.removeAttribute("aria-selected")))});const te=r(function(u,_){if(u==null||i.$server.updateExpandedState==null)return;let p=i.getItemId(u);if(i.$server.updateExpandedState(p,_),!_){delete n[p];let f=i.$connector.getCacheByKey(p);f&&f.itemkeyCaches&&f.itemkeyCaches[p]&&delete f.itemkeyCaches[p],f&&f.itemkeyCaches&&Object.keys(f.itemCaches).filter(v=>f.items[v].key===p).forEach(v=>delete f.itemCaches[v]),delete C[p]}});i.expandItem=r(function(u){te(u,!0),We.prototype.expandItem.call(i,u)}),i.collapseItem=r(function(u){te(u,!1),We.prototype.collapseItem.call(i,u)});const ue=function(u){if(!u||!Array.isArray(u))throw"Attempted to call itemsUpdated with an invalid value: "+JSON.stringify(u);let _=Array.from(i.detailsOpenedItems),p=!1;for(let f=0;f<u.length;++f){const v=u[f];!v||(v.detailsOpened?i._getItemIndexInArray(v,_)<0&&_.push(v):i._getItemIndexInArray(v,_)>=0&&_.splice(i._getItemIndexInArray(v,_),1),E[v.key]&&(E[v.key]=v,v.selected=!0,p=!0))}i.detailsOpenedItems=_,p&&(i.selectedItems=Object.keys(E).map(function(f){return E[f]}))},Ht=function(u,_){let p;if((_||y)!==y){p=n[_][u];let f=i.$connector.getCacheByKey(_);if(f&&f.itemkeyCaches){let v=f.itemkeyCaches[_];const w=o[_],I=w&&w[u];Vi(u,p,I,v)}}else p=n[y][u],Vi(u,p,s[u],i._cache);return p},Vi=function(u,_,p,f){if(!p){let v=u*i.pageSize,w=v+i.pageSize;if(_){if(f&&f.items)for(let I=v;I<w;I++)f.items[I]&&(f.items[I]=_[I-v])}else if(f&&f.items)for(let I=v;I<w;I++)delete f.items[I]}},$t=function(){i._cache.updateSize(),i._effectiveSize=i._cache.effectiveSize,i.__updateVisibleRows()},ot=function(u){if(!u||!i.$||i.$.items.childElementCount===0)return;const _=u.map(f=>f.key),p=i._getVisibleRows().filter(f=>f._item&&_.includes(f._item.key)).map(f=>f.index);p.length>0&&i.__updateVisibleRows(p[0],p[p.length-1])};i.$connector.set=r(function(u,_,p){if(u%i.pageSize!=0)throw"Got new data to index "+u+" which is not aligned with the page size of "+i.pageSize;let f=p||y;const v=u/i.pageSize,w=Math.ceil(_.length/i.pageSize);for(let I=0;I<w;I++){let D=v+I,k=_.slice(I*i.pageSize,(I+1)*i.pageSize);n[f]||(n[f]={}),n[f][D]=k,i.$connector.doSelection(k.filter(H=>H.selected)),i.$connector.doDeselection(k.filter(H=>!H.selected&&E[H.key]));const M=Ht(D,f);M&&(ue(M),ot(M))}});const qi=function(u){let _=u.parentUniqueKey||y;if(n[_]){for(let p in n[_])for(let f in n[_][p])if(i.getItemId(n[_][p][f])===i.getItemId(u))return{page:p,index:f,parentKey:_}}return null};i.$connector.updateHierarchicalData=r(function(u){let _=[];for(let f=0;f<u.length;f++){let v=qi(u[f]);if(v){n[v.parentKey][v.page][v.index]=u[f];let w=v.parentKey+":"+v.page;_[w]||(_[w]={parentKey:v.parentKey,page:v.page})}}let p=Object.keys(_);for(let f=0;f<p.length;f++){let v=_[p[f]];const w=Ht(v.page,v.parentKey);w&&(ue(w),ot(w))}}),i.$connector.updateFlatData=r(function(u){for(let _=0;_<u.length;_++){let p=qi(u[_]);if(p){n[p.parentKey][p.page][p.index]=u[_];const f=parseInt(p.page)*i.pageSize+parseInt(p.index);i._cache.items[f]&&(i._cache.items[f]=u[_])}}ue(u),ot(u)}),i.$connector.clearExpanded=r(function(){i.expandedItems=[],h=[],d=[]}),i.$connector.clear=r(function(u,_,p){let f=p||y;if(!n[f]||Object.keys(n[f]).length===0)return;if(u%i.pageSize!=0)throw"Got cleared data for index "+u+" which is not aligned with the page size of "+i.pageSize;let v=Math.floor(u/i.pageSize),w=Math.ceil(_/i.pageSize);for(let k=0;k<w;k++){let M=v+k,H=n[f][M];i.$connector.doDeselection(H.filter(Oe=>E[Oe.key])),delete n[f][M];const ne=Ht(M,p);ne&&ue(ne),ot(H)}let I=i._cache;if(p){const k=i._cache.getCacheAndIndexByKey(f);I=k.cache.itemCaches[k.scaledIndex]}const D=u+w*i.pageSize;for(let k=u;k<D;k++){delete I.items[k];const M=I.itemCaches[k];delete I.itemCaches[k];const H=M&&M.parentItem.key;H&&delete I.itemkeyCaches[H]}i._cache.updateSize()}),i.$connector.reset=r(function(){i.size=0,nt(n),nt(i._cache.items),nt(C),m&&m.cancel(),c&&c.cancel(),b&&b.cancel(),m=void 0,c=void 0,h=[],d=[],$t()});const nt=u=>Object.keys(u).forEach(_=>delete u[_]);i.$connector.updateSize=u=>i.size=u,i.$connector.updateUniqueItemIdPath=u=>i.itemIdPath=u,i.$connector.expandItems=r(function(u){let _=Array.from(i.expandedItems);u.filter(p=>!i._isExpanded(p)).forEach(p=>_.push(p)),i.expandedItems=_}),i.$connector.collapseItems=r(function(u){let _=Array.from(i.expandedItems);u.forEach(p=>{let f=i._getItemIndexInArray(p,_);f>=0&&_.splice(f,1)}),i.expandedItems=_,u.forEach(p=>i.$connector.removeFromQueue(p))}),i.$connector.removeFromQueue=r(function(u){let _=i.getItemId(u);delete o[_],i.$connector.removeFromArray(h,p=>p.itemkey===_),i.$connector.removeFromArray(d,p=>p.parentKey===_)}),i.$connector.removeFromArray=r(function(u,_){if(u.length)for(let p=u.length-1;p--;)_(u[p])&&u.splice(p,1)}),i.$connector.confirmParent=r(function(u,_,p){n[_]||(n[_]={}),n[_].size=p,p===0&&(n[_][0]=[]);let f=Object.getOwnPropertyNames(o[_]||{});for(let v=0;v<f.length;v++){let w=f[v],I=C[_]||[0,0];const D=o[_][w];if(n[_]&&n[_][w]||w<I[0]||w>I[1]){delete o[_][w];let k=n[_][w]||new Array(p);D(k,p)}else D&&p===0&&(delete o[_][w],D([],p))}i.$server.confirmParentUpdate(u,_),i.loading||i.__updateVisibleRows()}),i.$connector.confirm=r(function(u){let _=Object.getOwnPropertyNames(s);for(let p=0;p<_.length;p++){let f=_[p],v=C[y]||[0,0];const w=i.size?Math.ceil(i.size/i.pageSize)-1:0,I=Math.min(v[1],w),D=s[f];n[y]&&n[y][f]||f<v[0]||+f>I?(delete s[f],n[y][f]?D(n[y][f]):(D(new Array(i.pageSize)),i.requestContentUpdate()),i._debounceIncreasePool&&i._debounceIncreasePool.flush()):D&&i.size===0&&(delete s[f],D([]))}i.$server.confirmUpdate(u)}),i.$connector.ensureHierarchy=r(function(){for(let u in n)u!==y&&delete n[u];nt(C),i._cache.itemCaches={},i._cache.itemkeyCaches={},$t()}),i.$connector.setSelectionMode=r(function(u){if((typeof u=="string"||u instanceof String)&&S.indexOf(u)>=0)L=u,E={},i.$connector.updateMultiSelectable();else throw"Attempted to set an invalid selection mode"}),i.$connector.updateMultiSelectable=r(function(){!i.$||(L===S[0]?i.$.table.setAttribute("aria-multiselectable",!1):L===S[1]?i.$.table.removeAttribute("aria-multiselectable"):i.$.table.setAttribute("aria-multiselectable",!0))}),i._createPropertyObserver("isAttached",()=>i.$connector.updateMultiSelectable()),i.$connector.setVerticalScrollingEnabled=r(function(u){Mo(i.$.table,u)});const Mo=function(u,_){u.style.overflowY=_?"":"hidden",u.removeEventListener("wheel",u.__wheelListener),!_&&u.addEventListener("wheel",u.__wheelListener=r(p=>{p.deltaX?Object.defineProperty(p,"deltaY",{value:0}):p.stopImmediatePropagation()}))};i.addEventListener("vaadin-context-menu-before-open",r(function(u){const{key:_,columnId:p}=u.detail;i.$server.updateContextMenuTargetItem(_,p)})),i.getContextMenuBeforeOpenDetail=r(function(u){const _=u.detail.sourceEvent||u,p=i.getEventContext(_),f=p.item&&p.item.key||"",v=p.column&&p.column.id||"";return{key:f,columnId:v}}),i.addEventListener("click",r(u=>Ui(u,"item-click"))),i.addEventListener("dblclick",r(u=>Ui(u,"item-double-click"))),i.addEventListener("column-resize",r(u=>{i._getColumnsInOrder().filter(p=>!p.hidden).forEach(p=>{p.dispatchEvent(new CustomEvent("column-drag-resize"))}),i.dispatchEvent(new CustomEvent("column-drag-resize",{detail:{resizedColumnKey:u.detail.resizedColumn._flowId}}))})),i.addEventListener("column-reorder",r(u=>{const _=i._columnTree.slice(0).pop().filter(p=>p._flowId).sort((p,f)=>p._order-f._order).map(p=>p._flowId);i.dispatchEvent(new CustomEvent("column-reorder-all-columns",{detail:{columns:_}}))})),i.addEventListener("cell-focus",r(u=>{const _=i.getEventContext(u);["header","body","footer"].indexOf(_.section)!==-1&&i.dispatchEvent(new CustomEvent("grid-cell-focus",{detail:{itemKey:_.item?_.item.key:null,internalColumnId:_.column?_.column._flowId:null,section:_.section}}))}));function Ui(u,_){if(u.defaultPrevented)return;const p=u.target,f=i.getEventContext(u),v=f.section;ro(p)||p instanceof HTMLLabelElement||f.item&&v!=="details"&&(u.itemKey=f.item.key,f.column&&(u.internalColumnId=f.column._flowId),i.dispatchEvent(new CustomEvent(_,{detail:u})))}i.cellClassNameGenerator=r(function(u,_){const p=_.item.style;if(!!p)return(p.row||"")+" "+(u&&p[u._flowId]||"")}),i.dropFilter=r(u=>!u.item.dropDisabled),i.dragFilter=r(u=>!u.item.dragDisabled),i.addEventListener("grid-dragstart",r(u=>{i._isSelected(u.detail.draggedItems[0])?(i.__selectionDragData?Object.keys(i.__selectionDragData).forEach(_=>{u.detail.setDragData(_,i.__selectionDragData[_])}):(i.__dragDataTypes||[]).forEach(_=>{u.detail.setDragData(_,u.detail.draggedItems.map(p=>p.dragData[_]).join(`
`))}),i.__selectionDraggedItemsCount>1&&u.detail.setDraggedItemsCount(i.__selectionDraggedItemsCount)):(i.__dragDataTypes||[]).forEach(_=>{u.detail.setDragData(_,u.detail.draggedItems[0].dragData[_])})}))})(e)}})();const Tt=window;Tt.Vaadin=Tt.Vaadin||{};Tt.Vaadin.setLitRenderer=(r,t,e,i,s,o)=>{const n=Function(`
    "use strict";

    const [render, html, returnChannel] = arguments;

    return (root, {item, index}, itemKey) => {
      ${s.map(l=>`
          const ${l} = (...args) => {
            if (itemKey !== undefined) {
              returnChannel('${l}', itemKey, args[0] instanceof Event ? [] : [...args]);
            }
          }`).join("")}

      render(html\`${e}\`, root)
    }
  `)(or,Uo,i),a=(l,d,{index:c,item:h})=>{l.__litRenderer!==a&&(l.innerHTML="",delete l._$litPart$,l.__litRenderer=a);const m={};for(const g in h)g.startsWith(o)&&(m[g.replace(o,"")]=h[g]);n(l,{index:c,item:m},h.key)};a.__rendererId=o,r[t]=a};Tt.Vaadin.unsetLitRenderer=(r,t,e)=>{var i;((i=r[t])==null?void 0:i.__rendererId)===e&&(r[t]=void 0)};const No=document.createElement("template");No.innerHTML=`<style>
  ${sr.cssText}
  ${rr.cssText}
</style>`;document.head.appendChild(No.content);{class r extends ci{static get is(){return"vaadin-grid-flow-selection-column"}static get properties(){return{autoWidth:{type:Boolean,value:!0},width:{type:String,value:"56px"},flexGrow:{type:Number,value:0},selectAll:{type:Boolean,value:!1,notify:!0},indeterminate:{type:Boolean,value:!1,notify:!0},selectAllHidden:Boolean}}constructor(){super(),this._boundOnSelectEvent=this._onSelectEvent.bind(this),this._boundOnDeselectEvent=this._onDeselectEvent.bind(this)}static get observers(){return["_onHeaderRendererOrBindingChanged(_headerRenderer, _headerCell, path, header, selectAll, indeterminate, selectAllHidden)"]}connectedCallback(){super.connectedCallback(),this._grid&&(this._grid.addEventListener("select",this._boundOnSelectEvent),this._grid.addEventListener("deselect",this._boundOnDeselectEvent))}disconnectedCallback(){super.disconnectedCallback(),this._grid&&(this._grid.removeEventListener("select",this._boundOnSelectEvent),this._grid.removeEventListener("deselect",this._boundOnDeselectEvent))}_defaultHeaderRenderer(e,i){let s=e.firstElementChild;s||(s=document.createElement("vaadin-checkbox"),s.id="selectAllCheckbox",s.setAttribute("aria-label","Select All"),s.classList.add("vaadin-grid-select-all-checkbox"),s.addEventListener("click",this._onSelectAllClick.bind(this)),e.appendChild(s));const o=this.selectAll;s.hidden=this.selectAllHidden,s.checked=o,s.indeterminate=this.indeterminate}_defaultRenderer(e,i,{item:s,selected:o}){let n=e.firstElementChild;n||(n=document.createElement("vaadin-checkbox"),n.setAttribute("aria-label","Select Row"),n.addEventListener("click",this._onSelectClick.bind(this)),e.appendChild(n)),n.__item=s,n.checked=o}_onSelectClick(e){e.currentTarget.checked?this._grid.$connector.doDeselection([e.currentTarget.__item],!0):this._grid.$connector.doSelection([e.currentTarget.__item],!0)}_onSelectAllClick(e){if(e.preventDefault(),this._grid.hasAttribute("disabled")){e.currentTarget.checked=!e.currentTarget.checked;return}this.selectAll?this.$server.deselectAll():this.$server.selectAll()}_onSelectEvent(e){}_onDeselectEvent(e){e.detail.userOriginated&&(this.selectAll=!1)}}customElements.define(r.is,r),Vaadin.GridFlowSelectionColumnElement=r}const oc=function(r,t=!1){const e=document.createElement("template");e.innerHTML=r,document.head[t?"insertBefore":"appendChild"](e.content,document.head.firstChild)};let rt;const tr=document.getElementsByTagName("script");for(let r=0;r<tr.length;r++){const t=tr[r];if(t.getAttribute("type")=="module"&&t.getAttribute("data-app-id")&&!t["vaadin-bundle"]){rt=t;break}}if(!rt)throw new Error("Could not find the bundle script to identify the application id");rt["vaadin-bundle"]=!0;window.Vaadin.Flow.fallbacks||(window.Vaadin.Flow.fallbacks={});const Do=window.Vaadin.Flow.fallbacks;Do[rt.getAttribute("data-app-id")]={};Do[rt.getAttribute("data-app-id")].loadFallback=function(){return Wo(()=>import("./generated-flow-imports-fallback.a39be771.js"),["./generated-flow-imports-fallback.a39be771.js","./indexhtml.cd3dada5.js"],import.meta.url)};const hh=Object.freeze(Object.defineProperty({__proto__:null,addCssBlock:oc},Symbol.toStringTag,{value:"Module"}));export{ud as $,yn as A,Cn as B,Gr as C,Z as D,ba as E,$ as F,V as G,Y as H,Lt as I,Ad as J,kt as K,Li as L,Hi as M,it as N,Uc as O,En as P,$i as Q,_i as R,Bi as S,Pe as T,j as U,R as V,Ie as W,ho as X,eo as Y,yo as Z,nd as _,dr as a,Ot as a0,gs as a1,Ze as a2,Nt as a3,go as a4,st as a5,Te as a6,_l as a7,K as a8,Td as a9,re as aA,de as aB,Is as aC,ce as aD,bd as aE,jd as aF,jr as aG,al as aH,Si as aI,dl as aJ,xt as aK,Ul as aL,Wr as aM,gd as aN,vd as aO,xd as aP,Ed as aQ,id as aR,so as aS,Qs as aT,hh as aU,Ma as aa,he as ab,wo as ac,Xe as ad,yd as ae,xo as af,Ni as ag,Di as ah,Eo as ai,Ss as aj,zs as ak,Os as al,Cd as am,Ao as an,ro as ao,It as ap,Xd as aq,ch as ar,bo as as,Pd as at,Ee as au,To as av,Mi as aw,wt as ax,Fs as ay,zi as az,ns as b,en as c,N as d,Je as e,Gc as f,q as g,Ai as h,ic as i,O as j,sn as k,lc as l,wi as m,cc as n,gt as o,ac as p,Jd as q,hc as r,Ge as s,ti as t,tc as u,el as v,P as w,dc as x,z as y,lr as z};
