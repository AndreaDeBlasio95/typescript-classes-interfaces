abstract class Department {
  static fiscalYear = 2024;
  // readonly is a TypeScript access modifier that makes the property read-only, meaning that it can only be set when the object is created.
  // private is a TypeScript access modifier that restricts access to the property from outside the class.
  // protected is a TypeScript access modifier that makes the property accessible to the class and its subclasses.
  protected employees: string[] = [];

  // constructor with access modifiers, it's a shorthand to create properties, and assign values to them, and even create and assign them to the class
  constructor(protected readonly id: string, public name: string) {
    //this.id = id;
    //this.name = name;
  }

  // this: Department is a type annotation that tells TypeScript that the this
  // keyword inside the describe() method will always refer to an object of the
  // Department class. This is useful when you want to ensure that the this keyword
  // is used correctly inside a method.
  // abstract methods are methods that have no implementation, they must be implemented in the derived classes
  abstract describe(this: Department): void;

  // static methods are called on the class itself, not on instances of the class.
  static createEmployee(name: string) {
    return { name: name };
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

// Inheritance
class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
  describe() {
    console.log("IT Department - ID: " + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  // getter - it's a method that allows you to get the value of a private property
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }
  // setter - it's a method that allows you to set the value of a private property
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("d2", []);
    return this.instance;
  }
  // overriding method from parent class
  addEmployee(name: string): void {
    if (name === "Andrea") {
      return;
    }
    this.employees.push(name);
  }
  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
  printReports() {
    console.log(this.reports);
  }

  describe() {
    console.log("Accounting Department - ID: " + this.id);
  }
}

const accountingDep = AccountingDepartment.getInstance();
const accountingDep2 = AccountingDepartment.getInstance();
console.log(accountingDep, accountingDep2); // we get the same instance

// creating employees with static method and access to static property
const employee1 = Department.createEmployee("Andrea");
console.log(employee1, Department.fiscalYear);

const itDepartment = new ITDepartment("dep1", ["Andrea", "Mark"]);
console.log(itDepartment);

itDepartment.addEmployee("Andrea");
itDepartment.addEmployee("Mark");

const accounting = new AccountingDepartment("dep2", []);
accounting.mostRecentReport = "Year End Report";
console.log(accounting.mostRecentReport);
accounting.addReport("All work fine in the department!");
console.log(accounting.mostRecentReport);
//accounting.printReports();
accounting.addEmployee("Andrea");
accounting.addEmployee("Mark");
accounting.describe();

//const accountingCopy = { name: "DUMMY", describe: accounting.describe };
//accountingCopy.describe(); // Department: undefined, this break the code
