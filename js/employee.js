var setBanner = function(message){d3.select("#banner")
    .text(message);}

var drawTable = function(employees)
{
   var rows = d3.select("#employeeTable, tbody")
    .selectAll("tr")
    .data(employees)
    .enter()
    .append("tr")
    
    rows.append("td")
    .text(function(employees){return employees.firstName+" "+employees.lastName;
                             });
    
    
    rows.append("td")
         .append("img")
         .attr("src",function(employees){
        return employees.photo;
                                       });
    
    rows.append("td")
    .text(function(employees){
        return employees.title;
                             });
    
    rows.append("td")
    .text(function(employees){
        return employees.unit;
                             });
    
    rows.append("td")
    .text(function(employees){
        return employees.email;
                             });
    
    rows.append("td")
    .text(function(employees){
        return employees.bio;
                             });
    
    rows.append("td")
    .text(function(employees){
        return employees.phone;
                             });
    
}

var employeePromise = d3.json("json/employee.json")

var succFCN = function(employees)
{
    console.log("employees",employees);
    setBanner("Here are the Employee Data");
    drawTable(employees);
    
}

var failFCN = function(err)
{
    console.error("did not find file",err);
    setBanner("Data are missing");
}

employeePromise.then (succFCN,failFCN);
