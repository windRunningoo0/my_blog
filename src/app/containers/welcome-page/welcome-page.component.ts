import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {

  userInfo: any
  constructor(private userService: UserService, private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.userService.getUserInfo(this.activedRoute.snapshot.params.userId)
      .subscribe(res => {
        // console.log(res)
        this.userInfo = res.data;
      })
      
  }

}
