(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters})),__webpack_require__.d(preview_namespaceObject,"withMuiTheme",(function(){return preview_withMuiTheme})),__webpack_require__.d(preview_namespaceObject,"decorators",(function(){return decorators})),__webpack_require__.d(preview_namespaceObject,"globalTypes",(function(){return globalTypes}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),ThemeProvider=__webpack_require__("./node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js"),CssBaseline=__webpack_require__("./node_modules/@mui/material/esm/CssBaseline/CssBaseline.js"),react=__webpack_require__("./node_modules/react/index.js"),createTheme=__webpack_require__("./node_modules/@mui/material/esm/styles/createTheme.js"),pink=__webpack_require__("./node_modules/@mui/material/esm/colors/pink.js"),cyan=__webpack_require__("./node_modules/@mui/material/esm/colors/cyan.js"),blueGrey=__webpack_require__("./node_modules/@mui/material/esm/colors/blueGrey.js"),darkTheme=Object(createTheme.a)({palette:{mode:"dark",primary:{main:pink.a.A400},secondary:{main:cyan.a.A400},info:{main:"#EBF1FB"},error:{main:"#CA2B2B"},text:{primary:"#233750"},hover:{main:"#0046C3"},neutral:{main:"#F9EEE5",field:"rgba(35, 55, 73, 0.55)"},background:{default:blueGrey.a[800],paper:blueGrey.a[700]}}}),lightTheme=Object(createTheme.a)({palette:{mode:"light",primary:{main:"#0070F7"},secondary:{main:"#F9EEE5"},info:{main:"#EBF1FB"},error:{main:"#CA2B2B"},text:{primary:"#233750"},hover:{main:"#0046C3"},neutral:{main:"#F9EEE5",field:"rgba(35, 55, 73, 0.55)"}},components:{MuiButtonBase:{styleOverrides:{root:{"&:hover":{backgroundColor:"#EBF1FB"}}}}}}),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},layout:"centered"},THEMES={light:lightTheme,dark:darkTheme},preview_withMuiTheme=function withMuiTheme(Story,context){var themeKey=context.globals.theme,theme=Object(react.useMemo)((function(){return THEMES[themeKey]||THEMES.light}),[themeKey]);return Object(jsx_runtime.jsxs)(ThemeProvider.a,{theme:theme,children:[Object(jsx_runtime.jsx)(CssBaseline.a,{}),Object(jsx_runtime.jsx)(Story,{})]})};preview_withMuiTheme.displayName="withMuiTheme";var decorators=[preview_withMuiTheme],globalTypes={theme:{name:"Theme",title:"Theme",description:"Theme for your components",defaultValue:"light",toolbar:{icon:"paintbrush",dynamicTitle:!0,items:[{value:"light",left:"☀️",title:"Light mode"},{value:"dark",left:"🌙",title:"Dark mode"}]}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}preview_withMuiTheme.__docgenInfo={description:"",methods:[],displayName:"withMuiTheme"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/preview.js"]={name:"withMuiTheme",docgenInfo:preview_withMuiTheme.__docgenInfo,path:".storybook/preview.js"}),Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return Object(ClientApi.d)(value);case"argTypes":return Object(ClientApi.b)(value);case"decorators":return value.forEach((function(decorator){return Object(ClientApi.f)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.g)(loader,!1)}));case"parameters":return Object(ClientApi.h)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.e)(enhancer)}));case"render":return Object(ClientApi.i)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.h)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.tsx)$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.tsx)$":function(module,exports,__webpack_require__){var map={"./components/Icon/Icon.stories.tsx":"./src/components/Icon/Icon.stories.tsx","./components/IconWithTooltip/IconWithTooltip.stories.tsx":"./src/components/IconWithTooltip/IconWithTooltip.stories.tsx","./components/TextInput/TextInput.stories.tsx":"./src/components/TextInput/TextInput.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.tsx)$"},"./src/components/Icon/Icon.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"PrimaryHelp",(function(){return PrimaryHelp})),__webpack_require__.d(__webpack_exports__,"SecondaryExclamationTriangle",(function(){return SecondaryExclamationTriangle})),__webpack_require__.d(__webpack_exports__,"SecondaryMale",(function(){return SecondaryMale}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/react/index.js");var _Icon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Icon/Icon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"Components/Icon",component:_Icon__WEBPACK_IMPORTED_MODULE_3__.a};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_3__.a,Object.assign({},args))};Template.displayName="Template";var PrimaryHelp=Template.bind({});PrimaryHelp.args={iconType:"help",color:"primary"};var SecondaryExclamationTriangle=Template.bind({});SecondaryExclamationTriangle.args={iconType:"exclamation-triangle",color:"secondary"};var SecondaryMale=Template.bind({});SecondaryMale.args={iconType:"male",color:"secondary"},PrimaryHelp.parameters=Object.assign({storySource:{source:"(args) => <Icon {...args} />"}},PrimaryHelp.parameters),SecondaryExclamationTriangle.parameters=Object.assign({storySource:{source:"(args) => <Icon {...args} />"}},SecondaryExclamationTriangle.parameters),SecondaryMale.parameters=Object.assign({storySource:{source:"(args) => <Icon {...args} />"}},SecondaryMale.parameters)},"./src/components/Icon/Icon.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Icon}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js");var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@fortawesome/react-fontawesome/index.es.js"),_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@fortawesome/free-solid-svg-icons/index.mjs"),_mui_material__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/material/esm/SvgIcon/SvgIcon.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["iconType","color"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var ICONS={help:_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.a,"exclamation-triangle":_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.e,male:_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.c,female:_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.b,"waste-basket":_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.d};function Icon(_ref){var iconType=_ref.iconType,color=_ref.color,props=_objectWithoutProperties(_ref,_excluded);return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.a,Object.assign({color:color},props,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.a,{icon:ICONS[iconType]})}))}Icon.displayName="Icon";try{Icon.displayName="Icon",Icon.__docgenInfo={description:"",displayName:"Icon",props:{iconType:{defaultValue:null,description:"Icon to display",name:"iconType",required:!0,type:{name:"enum",value:[{value:'"help"'},{value:'"exclamation-triangle"'},{value:'"male"'},{value:'"female"'},{value:'"waste-basket"'}]}},color:{defaultValue:null,description:"Color of icon",name:"color",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"primary"'},{value:'"secondary"'},{value:'"inherit"'}]}},children:{defaultValue:null,description:"Node passed into the SVG element.",name:"children",required:!1,type:{name:"ReactNode"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"(Partial<SvgIconClasses> & Partial<ClassNameMap<never>>)"}},fontSize:{defaultValue:{value:"'medium'"},description:"The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.",name:"fontSize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"inherit"'},{value:'"large"'},{value:'"medium"'}]}},htmlColor:{defaultValue:null,description:"Applies a color attribute to the SVG element.",name:"htmlColor",required:!1,type:{name:"string"}},inheritViewBox:{defaultValue:{value:"false"},description:"If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`\nprop will be ignored.\nUseful when you want to reference a custom `component` and have `SvgIcon` pass that\n`component`'s viewBox to the root node.",name:"inheritViewBox",required:!1,type:{name:"boolean"}},shapeRendering:{defaultValue:null,description:"The shape-rendering attribute. The behavior of the different options is described on the\n[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).\nIf you are having issues with blurry icons you should investigate this prop.",name:"shapeRendering",required:!1,type:{name:"string"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},titleAccess:{defaultValue:null,description:"Provides a human-readable title for the element that contains it.\nhttps://www.w3.org/TR/SVG-access/#Equivalent",name:"titleAccess",required:!1,type:{name:"string"}},viewBox:{defaultValue:{value:"'0 0 24 24'"},description:'Allows you to redefine what the coordinates without units mean inside an SVG element.\nFor example, if the SVG element is 500 (width) by 200 (height),\nand you pass viewBox="0 0 50 20",\nthis means that the coordinates inside the SVG will go from the top left corner (0,0)\nto bottom right (50,20) and each unit will be worth 10px.',name:"viewBox",required:!1,type:{name:"string"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: SVGSVGElement | null) => void) | RefObject<SVGSVGElement> | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Icon/Icon.tsx#Icon"]={docgenInfo:Icon.__docgenInfo,name:"Icon",path:"src/components/Icon/Icon.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/IconWithTooltip/IconWithTooltip.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/react/index.js");var _IconWithTooltip__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/IconWithTooltip/IconWithTooltip.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"Components/IconWithTooltip",component:_IconWithTooltip__WEBPACK_IMPORTED_MODULE_3__.a};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_IconWithTooltip__WEBPACK_IMPORTED_MODULE_3__.a,Object.assign({},args))};Template.displayName="Template";var Default=Template.bind({});Default.args={tooltipType:"help",tooltipText:"This is a tooltip"},Default.parameters=Object.assign({storySource:{source:"(args) => <IconWithTooltip {...args} />"}},Default.parameters)},"./src/components/IconWithTooltip/IconWithTooltip.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return IconWithTooltip}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js");var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/esm/styles/styled.js"),_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/material/esm/Tooltip/Tooltip.js"),_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/material/esm/Tooltip/tooltipClasses.js"),_Icon_Icon__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/components/Icon/Icon.tsx"),_mui_material__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@mui/material/esm/Typography/Typography.js"),_mui_material__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@mui/material/esm/IconButton/IconButton.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["className"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var BootstrapTooltip=Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__.a)((function(_ref){var className=_ref.className,props=_objectWithoutProperties(_ref,_excluded);return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_6__.a,Object.assign({},props,{arrow:!0,classes:{popper:className}}))}))((function(_ref2){var _ref3,theme=_ref2.theme;return(_ref3={})["& ."+_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_7__.a.arrow]={color:theme.palette.info.main},_ref3["& ."+_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_7__.a.tooltip]={backgroundColor:theme.palette.info.main,color:theme.palette.text.primary,padding:"12px 16px"},_ref3}));function IconWithTooltip(_ref4){var _ref4$tooltipType=_ref4.tooltipType,tooltipType=void 0===_ref4$tooltipType?"help":_ref4$tooltipType,tooltipText=_ref4.tooltipText;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(BootstrapTooltip,{title:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.a,{variant:"body2",children:tooltipText}),arrow:!0,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.a,{sx:{padding:0},color:"primary",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Icon_Icon__WEBPACK_IMPORTED_MODULE_8__.a,{iconType:tooltipType,color:"inherit",sx:{"&:hover":{color:"hover.main"}}})})})}IconWithTooltip.displayName="IconWithTooltip";try{IconWithTooltip.displayName="IconWithTooltip",IconWithTooltip.__docgenInfo={description:"",displayName:"IconWithTooltip",props:{tooltipType:{defaultValue:{value:"help"},description:"Tooltip type to display",name:"tooltipType",required:!1,type:{name:"enum",value:[{value:'"help"'}]}},tooltipText:{defaultValue:null,description:"Tooltip text",name:"tooltipText",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/IconWithTooltip/IconWithTooltip.tsx#IconWithTooltip"]={docgenInfo:IconWithTooltip.__docgenInfo,name:"IconWithTooltip",path:"src/components/IconWithTooltip/IconWithTooltip.tsx#IconWithTooltip"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/TextInput/TextInput.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"WithAnError",(function(){return WithAnError})),__webpack_require__.d(__webpack_exports__,"WithATooltip",(function(){return WithATooltip})),__webpack_require__.d(__webpack_exports__,"WithATooltipAndRequired",(function(){return WithATooltipAndRequired}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js");var FormControl=__webpack_require__("./node_modules/@mui/material/esm/FormControl/FormControl.js"),Stack=__webpack_require__("./node_modules/@mui/material/esm/Stack/Stack.js"),InputLabel=__webpack_require__("./node_modules/@mui/material/esm/InputLabel/InputLabel.js"),FormHelperText=__webpack_require__("./node_modules/@mui/material/esm/FormHelperText/FormHelperText.js"),InputBase=__webpack_require__("./node_modules/@mui/material/esm/InputBase/InputBase.js"),styled=__webpack_require__("./node_modules/@mui/material/esm/styles/styled.js"),Icon=__webpack_require__("./src/components/Icon/Icon.tsx"),IconWithTooltip=__webpack_require__("./src/components/IconWithTooltip/IconWithTooltip.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["label","errorText","tooltipText"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var BootstrapInput=Object(styled.a)(InputBase.a)((function(_ref){var theme=_ref.theme;return{"& .MuiInputBase-input":{borderRadius:4,position:"relative",border:"1px solid "+theme.palette.neutral.field,padding:"8px",marginTop:theme.spacing(.5),transition:theme.transitions.create(["border-color","background-color","box-shadow"]),"&:hover":{borderColor:theme.palette.primary.main},"&:focus":{boxShadow:"inset 0px 0px 0px 1px "+theme.palette.primary.main,borderColor:theme.palette.primary.main},"&::-webkit-outer-spin-button, &::-webkit-inner-spin-button":{WebkitAppearance:"none",margin:0},"&[type=number]":{MozAppearance:"textfield"}},"&.MuiInputBase-root.Mui-error":{"& .MuiInputBase-input":{borderColor:theme.palette.error.main,"&:focus":{boxShadow:"inset 0px 0px 0px 1px "+theme.palette.primary.main,borderColor:theme.palette.primary.main}}}}}));function TextInput(_ref2){var label=_ref2.label,_ref2$errorText=_ref2.errorText,errorText=void 0===_ref2$errorText?"":_ref2$errorText,_ref2$tooltipText=_ref2.tooltipText,tooltipText=void 0===_ref2$tooltipText?"":_ref2$tooltipText,props=_objectWithoutProperties(_ref2,_excluded),error=errorText.length>0,required=props.required,inputLabelProps={disableAnimation:!0,shrink:!0,htmlFor:"bootstrap-input",sx:{position:"relative",transformOrigin:"unset",transform:"unset",".MuiInputLabel-asterisk":{color:"error.main"}}};return Object(jsx_runtime.jsxs)(FormControl.a,{variant:"standard",error:error,required:required,children:[tooltipText?Object(jsx_runtime.jsxs)(Stack.a,{direction:"row",alignItems:"center",spacing:1.5,children:[Object(jsx_runtime.jsxs)(InputLabel.a,Object.assign({},inputLabelProps,{children:[" ",label," "]})),Object(jsx_runtime.jsx)(IconWithTooltip.a,{tooltipText:tooltipText})]}):Object(jsx_runtime.jsxs)(InputLabel.a,Object.assign({},inputLabelProps,{children:[" ",label," "]})),Object(jsx_runtime.jsx)(BootstrapInput,Object.assign({id:"bootstrap-input"},props)),Object(jsx_runtime.jsx)(FormHelperText.a,{error:error,color:"error",children:error&&Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(Icon.a,{iconType:"exclamation-triangle",color:"inherit",fontSize:"inherit",sx:{transform:"translateY(1px)",marginRight:.5}}),errorText]})})]})}TextInput.displayName="TextInput";try{TextInput.displayName="TextInput",TextInput.__docgenInfo={description:"",displayName:"TextInput",props:{label:{defaultValue:null,description:"Label to display",name:"label",required:!0,type:{name:"string"}},errorText:{defaultValue:{value:""},description:"Error message to display",name:"errorText",required:!1,type:{name:"string"}},tooltipText:{defaultValue:{value:""},description:"Tooltip text to display",name:"tooltipText",required:!1,type:{name:"string"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TextInput/TextInput.tsx#TextInput"]={docgenInfo:TextInput.__docgenInfo,name:"TextInput",path:"src/components/TextInput/TextInput.tsx#TextInput"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Components/TextInput",component:TextInput};var TextInput_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(TextInput,Object.assign({},args))};TextInput_stories_Template.displayName="Template";var Default=TextInput_stories_Template.bind({});Default.args={errorText:"",label:"Some kind of label"};var WithAnError=TextInput_stories_Template.bind({});WithAnError.args={errorText:"Some kind of error",label:"Some kind of label"};var WithATooltip=TextInput_stories_Template.bind({});WithATooltip.args={tooltipText:"Some kind of tooltip text here",errorText:"",label:"Some kind of label"};var WithATooltipAndRequired=TextInput_stories_Template.bind({});WithATooltipAndRequired.args={tooltipText:"Some kind of tooltip text here",errorText:"",label:"Some kind of label",required:!0},Default.parameters=Object.assign({storySource:{source:"(args) => <TextInput {...args} />"}},Default.parameters),WithAnError.parameters=Object.assign({storySource:{source:"(args) => <TextInput {...args} />"}},WithAnError.parameters),WithATooltip.parameters=Object.assign({storySource:{source:"(args) => <TextInput {...args} />"}},WithATooltip.parameters),WithATooltipAndRequired.parameters=Object.assign({storySource:{source:"(args) => <TextInput {...args} />"}},WithATooltipAndRequired.parameters)},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,5,6]]]);