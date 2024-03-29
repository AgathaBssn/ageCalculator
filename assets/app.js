document.querySelector('form').addEventListener('submit', (e) => e.preventDefault());


//Affichage
function suivant(enCours, suivant, limite)
{
    if (enCours.value.length === limite)
        document.getElementById(suivant).focus();
}

//Running calculator and verification
function checkForm(){
    
    //convert in red
    function convertInRed(day){ 
        document.getElementById(day).style.borderColor = '#ff4b4b';
        document.getElementById('input-' + day).style.color = '#ff4b4b';
        let thisError = document.getElementById('nameError' + day.charAt(0).toUpperCase() + day.slice(1));
        thisError.style.display = 'block';
    }
    function unconvert(day){
        document.getElementById(day).style.borderColor = '#e6e6e6';
        document.getElementById('input-' + day).style.color = '#000';
        let thisError = document.getElementById('nameError' + day.charAt(0).toUpperCase() + day.slice(1));
        thisError.style.display = 'none';
    }
    
    let testPassed = true;
    //initialisation des inputs
    unconvert('day');
    unconvert('month');
    unconvert('year');
    //getDate
    let day = document.getElementById('day').value;
    let month = document.getElementById('month').value;
    let year = document.getElementById('year').value;


    //Test if inputs filled
    if (day === '' || month === '' || year === ''){
        testPassed = false;
        let errorMssg = 'This field is required';
        if (day === ''){
            convertInRed('day');
            document.getElementById('nameErrorDay').textContent = errorMssg;
        }
        if (month === '') {
            convertInRed('month');
            document.getElementById('nameErrorMonth').textContent = errorMssg;
        }
        if (year === '') {
            convertInRed('year');
            document.getElementById('nameErrorYear').textContent = errorMssg;
        }
    }
    //valid format
    if (!(day >= 1 && day <= 31) && day !== ''){
        testPassed = false;
        let errorMssg = 'Must be a valid day';
        convertInRed('day');
        document.getElementById('nameErrorDay').textContent = errorMssg;
    } 
    if (!(month >= 1 && month <= 12) && month !== ''){
        testPassed = false;
        let errorMssg = 'Must be a valid month';
        convertInRed('month');
        document.getElementById('nameErrorMonth').textContent = errorMssg;
    }
    let thisYear = new Date().getFullYear();
    if (year > thisYear){
        testPassed = false;
        let errorMssg = 'Must be in the past';
        convertInRed('year');
        document.getElementById('nameErrorYear').textContent = errorMssg;
    }
    //date exist
    //fonction d'affichage
    function invalidDate(){
        let errorMssg = 'Must be a valid date';
        convertInRed('day');
        
        document.getElementById('month').style.borderColor = '#ff4b4b';
        document.getElementById('input-month').style.color = '#ff4b4b';
        document.getElementById('year').style.borderColor = '#ff4b4b';
        document.getElementById('input-year').style.color = '#ff4b4b';
        
        document.getElementById('nameErrorDay').textContent = errorMssg;
    }
    //fonction test date exist
    const daysInMonth = (year, month) => new Date(year, month, 0).getDate();
    if (day > daysInMonth(year, month)){
        invalidDate();
        testPassed = false;
    }
    
    //if all tests passed
    if (testPassed){
        calculator();
    }    
}
function calculator() {
    //date de naissance en input
    let day = document.getElementById('day').value;
    let month = document.getElementById('month').value;
    let year = document.getElementById('year').value;
    
    //date du jour
    let today = new Date();
    let todayDay = today.getDate();
    let todayMonth = today.getMonth() + 1;
    let todayYear = today.getFullYear();
    
    
        //date à renvoyer en prennant en compte les années bissextiles
    let yearDiff = todayYear - year;
    let monthDiff = todayMonth - month;
    let dayDiff = todayDay - day;
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        yearDiff--;
    }
    if (monthDiff < 0) {
        monthDiff += 12;
    }
    if (dayDiff < 0) {
        dayDiff += 30;
    }
    document.getElementById('yearP').innerHTML = yearDiff;
    document.getElementById('monthP').innerHTML = monthDiff;
    document.getElementById('dayP').innerHTML = dayDiff;
}