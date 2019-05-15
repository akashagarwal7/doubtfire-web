import { InjectionToken } from '@angular/core';

// Define an injection token for injecting globally into components.
// Use the name of the angularjs service as the injection token string
export const Unit = new InjectionToken('Unit');
export const Task = new InjectionToken('Task');
export const taskService = new InjectionToken('taskService');
export const analyticsService = new InjectionToken('analyticsService');
export const CommentResourceService = new InjectionToken('CommentResourceService');
export const alertService = new InjectionToken('AlertService');
export const audioRecorder = new InjectionToken('audioRecorder');
export const audioRecorderService = new InjectionToken('recorderService');
export const DiscussionCommentService = new InjectionToken('DiscussionComment');


// Define a provider for the above injection token...
// It will get the service from AngularJS via the factory
export const unitProvider = {
  provide: Unit,                          // When you need 'Unit' you
  useFactory: (i: any) => i.get('Unit'),  // get the AngularJS module
  deps: ['$injector']                     // using the upgrade injector.
};

export const taskServiceProvider = {
  provide: taskService,
  useFactory: (i: any) => i.get('taskService'),
  deps: ['$injector']
};

export const taskProvider = {
  provide: Task,
  useFactory: (i: any) => i.get('Task'),
  deps: ['$injector']
};

export const analyticsServiceProvider = {
  provide: analyticsService,
  useFactory: (i: any) => i.get('analyticsService'),
  deps: ['$injector']
};

export const alertServiceProvider = {
  provide: alertService,
  useFactory: (i: any) => i.get('alertService'),
  deps: ['$injector']
};

export const CommentResourceServiceProvider = {
  provide: CommentResourceService,
  useFactory: (i: any) => i.get('CommentResourceService'),
  deps: ['$injector']
};

export const AudioRecorderProvider = {
  provide: audioRecorder,
  useFactory: (i: any) => i.get('audioRecorder'),
  deps: ['$injector']
};

export const AudioRecorderServiceProvider = {
  provide: audioRecorderService,
  useFactory: (i: any) => i.get('recorderService'),
  deps: ['$injector']
};

export const DiscussionCommentServiceProvider = {
  provide: DiscussionCommentService,
  useFactory: (i: any) => i.get('DiscussionComment'),
  deps: ['$injector']
};
