class ColorPalette {
    constructor(name, backgroundColor, secondaryBackgroundColor, textColor) {
        this.name = name;
        this.backgroundColor = backgroundColor;
        this.secondaryBackgroundColor = secondaryBackgroundColor;
        this.textColor = textColor;
    }
}
let colorPalettes = [
    new ColorPalette("light", '#fafafa', '#d2d3db', 'black'),
    new ColorPalette("dark", '#424242', '#5f5f5f', '#fafafa'),
    new ColorPalette("voltage warning", '#1c1412', '#635650', '#d3ae21'),
    new ColorPalette("cute", '#e6a1cf', '#ffe6ea', '#131626')
];
let colorPaletteIndex;
if (localStorage.getItem("colorIndex") == null || localStorage.getItem("colorIndex") > colorPalettes.length) {
    colorPaletteIndex = 0;
    localStorage.setItem("colorIndex", colorPaletteIndex);
} else {
    colorPaletteIndex = localStorage.getItem("colorIndex");
}
SetColors();
let sectionsArray = [
    $('#aboutme'),
    $('#projects'),
    $('#blogs'),
    $('#contacts')
];
HideObjectsInArray(sectionsArray);
$('#aboutme').show();
$('.dontignore').click(function(){
    $('button').addClass('notonpage');
    $('button').removeClass('onpage');
    $(this).addClass('onpage');
    $(this).removeClass('notonpage');
    $('.ignore').removeClass('notonpage onpage');
});
function ShowSection(toShow) {
    HideObjectsInArray(sectionsArray);
    $(toShow).fadeIn(750);
}
function ChangeColorMode() {
    colorPaletteIndex++;
    if (colorPaletteIndex >= colorPalettes.length) {
        colorPaletteIndex = 0;
    }
    localStorage.setItem("colorIndex", colorPaletteIndex);
    SetColors();
}
function SetColors() {
    document.documentElement.style.setProperty('--clr-bg', colorPalettes[colorPaletteIndex].backgroundColor);
    document.documentElement.style.setProperty('--clr-secbg', colorPalettes[colorPaletteIndex].secondaryBackgroundColor);
    document.documentElement.style.setProperty('--clr-text', colorPalettes[colorPaletteIndex].textColor);
}