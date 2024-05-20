import { evaluate } from 'mathjs';
import { TypeAdicionar, TypeCalcular } from '../types/Calculos'

const operations: String[] = ["/", "*", "-", "+"]

export const Adiciona: TypeAdicionar = (value, newValue) => {
  
  const valueOperations = value.split("");
  //Verifica se o ultimo e novo caracteres são para operação
  if (operations.includes(valueOperations[valueOperations.length - 1]) && operations.includes(newValue)) {
    return value;
  }

  //Não deixa concatenar ponto com ponto e outros operadores
  if ((valueOperations[valueOperations.length - 1] === "." && newValue === ".")
    ||
    (operations.includes(valueOperations[valueOperations.length - 1]) && newValue === ".")
  ) {
    return value;
  }

  return value + "" + newValue;
}

export const Calcular: TypeCalcular = (value) => {
  const valueOperations = value.split("");
  //Verifica se o ultimo caracter é um número ou não, se não for retorna o valor anterior
  if ((valueOperations[valueOperations.length - 1] === "." )
    ||
    (operations.includes(valueOperations[valueOperations.length - 1]))
  ) {
    return value;
  }
  return evaluate(value as string).toString();
}