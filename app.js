let command = "";

const print = function () {
    let htmlstr = '';
    for (let i = 0; i < employeeList.length; i++) {
        htmlstr += `<div class="output"><p> ${employeeList[i].name}</p><p> ${employeeList[i].officeNum}</p><p> ${employeeList[i].phoneNum}</p><div>`;

    }
    render(htmlstr);
}

const add = function () {
    const userName = $('#name').val();
    const officeNum = $('#office').val();
    const phoneNum = $('#phone').val()
    employeeList.push({
        name: userName,
        officeNum: officeNum,
        phoneNum: phoneNum
    })
    print();
}









const runcommand = function () {
    console.log('add');
    event.preventDefault();
    switch (command) {
        case 'add':
            add();
            break;
        case 'verify':
            verify();


    }
}






const setView = function () {
    $('#list').empty();
    command = '';
    $('form').hide();
    print();
}



const verify = function () {
    const userName = $('#name').val();
    let htmlstr = 'no';
    for (let i = 0; i < employeeList.length; i++) {
        if (employeeList[i].name === userName) {
            htmlstr = 'yes';
        }

    }
    render(htmlstr);

}








const setAdd = function () {
    $('#list').empty();
    command = 'add';
    $('form').show();
    $('.extra-inputs').show();
}



const setVerify = function () {
    $('#list').empty()
    command = 'verify';
    $('form').show();
    $('extra-inputs').hide()


}





const render = function (htmlstr) {
    $('#list').html(htmlstr);
}




$('#view').on('click', setView);
$('#add').on('click', setAdd);
$('#verify').on('click', setVerify);

$('#submit').on('click', runcommand)



console.log("connected");