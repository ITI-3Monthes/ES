 import * as shapes from "./myClasses.js";
//  import {Shape ,Rec ,Square ,Circle } from "./myClasses.js";
 //q1
     //1- create object
     var obj = {name:"",age:"",address:""};
     //creates it`s handles
     var handler={
            get:function(target,prop){
             // check prop exist
             if(!(prop in target)){
                  throw "not Exist"
             }

            return target[prop];
         },
         set:function(target,prop,val){
             if(!(prop in target)){
                  throw "not Exist"
             }
               //define 7 string pattern
               var patt = /[A-z]{7,}/g;
             // check name prop is a string and match pattern
             if(prop === "name"){
                 var cond = patt.test(val);
                 
                 if(typeof val != "string" || !cond) throw "name must be string with 7 char"
             }
                // check addres prop is a string and match pattern
                if(prop === "address"){
                 if(typeof val != "string") throw "address must be string"
             }
                // check addres prop is a string and match pattern
                if(prop === "age"){
                 if(typeof val != "number") throw "age must be Number"
             }
             target[prop]= val;
         }
     }
      
 //3- create proxy for obj
     var myProxy = new Proxy(obj,handler); 
   //q2
   var shape1 = new shapes.Shape(10);
   var rec1 = new shapes.Rec(10,5);
   var sq = new shapes.Square(10);
   var cir = new shapes.Circle(10);
   rec1.toString();
   sq.toString();
   cir.toString();
   console.log(rec1)
   
