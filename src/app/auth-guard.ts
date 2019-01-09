import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { VariablesService } from './shared/services/variables.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private variables: VariablesService) { }
    canActivate() {
        if (this.variables._token) {
            return true;
        } else {
            this.router.navigate(['/homepage']);
            return false;
        }
    }
}
