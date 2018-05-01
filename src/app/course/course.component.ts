import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  // This method associate to New Button.
onNew() {
  // Initiate new registration.
  this.regModel = new Course();
  // Change submitType to 'Save'.
  this.submitType = 'Save';
  // display registration entry section.
  this.showNew = true;
  }

  // This method associate to Save Button.
onSave() {
  if (this.submitType === 'Save') {
  // Push registration model object into registration list.
  this.courses.push(this.regModel);
  } else {
  // Update the existing properties values based on model.
  this.courses[this.selectedRow].courseId = this.regModel.courseId;
  this.courses[this.selectedRow].tile = this.regModel.tile;
  this.courses[this.selectedRow].section = this.regModel.section;
  this.courses[this.selectedRow].credit = this.regModel.credit;
  this.courses[this.selectedRow].day = this.regModel.day;
  this.courses[this.selectedRow].time = this.regModel.time;
  this.courses[this.selectedRow].room = this.regModel.room;
  this.courses[this.selectedRow].seat = this.regModel.seat;
  this.courses[this.selectedRow].description = this.regModel.description;
  }
  // Hide registration entry section.
  this.showNew = false;
  }

  // This method associate to Edit Button.
onEdit(index: number) {
  // Assign selected table row index.
  this.selectedRow = index;
  // Initiate new registration.
  this.regModel = new Course();
  // Retrieve selected registration from list and assign to model.
  this.regModel = Object.assign({}, this.courses[this.selectedRow]);
  // Change submitType to Update.
  this.submitType = 'Update';
  // Display registration entry section.
  this.showNew = true;
  }

  // This method associate to Delete Button.
onDelete(index: number) {
  // Delete the corresponding registration entry from the list.
  this.courses.splice(index, 1);
  }

  // This method associate to Cancel Button.
onCancel() {
  // Hide registration entry section.
  this.showNew = false;
  }

  // This method associate to Bootstrap dropdown selection change.
onChangeCountry(credit: string) {
  // Assign corresponding selected country to model.
  this.regModel.credit = credit;
  }

  // It maintains list of Registrations
courses: Course[] = [];
// It maintains registration Model
regModel: Course;
// It maintains registration form display status. By default it will be false.
showNew: Boolean = false;
// It will be either 'Save' or 'Update' based on operation.
submitType: string = 'Save';
// It maintains table row index based on selection.
selectedRow: number;
// It maintains Array of countries.
credit: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  constructor() {
    this.courses.push(new Course('953100','Intro for SE','701','3','Tue-Fri','08.00-12.00','CAMT113','50','Test')),
    this.courses.push(new Course('204100','IT and Modern Life','701','3','Tu','12.30-14.30','CSB202','50','Computers in everyday life, Data processing and information management, Office automation software for modern life and Internet and webpage construction.')),
    this.courses.push(new Course('953201','Algo design & Analysis','701','3','Mon-Th','13.00-14.00','CAMT113','50','Designing efficient algorithm. Evaluating algorithm performance. Effectiveness of classes of algorithms. Design and use of recursive algorithms. Algorithms related to solving problems. Sorting and searching algorithms. Time and space complexity. Complexity analyzing algorithms.')),
    this.courses.push(new Course('953323','Software cons test & Maint','701','3','Tu','09.30-12.30','CAMT114','50','Introduction to software construction. Implementation language. Coding styles. Development and use of program documentation. Concepts, methods, processes and techniques. System and process engineering. Impact analysis, migration, refactoring. Transformation and reverse engineering.')),
    this.courses.push(new Course('953392','	Software engineering preproject','3','Mo','08.00-9.00','CAMT218','50','Software Engineering project preparation. Literature review technique. Feasibility study. Project proposal development. Proposal presentation. Grading will be given on satisfactory or unsatisfactory basis.')),
    this.courses.push(new Course('953422','Software Quality','701','3','Fri','09.30-12.30','CAMT114','50','Introduction to quality assurance. Code of ethics. Software quality factors. Development standards, models and methodologies. Process and product quality assurance. Software reviews. Software inspections. Verification and Validation. Software configuration management.')),
    this.courses.push(new Course('953494','Selected Topic in SE 1','701','3','TBA','0.00','TBA','50','Intensive study of current interesting topics and new development in various fields of software engineering.')),
    this.courses.push(new Course('953495','Selected Topic in SE 2','701','3','Tue','14.30-17.30','CAMT316','50','Intensive study of current interesting topics and new development in various fields of software engineerin')),
    this.courses.push(new Course('953701','Intro SW Development','001','3','Th','09.30-12.30','CAMT215','50','Software engineer body of knowledge (SWEBOK) , software requirement, tools for software requirements, software design, tools for software design, software construction, tools for software construction, software testing, tools for software testing, software maintenance, tools for software maintenance')),,
    this.courses.push(new Course('953702','Intro SW Process MGMT','001','3','Wed','09.00-12.00','CAMT215','50',' Software engineer body of knowledge (SWEBOK)')),
    this.courses.push(new Course('953100','SE for business Apps','801','3','SaSu','9.00-16.00','TBA','50','Business requirements. Transaction processing system (TPS) design and implementation. '))



   }

  ngOnInit() {
  }

}

class Course {
  constructor(
  public courseId: string = '',
  public tile: string = '',
  public section: string = '',
  public credit: string = 'Select credit',
  public day: NgbDateStruct = null,
  public time: string = '',
  public room: string = '',
  public seat: string = '',
  public description: string = ''
  ) {}
  }
