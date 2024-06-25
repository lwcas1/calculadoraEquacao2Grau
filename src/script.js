function calcular() {
    let a = document.getElementById('numberA').value;
    let b = document.getElementById('numberB').value;
    let c = document.getElementById('numberC').value;

    const delta = (b * b) - (4 * a * c);
    const equacao1 = (-b + Math.sqrt(delta)) / (2 * a);
    const equacao2 = (-b - Math.sqrt(delta)) / (2 * a);

    let res = document.querySelector('#resultado');
    res.innerHTML = `<span>Os resultados foram ${equacao1} e ${equacao2}.</span>`;
}