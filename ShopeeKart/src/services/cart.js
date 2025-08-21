//quais açoes meu carrinho pode fazer

//CASOS DE USO
// ✅ -> adicionar item no carrinho
async function addItem(userCart, item) {
  userCart.push(item);
}

// -> ✅ remover um item - diminui um item
async function removeItem(userCart, item) {
  const indexFound = userCart.findIndex((p) => p.name === item.name);

  if (indexFound === -1) {
    console.log("❌ Item não encontrado.");
    return;
  }

  if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity -= 1;
    console.log("➖ Unidade removida com sucesso.");
    return;
  }

  if (userCart[indexFound].quantity === 1) {
    userCart.splice(indexFound, 1);
    console.log("🗑️ Item removido completamente.");
    return;
  }
}

// ✅ -> calcular o total do carrinho
async function calculateTotal(userCart) {
  console.log("\nShopee Cart TOTAL IS:");

  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(`🎁Total: ${result}`);
}

// -> deletar item do carrinho
async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);

  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

// ✅ mostra todos os items do carrinho
async function displaycart(userCart) {
  console.log("\n🛒 Shopee cart list:");
  if (userCart.length === 0) {
    console.log("⚠️ Carrinho vazio.");
    return;
  }

  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal = ${item.subtotal()}`
    );
  });
}

// ✅ adicionar uma unidade ao item existente
async function addOne(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);
  if (index !== -1) {
    userCart[index].quantity += 1;
    console.log("➕ Unidade adicionada com sucesso.");
  } else {
    console.log("❌ Item não encontrado.");
  }
}

// ✅ pagamento e limpeza do carrinho
async function checkout(userCart) {
  const total = userCart.reduce((sum, item) => sum + item.subtotal(), 0);
  console.log(`💳 Pagamento de R$ ${total.toFixed(2)} concluído com sucesso!`);
  userCart.length = 0; // limpa o carrinho
}

export {
  addItem,
  calculateTotal,
  deleteItem,
  removeItem,
  displaycart,
  addOne,
  checkout
};