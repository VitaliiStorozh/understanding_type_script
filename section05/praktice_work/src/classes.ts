abstract class Department {
  static fiscalYear = 2023;
  //   private readonly id: string;
  //   name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.name = name;
    // this.id = id;
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }

  describe() {
    console.log('IT Department - ID: ' + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  // Singleton pattern
  private static instance: AccountingDepartment;

  private constructor(id: string, public reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) return this.instance;
    this.instance = new AccountingDepartment('d2', []);
    return this.instance;
  }

  get mostRecentReport() {
    if (this.lastReport) return this.lastReport;
    throw new Error('No report found.');
  }

  set mostRecentReport(value: string) {
    if (!value) throw new Error('Please pass in a valid value.');
    this.addReport(value);
  }

  private addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }

  describe() {
    console.log('Accounting Department - ID: ' + this.id);
  }

  addEmployee(name: string) {
    if (name === 'Max') return;
    this.employees.push(name);
  }
}

const employee1 = Department.createEmployee('Dave'); // Static method
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment('d1', ['Max']);

it.describe();
it.addEmployee('Cristian');
it.addEmployee('Boris');
it.printEmployeeInformation();
console.log(it);

// const accounting = new AccountingDepartment('d2', []);

const accounting = AccountingDepartment.getInstance(); // Singleton pattern

// accounting.addReport('Something went wrong!'); // Won't work with private method
accounting.mostRecentReport = 'Something went wrong!'; // Setter
accounting.mostRecentReport = 'Year end report!'; // Setter
console.log(accounting.mostRecentReport); // Getter

accounting.addEmployee('Max');
accounting.addEmployee('Malic');
accounting.printReports();
accounting.printEmployeeInformation();
accounting.describe();

// const accountingCopy = { name: 'DUMMY', describe: it.describe };

// accountingCopy.describe();
