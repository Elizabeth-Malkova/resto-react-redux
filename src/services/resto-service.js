export default class RestoServise{
    constructor(){
        this._apiBase='http://localhost:3000/';
    }
    getMenuItems = async()=>{
        const res = await fetch(`${this._apiBase}menu`)
        if (!res.ok){
            throw new Error('Server Error');
        }
        return res.json();
    }
}
