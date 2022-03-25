
// const data = useSelector( state => state.state)

// <div className="test">
//     <div className="container">
//         <div className="test-rectangle">
//             <div className="test-rectangle-1"/>
//             <div className="test-text-1">
//                 <p>15</p>
//                 <p className="test-text">Бизнес аналитик</p>
//                 <p>1/20</p>
//             </div>
//             {
//                 state.slice(0,1).map(el => (
//                     <div>
//                         <div key={el.id}>
//                             <h1 className="numb-1">{el.numb}</h1>
//                             <h1 className="numb-1">{el.answer}</h1>
//                             <h1 className="numb">{el.question}</h1>
//                             {
//                                 el.options.map(el =>(
//                                     <div>
//                                         <div>
//                                             <h1 className="mini">{el.mini}</h1>
//                                             <input className="input" name="browser" value="firefox" type="radio"/>
//                                         </div>
//                                         <p className="name my-5">{el.name}</p>
//                                     </div>
//                                 ))
//                             }
//                         </div>
//                     </div>
//                   ))
//             }
//         </div>
//         <div className="buttons">
//             <button className="test-but">предыдущий</button>
//             <button className="test-but-1">Следуший</button>
//         </div>
//     </div>
// </div>