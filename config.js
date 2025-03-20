
const config = {
    style: "mapbox://styles/mapbox/light-v11",
    accessToken: "pk.eyJ1Ijoic2Fsb21lLWVzdGV2ZXMiLCJhIjoiY204aGk5YzA3MDJnODJpc2I5Y3YwcHRnYiJ9.aTwjysqDNNh3KnCofj05wQ",
    CSV: "https://raw.githubusercontent.com/mapbox/impact-tools/refs/heads/master/finder/Sample_Data.csv",
    center: [-11.0897451, 39.7035119], //Lng, Lat
    zoom: 6, //Default zoom
    title: "Ranking das Escolas",
    description: "Navegue no mapa para explorar as escolas - públicas e privadas - que fazem parte do Ranking das Escolas da Renascença, com base nos exames nacionais de 2024.",
    sideBarInfo: ["Header", "Info 1", "Info 2"],
    popupInfo: ["Popup Information"],
    filters: [
        {
            type: "dropdown",
            title: "Title of filter: ",
            columnHeader: "Column Name",
            listItems: [
                'filter one',
                'filter two',
                'filter three',
                'filter four',
                'filter five',
                'filter six',
                'filter seven'
            ]
        },
        {
            type: "checkbox",
            title: "Title of filter: ",
            columnHeader: "Column Name",
            listItems: ["filter one", "filter two", "filter three"]
        },
        {
            type: "dropdown",
            title: "Title of filter: ",
            columnHeader: "Column Name",
            listItems: [
                'filter one',
                'filter two',
                'filter three',
                'filter four',
                'filter five',
                'filter six',
                'filter seven'
            ]
        }
    ]

};
