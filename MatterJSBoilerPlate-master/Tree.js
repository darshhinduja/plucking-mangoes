class Tree{

    constructor(){
        var tree_options={
            isStatic : true
          }
        
          this.tree = Bodies.rectangle(1050,300,400,400,tree_options)
          this.image = loadImage("Plucking mangoes/tree.png")
          World.add(world,this.tree);
    }
    display(){
        noStroke();
        fill(188,67,67);
        imageMode(CENTER);
        image(this.image,this.tree.position.x,this.tree.position.y,600,600);

    }
}