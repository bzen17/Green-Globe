const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const {UserSchema} = require('../../models/userSchema');
const config = require('../config/config');

// eslint-disable-next-line max-len

const getJWTToken = async (req, res) =>{
  // console.log(req.body);
  const {data, exp} = req.body;
  const jwtToken = jwt.sign(data, config.jwtSignature, {expiresIn: exp});
  
  const response = {
    accessToken: {
      accessToken: jwtToken,
      expiresIn: exp
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
        is_active: !user.blocked
      };
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        const user_id = req.body.user_id;
        userData = {
          user_id: user_id,
          ...userData
        };
        req.body.data = userData;
        req.body.exp = 3600;
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
  
