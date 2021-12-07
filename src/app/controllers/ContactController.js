class ContactController {
  index(request, response) {
    response.send('Contact Controller');
    // get multiplies registers
  }

  show() {
    // get one register
  }

  store() {
    // post one register
  }

  update() {
    // update register
  }

  delete() {
    // delete register
  }
}
// Sigleton
module.exports = new ContactController();
