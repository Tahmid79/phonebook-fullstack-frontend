import { CanActivateFn } from '@angular/router';

export const alreadyAuthenticatedGuard: CanActivateFn = (route, state) => {
  return true;
};
