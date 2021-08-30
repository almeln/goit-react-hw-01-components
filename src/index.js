// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root'),
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react';
// import ReactDOM from 'react-dom';

const element = React.createElement('div', {
  a: 5,
  b: 10,
  children: 'Hello world',
});

console.log(element);

// ReactDOM.render(element, document.querySelector('#root'));

// const data = {
//   "name": "Jacques Gluke",
//   "tag": "jgluke",
//   "location": "Ocho Rios, Jamaica",
//   "avatar": "https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg",
//   "stats": {
//     "followers": 5603,
//     "views": 4827,
//     "likes": 1308
//   }
// };

// const profile = {
//   <div>
//     <div>
//       <img
//         src={data.avatar}
//         alt={data.name}
//       />
//       <p>{data.name}</p>
//       <p>{data.tag}</p>
//       <p>{data.location}</p>
//     </div>

//     <ul>
//       <li>
//         <span>Followers</span>
//         <span>{data.ststs.followers}</span>
//       </li>
//       <li>
//         <span>Views</span>
//         <span>{data.ststs.views}</span>
//       </li>
//       <li>
//         <span>Likes</span>
//         <span>{data.ststs.likes}</span>
//       </li>
//     </ul>
//   </div>
// };

// ReactDOM.render(profile, document.querySelector('#root'));
