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
	Timestamp: 'Sept. 1',
	Caption: 'cool pic',
	Likes: 'No',
	Comments: 'No'
	},
	{
	Photo: 'images/cool.jpg',
	Timestamp: 'Sept. 1',
	Caption: 'cool pic',
	Likes: 'No',
	Comments: 'No'
	}
]