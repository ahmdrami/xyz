import { TestBed, inject, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ChartsService } from './charts.service';

describe('ChartsService', () => {
    let injector: TestBed;
    let service: ChartsService;
    let httpMock: HttpTestingController;
    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [ChartsService]
        });
    });

    beforeEach(() => {
        injector = getTestBed();
        service = injector.get(ChartsService);
        httpMock = injector.get(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it(
        'should be created',
        inject([ChartsService], (chartSvc: ChartsService) => {
            expect(chartSvc).toBeTruthy();
        })
    );

    describe('#getData', () => {
        it('should return an Observable<any[]>', () => {
            const dummydata = [{ id: 1, login: 'John' }];

            service.getData('scatter').subscribe(resp => {
                expect(resp.length).toBe(1);
                expect(resp).toEqual(dummydata);
            });

            const req = httpMock.expectOne(`${service.apiUrl}scatter`);
            expect(req.request.method).toBe('GET');
            req.flush(dummydata);
        });
    });
});
