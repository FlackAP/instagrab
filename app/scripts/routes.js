GrabbedRouter = Backbone.Router.extend({

	initialize: function() {
		this.images = new allGrabbed()
		this.images.add('url')

		if (window.location.hash) {
			this.accesstoken= window.location.hash.replace('#access_token=', "")
			console.log(window.location.hash.replace('#access_token=', ""))
			console.log("router.images.models")
		} 
		else  {
			// 'SHOW LOGIN BUTTON HERE'
			console.log('no hash')
		}	
	},

	routes: {
		"grabbed" : "showImages"

	},

	showImages: function(){
		console.log("showing all grabbed images")
		this.images.forEach(function(image){
			new ImageView({model:image})
		})
		// this.images.fetch({
		// 	success: function(image){
		// 		images.each(function(image){
		// 			new ImageView({model: Grabbed})
		// 	})
		// 	}
		// })
	}
})

var router= new GrabbedRouter()
Backbone.history.start()