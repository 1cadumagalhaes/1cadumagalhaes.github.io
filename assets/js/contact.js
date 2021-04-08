function sendForm() {
    var data = new FormData();
    var name = $('input[name="name"]');
    var email = $('input[name="email"]');
    var message = $('textarea[name="message"]');
    data.append("name", name.value);
    data.append("email", email.value);
    data.append("message", message.value);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://formspree.io/f/xdoyolvz");
    xhr.setRequestHeader("Accept", 'application/json')
    xhr.onload = function () {
        name.value = "";
        email.value = "";
        message.value = "";
        alert("Email enviado com sucesso, obrigado!");
    };
    xhr.send(data);


    return false;
}