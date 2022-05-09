const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const entregador = order.order.delivery.deliveryPerson;
  const comprador = order.name;
  const telefone = order.phoneNumber;
  const rua = order.address.street;
  const numero = order.address.number;
  const apartamento = order.address.apartment;

  return console.log(`Olá ${entregador}, entrega para: ${comprador}, Telefone: ${telefone}, ${rua}, ${numero}, ${apartamento}`);
}

customerInfo(order);

const orderModifier = (order) => {
  const novoComprador = order.name = 'Luiz Silva';
  const pizza1 = Object.keys(order.order.pizza);
  const bebida  = Object.values(order.order.drinks.coke);
  const novoPreco = order.payment.total = '50';
  console.log(`Olá ${novoComprador}, o total do seu pedido de ${pizza1[0]}, ${pizza1[1]} e ${bebida[0]} é R$${novoPreco},00`);
}

orderModifier(order);