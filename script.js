const properties = []
let option

do {
    option = prompt(
        `Cadastro de Imóveis:\nQuantidade de imóveis cadastrados: ${properties.length}\n\nEscolha uma opção:\n1. Salvar novo imóvel\n2. Listar imóveis salvos\n3. Sair`
    )

    switch (option) {
        case '1':
            const property = {}

            property.owner = prompt("Digite o nome do proprietário:")
            property.bedrooms = parseInt(prompt("Digite a quantidade de quartos:"))
            property.bathrooms = parseInt(prompt("Digite a quantidade de banheiros:"))
            property.garage = confirm("O imóvel tem garagem?")

            const confirmSave = confirm(
                `Deseja salvar esse imóvel?\n\nProprietário: ${property.owner}\nQuartos: ${property.bedrooms}\nBanheiros: ${property.bathrooms}\nGaragem: ${property.garage ? "Sim" : "Não"}`
            )

            if (confirmSave) {
                properties.push(property)
                alert("Imóvel salvo com sucesso!")
            }
            break

        case '2':
            if (properties.length === 0) {
                alert("Nenhum imóvel cadastrado.")
            } else {
                let propertyList = "Imóveis cadastrados:\n"
                properties.forEach((prop, index) => {
                    propertyList += `${index + 1}. Proprietário: ${prop.owner}, Quartos: ${prop.bedrooms}, Banheiros: ${prop.bathrooms}, Garagem: ${prop.garage ? "Sim" : "Não"}\n`
                })
                alert(propertyList)
            }
            break

        case '3':
            alert("Saindo...")
            break

        default:
            alert("Opção inválida. Tente novamente.")
    }

} while (option !== '3')
