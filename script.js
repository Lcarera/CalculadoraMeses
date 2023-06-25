function calculateAgeInMonths() {
    let dob = new Date(document.querySelector('#dob').value);
    dob.setHours(dob.getHours() + 3)
    const today = new Date();
    let months = (today.getFullYear() - dob.getFullYear()) * 12 + (today.getMonth() - dob.getMonth());
    console.log(today.getDate() < dob.getDate(), today.getDate(), dob.getDate());
    console.log(dob);
    if(today.getDate() < dob.getDate()) {
        months = months - 1
    }
    document.querySelector('#output').textContent = `Tienes ${months} meses de edad.`;
}
