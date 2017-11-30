const validate = password => /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?\d)[A-Za-z\d]{6,}$/.test(password);
