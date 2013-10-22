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