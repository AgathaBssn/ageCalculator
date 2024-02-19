
function checkForm(){
    //getDate
    let day = document.getElementById('day').value;
    let month = document.getElementById('month').value;
    let year = document.getElementById('year').value;
    let dateInput = new Date(year, month, day);
    //convert in red
    function convertInRed(day){
        document.getElementById(day).style.borderColor = '#ff4b4b';
        document.getElementById('input-' + day).style.color = '#ff4b4b';
        let thisError = document.getElementById('nameError' + day.charAt(0).toUpperCase() + day.slice(1));
        thisError.style.display = 'block';
    }
    //Test if inputs filled
    if (day === '' || month === '' || year === ''){
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
    if ((day >= 32 || day <= 0) && day !== ''){
        let errorMssg = 'Must be a valid day';
        convertInRed('day');
        document.getElementById('nameErrorDay').textContent = errorMssg;
    } 
    if ((month >= 13 || month <= 0) && month !== ''){
        let errorMssg = 'Must be a valid month';
        convertInRed('month');
        document.getElementById('nameErrorMonth').textContent = errorMssg;
    }
    let thisYear = new Date().getFullYear();
    if (year > thisYear){
        let errorMssg = 'Must be in the past';
        convertInRed('year');
        document.getElementById('nameErrorYear').textContent = errorMssg;
    }
        
    
}
function calculator() {
    //date de naissance en input
    let day = document.getElementById('day').value;
    let month = document.getElementById('month').value;
    let year = document.getElementById('year').value;
    console.log(day, month, year)
    //date du jour
    let today = new Date();
    let todayDay = today.getDate();
    let todayMonth = today.getMonth() + 1;
    let todayYear = today.getFullYear();
    
    let diff = today.getTime() - new Date(year, month, day).getTime();
    
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