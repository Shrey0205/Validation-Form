function validate()
{
    var username = document.getElementById('username').value
    var email= document.getElementById('email').value
    var pass = document.getElementById('pass').value
    var cpass= document.getElementById('cpass').value
    
    checkusername(username)
    checkemail(email)
    checkpassword(pass)
    checkpassmatch(pass , cpass)
}

function checkusername(username)
{
    if(username.length > 7)
    {
        document.getElementById('username').classList.add('success')
        document.getElementById('username').classList.replace('error','success')
        document.getElementById('username_error').innerHTML=''
    }
    else
    {
        document.getElementById('username').classList.add('error')
        document.getElementById('username_error').innerText='Invalid Username'
    }
}

function checkemail(email)
{
    if(email.length > 7 && email.includes('@gmail.com'))
    {
        document.getElementById('email').classList.add('success')
        document.getElementById('email').classList.replace('error','success')
        document.getElementById('email_error').innerHTML=''
    }
    else
    {
        document.getElementById('email').classList.add('error')
        document.getElementById('email_error').innerText='Invalid Email'
    }
}

function checkpassword(pass)
{
    if(pass.length > 7 )
    {
        document.getElementById('pass').classList.add('success')
        document.getElementById('pass').classList.replace('error','success')
        document.getElementById('pass_error').innerHTML=''
    }
    else
    {
        document.getElementById('pass').classList.add('error')
        document.getElementById('pass_error').innerText='Invalid Password'
    }
}

function checkpassmatch(pass , cpass)
{
    if(pass == cpass && pass!= '' )
    {
        document.getElementById('cpass').classList.add('success')
        document.getElementById('cpass').classList.replace('error','success')
        document.getElementById('cpass_error').innerHTML=''
    }
    else
    {
        document.getElementById('cpass').classList.add('error')
        document.getElementById('cpass_error').innerText='Password did not match'
    }
}