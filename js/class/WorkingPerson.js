class WorkingPerson {
  constructor(argFirstName, argLastName) {
    this.firsName = argFirstName;
    this.lastName = argLastName;
  }

  get email() {
    const emailString = `${this.firsName}@${this.lastName}.lt`;
    return emailString;
  }

  calcPay() {}
}
