'use strict'

const User = use ('App/Models/User')

class UserController {
    async create({request,response, auth}){
        const user = await User.create(request.only(['username', 'email', 'password']));

        await auth.login(user);
        return response.redirect('/')
    }

    async login({request, auth, response, session}){
        const { email, password } = request.all();

        try{
            await auth.attempt(email, password);
            return response.redirect('/');
        } catch (error) {
            session.flash({loginError: 'These credentials do not work.'});
            return response.redirect('/login');
        }
    }
}

module.exports = UserController
