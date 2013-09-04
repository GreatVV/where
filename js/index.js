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

    $("#allEvents").listview({
        autodividers: true,
        autodividersSelector: function (p) {
            var out = p.attr("date");
            return out;
        }
    }).listview("refresh");
});


function loadEvents(params, accessToken) {

	$.ajax("https://api.vk.com/method/group.get?"+paramsToString(params)+"access_token=accessToken").done(function(data) {
     var i, userEvent;
     $.each(data.items, function (i, userEvent) {
     	//should show name
     	//userEvent.activity - for start of event - need for grouping (maybe shoud be converted to other format?)
        $("#allEvents").append("<p date="+userEvent.activity+">"+userEvent.name+"</p>");
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