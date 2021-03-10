import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { CounterOutputComponent } from '../counter/counter-output/counter-output.component';
import { CounterButtonsComponent } from '../counter/counter-buttons/counter-buttons.component';
import {CustomCounterInputComponent} from '../counter/custom-counter-input/custom-counter-input.component';
import { FormsModule } from '@angular/forms';

const routes :Routes = [
    {
        path: '',
        component: CounterComponent,
      }, 
]

@NgModule({
    declarations : [ CounterComponent,
        CounterOutputComponent,
        CounterButtonsComponent,
        CustomCounterInputComponent],
    imports : [CommonModule,FormsModule,RouterModule.forChild(routes)],
    })

export class CounterModule {}

