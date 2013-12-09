function slide_selectors(){
    boxCodeFactory({
        id:"selectors_example",
        type:"html"
    });
}
function slide_ways_to_use(){
    boxCodeFactory({
        id:"ways_external",
        type:"html"
    });
    var html = document.getElementById("ways_internal").innerHTML;
    boxCodeFactory({
        id:"ways_internal",
        code:"<head>\n"+html+"\n</head>",
        fontSize:18,
        type:"html"
    });    
    boxCodeFactory({
        id:"ways_inline",
        type:"html"
    });
}
function slide_cascading_order(){
    boxCodeFactory({
        id:"cascading_order_important"
    });
}
function slide_non_conflicted(){
    boxCodeFactory({
        id:"seventh_css",
        fontSize:24
    });
    boxCodeFactory({
        id:"seventh_combined",
        fontSize:24
    });
}
function slide_border_radius(){
    boxCodeFactory({
        id:"border_radius_simple",
        fontSize:24
    });
    boxCodeFactory({
        id:"border_radius_individual",
        fontSize:24
    });  
}
function slide_short_hands(){
    boxCodeFactory({
        id:"short_hands_1"
    });
    boxCodeFactory({
        id:"short_hands_2"
    });
    boxCodeFactory({
        id:"short_hands_3"
    });
    boxCodeFactory({
        id:"short_hands_4"
    });
}
function slide_border_example(){
    boxCodeFactory({
        id:"border_example_syntax",
        type:"text"
    });
    boxCodeFactory({
        id:"border_example_4"
    });
    boxCodeFactory({
        id:"border_example_3"
    });
    boxCodeFactory({
        id:"border_example_2"
    });
    boxCodeFactory({
        id:"border_example_1"
    });
}
function slide_border_radius_example(){
    boxCodeFactory({
        id:"bre_syntax",
        type:"text"
    });
    boxCodeFactory({
        id:"bre_4"
    });
    boxCodeFactory({
        id:"bre_3"
    });
    boxCodeFactory({
        id:"bre_2"
    });
    boxCodeFactory({
        id:"bre_1"
    });
}
function slide_last_example(){
    boxCodeFactory({
        id:"last_example_1"
    });
    boxCodeFactory({
        id:"last_example_2"
    });
}
function slide_calculating_box(){
    boxCodeFactory({
        id:"calculating_box_style"
    });
    boxCodeFactory({
        id:"box_calculated",
        type:"text"
    });
}
function slide_box_shadow(){
    boxCodeFactory({
        id:"box_shadow_syntax",
        type:"text"
    });
    boxCodeFactory({
        id:"box_shadow_sample"        
    });
}
function slide_text_shadow(){
    boxCodeFactory({
        id:"text_shadow_syntax",
        type:"text"
    });
    boxCodeFactory({
        id:"text_shadow_sample"        
    });
}
function slide_background_property(){
    boxCodeFactory({
        id:"background_property_sample"
    });
}
function slide_font_face(){
    boxCodeFactory({
        id:"font_face_code"
    });
}
function slide_transforms(){
    var boxes = [
        "transforms_positioning",
        "transforms_rotating",
        "transforms_scaling",
        "transforms_skewing"
    ];
    for(var i=0;i<boxes.length;i++){
        boxCodeFactory({
            id:boxes[i],
            fontSize:18
        });
    }
}
function slide_transitions(){
    boxCodeFactory({
        id:"transitions_syntax",
        type:"text"
    });
    boxCodeFactory({
        id:"transitions_meaning",
        type:"text"
    });
    boxCodeFactory({
        id:"transitions_example"
    });
}
function slide_rgba_color(){
    boxCodeFactory({
        id:"rgba_color_syntax",
        type:"text"
    });
    boxCodeFactory({
        id:"rgba_color_where",
        type:"text"
    });
}
function slide_rgba_example(){
    boxCodeFactory({
        id:"rgba_example_red"
    });
    boxCodeFactory({
        id:"rgba_example_green"
    });
    boxCodeFactory({
        id:"rgba_example_blue"
    });    
}
function slide_hsla_color(){
    boxCodeFactory({
        id:"hsla_color_syntax",
        type:"text"
    });
    boxCodeFactory({
        id:"hsla_color_where",
        type:"text"
    });
    boxCodeFactory({
        id:"hsla_color_example"
    });
}
function slide_keyframes(){
    boxCodeFactory({
        id:"keyframes_simple",
        type:"text"
    });
}
function slide_animation_example(){
    boxCodeFactory({
        id:"animation_example_code",
        type:"html"
    });
}
/**
 * Crea un editor de codigo (ACE Code Editor) embebido en la pagina.
 * Espera como parametro a un objeto (options) con las siguientes propiedades:
 * id       - ID del elemento a asignar el editor (Unico requerido)
 * type     - Tipo de sintaxis a resaltar. Default: css
 * fontSize - Tamaño de la fuente. Default: 24
 * code     - Lectura de codigo que se va a insertar en el. Default: toma el content del elemento
 * @param {object} options
 * @returns {void}
 */
function boxCodeFactory(options){
    var defaultOptions = {
        type: "css",
        fontSize:20
    };    
    if (typeof options === 'object') {
        options = $.extend(defaultOptions, options);
    } else {
        options = defaultOptions;
    }   
    if(options.id){
        var html = (options.code)?options.code:document.getElementById(options.id).innerHTML;
        var elemento = ace.edit(options.id);
        elemento.setTheme("ace/theme/monokai");
        elemento.session.setMode("ace/mode/"+options.type);
        elemento.session.setValue(html);
        elemento.setFontSize(options.fontSize);
    }else{
        console.log("No se ha definido un #ID: {id='something'}");
    }
}