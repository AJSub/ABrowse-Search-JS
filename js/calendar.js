    let dayList = document.querySelector('.days');
    let monthName = document.querySelector('.month-name');
    let yearName = document.querySelector('.year');

    let dt = new Date();
    let month = dt.getMonth()+1
    let year = dt.getFullYear();
    let currentDay = dt.getDate();

    let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'july', 'August', 'September', 'October', 'November', 'December']

    const calendar = ()=>{
        monthName.innerHTML = monthNames[month-1];
        yearName.innerHTML = year;
        dayList.innerHTML = ''
        
        daysInMonth = new Date(year, month, 0).getDate();

        dayNumber = new Date(year,month-1,1).getDay();
        let gaps
        if (dayNumber === 0) {
            gaps = 6
        }else{
            gaps = dayNumber - 1;
        }

        for(day = -gaps + 1 ;day<=daysInMonth; day++){
            const days = document.createElement('font');
            if(day<=0){
                days.innerHTML = "";
                dayList.appendChild(days);
            } else if (day===currentDay&&month===dt.getMonth()+1 && year===dt.getFullYear()){
                days.setAttribute('class','active');
                days.innerHTML = day;
                dayList.appendChild(days)
            }
            else{
                days.innerHTML = day;
                dayList.appendChild(days);
            }
        }
    }