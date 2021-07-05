const passwordValidator = require('password-validator');

const passwordSchema = new passwordValidator();

passwordSchema
.is().min(10)                                    
.is().max(64)                                  
.has().uppercase()                              
.has().lowercase()                             
.has().digits()                                
.has().not().spaces()                           

console.log(passwordSchema.validate('validPASS123'));
console.log(passwordSchema.validate('invalidPASS'));

// Get a full list of rules which failed
console.log(passwordSchema.validate('joke', { list: true }));

module.exports = passwordSchema;
