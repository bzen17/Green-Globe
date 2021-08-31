const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const {UserSchema} = require('../../models/userSchema');
const config = require('../../config/config');
const fs = require('fs');
var path = require('path');
// eslint-disable-next-line max-len
var privateKey = fs.readFileSync(path.resolve('private.key'),'utf8')
//var publicKey = fs.readFileSync('../../../public.key','utf8')


const getJWTToken = async (req, res) =>{
  // console.log(req.body);
  const {data} = req.body;
  const signOptions = {
    issuer: config.issuer,
        subject: config.subject,
        audience: config.aud,
        expiresIn: config.exp,
        algorithm: "RS256"
  }
  const jwtToken = jwt.sign(data, privateKey, signOptions);
  
  const response = {
    accessToken: {
      token: jwtToken,
      expiresIn: config.exp,
    },
      idToken: data
  };
  res.json(response);
};

const userLogin = async (req, res) => {
  const {user_id, password} = req.body;
  try {
    const user = await UserSchema.findOne({user_id: user_id});
    
    if (!user) {
      res.status(403).json({
        message: 'User doesn\'t Exist.',
        success: false
      });
    } else {
      let userData = {
        name: user.name,
        role: user.role,
      };
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        const user_id = req.body.user_id;
        userData = {
          user_id: user_id,
          ...userData
        };
        req.body.data = userData;
        getJWTToken(req, res);
      } else {
        res.status(403).json({
          message: 'Incorrect User ID or Password.',
          success: false
        });
      }
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Unable to Login. Try again after some time.',
      success: false
    });
  }
};


module.exports = {
  userLogin,
  getJWTToken
};
  
