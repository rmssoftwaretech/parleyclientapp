import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const contactList =  [
  {
    'id': 1457690400,
    'name': 'Stella Johnson',
    'thumb': require('assets/images/userAvatar/stella-johnson.png'),
    'email': 'stella.johnson@example.com',
    'phone': '+1-215-659-7529',
    'designation': 'CEO',
    'selected': false,
    'starred': false,
    'frequently': true,
  }, {
    'id': 1457690401,
    'name': 'Garry Sobars',
    'thumb': require('assets/images/userAvatar/garry-sobars.jpg'),
    'email': 'garry.sobars@example.com',
    'phone': '+1-215-745-7529',
    'designation': 'CFO',
    'selected': false,
    'starred': false,
    'frequently': true,
  },
  {
    'id': 1457690402,
    'name': 'Alex Dolgove',
    'thumb': require('assets/images/userAvatar/alex-dolgove.png'),
    'email': 'alex.dolgove@example.com',
    'phone': '+1-215-748-7855',
    'designation': 'Designer',
    'selected': false,
    'starred': false,
    'frequently': true,
  }, {
    'id': 1457690403,
    'name': 'Domnic Brown',
    'thumb': require('assets/images/userAvatar/domnic-brown.png'),
    'email': 'domnic.brown@example.com',
    'phone': '+1-215-756-4579',
    'designation': 'PHP Developer',
    'selected': false,
    'starred': false,
    'frequently': true,
  }, {
    'id': 1457690404,
    'name': 'Kadir M',
    'thumb': require('assets/images/userAvatar/kadir-m.jpg'),
    'email': 'kadir.m@example.com',
    'phone': '+1-215-659-7586',
    'designation': 'HR Manager',
    'selected': false,
    'starred': false,
    'frequently': false,
  }, {
    'id': 1457690405,
    'name': 'John Smith',
    'thumb': require('assets/images/userAvatar/john-smith.png'),
    'email': 'john.smith@example.com',
    'phone': '+1-215-876-8596',
    'designation': 'Marketing Head',
    'selected': false,
    'starred': false,
    'frequently': false,
  }, {
    'id': 1457690406,
    'name': 'Domnic Harris',
    'thumb': require('assets/images/userAvatar/domnic-harris.jpg'),
    'email': 'domnic.harris@example.com',
    'phone': '+1-215-785-3841',
    'designation': 'BDO',
    'selected': false,
    'starred': true,
    'frequently': false,
  }, {
    'id': 1457690407,
    'name': 'Jimmy Jo',
    'thumb': require('assets/images/userAvatar/jimmy-jo.jpg'),
    'email': 'jimmy.jo@example.com',
    'phone': '+1-215-456-5863',
    'designation': 'CCO',
    'selected': false,
    'starred': false,
    'frequently': false,
  }, {
    'id': 1457690408,
    'name': 'Jimmy Jon',
    'thumb': require('assets/images/userAvatar/man-3.jpg'),
    'email': 'jimmy.jon@example.com',
    'phone': '+1-215-278-4558',
    'designation': 'Developer',
    'selected': false,
    'starred': true,
    'frequently': false,
  }, {
    'id': 1457690409,
    'name': 'Jeson Born',
    'thumb': require('assets/images/userAvatar/jeson-born.jpg'),
    'email': 'jeson.born@example.com',
    'phone': '+1-215-286-7551',
    'designation': 'UI-UX Designer',
    'selected': false,
    'starred': false,
    'frequently': false,
  }, {
    'id': 1457690410,
    'name': 'Steve Smith',
    'thumb': require('assets/images/userAvatar/steve-smith.jpg'),
    'email': 'steve.smith@example.com',
    'phone': '+1-215-586-5862',
    'designation': 'CEO',
    'selected': false,
    'starred': false,
    'frequently': false,
  },
  {
    'id': 1457690500,
    'name': 'Stella Johnson',
    'thumb': require('assets/images/userAvatar/stella-johnson.png'),
    'email': 'stella.johnson@example.com',
    'phone': '+1-215-659-7529',
    'designation': 'CEO',
    'selected': false,
    'starred': false,
    'frequently': true,
  }, {
    'id': 1457690501,
    'name': 'Garry Sobars',
    'thumb': require('assets/images/userAvatar/garry-sobars.jpg'),
    'email': 'garry.sobars@example.com',
    'phone': '+1-215-745-7529',
    'designation': 'CFO',
    'selected': false,
    'starred': false,
    'frequently': true,
  },
  {
    'id': 1457690502,
    'name': 'Alex Dolgove',
    'thumb': require('assets/images/userAvatar/alex-dolgove.png'),
    'email': 'alex.dolgove@example.com',
    'phone': '+1-215-748-7855',
    'designation': 'Designer',
    'selected': false,
    'starred': false,
    'frequently': true,
  }, {
    'id': 1457690503,
    'name': 'Domnic Brown',
    'thumb': require('assets/images/userAvatar/domnic-brown.png'),
    'email': 'domnic.brown@example.com',
    'phone': '+1-215-756-4579',
    'designation': 'PHP Developer',
    'selected': false,
    'starred': false,
    'frequently': true,
  }, {
    'id': 1457690404,
    'name': 'Kadir M',
    'thumb': require('assets/images/userAvatar/kadir-m.jpg'),
    'email': 'kadir.m@example.com',
    'phone': '+1-215-659-7586',
    'designation': 'HR Manager',
    'selected': false,
    'starred': false,
    'frequently': false,
  }, {
    'id': 1457690505,
    'name': 'John Smith',
    'thumb': require('assets/images/userAvatar/john-smith.png'),
    'email': 'john.smith@example.com',
    'phone': '+1-215-876-8596',
    'designation': 'Marketing Head',
    'selected': false,
    'starred': false,
    'frequently': false,
  }, {
    'id': 1457690506,
    'name': 'Domnic Harris',
    'thumb': require('assets/images/userAvatar/domnic-harris.jpg'),
    'email': 'domnic.harris@example.com',
    'phone': '+1-215-785-3841',
    'designation': 'BDO',
    'selected': false,
    'starred': true,
    'frequently': false,
  }, {
    'id': 1457690507,
    'name': 'Jimmy Jo',
    'thumb': require('assets/images/userAvatar/jimmy-jo.jpg'),
    'email': 'jimmy.jo@example.com',
    'phone': '+1-215-456-5863',
    'designation': 'CCO',
    'selected': false,
    'starred': false,
    'frequently': false,
  }, {
    'id': 1457690508,
    'name': 'Jimmy Jon',
    'thumb': require('assets/images/userAvatar/man-3.jpg'),
    'email': 'jimmy.jon@example.com',
    'phone': '+1-215-278-4558',
    'designation': 'Developer',
    'selected': false,
    'starred': true,
    'frequently': false,
  }, {
    'id': 1457690509,
    'name': 'Jeson Born',
    'thumb': require('assets/images/userAvatar/jeson-born.jpg'),
    'email': 'jeson.born@example.com',
    'phone': '+1-215-286-7551',
    'designation': 'UI-UX Designer',
    'selected': false,
    'starred': false,
    'frequently': false,
  }, {
    'id': 1457690510,
    'name': 'Steve Smith',
    'thumb': require('assets/images/userAvatar/steve-smith.jpg'),
    'email': 'steve.smith@example.com',
    'phone': '+1-215-586-5862',
    'designation': 'CEO',
    'selected': false,
    'starred': false,
    'frequently': false,
  }

]

class ContactListApi {
  static fetchContacts() {
    console.log('mock api');
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], contactList));
        console.log('resolve');
      }, delay);
    });
  }

     
}

export default ContactListApi;