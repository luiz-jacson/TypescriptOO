export function ValidaDeposito(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value; // pega o método original

  descriptor.value = function (valorDoDeposito: number) {
    if (valorDoDeposito <= 0) {
      throw new Error("O valor a ser depositado deve ser maior do que zero!");
    }
    // se passou na validação, chama o método original
    return originalMethod.apply(this, [valorDoDeposito]);
  };

  return descriptor;
}