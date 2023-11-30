import { Routes } from '@angular/router';
import { bnAuthGuard, bnNoAuthGuard } from '@binom/sdk-user/guards';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadComponent:  () => import('./home/home.component').then(m => m.HomeComponent)
    },

    {
        path: 'core/user-state-svc',
        loadComponent:  () => import('./svc/svc.component').then(m => m.SvcComponent)
    },
    {
        path: 'core/:id',
        loadComponent:  () => import('./directive-demo/directive-demo.component').then(m => m.DirectiveDemoComponent)
    },

    {
        path: 'guards/:id',
        canActivate: [bnAuthGuard('/home')],
        loadComponent:  () => import('./guard-demo/guard-demo.component').then(m => m.GuardDemoComponent)
    },

    {
        path: 'components/profile-image',
        canActivate: [bnNoAuthGuard('/home')],
        loadComponent:  () => import('./profile-image/profile-image.component').then(m => m.ProfileImageComponent)
    },

    {
        path: 'components/profile-card',
        canActivate: [bnNoAuthGuard('/home')],
        loadComponent:  () => import('./profile-card/profile-card.component').then(m => m.ProfileCardComponent)
    },

    {
        path: 'components/login-menu',
        canActivate: [bnNoAuthGuard('/home')],
        loadComponent:  () => import('./login/login.component').then(m => m.LoginComponent)
    },

    {
        path: 'components/password',
        canActivate: [bnNoAuthGuard('/home')],
        loadComponent:  () => import('./password/password.component').then(m => m.PasswordComponent)
    },

];
