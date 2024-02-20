$(document).ready(function() {
  // Toggle dropdown when toggle button is clicked
  $('.rd-navbar-search-toggle').click(function() {
      $(this).closest('.rd-navbar-group').find('.rd-navbar-dropdown').toggle();
  });
});
