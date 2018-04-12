var box = {
  "material" : "fiber",
  "length" : "20px",
  "width" : "10px",
  "height" : "30px"
};
console.log(box.material);

box ["label"] = "Amazing Page";
console.log(box.label);
box.label = box.label + " is Super Awesome";
console.log(box.label);

box["label"] =  "cardboard";
console.log(box.label);
