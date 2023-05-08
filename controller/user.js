const  {User, UserInfo, UserRolePermission, UserRole} = require('../models');
const saveUser = async(req, res)=>{
    const userExists = await User.findOne({where: {'email': req.body.email}});
    if(userExists != null){
        return  res.status(400).send({'error': 'User already Exists!'});
    }
    await User.create(req.body).then((response)=>{
        res.send(response);
    }).catch((e)=>{
        res.status(400).send(e.message);
    });
    
   
};

const getUser = async(req, res)=>{
      User.findByPk(req.params.user_id).then((response)=>{
         res.send(response)
     }).catch((e)=>{
         res.status(400).send(e.message)
     })
};

const saveUserInfo = async(req, res)=>{
     await UserInfo.create(req.body).then((response)=>{
      res.send(response)
     }).catch((e)=>{
        res.status(400).send(e.message)
     })
}

const addUserRole = async(req, res)=>{
    await UserRolePermission.create(req.body)
    .then((result)=>{
        res.send(result)
       }).catch((e)=>{
        res.status(400).send(e.message)
       })
}

const getUserRolePermisssion = async(req, res)=>{
    await User.findByPk(req.params.user_id, {include:[{
        model: UserRolePermission,
        include:[{
        model: UserRole 
        }]
    }]})
    .then((result)=>{
        res.send(result)
       }).catch((e)=>{
        res.status(400).send(e.message)
       })
}

module.exports = {
    saveUser,
    getUser,
    saveUserInfo,
    addUserRole,
    getUserRolePermisssion
};