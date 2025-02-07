var Color;
(function (Color) {
    Color["Rojo"] = "nomal";
    Color[Color["Verde"] = 8] = "Verde";
    Color[Color["Azul"] = 9] = "Azul";
})(Color || (Color = {}));
var colorFavorito = Color.Rojo;
console.log(colorFavorito); // 0
