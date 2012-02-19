# swipeButton.js

SwipeButton is a jQuery Mobile plugin which allows developers to add iPhone style buttons to listview rows by attaching to the swipe event. This project contains everything you need to get started.

## Quick start

Clone the git repo - `git clone git@github.com:commadelimited/jquery.swipeButton.js.git` - or [download it](https://github.com/commadelimited/jquery.swipeButton.js/zipball/master)

## Usage & Documentation
Minimum usage requires that you override the default click event. All other arguments are optional.

	$('#swipeMe li').swipeDelete({
		click: function(e){
			e.preventDefault();
			$(this).parents('li').remove();
		}
	});

	$('#swipeMe li').swipeDelete({
		direction: 'swiperight', // standard jquery mobile event name
		btnLabel: 'Delete',
		btnTheme: 'b',
		btnClass: 'aSwipeBtn',
		click: function(e){
			e.preventDefault();
			$(this).parents('li').remove();
		}
	});

## Contributing

You are invited to contribute code and suggestions to this project. The more the merrier.

## Project Info

* Source: http://github.com/commadelimited/jquery.swipeButton.js
* Twitter: [http://twitter.com/commadelimited](http://twitter.com/commadelimited)

### 3rd party libraries required:

* jQuery: MIT/GPL license
* jQuery Mobile: MIT/GPL license

### Custom bits:

Public domain