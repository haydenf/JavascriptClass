function getUserName(){
    $.ajax({
        url: "https://randomuser.me/api/",
        type: "GET",
        success: data => console.log(data.results[0].name.first),
        error: err => console.log(err)
     });
}