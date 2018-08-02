import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './components/project/project.component';
import { TicketCreateComponent } from './components/ticket-create/ticket-create.component';
import { ProjectCreateComponent } from './components/project-create/project-create.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { TicketEditComponent } from './components/ticket-edit/ticket-edit.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'project',
        children: [
            {
                path: 'create',
                component: ProjectCreateComponent
            },
            {
                path: ':id',
                component: ProjectComponent
            }
        ]
    },
    {
        path: 'ticket',
        children: [
            {
                path: 'edit/:ticketId',
                component: TicketEditComponent
            },
            {
                path: 'create/:projectId',
                component: TicketCreateComponent
            },
            {
                path: ':ticketId',
                component: TicketComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
