import {Component} from '@angular/core';
import {Store} from "@ngxs/store";
import {User} from "../../models/User";
import {AuthState, Logout} from "../../store/auth/state/Auth.state";
import {NgIf} from "@angular/common";
import {RoleEnum} from "../../models/enums/Role.enum";
import {HeaderComponent} from "../../components/header/header.component";
import {FooterComponent} from "../../components/footer/footer.component";
import {DiscountElementComponent} from "../../utilities/discount-element/discount-element.component";

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [
    NgIf,
    HeaderComponent,
    FooterComponent,
    DiscountElementComponent,
  ],
  template: `
    <div class="h-[100vh] flex flex-col justify-between">
      <app-header/>
      <div class="w-full flex justify-center">
        <a
          (click)="logout()"
          class="p-4 w-fit cursor-pointer underline underline-offset-4">
          Log out
        </a>
        <a
          href="/"
          class="p-[16px] w-fit underline underline-offset-4">
          Return to store
        </a>
      </div>
      <h2 class="uppercase text-center text-2xl">My account</h2>
      <h2 class="text-center mt-4">{{ user?.first_name }} {{ user?.last_name }}</h2>

      <div *ngIf="user?.role === RoleEnum.ADMIN">
        <section class="flex w-full justify-center">
          <a
            href="profile/add-product"
            class="uppercase p-[16px] w-fit bg-button-header-black text-button-header-white rounded-md font-medium my-6">
            Создать товар
          </a>
        </section>
      </div>
      <div *ngIf="user?.role === RoleEnum.USER">
        Content to render to User
      </div>
      <button (click)="logout()">LOGOUT</button>
      <app-discount-element/>
      <app-footer/>
    </div>
  `,
})
export class ProfilePageComponent {
  user: User | null;

  logout() {
    this.store.dispatch(new Logout())
  }

  constructor(private store: Store) {
    this.user = this.store.selectSnapshot(AuthState.user);
  }

  protected readonly RoleEnum = RoleEnum;
}
