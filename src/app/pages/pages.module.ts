import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

export const appRouteList: Routes = [

    // {
    //     path: 'users',
    //     component: TypesComponent
    // },
    {
        path: '**',
        redirectTo: 'types'
    }
];

@NgModule({
    declarations: [
        
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(appRouteList)
    ],
    bootstrap: [
    ]
})
export class AdminModule { }
