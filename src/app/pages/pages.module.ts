import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MoviesComponent } from "./movies/movies.component";

export const appRouteList: Routes = [

    {
        path: 'movies',
        component: MoviesComponent
    },
    {
        path: '**',
        redirectTo: 'types'
    }
];

@NgModule({
    declarations: [
        MoviesComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(appRouteList)
    ],
    bootstrap: [
    ],
    exports: [
        MoviesComponent
    ]
})
export class PagesModule { }
