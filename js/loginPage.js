//ID와 PASSWORD를 둘 다 입력했을 때 나타나는 반응
$('#name-input').on('input', checkInput);
$('#password-input').on('input', checkInput);

function checkInput() {
    let id = $('#name-input').val();
    let password = $('#password-input').val();
    let btnLogin = $('.btn-login');

    if(id === '' || password === '')
        btnLogin.removeClass('on');
    else 
        btnLogin.addClass('on');
}

//로그인을 한 후 다음 페이지로 넘어감
$('.btn-login').on('click', function() {
    let id = $('#name-input').val();
    let password = $('#password-input').val();
    
    if(id === '이건주' && password === '010418') 
        window.open('https://home-commemoration.netlify.app/');
    else if(id !== '이건주' || password !== '010418')
        alert('아이디 또는 패스워드가 잘못 입력 되었습니다.');
})
