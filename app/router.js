import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

/*
https://guides.emberjs.com -> redirects to latest version

https://guides.emberjs.com/v2.4.0/
https://guides.emberjs.com/v2.4.0/getting-started/
https://guides.emberjs.com/v2.4.0/getting-started/quick-start/

// post-translation

https://guides.emberjs.com -> redirects to latest version
https://guides.emberjs.com/v2.4.0/
https://guides.emberjs.com/v2.4.0/getting-started/
https://guides.emberjs.com/v2.4.0/getting-started/quick-start/

https://guides.emberjs.com/en/ -> redirects to latest version
https://guides.emberjs.com/en/v2.4.0/
https://guides.emberjs.com/en/v2.4.0/getting-started/
https://guides.emberjs.com/en/v2.4.0/getting-started/qick-start/

https://guides.emberjs.com/v2.4.0/
https://guides.emberjs.com/v2.4.0/getting-started/
https://guides.emberjs.com/v2.4.0/getting-started/quick-start/
https://guides.emberjs.com/en/
https://guides.emberjs.com/en/v2.4.0/
https://guides.emberjs.com/en/v2.4.0/getting-started/
https://guides.emberjs.com/en/v2.4.0/getting-started/qick-start/

 */

Router.map(function() {
  this.route('guides', { path: ':version' });
  this.route('guide', { path: ':version/:section/:guide' });
});

export default Router;
