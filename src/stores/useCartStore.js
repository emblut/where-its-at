import { create } from 'zustand';

const useCartStore = create((set) => ({
  cart: [],
  addToCart: (event, count) => {
    set((state) => {
      const existingEvent = state.cart.find((cartEvent) => {
        return cartEvent.id === event.id;
      });
      if (existingEvent) {
        return {
          cart: state.cart.map((cartEvent) => {
            if (cartEvent.id === event.id) {
              cartEvent.amount = cartEvent.amount + count;
              return cartEvent;
            } else {
              return cartEvent;
            }
          }),
        };
      } else {
        event.amount = count;
        state.cart.push(event);
        return { cart: state.cart };
      }
    });
  },

  increaseQuantity: (event, remaining) => {
    // const remaining = arenas[event.id].remaining;

    set((state) => ({
      cart: state.cart.map((cartEvent) => {
        if (cartEvent.id === event.id) {
          if (cartEvent.amount < remaining) {
            cartEvent.amount = cartEvent.amount + 1;
            return cartEvent;
          } else {
            // Ge respons på fel
            console.log('stop count');
            return cartEvent;
          }
        } else {
          return cartEvent;
        }
      }),
    }));
  },

  decreaseQuantity: (event) => {
    set((state) => ({
      cart: state.cart
        .map((cartEvent) => {
          if (cartEvent.id === event.id) {
            cartEvent.amount = cartEvent.amount - 1;
            return cartEvent;
          } else {
            return cartEvent;
          }
        })
        .filter((cartEvent) => cartEvent.amount > 0),
    }));
  },

  clearCart: () => {
    set({ cart: [] });
  },
}));

export default useCartStore;
