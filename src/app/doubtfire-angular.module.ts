import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatDividerModule, MatCheckboxModule, MatDialogModule, MatIconModule, MatListModule, MatStepperModule, MatFormFieldModule, MatInputModule } from '@angular/material';

import { UIRouterUpgradeModule } from '@uirouter/angular-hybrid';

import { PopoverModule } from 'ngx-bootstrap';
import { setTheme } from 'ngx-bootstrap/utils';

import { AboutDoubtfireModalService } from 'src/app/common/modals/about-doubtfire-modal/about-doubtfire-modal.service';
import { AboutDoubtfireModal, AboutDoubtfireModalContent } from 'src/app/common/modals/about-doubtfire-modal/about-doubtfire-modal.component'
import { DoubtfireConstants } from 'src/app/config/constants/doubtfire-constants';

import { DoubtfireAngularJSModule } from 'src/app/doubtfire-angularjs.module';
import { HttpErrorInterceptor } from './common/services/http-error.interceptor';
import { unitProvider, taskServiceProvider, analyticsServiceProvider, taskProvider, alertServiceProvider, CommentResourceServiceProvider, AudioRecorderProvider, AudioRecorderServiceProvider, DiscussionCommentServiceProvider } from './ajs-upgraded-providers';
import { TaskCommentComposerComponent } from 'src/app/tasks/task-comment-composer/task-comment-composer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ContenteditableModule } from '@ng-stack/contenteditable';
import { AudioCommentRecorderComponent } from './common/audio-recorder/audio/audio-comment-recorder/audio-comment-recorder';
import { DiscussionPromptComposerComponent } from './tasks/task-comment-composer/discussion-prompt-composer/discussion-prompt-composer.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { IntelligentDiscussionPlayerComponent, IntelligentDiscussionDialog } from './tasks/task-comments-viewer/intelligent-discussion-player/intelligent-discussion-player.component';
import { MicrophoneTesterComponent } from './common/audio-recorder/audio/microphone-tester/microphone-tester.component';
import { IntelligentDiscussionRecorderComponent } from './tasks/task-comments-viewer/intelligent-discussion-player/intelligent-discussion-recorder/intelligent-discussion-recorder.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import { DiscussionComment } from './api/models/discussion-comment';

@NgModule({
  // components
  declarations: [
    AboutDoubtfireModalContent,
    TaskCommentComposerComponent,
    AudioCommentRecorderComponent,
    MicrophoneTesterComponent,
    DiscussionPromptComposerComponent,
    IntelligentDiscussionPlayerComponent,
    IntelligentDiscussionDialog,
    IntelligentDiscussionRecorderComponent,
  ],
  // Module Imports
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ContenteditableModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatStepperModule,
    MatButtonModule,
    MatDividerModule,
    MatCheckboxModule,
    MatDialogModule,
    MatIconModule,
    MatProgressSpinnerModule,
    UpgradeModule,
    ReactiveFormsModule,
    PopoverModule.forRoot(),
    UIRouterUpgradeModule.forRoot(),
  ],
  // Services
  providers: [
    DiscussionComment,
    unitProvider,
    taskServiceProvider,
    analyticsServiceProvider,
    taskProvider,
    alertServiceProvider,
    CommentResourceServiceProvider,
    AudioRecorderProvider,
    AudioRecorderServiceProvider,
    DiscussionCommentServiceProvider,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }, AboutDoubtfireModal, AboutDoubtfireModalService, DoubtfireConstants],
  entryComponents: [AboutDoubtfireModalContent, TaskCommentComposerComponent, IntelligentDiscussionPlayerComponent, IntelligentDiscussionDialog]
})
export class DoubtfireAngularModule {
  constructor(private upgrade: UpgradeModule, private constants: DoubtfireConstants, private title: Title) {
    setTheme('bs3'); // or 'bs4'

    this.constants.ExternalName
      .subscribe(result => {
        this.title.setTitle(result);
      });
  }

  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, [DoubtfireAngularJSModule.name], { strictDi: false });
  }
}
