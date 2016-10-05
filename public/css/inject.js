import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "height": "auto",
        "color": "#fff",
        "background": "#ddd",
        "fontFamily": "'Georgia', sans-serif",
        "fontSize": 100
    },
    "html": {
        "height": "auto",
        "color": "#fff",
        "background": "#ddd",
        "fontFamily": "'Georgia', sans-serif",
        "fontSize": 100
    },
    "deleteThisPadding": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "baseFooter": {
        "minHeight": 700,
        "paddingTop": 25
    },
    "leftSideFooter": {
        "color": "#fff",
        "background": "#4a4a4a"
    },
    "rightSideFooter": {
        "color": "#fff",
        "background": "#3d0c0c"
    },
    "marginTop50": {
        "marginTop": 50
    },
    "littleYellowLine": {
        "width": "100%",
        "height": 1,
        "background": "#ac7f14"
    },
    "littleWhiteLine": {
        "width": "100%",
        "height": 1,
        "background": "#fff"
    },
    "footerList": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "fontFamily": "Arial, monospace"
    },
    "footerList li": {
        "listStyle": "none",
        "paddingTop": 25
    },
    "footerListWithWhiteLine": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "fontFamily": "Arial, monospace"
    },
    "footerListWithWhiteLine li": {
        "listStyle": "none"
    },
    "floatRight": {
        "float": "right"
    },
    "h6": {
        "marginTop": 10,
        "fontSize": 1.1
    },
    "companyInfo": {
        "marginTop": 50
    },
    "fontFamilyChange": {
        "fontFamily": "Arial, monospace"
    },
    "leSpacer": {
        "paddingTop": 40
    },
    "aLink:hover": {
        "color": "#fff222",
        "backgroundColor": ": #00A3E0"
    },
    "aLink:link": {
        "color": "#fff"
    },
    "aLink:visited": {
        "color": "#ddd"
    },
    "aLink:active": {
        "color": "#bbb"
    },
    "a:not(md-button):hover": {
        "color": "#00A3E0",
        "textDecoration": "none"
    },
    "Contact GitHub API Training Shop Blog Aboutbody": {
        "height": "auto",
        "color": "#fff",
        "background": "#ddd",
        "fontFamily": "'Georgia', sans-serif",
        "fontSize": 100
    },
    "Contact GitHub API Training Shop Blog AboutHUGE/public/css/injectcssHUGE/public/css/injectcssHUGE/public/css/injectcssHUGE/public/css/injectcssHUGE/public/css/injectcssHUGE/public/css/injectcssHUGE/public/css/injectcssHUGE/public/css/injectcssHUGE/public/css/injectcssHUGE/public/css/injectcssHUGE/public/css/injectcssbody": {
        "height": "auto",
        "color": "#fff",
        "background": "#ddd",
        "fontFamily": "'Georgia', sans-serif",
        "fontSize": 100
    },
    "vbody": {
        "height": "auto",
        "color": "#fff",
        "background": "#ddd",
        "fontFamily": "'Georgia', sans-serif",
        "fontSize": 100
    }
});