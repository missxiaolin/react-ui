export const iconStyles = `
.l-icon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.l-icon > * {
  line-height: 1;
}

.l-icon svg {
  display: inline-block;
}

.l-icon::before {
  display: none;
}

.l-icon .l-icon-icon {
  display: block;
}

.l-icon[tabindex] {
  cursor: pointer;
}

.l-icon-spin::before,
.l-icon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`
