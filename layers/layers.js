var wms_layers = [];


        var lyr_OpenStreetMapmonochrome_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap monochrome',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png'
            })
        });

    var projection_PNOA_1 = ol.proj.get('EPSG:3857');
    var projectionExtent_PNOA_1 = projection_PNOA_1.getExtent();
    var size_PNOA_1 = ol.extent.getWidth(projectionExtent_PNOA_1) / 256;
    var resolutions_PNOA_1 = new Array(14);
    var matrixIds_PNOA_1 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_PNOA_1[z] = size_PNOA_1 / Math.pow(2, z);
        matrixIds_PNOA_1[z] = z;
    }
    var lyr_PNOA_1 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                              url: "http://www.ign.es/wmts/pnoa-ma",
    attributions: ' ',
                                "layer": "OI.OrthoimageCoverage",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/jpeg',
              projection: projection_PNOA_1,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_PNOA_1),
                resolutions: resolutions_PNOA_1,
                matrixIds: matrixIds_PNOA_1
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: "PNOA",
                            opacity: 1.0,
                            
                            
                          });

    var projection_CartografadelIGN_2 = ol.proj.get('EPSG:3857');
    var projectionExtent_CartografadelIGN_2 = projection_CartografadelIGN_2.getExtent();
    var size_CartografadelIGN_2 = ol.extent.getWidth(projectionExtent_CartografadelIGN_2) / 256;
    var resolutions_CartografadelIGN_2 = new Array(14);
    var matrixIds_CartografadelIGN_2 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_CartografadelIGN_2[z] = size_CartografadelIGN_2 / Math.pow(2, z);
        matrixIds_CartografadelIGN_2[z] = z;
    }
    var lyr_CartografadelIGN_2 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                              url: "http://www.ign.es/wmts/mapa-raster",
    attributions: ' ',
                                "layer": "MTN",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/jpeg',
              projection: projection_CartografadelIGN_2,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_CartografadelIGN_2),
                resolutions: resolutions_CartografadelIGN_2,
                matrixIds: matrixIds_CartografadelIGN_2
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: "Cartografía del IGN",
                            opacity: 1.0,
                            
                            
                          });
var format_Provincias_3 = new ol.format.GeoJSON();
var features_Provincias_3 = format_Provincias_3.readFeatures(json_Provincias_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Provincias_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Provincias_3.addFeatures(features_Provincias_3);
var lyr_Provincias_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Provincias_3, 
                style: style_Provincias_3,
                interactive: false,
                title: '<img src="styles/legend/Provincias_3.png" /> Provincias'
            });
var format_TORRESINCENDIOS_4 = new ol.format.GeoJSON();
var features_TORRESINCENDIOS_4 = format_TORRESINCENDIOS_4.readFeatures(json_TORRESINCENDIOS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TORRESINCENDIOS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TORRESINCENDIOS_4.addFeatures(features_TORRESINCENDIOS_4);
var lyr_TORRESINCENDIOS_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TORRESINCENDIOS_4, 
                style: style_TORRESINCENDIOS_4,
                interactive: true,
                title: '<img src="styles/legend/TORRESINCENDIOS_4.png" /> TORRES INCENDIOS'
            });

lyr_OpenStreetMapmonochrome_0.setVisible(true);lyr_PNOA_1.setVisible(true);lyr_CartografadelIGN_2.setVisible(true);lyr_Provincias_3.setVisible(true);lyr_TORRESINCENDIOS_4.setVisible(true);
var layersList = [lyr_OpenStreetMapmonochrome_0,lyr_PNOA_1,lyr_CartografadelIGN_2,lyr_Provincias_3,lyr_TORRESINCENDIOS_4];
lyr_Provincias_3.set('fieldAliases', {'ID': 'ID', 'CODINE': 'CODINE', 'NOMBRE': 'NOMBRE', });
lyr_TORRESINCENDIOS_4.set('fieldAliases', {'TORRE': 'TORRE', 'PROVINCIA': 'PROVINCIA', 'ID': 'ID', 'X_25830': 'X_25830', 'Y_25830': 'Y_25830', });
lyr_Provincias_3.set('fieldImages', {'ID': 'TextEdit', 'CODINE': 'TextEdit', 'NOMBRE': 'TextEdit', });
lyr_TORRESINCENDIOS_4.set('fieldImages', {'TORRE': 'TextEdit', 'PROVINCIA': 'TextEdit', 'ID': 'TextEdit', 'X_25830': 'TextEdit', 'Y_25830': 'TextEdit', });
lyr_Provincias_3.set('fieldLabels', {'ID': 'no label', 'CODINE': 'no label', 'NOMBRE': 'no label', });
lyr_TORRESINCENDIOS_4.set('fieldLabels', {'TORRE': 'header label', 'PROVINCIA': 'no label', 'ID': 'no label', 'X_25830': 'header label', 'Y_25830': 'header label', });
lyr_TORRESINCENDIOS_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});