// first Map
var myMap = L.map('map', {
  center: [37.57, -122.37],
  zoom: 8,
});

//////tile layer
L.tileLayer(
  'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
  {
    attribution:
      "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: 'mapbox/streets-v11',
    accessToken: API_KEY,
  },
).addTo(myMap)

// An array containing each pokemon name, location, and num
var cities = [
  {
    name: "Bulbasaur",
    num: "1",
    location: [37.3465338920111, -121.924866727642],
  },
  {
    name: "Bulbasaur",
    num: "1",
    location:[37.3527206573595 , -121.965751940536]
  },
  {
   name: "Bulbasaur",
   num: "1",
   location:[37.3869862080277 , -122.173673700417]
  },
  {
    name: "Bulbasaur",
    num: "1",
    location:[37.5625873270496 , -122.033978491223]
  },
  {
   name: "Bulbasaur",
   num: "1",
   location:[37.5771525641678 , -122.082546117707]
  },
  {
    name: "Bulbasaur",
    num: "1",
    location:[37.7176518624709 , -122.453225892647]
  },
  {
    name: "Bulbasaur",
    num: "1",
    location:[37.5116494692637 , -122.195046907195]
  },
  {
   name: "Bulbasaur",
   num: "1",
   location:[37.5116494692637 , -122.195046907195]
  },
  {
    name: "Bulbasaur",
    num: "1",
    location:[37.5158015270673 , -122.2801426615]
  },
  {
    name: "Bulbasaur",
    num: "1",
    location:[37.5158015270673 , -122.2801426615]
  },
  {
    name: "Bulbasaur",
     num: "1",
     location:[37.5116494692637 , -122.195046907195]
  },
  {
    name: "Magikarp",
    num: "129",
    location:[37.3172185926797 , -121.996583532953]
  },
  {
   name: "Magikarp",
   num: "129",
   location:[37.3650087105832 , -121.968595563008]
  },
  {
   name: "Magikarp",
   num: "129",
   location:[37.3650087105832 , -121.968595563008]
  },
  {
   name: "Magikarp",
   num: "129",
   location:[37.3689354838632 , -121.968773286964]
  },
  {
   name: "Magikarp",
   num: "129",
   location:[37.3878414552479 , -121.988765391774]
  },
  {
   name: "Magikarp",
   num: "129",
   location:[37.3963288457676 , -122.009908621339]
  },
  {
   name: "Magikarp",
   num: "129",
   location:[37.4364976679374 , -121.876406987156]
 },
 {
   name: "Magikarp",
    num: "129",
    location:[37.4364976679374 , -121.876406987156]
  },
  {
    name: "Squirtle",
    num: "7",
    location:[37.7259986792477 , -122.488515819695]
  },
  {
    name: "Squirtle",
    num: "7",
    location:[37.7635706638064 , -122.437832571742]
  }, 
  {
   name: "Squirtle",
   num: "7",
   location:[37.4743300876257 , -122.261090652168]
  },
  {
   name: "Squirtle",
   num: "7",
   location:[37.7093341611422 , -122.429161774901]
  },
  {
   name: "Squirtle",
   num: "7",
   location:[37.708861601107 , -122.402083043553]
  },
  {
   name: "Squirtle",
   num: "7",
   location:[37.708861601107 , -122.402083043553]
  },
  {
   name: "Squirtle",
   num: "7",
   location:[37.708861601107 , -122.402083043553]
  },
  {
   name: "Squirtle",
   num: "7",
   location:[37.7379844029389 , -122.495766908983]
  },
  {
    name: "Doduo",
    num: "84",
    location: [37.6720978775458, -122.64859678616],
  },
  {
    name: "Doduo",
    num: "84",
    location: [37.6715552355171, -122.650988136481],
  },
  {
    name: "Doduo",
    num: "84",
    location: [37.6715625145324, -122.707531922772],
  },
  {
    name: "Doduo",
    num: "84",
    location: [37.6720978775458, -122.64859678616],
  },
  {
    name: "Doduo",
    num: "84",
    location: [37.6715907345773, -122.806553670911],
  },
  {
    name: "Doduo",
    num: "84",
    location: [37.6719297270139, -122.656727772785],
  },
  {
    name: "Doduo",
    num: "84",
    location: [37.6727407031097, -122.656249448433],
  },
  {
    name: "Weedle",
    num: "13",
    location: [37.9118141192121, -122.566659472712],
  },
  {
    name: "Weedle",
    num: "13",
    location: [37.9118141192121, -122.566659472712],
  },
  {
    name: "Weedle",
    num: "13",
    location: [37.911993386399, -122.538732516834],
  },
  {
    name: "Weedle",
    num: "13",
    location: [37.911993386399, -122.538732516834],
  },
  {
    name: "Weedle",
    num: "13",
    location: [37.9118141192121, -122.566659472712],
  },
  {
    name: "Weedle",
    num: "13",
    location: [37.9118141192121, -122.566659472712],
  },
  {
    name: "Weedle",
    num: "13",
    location: [37.9130104558373, -122.557999385918],
  },
  {
    name: "Weedle",
    num: "13",
    location: [37.911993386399, -122.538732516834],
  },
  {
    name: "Weedle",
    num: "13",
    location: [37.911993386399, -122.538732516834],
  },
  {
    name: "Ekans",
    num: "23",
    location: [37.4027488122577, -121.927266931896],
  },
  {
    name: "Ekans",
    num: "23",
    location: [37.4033275595049, -121.932333857901],
  },
  {
    name: "Ekans",
    num: "23",
    location: [37.4040032911649, -121.932333857901],
  },
  {
    name: "Ekans",
    num: "23",
    location: [37.4027488122577, -121.927266931896],
  },
  {
    name: "Ekans",
    num: "23",
    location: [37.4033275595049, -121.932333857901],
  },
  {
    name: "Ekans",
    num: "23",
    location: [37.4025181636011, -121.932778313965],
  },
  {
    name: "Ekans",
    num: "23",
    location: [37.4035849224084, -121.921488573762],
  },
  {
    name: "Ekans",
    num: "23",
    location: [37.4035849224084, -121.921488573762],
  },
  {
   name: "Pidgey",
   num: "16",
   location:[37.7956444102582 , -122.407127649888]
  },
  {
   name: "Pidgey",
   num: "16",
   location:[37.301722611896 , -121.996139335361]
  },
  {
   name: "Pidgey",
   num: "16",
   location:[37.3014223782926 , -121.933667220706]
  },
  {
   name: "Pidgey",
   num: "16",
   location:[37.3033924301776 , -121.996583532953]
  },
  {
   name: "Pidgey",
   num: "16",
   location:[37.3033924301776 , -121.996583532953]
  },
  {
   name: "Pidgey",
   num: "16",
   location:[37.3038307744441 , -121.994629050049]
  },
  {
   name: "Pidgey",
   num: "16",
   location:[37.3012912117634 , -121.905307558681]
  },
  {
   name: "Pidgey",
   num: "16",
   location:[37.3019000594952 , -121.906285599546]
  },
  {
   name: "Pidgey",
   num: "16",
   location:[37.3011861309705 , -121.880586921895]
  },
  {
    name: "Pidgey",
    num: "16",
    location:[37.3026755375999 , -121.960508818319]
  },
  {
   name: "Paras",
   num: "46",
   location:[37.7594671892939 , -122.426241855456]
  },
  {
   name: "Paras",
   num: "46",
   location:[37.3020020643483 , -122.00893150341]
  },
  {
   name: "Paras",
   num: "46",
   location:[37.3023477353514 , -121.998804493847]
  },
  {
   name: "Paras",
   num: "46",
   location:[37.3015536150545 , -121.945488997183]
  },
  {
   name: "Paras",
   num: "46",
   location:[37.3010606780612 , -121.926111284528]
  },
  {
    name: "Paras",
    num: "46",
    location:[37.30112980683 , -121.949399680953]
  },
  {
    name: "Paras",
    num: "46",
    location:[37.3010467535836 , -121.955176572673]
  },
  {
   name: "Paras",
   num: "46",
   location:[37.3038431418437 , -121.975615440174]
  },
  {
   name: "Paras",
   num: "46",
   location:[37.3035176186482 , -121.982190613381]
  },
  {
    name: "Charizard",
    num: "6",
    location:[37.7875801874507 , -122.268002937872]
  },
  {
   name: "Charizard",
   num: "6",
   location:[37.8001910738275 , -122.202632437393]
  },
  {
    name: "Charizard",
    num: "6",
    location:[37.8001910738275 , -122.202632437393]
  },
  {
   name: "Charizard",
   num: "6",
   location:[37.8001910738275 , -122.202632437393]
  },
  {
    name: "Charizard",
    num: "6",
    location:[37.7106501768463 , -122.780824083645]
  },
  {
    name: "Charizard",
    num: "6",
    location:[37.7106501768463 , -122.780824083645]
  },
  {
   name: "Charizard",
   num: "6",
   location:[37.7709317432986 , -122.470739676855]
  },
  {
    name: "Charizard",
    num: "6",
    location:[37.7709317432986 , -122.470739676855]
  },
  {
  name: "Charizard",
  num: "6",
  location:[37.7709317432986 , -122.470739676855]
  },
  {
   name: "Charizard",
   num: "6",
   location:[37.7709317432986 , -122.470739676855]
  },
  {
    name: "Pikachu",
    num: "25",
    location:[37.7599126803964 , -122.422613963572]
  },
  {
    name: "Pikachu",
    num: "25",
    location:[37.30482331303 , -121.94886641409]
  },
  {
   name: "Pikachu",
   num: "25",
   location:[37.3046382560925 , -121.954732207177]
  },
  {
   name: "Pikachu",
   num: "25",
   location:[37.3046382560925 , -121.954732207177]
  },
  {
    name: "Pikachu",
    num: "25",
    location:[37.30482331303 , -121.94886641409]
  },
  {
    name: "Pikachu",
    num: "25",
    location:[37.3090217718019 , -121.895082066972]
  },
  {
    name: "Rattata",
    num: "19",
    location: [37.4042980792446, -121.911620215235],
  },
  {
    name: "Rattata",
    num: "19",
    location: [37.4042980792446, -121.911620215235],
  },
  {
    name: "Rattata",
    num: "19",
    location: [37.4040760022345, -121.878096767028],
  },
  {
    name: "Rattata",
    num: "19",
    location: [37.4054414256149, -122.012040484651],
  },
  {
    name: "Rattata",
    num: "19",
    location: [37.4045643526972, -121.874717181476],
  },
  {
    name: "Rattata",
    num: "19",
    location: [37.4047939473165, -121.988054623961],
  },
  {
    name: "Rattata",
    num: "19",
    location: [37.405231600273, -121.982368315286],
  },
  {
    name: "Rattata",
    num: "19",
    location: [37.4054571053502, -121.883254882748],
  },
  {
    name: "Rattata",
    num: "19",
    location: [37.4052361664373, -121.878986114488],
  },
  {
    name: "Rattata",
    num: "19",
    location: [37.4054571053502, -121.883254882748],
  },
  {
    name: "Rattata",
    num: "19",
    location: [37.4061743245653, -121.980235873389],
  },
  {
    name: "Rattata",
    num: "19",
    location: [37.407254649982, -121.963441442986],
  },
  {
    name: "Spearow",
    num: "21",
    location: [37.7936851176153, -122.400666970208],
  },
  {
    name: "Spearow",
    num: "21",
    location: [37.7939889162417, -122.475604096261],
  },
  {
    name: "Spearow",
    num: "21",
    location: [37.7936851176153, -122.400666970208],
  },
  {
    name: "Spearow",
    num: "21",
    location: [37.7939889162417, -122.475604096261],
  },
  {
    name: "Spearow",
    num: "21",
    location: [37.7934645210571, -122.416154235976],
  },
  {
    name: "Spearow",
    num: "21",
    location: [37.793791624348, -122.451368198104],
  },
  {
    name: "Spearow",
    num: "21",
    location: [37.7908362397806, -122.405092136106],
  },
  {
    name: "Spearow",
    num: "21",
    location: [37.79430946935, -122.420667238187],
  },
  {
    name: "Spearow",
    num: "21",
    location: [37.7947802368501, -122.396861178639],
  },
  {
    name: "Spearow",
    num: "21",
    location: [37.79430946935, -122.420667238187],
  },
  {
    name: "Spearow",
    num: "21",
    location: [37.7947802368501, -122.396861178639],
  },
  {
   name: "Jigglypuff",
   num: "39",
   location:[37.3189334964236 , -122.007599055783]
  },
  {
   name: "Jigglypuff",
   num: "39",
   location:[37.3189334964236 , -122.007599055783]
  },
  {
   name: "Jigglypuff",
   num: "39",
   location:[37.3313716134252 , -121.979525050195]
  },
  {
   name: "Jigglypuff",
   num: "39",
    ocation:[37.3489231705154 , -121.921666373918]
  },
  {
    name: "Jigglypuff",
    num: "39",
    location:[37.4259678922444 , -121.878719311001]
  },
  {
   name: "Jigglypuff",
   num: "39",
   location:[37.4259678922444 , -121.878719311001]
  },
  {
   name: "Jigglypuff",
    num: "39",
    location:[37.3786230900332 , -122.165158707614]
  },
  {
   name: "Jigglypuff",
   num: "39",
   location:[37.3729999196017 , -122.124082149847]
  },
  {
    name: "Zubat",
    num: "41",
    location: [37.4996811372549, -122.267028155511],
  },
  {
    name: "Zubat",
    num: "41",
    location: [37.4989828042327, -122.252139462354],
  },
  {
    name: "Zubat",
    num: "41",
    location: [37.498696096645, -122.267559856086],
  },
  {
    name: "Zubat",
    num: "41",
    location: [37.5005066829578, -122.285901900038],
  },
  {
    name: "Zubat",
    num: "41",
    location: [37.5005066829578, -122.285901900038],
  },
  {
    name: "Zubat",
    num: "41",
    location: [37.4996811372549, -122.267028155511],
  },
  {
    name: "Zubat",
    num: "41",
    location: [37.4996811372549, -122.267028155511],
  },
  {
    name: "Zubat",
    num: "41",
    location: [37.5009423475914, -122.249391916785],
  },
  {
    name: "Zubat",
    num: "41",
    location: [37.4989828042327, -122.252139462354],
  },
  {
    name: "Zubat",
    num: "41",
    location: [37.5005066829578, -122.285901900038],
  },
  {
    name: "Zubat",
    num: "41",
    location: [37.5005066829578, -122.285901900038],
  },
  {
    name: "Zubat",
    num: "41",
    location: [37.5006392913836, -122.253823406921],
  },
  {
    name: "Zubat",
    num: "41",
    location: [37.5009423475914, -122.249391916785],
  },
  {
   name: "Eevee",
   num:  "133",
   location:[37.3018516523334 , -121.950999466008]
  },
  {
   name: "Eevee",
   num:  "133",
   location:[37.3039650667766 , -122.000670066129]
  },
  {
    name: "Eevee",
    num:  "133",
    location:[37.3041620679794 , -121.99302990169]
  },
  {
    name: "Eevee",
    num:  "133",
    location:[37.3060333211293 , -121.980324725963]
  },
  {
    name: "Eevee",
    num:  "133",
    location:[37.3060333211293 , -121.980324725963]
  },
  {
  name: "Eevee",
  num:  "133",
  location:[37.3087932835169 , -121.910375494656]
  },
  {
   name: "Eevee",
   num:  "133",
   location:[37.3087494338461 , -121.887968122912]
  },
  {
   name: "Eevee",
   num:  "133",
   location:[37.3139267271658 , -121.959086911477]
  },
  {
   name: "Eevee",
   num:  "133",
   location:[37.3181053195387 , -122.005111776722]
  },
  {
   name: "Eevee",
   num:  "133",
   location:[37.3181053195387 , -122.005111776722]
  },
  {
   name: "Eevee",
   num:  "133",
   location:[37.3187388538319 , -121.944333541251]
  },
  {
    name: "Psyduck",
    num:  "54",
    location:[37.4403384200579 , -121.991608416855]
  },
  {
    name: "Psyduck",
    num:  "54",
    location:[37.4401654929054 , -121.958820301893]
  },
  {
   name: "Psyduck",
   num:  "54",
   location:[37.4986916611599 , -121.992052632851]
  },
  {
    name: "Psyduck",
    num:  "54",
    location:[37.5053122200691 , -122.081214571097]
  },
  {
   name: "Psyduck",
   num:  "54",
   location:[37.5257119884846 , -121.993651795497]
  },
  {
   name: "Psyduck",
   num:  "54",
   location:[37.5297759433383 , -121.998804493847]
  },
  {
   name: "Psyduck",
   num:  "54",
   location:[37.5381651543244 , -121.992852217096]
  },
  {
   name: "Psyduck",
   num:  "54",
   location:[37.5466043129203 , -121.961397500738]
  },
  {
    name: "Psyduck",
    num:  "54",
    location:[37.5889145815939 , -122.082989962944]
  },
  {
    name: "Psyduck",
    num:  "54",
    location:[37.5889145815939 , -122.082989962944]
  },
  {
   name: "Eevee",
   num:  "133",
   location:[37.3519945142057 , -121.904685164526]
  },
];

////name and num add it to the map
for (var i = 0; i < cities.length; i++) {
  var city = cities[i]
  L.marker(city.location)
    .bindPopup("<h2>" + city.name + "</h2> <h2>num " + city.num + "</h2>")
    .addTo(myMap)
}
