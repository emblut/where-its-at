import { create } from 'zustand';

const useArenasStore = create((set) => ({
  arenas: {},
  addArena: (arenaObj) => {
    set((state) => {
      const id = arenaObj.eventId;
      state.arenas[id] = arenaObj;
      return {
        arenas: state.arenas,
      };
    });
  },

  updateRemainingTickets: (cart) => {
    set((state) => {
      cart.forEach((event) => {
        state.arenas[event.id].remaining =
          state.arenas[event.id].remaining - event.amount;
      });
      return {
        arenas: state.arenas,
      };
    });
  },
  updateRemainingTicketsSection: (event, chosenSection, firstAvailableSeat) => {
    set((state) => {
      state.arenas[event.id].sections[chosenSection].remaining =
        state.arenas[event.id].sections[chosenSection].remaining - event.amount;
      for (
        let i = firstAvailableSeat;
        i < event.amount + firstAvailableSeat;
        i++
      ) {
        state.arenas[event.id].sections[chosenSection].seats[i] = true;
      }
      return {
        arenas: state.arenas,
      };
    });
  },
}));

export default useArenasStore;
