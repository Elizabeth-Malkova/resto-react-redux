export default class RestoService{
        _apiBase='http://localhost:3000';
    
    async getResource(url){
        const res = await fetch(`${this._apiBase}${url}`)
        
        if (!res.ok){
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }
        return await res.json();
    }
    async getMenuItems(){
        return await this.getResource(`/menu`)
    }
    async getMenuDish(id){
        return await this.getResource(`/menu/${id}`)
    }
    async postResource(data){
        const resPost = await fetch(`${this._apiBase}/orders `,{
            method:'POST',
            headers: {'content-type': 'application/json'},
            body:JSON.stringify(data),
        });

        if (!resPost.ok){
            throw new Error(`Could not fetch, received ${resPost.status}`);
        }
        return await resPost.json();
    };
};