const {
  calcularMedia,
  verificarAprovacao,
  classificarFaixaEtaria,
  converterKmParaMilhas,
  gerarEmailCorporativo,
  adicionarItemCarrinho,
  calcularSalarioLiquido,
  criarProduto,
  ehTrianguloValido,
  removerElemento
} = require('./exercicios');

describe('Suíte de Testes Unitários - 10 Regras de Negócio', () => {

  // Teste 1
  test('1. calcularMedia', () => {
    expect(calcularMedia(7, 8, 9)).toBe(8);
    expect(calcularMedia(7.5, 8, 9)).toBeCloseTo(8.17, 2);
    expect(() => calcularMedia(-1, 8, 9)).toThrow('Nota inválida: deve estar entre 0 e 10');
    expect(() => calcularMedia(11, 8, 9)).toThrow('Nota inválida: deve estar entre 0 e 10');
  });

  // Teste 2
  test('2. verificarAprovacao', () => {
    expect(verificarAprovacao(7, 75)).toBe(true);
    expect(verificarAprovacao(8.5, 80)).toBe(true);
    expect(verificarAprovacao(6.9, 90)).toBe(false);
    expect(verificarAprovacao(9, 74)).toBe(false);
  });

  // Teste 3
  test('3. classificarFaixaEtaria', () => {
    expect(classificarFaixaEtaria(10)).toBe('Criança');
    expect(classificarFaixaEtaria(15)).toBe('Adolescente');
    expect(classificarFaixaEtaria(25)).toBe('Adulto');
    expect(classificarFaixaEtaria(65)).toBe('Idoso');
    expect(() => classificarFaixaEtaria(-5)).toThrow('Idade não pode ser negativa');
  });

  // Teste 4
  test('4. converterKmParaMilhas', () => {
    expect(converterKmParaMilhas(10)).toBeCloseTo(6.21, 2);
    expect(converterKmParaMilhas(0)).toBe(0);
    expect(() => converterKmParaMilhas(-10)).toThrow('Distância não pode ser negativa');
  });

  // Teste 5
  test('5. gerarEmailCorporativo', () => {
    expect(gerarEmailCorporativo('Lucas', 'Silva', 'empresa.com')).toBe('lucas.silva@empresa.com');
    expect(gerarEmailCorporativo('  Ana ', ' Souza  ', 'TECH.IO')).toBe('ana.souza@tech.io');
  });

  // Teste 6
  test('6. adicionarItemCarrinho', () => {
    const carrinhoInicial = ['Monitor', 'Mouse'];
    const novoCarrinho = adicionarItemCarrinho(carrinhoInicial, 'Teclado');

    expect(novoCarrinho).toEqual(['Monitor', 'Mouse', 'Teclado']);
    expect(novoCarrinho).toHaveLength(3);
    expect(carrinhoInicial).toHaveLength(2);
  });

  // Teste 7
  test('7. calcularSalarioLiquido', () => {
    expect(calcularSalarioLiquido(3000, 10)).toBe(2700);
    expect(calcularSalarioLiquido(5000, 0)).toBe(5000);
    expect(() => calcularSalarioLiquido(0, 10)).toThrow('Valores de salário ou desconto inválidos');
    expect(() => calcularSalarioLiquido(3000, -5)).toThrow('Valores de salário ou desconto inválidos');
  });

  // Teste 8
  test('8. criarProduto', () => {
    expect(criarProduto(1, 'Monitor', 899.90, 'Informática')).toEqual({
      id: 1,
      nome: 'Monitor',
      preco: 899.90,
      categoria: 'Informática',
      emEstoque: true
    });

    expect(() => criarProduto(2, 'Mouse', 0, 'Informática')).toThrow('Preço deve ser maior que zero');
    expect(() => criarProduto(3, 'Teclado', -50, 'Informática')).toThrow('Preço deve ser maior que zero');
  });

  // Teste 9
  test('9. ehTrianguloValido', () => {
    expect(ehTrianguloValido(3, 4, 5)).toBe(true);
    expect(ehTrianguloValido(1, 2, 10)).toBe(false);
    expect(ehTrianguloValido(0, 4, 5)).toBe(false);
  });

  // Teste 10
  test('10. removerElemento', () => {
    const listaOriginal = ['banana', 'maca', 'uva'];
    const novaLista = removerElemento(listaOriginal, 'maca');

    expect(novaLista).toEqual(['banana', 'uva']);
    expect(removerElemento([1, 2, 3], 99)).toEqual([1, 2, 3]);
    expect(listaOriginal).toHaveLength(3);
  });

});