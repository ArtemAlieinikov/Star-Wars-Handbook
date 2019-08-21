// https://swapi.co

export default class SwapiApiService {
    _baseRoute = 'https://swapi.co/api';

    async getPeople() {
        return this.getResourse("/people/");
    }

    async getPerson(personId) {
        return this.getResourse(`/people/${personId}`);
    }

    async getPlanets() {
        return this.getResourse(`/planets/`);
    }

    async getPlanet(planetId) {
        return this.getResourse(`/planets/${planetId}`);
    }

    async getStarships() {
        return this.getResourse(`/starships/`);
    }

    async getStarship(starshipId) {
        return this.getResourse(`/starships/${starshipId}`);
    }

    async getResourse(url) {
        const requesterResource = `${this._baseRoute}${url}`
        const result = await fetch(requesterResource);

        if (!result.ok) {
            throw new Error(`Could not fetch ${requesterResource}, error ${result.status}`);
        }

        return await result.json();
    }
}