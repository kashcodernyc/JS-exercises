// Exercises
// Exercises Level 1
// Create an Animal class. The class will have name, age, color, legs properties and create different methods
class AniMal {
    constructor(name, age, color, legs){
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }

    get description(){
        return `${this.name} is ${this.age} years old and has ${this.color} fur`
    }
}

const goldenDoodle = new AniMal('goldenDoodle', 4, 'brown');
console.log(goldenDoodle.description)

// Create a Dog and Cat child class from the Animal Class.
// Exercises Level 2
// Override the method you create in Animal class
class Dog extends AniMal {
    get description (){
        return `${this.name} has ${this.color} fur and has ${this.legs} legs`
    }
}

class Cat extends AniMal {

}

const samoet = new Dog('Samoet', 2, 'white', 4)
console.log(samoet.description)

// Exercises Level 3
// Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

class Statistics{
    static Count(){
        return `Count: ${ages.length}`
    }
    static Sum(){
        return `Sum: ${ages.reduce((acc, cur) => acc+cur)}`
    }
    static Min(){
        return `${Math.max(...ages)}`
    }
    static Max(){
        return  `Max: ${Math.max(...ages)}`
    }
}

console.log(Statistics.Min)

// Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

class PersonAccount{
    constructor(firstname, lastname, income, expenses, accountBalance){
        this.firstname = firstname;
        this.lastname = lastname;
        this.accountBalance = accountBalance;
        this.income = 0;
        this.expenses = 0;
    }

    totalIncome(){
        return `total income: ${this.income}`
    }

    totalExpense(){
        return `total expense: ${this.expense}`
    }

    get accountInfo(){
        return `${this.firstname} ${this.lastname} have ${this.accountBalance}`
    }

    set addIncome(check){

    }
    set addExpense(bill){

    }

    set accountBalance(balace){
        return this.accountBalance+balace
    }
}

const robert = new PersonAccount('Robert', 'Dinero', 12000, 12);
console.log(robert.accountInfo());