import {create} from 'zustand';


const initalState = {

}

const useStore = create(()=>({
    ...initalState
}));
export default useStore;