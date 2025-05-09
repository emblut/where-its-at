function createArenas(response, addArena) {
  const events = response.data.events;
  events.forEach((event) => {
    addArena({
      eventId: event.id,
      eventName: event.name,
      arena: event.where,
      remaining: 500,
      sections: {
        A: {
          remaining: 100,
          seats: Array(100).fill(false),
          start: 0,
        },
        B: {
          remaining: 100,
          seats: Array(100).fill(false),
          start: 100,
        },
        C: {
          remaining: 100,
          seats: Array(100).fill(false),
          start: 200,
        },
        D: {
          remaining: 100,
          seats: Array(100).fill(false),
          start: 300,
        },
        E: {
          remaining: 100,
          seats: Array(100).fill(false),
          start: 400,
        },
      },
    });
  });
}

export default createArenas;
