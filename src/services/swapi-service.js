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
        const planets =  this.getResourse(`/planets/`);

        return planets.result.map(this._transformPlanet);
    }

    async getPlanet(planetId) {
        const planet = await this.getResourse(`/planets/${planetId}`);
        return this._transformPlanet(planet);
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

    _extractId(item) {
        const idRegExp = /\/([0-9]*)\/$/;

        let a =  item.url.match(idRegExp)[1];
        return a;
    }

    _transformPlanet(planet) {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            climate: planet.climate,
            diameter: planet.diameter
        }
    }
}