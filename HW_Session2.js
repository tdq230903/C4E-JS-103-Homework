dresser = ["socks", "shirts", "pants"];
console.log(dresser[1]);

odds = [1, 3, 5, 7, 9];
let sum = 0;
for (i=0; i<5; i++) {
    sum = sum + odds[i];
}
console.log(sum);

var firstName = "Neil";
var middleName = "deGrasse";
var lastName = "Tyson";
var Scientist = [firstName, middleName, lastName];
console.log(Scientist.join(" "))

people = ["Teddy", "Cathy", "Bobby"];
people[people.indexOf("Cathy")] = "Petter";

people.push("Barry");

people.unshift("Alice");

people.splice(people.indexOf("Petter")+1, 0, "John", "James");

people = people.slice(0, people.indexOf("James")) + ["James", 27] + people.slice(people.indexOf("James")+1);

people.splice(people.indexOf("Petter"), 1);
people.splice(people.indexOf("James"), 2);

randomName = people[Math.floor(Math.random()*people.length)];

link = "https://mindx.edu.vn/course/code-for-everyone";
sublink = link.substring(link.indexOf("mindx.edu.vn"), link.indexOf("mindx.edu.vn") + 13);
link = link.substring(0, link.indexOf("code-for-everyone")) + "code every one"
