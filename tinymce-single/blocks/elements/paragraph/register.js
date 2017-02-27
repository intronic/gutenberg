window.wp.blocks.register( {
	elements: [ 'p' ],
	type: 'text',
	icon: 'gridicons-posts',
	buttons: [
		'alignleft',
		'aligncenter',
		'alignright',
		{
			icon: 'gridicons-heading',
			onClick: function( editor ) {
				editor.formatter.apply( 'h1' );
			}
		},
		{
			icon: 'gridicons-quote',
			onClick: function( editor ) {
				editor.formatter.apply( 'blockquote' );
			}
		},
		'bullist',
		{
			icon: 'gridicons-code',
			onClick: function( editor ) {
				editor.formatter.apply( 'pre' );
			}
		}
	]
} );