import { useJsonFetch } from "../../hocs/useJSONFetch"
export const DataReseve = () => {
    const[data, loading, error] = useJsonFetch('http://localhost:7070/data', {})
    return <div>
        {data && data.status}
    </div>
}

export const LoadingReseve = () => {
    const[data, loading, error] = useJsonFetch('http://localhost:7070/loading', {})
    return <div>
        {loading && 'загрузка'}
        {data && data.status}
    </div>
}

export const ErrorReseve = () => {
    const[data, loading, error] = useJsonFetch('http://localhost:7070/error', {})
    return <div>
        {error}
        {data && data.status}
    </div>
}