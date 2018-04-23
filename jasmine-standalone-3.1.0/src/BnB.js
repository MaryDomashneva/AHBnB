'use strict';

function BnB() {
  this.properties = []
};

BnB.prototype.addProperty= function(property) {
  this.properties.push(property);
};
