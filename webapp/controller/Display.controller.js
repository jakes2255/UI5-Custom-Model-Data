sap.ui.define([
	"com/demo/ZDemo_CustomPath/controller/baseController",
	"sap/ui/model/json/JSONModel"
], function (baseController, JSONModel) {
	"use strict";

	return baseController.extend("com.demo.ZDemo_CustomPath.controller.Display", {
		onInit: function () {
			
		},
		onPressAdd: function () {
			//retrive model using helper function in base class
			var oJsonModel = this.getMyModel("Results");
			//create an additional node to be added to the model
			var additional_props = {
				"organization": "SAP",
				"place": "Bangalore"
			};
			//add the new node to the current model
			oJsonModel.setProperty("/address",additional_props);
			//enable the panel visibility
			this.getView().byId("idPanelMore").setVisible(true);
			debugger;
		}
	});
});