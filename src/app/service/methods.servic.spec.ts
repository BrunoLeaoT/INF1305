import { TestBed } from '@angular/core/testing';
import { Methods } from './methods';



describe('MethodsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Methods = TestBed.get(Methods);
    expect(service).toBeTruthy();
  });
});
