(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{234:
/*!********************************************!*\
  !*** ./node_modules/dijit/ColorPalette.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,i){var r,l;r=[i.dojo.c(e.i),i(/*! dojo/text!./templates/ColorPalette.html */317),i(/*! ./_Widget */25),i(/*! ./_TemplatedMixin */31),i(/*! ./_PaletteMixin */319),i(/*! ./hccss */84),i(/*! dojo/i18n */50),i(/*! dojo/_base/Color */82),i(/*! dojo/_base/declare */5),i(/*! dojo/dom-construct */16),i(/*! dojo/string */59),i(/*! dojo/i18n!dojo/nls/colors */316),i(/*! dojo/colors */314)],void 0===(l=function(e,t,i,r,l,a,o,n,s,d,h){var u=s("dijit.ColorPalette",[i,r,l],{palette:"7x10",_palettes:{"7x10":[["white","seashell","cornsilk","lemonchiffon","lightyellow","palegreen","paleturquoise","lightcyan","lavender","plum"],["lightgray","pink","bisque","moccasin","khaki","lightgreen","lightseagreen","lightskyblue","cornflowerblue","violet"],["silver","lightcoral","sandybrown","orange","palegoldenrod","chartreuse","mediumturquoise","skyblue","mediumslateblue","orchid"],["gray","red","orangered","darkorange","yellow","limegreen","darkseagreen","royalblue","slateblue","mediumorchid"],["dimgray","crimson","chocolate","coral","gold","forestgreen","seagreen","blue","blueviolet","darkorchid"],["darkslategray","firebrick","saddlebrown","sienna","olive","green","darkcyan","mediumblue","darkslateblue","darkmagenta"],["black","darkred","maroon","brown","darkolivegreen","darkgreen","midnightblue","navy","indigo","purple"]],"3x4":[["white","lime","green","blue"],["silver","yellow","fuchsia","navy"],["gray","red","purple","black"]]},templateString:t,baseClass:"dijitColorPalette",_dyeFactory:function(e,t,i,r){return new this._dyeClass(e,t,i,r)},buildRendering:function(){this.inherited(arguments),this._dyeClass=s(u._Color,{palette:this.palette}),this._preparePalette(this._palettes[this.palette],o.getLocalization("dojo","colors",this.lang))}});return u._Color=s("dijit._Color",n,{template:"<span class='dijitInline dijitPaletteImg'><img src='${blankGif}' alt='${alt}' title='${title}' class='dijitColorPaletteSwatch' style='background-color: ${color}'/></span>",hcTemplate:"<span class='dijitInline dijitPaletteImg' style='position: relative; overflow: hidden; height: 12px; width: 14px;'><img src='${image}' alt='${alt}' title='${title}' style='position: absolute; left: ${left}px; top: ${top}px; ${size}'/></span>",_imagePaths:{"7x10":e.toUrl("./themes/a11y/colors7x10.png"),"3x4":e.toUrl("./themes/a11y/colors3x4.png")},constructor:function(e,t,i,r){this._title=r,this._row=t,this._col=i,this.setColor(n.named[e])},getValue:function(){return this.toHex()},fillCell:function(e,t){var i=h.substitute(a("highcontrast")?this.hcTemplate:this.template,{color:this.toHex(),blankGif:t,alt:this._title,title:this._title,image:this._imagePaths[this.palette].toString(),left:-20*this._col-5,top:-20*this._row-5,size:"7x10"==this.palette?"height: 145px; width: 206px":"height: 64px; width: 86px"});d.place(i,e)}}),u}.apply(null,r))||(e.exports=l)},314:
/*!*************************************!*\
  !*** ./node_modules/dojo/colors.js ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,i){var r,l;r=[i(/*! ./_base/kernel */1),i(/*! ./_base/lang */0),i(/*! ./_base/Color */82),i(/*! ./_base/array */3)],void 0===(l=function(e,t,i,r){var l={};t.setObject("dojo.colors",l);var a=function(e,t,i){i<0&&++i,i>1&&--i;var r=6*i;return r<1?e+(t-e)*r:2*i<1?t:3*i<2?e+(t-e)*(2/3-i)*6:e};e.colorFromRgb=i.fromRgb=function(e,t){var l=e.toLowerCase().match(/^(rgba?|hsla?)\(([\s\.\-,%0-9]+)\)/);if(l){var o,n=l[2].split(/\s*,\s*/),s=n.length,d=l[1];if("rgb"==d&&3==s||"rgba"==d&&4==s){var h=n[0];return"%"==h.charAt(h.length-1)?(o=r.map(n,function(e){return 2.56*parseFloat(e)}),4==s&&(o[3]=n[3]),i.fromArray(o,t)):i.fromArray(n,t)}if("hsl"==d&&3==s||"hsla"==d&&4==s){var u=(parseFloat(n[0])%360+360)%360/360,g=parseFloat(n[1])/100,c=parseFloat(n[2])/100,m=c<=.5?c*(g+1):c+g-c*g,y=2*c-m;return o=[256*a(y,m,u+1/3),256*a(y,m,u),256*a(y,m,u-1/3),1],4==s&&(o[3]=n[3]),i.fromArray(o,t)}}return null};var o=function(e,t,i){return e=Number(e),isNaN(e)?i:e<t?t:e>i?i:e};return i.prototype.sanitize=function(){var e=this;return e.r=Math.round(o(e.r,0,255)),e.g=Math.round(o(e.g,0,255)),e.b=Math.round(o(e.b,0,255)),e.a=o(e.a,0,1),this},l.makeGrey=i.makeGrey=function(e,t){return i.fromArray([e,e,e,t])},t.mixin(i.named,{aliceblue:[240,248,255],antiquewhite:[250,235,215],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],blanchedalmond:[255,235,205],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],oldlace:[253,245,230],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],whitesmoke:[245,245,245],yellowgreen:[154,205,50]}),i}.apply(null,r))||(e.exports=l)},315:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/dojo-webpack-plugin/loaders/dojo/i18nRootModifier?bundledLocales=!./node_modules/dojo/nls/colors.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,i){e.exports={root:{aliceblue:"alice blue",antiquewhite:"antique white",aqua:"aqua",aquamarine:"aquamarine",azure:"azure",beige:"beige",bisque:"bisque",black:"black",blanchedalmond:"blanched almond",blue:"blue",blueviolet:"blue-violet",brown:"brown",burlywood:"burlywood",cadetblue:"cadet blue",chartreuse:"chartreuse",chocolate:"chocolate",coral:"coral",cornflowerblue:"cornflower blue",cornsilk:"cornsilk",crimson:"crimson",cyan:"cyan",darkblue:"dark blue",darkcyan:"dark cyan",darkgoldenrod:"dark goldenrod",darkgray:"dark gray",darkgreen:"dark green",darkgrey:"dark gray",darkkhaki:"dark khaki",darkmagenta:"dark magenta",darkolivegreen:"dark olive green",darkorange:"dark orange",darkorchid:"dark orchid",darkred:"dark red",darksalmon:"dark salmon",darkseagreen:"dark sea green",darkslateblue:"dark slate blue",darkslategray:"dark slate gray",darkslategrey:"dark slate gray",darkturquoise:"dark turquoise",darkviolet:"dark violet",deeppink:"deep pink",deepskyblue:"deep sky blue",dimgray:"dim gray",dimgrey:"dim gray",dodgerblue:"dodger blue",firebrick:"fire brick",floralwhite:"floral white",forestgreen:"forest green",fuchsia:"fuchsia",gainsboro:"gainsboro",ghostwhite:"ghost white",gold:"gold",goldenrod:"goldenrod",gray:"gray",green:"green",greenyellow:"green-yellow",grey:"gray",honeydew:"honeydew",hotpink:"hot pink",indianred:"indian red",indigo:"indigo",ivory:"ivory",khaki:"khaki",lavender:"lavender",lavenderblush:"lavender blush",lawngreen:"lawn green",lemonchiffon:"lemon chiffon",lightblue:"light blue",lightcoral:"light coral",lightcyan:"light cyan",lightgoldenrodyellow:"light goldenrod yellow",lightgray:"light gray",lightgreen:"light green",lightgrey:"light gray",lightpink:"light pink",lightsalmon:"light salmon",lightseagreen:"light sea green",lightskyblue:"light sky blue",lightslategray:"light slate gray",lightslategrey:"light slate gray",lightsteelblue:"light steel blue",lightyellow:"light yellow",lime:"lime",limegreen:"lime green",linen:"linen",magenta:"magenta",maroon:"maroon",mediumaquamarine:"medium aquamarine",mediumblue:"medium blue",mediumorchid:"medium orchid",mediumpurple:"medium purple",mediumseagreen:"medium sea green",mediumslateblue:"medium slate blue",mediumspringgreen:"medium spring green",mediumturquoise:"medium turquoise",mediumvioletred:"medium violet-red",midnightblue:"midnight blue",mintcream:"mint cream",mistyrose:"misty rose",moccasin:"moccasin",navajowhite:"navajo white",navy:"navy",oldlace:"old lace",olive:"olive",olivedrab:"olive drab",orange:"orange",orangered:"orange red",orchid:"orchid",palegoldenrod:"pale goldenrod",palegreen:"pale green",paleturquoise:"pale turquoise",palevioletred:"pale violet-red",papayawhip:"papaya whip",peachpuff:"peach puff",peru:"peru",pink:"pink",plum:"plum",powderblue:"powder blue",purple:"purple",red:"red",rosybrown:"rosy brown",royalblue:"royal blue",saddlebrown:"saddle brown",salmon:"salmon",sandybrown:"sandy brown",seagreen:"sea green",seashell:"seashell",sienna:"sienna",silver:"silver",skyblue:"sky blue",slateblue:"slate blue",slategray:"slate gray",slategrey:"slate gray",snow:"snow",springgreen:"spring green",steelblue:"steel blue",tan:"tan",teal:"teal",thistle:"thistle",tomato:"tomato",transparent:"transparent",turquoise:"turquoise",violet:"violet",wheat:"wheat",white:"white",whitesmoke:"white smoke",yellow:"yellow",yellowgreen:"yellow green"},bs:!1,mk:!1,sr:!1,zh:!1,"zh-tw":!1,uk:!1,tr:!1,th:!1,sv:!1,sl:!1,sk:!1,ru:!1,ro:!1,pt:!1,"pt-pt":!1,pl:!1,nl:!1,nb:!1,ko:!1,kk:!1,ja:!1,it:!1,id:!1,hu:!1,hr:!1,he:!1,fr:!1,fi:!1,eu:!1,es:!1,el:!1,de:!1,da:!1,cs:!1,ca:!1,bg:!1,az:!1,ar:!1}},316:
/*!**********************************************************************************************!*\
  !*** ./node_modules/dojo-webpack-plugin/loaders/dojo/i18n!./node_modules/dojo/nls/colors.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,i){i(/*! dojo/i18nRootModifier?absMid=dojo/nls/colors&bundledLocales=!dojo/nls/colors */315);var r=i.dojo.c();e.exports=i(/*! ./node_modules/dojo-webpack-plugin/loaders/dojo/i18n/runner.js */61)("dojo/nls/colors",r)},317:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/dojo-webpack-plugin/loaders/dojo/text!./node_modules/dijit/templates/ColorPalette.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t){e.exports='<div class="dijitInline dijitColorPalette" role="grid">\n\t<table data-dojo-attach-point="paletteTableNode" class="dijitPaletteTable" cellSpacing="0" cellPadding="0" role="presentation">\n\t\t<tbody data-dojo-attach-point="gridNode"></tbody>\n\t</table>\n</div>\n'},318:
/*!*****************************************!*\
  !*** ./node_modules/dijit/typematic.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,i){var r,l;r=[i(/*! dojo/_base/array */3),i(/*! dojo/_base/connect */37),i(/*! dojo/_base/lang */0),i(/*! dojo/on */7),i(/*! dojo/sniff */8),i(/*! ./main */27)],void 0===(l=function(e,t,i,r,l,a){var o=a.typematic={_fireEventAndReload:function(){this._timer=null,this._callback(++this._count,this._node,this._evt),this._currentTimeout=Math.max(this._currentTimeout<0?this._initialDelay:this._subsequentDelay>1?this._subsequentDelay:Math.round(this._currentTimeout*this._subsequentDelay),this._minDelay),this._timer=setTimeout(i.hitch(this,"_fireEventAndReload"),this._currentTimeout)},trigger:function(e,t,r,l,a,o,n,s){if(a!=this._obj){for(var d in this.stop(),this._initialDelay=n||500,this._subsequentDelay=o||.9,this._minDelay=s||10,this._obj=a,this._node=r,this._currentTimeout=-1,this._count=-1,this._callback=i.hitch(t,l),this._evt={faux:!0},e)if("layerX"!=d&&"layerY"!=d){var h=e[d];"function"!=typeof h&&void 0!==h&&(this._evt[d]=h)}this._fireEventAndReload()}},stop:function(){this._timer&&(clearTimeout(this._timer),this._timer=null),this._obj&&(this._callback(-1,this._node,this._evt),this._obj=null)},addKeyListener:function(l,a,n,s,d,h,u){var g="keyCode"in a?"keydown":"charCode"in a?"keypress":t._keypress,c="keyCode"in a?"keyCode":"charCode"in a?"charCode":"charOrCode",m=[r(l,g,i.hitch(this,function(e){e[c]!=a[c]||void 0!==a.ctrlKey&&a.ctrlKey!=e.ctrlKey||void 0!==a.altKey&&a.altKey!=e.altKey||void 0!==a.metaKey&&a.metaKey!=(e.metaKey||!1)||void 0!==a.shiftKey&&a.shiftKey!=e.shiftKey?o._obj==a&&o.stop():(e.stopPropagation(),e.preventDefault(),o.trigger(e,n,l,s,a,d,h,u))})),r(l,"keyup",i.hitch(this,function(){o._obj==a&&o.stop()}))];return{remove:function(){e.forEach(m,function(e){e.remove()})}}},addMouseListener:function(t,a,n,s,d,h){var u=[r(t,"mousedown",i.hitch(this,function(e){e.preventDefault(),o.trigger(e,a,t,n,t,s,d,h)})),r(t,"mouseup",i.hitch(this,function(e){this._obj&&e.preventDefault(),o.stop()})),r(t,"mouseout",i.hitch(this,function(e){this._obj&&e.preventDefault(),o.stop()})),r(t,"dblclick",i.hitch(this,function(e){e.preventDefault(),l("ie")<9&&(o.trigger(e,a,t,n,t,s,d,h),setTimeout(i.hitch(this,o.stop),50))}))];return{remove:function(){e.forEach(u,function(e){e.remove()})}}},addListener:function(t,i,r,l,a,o,n,s){var d=[this.addKeyListener(i,r,l,a,o,n,s),this.addMouseListener(t,l,a,o,n,s)];return{remove:function(){e.forEach(d,function(e){e.remove()})}}}};return o}.apply(null,r))||(e.exports=l)},319:
/*!*********************************************!*\
  !*** ./node_modules/dijit/_PaletteMixin.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,i){var r,l;r=[i(/*! dojo/_base/declare */5),i(/*! dojo/dom-attr */14),i(/*! dojo/dom-class */11),i(/*! dojo/dom-construct */16),i(/*! dojo/keys */19),i(/*! dojo/_base/lang */0),i(/*! dojo/on */7),i(/*! ./_CssStateMixin */51),i(/*! ./a11yclick */26),i(/*! ./focus */52),i(/*! ./typematic */318)],void 0===(l=function(e,t,i,r,l,a,o,n,s,d,h){return e("dijit._PaletteMixin",n,{defaultTimeout:500,timeoutChangeRate:.9,value:"",_selectedCell:-1,tabIndex:"0",cellClass:"dijitPaletteCell",dyeClass:null,_dyeFactory:function(e){return new("string"==typeof this.dyeClass?a.getObject(this.dyeClass):this.dyeClass)(e)},_preparePalette:function(e,t){this._cells=[];var i=this._blankGif;this.own(o(this.gridNode,s,a.hitch(this,"_onCellClick")));for(var n=0;n<e.length;n++)for(var d=r.create("tr",{tabIndex:"-1",role:"row"},this.gridNode),u=0;u<e[n].length;u++){var g=e[n][u];if(g){var c=this._dyeFactory(g,n,u,t[g]),m=r.create("td",{class:this.cellClass,tabIndex:"-1",title:t[g],role:"gridcell"},d);c.fillCell(m,i),m.idx=this._cells.length,this._cells.push({node:m,dye:c})}}this._xDim=e[0].length,this._yDim=e.length;var y={UP_ARROW:-this._xDim,DOWN_ARROW:this._xDim,RIGHT_ARROW:this.isLeftToRight()?1:-1,LEFT_ARROW:this.isLeftToRight()?-1:1};for(var p in y)this.own(h.addKeyListener(this.domNode,{keyCode:l[p],ctrlKey:!1,altKey:!1,shiftKey:!1},this,function(){var e=y[p];return function(t){this._navigateByKey(e,t)}}(),this.timeoutChangeRate,this.defaultTimeout))},postCreate:function(){this.inherited(arguments),this._setCurrent(this._cells[0].node)},focus:function(){d.focus(this._currentFocus)},_onCellClick:function(e){for(var t=e.target;"TD"!=t.tagName;){if(!t.parentNode||t==this.gridNode)return;t=t.parentNode}var i=this._getDye(t).getValue();this._setCurrent(t),d.focus(t),this._setValueAttr(i,!0),e.stopPropagation(),e.preventDefault()},_setCurrent:function(e){"_currentFocus"in this&&t.set(this._currentFocus,"tabIndex","-1"),this._currentFocus=e,e&&t.set(e,"tabIndex",this.tabIndex)},_setValueAttr:function(e,t){if(this._selectedCell>=0&&i.remove(this._cells[this._selectedCell].node,this.cellClass+"Selected"),this._selectedCell=-1,e)for(var r=0;r<this._cells.length;r++)if(e==this._cells[r].dye.getValue()){this._selectedCell=r,i.add(this._cells[r].node,this.cellClass+"Selected");break}this._set("value",this._selectedCell>=0?e:null),(t||void 0===t)&&this.onChange(e)},onChange:function(){},_navigateByKey:function(e,t){if(-1!=t){var i=this._currentFocus.idx+e;if(i<this._cells.length&&i>-1){var r=this._cells[i].node;this._setCurrent(r),this.defer(a.hitch(d,"focus",r))}}},_getDye:function(e){return this._cells[e.idx].dye}})}.apply(null,r))||(e.exports=l)}}]),window.webpackJsonp.registerAbsMids({"dijit/ColorPalette":234,"dojo/colors":314,"dojo/nls/colors":315,"dojo/i18n!dojo/nls/colors":316,"dojo/text!dijit/templates/ColorPalette.html":317,"dijit/typematic":318,"dijit/_PaletteMixin":319});
//# sourceMappingURL=0.bundle.js.map