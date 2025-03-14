menu = """
MENU:
[d] Depositar
[s] Sacar
[e] Extrato
[q] Sair
=>
"""

saldo = 0
limite = 500
extrato = ""
numero_saques = 0
LIMITE_SAQUES = 3


while True:
    opcao = input(menu)
    if opcao == 'd':
        valor = float((input("Informe o valor de depósito: ")))
        if valor > 0:
            saldo += valor
            extrato += f"Depósito de R$:{valor:.2f}\n"
        else:
            print("Operação falhou! O valor informado é inválido.")

    elif opcao == 's':
        valor = float(input("Informe o valor de saque: "))
        
        excedeu_saldo = valor > saldo
        excedeu_limite = valor > limite
        excedeu_saques = numero_saques >= LIMITE_SAQUES

        if excedeu_saldo:
            print("Você não possui saldo suficiente")
        elif excedeu_limite:
            print("O valor excedeu o limite para saque.")
        elif excedeu_saques:
            print("Numero máximo de saques excedido.")
        elif valor > 0:
            saldo -= valor
            extrato += f"Saque de R$:{valor:.2f}\n"
            numero_saques += 1
        else:
            print("Valor inválido.")
    
    elif opcao == 'e':
        print("\n========== EXTRATO ==========")
        print("Não foram realizadas movimentações." if not extrato else extrato)
        print(f"\nSaldo: R$: {saldo:.2f}")
        print("===============================")

    elif opcao == 'q':
        break

    else:
        print("Opção inválida. selecone novamente.")