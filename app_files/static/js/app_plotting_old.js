
function init() {

    d3.json("./data/def_area_2004_2019.json").then((incomingData) => {

        let acState = Object.values(incomingData.AC);

        let years = Object.values(incomingData["Ano/Estados"]).map(year => year);

            // Create chartData to insert into newPlot() function
        var chartData = [{
            x: years,
            y: acState, 
            name: "Deforestation By Brazilian States",
            type: "scatter",
            mode: "lines"
            }];

        // Format the layout of the plot
        var layoutLine = {
        title: "Deforestation By Brazilian States",

      };

    Plotly.newPlot("chart", chartData, layoutLine); 
    });
}   

d3.selectAll("#selDataset").on("change", getData);

function getData() {
    // STEP A - Select the drop down element
    let dropdownMenu = d3.select("#selDataset");
    var dataset = dropdownMenu.property("value");
    console.log(dataset)

    var data = [];

        d3.json("./data/def_area_2004_2019.json").then(incomingData => {
            let years = Object.values(incomingData["Ano/Estados"]).map(year => year);
            console.log(years);
            console.log(typeof years);

            if (dataset == "AC") {
                data =  Object.values(incomingData.AC);
            }
            else if (dataset == "AM") {
                data = Object.values(incomingData.AM);
            }
            else if (dataset == "AP") {
                data =  Object.values(incomingData.AP);
            }
            else if (dataset == "MA") {
                data =  Object.values(incomingData.MA);
            }
            else if (dataset == "MT") {
                data =  Object.values(incomingData.MT);
            }
            else if (dataset == "PA") {
                data =  Object.values(incomingData.PA);
            }
            else if (dataset == "RO") {
                data =  Object.values(incomingData.RO);
            }
            else if (dataset == "RR") {
                data =  Object.values(incomingData.RR);
            }
            else if (dataset == "TO") {
                data =  Object.values(incomingData.TO);
            }
  
            var chartData = [{
                x: years,
                y: data, 
                name: "Deforestation By Brazilian States",
                type: "scatter",
                mode: "lines"
                }];
    
            // Format the layout of the plot
            var layoutLine = {
            title: "Deforestation By Brazilian States",
          };
    
        Plotly.newPlot("chart", chartData, layoutLine); 

        });
    }

init();