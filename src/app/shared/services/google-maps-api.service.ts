import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class GoogleMapsApiService {

  constructor(private httpClient: HttpClient) { }

}
