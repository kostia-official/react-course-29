import React, { Fragment } from 'react';
import _ from 'lodash';

export function Cart({ cart }) {
  if (_.isEmpty(cart)) return <Fragment />;

  const total = _.reduce(
    cart,
    (result, item) => {
      return result + item.price;
    },
    0
  );

  return (
    <fieldset>
      <legend>Корзина</legend>
      <ul>
        {_.map(cart, ({ price, name }, i) => (
          <li key={i}>
            {name} {price}грн
          </li>
        ))}
      </ul>
      <p>Итого: {total}грн</p>
    </fieldset>
  );
}
