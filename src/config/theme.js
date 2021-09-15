// responsiness presets
const size = {
    mobileS: 320,
    mobileM: 375,
    mobileL: 425,
    mobileXL: 700,
    tablet: 768,
    laptop: 1024,
    laptopL: 1440,
    desktopM: 1950,
    desktop: 2560,
  };
  
  const device = {
    mobileS: `(max-width: ${size.mobileS}px)`,
    mobileM: `(max-width: ${size.mobileM}px)`,
    mobileL: `(max-width: ${size.mobileL}px)`,
    mobileXL: `(max-width: ${size.mobileXL}px)`,
    tablet: `(max-width: ${size.tablet}px)`,
    laptop: `(max-width: ${size.laptop}px)`,
    laptopL: `(max-width: ${size.laptopL}px)`,
    desktopM: `(max-width: ${size.desktopM}px)`,
    desktop: `(max-width: ${size.desktop}px)`,
    desktopL: `(max-width: ${size.desktop}px)`,
    mobileSmin: `(min-width: ${size.mobileS}px)`,
    mobileMmin: `(min-width: ${size.mobileM}px)`,
    mobileLmin: `(min-width: ${size.mobileL}px)`,
    mobileXLmin: `(min-width: ${size.mobileXL}px)`,
    tabletmin: `(min-width: ${size.tablet}px)`,
    laptopmin: `(min-width: ${size.laptop}px)`,
    laptopLmin: `(min-width: ${size.laptopL}px)`,
    desktopmin: `(min-width: ${size.desktop}px)`,
    desktopLmin: `(min-width: ${size.desktop}px)`,
  };
  
  const MIN_BASE_FS = (16 / 1440) * 100;
  
  const MAX_BASE_FS = (56 / 1440) * 100;
  
  const rem2vw = (size, width = 1440) => {
    const calculatedFS = ((size * 16) / width) * 100;
    return Math.min(MAX_BASE_FS, Math.max(calculatedFS, MIN_BASE_FS));
  };
  
  const resevices = {
    xsmall: 'only all and (max-width:400px)',
    smallmobile: 'only all and (max-width: 425px)',
    extraSmall: 'only all and (max-width: 768px)',
    small: 'only all and (max-width: 770px)',
    smallAndLandscape:
      'only screen and (max-width: 770px) and (orientation: landscape)',
    medium: 'only all and (min-width: 771px) and (max-width: 991px)',
    mediumAndLandscape: `only screen and (min-width: 771px) and 
      (max-width: 991px) and (orientation: landscape)`,
    mediumAndAbove: 'only all and (min-width: 770px)',
    smallAndMedium: 'only all and (max-width: 991px)',
    semiLarge: 'only all and (min-width: 992px) and (max-width: 1200px)',
    semiLargeAndLarge: 'only all and (min-width: 1201px) and (max-width: 1300px)',
    large: 'only all and (min-width: 1201px) and (max-width: 1600px)',
    xLarge: 'only all and (min-width: 1601px)',
    xxLarge: 'only all and (min-width: 1802px)',
    desktop: 'only all and (min-width:992px)',
    ipadPro: `only screen and (min-device-width: 1024px) 
                and (max-device-width: 1366px) 
                and (-webkit-min-device-pixel-ratio: 2)  
                and (orientation: portrait)`,
    ipad: `only screen and (min-device-width: 760px) 
                and (max-device-width: 790px) 
                and (-webkit-min-device-pixel-ratio: 2)  
                and (orientation: portrait)`,
  };
  
  // eslint-disable-next-line import/no-anonymous-default-export
  export default {
    fonts: {
      primary: 'Montserrat',
      secondary: 'Righteous',
    },
    colors: {
      primary: '#00adb5',
      primaryLight: '#00dee8',
      primaryDark: '#007c82',
      secondary: '#eeeeee',
      secondaryLight: '#ffffff',
      secondaryDark:'#d4d4d4',
      themeBlack: '#21232b',
      error: '#ec1e50',
    },
  
    // font-size
    texts: {
      bigHeading: '3.5rem', // 56px
      headingText: '2.5rem', // 40px
      headingTextMedium: '2.5rem', // 40px
      bigSubHeadingText: '2.5rem', // 40px
      subHeadingText: '2rem', // 32px;
      subTitle: '1.5rem', // 24px
      normalText: '1.125rem', // 18px
      formLabel: '1rem', // 16px
      smallText: '0.875rem', // 14px
      extraSmallText: '0.8125rem', // 13px
      font56px: `${rem2vw(3.5)}vw`,
      font24px: '1.5rem',
      font28px: '1.75rem',
      font20px: '1.25rem',
      font18px: '1.125rem',
      font16px: '1rem',
      font12px: '0.75rem',
    },
    weight: {
      bold: 'bold',
      medium: '500',
      formLabel: '500',
      formInput: '500',
    },
  
    // Flex
    flexStyles: {
      flex: 'flex',
      row: 'row',
      center: 'center',
      spaceBtw: 'space-between',
      column: 'column',
      baseline: 'baseline',
    },
  
    position: {
      positionRelative: 'relative',
      positionAbsolute: 'absolute',
    },
  
    bold: 'bold',
    cursorPointer: 'pointer',
  
    // Max width for different screens.
    maxWidth: () => {
      if (window.innerWidth <= size.mobileL) {
        return 'max-width: 100%;';
      } else if (
        window.innerWidth > size.mobileL &&
        window.innerWidth <= size.tablet
      ) {
        return 'max-width: 40rem;';
      } else if (
        window.innerWidth > size.tablet &&
        window.innerWidth <= size.laptop
      ) {
        return 'max-width: 57rem;';
      } else if (window.innerWidth > size.laptopL) {
        return 'max-width: 100rem;';
      } else {
        return 'max-width: 100rem;';
      }
    },
  
    rightSidePosition: () => {
      let right = '2rem';
      if (window.innerWidth <= 1440) {
        right = '1rem';
      }
      return right;
    },
    viewportHeight: () => {
      let height = '100vh';
      if (window.innerWidth > 1680) {
        height = '55rem';
      }
      return height;
    },
    mediaBreakpoints: resevices,
  
    // responsiveness config
    // added custom feature support
    writeMediaQueries: breakpointMap => {
      const mediaPrefix = '@media only all and ';
      const mediaRules = Object.keys(breakpointMap).reduce((rule, type) => {
        rule =
          rule +
          mediaPrefix +
          (type === 'custom' ? '' : device[type]) +
          breakpointMap[type] +
          '\n';
        return rule;
      }, '');
      // console.log(mediaRules);
      return mediaRules;
    },
  };
  