const ADMIN_PASSWORD = 'jqueryismyjam';
let message = prompt("Введіть пароль адміністратора");
if (message ===null){
message = 'Cкасовано користувачем';
} else if (message === "jqueryismyjam") {
    message = 'Ласкаво просимо!';
} else {
    message = 'Доступ заборонений, невірний пароль!';
}
alert(message);