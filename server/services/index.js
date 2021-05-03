const authServ = require('./auth.service');
const trainerServ = require('./trainer.service');
const userServ = require('./user.service');

const Service = {
    registrationServ: authServ.registrationServ,
    loginServ: authServ.loginServ,
    activateServ: authServ.activateServ,
    getListTrainersService: trainerServ.getListTrainersService,
    logoutServ: authServ.logoutServ,
    getCaloriesServ: userServ.getCaloriesServ,
    getProfileServ: userServ.getProfileServ
}

module.exports=Service;