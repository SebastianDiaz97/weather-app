export type SearchForm = {
    city: string;
};

export type WeatherData = {
    address: string
    resolvedAddress: string
    days: WeatherDay[]
}

type WeatherDay = {
    datetime: string,
    tempmax: number,
    tempmin: number,
    precip: number,
    precipprob: number,
    conditions: string
}