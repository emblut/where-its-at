function findBiggestRemainingSection(currentArena) {
  const sections = currentArena.sections;
  let biggestSectionRemaining = 0;

  for (const section in sections) {
    const remaining = sections[section].remaining;
    if (remaining > biggestSectionRemaining) {
      biggestSectionRemaining = remaining;
    }
  }

  return biggestSectionRemaining;
}

export default findBiggestRemainingSection;
