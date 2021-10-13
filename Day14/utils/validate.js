const emailValidate = (email) => {
  const re =
    /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;
  return re.test(email);
};

const passwordValidate = (pass) => {
  const re =
    /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
  return re.test(pass);
};

module.exports = {
  emailValidate,
  passwordValidate,
};
