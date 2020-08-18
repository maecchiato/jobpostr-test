'use strict'

class LoginUser {
  get rules () {
    return {
      'email': 'required|email',
      'password': 'required'
    }
  }

  get messages(){
    return {
      'required': 'Cmon, {{ field }} is required.',
    }
  }

  async fails(error){
    this.ctx.session.withErrors(error)
      .flashAll();

    return this.ctx.response.redirect('back')
  }
}

module.exports = LoginUser
