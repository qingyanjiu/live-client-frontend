import { TestBed, inject } from '@angular/core/testing';

import { OrderFlowService } from './order-flow.service';

describe('OrderFlowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderFlowService]
    });
  });

  it('should be created', inject([OrderFlowService], (service: OrderFlowService) => {
    expect(service).toBeTruthy();
  }));
});
