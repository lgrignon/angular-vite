import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UsersComponent } from "./users/users.component";

export const appRouteList: Routes = [

    {
        path: 'users',
        component: UsersComponent
    },
    {
        path: '**',
        redirectTo: 'users'
    }
];

@NgModule({
    declarations: [
        UsersComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(appRouteList)
    ],
    bootstrap: [
    ],
    exports: [
        UsersComponent
    ]
})
export class AdminModule { }
