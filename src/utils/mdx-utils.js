import { api } from '../../services/api'

export const getPosts = async () => {
    const {data} = await api.get('/posts'); 

    if(data){
        return data;
    }

    return ['Não há nenhum post ainda']
}

export const getPostBySlug = async (id) => {
    
    const { data } = await api.get(`/post?id=eq.${id}`)
        .from('posts')
        .select('title')
        .eq('title', 'O primeiro post')

    return data;
}