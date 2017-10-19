import { Contacts } from '../../api/contacts/contacts.js';
import { _ } from 'meteor/underscore';

/**
 * A list of Contacts to pre-fill the Collection.
 * @type {*[]}
 */
const contactsSeeds = [
  {
    first: "Jeremy",
    last: "Felipe",
    address: "1350 ala moana",
    telephone: "292-101-0910",
    email: "jeremy21@hawaii.edu"
  },
  {
    first: "Dude",
    last: "Sweet",
    address: "1350 ala moana",
    telephone: "292-101-0910",
    email: "ds1@hawaii.edu"
  },
  {
    first: "DUDE",
    last: "SWEET",
    address: "1350 ala moana",
    telephone: "292-101-0910",
    email: "ds2@hawaii.edu"
  },
  {
    first: "DUUUUDE",
    last: "SWEEEEET",
    address: "1350 ala moana",
    telephone: "292-101-0910",
    email: "dslite@hawaii.edu"
  },
  {
    first: "Barack",
    last: "Obama",
    address: "1350 ala moana",
    telephone: "292-101-0910",
    email: "obamalam@hawaii.edu"
  },
  {
    first: "Armchair",
    last: "Legchair",
    address: "1350 ala moana",
    telephone: "292-101-0910",
    email: "amandaleg@hawaii.edu"
  },
  {
    first: "Jeremy",
    last: "Felipe",
    address: "1350 ala moana",
    telephone: "292-101-0910",
    email: "jeremy21@hawaii.edu"
  }
];

/**
 * Initialize the Contacts collection if empty with seed data.
 */
if (Contacts.find().count() === 0) {
  _.each(contactsSeeds, function seedContacts(contacts) {
    Contacts.insert(contacts);
  });
}
