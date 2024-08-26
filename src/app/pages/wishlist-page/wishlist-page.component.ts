import {Component} from '@angular/core';
import {HeaderComponent} from "../../components/header/header.component";
import {FooterComponent} from "../../components/footer/footer.component";
import {AuthState} from "../../store/auth/state/Auth.state";
import {Store} from "@ngxs/store";
import {User} from "../../models/User";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-wishlist-page',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    NgIf
  ],
  template: `
    <div class="h-[100vh] flex flex-col justify-between">
      <app-header/>
      <section class="w-full flex flex-col items-center justify-center">
        <h2 class="uppercase text-2xl my-5">Wishlist</h2>
        <div class="flex flex-col items-center justify-center" *ngIf="user?.wishlist?.length === 0">
          <p>Your wishlist is empty.</p>
          <a
            href="/shop"
            class="uppercase p-3 w-fit bg-button-header-black text-button-header-white font-medium my-3">
            Discover more
          </a>
        </div>
      </section>
      <app-footer/>
    </div>
  `
})
export class WishlistPageComponent {
  user: User | null;

  constructor(private store: Store) {
    this.user = this.store.selectSnapshot(AuthState.user);
    console.log(this.user?.wishlist)
  }

}
