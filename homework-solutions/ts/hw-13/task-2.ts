// Создайте функцию validatePassword, которая принимает строку (пароль) и возвращает true, 
// если пароль соответствует следующим правилам:
//   - Пароль должен содержать хотя бы одну заглавную букву.
//   - Пароль должен содержать хотя бы одну букву в нижнем регистре.
//   - Пароль должен содержать хотя бы одну цифру.
//   - Пароль должен быть не менее 8 символов.
//   - Пароль не должен состоять из одних пробелов
// Функция должна возвращать false, если хотя бы одно из условий не выполнено.

function validatePassword(password: string) {
    const passwordArray: string[] = password.trim().split('');
    const hasUpperCase: boolean = passwordArray.some(char => char >= 'A' && char <= 'Z');
    const hasLowerCase: boolean = passwordArray.some(char => char >= 'a' && char <= 'z');
    const hasNumber: boolean = passwordArray.some(char => char >= '0' && char <= '9');
    const isValidLength: boolean = passwordArray.length >= 8;
    const isNotEmpty: boolean = password.trim() !== '';

    return hasUpperCase && hasLowerCase && hasNumber && isValidLength && isNotEmpty;
}

const testPasswords: string[] = [
    "Valid123",
    "lowercase 1",
    "UPPERCASE2",
    "Short1",
    "NoNumber",
    "     ",
];

testPasswords.forEach(password => {
    console.log(`"${password}": ${validatePassword(password)}`);
});
