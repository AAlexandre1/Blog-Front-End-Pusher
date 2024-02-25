import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../../shared/models/blog';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
	providedIn: 'root',
})
export class BlogService {
	constructor(private http: HttpClient) {}

	getBlogs(): Observable<Blog[]> {
		return this.http.get<Blog[]>(`${environment.apiUrl}/blogs`);
	}
}