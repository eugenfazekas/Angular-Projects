import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { OutletDashboardComponent } from '@lct/lazy/dashboard/outlet-dashboard/outlet-dashboard.component';
import { OutletTodoComponent } from '@lct/lazy/todo/outlet-todo/outlet-todo.component';
import { OutletPostsComponent } from '@lct/lazy/posts/outlet-posts/outlet-posts.component';
import { AuthGuard } from '@lct/shared/auth.guard';

const routes: Route[] = [
    {
        path: '',
        component: OutletDashboardComponent,
        children: [
            {
                path: 'todos',
                component: OutletTodoComponent,
                canActivate: [AuthGuard]
            }, {
                path: 'posts',
                component: OutletPostsComponent,
                canActivate: [AuthGuard]
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class DashboardRoutingModule { }
