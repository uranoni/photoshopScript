var PSD = require('psd');
var _ = require('lodash');
var psd = PSD.fromFile("./DaGG.psd");
psd.parse();


// psd.tree().descendants().reverse().forEach(function (layer) {
//     if (layer.name == 'yellow') {
//         layer.layer.image.saveAsPng("./yellow.png").catch(function (err) {
//             console.log(err.stack);
//         });
//     return;
//     }
// });


// var datapsd = _.find(psd1, { "type": "group"});
// console.log(datapsd);
// console.log(psd.tree().export());
// console.dir(psd.tree().export());

// console.log(JSON.stringify(psd.tree().export(), null, 4));
// console.log(psd.tree().childrenAtPath('A/B/C')[0].export());

// You can also use promises syntax for opening and parsing
// PSD.open("./DaGG.psd").then(function (psd) {
//   return psd.image.saveAsPng('./output.png');
// }).then(function () {
//   console.log("Finished!");
// });