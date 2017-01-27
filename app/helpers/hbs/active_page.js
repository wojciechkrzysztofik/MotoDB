var hb = require('hbs')

hb.registerHelper('active_page', function(current_page, link_name) {
  if(current_page === link_name) {
    return true;
  } else {
    return false;
  }
});
