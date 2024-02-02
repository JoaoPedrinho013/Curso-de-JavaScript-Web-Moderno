def numeros_primos_ate(n):
    primos = []
    for num in range(2, n + 1):
        eh_primo = True
        for i in range(2, int(num**0.5) + 1):
            if num % i == 0:
                eh_primo = False
                break
        if eh_primo:
            primos.append(num)
    return primos

# Exemplo de uso:
limite_superior = 20
lista_primos = numeros_primos_ate(limite_superior)
print(f"Números primos até {limite_superior}: {lista_primos}")
