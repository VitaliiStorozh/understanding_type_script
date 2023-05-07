class Department {
  //   private readonly id: string;
  //   name: string;
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.name = name;
    // this.id = id;
  }

  describe(this: Department) {
    console.log(`Department(${this.id}): ${this.name}`);
  }

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
}

class AccountingDepartment extends Department {
  private lastReport: string;

  constructor(id: string, public reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
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

  addEmployee(name: string) {
    if (name === 'Max') return;
    this.employees.push(name);
  }
}
const it = new ITDepartment('d1', ['Max']);

it.describe();
it.addEmployee('Cristian');
it.addEmployee('Boris');
it.printEmployeeInformation();
console.log(it);

const accounting = new AccountingDepartment('d2', []);

// accounting.addReport('Something went wrong!');
accounting.mostRecentReport = 'Something went wrong!';
accounting.mostRecentReport = 'Year end report!';
console.log(accounting.mostRecentReport);

accounting.addEmployee('Max');
accounting.addEmployee('Malic');
accounting.printReports();

accounting.printEmployeeInformation();

// const accountingCopy = { name: 'DUMMY', describe: it.describe };

// accountingCopy.describe();
