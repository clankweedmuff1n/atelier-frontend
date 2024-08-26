import {Routes} from '@angular/router';
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {RegistrationPageComponent} from "./pages/registration-page/registration-page.component";
import {AddProductPageComponent} from "./pages/add-product-page/add-product-page.component";
import {ProductPageComponent} from "./pages/product-page/product-page.component";
import {AboutUsPageComponent} from "./pages/about-us-page/about-us-page.component";
import {ProfilePageComponent} from "./pages/profile-page/profile-page.component";
import {VerificationPageComponent} from "./pages/verification-page/verification-page.component";
import {
  AccessForAdmin,
  AccessForUnverifiedUsersGuard,
  AccessForVerifiedUsersGuard,
  RestrictedAccessForAuthorizedUsersGuard
} from "./store/auth/AuthGuard";
import {ShopPageComponent} from "./pages/shop-page/shop-page.component";
import {WishlistPageComponent} from "./pages/wishlist-page/wishlist-page.component";

export const routes: Routes = [
  {
    path: "",
    component: MainPageComponent,
  },
  {
    path: "profile/login",
    canActivate: [RestrictedAccessForAuthorizedUsersGuard],
    component: LoginPageComponent,
  },
  {
    path: "profile/registration",
    canActivate: [RestrictedAccessForAuthorizedUsersGuard],
    component: RegistrationPageComponent,
  },
  {
    path: "profile/verification",
    canActivate: [AccessForUnverifiedUsersGuard],
    component: VerificationPageComponent,
  },
  {
    path: "profile/add-product",
    canActivate: [AccessForAdmin],
    component: AddProductPageComponent,
  },
  {
    path: "shop",
    component: ShopPageComponent,
  },
  {
    path: "wishlist",
    canActivate: [AccessForVerifiedUsersGuard],
    component: WishlistPageComponent,
  },
  {
    path: "products/:link",
    component: ProductPageComponent,
  },
  {
    path: "about-us",
    component: AboutUsPageComponent,
  },
  {
    path: "profile",
    canActivate: [AccessForVerifiedUsersGuard],
    component: ProfilePageComponent,
  },
];
