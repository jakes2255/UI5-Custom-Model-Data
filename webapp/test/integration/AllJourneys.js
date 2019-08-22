/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"com/demo/ZDemo_CustomPath/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/demo/ZDemo_CustomPath/test/integration/pages/Display",
	"com/demo/ZDemo_CustomPath/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.demo.ZDemo_CustomPath.view.",
		autoWait: true
	});
});