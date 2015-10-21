var	notificationService = require('./notificationService'),
	dataAggregator = require('./dataAggregator'),
	reportCriteriaCreator = require('./reportCriteriaCreator'),
	reportDataCapturer = require('./reportDataCapturer'),
	reportService = require('./reportService');

module.exports = {
	render_criteria : function(req, res, next){
	var create_program_template = require('../data/startup_criteria_template.json');

	return res.render("criteria_for_startup", {
			create_program_template : create_program_template,
			OrganisationType : "StartUp"
		});
	},
	save_report : function(req, res, next){

	return res.redirect('/startup_criteria');
	},
	view_report : function(req, res, next){
		var report = reportService.hub_report();

		res.render('view_report', {report : report});
	}
}