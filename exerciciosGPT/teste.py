
def is_numero_triangular(numero):
    # Encontrar a solução da equação quadrática n^2 + n - 2 * numero = 0
    delta = 1 + 8 * numero
    raiz_delta = int(delta ** 0.5)

    # Verificar se a raiz do delta é um número inteiro e se a solução é positiva
    return raiz_delta ** 2 == delta and (raiz_delta - 1) % 2 == 0

# Exemplo de uso
numero_teste = 10
resultado = is_numero_triangular(numero_teste)
print(f"O número {numero_teste} é triangular? {resultado}")
