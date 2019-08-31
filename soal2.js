
    //Nama : Tunggul Julianto Pasaribu
    //Institut Teknologi Del
    //Soal No 2.

    function is_username_valid(username) {
    
    var hurufkecil = /[a-z]/g;
    
    var hurufbesar = /[A-Z]/g;
    var number = /[0-9]/g;

      if(username.length >= 5 && username.length <= 9 && username.match(hurufkecil).length == username.length &&
      username.match(hurufbesar).length == username.length &&
      username.match(number).length == username.length)
      {
          return true;
      }
      return false;
  }
  
  function is_password_valid(password) {
    // huruf keci a sampai z
      var hurufkecil = /[a-z]/g;
    
    // huruf besar A sampai Z
    var hurufbesar = /[A-Z]/g;
  
    // angka dari 0 sampai 9
    var angka = /[0-9]/g;
  
    
    var special = /[=*&+^]/g;
  
    if(password.length == 8
       && hurufkecil.test(password)
       && hurufbesar.test(password)
       && angka.test(password)
       && special.test(password)) {
       return true;
    }
  
    return false;
  }


console.log(is_username_valid('Xrutaf888') ? 'benar' : 'salah'); // benar
console.log(is_username_valid('1Diana') ? 'benar' : 'salah');// salah
console.log(is_password_valid('passW0rd=') ? 'benar' : 'salah');//benar
console.log(is_password_valid('C0d3YourFuture!#')? 'benar' : 'salah');// salah
// Referensi berasal dari https://www.w3schools.com/js/js_regexp.asp
    