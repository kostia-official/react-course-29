import React from 'react';
import _ from 'lodash';
import { Cart } from './Cart';

const UA_CODE = '+380';

export class OrderForm extends React.Component {
  constructor(props) {
    super(props);

    const { phoneNumber } = props.user;

    this.state = {
      phoneNumber,
      selectedCardId: '',
      selectedProductId: '',
      cart: [],
    };
  }

  onPhoneNumberChange = (e) => {
    const phoneNumber = e.target.value;

    if (isNaN(Number(phoneNumber))) return;

    this.setState({ phoneNumber });
  };

  onCardSelect = (e) => {
    this.setState({ selectedCardId: e.target.value });
  };

  onProductSelect = (e) => {
    this.setState({ selectedProductId: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { phoneNumber, selectedCardId, cart } = this.state;

    this.props.onSubmit({ phoneNumber, selectedCardId, cart });
  };

  addToCart = () => {
    const product = _.find(this.props.products, { id: this.state.selectedProductId });

    if (product) {
      this.setState((state) => ({
        cart: [...state.cart, product],
      }));
    }
  };

  render() {
    const { phoneNumber, selectedCardId, selectedProductId, cart } = this.state;
    const {
      user: { cards },
      products,
    } = this.props;

    return (
      <form onSubmit={this.onSubmit}>
        <fieldset>
          <legend>Номер телефона</legend>
          {UA_CODE}
          <input
            type="tel"
            value={phoneNumber}
            onChange={this.onPhoneNumberChange}
            minLength={10}
            maxLength={10}
            required
          />
        </fieldset>

        <fieldset>
          <legend>Карта для оплаты</legend>
          <select value={selectedCardId} onChange={this.onCardSelect} required>
            <option value="" />
            {cards.map(({ id, number }) => (
              <option key={id} value={id}>
                {number}
              </option>
            ))}
          </select>
        </fieldset>

        <fieldset>
          <legend>Продукты</legend>
          {products.map(({ id, name, price }) => {
            return (
              <div key={id}>
                <label>
                  <input
                    type="radio"
                    name="products"
                    value={id}
                    onChange={this.onProductSelect}
                    checked={id === selectedProductId}
                    required
                  />
                  {name} {price}грн
                </label>
              </div>
            );
          })}
          <button type="button" onClick={this.addToCart}>
            Добавить
          </button>
        </fieldset>

        <Cart cart={cart} />

        <button type="submit">Заказать</button>
      </form>
    );
  }
}
