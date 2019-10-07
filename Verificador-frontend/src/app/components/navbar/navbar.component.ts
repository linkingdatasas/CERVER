import {Component, OnChanges, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.scss']
})

export class NavbarComponent implements OnInit {
    constructor(protected router: Router) {
    }

    ngOnInit() {}

}