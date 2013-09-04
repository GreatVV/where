//it's example for params for function loadEvents
var exampleParams = [
	{
		name : "user_id",
		value : "6492"
	},
	{
		name : "offset",
		value : "5"
	},
]


$('#nearest').bind('pageinit', function(event) {
    //loadEvents();
});


function loadEvents(params, accessToken) {

	$.ajax("https://api.vk.com/method/group.get?"+paramsToString(params)+"access_token=accessToken").done(function(data) {
     var i, userEvent;
     $.each(data.items, function (i, userEvent) {
     	//should show name
        $("#allEvents").append("<p>"+userEvent.name+"</p>");
     });
});
}

function paramsToString(params) {
	var paramString = "";
	for (var i = 0; i<params.length; i++)
	{
		paramString = params["name"]+"="+params["value"] + "&";
	}
	return paramString;
}