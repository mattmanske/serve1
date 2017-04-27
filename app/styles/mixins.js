//-----------  Imports  -----------//

import media from 'styles/media'

//-----------  Mixins  -----------//

const antiAliased = (smooth = true) => (`
  -webkit-font-smoothing: ${smooth ? 'antialiased' : 'subpixel-antialiased'};
  -moz-osx-font-smoothing: ${smooth ? 'grayscale' : 'auto'};
`)

const fullBgImg = (image) => (`
  background-position : center center;
  background-repeat   : no-repeat;
  background-size     : cover;
`)

const verticalAlign = (position = 'absolute') => (`
  position  : ${position};
  top       : 50%;
  transform : translateY(-50%);
`)

const horizontalAlign = (position = 'absolute') => (`
  left      : 50%;
  position  : ${position};
  transform : translateX(-50%);
`)

const centerAlign = (position = 'absolute') => (`
  left      : 50%;
  position  : ${position};
  top       : 50%;
  transform : translate(-50%, -50%);
`)

const ellipsis = () => (`
  overflow      : hidden;
  text-overflow : ellipsis;
  white-space   : nowrap;
`)

const flexLayout = () => (`
  align-content   : stretch;
  align-items     : center;
  display         : flex;
  flex-direction  : row;
  flex-wrap       : nowrap;
  justify-content : space-between;

  > * {
    flex: 0 1 auto;
  }
`)

const sectionBreak = (left = '50%') => (`
  position: relative;

  &::after {
    border-right : 1px solid rgba(0, 0, 0, 0.05);
    content      : '';
    display      : block;
    height       : 100%;
    left         : ${left};
    position     : absolute;
    top          : 0;
    width        : 0;

    ${media.small`
      display: none;
    `}
  }
`)

//-----------  Exports  -----------//

export default {
  antiAliased,
  fullBgImg,
  verticalAlign,
  horizontalAlign,
  centerAlign,
  ellipsis,
  flexLayout,
  sectionBreak
}
