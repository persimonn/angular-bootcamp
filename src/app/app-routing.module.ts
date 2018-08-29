import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserGuard } from './shared/guard/user.guard';
import { FeedGuard } from './shared/guard/feed.guard';

const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: 'feed', loadChildren: './feed/feed.module#FeedModule', canLoad: [FeedGuard] },
  { path: 'auth', loadChildren: './authentication/authentication.module#AuthenticationModule', canLoad: [UserGuard]},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
