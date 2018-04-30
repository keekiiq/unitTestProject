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

    this.courses.push(new Course('953100','Intro for SE','701','3',{year: 1980, month: 5, day: 12},'08.00-12.00','CAMT113','50','Test'))

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
