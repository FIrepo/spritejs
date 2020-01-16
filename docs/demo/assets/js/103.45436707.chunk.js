(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{553:function(n,o,r){"use strict";r.r(o),o.default="/* globals spritevue */\nconst Vue = spritevue.Vue;\n\nfunction randomColor() {\n  const r = Math.random() * 255 | 0,\n    g = Math.random() * 192 | 0,\n    b = Math.random() * 128 | 0;\n  return `rgb(${r},${g},${b})`;\n}\n\nVue.component('my-circle', {\n  props: [\n    'color',\n    'radius',\n    'x',\n    'y',\n  ],\n  methods: {\n    click() {\n      this.color = randomColor();\n    },\n  },\n  template: '<sprite anchor=\"0.5\" :x=\"x\" :y=\"y\" :size=\"[2*radius, 2*radius]\" :bgcolor=\"color\" :borderRadius=\"radius\" @click=\"click\"></sprite>',\n});\n\nnew Vue({\n  el: '#app',\n  data() {\n    return {\n      font: '48px Arial',\n      fillColor: '#f50',\n    };\n  },\n});"}}]);