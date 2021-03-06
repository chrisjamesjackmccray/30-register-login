class RegisterController {
  constructor($state, UserService) {
    this._$state = $state;
    this._UserService = UserService;

    this.newUser = this._UserService.new();

    /* STEP 1 - Create a variable newUser and set it to
      our empty user object from the UserService */
  }

  /* STEP 2 - Call create on UserService and pass in your
    newUser variable. This returns a promise. In your
    .then, use $state.go to send them to the profile page
  */

  register() {
    console.log("registering");
    console.log(this.newUser);
    this._UserService
      .create(this.newUser)
      .then((response) => {
        this._$state.go("profile");
      })
      .catch((error) => {
        console.error(error);
      })

  }


}

export default RegisterController;
