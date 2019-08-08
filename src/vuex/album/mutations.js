export default {
    SETALBUM(state, {payload: {page, lists, type, done}}) {
        state[type].lists.push([]);
        state[type].done = done;
        lists.forEach((list, index) => {
            let sList = state[type].lists;
            if(list.slot) sList.push(list);
            else {
                if(sList[sList.length-1].length === 2 || isNaN(sList[sList.length - 1].length)) {
                    sList.push([]);
                }
                if(!isNaN(sList[sList.length-1].length))
                    sList[sList.length-1].push(list);
            }
        });
    },
    SETHOME(state, {payload: {obj}}) {
        state.home.lists = obj;
    },
    CLEARLIST(state, {payload: {type}}) {
        state[type].lists = [];
    },
    NOALBUMDATA(state, {payload: {type}}) {
        console.log(type);
        state[type].done = false;
    },
};