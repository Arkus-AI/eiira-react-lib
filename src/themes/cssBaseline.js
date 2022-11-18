import Manrope from "./fonts/Manrope-Regular.woff2";
import ManropeBold from "./fonts/Manrope-Bold.woff2";
import ManropeExtraLight from "./fonts/Manrope-ExtraLight.woff2";

const MuiCssBaseline = {
    styleOverrides: `
        @font-face {
            font-family: 'Manrope';
            src: local('Manrope'), local('Manrope-ExtraLight'), url(${ManropeExtraLight}) format('woff2');
            font-weight: 200;
            font-style: normal;
            font-display: swap;
        }
        @font-face {
            font-family: 'Manrope';
            src: local('Manrope'), local('Manrope-Regular'), url(${Manrope}) format('woff2');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
        }
        @font-face {
            font-family: 'Manrope';
            src: local('Manrope'), local('Manrope-Bold'), url(${ManropeBold}) format('woff2');
            font-weight: bold;
            font-style: normal;
            font-display: swap;
        }
      `,
}

export default MuiCssBaseline;
