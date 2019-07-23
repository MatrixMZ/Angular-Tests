import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DataService } from './data.service';
import { Post } from 'src/app/models/post.model';

describe('DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService]
    });

    service = TestBed.get(DataService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrive posts from the API', () => {
    const dummyPosts: Post[] = [
      { userId: '1', id: 1, body: 'Http Client', title: 'Testing Angular Service' },
      { userId: '2', id: 2, body: 'Hello World2', title: 'Testing Angular Services'}
    ];

    service.getPosts().subscribe(posts => {
        expect(posts.length).toBe(2);
        expect(posts).toEqual(dummyPosts);
    });

    const request = httpMock.expectOne( `${service.ROOT_URl}/posts`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyPosts);

  });


});
