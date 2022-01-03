const jwt = require('jsonwebtoken');

const tokenSecret = 'revze5eggv8hyt1zafg3';

module.exports = {
    tokenUtilisateur : function (user){
        return jwt.sign(
            {userId : user.id_utilisateur},
            tokenSecret,
            {expiresIn:'3h'}
        )
    }
}
