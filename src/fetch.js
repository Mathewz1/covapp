
export default function initialize(onSuccess, onFailure) {
    requestData("https://api.covid19api.com/summary", (result) => {
        if (result !== 'Error') {
            let summary = result.Countries;
            let global = result.Global;
            let countries = {}
            summary.forEach((el) => {
              Object.assign(countries, {[el.Country.toUpperCase()]: el.Slug})
            })
            
            summary.sort((ele1, ele2) => {
                if (ele1.TotalConfirmed > ele2.TotalConfirmed) return -1;
                else if (ele1.TotalConfirmed < ele2.TotalConfirmed) return 1;
                else return 0;
            })

            onSuccess(countries, summary, global)
        }
        
        else {
            onFailure("Unknown")
        }

        console.log(result)
    });
}

function requestData(url, callBack) {
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', url, true);
    xhttp.send();
    let call = 0;
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            callBack(JSON.parse(xhttp.responseText));
            call++;
            xhttp.abort();
        }
        
        else if (xhttp.status > 400) {
            callBack("Error");
            call++;
            xhttp.abort();
        }
    }
    setTimeout(() => {
        if (call === 0) {
            callBack("Error");
            xhttp.abort();
        }
    }, 10000);
}