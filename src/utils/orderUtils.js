export function processOrder(cart, arenas) {
  return checkTicketAvailability(cart, arenas);
}

function checkTicketAvailability(cart, arenas) {
  let errorsObj = {};
  cart.forEach((event) => {
    const eventArena = arenas[event.id];

    if (!eventArena) return;

    if (eventArena.remaining < event.amount) {
      errorsObj[
        event.id
      ] = `${event.name} only has ${eventArena.remaining} tickets left.`;
    }
  });
  return errorsObj;
}
