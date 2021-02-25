      
            //1- shape class
         export   class Shape {
                constructor(len){
                    this.length = len;
                };
                area(){

                }
                perimeter(){

                }
                toString(){
                    console.log(`area is: ${this.area()} , perimeter is: ${this.perimeter()}`);
                }
            }
            // 2- rec class
            export   class Rec extends Shape{
                constructor(len,w){
                    super(len);
                    this.width = w;
                }
                area(){
                    return this.length*this.width;
                }
                perimeter(){
                    return (this.length+this.width)*2;
                }
              

            }
            //3- square class
            export    class Square extends Shape{
                constructor(le){
                    super(le);
                }
                area(){
                    return this.length*this.length;
                }
                perimeter(){
                    return (this.length+this.length)*2;
                }
            
            }

            //4- circle class
            export    class Circle extends Shape{
                constructor(rad){
                    super(rad);
                }
                area(){
                    return this.length*this.length*3.14;
                }
                perimeter(){
                    return 2*this.length*3.14;
                }
            }
         