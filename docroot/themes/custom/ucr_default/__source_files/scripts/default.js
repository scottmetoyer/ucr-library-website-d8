jQuery(document).ready(function() {
  jQuery(document).foundation();
 jQuery('#main-menu-container', document).find('li[aria-expanded]').attr('aria-expanded', 'false');
  
  if(jQuery('#mobile-menu-expander')) {
    jQuery('#mobile-menu-expander').on('click', function() {
      jQuery(this).toggleClass('mobile-menu-expander', 'addOrRemove' );
      jQuery(this).toggleClass('mobile-menu-expander-clicked');
    });
  }
});
