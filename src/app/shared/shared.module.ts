import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MatButtonModule, MatDialogModule,  MatInputModule } from '@angular/material';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, 
    MatButtonModule, 
    MatDialogModule,
    MatInputModule, 
    ReactiveFormsModule
  ],
  declarations: [HeaderComponent, CreatePostComponent],
  exports: [HeaderComponent, CreatePostComponent],
  entryComponents: [CreatePostComponent]
})

export class SharedModule { }
