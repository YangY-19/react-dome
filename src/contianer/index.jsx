// import React, { Component } from 'react'
// import Derived from '../components/getDerivedStateFromProps'
// class Home extends Component {
//     constructor() {
//         super()
//         this.state = {
//             num: 1
//         }
//     }
//     add = () => {
//         const { num: number } = this.state
//         this.setState({
//             num: number + 1  
//         })
//     }

//     oneFun = (indexNum) => {
//       const {  num } = this.state
//       alert(`derNum:${indexNum}----num:${num}`)
//     }

//     render() {
//         const { num } = this.state
//         return (
//             <div>
//             {num}
//             <button onClick={this.add}> +1 </button>
//             <Derived indexNum={num} oneFun={this.oneFun}/>
//             </div>
//         )
//     }
// }

// export default Home
