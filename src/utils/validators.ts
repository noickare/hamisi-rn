export const emailValidator = (email: string) => {
  const re = /\S+@\S+\.\S+/;

  if (!email || email.length <= 0) {
    return 'Email cannot be empty.';
  }
  if (!re.test(email)) {
    return 'Ooops! We need a valid email address.';
  }

  return '';
};

export const passwordValidator = (password: string) => {
  if (!password || password.length <= 0) {
    return 'Password cannot be empty.';
  }

  return '';
};

export const namevalidator = (name: string) => {
  if (!name || name.length <= 0) {
    return 'name cannot be empty.';
  }

  return '';
};

export const codevalidator = (code: string) => {
  if (!code || code.toString().length <= 4 || code.toString().length > 4) {
    return 'Invalid Code';
  }

  return '';
};
