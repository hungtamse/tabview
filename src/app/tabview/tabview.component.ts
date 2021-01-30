import { Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { PanelComponent } from '../panel/panel.component';

@Component({
  selector: 'app-tabview',
  templateUrl: './tabview.component.html',
  styleUrls: ['./tabview.component.scss']
})
export class TabviewComponent implements OnInit {
  @ContentChildren(PanelComponent) tabview: QueryList<PanelComponent>;

  constructor() { }

  ngAfterContentInit() {
    let activePanel = this.tabview.filter(panel => panel.active);

    if (activePanel.length === 0) {
      this.selectedPanel(this.tabview.first);
    }
  }

  selectedPanel(panel: PanelComponent) {
    this.tabview.toArray().forEach(panel => (panel.active = false));

    panel.active = true;
  }

  ngOnInit(): void {
  }

}
