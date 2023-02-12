import React from 'react'
import cx from 'classnames';

import Button from 'components/Button';
import { useAppContext } from "App";

export default ({name, description, price, soldOut}) => {
  const { constants } = useAppContext();

  return (
    <div
      className={cx('Home__TicketCard', {
        'Home__TicketCard--disabled': soldOut,
      })}>
      <div className="Home__TicketCard__Details">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div className="Home__TicketCard__Order">
        {!isNaN(price) && (
          <h2>{`$${price}`}</h2>
        )}
        <Button
          className="primary"
          href={constants.Links.TICKET_SALES}
          disabled={soldOut}>
          {soldOut ? 'Sold Out' : 'Buy Now'}
        </Button>
      </div>
    </div>
  );
}
