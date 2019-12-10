function Ajaxall(option) {
    option.data = option.data || {};
    var str = "";
    for (var i in option.data) {
        str += `${i}=${option.data[i]}&`;
    }
    var xhr = new XMLHttpRequest();
    if (option.type === "get" || option.type === "GET") {
        var d = new Date();
        xhr.open(option.type, option.url + '?' + str + '__hzht=' + d.getTime(), true);
        on(xhr, option);
        xhr.send();
    } else if (option.type === "post" || option.type === "POST") {
        xhr.open(option.type, url, true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        on(xhr, option);
        xhr.send(str);
    } else if (option.jsonp) {
        var script = document.createElement("script");
        script.src = option.url + "?" + str;
        document.body.appendChild(script);
        window[option.data[option.data.colName]] = function (res) {
            option.callback(res);
        }
    }
}

function on(xhr, option) {
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            option.callback(xhr.responseText);
        }
    }
}