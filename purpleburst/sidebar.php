
<div id="blogmenu">


<?php


//checking if the current displayed page is a post 
$pagecheck = is_single();


if ($pagecheck == "TRUE") {

echo'<a href="/blog" class="homeside"> << GO BACK</a>';

}

//thanks to this it will show the GO BACK button ONLY within the post pages and not on the blog index. 

?>

<p class="navtitles">CATEGORIES</p>

<ul class="navlist">
<?php 

	$args = array(
	 'orderby' => 'name' 
	 );
	 
	 
	 wp_list_categories('title_li=');

?>
</ul>


<p class="navtitles">RECENT POSTS</p>

<ul class="navlist">
<?php
	
	$args = array( 
	'numberposts' => '5', 
	'order' => 'DESC'
	);
	
	
	
	$recent_posts = wp_get_recent_posts( $args );//define variable with the arguments saved into the previous array
	foreach( $recent_posts as $recent )//shorten the variable name
	{
		echo '<li><a href=" ' . get_permalink($recent["ID"]) . ' " class="navlinks">' . $recent["post_title"] . '</a></li>';
	}

//concat with the DOT various kinds of stuff just like in javascript !

?>
</ul>


</div>
