import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from '@lct/lazy/dashboard/dashboard-routing.module';
import { DialogElementsExampleDialog, OutletDashboardComponent } from '@lct/lazy/dashboard/outlet-dashboard/outlet-dashboard.component';
import { TodoModule } from '@lct/lazy/todo/todo.module';
import { PostsModule } from '@lct/lazy/posts/posts.module';
import { MaterialModule } from '@lct/ui/material.module';
import { AuthGuard } from '@lct/shared/auth.guard';

@NgModule({
    declarations: [
        OutletDashboardComponent,
        DialogElementsExampleDialog
    ],
    imports: [
        CommonModule, 
        TodoModule,
        PostsModule,
        MaterialModule,
        DashboardRoutingModule
    ],
    providers: [
        AuthGuard
    ]
})
export class DashboardModule { }
