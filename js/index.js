//it's example for params for function loadEvents
var exampleParams = [
	{
		name : "user_id",
		value : "6492"
	},
	{
		name : "offset",
		value : "0"
	},
	{
		name : "fields",
		value : "activity"
	},
	{
		name : "count",
		value : "100"
	}
]


$('#nearest').bind('pageinit', function(event) {
	var exampleParams = [
	{
		name : "user_id",
		value : "1112203"
	},
	{
		name : "filter",
		value : "events"
	},
	{
		name : "fields",
		value : "activity"
	},
	{
		name : "count",
		value : "100"
	},
	{
		name : "extended",
		value : "1"
	}
]
// https://oauth.vk.com/blank.html#access_token=3c0dbad9ae2f522f9b4394fef543c2a7412910f76f0e3f2be924ba393fe1f64f5fcc463d970dc765319c9&expires_in=86400&user_id=1112203
 //auth()
   loadEvents( exampleParams,"3c0dbad9ae2f522f9b4394fef543c2a7412910f76f0e3f2be924ba393fe1f64f5fcc463d970dc765319c9");

    $("#allEvents").listview({
        autodividers: true,
        autodividersSelector: function (p) {
            var out = p.attr("date");
            return out;
        }
    }).listview("refresh");
});

function paramsToString(params) {
	var paramString = "";
	for (var i = 0; i<params.length; i++)
	{
		paramString += params[i]["name"]+"="+params[i]["value"] + "&";
	}
	return paramString;
}

function loadEvents(params, accessToken) {

	$.ajax("https://api.vk.com/method/groups.get?"+paramsToString(params)+"access_token="+accessToken).done(function(data) {
     var i, userEvent;
     $.each(data.items, function (i, userEvent) {
     	//should show name
     	//userEvent.activity - for start of event - need for grouping (maybe shoud be converted to other format?)
        $("#allEvents").append("<p date="+userEvent.activity+">"+userEvent.name+"</p>");
     });
});
}

function auth() {
	$.ajax("https://oauth.vk.com/authorize?client_id=3860770&redirect_uri=https://oauth.vk.com/blank.html&scope=groups&display=mobile&response_type=token").done(function(data) {
		console.log(data)
	})
}