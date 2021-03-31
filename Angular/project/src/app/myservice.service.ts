
import { Injectable } from '@angular/core';
import { Character } from './character';

@Injectable()
export class MyService {
    giveSomething(): string {
        return 'hello world';
    }

    fetch(): Character[] {
        return [{ name: 'luke' }, { name: 'jack' }];
    }
}