var usuario = {
    name: 'Calo',
    code: '01',
    cell: 182,
    description: "hola",
};
for (var value in usuario) {
    console.log(usuario[value]);
    console.log(value);
}
usuario.code = 50;
