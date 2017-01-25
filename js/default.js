var mymap = L.map('mapid',{ zoomControl: false}).setView([40.661572, -73.965682], 11);
var measureControl = new L.Control.Measure({ position: 'topleft'});
measureControl.addTo(mymap);


L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibmlzaGlzb250YWtrZSIsImEiOiJjaXJlZ2s1d3YwMDJkZ2VuZWdmMmFyeW83In0.1yG3I_LYkWVmkSwOhmWvSQ', {
    attribution: 'Powered by <a href="http://www.geospoc.com">GeoSpoc</a>|Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'your.mapbox.project.id',
    accessToken: 'your.mapbox.public.access.token'
}).addTo(mymap);

//add zoom control with your options
L.control.zoom({
     position:'bottomleft'
}).addTo(mymap);

L.esri.Heat.featureLayer({
    url: 'https://services.arcgis.com/rOo16HdIMeOBI4Mb/ArcGIS/rest/services/Graffiti_Reports/FeatureServer/0',
    radius: 14,
    gradient: {
      0.2: '#ffffb2',
      0.4: '#fd8d3c',
      0.6: '#fd8d3c',
      0.8: '#f03b20',
      1: '#bd0026'
    }
  }).addTo(mymap);

 var layer = L.esri.basemapLayer('Topographic').addTo(mymap);
 var layerLabels;

  function setBasemap(basemap) {
    if (layer) {
      mymap.removeLayer(layer);
    }

    layer = L.esri.basemapLayer(basemap);

    mymap.addLayer(layer);

    if (layerLabels) {
      mymap.removeLayer(layerLabels);
    }

    if (basemap === 'ShadedRelief'
     || basemap === 'Oceans'
     || basemap === 'Gray'
     || basemap === 'DarkGray'
     || basemap === 'Imagery'
     || basemap === 'Terrain'
   ) {
      layerLabels = L.esri.basemapLayer(basemap + 'Labels');
      mymap.addLayer(layerLabels);
    }
  }

  function changeBasemap(basemaps){
    var basemap = basemaps.value;
    setBasemap(basemap);
  }
/**!
 * easyPieChart
 * Lightweight plugin to render simple, animated and retina optimized pie charts
 *
 * @license Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 * @author Robert Fleischmann <rendro87@gmail.com> (http://robert-fleischmann.de)
 * @version 2.0.1
 **/
!function(){var a=function(a,b){var c=document.createElement("canvas");"undefined"!=typeof G_vmlCanvasManager&&G_vmlCanvasManager.initElement(c);var d=c.getContext("2d");if(c.width=c.height=b.size,a.appendChild(c),window.devicePixelRatio>1){var e=window.devicePixelRatio;c.style.width=c.style.height=[b.size,"px"].join(""),c.width=c.height=b.size*e,d.scale(e,e)}d.translate(b.size/2,b.size/2),d.rotate((-0.5+b.rotate/180)*Math.PI);var f=(b.size-b.lineWidth)/2;b.scaleColor&&b.scaleLength&&(f-=b.scaleLength+2);var g=function(a,b,c){c=Math.min(Math.max(0,c||1),1),d.beginPath(),d.arc(0,0,f,0,2*Math.PI*c,!1),d.strokeStyle=a,d.lineWidth=b,d.stroke()},h=function(){var a,c,e=24;d.lineWidth=1,d.fillStyle=b.scaleColor,d.save();for(var e=24;e>=0;--e)0===e%6?(c=b.scaleLength,a=0):(c=.6*b.scaleLength,a=b.scaleLength-c),d.fillRect(-b.size/2+a,0,c,1),d.rotate(Math.PI/12);d.restore()};Date.now=Date.now||function(){return+new Date};var i=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(a){window.setTimeout(a,1e3/60)}}();this.clear=function(){d.clearRect(b.size/-2,b.size/-2,b.size,b.size)},this.draw=function(a){this.clear(),b.scaleColor&&h(),b.trackColor&&g(b.trackColor,b.lineWidth),d.lineCap=b.lineCap;var c;c="function"==typeof b.barColor?b.barColor(a):b.barColor,a>0&&g(c,b.lineWidth,a/100)}.bind(this),this.animate=function(a,c){var d=Date.now();b.onStart(a,c);var e=function(){var f=Math.min(Date.now()-d,b.animate),g=b.easing(this,f,a,c-a,b.animate);this.draw(g),b.onStep(a,c,g),f>=b.animate?b.onStop(a,c):i(e)}.bind(this);i(e)}.bind(this)},b=function(b,c){var d,e={barColor:"#ef1e25",trackColor:"#f9f9f9",scaleColor:"#dfe0e0",scaleLength:5,lineCap:"round",lineWidth:3,size:110,rotate:0,animate:1e3,renderer:a,easing:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},onStart:function(){},onStep:function(){},onStop:function(){}},f={},g=0,h=function(){this.el=b,this.options=f;for(var a in e)e.hasOwnProperty(a)&&(f[a]=c&&"undefined"!=typeof c[a]?c[a]:e[a],"function"==typeof f[a]&&(f[a]=f[a].bind(this)));f.easing="string"==typeof f.easing&&"undefined"!=typeof jQuery&&jQuery.isFunction(jQuery.easing[f.easing])?jQuery.easing[f.easing]:e.easing,d=new f.renderer(b,f),d.draw(g),b.dataset&&b.dataset.percent&&this.update(parseInt(b.dataset.percent,10))}.bind(this);this.update=function(a){return a=parseInt(a,10),f.animate?d.animate(g,a):d.draw(a),g=a,this}.bind(this),h()};window.EasyPieChart=b}();

var options = {
  scaleColor: false,
  trackColor: 'rgba(174,224,240,0.3)',
  barColor: '#15bdf4',
  lineWidth: 6,
  lineCap: 'butt',
  size: 95
};

window.addEventListener('DOMContentLoaded', function() {
  var charts = [];
  [].forEach.call(document.querySelectorAll('.chart'),  function(el) {
    charts.push(new EasyPieChart(el, options));
  });
});
/*menu button*/

function MButton(el){
  var _this = this;
  _this.el = el;
  _this.ripples = {};
  _this.rippleCount = 0;
  _this.rippleWrapper = _this.el.querySelector('ripples');
}

MButton.prototype.makeRipple = function (offset, size, id){
  var _this = this;
  var ripple = document.createElement('ripple');
  ripple.style.left = offset.x + 'px';
  ripple.style.top = offset.y + 'px';
  ripple.style.height = size + 'px';
  ripple.style.width = size + 'px';
  ripple.style.margin = size/-2 + 'px';
  function release() {
    ripple.style.transform = 'scale(1.11)';
    ripple.addEventListener('transitionend', function(){
      ripple.style.opacity = '0'; 
      this.addEventListener('transitionend', function(){
        _this.ripples[id].remove();
      });
    }); 
  }
  setTimeout(function(){
    ripple.style.transform = 'scale(1.1)';
    _this.el.addEventListener('mouseup', release);
    _this.el.addEventListener('mouseleave', release);
  },0);
  return ripple;
}

MButton.prototype.mouseDown = function (e){
  var _this = this;
  var height = e.target.clientHeight;
  var width = e.target.clientWidth;
  var size = Math.max(height,width);
  var offset = {
    x: e.offsetX || e.layerX,
    y: e.offsetY || e.layerY
  };
  var sX = Math.abs(size/2 - offset.x)*2;
  var sY = Math.abs(size/2 - offset.y)*2;
  size += Math.max(sX,sY);
  var id = ++_this.rippleCount;
  _this.ripples[id] = _this.makeRipple(offset,size, id);
  _this.rippleWrapper.appendChild(_this.ripples[id]);
  _this.el.classList.toggle('selected');
}

var mButtons = document.querySelectorAll('m-button');
var forEach = [].forEach;

forEach.call(mButtons, function(el,i){
  var mButton = new MButton(el);
  function mouseDown(e){
    mButton.mouseDown(e);
  }
  el.addEventListener('mousedown', mouseDown);
});


$(document).ready(function () {

  $("body").tooltip({   
    selector: "[data-toggle='tooltip']",
    container: "body"
  })
});

$(function(){
    $('#edit').popover({
       
        placement: 'bottom',
        title: 'Popover Form',
        html:true,
        content:  $('#myForm').html()
    })
  });

function popUp(f,l){
    var out = [];
    if (f.properties){
        for(key in f.properties){
            out.push(key+": "+f.properties[key]);
        }
        l.bindPopup(out.join("<br />"));
    }
}
var jsonTest = new L.GeoJSON.AJAX(["county.geojson"],{onEachFeature:popUp}).addTo(mymap);
/*var jsonTest1 = L.geoJson.ajax(["lulc.geojson"],{onEachFeature:popUp});*/
var overlays={
"County Boundaries":jsonTest,
/*"json1":jsonTest1*/
}

var lc=L.control.layers(overlays);
lc.addTo(mymap);

 $("#addmarker").draggable({
      handle: ".modal-header"
  });