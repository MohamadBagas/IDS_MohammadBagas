var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_KesesuaianTPA_0 = new ol.format.GeoJSON();
var features_KesesuaianTPA_0 = format_KesesuaianTPA_0.readFeatures(json_KesesuaianTPA_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KesesuaianTPA_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_KesesuaianTPA_0.addFeatures(features_KesesuaianTPA_0);var lyr_KesesuaianTPA_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KesesuaianTPA_0, 
                style: style_KesesuaianTPA_0,
    title: 'Kesesuaian TPA<br />\
    <img src="styles/legend/KesesuaianTPA_0_0.png" /> Tidak Sesuai<br />\
    <img src="styles/legend/KesesuaianTPA_0_1.png" /> Sesuai<br />\
    <img src="styles/legend/KesesuaianTPA_0_2.png" /> Sangat Sesuai<br />'
        });

lyr_KesesuaianTPA_0.setVisible(true);
var layersList = [baseLayer,lyr_KesesuaianTPA_0];
lyr_KesesuaianTPA_0.set('fieldAliases', {'TOTALBOBOT': 'TOTALBOBOT', });
lyr_KesesuaianTPA_0.set('fieldImages', {'TOTALBOBOT': 'TextEdit', });
lyr_KesesuaianTPA_0.set('fieldLabels', {'TOTALBOBOT': 'no label', });
lyr_KesesuaianTPA_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});