/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'budda',
                type: 'image',
                rect: ['359', '91','300px','186px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'_/budda.jpg','0px','0px']
            },
            {
                id: 'main',
                type: 'image',
                rect: ['-316px', '-6px','300px','192px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"main.jpg",'0px','0px']
            },
            {
                id: 'paryzh',
                type: 'image',
                rect: ['0px', '-4px','300px','185px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'_/paryzh.jpg','0px','0px']
            },
            {
                id: 'sea',
                type: 'image',
                rect: ['740px', '11px','300px','191px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"sea.jpg",'0px','0px']
            },
            {
                id: 'egipet',
                type: 'image',
                rect: ['-352px', '-8px','300px','188px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"egipet.jpg",'0px','0px']
            },
            {
                id: 'camel',
                type: 'image',
                rect: ['-340px', '-22px','304px','203px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"camel.jpg",'0px','0px']
            },
            {
                id: 'board0',
                type: 'image',
                rect: ['-4px', '-9px','304px','189px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"board0.jpg",'0px','0px']
            },
            {
                id: 'NY',
                type: 'image',
                rect: ['-1px', '-9px','300px','195px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"NY.jpg",'0px','0px']
            },
            {
                id: 'pbr3',
                type: 'image',
                rect: ['65px', '137px','176px','110px','auto', 'auto'],
                clip: ['rect(0px 176px 38px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"pbr.png",'0px','0px']
            },
            {
                id: 'lo3',
                type: 'image',
                rect: ['-991px', '-172px','2289px','620px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"lo3.svg",'0px','0px'],
                transform: [[],[],[],['0.08','0.08']]
            },
            {
                id: 'logo2',
                type: 'image',
                rect: ['-9px', '-7px','341px','196px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"logo2.png",'0px','0px']
            },
            {
                id: 't',
                type: 'image',
                rect: ['-1249px', '-342px','2800px','938px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"t.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'dubai',
                type: 'image',
                rect: ['-161px', '51px','1151px','39px','auto', 'auto'],
                clip: ['rect(0px 424.14312744140625px 39px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"dubai.png",'0px','0px'],
                transform: [[],[],[],['0.7','0.7']]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_logo2}": [
                ["style", "top", '-7px'],
                ["style", "height", '196px'],
                ["style", "opacity", '0'],
                ["style", "left", '-9px'],
                ["style", "width", '341px']
            ],
            "${_egipet}": [
                ["style", "top", '-8px'],
                ["style", "opacity", '1'],
                ["style", "left", '-352px']
            ],
            "${_dubai}": [
                ["style", "top", '51px'],
                ["transform", "scaleY", '0.7'],
                ["style", "clip", [0,424.14312744140625,39,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "scaleX", '0.7'],
                ["style", "opacity", '0'],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '-161px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '180px'],
                ["style", "width", '300px']
            ],
            "${_paryzh}": [
                ["style", "top", '-4px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_pbr3}": [
                ["style", "top", '137px'],
                ["style", "background-position", [0,-117], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '65px'],
                ["style", "clip", [0,176,38,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_sea}": [
                ["style", "left", '740px'],
                ["style", "top", '11px']
            ],
            "${_lo3}": [
                ["style", "top", '-272px'],
                ["style", "height", '620px'],
                ["transform", "scaleY", '0'],
                ["style", "background-position", [2675,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0'],
                ["style", "left", '-1041px'],
                ["style", "width", '2289px']
            ],
            "${_NY}": [
                ["style", "top", '-9px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0'],
                ["style", "left", '-1px']
            ],
            "${_camel}": [
                ["style", "top", '-22px'],
                ["style", "opacity", '1'],
                ["style", "left", '-352px'],
                ["style", "width", '304px']
            ],
            "${_main}": [
                ["style", "top", '-6px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0'],
                ["style", "left", '-316px']
            ],
            "${_t}": [
                ["style", "top", '-342px'],
                ["transform", "scaleY", '0.1'],
                ["style", "height", '938px'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '-1249px'],
                ["style", "width", '2800px']
            ],
            "${_board0}": [
                ["style", "top", '-9px'],
                ["style", "height", '189px'],
                ["style", "opacity", '0'],
                ["style", "left", '-4px'],
                ["style", "width", '304px']
            ],
            "${_budda}": [
                ["style", "top", '-4px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 23872,
            autoPlay: true,
            timeline: [
                { id: "eid286", tween: [ "style", "${_paryzh}", "left", '0px', { fromValue: '0px'}], position: 5066, duration: 0 },
                { id: "eid287", tween: [ "style", "${_paryzh}", "left", '0px', { fromValue: '0px'}], position: 5200, duration: 0 },
                { id: "eid288", tween: [ "style", "${_paryzh}", "left", '0px', { fromValue: '0px'}], position: 6969, duration: 0 },
                { id: "eid289", tween: [ "style", "${_paryzh}", "left", '0px', { fromValue: '0px'}], position: 7103, duration: 0 },
                { id: "eid207", tween: [ "style", "${_egipet}", "left", '0px', { fromValue: '-352px'}], position: 12076, duration: 619, easing: "easeInOutCubic" },
                { id: "eid216", tween: [ "style", "${_egipet}", "left", '352px', { fromValue: '0px'}], position: 15601, duration: 829, easing: "easeInOutCubic" },
                { id: "eid183", tween: [ "transform", "${_NY}", "scaleX", '1', { fromValue: '0'}], position: 9060, duration: 349, easing: "easeInOutCubic" },
                { id: "eid148", tween: [ "style", "${_lo3}", "left", '-920px', { fromValue: '-1041px'}], position: 3104, duration: 157, easing: "easeInOutCubic" },
                { id: "eid196", tween: [ "style", "${_lo3}", "left", '-939px', { fromValue: '-920px'}], position: 9007, duration: 153 },
                { id: "eid114", tween: [ "style", "${_lo3}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 411, easing: "easeInOutCubic" },
                { id: "eid154", tween: [ "style", "${_lo3}", "opacity", '0', { fromValue: '1'}], position: 2804, duration: 250, easing: "easeInOutCubic" },
                { id: "eid146", tween: [ "style", "${_lo3}", "opacity", '1', { fromValue: '0'}], position: 3104, duration: 250, easing: "easeInOutCubic" },
                { id: "eid194", tween: [ "style", "${_lo3}", "opacity", '0', { fromValue: '1'}], position: 8810, duration: 250 },
                { id: "eid193", tween: [ "style", "${_lo3}", "opacity", '1', { fromValue: '0'}], position: 9122, duration: 250 },
                { id: "eid131", tween: [ "style", "${_lo3}", "opacity", '0', { fromValue: '1'}], position: 19122, duration: 250, easing: "easeInOutCubic" },
                { id: "eid162", tween: [ "style", "${_main}", "top", '-10px', { fromValue: '-6px'}], position: 3029, duration: 134 },
                { id: "eid272", tween: [ "style", "${_main}", "top", '-6px', { fromValue: '-10px'}], position: 4932, duration: 134 },
                { id: "eid179", tween: [ "transform", "${_t}", "scaleX", '0.09', { fromValue: '0.1'}], position: 19434, duration: 373 },
                { id: "eid205", tween: [ "style", "${_NY}", "left", '351px', { fromValue: '-1px'}], position: 12076, duration: 829, easing: "easeInOutCubic" },
                { id: "eid174", tween: [ "style", "${_pbr3}", "background-position", [0,-78], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-117]}], position: 3029, duration: 471, easing: "easeInOutCubic" },
                { id: "eid169", tween: [ "style", "${_pbr3}", "background-position", [0,-40.139843], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-78]}], position: 4798, duration: 452, easing: "easeInOutCubic" },
                { id: "eid170", tween: [ "style", "${_pbr3}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-40.139843]}], position: 6897, duration: 413, easing: "easeInOutCubic" },
                { id: "eid171", tween: [ "style", "${_pbr3}", "background-position", [0,51], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 8545, duration: 491, easing: "easeInOutCubic" },
                { id: "eid186", tween: [ "style", "${_NY}", "opacity", '1', { fromValue: '0'}], position: 9129, duration: 493 },
                { id: "eid211", tween: [ "style", "${_NY}", "opacity", '0', { fromValue: '1'}], position: 11934, duration: 459 },
                { id: "eid212", tween: [ "style", "${_NY}", "opacity", '1', { fromValue: '0'}], position: 12506, duration: 459 },
                { id: "eid247", tween: [ "style", "${_dubai}", "top", '140px', { fromValue: '51px'}], position: 12347, duration: 62 },
                { id: "eid161", tween: [ "style", "${_main}", "left", '0px', { fromValue: '-316px'}], position: 3029, duration: 134 },
                { id: "eid271", tween: [ "style", "${_main}", "left", '-316px', { fromValue: '0px'}], position: 4932, duration: 134 },
                { id: "eid147", tween: [ "style", "${_lo3}", "top", '-282px', { fromValue: '-272px'}], position: 3104, duration: 157, easing: "easeInOutCubic" },
                { id: "eid246", tween: [ "style", "${_dubai}", "left", '-211px', { fromValue: '-161px'}], position: 12347, duration: 62 },
                { id: "eid262", tween: [ "style", "${_dubai}", "left", '-181px', { fromValue: '-211px'}], position: 15765, duration: 81 },
                { id: "eid263", tween: [ "style", "${_dubai}", "left", '-189px', { fromValue: '-181px'}], position: 15846, duration: 287 },
                { id: "eid145", tween: [ "style", "${_lo3}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [2675,0]}], position: 374, duration: 376, easing: "easeInOutCubic" },
                { id: "eid244", tween: [ "style", "${_dubai}", "opacity", '1', { fromValue: '0'}], position: 9372, duration: 493 },
                { id: "eid254", tween: [ "style", "${_dubai}", "opacity", '0', { fromValue: '1'}], position: 12204, duration: 0 },
                { id: "eid255", tween: [ "style", "${_dubai}", "opacity", '0', { fromValue: '0'}], position: 12402, duration: 0 },
                { id: "eid248", tween: [ "style", "${_dubai}", "opacity", '1', { fromValue: '0'}], position: 12541, duration: 393 },
                { id: "eid256", tween: [ "style", "${_dubai}", "opacity", '0', { fromValue: '1'}], position: 15459, duration: 337 },
                { id: "eid258", tween: [ "style", "${_dubai}", "opacity", '1', { fromValue: '0'}], position: 15796, duration: 337 },
                { id: "eid265", tween: [ "style", "${_dubai}", "opacity", '0', { fromValue: '1'}], position: 19122, duration: 312 },
                { id: "eid156", tween: [ "transform", "${_lo3}", "scaleY", '0.08', { fromValue: '0'}], position: 500, duration: 250 },
                { id: "eid152", tween: [ "transform", "${_lo3}", "scaleY", '0.06', { fromValue: '0'}], position: 3104, duration: 166, easing: "easeInOutCubic" },
                { id: "eid245", tween: [ "style", "${_dubai}", "background-position", [-383.99972098214,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 12375, duration: 239 },
                { id: "eid259", tween: [ "style", "${_dubai}", "background-position", [-743.999721,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-383.999721,0]}], position: 15765, duration: 81 },
                { id: "eid155", tween: [ "transform", "${_lo3}", "scaleX", '0.08', { fromValue: '0'}], position: 500, duration: 250 },
                { id: "eid151", tween: [ "transform", "${_lo3}", "scaleX", '0.06', { fromValue: '0'}], position: 3104, duration: 166, easing: "easeInOutCubic" },
                { id: "eid178", tween: [ "style", "${_t}", "opacity", '1', { fromValue: '0'}], position: 19434, duration: 306 },
                { id: "eid160", tween: [ "style", "${_main}", "opacity", '1', { fromValue: '0'}], position: 3122, duration: 175 },
                { id: "eid275", tween: [ "style", "${_main}", "opacity", '0', { fromValue: '1'}], position: 4860, duration: 175 },
                { id: "eid176", tween: [ "style", "${_main}", "opacity", '0', { fromValue: '1'}], position: 8164, duration: 250 },
                { id: "eid278", tween: [ "transform", "${_paryzh}", "scaleY", '1', { fromValue: '0'}], position: 5141, duration: 103 },
                { id: "eid279", tween: [ "transform", "${_paryzh}", "scaleY", '0', { fromValue: '1'}], position: 7000, duration: 103 },
                { id: "eid302", tween: [ "style", "${_budda}", "opacity", '1', { fromValue: '0'}], position: 7093, duration: 175 },
                { id: "eid303", tween: [ "style", "${_budda}", "opacity", '0', { fromValue: '1'}], position: 8831, duration: 175 },
                { id: "eid164", tween: [ "transform", "${_main}", "scaleY", '1', { fromValue: '0'}], position: 3104, duration: 103 },
                { id: "eid274", tween: [ "transform", "${_main}", "scaleY", '0', { fromValue: '1'}], position: 4963, duration: 103 },
                { id: "eid304", tween: [ "style", "${_budda}", "left", '0px', { fromValue: '0px'}], position: 7000, duration: 0 },
                { id: "eid305", tween: [ "style", "${_budda}", "left", '0px', { fromValue: '0px'}], position: 7134, duration: 0 },
                { id: "eid306", tween: [ "style", "${_budda}", "left", '0px', { fromValue: '0px'}], position: 8903, duration: 0 },
                { id: "eid307", tween: [ "style", "${_budda}", "left", '0px', { fromValue: '0px'}], position: 9037, duration: 0 },
                { id: "eid300", tween: [ "transform", "${_budda}", "scaleX", '1', { fromValue: '0'}], position: 7075, duration: 103 },
                { id: "eid301", tween: [ "transform", "${_budda}", "scaleX", '0', { fromValue: '1'}], position: 8934, duration: 103 },
                { id: "eid82", tween: [ "style", "${_logo2}", "opacity", '1', { fromValue: '0'}], position: 19434, duration: 250 },
                { id: "eid83", tween: [ "style", "${_logo2}", "opacity", '0', { fromValue: '1'}], position: 23622, duration: 250 },
                { id: "eid298", tween: [ "transform", "${_budda}", "scaleY", '1', { fromValue: '0'}], position: 7075, duration: 103 },
                { id: "eid299", tween: [ "transform", "${_budda}", "scaleY", '0', { fromValue: '1'}], position: 8934, duration: 103 },
                { id: "eid294", tween: [ "style", "${_budda}", "top", '-4px', { fromValue: '-4px'}], position: 7000, duration: 0 },
                { id: "eid295", tween: [ "style", "${_budda}", "top", '-3px', { fromValue: '-4px'}], position: 7134, duration: 0 },
                { id: "eid296", tween: [ "style", "${_budda}", "top", '-3px', { fromValue: '-3px'}], position: 8903, duration: 0 },
                { id: "eid297", tween: [ "style", "${_budda}", "top", '-4px', { fromValue: '-3px'}], position: 9037, duration: 0 },
                { id: "eid218", tween: [ "style", "${_camel}", "opacity", '0', { fromValue: '1'}], position: 15459, duration: 459 },
                { id: "eid219", tween: [ "style", "${_camel}", "opacity", '1', { fromValue: '0'}], position: 16031, duration: 459 },
                { id: "eid280", tween: [ "transform", "${_paryzh}", "scaleX", '1', { fromValue: '0'}], position: 5141, duration: 103 },
                { id: "eid281", tween: [ "transform", "${_paryzh}", "scaleX", '0', { fromValue: '1'}], position: 7000, duration: 103 },
                { id: "eid282", tween: [ "style", "${_paryzh}", "opacity", '1', { fromValue: '0'}], position: 5159, duration: 175 },
                { id: "eid283", tween: [ "style", "${_paryzh}", "opacity", '0', { fromValue: '1'}], position: 6897, duration: 175 },
                { id: "eid209", tween: [ "style", "${_egipet}", "opacity", '0', { fromValue: '1'}], position: 11872, duration: 459 },
                { id: "eid210", tween: [ "style", "${_egipet}", "opacity", '1', { fromValue: '0'}], position: 12445, duration: 459 },
                { id: "eid214", tween: [ "style", "${_egipet}", "opacity", '0', { fromValue: '1'}], position: 15459, duration: 459 },
                { id: "eid215", tween: [ "style", "${_egipet}", "opacity", '1', { fromValue: '0'}], position: 16031, duration: 459 },
                { id: "eid290", tween: [ "style", "${_paryzh}", "top", '-4px', { fromValue: '-4px'}], position: 5066, duration: 0 },
                { id: "eid291", tween: [ "style", "${_paryzh}", "top", '-3px', { fromValue: '-3px'}], position: 5200, duration: 0 },
                { id: "eid292", tween: [ "style", "${_paryzh}", "top", '-3px', { fromValue: '-3px'}], position: 6969, duration: 0 },
                { id: "eid293", tween: [ "style", "${_paryzh}", "top", '-4px', { fromValue: '-4px'}], position: 7103, duration: 0 },
                { id: "eid184", tween: [ "transform", "${_NY}", "scaleY", '1', { fromValue: '0'}], position: 9060, duration: 349, easing: "easeInOutCubic" },
                { id: "eid163", tween: [ "transform", "${_main}", "scaleX", '1', { fromValue: '0'}], position: 3104, duration: 103 },
                { id: "eid273", tween: [ "transform", "${_main}", "scaleX", '0', { fromValue: '1'}], position: 4963, duration: 103 },
                { id: "eid228", tween: [ "style", "${_camel}", "left", '-1px', { fromValue: '-352px'}], position: 15601, duration: 828, easing: "easeInOutCubic" },
                { id: "eid233", tween: [ "style", "${_camel}", "left", '317px', { fromValue: '-1px'}], position: 19122, duration: 562, easing: "easeInOutCubic" },
                { id: "eid141", tween: [ "style", "${_board0}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
                { id: "eid158", tween: [ "style", "${_board0}", "opacity", '0', { fromValue: '1'}], position: 2864, duration: 250 },
                { id: "eid180", tween: [ "transform", "${_t}", "scaleY", '0.09', { fromValue: '0.1'}], position: 19434, duration: 373 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-7838920");
