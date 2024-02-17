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