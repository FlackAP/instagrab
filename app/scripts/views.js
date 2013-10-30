ImageView = Backbone.View.extend({

	template: _.template( $('#photo-template').text() ),

	className:'image-unit',
 
	initialize: function(){
		console.log('view created!')
		$('.image-list').append(this.el),
		this.render()
	},

	render: function(){
		var that = this
		this.$el.append( this.template({item: this.model }) )
		this.model.get('tags').forEach(function(tag){
			// make a new tag
			var newTag = $("<span class='tag'>#" + tag + " </span>")
			
			$('.iso-tags').append(newTag)
			// add the class to the actual image
			that.$el.addClass(tag)
			
			newTag.click(function(){
				console.log('hey you clicked', tag);
				if ($('.image-unit').hasClass(tag)) {
					$('.image-unit').removeClass('hidden-tag')
					$('.image-unit').addClass('selected-tag')
				}
			})
		})
	}
})

MainView = Backbone.View.extend({

	initialize: function() {
		var that 	= this;
		this.images = new allGrabbed()
		this.logInCheck()


		// if you gave this view a template, and the .grab was in this.el,
		// you could use the events: {} to do the click even
		$('.grab').click(function(){
			unixConvert()
			var user= $('.user').val()

		  	console.log('https://api.instagram.com/v1/users/search?q='+ user + '&access_token=2695069.1eea9a1.5344624053fb40089c31b7d9c2c2c05b&callback=?')

		  	$.getJSON('https://api.instagram.com/v1/users/search?q='+ user + '&access_token=2695069.1eea9a1.5344624053fb40089c31b7d9c2c2c05b&callback=?').then(function(response) { 
		    	console.log('userID = ', response.data[0].id);

		    	$.getJSON('https://api.instagram.com/v1/users/' +response.data[0].id + '/media/recent?access_token=2695069.1eea9a1.5344624053fb40089c31b7d9c2c2c05b&count=33&next_max_id&callback=?').then(function(response){
		      		console.log('WOW THE PICS ARE', response.data)
		      		// add images to collection
		      		that.images.add(response.data)
		    	})
		 	})
		 //hides the footer on button click to  
		 $('.footer').hide()
		})

	},


	logInCheck: function() {
		if (window.location.hash) {
			this.accesstoken= window.location.hash.replace('#access_token=', "")
			console.log(window.location.hash.replace('#access_token=', ""))
			console.log('cool works')
			$('.authorize').hide()
		} 
		else  {
			console.log('no hash')
			$('.authorize').show()
		}
	}	
})

var mainView = new MainView()