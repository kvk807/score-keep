import{Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(() => {
//   class Person {
//     constructor(name = 'Anonymous', age = 0) {
//       this.name = name;
//       this.age = age;
//     }
//     getGreeting() {
//       // return "Hi! I am " + this.name + ".";
//       return `Hi! I am ${this.name}.`;
//     }
//     getPersonDescription() {
//       return `${this.name} is ${this.age} years old.`
//     }
//   }
//
//   class Employee extends Person {
//     constructor(name, age, title) {
//       super(name, age);
//       this.title = title;
//     }
//     getGreeting() {
//       if(this.title) {
//         return `Hi! I am ${this.name}. I work as a ${this.title}`;
//       } else {
//         return super.getGreeting();
//       }
//     }
//     hasJob() {
//       return !!this.title;
//     }
//   }
//
//   class Programmer extends Person {
//     constructor(name, age, language = 'assembly') {
//       super(name, age);
//       this.language = language;
//     }
//     getGreeting() {
//       if(this.language) {
//         return `Hi! I am ${this.name} and I am a ${this.language} developer.`;
//       } else {
//         return super.getGreeting();
//       }
//     }
//   }
//
//   let me = new Programmer('Spunky', 13);
//   console.log(me.getGreeting());
//   console.log(me.hasJob());
//
//   let bob = new Programmer('Kirk', 61, "javaScript");
//   console.log(bob.getPersonDescription());
//   console.log(bob.getGreeting());
 });
