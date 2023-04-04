import { instance } from "../config/axiosConfig";


async function getAllBooks(){
    try{
        const response = await instance.get("/books")
        return response.data
    } catch (error) {
        throw new Error(error.response.data.message || "Ada yang Salah")
    }
}

async function registerPost(payload){
    try{
        const response = await instance.post("/register",payload)
        return response.data
    } catch (error) {
        throw new Error(error.response.data.message || "Ada yang Salah")
    }
}

async function loginPost(payload){
    try{
        const response = await instance.post("/login",payload)
        return response.data
    } catch (error) {
        throw new Error(error.response.data.message || "Ada yang Salah")
    }
}

async function booksPost(payload){
    try{
        const response = await instance.post("/books",payload,{
            headers: {"Content-Type" : "multipart/form-data"}
        })
        return response.data
    } catch (error) {
        throw new Error(error.response.data.message || "Ada yang Salah")
    }
}

async function booksPut(id,payload){
    try{
        const response = await instance.put(`/books/${id}`,payload)
        console.log(response)
        return response.data
    } catch (error) {
        console.log(error.response.data.message)
        throw new Error(error.response.data.message || "Ada yang Salah")
    }
}

async function booksDelete(id){
    try{
        const response = await instance.delete(`/books/${id}`)
        return response.data
    } catch (error) {
        throw new Error(error.response.data.message || "Ada yang Salah")
    }
}
async function booksGetById(id){
    try{
        const response = await instance.get(`/books/${id}`)
        return response.data
    } catch (error) {
        throw new Error(error.response.data.message || "Ada yang Salah")
    }
}

export {getAllBooks , registerPost ,loginPost ,booksPost , booksGetById , booksDelete ,booksPut}