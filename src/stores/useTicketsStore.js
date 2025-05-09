import { create } from 'zustand';

const useTicketsStore = create((set) => ({
  tickets: [],
  addTicket: (ticket) => {
    set((state) => {
      state.tickets.push(ticket);
      return { tickets: state.tickets };
    });
  },
}));

export default useTicketsStore;
