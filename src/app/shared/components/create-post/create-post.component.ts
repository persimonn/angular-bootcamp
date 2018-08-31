import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FeedService } from '../../services/feed.service';

import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'bc-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  contentId: string;
  form: FormGroup;

  constructor(private fb: FormBuilder,
    private feedService: FeedService,
    private router: Router,
    private dialogRef: MatDialogRef<CreatePostComponent>) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.form = this.fb.group(
      {
        caption: new FormControl('', [
          Validators.required,
        ])
      }
    )
  }
  
  image: any = {url: '', contentId: ''};

  uploadImage(event) {
    
    const file = event.target.files[0];
    const fileReader = new FileReader();
    const formData = new FormData();

    formData.append("media", file);

    fileReader.onloadend = () => {
      this.feedService.uploadImage( formData ).subscribe(
        (response) => {
          this.image.url = fileReader.result;
          this.contentId = response.payload.contentId;
        }
      );
    };
    fileReader.readAsDataURL(file);
  }

  uploadPost() {
    const payload = { contentId: this.contentId, caption: this.form.get('caption').value }
    this.feedService.uploadPost(payload).subscribe(
      (response) => {
        this.dialogRef.close();
        this.router.navigate(['feed']);
      }
    )
  }
}




