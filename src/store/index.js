import { makeObservable, observable, action, runInAction } from "mobx";
import { parseData } from "../utils/parse-data";

class Store {
    loading;
    data;
    
    constructor() {
        this.loading = true;
        this.data = [];
        makeObservable(this, {
            loading: observable,
            data: observable,
            init: action
        });
    }

    async init() {
        const response = await fetch("/data.json");
        const data = parseData(await response.json());
        runInAction(() => {
            this.loading = false;
            this.data = data;
        })
    } 
}

export default Store;