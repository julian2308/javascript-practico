// Código cuadrado
console.group("Cuadrado");

const ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden: ${ladoCuadrado}cm`);

perimetroCuadrado = (ladoCuadrado) => ladoCuadrado * 4

console.log("Batman" + perimetroCuadrado(5));

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(`El área del cuadrado es de: ${areaCuadrado}cm²`);

console.groupEnd();

// Código triángulo
console.group("Triángulo")

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(`Los lados del triángulo miden: ${ladoTriangulo1}cm, ${ladoTriangulo2}cm y ${baseTriangulo}cm`);

const alturaTriangulo = 5.5;
console.log(`La altura del triángulo es de ${alturaTriangulo}cm`);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log(`El perímetro del triángulo es de ${perimetroTriangulo}`);

const areaTriangulo = (baseTriangulo * alturaTriangulo)/2
console.log(`El área del triángulo es de: ${areaTriangulo}cm²`);

console.groupEnd();

// Código triángulo
console.group("Círculo")

const radioCirculo = 4;
console.log(`El radio del círculo es de ${radioCirculo}cm`);

const diametroCirculo = radioCirculo * 2;
console.log(`El diametro del círculo es de ${diametroCirculo}cm`);

const perimetroCirculo = diametroCirculo * Math.PI
console.log(`El perímetro del círculo es de ${perimetroCirculo}cm`);

const areaCirculo = (radioCirculo * radioCirculo) * Math.PI
console.log(`El área del círculo es de ${areaCirculo}cm²`);


console.groupEnd();