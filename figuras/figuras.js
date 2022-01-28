// Código cuadrado
console.group("Cuadrado");

const ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden: ${ladoCuadrado}cm`);

perimetroCuadrado = (ladoCuadrado) => ladoCuadrado * 4

console.log(`El perímetro del cuadrado es de: ${perimetroCuadrado(ladoCuadrado)}cm`);

areaCuadrado = (ladoCuadrado) => Math.pow(ladoCuadrado, 2);
console.log(`El área del cuadrado es de: ${areaCuadrado(ladoCuadrado)}cm²`);

console.groupEnd();

// Código triángulo
console.group("Triángulo")

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;


console.log(`Los lados del triángulo miden: ${ladoTriangulo1}cm, ${ladoTriangulo2}cm y ${baseTriangulo}cm`);

const alturaTriangulo = 5.5;
console.log(`La altura del triángulo es de ${alturaTriangulo}cm`);

perimetroTriangulo = (ladoTriangulo1, ladoTriangulo2, baseTriangulo) => {
    return ladoTriangulo1 + ladoTriangulo2 + baseTriangulo
};
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