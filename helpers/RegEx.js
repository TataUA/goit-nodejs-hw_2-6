const emailFieldRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const nameFieldRegEx = /^[a-zA-Z0-9 ]*$/;

const phoneFieldRegEx = /\(?(\d{3})\)?[-\.\s]?(\d{3})[-\.\s]?(\d{4})/;

module.exports = { emailFieldRegEx, nameFieldRegEx, phoneFieldRegEx };
