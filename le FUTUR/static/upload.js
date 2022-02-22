function Upload() {
        var fileUpload = document.getElementById("fileUpload");
        var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv|.txt)$/;
        if (regex.test(fileUpload.value.toLowerCase())) {
            if (typeof (FileReader) != "undefined") {
                var reader = new FileReader();
                reader.onload = function (e) {
                    if(typeof(localStorage)!="undefined") {
                        // Valeur par défaut
                        if(!localStorage.total)  localStorage.setItem("total","0");
                        // Variable temporaire
                        var nb = "";
                        nb = parseInt(localStorage.getItem("total"));
                        nb++;
                        localStorage.setItem("total",nb);
                        var table = document.createElement("table");
                        var rows = e.target.result.split("\n");
                        for (var i = 0; i < 1 + 10; i++) {
                            var cells = rows[i].split(",");
                            if (cells.length > 1) {
                                var row = table.insertRow(-1);
                                for (var j = 0; j < cells.length; j++) {
                                    var cell = row.insertCell(-1);
                                    cell.innerHTML = cells[j];
                                }
                            }
                        }
                        var dvCSV = document.getElementById("dvCSV");
                        dvCSV.innerHTML = "";
                        dvCSV.appendChild(table);
                        } else {
                    alert("sessionStorage n'est pas supporté");
                
                    }
                  }
                reader.readAsText(fileUpload.files[0]);
                        
            } else {
                alert("This browser does not support HTML5.");
            }
        } else {
            alert("Please upload a valid CSV file.");
        }
}