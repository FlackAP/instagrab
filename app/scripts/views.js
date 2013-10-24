ImageView = Backbone.View.extend({

	template: _.template( $('#photo-template').text() ),

	className:'image-unit',
 
	initialize: function(){
		console.log('view created!')
		$('.wrapper').append(this.el),
		this.render()
	},

	render: function(){
		this.$el.append( this.template({item: this.model }) )
	}
})

MainView = Backbone.View.extend({

	initialize: function() {
		var that = this;
		this.images = new allGrabbed()

		// maybe move this into another function in this view
		// and call it from the initialize
		if (window.location.hash) {
			this.accesstoken= window.location.hash.replace('#access_token=', "")
			console.log(window.location.hash.replace('#access_token=', ""))
		} 
		else  {
			// 'SHOW LOGIN BUTTON HERE'
			console.log('no hash')
		}	


		// if you gave this view a template, and the .grab was in this.el,
		// you could use the events: {} to do the click even
		$('.grab').click(function(){

		  var user= $('.user').val()

		  console.log('https://api.instagram.com/v1/users/search?q='+ user + '&access_token=2695069.1eea9a1.5344624053fb40089c31b7d9c2c2c05b&callback=?')

		  $.getJSON('https://api.instagram.com/v1/users/search?q='+ user + '&access_token=2695069.1eea9a1.5344624053fb40089c31b7d9c2c2c05b&callback=?').then(function(response) { 
		    console.log('userID = ', response.data[0].id);

		    $.getJSON('https://api.instagram.com/v1/users/' +response.data[0].id + '/media/recent?access_token=2695069.1eea9a1.5344624053fb40089c31b7d9c2c2c05b&callback=?').then(function(response){
		      console.log('WOW THE PICS ARE', response.data)
		      // add images to collection
		      that.images.add(response.data)
		    })

		  })

		})
	}
})

var mainView = new MainView()