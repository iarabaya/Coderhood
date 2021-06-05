const pedidos = [
    { id: "1", pedido: "hamburgesa", extras: ["mayonesa"] },
    { id: "1", pedido: "pancho" },
    { id: "1", pedido: "pizza" },
    { id: "1", pedido: "pancho", extras: ["ketchup"] },
    { id: "1", pedido: "empanadas" },
    ]   
//obtener los pedidos que tengan condimentos extra
function ordersWithExtra(orders){
    orders = orders.filter(o => o["extras"]);
    console.log(orders);
}

ordersWithExtra(pedidos);