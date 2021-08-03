

export const state = {

  libararyArea : 'initArea',
  libraryName : 'initName',
  libraryList : [
                  {name : "서울1", area :"서울"},
                  {name : "서울2", area :"서울"},
                  {name : "서울3", area :"서울"},
                  {name : "대전1", area :"대전"},
                  {name : "대전2", area :"대전"},
                  {name : "대전3", area :"대전"},



                ]


}

export const getters =
{

    getLibraryArea : state => state.libararyArea,
    getLibraryName : state => state.libraryName,
    getLibraryList : steat=>state.libraryList
  // getSeatData : state => state.layout,
  // getColNum : state => state.colNum,
  // getIndex : state => state.index


}



export const mutations ={

  updateLibraryList(state,newList)
  {
    state.libraryList = newList
  },

  updateLibraryArea(state,area)
  {
    state.libararyArea=area


  },
  updateLibraryName(state,name)
  {
    state.libraryName = name


  }

  // updateSeat(state,newLayOut)
  //   {
  //     state.layout = newLayOut;


  //   }
  //   ,
  //   updateColnum(state,newColNum)
  //   {
  //     state.colNum = newColNum;

  //   }
  //   ,
  //   updateIndex(state,newIndex)
  //   {

  //     state.index = newIndex;

  //   }



}

export const actions ={



}


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
