function scrollToThis(produit){
  document.getElementById(produit).scrollIntoView({
    behavior: "smooth"
  })
}

var produit1 = document.getElementById("produit1");
var produit2 = document.getElementById("produit2");
var produit3 = document.getElementById("produit3");
var ids = [produit1, produit2, produit3];
ids.forEach(function(id) {
  var waypoint = new Waypoint({
    element: id,
    handler: function(direction) {
      id.classList.add('is-visible');
    },
    offset: "75%"
  })
});


