function showPeople(people) {
  const newPeople = people
    .map((person) => {
      const { name, job } = person;
      return `<p>${name} ${job}</p>`;
    })
    .join("");
  return newPeople;
}

export default showPeople;
