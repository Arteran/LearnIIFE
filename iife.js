// IIFE Immediately Invoked Function Expression

(function myFunction() {
    num++;
    console.log(num);
    return num !== 5 ? myFunction() : console.log("Done");
})(num = 0);

