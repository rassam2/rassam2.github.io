function calculateAge() {
    const input = document.getElementById("birthdate").value;
    if (!input) {
        alert("Please enter your birthdate.");
        return;
    }

    const birthdate = moment(input);
    const today = moment();
    const diffYears = today.diff(birthdate, 'years');

    const message = `You are ${diffYears} years old.`;
    document.getElementById("result").textContent = message;
    return message;
}
