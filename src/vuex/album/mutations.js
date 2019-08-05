export default {
    SETALBUM(state, {payload: {page, lists, type}}) {
        state[type].lists.push([]);
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
};