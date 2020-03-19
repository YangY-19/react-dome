import React, { Component } from 'react';

class Derived extends Component {
   constructor() {
       super()
       this.state = {
          derNum: 1
       }
   }

   static getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.indexNum !== prevState.indexNum) {
        return {
            indexNum: nextProps.indexNum, 
            oneFun: nextProps.oneFun
        }
      }
      return null
   }

   render() {
       const {indexNum, oneFun} = this.state
       return (
           <div>Derived: {indexNum}
              <div onClick={oneFun(indexNum)}>第三年及</div>
           </div>
       )
   }
}

export default Derived