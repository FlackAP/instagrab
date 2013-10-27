Grabbed = Backbone.Model.extend({
	defaults: {
	},

	initialize: function(){
		console.log('really cool we made a model')
	}
}),

allGrabbed = Backbone.Collection.extend({
	initialize: function() {
		console.log('cool new collection')
		this.on('add', function(image) {
			new ImageView({model:image})
		})	
	},

  model: Grabbed,

  url: "https://api.instagram.com/v1/users/search?q=flackap&access_token=2695069.1eea9a1.5344624053fb40089c31b7d9c2c2c05b&callback=?"

})
