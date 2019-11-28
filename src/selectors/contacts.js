export default (contacts, { text }) => {
  return contacts.filter((contact) => {

    const textMatch = contact.name.toLowerCase().includes(text.toLowerCase());

    const numberMatch = contact.number.toLowerCase().includes(text.toLowerCase());

    return  textMatch || numberMatch;
  });
};