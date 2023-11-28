export const BnPasswordValidationMsg = {

    'password_repeat': [
      { type: 'required', message: 'bnPassword.errors.password_repeat.required' },
      { type: 'minlength', message: 'bnPassword.errors.password_repeat.minlength' },
      { type: 'maxlength', message: 'bnPassword.errors.password_repeat.maxlength' },
      { type: 'notequal', message: 'bnPassword.errors.password.notEqual' }
    ],
    'password': [
      { type: 'required', message: 'bnPassword.errors.password.required' },
      { type: 'minlength', message: 'bnPassword.errors.password.minlength' },
      { type: 'maxlength', message: 'bnPassword.errors.password.maxlength' },
      { type: 'notsecure', message: 'bnPassword.errors.password.notsecure' }

    ]
}
