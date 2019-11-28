export default (contacts, { text }) => {
  return contacts.filter((contact) => {

    const textMatch = contact.name.toLowerCase().includes(text.toLowerCase());

    const numberMatch = contact.number.toLowerCase().includes(text.toLowerCase());

    return  textMatch || numberMatch;
  }).sort((a, b) => {
    var aName = a.name.toLowerCase();
    var bName = b.name.toLowerCase(); 
    return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
  });
};

