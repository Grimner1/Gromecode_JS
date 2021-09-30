//put your code here
function withdraw(clients, balances, client, amount) {

    const idClient = clients.indexOf(client);
    
    if (balances[idClient] < amount) {
        return -1;
    } else {
        balances[idClient] -= amount;
        return balances[idClient];
    };
};