<?php get_header(); ?>

<!-- TOP ELEMENTS BEGINS HERE AFTER FETCHING THE HEADER INFORMATION--->
<div id="logocontainer">
	<div id="logoblock">&nbsp;</div>
	<div id="logotext">PURPLE BURST</div>	
</div>

<!--<div id="nihongobox">日本語</div>-- JP VERSION DISABLED FOR THE BLOG--->
<div id="sloganbox">&quot;turning simple and random ideas into bursting results since the early dark days of the Internet....&quot;</div>

<div id="menublock">
	<a href="#" class="item">HOME</a>
	<a href="#" class="item">PORTFOLIO</a>
	<a href="#" class="item">ABOUT</a>
	<a href="#" class="item">CONTACT</a>
	<a href="#" class="item">DIARY</a>
</div>

<div id="showtitle"><?php bloginfo('description'); ?></div>
<!---TOP ELEMENTS AND STATIC STUFF ENDS HERE --->




<div id="blogcontents">


     <?php while (have_posts()) : the_post(); ?>


<div id="postbody">
<h1 class="posttitle"><a href="<?php the_permalink() ?>" class="linktitle"><?php the_title(); ?></a></h1>
<h3 class="postdate"> Posted on: <a href="<?php the_permalink() ?>" class="postlinks"><?php the_time('F jS, Y') ?></a></h3>


<p class="post"><?php the_content() ?></p>

<h3 class="postdate">Posted in <a href="#" class="postlinks"><?php the_category(', ') ?></a></h3>
</div><!--POST BODY THIS IS THE ONE THAT WILL START TO LOOP!-->
<?php endwhile; ?>


<div id="bloghistory">

<?php 

//number of total published posts defined by this variable
$numberposts = wp_count_posts()->publish;

if ($numberposts > 2)
{
	echo("<a href=" . posts_nav_link() . " class=postlinks></a>");
}else{
	echo("Nothing to Show...");
}


?>


</div>


</div><!--CLOSURE OF BLOG CONTENTS FIXED!!!--->


<!-- GET THE SIDE MENU OF THE WEB --->
<?php get_sidebar(); ?>


<!--GET THE FOOTER AND CLOSURE DIVS OF ALL THE PAGE --->
<?php get_footer(); ?>