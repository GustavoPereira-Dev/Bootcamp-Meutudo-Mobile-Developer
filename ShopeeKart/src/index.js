import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = [];

console.log("🛒 Bem-vindo ao Shopee Cart!");

function perguntar(mensagem) {
  return new Promise((resolve) => {
    process.stdout.write(mensagem);
    process.stdin.resume();
    process.stdin.setEncoding("utf8");
    process.stdin.once("data", (data) => {
      process.stdin.pause();
      resolve(data.trim());
    });
  });
}

async function menu() {
  let continuar = true;

  while (continuar) {
    console.log(`
        📋 Menu de opções:
        1️⃣ Adicionar item ao carrinho
        2️⃣ Remover 1 unidade de um item
        3️⃣ Adicionar 1 unidade a um item existente
        4️⃣ Deletar item completamente
        5️⃣ Exibir carrinho
        6️⃣ Calcular total
        7️⃣ Finalizar pagamento
        8️⃣ Sair
        `);

    const escolha = await perguntar("Escolha uma opção: ");

    switch (escolha) {
      case "1":
        const nome = await perguntar("Nome do item: ");
        const preco = parseFloat(await perguntar("Preço do item: "));
        const qtd = parseInt(await perguntar("Quantidade: "), 10);
        const novoItem = await createItem(nome, preco, qtd);
        await cartService.addItem(myCart, novoItem);
        console.log("✅ Item adicionado com sucesso!");
        break;

      case "2":
        if (myCart.length === 0) {
            console.log("⚠️ Carrinho vazio. Não há itens para remover unidades.");
            break;
        }
          
        const nomeRemover = await perguntar("Nome do item para remover 1 unidade: ");
        const itemRemover = myCart.find((i) => i.name === nomeRemover);
        if (itemRemover) {
            await cartService.removeItem(myCart, itemRemover);
        } else {
            console.log("❌ Item não encontrado.");
        }
         break;

      case "3":
        if (myCart.length === 0) {
            console.log("⚠️ Carrinho vazio. Não há itens para adicionar unidades.");
            break;
        }
              
        const nomeAdd = await perguntar("Nome do item para adicionar 1 unidade: ");
        await cartService.addOne(myCart, nomeAdd);
        break;
        
      case "4":
        if (myCart.length === 0) {
          console.log("⚠️ Carrinho vazio. Não há itens para remover.");
          break;
        }
        const nomeDeletar = await perguntar("Nome do item para deletar: ");
        await cartService.deleteItem(myCart, nomeDeletar);
        console.log("🗑️ Item deletado (se existia).");
        break;

      case "5":
        await cartService.displaycart(myCart);
        break;

      case "6":
        await cartService.calculateTotal(myCart);
        break;

      case "7":
        if (myCart.length === 0) {
          console.log("⚠️ Carrinho vazio. Nada para pagar.");
          break;
        }
        await cartService.checkout(myCart);
        break;

      case "8":
        continuar = false;
        console.log("👋 Saindo do Shopee Cart. Até a próxima!");
        break;

      default:
        console.log("❌ Opção inválida. Tente novamente.");
    }
  }
}

await menu();