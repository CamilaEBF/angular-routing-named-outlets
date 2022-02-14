import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';

@Injectable()
export class AppEffects {
  constructor(protected actions$: Actions, private router: Router) {}

  InitEffect = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(DxpDiagramActions.Types.ContextMenuClicked),
        tap(
          (action: ActionType<typeof DxpDiagramActions.ContextMenuClicked>) => {
            if (action.itemId === 'dxp_defaults_edit') {
              this.router.navigate([
                { outlets: { routerToOther: ['other', '15'] } },
              ]);
            }
          }
        )
      );
    },
    { dispatch: false }
  );
}
