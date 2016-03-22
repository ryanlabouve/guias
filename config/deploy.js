module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'guias',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
