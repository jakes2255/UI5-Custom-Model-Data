/*Base controller with reusable methods */
sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.demo.ZDemo_CustomPath.controller.BaseController", {

		//helper function to retrieve the global model
		getMyModel: function(sName) {
			return this.getOwnerComponent().getModel(sName);
			debugger;
		}
	});

});