// // Breadcrumb.js
import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = () => {
  const pathSegments = window.location.pathname.split('/');
  const breadcrumbs = [];

  for (let i = 1; i <= pathSegments.length; i++) {
    const path = pathSegments.slice(0, i).join('/');
    const label = pathSegments[i - 1];

    breadcrumbs.push(
      <React.Fragment key={path}>
        <Link to={path}>{label}</Link>
        {i < pathSegments.length && <span> + </span>}
      </React.Fragment>
    );
  }

  return (
    <div className="breadcrumb">
      {breadcrumbs}
    </div>
  );
};

export default Breadcrumb;
// import React from 'react';
// import { Link, useMatch } from 'react-router-dom';

// const Breadcrumb = () => {
//   const matches = useMatch('/resume');
//   //const history = useHistory();
//   //const pathSegments = matches.url.split('/').filter(Boolean);

//   matches.map((match, index) => {
//     const path = match.pathname;
//     const label = match.params.label || match.pathname.split('/').slice(-1)[0];
//   })

//   return (
//     <div className="breadcrumb">
    
//       return (
//         <React.Fragment key={path}>
//           <Link to={path}>{label}</Link>
//           {index < matches.length - 1 && <span> &gt; </span>}
//         </React.Fragment>
//       );
//     })
//   </div>
//     // <div>
//     //   {pathSegments.map((segment, index) => (
//     //     <React.Fragment key={segment}>
//     //       <Link to={`/${pathSegments.slice(0, index + 1).join('/')}`}>{segment}</Link>
//     //       {index < pathSegments.length - 1 && <span> / </span>}
//     //     </React.Fragment>
//     //   ))}
//     // </div>
//   );
// };

// export default Breadcrumb
