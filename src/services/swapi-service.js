// https://swapi.co

export default class SwapiApiService {
    _baseRoute = 'https://swapi.co/api';

    getPeople = async () => {
        const people = await this.getResourse("/people/");
        return people.results.map(this._transformPerson);
    }

    getPerson = async (personId) => {
        const person = await this.getResourse(`/people/${personId}`);
        return this._transformPerson(person);
    }

    getPlanets = async () => {
        const planets = await this.getResourse(`/planets/`);

        return planets.results.map(this._transformPlanet);
    }

    getPlanet = async (planetId) => {
        const planet = await this.getResourse(`/planets/${planetId}`);
        return this._transformPlanet(planet);
    }

    getStarships = async () => {
        const starships = await this.getResourse(`/starships/`);

        return starships.results.map(this._transformStarship);
    }

    getStarship = async (starshipId) => {
        const starship = await this.getResourse(`/starships/${starshipId}`);

        return this._transformStarship(starship.results);
    }

    getResourse = async (url) => {
        const requesterResource = `${this._baseRoute}${url}`
        const result = await fetch(requesterResource);

        if (!result.ok) {
            throw new Error(`Could not fetch ${requesterResource}, error ${result.status}`);
        }

        return await result.json();
    }

    _extractId (item) {
        const idRegExp = /\/([0-9]*)\/$/;

        return item.url.match(idRegExp)[1];
    }

    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            climate: planet.climate,
            diameter: planet.diameter
        }
    }

    _transformStarship = (starship) => {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            maxSpeed: starship.max_atmosphering_speed,
            MGLT: starship.MGLT
        }
    }

    _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        }
    }
}