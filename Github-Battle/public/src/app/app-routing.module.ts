import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RankingComponent } from './ranking/ranking.component';
import { ResultsComponent } from './results/results.component';
import { BattleComponent } from './battle/battle.component';

const routes: Routes = [
  { path: 'battle',component: BattleComponent },
  { path: 'ranking', component: RankingComponent },
  { path: 'results', component: ResultsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
