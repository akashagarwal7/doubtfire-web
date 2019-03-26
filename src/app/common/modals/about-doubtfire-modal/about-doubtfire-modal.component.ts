//
// Modal to show Doubtfire version info
//
import { Injectable, Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { DoubtfireConstants } from 'src/app/config/constants/constants';

import { GithubProfile } from '../about-doubtfire-modal/GithubProfile';
import { AboutDoubtfireModalService } from '../about-doubtfire-modal/about-doubtfire-modal.service';
import { constants } from 'os';

/**
 * The about doubtfire modal service - used to create and show the modal
 */
@Injectable({
  providedIn: 'root',
})
export class AboutDoubtfireModal {
  constructor(
    private modal: BsModalService) {
  }

  public show() {
    this.modal.show(AboutDoubtfireModalContent)
  }
}

@Component({
  selector: 'about-modal-content',
  templateUrl: 'about-doubtfire-modal.tpl.html',
  providers: [AboutDoubtfireModalService]
})

// Export the class
// Should be the PascalCase of the name of the component/file
export class AboutDoubtfireModalContent implements OnInit {
  contributors: GithubProfile[];
  constructor(
    private aboutDoubtfireModalService: AboutDoubtfireModalService,
    private bsModalRef: BsModalRef,
    public constants: DoubtfireConstants) { }

  ngOnInit() {
    console.log(this.constants.externalName.externalName);
    this.contributors = <GithubProfile[]>this.constants.mainContributors.map(c => ({
      avatar_url: '/assets/images/person-unknown.gif',
      login: c
    }));
    this.getContributorDetails();
  }

  getContributorDetails() {
    this.contributors.forEach((item: GithubProfile, i) => {
      this.aboutDoubtfireModalService.GetGithubProfiles(item.login)
        .subscribe(response => {
          this.contributors[i] =
            {
              avatar_url: response.avatar_url,
              name: response.name,
              html_url: response.html_url,
              login: response.login
            }
        })
    });
  }

  // method to hide the modal
  public hide() {
    this.bsModalRef.hide();
  }
}
