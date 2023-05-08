export const getData = async <T>(url: string): Promise<T> =>{
    const fetchData = await fetch(url)
    return  fetchData.json()
}