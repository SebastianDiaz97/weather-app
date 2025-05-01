import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { SearchForm } from "../types";
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;


export default function useHttpData<T>( location:SearchForm) {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location.city}?key=${apiKey}`;
    return useQuery<T>({
        enabled: !!location.city,
        queryKey: ["weatherData", location],
        queryFn: async () => await axios.get<T>(url).then((response) => response.data),
    });
}