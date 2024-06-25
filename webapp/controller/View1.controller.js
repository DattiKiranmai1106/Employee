sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.sap.kt.emp.employee.controller.View1", {
            onInit: function () {
                
            } ,
           function1 () {
                var jsonData1 ={"data1": [{
                    "SNo": "1",
                    "TypeOfDegree": "B.Tech",
                    "Branch": "E.C.E",
                    "PassOutYear":2023,
                    "Percentage/CGPA":7.05
                }, {
                    "SNo": "2",
                    "TypeOfDegree": "InterMediate",
                    "Branch":"MPC",
                    "PassOutYear":2019,
                    "Percentage/CGPA":9.73
                }]};

                var jsonData2={"data2":[
                     {
                        "SNo": "3",
                        "TypeOfDegree": "SSC",
                        "Branch": "10th",
                        "PassOutYear":2017,
                        "Percentage/CGPA":8.7
                    }
                ]};
                
                for(var i in jsonData2.data2){
                    jsonData1.data1.push(jsonData2.data2[i])
                }

                var oModel=new sap.ui.model.json.JSONModel();
                oModel.setData(jsonData1);
                var oColItem = this.getView().byId("colId");
                //this.getView().byId("idProductsTable").setModel(oModel)
                this.getView().setModel(oModel);
                this.getView().byId("idStudentTable").bindAggregation("items","/data1",oColItem);
                
            }     
        });
    });
