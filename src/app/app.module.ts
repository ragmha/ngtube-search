import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { YoutbeSearchComponent } from './youtbe-search/youtbe-search.component';

import { YoutubeSearchInjectables } from './youtbe-search/youtube-search.injectables';
import { SearchBoxComponent } from './search-box/search-box.component';

@NgModule({
  declarations: [AppComponent, SearchResultComponent, YoutbeSearchComponent, SearchBoxComponent],
  imports: [BrowserModule, FormsModule, HttpModule],
  providers: [YoutubeSearchInjectables],
  bootstrap: [AppComponent],
})
export class AppModule {}
