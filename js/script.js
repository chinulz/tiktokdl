document.getElementById('headertxt').innerHTML = 'Tiktok Downloader';
document.getElementById('linktxt').innerHTML = 'Masukan Link';

//apikey
let ehem = ('\x6e\x75\x6c\x67\x61\x6e\x74\x65\x6e\x67'); //HEX
/*let ehem = String.fromCharCode(110, 117, 108, 103, 97, 110, 116, 101, 110, 103);*/ //ASCII
var key = ehem;

//functional
function getTik() {
    if (form.linkTiktok.value == "") {
        swal.fire('~error~', 'Tolong Masukan Link Dengan Benar', 'error');
    } else {
        var tiktok = document.getElementById('tik');
        tiktok.innerHTML = '<img src="https://imgkub.com/images/2022/05/09/loading.gif"></img>';
        var linkTiktok = document.getElementById('linkTiktok').value;
        var apiTik = 'https://api.dapuhy.xyz/api/socialmedia/snaptik?url=' + linkTiktok + '&apikey=' + key;
        return fetch(apiTik)
        .then((response) => response.json())
        .then((data) => {
            tiktok.innerHTML = '';
            let linkTik = data.download.server_1;
            tiktok.innerHTML += '<a href="' + linkTik + '">Download</a>';
        })
        .catch(e => console.log(e))
    }
}
