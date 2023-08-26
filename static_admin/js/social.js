
function commentReplyToggle(parent_id){
    const row = document.getElementById(parent_id);

    if (row.classList.contains('hide')){
        row.classList.remove('hide');
        row.classList.add('show');
    }else{
        row.classList.remove('show');
        row.classList.add('hide');
    }
}

function shareToggle(parent_id){
    const row = document.getElementById(parent_id);

    if (row.classList.contains('share-hidden')){
        row.classList.remove('share-hidden');
        row.classList.add('share-shown');
    }else{
        row.classList.remove('share-shown');
        row.classList.add('share-hidden');
    }
}

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

function removeNotification(removeNotificationURL , redirectURL){
    const csrftoken = getCookie('csrftoken');
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState == XMLHttpRequest.DONE){
            if (xmlhttp.status == 200){
                window.location.replace(redirectURL);
            }else{
                alert('OOPS ! An Error Occured'); 
            }
        }
    };
    xmlhttp.open("DELETE" , removeNotificationURL , true);
    xmlhttp.setRequestHeader("X-CSRFToken" , csrftoken);
    xmlhttp.send();
}

function formatTags(){
    const elements = document.getElementsByClassName('body');
    for (let i = 0; i < elements.length; i++){
        let bodyText = elements[i].children[0].innerText;

        let words = bodyText.split(' ');

        for (let j = 0; j < words.length; j++){
            if (words[j][0] === '#'){
                let replacedText = bodyText.replace(/\s\#(.*?)(\s|$)/g , `&nbsp<a href="/social/explore?query=${words[j].substring(1)}" >${words[j]}</a>&nbsp`);
                elements[i].innerHTML = replacedText;
            }
        }
    }
}

formatTags();