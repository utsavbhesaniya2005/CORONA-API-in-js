fetch('https://api.rootnet.in/covid19-in/stats/latest')
.then(res => res.json())
.then(res1 => {

    const stateName = res1.data.regional;
    
    stateName.forEach(ele => {

        stateNameList = ele.loc;
        
        document.getElementById('btn-group').innerHTML += `<button class="btn" onclick="covidPatientData('${stateNameList}')">${stateNameList}</button>`;
    });


}).catch(error => {
    console.log(error);
});

const covidPatientData = (sname) => {

    fetch(`https://api.rootnet.in/covid19-in/stats/${sname}`)
    .then(res => res.json())
    .then(res1 => {
        
        const coronaDetail = res1.data.regional.find(region => region.loc == sname);

        if(coronaDetail){
            document.getElementById('show-data').innerHTML = ` <tr>
                    <td>${coronaDetail.loc}</td>
                    <td>${coronaDetail.confirmedCasesIndian}</td>
                    <td>${coronaDetail.confirmedCasesForeign}</td>
                    <td>${coronaDetail.discharged}</td>
                    <td>${coronaDetail.deaths}</td>
                    <td>${coronaDetail.totalConfirmed}</td>
                </tr>`;
        }

    }).catch(error => {
        console.log(error);
    });
}