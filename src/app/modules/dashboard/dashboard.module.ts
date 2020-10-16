import { NgModule } from '@angular/core';
import { SharedModule } from "../shared/shared.module";
import { DashboardComponent } from './dashboard.component';
import { CourseComponent } from './pages/course/course.component';
import { CourseListComponent } from "./components/course-list/course-list.component";
import { CourseItemComponent } from "./components/course-item/course-item.component";
import { SearchComponent } from './components/search/search.component';



@NgModule({
  declarations: [
    DashboardComponent,
    CourseComponent,
    CourseListComponent,
    CourseItemComponent,
    SearchComponent
  ],
  imports: [
    SharedModule
  ]
})
export class DashboardModule { }
