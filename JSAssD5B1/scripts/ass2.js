console.log("Code using OOPs");

function Classes() {
    class User {
        constructor(name, age, email) {
            this.name = name;
            this.age = age;
            this.email = email;
            this.coins = 0;
            this.courses = [];
        }

        login() {
            console.log(`${this.name} has Logged In.`);
            return this;
        }

        logout() {
            console.log(`${this.name} has Logged Out`);
            return this;
        }
    }

    class Moderator extends User {
        constructor(name, age, email) {
            super(name, age, email);
        }

        addCoins(userName) {
            this.name = userName;
            this.coins++;
            console.log(`Moderator ${this.name} Added ${this.coins} coin(s).`);
            return this.coins;
        }

        removeCoins(userName) {
            this.name = userName;
            this.coins--;
            console.log(`Moderator deducted ${this.coins} coin(s) from ${this.name}.`);
            return this.coins;
        }
    }

    class Admin extends Moderator {
        // constructor(name, age, email) {
        //     super(name, age, email);
        // }

        addCourse(user, course) {
            user.courses.push(course);
            console.log(`Admin ${user.name} Added ${user.courses} course.`);
            return user.courses;
        }

        deleteCourse(user, course) {
            //Admin.courses.pop();
            for (let i = 0; i < user.courses.length; i++) {
                if (course === user.courses[i]) {
                    user.courses.splice(i, 1);
                }
            }
            console.log(`${this.name} deleted the ${user.courses} course.`);
            console.log(`Remaining Course(s) of ${user.name} : ${user.courses}`);
            return user.courses;
        }
    }

    let user1 = new User("Tejal", 23, "tejalbadgujar22496@gmail.com");
    console.log(user1.login());
    let mod1 = new Moderator("LetsUpgrade Modertor", 2, "lum@gmail.com");
    //console.log(mod1);
    user1.coins = mod1.addCoins(user1.name);
    user1.coins = mod1.addCoins(user1.name);
    user1.coins = mod1.addCoins(user1.name);
    console.log(user1);
    user1.coins = mod1.removeCoins(user1.name);
    console.log(user1);
    let ad1 = new Admin("LetsUpgrade Admin", 2, "lua@gmail.com");
    //console.log(ad1);
    user1.courses = ad1.addCourse(user1, "Python");
    user1.courses = ad1.addCourse(user1, "Javascript");
    user1.courses = ad1.addCourse(user1, "Blockchain");
    console.log(user1);
    user1.courses = ad1.deleteCourse(user1, "Python");
    console.log(user1);
    user1.logout();
}

Classes();