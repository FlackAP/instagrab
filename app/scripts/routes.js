GrabbedRouter = Backbone.Router.extend({

	initialize: function() {
		$('.main').html('')
		this.images = new allGrabbed()
		this.images.add(data)
	},

	routes: {
		"grabbed" : "showImages"
	},

	showImages: function(){
		console.log("showing all grabbed images")
		$('.main').html('')
		new ImageView({model:this.images})
		// this.images.fetch({
		// 	success: function(image){
		// 		images.each(function(image){
		// 			new ImageView({model: Grabbed})
		// 		})
		// 	}
		// })
	}
})

var router= new GrabbedRouter()
Backbone.history.start()