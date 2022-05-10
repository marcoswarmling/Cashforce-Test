SELECT ord.orderNumber, ord.emissionDate, ord.value, ord.orderStatusBuyer, buy.name, prov.name
FROM orders AS ord
LEFT JOIN buyers AS buy
ON ord.buyerId = buy.id
LEFT JOIN providers AS prov
ON ord.providerId = prov.id;