import { Component } from '@angular/core';
import { DnaHelixComponent } from "../../components/dna-helix/dna-helix.component";

@Component({
  selector: 'app-home',
  imports: [DnaHelixComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
