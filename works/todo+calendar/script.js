var currentTitle = document.getElementById('currentYearMonth');
var calendarBody = document.getElementById('calendarBody');
var today = new Date();
var first = new Date(today.getFullYear(), today.getMonth(), 1);
var dayList = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var monthList = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var leapYear = [31,29,31,30,31,30,31,31,30,31,30,31];
var notLeapYear = [31,28,31,30,31,30,31,31,30,31,30,31];
var pageFirst = first;
var pageYear;
if (first.getFullYear() % 4 === 0) {
    pageYear = leapYear;
} else {
    pageYear = notLeapYear;
}
function showCalendar() {
    let monthCnt = 100;
    let cnt = 1;
    for (var i = 0; i < 6; i++) {
        var $tr = document.createElement('tr');
        $tr.setAttribute('id', monthCnt);
        for (var j = 0; j < 7; j++) {
            if ((i === 0 && j < first.getDay()) || cnt > pageYear[first.getMonth()]) {
                var $td = document.createElement('td');
                $tr.appendChild($td);
            } else {
                var $td = document.createElement('td');
                $td.textContent = cnt;
                $td.setAttribute('id', cnt);
                $tr.appendChild($td);
                cnt++;
            }
        }
        monthCnt++;
        calendarBody.appendChild($tr);
        currentTitle.innerHTML = monthList[first.getMonth()] + '&nbsp;&nbsp;&nbsp;&nbsp;' + first.getFullYear();       
    }
}
showCalendar();

function removeCalendar() {
    let catchTr = 100;
    for (var i =100; i < 106; i++) {
        var $tr = document.getElementById(catchTr);
        $tr.remove();
        catchTr++;
    }
}

function prev() {
    inputBox.value = "";
    const $divs = document.querySelectorAll('#inputList > div');
    $divs.forEach(function(e) {
        e.remove();
    });
    const $btns = document.querySelectorAll('#inputList > button');
    $btns.forEach(function(e1) {
        e1.remove();
    });
    if (pageFirst.getMonth() === 1) {
        pageFirst = new Date(first.getFullYear()-1, 12, 1);
        first = pageFirst;
        if (first.getFullYear() % 4 === 0) {
            pageYear = leapYear;
        } else {
            pageYear = notLeapYear;
        }
    } else {
        pageFirst = new Date(first.getFullYear(), first.getMonth()-1, 1);
        first = pageFirst;
    }
    today = new Date(today.getFullYear(), today.getMonth() -1, today.getDate());
    currentTitle.innerHTML = monthList[first.getMonth()] + '&nbsp;&nbsp;&nbsp;&nbsp;' + first.getFullYear();
    removeCalendar();
    showCalendar();
    showMain();
    clickedDate1 = document.getElementById(today.getDate());
    clickedDate1.classList.add('active'); //날짜를 클릭하면 'active'클래스 추가
    clickStart();
    reshowingList();
}

function next() {
    inputBox.value = ""; //투두리스트 입력칸에 적혀있던 글을 없애줌
    const $divs = document.querySelectorAll('#inputList > div');
    $divs.forEach(function(e) {
        e.remove(); //투두리스트 적은 것들 없애줌
    });
    const $btns = document.querySelectorAll('#inputList > button');
    $btns.forEach(function(e1) {
        e1.remove(); //투두리스트 버튼들 없애줌
    });
    if (pageFirst.getMonth() === 12) { //넥스트버튼을 눌렀는데 다음 해로 넘어가야한다면
        pageFirst = new Date(first.getFullYear()+1, 1, 1); //년수를 +1, 1월 1일로 만들어줌
        first = pageFirst; // +1, 1월 1일이 그 달의 첫 날
        if (first.getFullYear() % 4 === 0) {
            pageYear = leapYear;
        } else {
            pageYear = notLeapYear;
        }
    } else {
        pageFirst = new Date(first.getFullYear(), first.getMonth()+1, 1); //다음해로 넘어가는게 아니라면 그냥 월만 +1
        first = pageFirst;
    }
    today = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
    currentTitle.innerHTML = monthList[first.getMonth()] + '&nbsp;&nbsp;&nbsp;&nbsp;' + first.getFullYear(); //&nbsp;은 공백
    removeCalendar();
    showCalendar();
    showMain();
    clickedDate1 = document.getElementById(today.getDate());
    clickedDate1.classList.add('active');
    clickStart();
    reshowingList();
}

function showMain() {
    var mainTodayDay = document.getElementById('mainDay');
    var mainTodayDate = document.getElementById('mainDate');
    mainTodayDay.innerHTML = dayList[today.getDay()];
    mainTodayDate.innerHTML = today.getDate();
}
showMain();

var clickedDate1 = document.getElementById(today.getDate());
clickedDate1.classList.add('active');
var prevBtn = document.getElementById('prev');
var nextBtn = document.getElementById('next');
prevBtn.addEventListener('click',prev);
nextBtn.addEventListener('click',next);
var tdGroup = []; //td들, 해당 월의 날짜들
function clickStart() {
    for (let i = 1; i <= pageYear[first.getMonth()]; i++) { // 1 ~ 이번달 마지막날까지 
        tdGroup[i] = document.getElementById(i); //tdGroup[1]이면 1일, tdGroup[2]이면 2일...
        tdGroup[i].addEventListener('click', changeToday); //
    }
}
function changeToday(e) {
    for (let i = 1; i <= pageYear[first.getMonth()]; i++) {
        if (tdGroup[i].classList.contains('active')) {
            tdGroup[i].classList.remove('active');
        }
    }
    clickedDate1 = e.currentTarget;
    e.currentTarget.classList.add('active');
    today = new Date(today.getFullYear(), today.getMonth(), clickedDate1.id);
    showMain();
    keyValue = today.getFullYear() + '' + today.getMonth() + '' + today.getDate();
    reshowingList();
}
clickStart();
function reshowingList() {
    keyValue = today.getFullYear() + '' + today.getMonth() + '' + today.getDate();
    if (todoList[keyValue] === undefined) {
        inputList.textContent = '';
        todoList[keyValue] = [];
        const $divs = document.querySelectorAll('#inputList > div');
        $divs.forEach(function(e) {
            e.remove();
        })
        const $btns = document.querySelectorAll('#inputList > button');
        $btns.forEach(function(e1){
            e1.remove();
        });
    } else if (todoList[keyValue].length === 0) {
        inputList.textContent = '';
        const $divs = document.querySelectorAll('#inputList > div');
        $divs.forEach(function(e) {
            e.remove();
        });
        const $btns = document.querySelectorAll('#inputList > button');
        $btns.forEach(function(e1) {
            e1.remove();
        })
    } else {
        const $divs = document.querySelectorAll('#inputList > div');
        $divs.forEach(function(e) {
            e.remove();
        });
        const $btns = document.querySelectorAll('#inputList > button');
        $btns.forEach(function(e1) {
            e1.remove();
        })
    }
    var $div = document.createElement('div');
    for (var i = 0; i < todoList[keyValue].length; i++) {
        var $div = document.createElement('div');
        $div.textContent = '-' + todoList[keyValue][i];
        var $btn = document.createElement('button');
        $btn.setAttribute('type', 'button');
        $btn.setAttribute('id', 'delData');
        $btn.setAttribute('id', dataCnt + keyValue);
        $btn.setAttribute('class', 'del-data');
        $btn.textContent = delText;
        inputList.appendChild($div);
        inputList.appendChild($btn);
        $div.addEventListener('click', checkList);
        $btn.addEventListener('click', deleteTodo);
        inputBox.value = '';
        function deleteTodo() {
            $div.remove();
            $btn.remove();
        }
    }
}

var inputBox = document.getElementById('inputBox');
var inputData = document.getElementById('inputData');
var inputList = document.getElementById('inputList');
var delText = 'X';
inputData.addEventListener('click', addTodoList);
var dataCnt = 1;
var keyValue = today.getFullYear() + '' + today.getMonth(); '' + today.getDate();
let todoList = [];
todoList[keyValue] = [];
function addTodoList() {
    var $div = document.createElement('div');
    $div.textContent = '-' + inputBox.value;
    var $btn = document.createElement('button');
    $btn.setAttribute('type', 'button');
    $btn.setAttribute('id', 'delData');
    $btn.setAttribute('id', dataCnt + keyValue);
    $btn.setAttribute('class', 'del-data');
    $btn.textContent = delText;
    inputList.appendChild($div);
    inputList.appendChild($btn);
    todoList[keyValue].push(inputBox.value);
    dataCnt++;
    inputBox.value = '';
    $div.addEventListener('click', checkList);
    $btn.addEventListener('click', deleteTodo);
    function deleteTodo() {
        $div.remove();
        $btn.remove();
    }
}

function checkList(e) {
    e.currentTarget.classList.add('checked');
}