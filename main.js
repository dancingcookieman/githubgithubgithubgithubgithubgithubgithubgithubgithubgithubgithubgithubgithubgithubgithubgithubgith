people = [];
function clickedme() {
        var person_1 = document.getElementById("name_of_the_student_1").value;
        var person_2 = document.getElementById("name_of_the_student_2").value;
        var person_3 = document.getElementById("name_of_the_student_3").value;
        var person_4 = document.getElementById("name_of_the_student_4").value;

        people.push(person_1);
        people.push(person_2);
        people.push(person_3);
        people.push(person_4);

    document.getElementById("a_div").innerHTML = people;
    console.log("people");
    document.getElementById("cookieclicker").style.display = "none";
    document.getElementById("cookieshower").style.display = "inline-block";
}
function sortme() {
    peopl.sort();
    document.getElementById("a_div").innerHTML = people;
    console.log("people");
}