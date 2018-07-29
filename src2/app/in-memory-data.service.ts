import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
        { id: 1, name: 'Professor X' },
        { id: 2, name: 'Wolverine' },
        { id: 3, name: 'Cyclops' },
        { id: 4, name: 'Rogue' },
        { id: 5, name: 'Storm' },
        { id: 6, name: 'Iceman' },
        { id: 7, name: 'Magneto' },
        { id: 8, name: 'Mystique' }
    ];
    return {heroes};
  }
}