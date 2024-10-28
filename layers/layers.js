ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([8575182.330019, 936100.742327, 8586666.064530, 942165.285725]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_geomorphologyclip_1 = new ol.format.GeoJSON();
var features_geomorphologyclip_1 = format_geomorphologyclip_1.readFeatures(json_geomorphologyclip_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_geomorphologyclip_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_geomorphologyclip_1.addFeatures(features_geomorphologyclip_1);
var lyr_geomorphologyclip_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_geomorphologyclip_1, 
                style: style_geomorphologyclip_1,
                popuplayertitle: "geomorphology clip",
                interactive: true,
    title: 'geomorphology clip<br />\
    <img src="styles/legend/geomorphologyclip_1_0.png" /> Linear ridge(Lower Plateau)<br />\
    <img src="styles/legend/geomorphologyclip_1_1.png" /> Lower Plateau (Lateritic) - Dissected<br />\
    <img src="styles/legend/geomorphologyclip_1_2.png" /> Residual Mount<br />\
    <img src="styles/legend/geomorphologyclip_1_3.png" /> Valley Fill<br />\
    <img src="styles/legend/geomorphologyclip_1_4.png" /> Water Body<br />\
    <img src="styles/legend/geomorphologyclip_1_5.png" /> <br />'
        });
var format_Neyyattinkara_2 = new ol.format.GeoJSON();
var features_Neyyattinkara_2 = format_Neyyattinkara_2.readFeatures(json_Neyyattinkara_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Neyyattinkara_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Neyyattinkara_2.addFeatures(features_Neyyattinkara_2);
var lyr_Neyyattinkara_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Neyyattinkara_2, 
                style: style_Neyyattinkara_2,
                popuplayertitle: "Neyyattinkara",
                interactive: true,
                title: '<img src="styles/legend/Neyyattinkara_2.png" /> Neyyattinkara'
            });
var format_drainageclip_3 = new ol.format.GeoJSON();
var features_drainageclip_3 = format_drainageclip_3.readFeatures(json_drainageclip_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_drainageclip_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_drainageclip_3.addFeatures(features_drainageclip_3);
var lyr_drainageclip_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_drainageclip_3, 
                style: style_drainageclip_3,
                popuplayertitle: "drainage clip",
                interactive: true,
                title: '<img src="styles/legend/drainageclip_3.png" /> drainage clip'
            });
var format_junctionclip_4 = new ol.format.GeoJSON();
var features_junctionclip_4 = format_junctionclip_4.readFeatures(json_junctionclip_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_junctionclip_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_junctionclip_4.addFeatures(features_junctionclip_4);
var lyr_junctionclip_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_junctionclip_4, 
                style: style_junctionclip_4,
                popuplayertitle: "junction clip",
                interactive: true,
                title: '<img src="styles/legend/junctionclip_4.png" /> junction clip'
            });
var format_railwayclip_5 = new ol.format.GeoJSON();
var features_railwayclip_5 = format_railwayclip_5.readFeatures(json_railwayclip_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_railwayclip_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_railwayclip_5.addFeatures(features_railwayclip_5);
var lyr_railwayclip_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_railwayclip_5, 
                style: style_railwayclip_5,
                popuplayertitle: "railway clip",
                interactive: true,
                title: '<img src="styles/legend/railwayclip_5.png" /> railway clip'
            });
var format_road_6 = new ol.format.GeoJSON();
var features_road_6 = format_road_6.readFeatures(json_road_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_road_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_road_6.addFeatures(features_road_6);
var lyr_road_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_road_6, 
                style: style_road_6,
                popuplayertitle: "road",
                interactive: true,
                title: '<img src="styles/legend/road_6.png" /> road'
            });
var format_placesnew_7 = new ol.format.GeoJSON();
var features_placesnew_7 = format_placesnew_7.readFeatures(json_placesnew_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_placesnew_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_placesnew_7.addFeatures(features_placesnew_7);
var lyr_placesnew_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_placesnew_7, 
                style: style_placesnew_7,
                popuplayertitle: "places new",
                interactive: true,
                title: '<img src="styles/legend/placesnew_7.png" /> places new'
            });

lyr_OSMStandard_0.setVisible(true);lyr_geomorphologyclip_1.setVisible(true);lyr_Neyyattinkara_2.setVisible(true);lyr_drainageclip_3.setVisible(true);lyr_junctionclip_4.setVisible(true);lyr_railwayclip_5.setVisible(true);lyr_road_6.setVisible(true);lyr_placesnew_7.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_geomorphologyclip_1,lyr_Neyyattinkara_2,lyr_drainageclip_3,lyr_junctionclip_4,lyr_railwayclip_5,lyr_road_6,lyr_placesnew_7];
lyr_geomorphologyclip_1.set('fieldAliases', {'NAME': 'NAME', 'TYPE1': 'TYPE1', 'TYPE2': 'TYPE2', });
lyr_Neyyattinkara_2.set('fieldAliases', {'admin_level': 'admin_level', 'boundary': 'boundary', 'local_authority:IN': 'local_authority:IN', 'name': 'name', 'name:ml': 'name:ml', 'type': 'type', 'wikidata': 'wikidata', });
lyr_drainageclip_3.set('fieldAliases', {'ORDER1': 'ORDER1', });
lyr_junctionclip_4.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'PLACE_NAME': 'PLACE_NAME', 'PLACE_NA_1': 'PLACE_NA_1', 'THIRUVANAN': 'THIRUVANAN', 'THIRUVAN_1': 'THIRUVAN_1', 'PLACE_NA_2': 'PLACE_NA_2', 'PLACE_NA_3': 'PLACE_NA_3', 'SETNAME': 'SETNAME', 'POLYGONID': 'POLYGONID', 'SCALE': 'SCALE', 'ANGLE': 'ANGLE', 'POLYGONI_1': 'POLYGONI_1', 'SCALE_1': 'SCALE_1', 'ANGLE_1': 'ANGLE_1', 'LAT0': 'LAT0', 'LONG': 'LONG', });
lyr_railwayclip_5.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'type': 'type', });
lyr_road_6.set('fieldAliases', {'NAME': 'NAME', 'Length': 'Length', });
lyr_placesnew_7.set('fieldAliases', {'id': 'id', 'name': 'name', 'IMAGE': 'IMAGE', });
lyr_geomorphologyclip_1.set('fieldImages', {'NAME': 'TextEdit', 'TYPE1': 'TextEdit', 'TYPE2': 'TextEdit', });
lyr_Neyyattinkara_2.set('fieldImages', {'admin_level': 'TextEdit', 'boundary': 'TextEdit', 'local_authority:IN': 'TextEdit', 'name': 'TextEdit', 'name:ml': 'TextEdit', 'type': 'TextEdit', 'wikidata': 'TextEdit', });
lyr_drainageclip_3.set('fieldImages', {'ORDER1': 'Range', });
lyr_junctionclip_4.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'PLACE_NAME': 'Range', 'PLACE_NA_1': 'Range', 'THIRUVANAN': 'TextEdit', 'THIRUVAN_1': 'TextEdit', 'PLACE_NA_2': 'Range', 'PLACE_NA_3': 'Range', 'SETNAME': 'TextEdit', 'POLYGONID': 'Range', 'SCALE': 'TextEdit', 'ANGLE': 'TextEdit', 'POLYGONI_1': 'Range', 'SCALE_1': 'TextEdit', 'ANGLE_1': 'TextEdit', 'LAT0': 'TextEdit', 'LONG': 'TextEdit', });
lyr_railwayclip_5.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', });
lyr_road_6.set('fieldImages', {'NAME': 'TextEdit', 'Length': 'TextEdit', });
lyr_placesnew_7.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'IMAGE': 'ExternalResource', });
lyr_geomorphologyclip_1.set('fieldLabels', {'NAME': 'no label', 'TYPE1': 'no label', 'TYPE2': 'no label', });
lyr_Neyyattinkara_2.set('fieldLabels', {'admin_level': 'no label', 'boundary': 'no label', 'local_authority:IN': 'no label', 'name': 'no label', 'name:ml': 'no label', 'type': 'no label', 'wikidata': 'no label', });
lyr_drainageclip_3.set('fieldLabels', {'ORDER1': 'no label', });
lyr_junctionclip_4.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'PLACE_NAME': 'no label', 'PLACE_NA_1': 'no label', 'THIRUVANAN': 'no label', 'THIRUVAN_1': 'no label', 'PLACE_NA_2': 'no label', 'PLACE_NA_3': 'no label', 'SETNAME': 'no label', 'POLYGONID': 'no label', 'SCALE': 'no label', 'ANGLE': 'no label', 'POLYGONI_1': 'no label', 'SCALE_1': 'no label', 'ANGLE_1': 'no label', 'LAT0': 'no label', 'LONG': 'no label', });
lyr_railwayclip_5.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'type': 'no label', });
lyr_road_6.set('fieldLabels', {'NAME': 'no label', 'Length': 'no label', });
lyr_placesnew_7.set('fieldLabels', {'id': 'no label', 'name': 'inline label - always visible', 'IMAGE': 'no label', });
lyr_placesnew_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});