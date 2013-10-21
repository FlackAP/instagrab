Grabbed = Backbone.Model.extend({
	defaults: {
		Photo: 'cool.jpg',
		Timestamp: '',
		Caption: '',
		Likes: 'No',
		Comments: 'No'
	},

	initialize: function(){
		console.log('really cool we made a model')
	}
}),

allGrabbed = Backbone.Collection.extend({
	initialize: function() {
		console.log('cool new collection')
	},

  model: Grabbed

})

var data = [
	{
	Photo: 'images/cool.jpg',
	Timestamp: 'September 1 2013',
	Caption: 'Smokin a pipe and brooding',
	Likes: '100',
	Comments: '4,000'
	},
	{
	Photo: 'images/rocky.jpg',
	Timestamp: 'October 3 2013',
	Caption: 'Wow Cool Dog!!!!',
	Likes: '200',
	Comments: '13'
	},
	{
	Photo: 'images/three.jpg',
	Timestamp: 'October 4 2013',
	Caption: '#Cool #Drinking #A Coffee#',
	Likes: '100',
	Comments: '4,000'
	},
	{
	Photo: 'images/shine.jpg',
	Timestamp: 'October 4 2013',
	Caption: 'MOONSHINE GET YA DRUNK',
	Likes: '500',
	Comments: 'Over 9,000'
	}
]