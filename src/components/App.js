import React from 'react';
import faker from 'faker';
import { OrderForm } from './OrderForm';

export class App extends React.Component {
  state = {
    products: [
      { id: faker.random.uuid(), name: 'Шаурма', price: 70 },
      { id: faker.random.uuid(), name: 'Кофе', price: 30 },
      { id: faker.random.uuid(), name: 'Кола', price: 10 },
    ],
    user: {
      phoneNumber: '0931111111',
      cards: [
        { id: faker.random.uuid(), number: '*2020' },
        { id: faker.random.uuid(), number: '*5454' },
      ],
    },
  };

  onSubmit = (order) => {
    console.log('order submitted', order);
  };

  render() {
    const { products, user } = this.state;

    return (
      <div>
        <OrderForm onSubmit={this.onSubmit} products={products} user={user} />
      </div>
    );
  }
}
