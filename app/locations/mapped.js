import Ember from 'ember';

/*
## Location API
Each location implementation must provide the following methods:
* implementation: returns the string name used to reference the implementation.
* getURL: returns the current URL.
* setURL(path): sets the current URL.
* replaceURL(path): replace the current URL (optional).
* onUpdateURL(callback): triggers the callback when the URL changes.
* formatURL(url): formats `url` to be placed into `href` attribute.
* detect() (optional): instructs the location to do any feature detection
    necessary. If the location needs to redirect to a different URL, it
    can cancel routing by setting the `cancelRouterSetup` property on itself
    to `false`.
Calling setURL or replaceURL will not trigger onUpdateURL callbacks.
*/

export default Ember.HistoryLocation.extend({
  implementation: 'mapped',
  language: null,

  getURL() {
    // return (state && state.logicalPath) || toLogicalPath(this._super());
    console.log("getURL", this._super());
    return this._super();
  },

  setURL(logicalPath) {
    var state = this.getState();

    if (!state || state.logicalPath !== logicalPath) {
      console.log("setURL", logicalPath);
      this.pushState(this.formatURL(logicalPath), logicalPath);
    }
  },

  replaceURL(logicalPath) {
    var state = this.getState();

    if (!state || state.logicalPath !== logicalPath) {
      this.replaceState(this.formatURL(logicalPath), logicalPath);
    }
  },

  pushState(realPath, logicalPath) {
    var state = { realPath, logicalPath };

    this.get('history').pushState(state, null, realPath);

    this._historyState = state;
    this._previousURL = this.getURL();
  },

  replaceState(realPath, logicalPath) {
    var state = { realPath, logicalPath };

    this.get('history').replaceState(state, null, realPath);

    this._historyState = state;
    this._previousURL = this.getURL();
  },

  onUpdateURL(callback) {
    this._super(callback);
  },

  formatURL(logicalPath) {
    console.log("formatURL", logicalPath);
    // return this._super(fromLogicalPath(logicalPath));
    return logicalPath;
  }
});
